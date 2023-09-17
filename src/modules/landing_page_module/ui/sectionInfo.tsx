import { CostImageInfo, DataImageInfo, PresenceImageInfo } from "@/assets/svg";
import { BaseButton } from "@/components/input";
import { ContainerSection } from "@/components/layout";
import { clsx } from "@/libs";

type INFO_TYPE = {
  note: string;
  title: string;
  subTitle: string;
  deskripsi: string;
  Image: any;
};

const InfoItem: INFO_TYPE[] = [
  {
    note: "Atur gayamu sendiri",
    title: "Acara kamu,",
    subTitle: "Kamu yang punya kuasa",
    deskripsi:
      "Dengan Dangand, kamu bisa membuat undangan sesuai dengan gaya kamu. Tambahkan foto, animasi, dan sentuhan pribadi lainnya. Hasilnya? Undangan yang unik dan mencerminkan acaramu.",
    Image: <DataImageInfo />,
  },
  {
    note: "Fitur tracking untuk kamu yang posesif",
    title: "Cek Kehadiran",
    subTitle: "dan Tetap Terhubung",
    deskripsi:
      "kamu nggak perlu bingung lagi soal siapa yang datang atau nggak. Fitur manajemen kehadiran yang canggih membantu kamu melacak konfirmasi tamu dengan mudah. Selain itu, kamu juga bisa ngobrol seru dan berbagi momen pra-acara!",
    Image: <PresenceImageInfo />,
  },
  {
    note: "Kelola budget kamu",
    title: "Hemat Biaya ",
    subTitle: "dan Ramah Lingkungan",
    deskripsi:
      "Pindah ke undangan digital bukan cuma seru, tapi juga berarti peduli lingkungan. Nggak ada lagi kertas yang terbuang sia-sia. Selain itu, kamu bisa hemat biaya cetak dan kirim. Jadi acaramu tetap seru tanpa merogoh kocek banyak!",
    Image: <CostImageInfo />,
  },
];

const SectionInfo = () => {
  return (
    <section className="bg-[#E0E7FF] w-full">
      <ContainerSection className="flex flex-col items-center gap-32">
        <p className="text-5xl">Gimana cara Dangand bisa bantu acara kamu?</p>
        <div className="flex flex-col gap-[152px] max-w-screen-lg">
          {InfoItem.map((value, index) => (
            <div
              key={index}
              className={clsx(
                index % 2 === 0 ? "flex-row" : "flex-row-reverse",
                "flex justify-center gap-20",
              )}
            >
              <div className="flex flex-col flex-1 gap-3">
                <p className="text-sm text-indigo-500">{value.note}</p>
                <h2 className="  text-[#422439] text-3xl">
                  {value.title}
                  <br /> {value.subTitle}
                </h2>
                <p className="text-base">{value.deskripsi}</p>
                <BaseButton label="Lihat Selengkapnya" variant="bordered" />
              </div>
              <div className="flex1">{value.Image}</div>
            </div>
          ))}
        </div>
      </ContainerSection>
    </section>
  );
};

export default SectionInfo;
