import {
  CheckCircleActive,
  CheckCircleWhite,
  FreePrice,
  PartyPrice,
  Receipt,
  StarterPrice,
  TimesCircleNoneActive,
} from "@/assets/svg";
import { clsx } from "@/libs";
import { List } from "antd";

type LIST_FITUR = {
  name: string;
  active: boolean;
};

type PRICE_TYPE = {
  price: number;
  icon: JSX.Element;
  title: string;
  description: string;
  recommended: boolean;
  fitur: LIST_FITUR[];
};

const PriceType: PRICE_TYPE[] = [
  {
    title: "Free Plan",
    description: "Tidak perlu bayar sepersenpun, dan coba fitur gratisnya",
    price: 0,
    icon: <FreePrice />,
    recommended: false,
    fitur: [
      {
        name: "test",
        active: true,
      },
      {
        name: "test1",
        active: false,
      },
      {
        name: "test2",
        active: false,
      },
      {
        name: "test2",
        active: false,
      },
      {
        name: "test2",
        active: false,
      },
    ],
  },
  {
    title: "Starter Plan",
    description:
      "Nikmati Starter Plan dengan biaya yang murah, dan fiturnya tidak murahan",
    price: 100000,
    icon: <StarterPrice />,
    recommended: true,
    fitur: [
      {
        name: "test",
        active: true,
      },
      {
        name: "test1",
        active: true,
      },
      {
        name: "test2",
        active: false,
      },
      {
        name: "test2",
        active: false,
      },
      {
        name: "test2",
        active: false,
      },
    ],
  },
  {
    title: "Party Plan",
    description: "Nikmati semua fitur dengan memilih Party Plan",
    price: 200000,
    icon: <PartyPrice width={300} />,
    recommended: false,
    fitur: [
      {
        name: "test",
        active: true,
      },
      {
        name: "test1",
        active: true,
      },
      {
        name: "test2",
        active: true,
      },
      {
        name: "test2",
        active: false,
      },
      {
        name: "test2",
        active: false,
      },
    ],
  },
];

const section4 = () => {
  return (
    <section className="flex flex-col items-center mt-16">
      <div className="flex flex-col items-center px-7 ">
        <h1 className="text-3xl font-semibold">Pesan Sekarang</h1>
        <h2 className="text-lg text-center">
          Harga murah tapi kualitas tidak murahan, Cuman ada di Dangand
        </h2>
      </div>
      <div className="flex flex-col justify-center w-full gap-10 py-12 md:gap-1 md:flex-row">
        {PriceType.map((value, index) => (
          <div
            className={clsx(
              "flex flex-col  p-8 mx-5 shadow-lg md:w-[28%] rounded-xl justify-between",
              value.recommended ? "bg-neutral-800" : "bg-white",
            )}
            key={value.title}
          >
            <div>
              <div className="flex justify-between">
                <p
                  className={clsx(
                    "mt-3 text-lg font-medium",
                    value.recommended ? "text-amber-300" : "text-indigo-500",
                  )}
                >
                  {value.title}
                </p>
                {value.recommended ? (
                  <p className="px-6 text-sm bg-white h-7 rounded-[20px] justify-center text-black pt-1">
                    Best Price
                  </p>
                ) : null}
              </div>
              <p
                className={clsx(
                  "text-2xl font-medium",
                  value.recommended ? "text-white" : "text-black",
                )}
              >
                Rp. {value.price.toLocaleString("id-ID")}
              </p>
              <p
                className={clsx(
                  value.recommended ? "text-white" : "text-neutral-600",
                  "text-sm",
                )}
              >
                {value.description}
              </p>
              <div className="flex flex-col gap-1 mt-4">
                {value.fitur.map((values) => (
                  <div className="flex gap-3 " key={values.name}>
                    {values.active == true && value.recommended ? (
                      <CheckCircleWhite />
                    ) : values.active == true ? (
                      <CheckCircleActive />
                    ) : (
                      <TimesCircleNoneActive />
                    )}
                    <p
                      className={clsx(
                        value.recommended ? "text-white" : "text-black",
                      )}
                    >
                      {values.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <button
              className={clsx(
                "py-2 rounded-[15px]  mt-7",
                value.recommended
                  ? "text-black, bg-white"
                  : "text-white bg-indigo-500",
              )}
            >
              Pilih Paket
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default section4;
