import {
  DangandCreatifStudio,
  Facebook,
  Instagram,
  LinkedInd,
  Youtube,
} from "@/assets/svg";
import { BaseButton } from "@/components/input";
import { ContainerSection } from "@/components/layout";

const SectionFooter = () => {
  return (
    <section className="w-full bg-[#1E1B4B]">
      <footer className="flex flex-col max-w-screen-xl gap-12 mx-auto py-14">
        <div className="flex flex-row gap-24 text-white">
          <div className="flex flex-col">
            <div className="flex flex-col flex-1 gap-7 border-b border-[#0C3868] pb-8">
              <h4 className="text-lg text-[#B2DDF2]">Follow kami:</h4>
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
            <div className="flex flex-col gap-6">
              <h4 className="text-[#B2DDF2] text-lg">Berita Terbaru</h4>
              <p>Dapetin promo dan update terbaru dari Dangand</p>
              <div className="flex flex-col gap-2">
                <label>Email address*</label>
                <input placeholder="Email kamu" className="p-4 rounded-md" />
              </div>
              <BaseButton
                label="Subscribe"
                variant="bordered"
                className="px-8 py-3 text-white border-white"
              />
            </div>
          </div>
          <div className="flex justify-between flex-1 w-full">
            <div className="flex flex-col gap-4">
              <h4 className="text-lg text-[#B2DDF2]">Other Page</h4>
              <div className="flex flex-col gap-2">
                <p>Tentang Kami</p>
                <p>Tema</p>
                <p>Riwayat acara</p>
                <p>Harga</p>
                <p>Kostum Undangan</p>
                <p>Support</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-lg text-[#B2DDF2]">Company</h4>
              <div className="flex flex-col gap-2">
                <p>Terms Conditions</p>
                <p>Privacy Policy</p>
                <p>Cookies</p>
                <p>Careers</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-lg text-[#B2DDF2]">Partner</h4>
              <div className="flex flex-col gap-2">
                <p>Afiliate</p>
                <p>Template</p>
                <p>Organizer</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-lg text-[#B2DDF2]">Contact</h4>
              <div className="flex flex-col gap-2">
                <p>support@dangand.com</p>
                <p>+62 88212253403</p>
                <p>Tangerang, kelapa dua, serpong</p>
                <p>Help Center</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-24 text-[#B2DDF2] ">
          <div className="relative">
            <p className="absolute text-xs text-white left-24 top-10">
              by Creatif Studio
            </p>
            <DangandCreatifStudio />
          </div>
          <div className="flex flex-row gap-14">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Data Processing</p>
            <p>Security</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default SectionFooter;
