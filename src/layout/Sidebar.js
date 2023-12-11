import React from "react";
import twitterLogo from "../images/icons8-twitterx.svg";
import {
  HomeIcon,
  ExploreIcon,
  NotificationIcon,
  MessagesIcon,
  ListsIcon,
  DirectionsIcon,
  CommunitiesIcon,
  PremiumIcon,
  ProfileIcon,
  MoreIcon,
} from "../icons/icons";

const IconWithText = ({ icon, text }) => {
  return (
    <div className="flex items-center space-x-2  hover:bg-primary-dark hover:text-white p-2 rounded-full transform transition-all duration-300">
      {icon}
      <span className="ml-4 font-bold text-xl">{text}</span>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between w-72 ">
      <div className="space-y-5 pl-2">
        <img src={twitterLogo} className="w-9 h-10 hover:bg-primary-dark hover:text-white rounded-full transform transition-all duration-300" alt="main" />
        <IconWithText icon={<HomeIcon />} text="Ana Sayfa" />
        <IconWithText icon={<ExploreIcon />} text="Keşfet" />
        <IconWithText icon={<NotificationIcon />} text="Bildirimler" />
        <IconWithText icon={<MessagesIcon />} text="Mesajlar" />
        <IconWithText icon={<ListsIcon />} text="Listeler" />
        <IconWithText icon={<DirectionsIcon />} text="Yer İşaretleri" />
        <IconWithText icon={<CommunitiesIcon />} text="Topluluklar" />
        <IconWithText icon={<PremiumIcon />} text="Premium" />
        <IconWithText icon={<ProfileIcon />} text="Profil" />
        <IconWithText icon={<MoreIcon />} text="Daha Fazla" />
      </div>
      <div>bottom side</div>
    </div>
  );
};
export default Sidebar;
