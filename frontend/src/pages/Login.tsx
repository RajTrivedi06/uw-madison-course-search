// src/pages/AuthTabs.tsx
import React, { useState } from "react";
import { Tabs } from "@ark-ui/react/tabs";
import * as Form from "@radix-ui/react-form";
import axios from "axios";

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
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Frontend Validation
    if (formData.password !== formData.confirm_password) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/users/signup",
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }
      );

      setSuccess("Sign-up successful! You can now log in.");
      setFormData({
        username: "",
        email: "",
        password: "",
        confirm_password: "",
      });
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.detail) {
        setError(err.response.data.detail);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

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
      <Form.Root onSubmit={handleSubmit}>
        {error && (
          <div className="mb-4 rounded bg-red-100 px-4 py-2 text-red-700">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 rounded bg-green-100 px-4 py-2 text-green-700">
            {success}
          </div>
        )}
        <div className="mb-4">
          {/* Username */}
          <Form.Field name="username">
            <div className="mb-1">
              <Form.Label className="text-sm font-medium text-gray-700">
                Username
              </Form.Label>
            </div>
            <Form.Control asChild>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
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

        <div className="mb-4">
          {/* Email Address */}
          <Form.Field name="email" className="block">
            <div className="mb-1">
              <Form.Label className="text-sm font-medium text-gray-700">
                Email address
              </Form.Label>
            </div>
            <Form.Control asChild>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
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

        <div className="mb-4">
          {/* Password */}
          <Form.Field name="password" className="block">
            <div className="mb-1">
              <Form.Label className="text-sm font-medium text-gray-700">
                Password
              </Form.Label>
            </div>
            <Form.Control asChild>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
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

        <div className="mb-4">
          {/* Confirm Password */}
          <Form.Field name="confirm_password" className="block">
            <div className="mb-1">
              <Form.Label className="text-sm font-medium text-gray-700">
                Confirm Password
              </Form.Label>
            </div>
            <Form.Control asChild>
              <input
                type="password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
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
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/users/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      const { access_token, token_type } = response.data;

      // Store the token securely
      sessionStorage.setItem("access_token", access_token);

      setSuccess("Login successful!");

      // Optionally, redirect the user to a protected route
      // window.location.href = "/dashboard";
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.detail) {
        setError(err.response.data.detail);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div>
      <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">
        Log in
      </h2>

      {/* Login Form */}
      <Form.Root onSubmit={handleSubmit}>
        {error && (
          <div className="mb-4 rounded bg-red-100 px-4 py-2 text-red-700">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 rounded bg-green-100 px-4 py-2 text-green-700">
            {success}
          </div>
        )}
        <div className="mb-4">
          {/* Email Field */}
          <Form.Field name="email" className="block">
            <div className="mb-1">
              <Form.Label className="text-sm font-medium text-gray-700">
                Email
              </Form.Label>
            </div>
            <Form.Control asChild>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
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

        <div className="mb-4">
          {/* Password Field */}
          <Form.Field name="password" className="block">
            <div className="mb-1">
              <Form.Label className="text-sm font-medium text-gray-700">
                Password
              </Form.Label>
            </div>
            <Form.Control asChild>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
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
