import { SidebarLayout } from "@/components/sidebar-layout";
import { getModules } from "@/data/lessons";

export default function CourseLayout({ children }) {
  return <SidebarLayout modules={getModules()}>{children}</SidebarLayout>;
}
