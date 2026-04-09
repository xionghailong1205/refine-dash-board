"use client";

import { Suspense } from "react";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { RefineProvider } from "@/providers/refine-provider";

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-full min-h-screen">
      <p className="text-muted-foreground">加载中...</p>
    </div>
  );
}

function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <RefineProvider>
      <div className="flex h-screen overflow-hidden">
        <DashboardSidebar />
        <main className="flex-1 overflow-auto bg-background">
          <div className="p-6">{children}</div>
        </main>
      </div>
    </RefineProvider>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <DashboardShell>{children}</DashboardShell>
    </Suspense>
  );
}
