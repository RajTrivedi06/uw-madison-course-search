// src/router/index.tsx
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

import HomeLayout from "../layout/HomeLayout"; // Ensure the path is correct

// Define a parent route with HomeLayout
const homeLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomeLayout,
});

// Define child routes under homeLayoutRoute
const homeRoute = createRoute({
  getParentRoute: () => homeLayoutRoute,
  path: "home",
  component: Home,
});

const loginRoute = createRoute({
  getParentRoute: () => homeLayoutRoute,
  path: "login",
  component: Login,
});

const aboutRoute = createRoute({
  getParentRoute: () => homeLayoutRoute,
  path: "about",
  component: About,
});

const contactRoute = createRoute({
  getParentRoute: () => homeLayoutRoute,
  path: "contact",
  component: Contact,
});

const courseSearchAIRoute = createRoute({
  getParentRoute: () => homeLayoutRoute,
  path: "course-search-ai",
  component: CourseSearchAI,
});

const popularRoute = createRoute({
  getParentRoute: () => homeLayoutRoute,
  path: "popular",
  component: Popular,
});

const activitiesRoute = createRoute({
  getParentRoute: () => homeLayoutRoute,
  path: "activities",
  component: Activities,
});

// Assemble the route tree
const routeTree = rootRoute.addChildren([
  homeLayoutRoute.addChildren([
    homeRoute,
    loginRoute,
    aboutRoute,
    contactRoute,
    courseSearchAIRoute,
    popularRoute,
    activitiesRoute,
  ]),
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
