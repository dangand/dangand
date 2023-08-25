import React from "react";

import { ArrowSection1, ArrowSection2, TaskIlustration } from "@/assets/svg";

const Section2 = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-3 pt-24 pb-14">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl lg:text-3xl font-semibold text-center lg:max-w-[600px]">
          Cuman 3 langkah aja, undangan kamu langsung jadi!
        </h2>
        <p className="text-neutral-700 text-center text-sm max-w-sm lg:max-w-full lg:text-base">
          Bikin undangan sesimple itu, dalam waktu sekejap undangan kamu udah
          jadi deh{" "}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-5">
        <div className="p-8 bg-blue-200 rounded-md flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <h3 className="text-xl px-3.5 py-1 font-medium bg-white rounded-full">
              1
            </h3>
            <h3 className="text-xl font-medium">Isi Detail Acara</h3>
          </div>
          <p className="text-sm text-neutral-700">
            Pertama kamu isi dulu detail acara kamu, kaya tujuan undangan,
            tempat, waktu, dan lokasi.
          </p>
        </div>
        <div className="lg:mt-10 hidden lg:block">
          <ArrowSection1 />
        </div>
        <div className="p-8 bg-orange-200 rounded-md flex flex-col gap-2 lg:mt-20">
          <div className="flex items-center gap-2">
            <h3 className="text-xl px-3.5 py-1 font-medium bg-white rounded-full">
              2
            </h3>
            <h3 className="text-xl font-medium">Pilih Tema</h3>
          </div>
          <p className="text-sm text-neutral-700">
            Selanjutnya kamu pilih tema yang kamu suka, kamu juga bisa atur
            gambar dan tulisan kamu sendiri
          </p>
        </div>
        <div className="lg:mt-10 hidden lg:block">
          <ArrowSection2 />
        </div>
        <div className="p-8 bg-pink-200 rounded-md flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <h3 className="text-xl px-3.5 py-1 font-medium bg-white rounded-full">
              3
            </h3>
            <h3 className="text-xl font-medium">Kirim Undangan</h3>
          </div>
          <p className="text-sm text-neutral-700">
            Dengan satu klik, undangan kamu langsung terkirim ke semua tamu,
            teman dan keluarga kamu, mudah bukan 😊
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
