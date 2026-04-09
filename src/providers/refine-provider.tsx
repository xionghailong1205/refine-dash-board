"use client";

import { Refine } from "@refinedev/core";
import routerProvider from "@refinedev/nextjs-router";
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Package,
} from "lucide-react";
import { mockDataProvider } from "@/data/data-provider";

export function RefineProvider({ children }: { children: React.ReactNode }) {
  return (
    <Refine
      dataProvider={mockDataProvider}
      routerProvider={routerProvider}
      resources={[
        {
          name: "dashboard",
          list: "/dashboard",
          meta: {
            label: "概览",
            icon: <LayoutDashboard className="h-4 w-4" />,
          },
        },
        {
          name: "users",
          list: "/dashboard/users",
          meta: {
            label: "用户管理",
            icon: <Users className="h-4 w-4" />,
          },
        },
        {
          name: "orders",
          list: "/dashboard/orders",
          meta: {
            label: "订单管理",
            icon: <ShoppingCart className="h-4 w-4" />,
          },
        },
        {
          name: "products",
          list: "/dashboard/products",
          meta: {
            label: "产品管理",
            icon: <Package className="h-4 w-4" />,
          },
        },
      ]}
      options={{
        syncWithLocation: true,
        disableTelemetry: true,
      }}
    >
      {children}
    </Refine>
  );
}
