import {
  HiChatBubbleBottomCenterText,
  HiEnvelope,
  HiHome,
  HiRectangleGroup,
  HiUser,
  HiViewColumns,
} from "react-icons/hi2";

export const links = [
  { name: "home", path: "/", icon: <HiHome />, label: "home icon" },
  { name: "about", path: "/about", icon: <HiUser />, label: "user icon" },
  {
    name: "services",
    path: "/services",
    icon: <HiRectangleGroup />,
    label: "rectangle group icon",
  },
  {
    name: "work",
    path: "/work",
    icon: <HiViewColumns />,
    label: "view columns icon",
  },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
    label: "chat bubble icon",
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
    label: "envelope icon",
  },
];
