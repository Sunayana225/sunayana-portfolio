import clsx from "clsx";

export function ChevronRightIcon({ className, ...props }) {
  return (
    <svg
      viewBox="0 0 5 8"
      fill="none"
      className={clsx(className, "h-2 shrink-0")}
      {...props}
    >
      <path
        d="M1 7.5L4 4.5L1 1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
