// src/layouts/HomeLayout.tsx
import React, { useState } from "react";
import { Outlet } from "@tanstack/react-router";
import { Flex, Box, Text, Button, Avatar, Heading } from "@radix-ui/themes";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  LightningBoltIcon,
  RocketIcon,
  FaceIcon,
  GearIcon,
  ExitIcon,
  BellIcon, // Added BellIcon for Notifications
} from "@radix-ui/react-icons"; // Ensure these icons are installed
import NavLink from "../components/NavLink"; // Adjust the path as necessary

const Sidebar = ({
  isOpen,
  closeSidebar,
}: {
  isOpen: boolean;
  closeSidebar: () => void;
}) => {
  return (
    <Box
      className={`inset-y-0 left-0 w-64 h-full bg-gray-800 text-white flex flex-col p-4 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out
        md:translate-x-0 md:static md:w-64 shadow-lg`}
    >
      <Heading size="3" className="mb-6">
        MyApp
      </Heading>
      <Flex direction="column" gap="2" className="flex-1">
        <NavLink
          to="/home"
          icon={<HomeIcon className="w-5 h-5" />}
          label="Home"
          onClick={closeSidebar}
        />
        <NavLink
          to="/course-search-ai"
          icon={<MagnifyingGlassIcon className="w-5 h-5" />}
          label="Course Search AI"
          onClick={closeSidebar}
        />
        <NavLink
          to="/popular"
          icon={<LightningBoltIcon className="w-5 h-5" />}
          label="Popular"
          onClick={closeSidebar}
        />
        <NavLink
          to="/activities"
          icon={<RocketIcon className="w-5 h-5" />}
          label="Activities"
          onClick={closeSidebar}
        />
        <NavLink
          to="/about"
          icon={<FaceIcon className="w-5 h-5" />}
          label="About"
          onClick={closeSidebar}
        />
        <NavLink
          to="/contact"
          icon={<GearIcon className="w-5 h-5" />}
          label="Contact"
          onClick={closeSidebar}
        />
        <NavLink
          to="/login"
          icon={<ExitIcon className="w-5 h-5" />}
          label="Login"
          onClick={closeSidebar}
        />
      </Flex>
      <Box className="mt-auto">
        <Flex align="center" gap="2">
          <Avatar
            size="2"
            src="https://images.unsplash.com/photo-1603415526960-fd6d2d4a91a6?&w=48&h=48&dpr=2&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=1.4&fit=crop"
            radius="full"
            fallback="U"
          />
          <Box>
            <Text weight="bold">User Name</Text>
            <Text color="gray" className="text-sm">
              user@example.com
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <Box className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Hamburger Menu for Mobile */}
      <Flex className="md:hidden">
        <Button
          variant="ghost"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          {/* Using HamburgerMenuIcon as per user's import */}
          <BellIcon className="w-6 h-6" />{" "}
          {/* Replace with HamburgerMenuIcon if available */}
        </Button>
      </Flex>
      <Text size="3" weight="bold">
        Dashboard
      </Text>
      <Flex gap="3" align="center">
        <Button
          variant="ghost"
          className="flex items-center gap-1"
          aria-label="Notifications"
        >
          <BellIcon className="w-5 h-5" />
          Notifications
        </Button>
        <Button
          variant="ghost"
          className="flex items-center gap-1"
          aria-label="Settings"
        >
          <GearIcon className="w-5 h-5" />
          Settings
        </Button>
      </Flex>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box className="bg-white shadow-inner p-4 text-center">
      <Text size="1" color="gray">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </Text>
    </Box>
  );
};

const HomeLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <Flex className="h-screen" direction="row">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />

      {/* Overlay for Mobile when Sidebar is Open */}
      {isSidebarOpen && (
        <Box
          className="inset-0 bg-black opacity-50 z-10 md:hidden"
          onClick={closeSidebar}
        ></Box>
      )}

      {/* Main Area */}
      <Flex
        direction="column"
        className="flex-1 ml-0 md:ml-64 transition-all duration-300 ease-in-out"
      >
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <Box className="p-6 bg-gray-100 flex-1 overflow-auto">
          <Outlet />
        </Box>

        {/* Footer */}
        <Footer />
      </Flex>
    </Flex>
  );
};

export default HomeLayout;
