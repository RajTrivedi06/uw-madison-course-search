// src/router/index.tsx
import React from "react";
import {
  createRouter,
  createRoute,
  RouterProvider,
} from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";

import Home from "../pages/Home";
import Login from "../pages/Login";
import About from "../pages/About";
import Contact from "../pages/Contact";
import CourseSearchAI from "../pages/CourseSearchAI";
import Popular from "../pages/Popular";
import Activities from "../pages/Activities";

// Define child routes directly under rootRoute
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "", // Default route (equivalent to "/")
  component: Home,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "login",
  component: Login,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "about",
  component: About,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "contact",
  component: Contact,
});

const courseSearchAIRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "course-search-ai",
  component: CourseSearchAI,
});

const popularRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "popular",
  component: Popular,
});

const activitiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "activities",
  component: Activities,
});

// Assemble the route tree
const routeTree = rootRoute.addChildren([
  homeRoute, // Default route
  loginRoute,
  aboutRoute,
  contactRoute,
  courseSearchAIRoute,
  popularRoute,
  activitiesRoute,
]);

// Create the router
export const router = createRouter({
  routeTree,
});

// For type-safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Provide the router
export function AppRouter() {
  return <RouterProvider router={router} />;
}
