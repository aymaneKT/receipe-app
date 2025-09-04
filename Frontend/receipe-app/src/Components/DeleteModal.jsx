import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export default function DeleteModal({
  setOpenDeleteModal,
  idReceipeToDelete,
  recipes,
  setRecipes,
}) {
  const handleDelete = (e) => {
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

    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    };
    axios
      .delete(url + "/" + idReceipeToDelete, { headers })
      .then((result) => {
        toast.success(result.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,

          theme: "light",
        });
        setRecipes(recipes.filter((e) => e._id !== idReceipeToDelete));
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response, {
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
        setOpenDeleteModal(false);
      });
  };
  return (
    <>
      <ToastContainer />
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm relative font-[Pacifico] border-2 border-[#E5E7EB]">
          <button
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl cursor-pointer"
            onClick={() => setOpenDeleteModal(false)}
          >
            &times;
          </button>
          <h2 className="text-xl mb-4 text-center text-red-500 font-semibold">
            Are you sure you want to delete?
          </h2>
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition cursor-pointer"
            >
              Delete
            </button>
            <button
              onClick={() => setOpenDeleteModal(false)}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
