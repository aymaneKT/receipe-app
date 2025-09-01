import Home from "./Pages/Home";
import MyFavRecipes from "./Pages/MyFavRecipes";
import { Route, Routes } from "react-router-dom";
import MyRecipes from "./Pages/MyRecipes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/myRecipes" element={<MyRecipes />} />
        <Route path="myFavRecipes" element={<MyFavRecipes />} />
      </Routes>
    </>
  );
}

export default App;
