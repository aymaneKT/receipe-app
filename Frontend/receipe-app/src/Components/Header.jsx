import { useState } from "react";
import Modal from "./Modal";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [AlreadyUser, setAlreadyUser] = useState(true);
  const [isLogin, setIsLogIn] = useState(localStorage.getItem("token"));
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

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
      navigate("/");
      return;
    } else {
      setIsOpen(true);
    }
  };

  const handleProtectedRoute = (e) => {
    if (!isLogin) {
      e.preventDefault();
      setIsOpen(true);
      toast.info("Login First", {
        position: "top-right",
        autoClose: 2000,
        theme: "light",
      });
    }
  };

  return (
    <>
      <ToastContainer className={"z-50"} />
      <header className="flex items-center justify-between w-full px-5 py-3 fixed top-0 bg-[#fdf7f2] shadow z-20">
        {/* Logo */}
        <img
          src="/Images/Logo.png"
          alt="Logo"
          className="h-auto w-[clamp(60px,10vw,120px)]"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-4 capitalize text-sm md:text-base lg:text-lg font-[Pacifico]">
          <li className="cursor-pointer hover:text-amber-500 transition duration-200 p-2">
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={handleProtectedRoute}
            className="cursor-pointer hover:text-amber-500 transition duration-200 p-2"
          >
            <Link to={isLogin ? "/favorites" : "/"}>MyFavorites</Link>
          </li>
          <li
            onClick={handleProtectedRoute}
            className="cursor-pointer hover:text-amber-500 transition duration-200 p-2"
          >
            <Link to={isLogin ? "/myrecipes" : "/"}>MyRecipes</Link>
          </li>
          <li className="cursor-pointer hover:text-amber-500 transition duration-200 p-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li
            onClick={handleLog}
            className="cursor-pointer bg-amber-500 text-white hover:text-amber-500 hover:bg-white transition duration-200 p-2 rounded"
          >
            {isLogin ? "Logout" : "Login"}
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <IoClose /> : <IoMenu />}
        </button>
      </header>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="fixed top-[70px] left-0 w-full bg-[#fdf7f2] shadow-md md:hidden z-10">
          <ul className="flex flex-col items-center gap-4 py-6 text-lg font-[Pacifico]">
            <li onClick={() => setMobileMenu(false)}>
              <Link to="/">Home</Link>
            </li>
            <li
              onClick={(e) => {
                handleProtectedRoute(e);
                setMobileMenu(false);
              }}
            >
              <Link to={isLogin ? "/favorites" : "/"}>MyFavorites</Link>
            </li>
            <li
              onClick={(e) => {
                handleProtectedRoute(e);
                setMobileMenu(false);
              }}
            >
              <Link to={isLogin ? "/myrecipes" : "/"}>MyRecipes</Link>
            </li>
            <li onClick={() => setMobileMenu(false)}>
              <Link to="/contact">Contact</Link>
            </li>
            <li
              onClick={() => {
                handleLog();
                setMobileMenu(false);
              }}
              className="bg-amber-500 text-white px-4 py-2 rounded hover:text-amber-500 hover:bg-white transition"
            >
              {isLogin ? "Logout" : "Login"}
            </li>
          </ul>
        </div>
      )}

      {/* Modal */}
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
