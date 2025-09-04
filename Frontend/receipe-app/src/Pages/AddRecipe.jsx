import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { Receipe } from "../../../../Backend/models/ReceipeSchema";
export default function AddRecipe({
  setIsEditing,
  isEditing,
  recipeToEdit,
  setRecipes,
  recipes,
}) {
  const fileInputRef = useRef(null);
  const [recipe, setRecipe] = useState({
    _id: isEditing ? recipeToEdit._id : "",
    title: isEditing ? recipeToEdit.title : "",
    ingredients: isEditing ? recipeToEdit.ingredients : "",
    instructions: isEditing ? recipeToEdit.instructions : "",
    image: isEditing ? recipeToEdit.image : "",
  });
  const handleInput = (e) => {
    let val;
    if (e.target.name === "ingredients") {
      val = e.target.value;
    } else if (e.target.name === "image") {
      val = e.target.files[0];
    } else {
      val = e.target.value;
    }

    setRecipe({ ...recipe, [e.target.name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!localStorage.getItem("token")) {
      toast.error("Login First", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    const url = "http://localhost:3000/recipes";
    const formData = new FormData();
    formData.append("title", recipe?.title);
    formData.append("ingredients", recipe?.ingredients);
    formData.append("instructions", recipe?.instructions);
    if (recipe.image) formData.append("image", recipe?.image);

    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    };
    const api = isEditing
      ? axios.put(`${url}/${recipe._id}`, formData, {
          headers: headers,
        })
      : axios.post(url, formData, {
          headers: headers,
        });
    api
      .then((result) => {
        toast.success(result.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setRecipes(
          recipes.map((e) =>
            e._id === recipe._id
              ? {
                  ...e,
                  title: recipe.title,
                  ingredients: recipe.ingredients,
                  instructions: recipe.instructions,
                  image: recipe.image,
                }
              : recipe
          )
        );
        setRecipe({
          title: "",
          ingredients: "",
          instructions: "",
          image: "",
        });
        if (fileInputRef.current) fileInputRef.current.value = "";
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
      })
      .finally(() => {
        setIsEditing(false);
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen bg-[#fdf7f2] flex items-center  justify-center p-4 absolute top-0 bottom-0 right-0 left-0">
        <div className="bg-white rounded-lg relative shadow-lg p-8 w-full max-w-lg font-[Pacifico] border-2 border-[#E5E7EB]">
          <h2 className="text-3xl mb-6 text-center text-[#FBD6BC] font-semibold">
            {isEditing ? "Edit Your Recipe" : "Add New Recipe"}
          </h2>
          <IoMdClose
            onClick={() => {
              setIsEditing(false);
            }}
            className={`${
              isEditing ? "absolute" : "hidden"
            } absolute top-[2%] right-[2%] cursor-pointer text-2xl transition duration-200 hover:text-red-500`}
          />

          <form className="flex flex-col gap-4">
            <input
              onChange={handleInput}
              value={recipe?.title}
              type="text"
              name="title"
              placeholder="Title"
              className="border border-[#E5E7EB] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FBD6BC]"
            />
            <textarea
              onChange={handleInput}
              value={recipe.ingredients}
              name="ingredients"
              placeholder="Ingredients"
              className="border border-[#E5E7EB] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FBD6BC] resize-none"
              rows="3"
            ></textarea>
            <textarea
              onChange={handleInput}
              name="instructions"
              value={recipe?.instructions}
              placeholder="Instructions"
              className="border border-[#E5E7EB] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FBD6BC] resize-none"
              rows="4"
            ></textarea>
            <input
              ref={fileInputRef}
              onChange={handleInput}
              type="file"
              name="image"
              className="border border-[#E5E7EB] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FBD6BC]"
            />
            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-[#FBD6BC] text-white rounded py-2 hover:bg-[#e0bca3] transition cursor-pointer"
            >
              {isEditing ? "Edit Receipe " : "Add Receipe"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
