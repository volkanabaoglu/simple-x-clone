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
import UserBox from "../components/UserBox";

const IconWithText = ({ icon, text, link}) => {
  const content = (
    <div>
      <div
        className={"inline-flex items-center space-x-2  hover:bg-primary-dark hover:text-white hover:p-4 p-2 rounded-full transform transition-all duration-300 "}>
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
        />
        <IconWithText
          icon={<ExploreIcon />}
          text="Keşfet"
          link="/explore"
        />
        <IconWithText
          icon={<NotificationIcon />}
          text="Bildirimler"
          link="/notifications"
        />
        <IconWithText
          icon={<MessagesIcon />}
          text="Mesajlar"
          link="/messages"
        />
        <IconWithText icon={<ListsIcon />} text="Listeler" link="/lists" />
        <IconWithText
          icon={<DirectionsIcon />}
          text="Yer İşaretleri"
          link="/directions"
        />
        <IconWithText
          icon={<CommunitiesIcon />}
          text="Topluluklar"
          link="/communities"
        />
        <IconWithText
          icon={<PremiumIcon />}
          text="Premium"
          link="/premium"
        />
        <IconWithText
          icon={<ProfileIcon />}
          text="Profil"
          link="/profile"
        />
        <IconWithText
          icon={<MoreIcon />}
          text="Daha Fazla"
          link="/more"
        />
      </div>
      <div>
        <UserBox />
      </div>
    </div>
  );
};
export default Sidebar;
