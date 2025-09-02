import { useState } from "react";
import Modal from "./Modal";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [AlreadyUser, setAlreadyUser] = useState(true);
  const [isLogin, setIsLogIn] = useState(!!localStorage.getItem("token"));

  const handleLog = () => {
    if (isLogin) {
      toast.success("Logged out successfully.", {
        position: "top-right",
        autoClose: 2000,
        theme: "light",
      });
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setIsLogIn(false);
      return;
    } else {
      setIsOpen(true);
    }
  };

  const handleProtectRoute = (e) => {
    if (!isLogin) {
       
    }
  };

  return (
    <>
      <ToastContainer className={"z-50"} />
      <header className="flex items-center justify-between w-screen absolute px-5 z-10">
        <img
          src="/Images/Logo.png"
          alt="Logo"
          className="h-auto w-[clamp(60px,10vw,120px)]"
        />

        <ul className="flex items-center gap-4 capitalize text-sm md:text-base lg:text-lg font-[Pacifico]">
          <li className="cursor-pointer hover:text-amber-500 transition duration-200 p-2">
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={handleProtectRoute}
            className="cursor-pointer hover:text-amber-500 transition duration-200 p-2"
          >
            <Link to={isLogin ? "/favorites" : "/"}>MyFavorites</Link>
          </li>
          <li
            onClick={handleProtectRoute}
            className="cursor-pointer hover:text-amber-500 transition duration-200 p-2"
          >
            <Link to={isLogin ? "/myrecipes" : "/"}>MyRecipes</Link>
          </li>
          <li className="cursor-pointer hover:text-amber-500 transition duration-200 p-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li
            onClick={handleLog}
            className="cursor-pointer bg-amber-500 text-white hover:text-amber-500 hover:bg-white transition duration-200 p-2"
          >
            {isLogin ? "Logout" : "Login"}
          </li>
        </ul>
      </header>

      {isOpen && !isLogin && (
        <Modal
          setIsOpen={setIsOpen}
          AlreadyUser={AlreadyUser}
          setAlreadyUser={setAlreadyUser}
          setIsLogIn={setIsLogIn}
        />
      )}
    </>
  );
}
