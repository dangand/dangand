import React from "react";

import { DangandIconPrimary, EnglishIcon, IndonesiaIcon } from "@/assets/svg";
import { BaseButton } from "@/components/input";
import { Container, Row } from "@/components/layout";
import { Dropdown, Navigate } from "@/components/navigation";
import { Text } from "@/components/typography";
import { useTranslation } from "react-i18next";

export const NavbarLandingPage = () => {
  const { t, i18n } = useTranslation();
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

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <Container maxWidth="xl" className="p-3">
      <Row justify="between" alignItems="center">
        <Row spacing={3} alignItems="center">
          <DangandIconPrimary width={45} height={45} />
          <Text variant="title" weight="medium">
            Dangand
          </Text>
        </Row>
        <Row spacing={3} alignItems="center">
          <Navigate
            label={t("navhome")}
            to="/dashboard"
            textVariant="body small"
          />
          <Navigate
            label={t("navabout")}
            to="/dashboard"
            textVariant="body small"
          />
          <Navigate
            label={t("navprice")}
            to="/dashboard"
            textVariant="body small"
          />
          <Navigate
            label={t("navtemplate")}
            to="/dashboard"
            textVariant="body small"
          />
          <Navigate
            label={t("navhelp")}
            to="/dashboard"
            textVariant="body small"
          />
        </Row>
        <Row spacing={3} alignItems="center">
          <Dropdown options={options} />
          <BaseButton variant="bordered" label={t("login")} />
          <BaseButton label={t("tryFree")} />
        </Row>
      </Row>
    </Container>
  );
};
