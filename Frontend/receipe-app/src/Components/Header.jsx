import { useEffect, useState } from "react";
import { navLink } from "../../consonants";
import Modal from "./Modal";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [AlreadyUser, setAlreadyUser] = useState(true);
  const token = localStorage.getItem("token");
  const [isLogin, setIsLogin] = useState(token ? true : false);
  const checkLogin = () => {
    if (token) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return;
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <header className="flex items-center justify-between  w-screen absolute px-5 z-5">
        {/* Logo fluido con clamp */}
        <img
          src="/Images/Logo.png"
          alt="Logo"
          className="h-auto w-[clamp(60px,10vw,120px)]"
        />

        {/* Menu responsive */}
        <ul className="flex items-center gap-4 capitalize text-sm md:text-base  lg:text-lg font-[Pacifico]">
          {navLink.map((element, index) => (
            <li
              className={`cursor-pointer text-white hover:text-amber-500 transition duration-200 p-2  ${
                index === navLink.length - 1
                  ? "bg-amber-500 text-white hover:text-amber-500 hover:bg-white"
                  : "text-black"
              }`}
              key={index}
              onClick={index === navLink.length - 1 ? checkLogin : undefined}
            >
              {index === navLink.length - 1
                ? isLogin
                  ? "Logout"
                  : "Login"
                : element}
            </li>
          ))}
        </ul>
      </header>
      {isOpen && !token && (
        <Modal
          setIsOpen={setIsOpen}
          AlreadyUser={AlreadyUser}
          setAlreadyUser={setAlreadyUser}
        />
      )}
    </>
  );
}
