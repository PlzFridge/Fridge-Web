import './App.css';
import MainPage from './Components/MainPage/MainPage';
import AddDeletePage from './Components/AddDeletePage/AddDeletePage';
import ShowRecipePage from './Components/ShowRecipePage/ShowRecipePage';
import RecipeDetailPage from './Components/RecipeDetailPage/RecipeDetailPage';
import DeleteModal from './Components/AddDeletePage/DeleteModal/DeleteModal';
import FoodDetailList from './Components/AddDeletePage/FoodDetailList/FoodDetailList';
import RecipeModal from './Components/RecipeDetailPage/RecipeModal/RecipeModal';

export default function App() {
  return (
    <>
      <RecipeDetailPage/>
    </>
  );
}