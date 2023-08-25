import React from "react";

const SectionTest = () => {
  return (
    <section className="py-32 flex items-center gap-16">
      <div>
        <h2 className="text-3xl font-semibold max-w-[350px]">
          Kami telah membantu {""}
          lebih banyak orang {""}
          untuk acara mereka
        </h2>
      </div>

      <div className="flex-1 flex items-center justify-between ">
        <div className="flex flex-col items- justify-center gap-1">
          <p className="text-4xl font-medium">500+</p>
          <p>Menggunakan Dangand</p>
        </div>
        <div className="flex flex-col items- justify-center gap-1">
          <p className="text-4xl font-medium">800+</p>
          <p>Undangan dibuat</p>
        </div>
        <div className="flex flex-col items- justify-center gap-1">
          <p className="text-4xl font-medium">90%</p>
          <p>Pengguna puas</p>
        </div>
      </div>
    </section>
  );
};

export default SectionTest;
