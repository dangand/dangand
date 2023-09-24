import Link from "next/link";
import React from "react";

import {
  CheckCircleActive,
  Dyson,
  HeroFestival,
  HeroLine,
  MomentFactory,
  OneSignal,
  Trivago,
  WeTransfer,
} from "@/assets/svg";
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
      <ContainerSection className="flex-col md:gap-20 md:flex">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
          <div className="flex flex-col gap-6 ">
            <div>
              <p className="text-3xl text-start md:text-5xl">
                Pengalaman membuat undangan terbaik
              </p>
              <div className="md:w-[300px] h-3 w-[200px] ">
                <HeroLine />
              </div>
            </div>
            <p className="w-full text-start md:w-[510px]">
              Kami tahu bahwa setiap acara kamu adalah sesuatu yang istimewa.
              Baik itu pesta ulang tahun, pernikahan, reuni, atau acara apa pun
              yang kamu impikan, kami ada di sini untuk membantumu membuat
              undangan yang sesuai dengan kepribadian dan gaya kamu.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 md:gap-6 ">
                <BaseButton label={t("tryFree")} />
                <BaseButton variant="bordered" label="Konsultasi acaramu" />
              </div>
              <p className="text-sm">✓ Gratis untuk pengguna pertama</p>
            </div>
          </div>
          <div className="w-full md:w-[660px]">
            <HeroFestival />
          </div>
        </div>
        <div className="items-center hidden gap-6 md:flex-col md:flex">
          <p className="text-[#011F44] text-xl">
            Di percaya lebih dari 100 pengguna di seluruh Indonesia
          </p>
          <div className="flex flex-rowgap-14z">
            <WeTransfer />
            <Trivago />
            <MomentFactory />
            <OneSignal />
            <Dyson />
          </div>
        </div>
        {/* <Center className="px-4 lg:px-0">
            <div className="flex flex-col items-center justify-center w-full h-full gap-4">
              <h1 className="max-w-2xl text-4xl font-bold text-center lg:text-4xl">
                Membuat dan <span className="text-indigo-400">mengatur</span>{" "}
                <span className="text-red-200">undangan</span> tidak pernah
                semudah ini
              </h1>
              <p className="max-w-xl text-base text-center text-neutral-400">
                Nikmati kebebasan dalam membuat undangan dan mengatur acara anda
                dengan mudah, cepat, dan tanpa repot
              </p>
              <div className="flex items-center gap-3">
                <Link href={"/auth/register"}>
                  <p className="px-8 py-3 text-sm font-medium text-black transition duration-300 bg-indigo-300 rounded-full hover:bg-white ">
                    Buat Undangan
                  </p>
                </Link>
                <Link href={"/about"}>
                  <p className="px-8 py-3 text-sm font-medium text-white transition duration-300 rounded-full bg-neutral-900 hover:bg-neutral-800">
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
