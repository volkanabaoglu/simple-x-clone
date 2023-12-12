import React, { useState } from "react";
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

const IconWithText = ({ icon, text, link, active, onMenuItemClick }) => {
  const isActive = active === text;
  const content = (
    <div onClick={() => onMenuItemClick(text)}>
      <div
        className={`inline-flex items-center space-x-2  hover:bg-primary-dark hover:text-white hover:p-4 p-2 rounded-full transform transition-all duration-300 pointer-events-none
      ${isActive ? "text-blue-700 !important" : ""}    
                 `}
      >
        {icon}
        <span className="ml-4 font-bold text-xl">{text}</span>
      </div>
    </div>
  );
  if (link) {
    return (
      <a href={link} className="hover:no-underline">
        {content}
      </a>
    );
  }

  return <div>{content}</div>;
};

const Sidebar = () => {
  const [active, setActive] = useState("Home");
  const onMenuItemClick = (text) => {
    setActive(text);
  };
  return (
    <div className="flex flex-col justify-between w-72 ">
      <div className="space-y-5 pl-2">
        <a href="/">
          <img
            src={twitterLogo}
            className="w-9 h-10 hover:bg-primary-dark hover:text-white rounded-full transform transition-all duration-300"
            alt="main"
          />
        </a> 
        <IconWithText
          icon={<HomeIcon />}
          text="Ana Sayfa"
          link="/"
          active={active}
          onMenuItemClick={onMenuItemClick}
        />
        <IconWithText
          icon={<ExploreIcon />}
          text="Keşfet"
          link="/explore"
          active={active}
          onMenuItemClick={onMenuItemClick}
        />
        <IconWithText
          icon={<NotificationIcon />}
          text="Bildirimler"
          link="/notifications"
          active={active}
          onMenuItemClick={onMenuItemClick}
        />
        <IconWithText
          icon={<MessagesIcon />}
          text="Mesajlar"
          link="/messages"
          active={active}
          onMenuItemClick={onMenuItemClick}
        />
        <IconWithText icon={<ListsIcon />} text="Listeler" link="/lists" />
        <IconWithText
          icon={<DirectionsIcon />}
          text="Yer İşaretleri"
          link="/directions"
          active={active}
          onMenuItemClick={onMenuItemClick}
        />
        <IconWithText
          icon={<CommunitiesIcon />}
          text="Topluluklar"
          link="/communities"
          active={active}
          onMenuItemClick={onMenuItemClick}
        />
        <IconWithText
          icon={<PremiumIcon />}
          text="Premium"
          link="/premium"
          active={active}
          onMenuItemClick={onMenuItemClick}
        />
        <IconWithText
          icon={<ProfileIcon />}
          text="Profil"
          link="/profile"
          active={active}
          onMenuItemClick={onMenuItemClick}
        />
        <IconWithText
          icon={<MoreIcon />}
          text="Daha Fazla"
          link="/more"
          active={active}
          onMenuItemClick={onMenuItemClick}
        />
      </div>
      <div>bottom side</div>
    </div>
  );
};
export default Sidebar;
