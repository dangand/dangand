import Link from "next/link";
import React from "react";

import { BaseButton } from "@/components/input";
import { Box, Center, Column, Container } from "@/components/layout";
import { Text } from "@/components/typography";

export const Hero = () => {
  return (
    <header className="bg-[#050505] text-white">
      <Container maxWidth="full">
        <Center className="px-4 lg:px-0">
          <Container maxWidth="lg" className="h-screen lg:h-[80vh]">
            <div className="flex flex-col gap-4 items-center justify-center w-full h-full">
              <h1 className="text-4xl lg:text-4xl font-bold max-w-2xl text-center">
                Membuat dan <span className="text-indigo-400">mengatur</span>{" "}
                <span className="text-red-200">undangan</span> tidak pernah
                semudah ini
              </h1>
              <p className="text-base text-neutral-400 text-center max-w-xl">
                Nikmati kebebasan dalam membuat undangan dan mengatur acara anda
                dengan mudah, cepat, dan tanpa repot
              </p>
              <div className="flex items-center gap-3">
                <Link href={"/auth/register"}>
                  <p className="px-8 py-3 rounded-full text-sm bg-indigo-300 text-black font-medium hover:bg-white transition duration-300 ">
                    Buat Undangan
                  </p>
                </Link>
                <Link href={"/about"}>
                  <p className="px-8 py-3 rounded-full text-sm bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition duration-300">
                    Lihat selengkapnya
                  </p>
                </Link>
              </div>
              {/* 0D0D0D */}
            </div>
          </Container>
        </Center>
      </Container>
    </header>
  );
};
