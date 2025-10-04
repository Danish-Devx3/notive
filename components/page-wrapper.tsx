import React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "./ui/sidebar";
import LogoutButton from "./logout-btn";
import { ModeToggle } from "./mode-toggle";

interface PageWrapperProps {
  children: React.ReactNode;
  breadcrumbs: {
    label: string;
    url: string;
  }[];
}

export default function PageWrapper({
  children,
  breadcrumbs,
}: PageWrapperProps) {
  return (
    <div className="flex flex-col gap-4 ">
      <header className="flex items-center gap-4 p-4 border-b">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <SidebarTrigger />
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumbs.map((breadcrumb, index) => (
                  <React.Fragment key={index}>
                    <BreadcrumbItem>
                      <BreadcrumbLink href={breadcrumb.url}>
                        {breadcrumb.label}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="flex items-center gap-4">
            <ModeToggle />
            <LogoutButton />
          </div>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
    </div>
  );
}
