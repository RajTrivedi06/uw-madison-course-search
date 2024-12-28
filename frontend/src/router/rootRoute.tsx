import React from "react";
import { createRootRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { Flex } from "@radix-ui/themes";
import { useAuth } from "../context/AuthContext";
import HomeLayout from "../layout/HomeLayout";

export const rootRoute = createRootRoute({
  component: function RootLayout() {
    const { user } = useAuth();
    const navigate = useNavigate();

    React.useEffect(() => {
      if (!user) {
        navigate({ to: "/login" });
      }
    }, [user, navigate]);

    return (
      <Flex style={{ minHeight: "100vh" }}>
        <HomeLayout />
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </Flex>
    );
  },
});
