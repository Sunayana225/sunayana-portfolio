import { clsx } from "clsx";

export function Marker({ time, title, className, children, ...props }) {
  return (
    <div id={time} className={clsx(className, "flex gap-6")} {...props}>
      <div>
        <button type="button" className="font-semibold">
          {time}
        </button>
      </div>
      <div className="m-0!">
        <div className="mb-4 font-semibold">
          <a href={`#${time}`}>{title}</a>
        </div>
        {children}
      </div>
    </div>
  );
}
