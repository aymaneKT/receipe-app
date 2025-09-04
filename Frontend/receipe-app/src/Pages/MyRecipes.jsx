import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Variants from "../Components/Variants";
import { MdOutlineDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import AddRecipe from "./AddRecipe";
import DeleteModal from "../Components/deleteModal";
import NoRecipes from "../Components/NoRecipes";

export default function MyRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [recipeToEdit, setRecipeToEdit] = useState({});
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [idReceipeToDelete, setidReceipeToDelete] = useState("");
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
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
    fetchMyRecipes();
  }, []);

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
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{element?.title}</h3>
              <p className="text-gray-700">{element?.ingredients}</p>
              <div className="flex items-center justify-between mt-2">
                <button className=" px-4 py-2 bg-[#FBD6BC] text-white rounded hover:bg-[#e0bca3] transition cursor-pointer">
                  Go somewhere
                </button>
                <div className="flex">
                  <FaEdit
                    className="text-2xl hover:text-blue-300 duration-300 transition cursor-pointer "
                    onClick={() => {
                      setIsEditing(true);
                      setRecipeToEdit(element);
                    }}
                  />
                  <MdOutlineDelete
                    onClick={() => {
                      setOpenDeleteModal(true);
                      setidReceipeToDelete(element._id);
                    }}
                    className="text-2xl hover:text-red-400 duration-300 transition cursor-pointer "
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 font-[Pacifico] mt-25">
          <Variants />
          <Variants />
          <Variants />
          <Variants />
        </div>
      )}
      {isEditing && (
        <AddRecipe
          setIsEditing={setIsEditing}
          isEditing={isEditing}
          recipeToEdit={recipeToEdit}
          setRecipes={setRecipes}
          recipes={recipes}
        />
      )}
      {openDeleteModal && (
        <DeleteModal
          idReceipeToDelete={idReceipeToDelete}
          setOpenDeleteModal={setOpenDeleteModal}
          recipes={recipes}
          setRecipes={setRecipes}
        />
      )}
      {recipes.length === 0 ? <NoRecipes/> : ""}
    </>
  );
}
