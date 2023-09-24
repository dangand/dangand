import Image from "next/image";

import {
  Dyson,
  ImageVidio,
  MomentFactory,
  OneSignal,
  ShapeVidio,
  Trivago,
  WeTransfer,
} from "@/assets/svg";
import { BaseButton } from "@/components/input";
import { ContainerSection, TitleSection } from "@/components/layout";

import sampleSectionVidio from "../../../assets/image/sample-section-vidio.png";

const SectionVideo = () => {
  return (
    <section className="w-full bg-[#E0E7FF]">
      <ContainerSection className="flex-col items-center hidden gap-6 md:flex">
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
      </ContainerSection>
      <div className="relative flex mt-5 md:mt-0 flex-col items-center w-full 2xl:h-[638px] h-[525px]">
        <ShapeVidio />
        <div className="w-full bg-[#3730A3] absolute bottom-0">
          <ContainerSection className="flex md:flex-row flex-col gap-6 md:gap-12">
            <div className="flex-1 2xl:flex-2">
              <Image
                src={sampleSectionVidio}
                height={385}
                width={684}
                alt="sampleSectionVidio"
              />
            </div>
            <div className="flex flex-col flex-1 gap-6 text-white">
              <TitleSection>Apa sih itu Dangand?</TitleSection>
              <p className="text-base">
                Nih, kita punya video singkat yang ngebahas bagaimana undangan
                digital kami bisa bikin acaramu lebih seru. Kita bakal jelasin
                fitur-fiturnya dengan gaya yang gak ribet. Jadi, nonton aja ya,
                biar tahu gimana caranya bikin undangan yang keren!
              </p>
              <BaseButton
                label="Yuk, coba sekarang"
                variant="secondary"
                className="text-base font-medium text-black"
              />
            </div>
          </ContainerSection>
        </div>
      </div>
    </section>
  );
};

export default SectionVideo;
