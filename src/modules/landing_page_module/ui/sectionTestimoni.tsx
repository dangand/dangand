import {
  ImageTestimoni,
  LeftArrowBlack,
  LineHorizontal,
  RightArrowBlack,
} from "@/assets/svg";
import { BaseButton } from "@/components/input";
import { ContainerSection } from "@/components/layout";

const SectionTestimoni = () => {
  return (
    <section className="w-full bg-[#C7D2FE]">
      <ContainerSection className="flex flex-row gap-8 text-[#422439]">
        <div className="flex flex-col justify-between h-[480px] flex-1">
          <div className="flex flex-col gap-12">
            <p className="text-2xl ">
              “Wow, undangan digital ini benar-benar mengubah cara saya
              merencanakan acara! Hemat waktu, tanpa repot-repot mengirim
              undangan fisik. Desainnya juga keren banget, jadi teman-teman saya
              selalu kagum. Terima kasih, Dangand!”
            </p>
            <div className="flex flex-row items-center gap-2">
              <LineHorizontal />
              <p className="text-base">Lia sumarni, Pernikahaan yang kedua</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <BaseButton
              label="Yuk jadi bagian dari Dangand"
              variant="bordered"
            />
            <div className="flex flex-row gap-11">
              <LeftArrowBlack />
              <p>2 / 5</p>
              <RightArrowBlack />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <ImageTestimoni />
        </div>
      </ContainerSection>
    </section>
  );
};

export default SectionTestimoni;
