import { SolutionImage } from "@/assets/svg";
import { BaseButton } from "@/components/input";
import { ContainerSection } from "@/components/layout";

const SectionSolution = () => {
  return (
    <section className="w-full bg-[#E0E7FF]">
      <ContainerSection>
        <div className="flex flex-row max-w-screen-lg gap-20 mx-auto">
          <div className="flex flex-col gap-3 flex-2">
            <p className="text-sm text-indigo-500">cepat tapi bukan sicepat</p>
            <h2 className="  text-[#422439] text-3xl">
              Solusi buat kamu yang males menunggu
            </h2>
            <p className="text-base">
              Kamu masih buat undangan pakai kertas, atau order undangan digital
              tapi lama nunggu proses jadinya? di Dangand kamu gk perlu tuh yang
              nama nya menunggu, semuanya kamu yang buat dan atur admin Dangand
              tau rasanya cape menunggu yang tidak pasti kamu bisa mengatur dari
              tema, gambar, semuanya deh sesuka kamu
            </p>
            <BaseButton label="Ayo coba sekarang" variant="bordered" />
          </div>
          <div className="flex-1">
            <SolutionImage />
          </div>
        </div>
      </ContainerSection>
    </section>
  );
};

export default SectionSolution;
