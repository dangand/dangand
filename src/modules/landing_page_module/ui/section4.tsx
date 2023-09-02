import {
  CheckCircleActive,
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
    ],
  },
];

const section4 = () => {
  return (
    <section className="flex flex-col justify-center w-full gap-12 py-12 md:flex-row">
      {PriceType.map((value, index) => (
        <div
          className="flex flex-col  p-4 mx-5 shadow-lg md:w-[25%] rounded-xl"
          key={value.title}
        >
          <p
            className={clsx(
              "mt-3 text-xl font-medium",
              value.recommended ? "text-indigo-500" : "text-black",
            )}
          >
            {value.title}
          </p>
          <p className="text-2xl">Rp. {value.price.toLocaleString("id-ID")}</p>
          <p>{value.description}</p>
          <div className="mt-4">
            {value.fitur.map((values) => (
              <div className="flex gap-2" key={values.name}>
                {values.active == true ? (
                  <CheckCircleActive />
                ) : (
                  <TimesCircleNoneActive />
                )}
                <p>{values.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default section4;
