import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { AvatarPlaceholder } from "@/assets/svg";
import { PATH } from "@/constants/path";
import Cookies from "js-cookie";

export function DropdownAvatar() {
  const route = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    Cookies.remove("dangand_access_token");
    route.push(PATH.AUTH.LOGIN);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="flex items-center focus:outline-none"
        >
          <AvatarPlaceholder />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link href="">
              <span
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Test
              </span>
            </Link>
            <Link href="">
              <span
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Test
              </span>
            </Link>
            <button onClick={handleLogout}>
              <span
                className="block px-4 py-2 text-sm text-red-500 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Keluar
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
