// src/pages/Home.tsx
import React from "react";
import { Box, Flex, Text, Button, Heading } from "@radix-ui/themes";

const Home = () => {
  return (
    <Box>
      <Heading size="2" className="mb-6">
        Welcome to MyApp!
      </Heading>
      <Text size="3" color="gray" className="mb-8">
        This is your dashboard where you can manage your settings and
        preferences.
      </Text>
      <Flex gap="8" className="flex-wrap">
        {/* Example Cards */}
        <Box className="w-full md:w-1/2 lg:w-1/3 p-2">
          <Box className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
            <Heading size="4" className="mb-3">
              Card 1
            </Heading>
            <Text color="gray" className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            <Button variant="outline">Learn More</Button>
          </Box>
        </Box>
        <Box className="w-full md:w-1/2 lg:w-1/3 p-2">
          <Box className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
            <Heading size="4" className="mb-3">
              Card 2
            </Heading>
            <Text color="gray" className="mb-4">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Button variant="outline">Learn More</Button>
          </Box>
        </Box>
        <Box className="w-full md:w-1/2 lg:w-1/3 p-2">
          <Box className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
            <Heading size="4" className="mb-3">
              Card 3
            </Heading>
            <Text color="gray" className="mb-4">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris.
            </Text>
            <Button variant="outline">Learn More</Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
