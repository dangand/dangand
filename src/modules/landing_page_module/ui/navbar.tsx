import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { DangandIconPrimary, EnglishIcon, IndonesiaIcon } from "@/assets/svg";
import { BaseButton } from "@/components/input";
import { Container, Row } from "@/components/layout";
import { Dropdown, Navigate } from "@/components/navigation";
import { Text } from "@/components/typography";
import { NAVBAR_LANDING_PAGE } from "@/constants/navItems";
import { useTranslation } from "react-i18next";

export const NavbarLandingPage = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const options = [
    {
      icon: <IndonesiaIcon />,
      label: "Indonesia",
      action: () => changeLanguage("id"),
    },
    {
      icon: <EnglishIcon />,
      label: "English",
      action: () => changeLanguage("en"),
    },
  ];

  return (
    <nav className="w-full bg-[#E0E7FF] px-4 lg:px-20 py-5 text-white">
      <div className="flex items-center justify-between w-full mx-auto md:max-w-screen-xl">
        <div className="flex gap-14">
          {/* brand icon */}
          <div className="flex items-center gap-3">
            <DangandIconPrimary width={40} height={40} />
            <Text
              variant="title"
              weight="semibold"
              className="text-black font-trip-sans-mono"
            >
              Dangand
            </Text>
          </div>

          {/* nav menu */}
          <div className="items-center hidden gap-6 lg:flex">
            {NAVBAR_LANDING_PAGE.map((item) => (
              <Link key={item.label} href={item.path}>
                <p
                  className={`${
                    currentRoute == item.path
                      ? "text-indigo-800 font-semibold"
                      : ""
                  } text-[#011F44] text-base hover:text-indigo-800 font-medium tansition duration`}
                >
                  {t(item.label)}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* button action */}
        <div className="lg:flex hidden items-center gap-3">
          <Link href={"/auth/login"}>
            <BaseButton variant="transparent" label={t("login")} />
          </Link>
          <Link href={"/auth/register"}>
            <BaseButton label={t("tryFree")} />
          </Link>
        </div>
      </div>
    </nav>
    // <Container maxWidth="xl" className="px-3 py-5">
    //   <Row justify="between" alignItems="center">
    //     <Row spacing={3} alignItems="center">
    //       <DangandIconPrimary width={45} height={45} />
    //       <Text variant="title" weight="medium">
    //         Dangand
    //       </Text>
    //     </Row>
    //     <Row spacing={3} alignItems="center">
    //       {NAVBAR_LANDING_PAGE.map((item) => (
    //         <Navigate
    //           key={item.label}
    //           label={t(item.label)}
    //           to={item.path}
    //           textVariant="body small"
    //         />
    //       ))}
    //     </Row>
    //     <Row spacing={2} alignItems="center">
    //       <Dropdown options={options} />
    //       <Link href={"/auth/login"}>
    //         <BaseButton variant="bordered" label={t("login")} />
    //       </Link>
    //       <Link href={"/auth/register"}>
    //         <BaseButton label={t("tryFree")} />
    //       </Link>
    //     </Row>
    //   </Row>
    // </Container>
  );
};
