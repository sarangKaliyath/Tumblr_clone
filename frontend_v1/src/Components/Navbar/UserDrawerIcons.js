import { MdOutlineFavorite } from "react-icons/md";
import { BiUserPlus } from "react-icons/bi";
import {
  IoIosSettings,
  IoIosHelpCircle,
  IoMdColorPalette,
} from "react-icons/io";
import { BiGift } from "react-icons/bi";
import { BsKeyboard } from "react-icons/bs";

const style = "10px";

export const items = [
  {
    icon: <MdOutlineFavorite style={{ marginRight: style }} size={25} />,
    text: "Likes",
  },
  {
    icon: <BiUserPlus style={{ marginRight: style }} size={25} />,
    text: "Following",
  },
  {
    icon: <IoIosSettings style={{ marginRight: style }} size={25} />,
    text: "Settings",
  },
  {
    icon: <BiGift style={{ marginRight: style }} size={25} />,
    text: "What's new",
  },
  {
    icon: <IoIosHelpCircle style={{ marginRight: style }} size={30} />,
    text: "Help",
  },
  {
    icon: <BsKeyboard style={{ marginRight: style }} size={25} />,
    text: "Keyboard shortcuts",
  },
  {
    icon: <IoMdColorPalette style={{ marginRight: style }} size={25} />,
    text: "Change Pallette",
  },
];
