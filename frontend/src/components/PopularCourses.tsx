// src/components/PopularCourses.tsx
import React from "react";

interface Course {
  name: string;
  tags: string[];
}

const courses: Course[] = [
  { name: "COMP SCI 300", tags: ["AI", "Machine Learning"] },
  { name: "ELON M 300", tags: ["Cars", "Engineering"] },
  { name: "PUTIN 300", tags: ["Nuclear", "Physics"] },
  // Add more courses as needed
];

const tagColors: Record<string, string> = {
  AI: "bg-pink-200 text-pink-800",
  Cars: "bg-green-200 text-green-800",
  Nuclear: "bg-blue-200 text-blue-800",
  // Add more tag colors as needed
};

const PopularCourses: React.FC = () => {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-2xl font-semibold">
        Popular Courses this month
      </h2>
      <ul className="space-y-4">
        {courses.map((course, index) => (
          <li
            key={index}
            className="flex flex-col p-4 border rounded shadow-sm"
          >
            <div className="text-lg font-medium">{course.name}</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {course.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-2 py-1 text-sm rounded-full ${tagColors[tag] || "bg-gray-200 text-gray-800"}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PopularCourses;
