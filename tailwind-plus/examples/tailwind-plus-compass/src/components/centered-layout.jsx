import { Navbar } from "./navbar";

export function CenteredPageLayout({ breadcrumbs, children }) {
  return (
    <div className="pb-30">
      <Navbar>
        <div className="min-w-0">{breadcrumbs}</div>
      </Navbar>
      <div className="px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">{children}</div>
      </div>
    </div>
  );
}
