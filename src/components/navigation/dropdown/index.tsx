import { useState } from "react";

import { EnglishIcon, IndonesiaIcon } from "@/assets/svg";

interface DropdownProps {
  options: { label: string; icon?: React.ReactNode; action: () => void }[];
}

export const Dropdown = (props: DropdownProps) => {
  const { options } = props;
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionSelect = (option: {
    label: string;
    action: () => void;
  }) => {
    setSelectedOption(option.label);
    setIsOpen(false);
    option.action();
  };

  return (
    <div className="relative">
      <button
        className="hover:bg-gray-100 px-3 py-1 rounded-md focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption == "Indonesia" ? <IndonesiaIcon /> : <EnglishIcon />}
      </button>
      {isOpen && (
        <ul className="absolute z-10 mt-2 py-3 px-4 bg-white rounded-md shadow-lg">
          {options.map((option, index) => (
            <li
              key={index}
              className="hover:bg-gray-100 flex gap-2 items-center text-sm cursor-pointer py-2 px-3 rounded-md"
              onClick={() => handleOptionSelect(option)}
            >
              {option.icon}
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
