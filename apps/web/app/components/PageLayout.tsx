import Link from "next/link";
import Sidebar from "./Sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type Crumb = { label: string; href: string };

export default function PageLayout({
  title,
  breadcrumbs = [],
  children,
  hideSidebar = false,
}: {
  title: string;
  breadcrumbs?: Crumb[];
  children: React.ReactNode;
  hideSidebar?: boolean;
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
      <Breadcrumb className="mb-3">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild><Link href="/">Home</Link></BreadcrumbLink>
          </BreadcrumbItem>
          {breadcrumbs.map((b, i) => (
            <span key={b.href} className="contents">
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {i === breadcrumbs.length - 1 ? (
                  <BreadcrumbPage>{b.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild><Link href={b.href}>{b.label}</Link></BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </span>
          ))}
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-1.5">{title}</h1>
      <div className="h-[3px] bg-[var(--color-maroon)] w-12 mb-4 rounded-full" />

      <div className={"flex flex-col " + (hideSidebar ? "" : "lg:flex-row") + " gap-5 items-start"}>
        <div className="flex-1 min-w-0">{children}</div>
        {!hideSidebar && <Sidebar />}
      </div>
    </div>
  );
}
