import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle2 } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { photographerInfo } from '@/data/photographer';

const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(100, { message: 'Name must be less than 100 characters' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Please enter a valid email address' })
    .max(255, { message: 'Email must be less than 255 characters' }),
  projectType: z.enum(['web-app', 'ai-ml', 'collaboration'], {
    required_error: 'Please select a project type'
  }),
  message: z
    .string()
    .trim()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(1000, { message: 'Message must be less than 1000 characters' })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionMode, setSubmissionMode] = useState<'form' | 'mailto' | null>(null);

  const rawFormspreeConfig = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim();
  const formspreeEndpoint = rawFormspreeConfig
    ? rawFormspreeConfig.startsWith('http')
      ? rawFormspreeConfig
      : `https://formspree.io/f/${rawFormspreeConfig.replace(/^f\//, '')}`
    : '';
  const hasConfiguredEndpoint = Boolean(
    formspreeEndpoint && !rawFormspreeConfig?.includes('YOUR_FORM_ID')
  );

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      projectType: undefined,
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      if (!hasConfiguredEndpoint) {
        const subject = encodeURIComponent(
          `Portfolio inquiry (${data.projectType}) from ${data.name}`
        );
        const body = encodeURIComponent(
          [
            `Name: ${data.name}`,
            `Email: ${data.email}`,
            `Inquiry type: ${data.projectType}`,
            '',
            data.message
          ].join('\n')
        );

        window.location.href = `mailto:${photographerInfo.email}?subject=${subject}&body=${body}`;
        setSubmissionMode('mailto');
        setIsSuccess(true);
        form.reset();

        setTimeout(() => {
          setIsSuccess(false);
          setSubmissionMode(null);
        }, 5000);

        return;
      }

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          projectType: data.projectType,
          message: data.message,
          _subject: `New ${data.projectType} inquiry from ${data.name}`
        })
      });

      if (!response.ok) {
        let message = 'Failed to send message. Please try again.';

        try {
          const errorPayload = await response.json();
          const formspreeMessage =
            errorPayload?.errors?.[0]?.message || errorPayload?.error || errorPayload?.message;

          if (formspreeMessage) {
            message = String(formspreeMessage);
          }
        } catch {
          // Keep the default message when response is not JSON.
        }

        throw new Error(message);
      }

      setSubmissionMode('form');
      setIsSuccess(true);
      form.reset();

      setTimeout(() => {
        setIsSuccess(false);
        setSubmissionMode(null);
      }, 5000);
    } catch (error) {
      form.setError('root', {
        message:
          error instanceof Error
            ? error.message
            : 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        className="bg-accent border border-border rounded-sm p-8 text-center space-y-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          <CheckCircle2 className="size-16 mx-auto text-green-600 dark:text-green-400" />
        </motion.div>
        <h3 className="text-2xl font-light tracking-wide">
          {submissionMode === 'mailto' ? 'Email Draft Opened' : 'Message Sent'}
        </h3>
        <p className="text-muted-foreground font-light leading-relaxed">
          {submissionMode === 'mailto'
            ? 'Your email app has been opened with a prefilled draft. Please click Send there to complete your inquiry.'
            : 'Thank you for reaching out. I will get back to you soon.'}
        </p>
      </motion.div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {!hasConfiguredEndpoint && (
          <div className="rounded-sm border border-border bg-accent/30 p-4 text-sm font-light leading-relaxed text-muted-foreground">
            Direct form delivery is not configured yet. Clicking submit will open your email app with a prefilled draft.
          </div>
        )}

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-light tracking-wide">Name</FormLabel>
              <FormControl>
                <Input placeholder="Your full name" className="font-light" {...field} />
              </FormControl>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-light tracking-wide">Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  className="font-light"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="projectType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-light tracking-wide">Inquiry Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="font-light">
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-popover z-50">
                  <SelectItem value="web-app" className="font-light">
                    Web Development
                  </SelectItem>
                  <SelectItem value="ai-ml" className="font-light">
                    AI/ML Project
                  </SelectItem>
                  <SelectItem value="collaboration" className="font-light">
                    Collaboration
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-light tracking-wide">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell me about your requirement..."
                  className="min-h-32 font-light resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />

        {form.formState.errors.root && (
          <div className="text-sm text-destructive font-light">{form.formState.errors.root.message}</div>
        )}

        <Button
          type="submit"
          className="w-full py-6 text-base font-light tracking-wide"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 size-5 animate-spin" />
              Sending...
            </>
          ) : (
            hasConfiguredEndpoint ? 'Send Message' : 'Open Email Draft'
          )}
        </Button>
      </form>
    </Form>
  );
}
