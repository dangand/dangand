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
      <div className="relative flex flex-col items-center w-full 2xl:h-[638px] md:h-[520px]">
        <div className="hidden md:block">
          <ShapeVidio />
        </div>
        <div className="w-full bg-[#3730A3] md:absolute bottom-0">
          <ContainerSection className="flex flex-col gap-6 md:flex-row md:gap-12">
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
