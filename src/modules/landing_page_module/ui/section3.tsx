import React from "react";

const Section3 = () => {
  return (
    <section className="w-full py-16 bg-indigo-200 mt-12 px-4 lg:px-0">
      <div className="xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:gap-24">
        <div className="flex-1">
          <div className="bg-white w-full h-[300px] rounded-md"></div>
        </div>
        <div className="flex-1 flex flex-col gap-3 my-8">
          <h2 className="text-3xl font-semibold">
            Kepoin Yuk Undangan Digital Dangand
          </h2>
          <p className="text-neutral-700 text-sm lg:text-base">
            Nih, kita punya video singkat yang ngebahas bagaimana undangan
            digital kami bisa bikin acaramu lebih seru. Kita bakal jelasin
            fitur-fiturnya dengan gaya yang gak ribet. Jadi, nonton aja ya, biar
            tahu gimana caranya bikin undangan yang keren!
          </p>
          <button
            className={`bg-indigo-500 w-fit text-white mt-3 text-sm py-3 font-medium px-6 rounded-full`}
          >
            Yuk, coba sekarang
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section3;
