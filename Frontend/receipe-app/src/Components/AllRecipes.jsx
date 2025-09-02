import { useEffect, useState } from "react";
import axios from "axios";
import { FaHeart } from "react-icons/fa";
export default function AllRecipes() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/recipes")
      .then((result) => {
        setRecipes(result.data);
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 font-[Pacifico]">
      {recipes?.map((element) => (
        <div
          key={element._id}
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
            <p className="text-gray-700">{element?.instructions}</p>
            <div className="flex items-center justify-between mt-2">
              <button className=" px-4 py-2 bg-[#FBD6BC] text-white rounded hover:bg-[#e0bca3] transition cursor-pointer">
                Go somewhere
              </button>
              <FaHeart className="cursor-pointer transition-transform duration-200 hover:scale-125 hover:text-red-500" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
