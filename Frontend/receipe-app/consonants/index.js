import { FaGlobeAmericas } from "react-icons/fa";
import { GiCook, GiMeal } from "react-icons/gi";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
export const navLink = [
  "Home",
  "MyFavorites",
  "MyReceipes",
  "Contact",
  "Login",
];

export const RecipeValues = [
  {
    icon: FaGlobeAmericas,
    title: "Global Flavors, Local Ingredients",
    description:
      "Explore recipes inspired by cuisines from around the world, using ingredients you can find nearby.",
  },
  {
    icon: GiCook,
    title: "Cook with Confidence",
    description:
      "Step-by-step instructions and tips to help you master every dish, whether you're a beginner or a pro.",
  },
  {
    icon: MdOutlineConnectWithoutContact,
    title: "Connect with Food Lovers",
    description:
      "Share your creations, ask questions, and join a passionate community of home cooks.",
  },
  {
    icon: GiMeal,
    title: "Meals for Every Moment",
    description:
      "Find recipes for quick lunches, family dinners, or special celebrations there's something for every occasion.",
  },
];
