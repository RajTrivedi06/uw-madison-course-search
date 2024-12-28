// src/pages/Home.tsx
import React from "react";
import Header from "../components/Header";
import PopularCourses from "../components/PopularCourses";
import TopPosts from "../components/TopPosts";
import DropdownFilter from "../components/DropdownFilter";

const Home: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <Header title="Home" />

      {/* Dropdown Filters */}
      <div className="mb-6 flex gap-4">
        <DropdownFilter
          label="Timeframe"
          options={["This Month", "Last Month", "Last 6 Months"]}
        />
        <DropdownFilter
          label="People"
          options={["All", "Friends", "Following"]}
        />
        <DropdownFilter
          label="Topic"
          options={["All", "AI", "Cars", "Nuclear"]}
        />
      </div>

      {/* Popular Courses */}
      <PopularCourses />

      {/* Top Posts */}
      <TopPosts />
    </div>
  );
};

export default Home;
