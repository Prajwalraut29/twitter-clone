import { FaSquareXTwitter } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { Inter } from "next/font/google";
import { AiOutlineUser } from "react-icons/ai";
import { BiHash, BiUser } from "react-icons/bi";
import { RiTwitterXLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { BsBell, BsBookmark, BsEnvelope } from "react-icons/bs";
import FeedCard from "@/components/FeedCard";
const inter = Inter({ subsets: ["latin"] });
interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}
const SidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <IoHome />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notification",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "User",
    icon: <BiUser />,
  },
  {
    title: "Premuim",
    icon: <RiTwitterXLine />,
  },
  {
    title: "profile",
    icon: <AiOutlineUser />,
  },
  {
    title: "more option",
    icon: <BsThreeDots />,
  },
];
export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className=" col-span-3  pt-1 ml-24">
          <div className="cursor-pointer text-2xl h-fit w-fit    hover:bg-gray-600 rounded-full p-4  transition-all ">
            <RiTwitterXLine />
          </div>
          <div className="mt-10 font-xl  pr-4">
            <ul>
              {SidebarMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center gap-4 hover:bg-gray-600 rounded-full px-3 py-3  cursor-pointer"
                  key={item.title}
                >
                  <span className="text-3xl ">{item.icon}</span>{" "}
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 pl-4 ">
              <button className="p-4 py-2 text-lg font-semibold  bg-[#1d9bf0] rounded-full w-full hover:bg-blue-500">
                Post
              </button>
            </div>
          </div>
        </div>
        <div className="example col-span-5 h-screen overflow-scroll border border-gray-600 border-r-[1px] border-l-[1px] ">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
}
