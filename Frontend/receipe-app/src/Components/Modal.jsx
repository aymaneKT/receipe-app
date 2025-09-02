import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Modal({
  setIsOpen,
  AlreadyUser,
  setAlreadyUser,
  setIsLogIn,
}) {
  const [user, setUser] = useState({ email: "", password: "" });
  const handleSubmit = () => {
    const id = toast.loading("Please wait...");
    const endpoint = AlreadyUser
      ? "http://localhost:3000/signin"
      : "http://localhost:3000/register";

    axios
      .post(endpoint, user)
      .then((result) => {
        console.log(result);
        toast.update(id, {
          render: result.data.message,
          type: "success",
          isLoading: false,
        });
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("user", JSON.stringify(result.data.user));
        setTimeout(() => {
          setIsOpen(false);
          setIsLogIn(true);
        }, 2500);
      })
      .catch((error) => {
        console.log(error);
        toast.update(id, {
          render: error.response.data.message,
          type: "error",
          isLoading: false,
        });
      });
  };
  return (
    <>
      <ToastContainer />
      <div
        className="fixed bg-[#00000098] inset-0 bg-opacity-40 flex items-center justify-center z-50"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <div
          className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm relative font-[Pacifico] border-2 border-[#E5E7EB]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl cursor-pointer"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            &times;
          </button>
          <h2 className="text-2xl mb-4 text-center text-[#FBD6BC] font-semibold">
            {AlreadyUser ? "Login" : "Sign Up"}
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex flex-col gap-4"
          >
            <input
              type="email"
              placeholder="Email"
              className="border border-[#E5E7EB] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FBD6BC]"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-[#E5E7EB] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FBD6BC]"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
            <button
              onClick={() => {
                handleSubmit();
              }}
              type="submit"
              className="bg-[#FBD6BC] text-white rounded py-2 hover:bg-[#e0bca3] transition cursor-pointer"
            >
              {AlreadyUser ? "Login" : "Sign Up"}
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            {AlreadyUser
              ? "Don't have an account? "
              : "Already have an account? "}
            <button
              type="button"
              className="text-[#FBD6BC] underline ml-1 cursor-pointer"
              onClick={() => setAlreadyUser(!AlreadyUser)}
            >
              {AlreadyUser ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
