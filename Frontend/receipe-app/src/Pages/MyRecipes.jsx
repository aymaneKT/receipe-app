import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function MyRecipes() {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (!token || !user) {
      toast.info("Login First", {
        position: "top-right",
        autoClose: 2000,
        theme: "light",
      });
      setTimeout(() => {
        navigate("/");
      }, 2100);
      return;
    }
    const fetchMyRecipes = async () => {
      axios
        .get("http://localhost:3000/recipes")
        .then((result) => {
          const personalReceipes = result.data.filter(
            (receipe) => receipe.createdBy !== user._id
          );
          setRecipes(personalReceipes);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchMyRecipes();
  }, []);
  console.log(recipes);
  return (
    <>
      <ToastContainer />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 font-[Pacifico] mt-25">
        {recipes?.map((element, index) => (
          <div
            key={index}
            className="border-2 border-[#E5E7EB] rounded-lg bg-white shadow-md flex flex-col overflow-hidden"
          >
            <div className="h-44 bg-gray-200 flex items-center justify-center">
              <img
                src={`http://localhost:3000/uploads/${element?.image}`}
                alt={element?.title}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{element?.title}</h3>
              <p className="text-gray-700">
                {element?.ingredients.map((e) => e +" ")}
              </p>
              <div className="flex items-center justify-between mt-2">
                <button className=" px-4 py-2 bg-[#FBD6BC] text-white rounded hover:bg-[#e0bca3] transition cursor-pointer">
                  Go somewhere
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
