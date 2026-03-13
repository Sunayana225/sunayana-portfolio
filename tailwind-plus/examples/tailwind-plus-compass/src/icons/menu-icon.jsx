import clsx from "clsx";

export function MenuIcon({ className, ...props }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={clsx(className, "h-4 shrink-0")}
      {...props}
    >
      <circle cx="8" cy="3" r="1" />
      <circle cx="8" cy="8" r="1" />
      <circle cx="8" cy="13" r="1" />
    </svg>
  );
}
