import {
  DetailImageStep,
  RegisterImageStep,
  SendImageStep,
} from "@/assets/svg";
import { ContainerSection, TitleSection } from "@/components/layout";

type STEP_TYPE = {
  title: string;
  deskripsi: string;
  image: any;
};

const StepItem: STEP_TYPE[] = [
  {
    image: <RegisterImageStep />,
    title: "Daftar dulu dong",
    deskripsi:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ",
  },
  {
    image: <DetailImageStep />,
    title: "Isi detail & tema undangan",
    deskripsi:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ",
  },
  {
    image: <SendImageStep />,
    title: "Kirim undangan",
    deskripsi:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ",
  },
];

const SectionInvitationStep = () => {
  return (
    <section className="w-full bg-[#C7D2FE]">
      <ContainerSection className="flex flex-col items-center gap-6 md:gap-14">
        <TitleSection className="text-[#011F44] text-center">
          Langkah - langkah buat undangan di Dangand
        </TitleSection>

        <div className="flex flex-col gap-6 md:flex-row md:gap-14">
          {StepItem.map((value, index) => (
            <div
              className="flex flex-col gap-2 text-[#011F44] items-center"
              key={index}
            >
              {value.image}
              <h3 className="text-2xl 2xl:text-3xl">{value.title}</h3>
              <p className="text-base text-center">{value.deskripsi}</p>
            </div>
          ))}
        </div>
      </ContainerSection>
    </section>
  );
};

export default SectionInvitationStep;
