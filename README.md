# Sunayana Yakkala — Portfolio (deployable repo)

This folder is the deployable copy of the portfolio used for Vercel deployments.

Local development

```bash
cd vercel_fix_repo
npm install
npm run dev
```

Build for production

```bash
npm run build
```

Deployment

Pushes to this repo trigger Vercel deployments (if configured). Place files you want served at the site root into `public/` before pushing.

Tech stack

- Vite + React
- TypeScript
- Tailwind CSS

# ./tailwind-plus folder:

The `tailwind-plus` folder contains Tailwind components and themes used as inspiration for the project. Do not remove it unless you intend to.
