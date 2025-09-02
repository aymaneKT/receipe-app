import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useRef } from "react";
export default function AddRecipe() {
  const fileInputRef = useRef(null);
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    image: "",
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
    const formData = new FormData();
    formData.append("title", recipe?.title);
    formData.append("ingredients", recipe?.ingredients);
    formData.append("instructions", recipe?.instructions);
    if (recipe.image) formData.append("image", recipe?.image);
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    };
    axios
      .post("http://localhost:3000/recipes", formData, {
        headers: headers,
      })
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
        console.log(recipe);
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
      });
  };
  return (
    <>
      <ToastContainer />
      <div className="min-h-screen bg-[#fdf7f2] flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg font-[Pacifico] border-2 border-[#E5E7EB]">
          <h2 className="text-3xl mb-6 text-center text-[#FBD6BC] font-semibold">
            Add New Recipe
          </h2>
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
              Add Recipe
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
