import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LanguageSelector from "../../helpers/LanguageSelector";
import { navLinks } from "../../constants";
import { logo } from "../../assets";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-between items-center p-4 bg-black text-white font-semibold">
      <img className="h-24 w-124" src={logo} alt="logo" />
      <div className="flex items-center space-x-6">
        <div className="items-center space-x-2">
          {navLinks.map((links) => (
            <Link
              to={links.path}
              className=" hover:text-yellow-200 hover:font-bold cursor-pointer"
              key={links.id}
            >
              {t(links.title)}
            </Link>
          ))}
        </div>
        <LanguageSelector />
      </div>
    </div>
  );
};

export default Navbar;
