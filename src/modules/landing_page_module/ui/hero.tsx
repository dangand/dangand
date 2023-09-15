import Link from "next/link";
import React from "react";

import { CheckCircleActive, HeroFestival, HeroLine } from "@/assets/svg";
import { BaseButton } from "@/components/input";
import {
  Box,
  Center,
  Column,
  Container,
  ContainerSection,
} from "@/components/layout";
import { Text } from "@/components/typography";
import { t } from "i18next";

export const Hero = () => {
  return (
    <header className="bg-[#E0E7FF] text-black">
      <ContainerSection>
        <div className="flex items-start justify-between">
          <div className="flex  flex-col gap-6 ">
            <div>
              <p className="text-6xl">Pengalaman membuat undangan terbaik</p>
              <HeroLine />
            </div>
            <p className="w-[510px]">
              Kami tahu bahwa setiap acara kamu adalah sesuatu yang istimewa.
              Baik itu pesta ulang tahun, pernikahan, reuni, atau acara apa pun
              yang kamu impikan, kami ada di sini untuk membantumu membuat
              undangan yang sesuai dengan kepribadian dan gaya kamu.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-6 ">
                <BaseButton label={t("tryFree")} />
                <BaseButton variant="bordered" label="Konsultasi acaramu" />
              </div>
              <p className="text-sm">✓ Gratis untuk pengguna pertama</p>
            </div>
          </div>
          <div className="w-[660px]">
            <HeroFestival />
          </div>
        </div>

        {/* <Center className="px-4 lg:px-0">
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
        {/* </div> */}
        {/* </Center>  */}
      </ContainerSection>
    </header>
  );
};
