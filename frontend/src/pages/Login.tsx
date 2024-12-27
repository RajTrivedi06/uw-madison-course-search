// src/pages/AuthTabs.tsx
import React from "react";
import { Tabs } from "@ark-ui/react/tabs";
import * as Form from "@radix-ui/react-form";

export default function AuthTabs() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-md">
        <Tabs.Root defaultValue="signup" className="flex flex-col">
          {/* Tabs Header */}
          <Tabs.List className="relative mb-6 flex overflow-hidden rounded-full bg-gray-900">
            {/* Active Tab Indicator */}
            <Tabs.Indicator
              className="
                absolute inset-y-0 h-full w-1/2 rounded-full bg-red-600 
                transition-transform duration-300 ease-in-out
                z-0
              "
            />
            {/* Sign Up Tab */}
            <Tabs.Trigger
              value="signup"
              className="
                relative z-10 flex-1 cursor-pointer py-3 text-center 
                text-sm font-medium uppercase tracking-wide 
                transition-colors
                text-white
              "
            >
              Sign up
            </Tabs.Trigger>
            {/* Log In Tab */}
            <Tabs.Trigger
              value="login"
              className="
                relative z-10 flex-1 cursor-pointer py-3 text-center 
                text-sm font-medium uppercase tracking-wide 
                transition-colors
                text-white
              "
            >
              Log in
            </Tabs.Trigger>
          </Tabs.List>

          {/* Tab Content */}
          <Tabs.Content value="signup">
            <SignUpSection />
          </Tabs.Content>
          <Tabs.Content value="login">
            <LoginSection />
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
}

/* ---------------------------------- */
/*          Sign Up Section           */
/* ---------------------------------- */
function SignUpSection() {
  return (
    <div>
      <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">
        Sign up
      </h2>

      {/* Social Sign-Up Buttons */}
      <div className="flex flex-col gap-3">
        <button
          type="button"
          className="
            flex h-12 items-center justify-center gap-2 
            rounded-full border border-gray-300 
            px-4 text-sm font-medium hover:bg-gray-50
          "
        >
          <span className="text-blue-600">F</span>
          Sign up with Facebook
        </button>
        <button
          type="button"
          className="
            flex h-12 items-center justify-center gap-2 
            rounded-full border border-gray-300 
            px-4 text-sm font-medium hover:bg-gray-50
          "
        >
          <span className="text-red-500">G</span>
          Sign up with Google
        </button>
      </div>

      {/* OR Separator */}
      <div className="my-6 flex items-center">
        <div className="flex-1 border-b border-gray-300" />
        <span className="mx-3 text-sm font-medium text-gray-500">OR</span>
        <div className="flex-1 border-b border-gray-300" />
      </div>

      {/* Sign-Up Form */}
      <Form.Root>
        <div className="mb-4 grid grid-cols-2 gap-2">
          {/* First Name */}
          <Form.Field name="firstName">
            <div className="mb-1">
              <Form.Label className="text-sm font-medium text-gray-700">
                First name
              </Form.Label>
            </div>
            <Form.Control asChild>
              <input
                type="text"
                required
                className="
                  h-10 w-full rounded border border-gray-300 
                  px-3 text-sm text-gray-800 outline-none 
                  focus:ring-1 focus:ring-black
                "
              />
            </Form.Control>
          </Form.Field>

          {/* Last Name */}
          <Form.Field name="lastName">
            <div className="mb-1">
              <Form.Label className="text-sm font-medium text-gray-700">
                Last name
              </Form.Label>
            </div>
            <Form.Control asChild>
              <input
                type="text"
                required
                className="
                  h-10 w-full rounded border border-gray-300 
                  px-3 text-sm text-gray-800 outline-none 
                  focus:ring-1 focus:ring-black
                "
              />
            </Form.Control>
          </Form.Field>
        </div>

        {/* Email Address */}
        <Form.Field name="email" className="mb-4 block">
          <div className="mb-1">
            <Form.Label className="text-sm font-medium text-gray-700">
              Wisc Email address
            </Form.Label>
          </div>
          <Form.Control asChild>
            <input
              type="email"
              required
              className="
                h-10 w-full rounded border border-gray-300 
                px-3 text-sm text-gray-800 outline-none 
                focus:ring-1 focus:ring-black
              "
            />
          </Form.Control>
        </Form.Field>

        <Form.Field name="email" className="mb-4 block">
          <div className="mb-1">
            <Form.Label className="text-sm font-medium text-gray-700">
              Password
            </Form.Label>
          </div>
          <Form.Control asChild>
            <input
              type="password"
              required
              className="
                h-10 w-full rounded border border-gray-300 
                px-3 text-sm text-gray-800 outline-none 
                focus:ring-1 focus:ring-black
              "
            />
          </Form.Control>
        </Form.Field>

        <Form.Field name="email" className="mb-4 block">
          <div className="mb-1">
            <Form.Label className="text-sm font-medium text-gray-700">
              Confirm Password
            </Form.Label>
          </div>
          <Form.Control asChild>
            <input
              type="confirm_password"
              required
              className="
                h-10 w-full rounded border border-gray-300 
                px-3 text-sm text-gray-800 outline-none 
                focus:ring-1 focus:ring-black
              "
            />
          </Form.Control>
        </Form.Field>

        {/* Submit Button */}
        <Form.Submit asChild>
          <button
            type="submit"
            className="
              mt-2 h-12 w-full rounded-full bg-gray-900 text-sm 
              font-medium text-white hover:bg-gray-400
            "
          >
            Sign up
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
}

/* ---------------------------------- */
/*           Log In Section           */
/* ---------------------------------- */
function LoginSection() {
  return (
    <div>
      <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">
        Log in
      </h2>

      <Form.Root>
        {/* Email Field */}
        <Form.Field name="email" className="mb-4 block">
          <div className="mb-1">
            <Form.Label className="text-sm font-medium text-gray-700">
              Email
            </Form.Label>
          </div>
          <Form.Control asChild>
            <input
              type="email"
              required
              className="
                h-10 w-full rounded border border-gray-300 
                px-3 text-sm text-gray-800 outline-none 
                focus:ring-1 focus:ring-black
              "
            />
          </Form.Control>
        </Form.Field>

        {/* Password Field */}
        <Form.Field name="password" className="mb-4 block">
          <div className="mb-1">
            <Form.Label className="text-sm font-medium text-gray-700">
              Password
            </Form.Label>
          </div>
          <Form.Control asChild>
            <input
              type="password"
              required
              className="
                h-10 w-full rounded border border-gray-300 
                px-3 text-sm text-gray-800 outline-none 
                focus:ring-1 focus:ring-black
              "
            />
          </Form.Control>
        </Form.Field>

        {/* Submit Button */}
        <Form.Submit asChild>
          <button
            type="submit"
            className="
              mt-2 h-12 w-full rounded-full bg-gray-900 text-sm 
              font-medium text-white hover:bg-gray-800
            "
          >
            Log in
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
}
