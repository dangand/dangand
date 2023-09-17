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
import { ContainerSection } from "@/components/layout";

const SectionVideo = () => {
  return (
    <section className="w-full bg-[#E0E7FF]">
      <ContainerSection className="flex flex-col items-center gap-6">
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
      <div className="relative flex flex-col items-center w-full h-[638px]">
        <ShapeVidio />
        <div className="w-full bg-[#3730A3] absolute bottom-0">
          <ContainerSection className="flex gap-12">
            <div className="flex-2">
              <ImageVidio />
            </div>
            <div className="flex flex-col flex-1 gap-6 text-white">
              <p className="text-5xl">Apa sih itu Dangand?</p>
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
