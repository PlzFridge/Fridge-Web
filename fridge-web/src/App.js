import "./App.css";
import MainPage from "./Components/MainPage/MainPage";
import AddDeletePage from "./Components/AddDeletePage/AddDeletePage";
import ShowRecipePage from "./Components/ShowRecipePage/ShowRecipePage";
import RecipeDetailPage from "./Components/RecipeDetailPage/RecipeDetailPage";
import DeleteModal from "./Components/AddDeletePage/DeleteModal/DeleteModal";
import FoodDetailList from "./Components/AddDeletePage/FoodDetailList/FoodDetailList";
import RecipeModal from "./Components/RecipeDetailPage/RecipeModal/RecipeModal";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Navbar/Root";
import NoPage from "./Components/Navbar/NoPage";
import { useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NoPage />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "/addDelete", element: <AddDeletePage /> },
      { path: "/showRecipe", element: <ShowRecipePage /> },
      { path: "/RecipeDetail/:recipeId", element: <RecipeDetailPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
