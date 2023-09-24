import Image from "next/image";
import React, { useMemo } from "react";

import { AngleRight, ChartBar, Coins, Puzzle, Receipt } from "@/assets/svg";
import { ContainerSection } from "@/components/layout";

import sampleDashboard2 from "../../../assets/image/sample-dashboard2.png";
import sampleDashboard3 from "../../../assets/image/sample-dashboard3.png";
import sampleDashboard from "../../../assets/image/sample-dashboard.png";

import type { StaticImageData } from "next/image";

type FEATURE_TYPE = {
  icon: JSX.Element;
  color: string;
  title: string;
  Image: StaticImageData;
  description: string;
  position: string;
};

const FeatureItem: FEATURE_TYPE[] = [
  {
    icon: <Receipt />,
    color: "bg-violet-200",
    title: "Bikin Acara Lebih Personal",
    Image: sampleDashboard,
    description:
      "Dengan undangan digital Dangand, kamu bisa membuat undangan sesuai dengan gaya kamu. Tambahkan foto, animasi, dan sentuhan pribadi lainnya. Hasilnya? Undangan yang unik dan mencerminkan acaramu.",
    position: "left",
  },
  {
    icon: <Puzzle />,
    color: "bg-orange-200",
    title: "Cek Kehadiran dan Tetap Terhubung",
    Image: sampleDashboard2,
    description:
      "Lewat Dangand, kamu nggak perlu bingung lagi soal siapa yang datang atau nggak. Fitur manajemen kehadiran yang canggih membantu kamu melacak konfirmasi tamu dengan mudah. Selain itu, kamu juga bisa ngobrol seru dan berbagi momen pra-acara!",
    position: "left",
  },
  {
    icon: <ChartBar />,
    color: "bg-pink-200",
    title: "Hemat Biaya dan Ramah Lingkungan",
    Image: sampleDashboard3,
    description:
      "Pindah ke undangan digital bukan cuma seru, tapi juga berarti peduli lingkungan. Nggak ada lagi kertas yang terbuang sia-sia. Selain itu, kamu bisa hemat biaya cetak dan kirim. Jadi acaramu tetap seru tanpa merogoh kocek banyak!",
    position: "left",
  },
];

const Section1 = () => {
  const generateImage = (item: FEATURE_TYPE) => {
    switch (item.Image) {
      case sampleDashboard:
        return (
          <Image
            src={item.Image}
            alt="img"
            width={300}
            height={500}
            className="mt-12"
          />
        );
      case sampleDashboard2:
        return (
          <Image
            src={item.Image}
            alt="img"
            width={300}
            height={500}
            className="mt-3"
          />
        );
      case sampleDashboard3:
        return (
          <Image
            src={item.Image}
            alt="img"
            width={250}
            height={250}
            className="mt-3"
          />
        );
    }
  };

  return (
    <section className="flex flex-col items-start w-full gap-8 bg-indigo-800">
      <ContainerSection>
        <div className="flex items-center justify-between w-full">
          <div className="relative flex flex-col items-start justify-start ">
            <div className="absolute p-10 bg-orange-100 rounded-md -top-6 -left-6 -z-10"></div>
            <h2 className="text-3xl max-w-[350px] font-semibold ">
              Gimana sih Dangand bisa bantu acara kamu?
            </h2>
            <p className="max-w-[600px] mx-auto text-neutral-700 text-sm lg:text-base">
              Dangand siap bikin acaramu jadi lebih seru dan gak ribet! Dari
              undangan keren yang bisa kamu sesuaikan, sampai manajemen
              kehadiran yang canggih.
            </p>
          </div>
          <button
            className={`bg-indigo-500 w-fit text-white mt-3 text-sm py-3 font-medium px-6 rounded-full hidden lg:block`}
          >
            Lihat detail
          </button>
        </div>

        <div className="flex flex-col w-full gap-12">
          {FeatureItem.map((item) =>
            item.position == "left" ? (
              <div
                key={item.title}
                className="flex-row-reverse grid-cols-12 gap-8 lg:grid"
              >
                <div
                  className={`${item.color} relative h-[240px]  col-span-5 p-8 rounded flex flex-col gap-2 items-center justify-center overflow-hidden `}
                >
                  {generateImage(item)}
                </div>
                <div className={`col-span-6 py-4`}>
                  {/* <div className="p-2 bg-blue-200 rounded-md">{item.icon}</div> */}
                  <h3 className="text-2xl font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm text-neutral-700">
                    {item.description}
                  </p>
                  <button
                    className={`${item.color} flex items-center gap-2 mt-4 text-sm py-2 font-medium px-6 rounded-full`}
                  >
                    Mulai Sekarang
                    <div className="flex items-center justify-center p-2 bg-white rounded-full">
                      <AngleRight />
                    </div>
                  </button>
                </div>
              </div>
            ) : (
              <div
                key={item.title}
                className="grid flex-row-reverse grid-cols-12 gap-8"
              >
                <div
                  className={`${item.color} relative h-[240px]  col-span-5 p-8 rounded flex flex-col gap-2 items-center justify-center overflow-hidden order-last`}
                >
                  {generateImage(item)}
                </div>
                <div className={`col-span-6 py-4`}>
                  {/* <div className="p-2 bg-blue-200 rounded-md">{item.icon}</div> */}
                  <h3 className="text-2xl font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm text-neutral-700">
                    {item.description}
                  </p>
                  <button
                    className={`${item.color} flex items-center gap-2 mt-4 text-sm py-2 font-medium px-6 rounded-full`}
                  >
                    Mulai Sekarang
                    <div className="flex items-center justify-center p-2 bg-white rounded-full">
                      <AngleRight />
                    </div>
                  </button>
                </div>
              </div>
            ),
          )}
        </div>
      </ContainerSection>
    </section>
  );
};

export default Section1;
