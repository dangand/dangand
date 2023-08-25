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
    <nav className="w-full bg-[#050505] px-3 py-5 text-white">
      <div className="flex max-w-screen-xl mx-auto items-center justify-between">
        {/* brand icon */}
        <div className="flex items-center gap-3">
          <DangandIconPrimary width={40} height={40} />
          <Text variant="title" weight="medium" className="font-trip-sans-mono">
            Dangand
          </Text>
        </div>

        {/* nav menu */}
        <div className="lg:flex items-center gap-6 hidden">
          {NAVBAR_LANDING_PAGE.map((item) => (
            <Link key={item.label} href={item.path}>
              <p
                className={`${
                  currentRoute == item.path ? "text-white font-medium" : ""
                } text-neutral-300 text-base hover:text-white tansition duration`}
              >
                {t(item.label)}
              </p>
            </Link>
          ))}
        </div>

        {/* button action */}
        <div className="flex items-center gap-3">
          <Link href={"/auth/login"}>
            <BaseButton variant="bordered" label={t("login")} />
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
