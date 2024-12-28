// src/components/DropdownFilter.tsx
import React, { useState } from "react";

interface DropdownFilterProps {
  label: string;
  options: string[];
}

const DropdownFilter: React.FC<DropdownFilterProps> = ({ label, options }) => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
      >
        {options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownFilter;
