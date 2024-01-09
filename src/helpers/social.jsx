import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Social = () => {
  const socialLinks = [
    {
      name: "facebook",
      link: "https://www.facebook.com/profile.php?id=61553248260836",
      icon: <FaFacebookF />,
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/beprodetailing",
      icon: <FaInstagram />,
    },
    {
      name: "tiktok",
      link: "https://www.tiktok.com/@beprodetailing",
      icon: <FaTiktok />,
    },
  ];

  return (
    <div className="flex flex-row mr-3 text-lg">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.link}
          className="mr-2 hover:text-yellow-300 text-lg"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
