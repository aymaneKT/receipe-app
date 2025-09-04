import { useNavigate } from "react-router-dom";

export default function NoRecipes() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fdf7f2] p-6">
      <h1 className="text-4xl font-bold text-[#FBD6BC] mb-4">
        No Recipes Yet 🍴
      </h1>
      <p className="text-lg text-gray-600 mb-6 text-center max-w-md">
        You haven’t added any recipes yet. Start by creating your first one and
        keep all your favorite dishes in one place.
      </p>
      <button
        onClick={() => navigate("/addRecipes")}
        className="bg-[#FBD6BC] text-white px-6 py-3 rounded-2xl shadow hover:bg-[#e0bca3] transition cursor-pointer"
      >
        Add Your First Recipe
      </button>
    </div>
  );
}
