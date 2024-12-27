// src/router/rootRoute.tsx
import React from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Flex } from "@radix-ui/themes";

export const rootRoute = createRootRoute({
  component: function RootLayout() {
    return (
      <Flex style={{ minHeight: "100vh" }}>
        <Outlet />
      </Flex>
    );
  },
});
