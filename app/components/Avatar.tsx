import Image from "next/image";
import AvatarImg from "@/public/notuser.jpg";

const Avatar = () => {
  return (
    <Image
      alt="Avatar"
      src={AvatarImg}
      className="hidden md:block rounded-full cursor-pointer w-[30px] h-auto"
    />
  );
};

export default Avatar;
