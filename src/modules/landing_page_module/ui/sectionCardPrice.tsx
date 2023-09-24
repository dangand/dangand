import { IconCheck, MaskotPremium } from "@/assets/svg";
import { BaseButton } from "@/components/input";
import { ContainerSection, TitleSection } from "@/components/layout";
import { clsx } from "@/libs";

type LIST_FITUR_TYPE = {
  name: string;
};

type CARD_PRICE_TYPE = {
  recommended: boolean;
  namePrice: string;
  discount: number;
  price: number;
  textButton: string;
  titleFitur: string;
  listFiturType: LIST_FITUR_TYPE[];
};

const CardPriceItem: CARD_PRICE_TYPE[] = [
  {
    namePrice: "Free",
    discount: 0,
    price: 0,
    textButton: "Mulai sekarang gratis",
    titleFitur: "Akses fitur basic, dan :",
    recommended: false,
    listFiturType: [
      {
        name: "1 Undangan",
      },
      {
        name: "50 Tamu",
      },
      {
        name: "Kirim undangan tanpa batas",
      },
    ],
  },
  {
    namePrice: "Lite",
    discount: 30,
    price: 149000,
    textButton: "Coba bentar aja 14 hari",
    titleFitur: "Semua fitur di paket free, dan:",
    recommended: false,
    listFiturType: [
      {
        name: "5 Undangan",
      },
      {
        name: "100 Tamu/undangan",
      },
      {
        name: "50 Kirim whatsapp",
      },
      {
        name: "50 Kirim email",
      },
    ],
  },
  {
    namePrice: "Party",
    discount: 37,
    price: 299000,
    textButton: "Saya ingin yang ini",
    titleFitur: "Semua di pake Lite, dan:",
    recommended: true,
    listFiturType: [
      {
        name: "10 Undangan",
      },
      {
        name: "500 Tamu/undangan",
      },
      {
        name: "Unlimitide kirim whatsapp",
      },
      {
        name: "Unlimitide kirim email",
      },
      {
        name: "Tema premium",
      },
      {
        name: "Fitur RSVP",
      },
      {
        name: "Google Kalender",
      },
      {
        name: "Menambah admin, atau pengelola acara",
      },
    ],
  },
];

const SectionCardPrice = () => {
  return (
    <section className="w-full bg-[#E0E7FF]">
      <ContainerSection className="flex flex-col items-center gap-6 md:gap-10">
        <div className="flex flex-col items-center w-full gap-2 text-center">
          <TitleSection>
            Mulai sekarang, sisa nya bisa di atur nanti.
          </TitleSection>

          <p className="text-xl w-full md:w-[845px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
        </div>
        <div className="flex flex-col gap-6 md:gap-0 w-full md:flex-row ">
          {CardPriceItem.map((value, index) => (
            <div className={clsx("w-full ")} key={index}>
              <div
                className={clsx(
                  "w-full",
                  index == 0
                    ? "rounded-t-2xl md:rounded-tl-2xl"
                    : index == CardPriceItem.length - 1
                    ? "rounded-t-2xl md:rounded-tr-2xl"
                    : "rounded-t-2xl md:rounded-none",
                  value.recommended
                    ? "bg-black  pt-6 pb-3 rounded-tl-2xl"
                    : "bg-[#6366F1] md:mt-3 py-3",
                )}
              >
                <h3 className="text-center text-white">{value.namePrice}</h3>
              </div>
              <div
                className={clsx(
                  "bg-[#C7D2FE] flex flex-col items-center gap-2 p-6 md:p-12 md:h-[821px] rounded-b-2xl md:rounded-none",
                  index == 1 ? "md:border-x-2 md:border-[#6366F1]" : null,
                )}
              >
                <div className="flex flex-col items-center gap-2 ">
                  {value.discount == 0 ? (
                    <div className="mt-4"></div>
                  ) : (
                    <p className="text-[#3730A3] text-center text-xs">
                      HEMAT {value.discount}%
                    </p>
                  )}
                  <div className="flex flex-row gap-2 text-center text-[#422439]">
                    <p className="text-sm ">Rp</p>
                    <p className="text-5xl ">
                      {value.price.toLocaleString("id-ID")}
                    </p>
                  </div>
                  <p>akses selamanya</p>
                </div>
                <BaseButton
                  className="w-full"
                  label={value.textButton}
                  variant={value.recommended ? "primary" : "bordered"}
                />
                <div className="flex flex-col text-[#422439] text-start w-full px-12 gap-4 mt-8">
                  <p className="text-sm font-medium">{value.titleFitur}</p>
                  {value.listFiturType.map((value, index) => (
                    <div className="flex flex-row gap-4" key={index}>
                      <IconCheck />
                      <p>{value.name}</p>
                    </div>
                  ))}
                </div>
                {value.recommended ? (
                  <div className="relative w-full">
                    <div className="relative flex flex-col items-center w-full gap-8 ">
                      <p className="text-3xl">+</p>
                      <div className="w-[304px] bg-[#DDD6FE] border-[#8B5CF6] text-center text-[#422439] px-6 py-4">
                        <p className="text-lg">Support Premium</p>
                        <p className="text-base">
                          Bantuan pengelolaan data tamu, jika kamu males ngedata
                          tamu
                        </p>
                      </div>
                    </div>
                    <div className="absolute right-0 top-2">
                      <MaskotPremium />
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </ContainerSection>
    </section>
  );
};

export default SectionCardPrice;
