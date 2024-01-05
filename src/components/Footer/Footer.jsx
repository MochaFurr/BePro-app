import { useTranslation } from "react-i18next";
import { footerLinks } from "../../constants";
import Social from "../../helpers/social";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="flex bg-black pl-20 pr-20 pt-[75px]">
      <div className="bg-black text-white ">
        <div>
          <div className="flex flex-warp justify-between">
            <div className="w-1/3 p-4  mb-4">
              <h4 className="font-semibold mb-4">{t("aboutUs")}</h4>
              <div>
                <p>{t("description")}</p>
              </div>
            </div>
            <div className="w-1/3 p-4 mb-4">
              <h4 className="mb-4 font-semibold">{t("address&contact")}</h4>
              <div className="">
                <p className="mb-3">
                  Stuivenbergstraat 96/4, <br />
                  8870 Izegem
                </p>
                <p className="flex  flex-row items-center mb-3 hover:bg-yellow-200 hover:text-black hover:rounded-md">
                  <MdOutlineAlternateEmail className="mr-1.5" />
                  <a href="mailto:BeProDetailing@gmail.com">
                    BeProDetailing@gmail.com
                  </a>
                </p>
                <p className=" flex  flex-row items-center mb-3 hover:bg-yellow-200 hover:text-black hover:rounded-md ">
                  <FaPhoneAlt className="mr-1.5" />
                  <a href="tel:+320499009632">+32 0499 00 96 32</a>
                </p>
                <p className="flex  flex-row items-center mb-3 hover:bg-yellow-200 hover:text-black hover:rounded-md ">
                  <FaWhatsapp className="mr-1.5" />
                  <a href="https://api.whatsapp.com/send?phone=+320499009632&text=Hello%20there!">
                    0499 00 96 32
                  </a>
                </p>
              </div>
            </div>
            <div className="w-1/3 p-4 mb-4">
              <h4 className="font-semibold mb-4">{t("links")}</h4>
              <div>
                {footerLinks.map((link) => (
                  <p
                    key={link.name}
                    className="mb-3 hover:bg-yellow-200 hover:text-black hover:rounded-md"
                  >
                    <Link to={link.link}>{t(link.name)}</Link>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between ">
          <div>
            <h3 className="font-semibold">© 2024 BePro Detailing</h3>
          </div>
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Footer;
