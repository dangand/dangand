import Link from "next/link";

import { LandingPage } from "@/module/landing-page";
import { useTranslation } from "react-i18next";

export default function Home() {
  // const { t, i18n } = useTranslation();
  // const [hiddenText, setHiddenText] = useState(false);

  // const changeLanguage = (language: string) => {
  //   i18n.changeLanguage(language);
  // };

  return (
    <>
      <LandingPage />
    </>
  );
}
