import Home from "./Pages/Home";
import MyFavRecipes from "./Pages/MyFavRecipes";
import { Route, Routes } from "react-router-dom";
import MyRecipes from "./Pages/MyRecipes";
import AddRecipe from "./Pages/AddRecipe";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/myrecipes" element={<MyRecipes />} />
        <Route path="/favorites" element={<MyFavRecipes />} />
        <Route path="/addRecipes" element={<AddRecipe />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
