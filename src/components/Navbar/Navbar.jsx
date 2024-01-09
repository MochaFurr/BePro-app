import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LanguageSelector from "../../helpers/LanguageSelector";
import { navLinks } from "../../constants";
import { logo } from "../../assets";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-4 bg-black text-white font-semibold">
      {/* Logo */}
      <img
        className="h-24 w-full lg:w-auto mb-4 lg:mb-0"
        src={logo}
        alt="logo"
      />

      {/* Navigation Links and Language Selector */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          {navLinks.map((link) => (
            <Link
              to={link.path}
              className="hover:text-yellow-200 hover:font-bold cursor-pointer"
              key={link.id}
            >
              {t(link.title)}
            </Link>
          ))}
        </div>
        <LanguageSelector />
      </div>
    </div>
  );
};

export default Navbar;
