// src/components/TopPosts.tsx
import React from "react";
import { ArrowUpIcon, ArrowDownIcon } from "@radix-ui/react-icons"; // Ensure you have Heroicons installed

interface Post {
  name: string;
  username: string;
  trend: "up" | "down";
}

const posts: Post[] = [
  { name: "Post 1", username: "User1", trend: "up" },
  { name: "Post 2", username: "User2", trend: "down" },
  { name: "Post 3", username: "User3", trend: "up" },
  // Add more posts as needed
];

const TopPosts: React.FC = () => {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-2xl font-semibold">Top posts this month</h2>
      <ul className="space-y-4">
        {posts.map((post, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-4 border rounded shadow-sm"
          >
            <div>
              <div className="font-medium">{post.name}</div>
              <div className="text-sm text-gray-500">@{post.username}</div>
            </div>
            <div className="flex items-center gap-1">
              {post.trend === "up" ? (
                <ArrowUpIcon className="h-5 w-5 text-green-500" />
              ) : (
                <ArrowDownIcon className="h-5 w-5 text-red-500" />
              )}
              <span
                className={`text-sm ${post.trend === "up" ? "text-green-600" : "text-red-600"}`}
              >
                {post.trend === "up" ? "Up" : "Down"}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-right">
        <a href="/leaderboard" className="text-blue-600 hover:underline">
          View full leaderboard
        </a>
      </div>
    </section>
  );
};

export default TopPosts;
