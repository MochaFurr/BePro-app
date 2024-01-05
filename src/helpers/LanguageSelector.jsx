import { useState } from "react";
import { useTranslation } from "react-i18next";
import { romania, france, uk, dutch } from "../assets";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const [selectLanguage, setSelectLanguage] = useState("en");

  const selectLanguageHandler = (event) => {
    const newLanguage = event.target.value;

    setSelectLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  const getFlagLanguage = (languageCode) => {
    const language = languages.find((lang) => lang.code === languageCode);
    return language ? language.flag : null;
  };

  const English = t("en");
  const French = t("fr");
  const Dutch = t("nl");
  const Romanian = t("ro");

  const languages = [
    { code: "en", name: English, flag: uk },
    { code: "fr", name: French, flag: france },
    { code: "nl", name: Dutch, flag: dutch },
    { code: "ro", name: Romanian, flag: romania },
  ];

  return (
    <div className="flex flex-col items-center w-24 h-12 bg-black">
      <label className="flex items-center space-x-2">
        {t("language")}

        {getFlagLanguage(selectLanguage) && (
          <img
            src={getFlagLanguage(selectLanguage)}
            alt={selectLanguage}
            className="w-5 h-5 ml-2"
          />
        )}
      </label>
      <select
        className="bg-black hover:text-yellow-200 cursor-pointer"
        defaultValue={"en"}
        onChange={selectLanguageHandler}
      >
        {languages.map((lang) => (
          <option className="" key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
