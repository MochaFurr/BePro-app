import { useTranslation } from "react-i18next";
import { footerLinks } from "../../constants";
import Social from "../../helpers/social";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-black text-white py-10 sm:py-16 lg:py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Us */}
          <div className="mb-8 sm:mb-0">
            <h4 className="font-semibold mb-4">{t("aboutUs")}</h4>
            <p>{t("description")}</p>
          </div>

          {/* Address & Contact */}
          <div className="mb-8 sm:mb-0">
            <h4 className="mb-4 font-semibold">{t("address&contact")}</h4>
            <address className="mb-3">
              Stuivenbergstraat 96/4, <br />
              8870 Izegem
            </address>
            <p className="mb-3 flex items-center hover:bg-yellow-200 hover:text-black hover:rounded-md">
              <MdOutlineAlternateEmail className="mr-1.5" />
              <a href="mailto:BeProDetailing@gmail.com">
                BeProDetailing@gmail.com
              </a>
            </p>
            <p className="mb-3 flex items-center hover:bg-yellow-200 hover:text-black hover:rounded-md">
              <FaPhoneAlt className="mr-1.5" />
              <a href="tel:+320499009632">+32 0499 00 96 32</a>
            </p>
            <p className="flex items-center hover:bg-yellow-200 hover:text-black hover:rounded-md">
              <FaWhatsapp className="mr-1.5" />
              <a href="https://api.whatsapp.com/send?phone=+320499009632&text=Hello%20there!">
                +32 0499 00 96 32
              </a>
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">{t("links")}</h4>
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

      {/* Copyright and Social */}
      <div className="mt-8 flex justify-between items-center">
        <div>
          <h3 className="font-semibold">© 2024 BePro Detailing</h3>
        </div>
        <Social />
      </div>
    </div>
  );
};

export default Footer;
