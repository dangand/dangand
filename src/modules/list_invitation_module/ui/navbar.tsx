import Link from "next/link";
import React from "react";

import {
  BellIcon,
  DangandIconPrimary,
  GridIcon,
  QuestionIcon,
} from "@/assets/svg";
import { DividerVertical } from "@/components/layout";
import { DropdownAvatar } from "@/components/navigation";

const Navbar = () => {
  return (
    <nav className="w-full px-12 py-3 flex items-center justify-between bg-white">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <DangandIconPrimary width={40} />
          <h1 className="text-lg font-semibold">Dangand</h1>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Link href={""}>Layanan</Link>
          <Link href={""}>Penggunaan</Link>
        </div>
      </div>
      <div className="relative w-full h-fit flex flex-row-reverse gap-3 items-center">
        <DropdownAvatar />
        <Link href={""}>
          <QuestionIcon />
        </Link>
        <Link href={""}>
          <BellIcon />
        </Link>
        <Link href={""}>
          <GridIcon />
        </Link>
        <DividerVertical />
        <Link href={"/"} className="text-sm">
          Bantuan
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
