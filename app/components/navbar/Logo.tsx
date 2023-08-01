import Image from "next/image";
import LogoImg from "@/public/logo.png";

const Logo = () => {
  return (
    <Image
      alt="Logo"
      src={LogoImg}
      className="hidden md:block cursor-pointer w-[150px] h-auto"
    />
  );
};

export default Logo;
