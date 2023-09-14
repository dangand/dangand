import {
  DangandIconPrimary,
  DangandIconSecondary,
  EmailIcon,
  Facebook,
  Instagram,
  LinkedInd,
  LocationIcon,
  PhoneIcon,
  Youtube,
} from "@/assets/svg";
import { Text } from "@/components/typography";

const Footer = () => {
  return (
    <footer className="  bg-indigo-500 rounded-t-3xl  py-14 text-white">
      <div className="md:px-24 px-6 md:flex md:justify-between">
        <div>
          <h2 className=" text-4xl font-bold mb-3">
            Selamatkan Waktu dan Rencanakan dengan Lebih Mudah!
          </h2>
          <p className="text-gray-200">
            Bergabunglah dengan kami untuk undangan online praktis. Hemat waktu
            dan ciptakan momen istimewa yang tak terlupakan!
          </p>
        </div>
        <button className="px-3 font-medium py-2 bg-white text-black rounded-2xl mt-4">
          Mulai Sekarang
        </button>
      </div>
      <div className="mb-14 mt-14 h-[2px] bg-indigo-300"> </div>
      <div className="flex flex-col md:flex-row gap-5 px-6 md:px-24 md:justify-between">
        <div className=" flex flex-col gap-3 w-[70%]">
          <div className="flex items-center gap-3">
            <DangandIconSecondary width={40} height={40} />
            <Text
              variant="title"
              weight="medium"
              className="font-trip-sans-mono"
            >
              Dangand
            </Text>
          </div>
          <p className="text-gray-200">
            Dangand, Bojong Nangka, Kelapa Dua, Tangerang Regency, Banten 15810
          </p>
          <div className="flex gap-5">
            <a
              href="https://www.facebook.com/profile.php?id=61551154765948&mibextid=ZbWKwL"
              target="_blank"
            >
              <Facebook />
            </a>
            <a href="https://instagram.com/dangand.id" target="_blank">
              <Instagram />
            </a>
            <LinkedInd />
            <Youtube />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between w-full ">
          <div>
            <h3 className="text-xl mb-3 font-medium">Halaman Lain</h3>
            <div className="flex flex-col gap-2">
              <p>About</p>
              <p>Template</p>
              <p>Partner</p>
              <p>Affliate</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl mb-3 font-medium">Company</h3>
            <div className="flex flex-col gap-2">
              <p>Terms Conditions</p>
              <p>Privacy Police</p>
              <p>Cookies</p>
              <p>Careers</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl mb-3 font-medium">Kontak</h3>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1">
                <EmailIcon />
                <p>support@dangand.com</p>
              </div>
              <div className="flex gap-1">
                <PhoneIcon />
                <p>(+62)882 1225 3403</p>
              </div>
              <div className="flex gap-1">
                <LocationIcon />
                <p>Tangerang, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
