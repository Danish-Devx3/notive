import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Sidebar } from "lucide-react";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1">{children}</main>
      </SidebarProvider>
    </div>
  );
}
