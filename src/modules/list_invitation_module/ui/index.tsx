import React, { useState } from "react";

import { EyeSlash, FilterIcon, SearchIcon } from "@/assets/svg";

import Navbar from "./navbar";

const ListInvitationModule = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };
  return (
    <>
      <Navbar />
      <div className="bg-neutral-200 h-screen py-10">
        <div className="max-w-screen-lg mx-auto">
          <div className="w-full max-w-screen-lg mx-auto mt-4 flex flex-col gap-7">
            <div className="w-full flex items-center gap-2">
              <div className="relative flex flex-1 items-center ">
                <input
                  type="text"
                  placeholder="Cari undangan"
                  className="bg-transparent py-2 px-3 w-full rounded-lg border border-neutral-600 text-neutral-700 text-sm lg:text-base placeholder:text-xs placeholder:text-neutral-500 lg:placeholder:text-sm"
                />
                <a className="absolute cursor-pointer right-3">
                  <SearchIcon />
                </a>
              </div>
              <button className="p-2.5 bg-neutral-500 rounded-lg">
                <FilterIcon />
              </button>
              <button className="px-3 py-3 text-sm rounded-md bg-indigo-500 text-white">
                Buat Undangan
              </button>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleClick(1)}
                className={`px-2 py-2 border-b-2 rounded-t-lg ${
                  activeTab === 1
                    ? " border-indigo-500 text-indigo-500 font-medium"
                    : "text-neutral-600 "
                }`}
              >
                Semua
              </button>
              <button
                onClick={() => handleClick(2)}
                className={`px-2 py-2 border-b-2 rounded-t-lg ${
                  activeTab === 2
                    ? " border-indigo-500 text-indigo-500 font-medium"
                    : "text-neutral-600 "
                }`}
              >
                Belum di mulai
              </button>
              <button
                onClick={() => handleClick(3)}
                className={`px-2 py-2 border-b-2 rounded-t-lg ${
                  activeTab === 3
                    ? " border-indigo-500 text-indigo-500 font-medium"
                    : "text-neutral-600 "
                }`}
              >
                Sedang berlangsung
              </button>
              <button
                onClick={() => handleClick(4)}
                className={`px-2 py-2 border-b-2 rounded-t-lg ${
                  activeTab === 4
                    ? " border-indigo-500 text-indigo-500 font-medium"
                    : "text-neutral-600 "
                }`}
              >
                Sudah berakhir
              </button>
            </div>

            {activeTab === 1 && (
              <div className="p-4 border border-t-0 rounded-b-lg ">TEST 1</div>
            )}
            {activeTab === 2 && (
              <div className="p-4 border border-t-0 rounded-b-lg ">TEST 2</div>
            )}
            {activeTab === 3 && (
              <div className="p-4 border border-t-0 rounded-b-lg ">TEST 3</div>
            )}
            {activeTab === 4 && (
              <div className="p-4 border border-t-0 rounded-b-lg ">TEST 4</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListInvitationModule;
