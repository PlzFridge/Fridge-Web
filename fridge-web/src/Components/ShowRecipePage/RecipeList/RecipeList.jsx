import React from "react";
import { useState, useEffect } from "react";
import styles from "./RecipeList.module.css";
import { useNavigate } from "react-router-dom";
import ingredientList from "./../../API/ingredientList";  
import instance from "../../API/api";

export default function RecipeList() {
  // dummy data
  const [recipeList, setRecipeList] = useState([
    {
      recipeId: 1,
      recipeName: "김치찌개",
      recipeImg:
        "https://user-images.githubusercontent.com/31370590/236804229-35e565ad-601e-4c3b-8215-63b0c173413b.png",
      ingredientList: ["", ""],
      method: "",
      existList: ["김치", "감자"],
      notExistList: ["마늘", "양파"],
      carbon: 860,
    },
    {
      recipeId: 2,
      recipeName: "김치볶음밥",
      recipeImg:
        "https://user-images.githubusercontent.com/31370590/236810148-ff27e0ec-d8c9-4752-96ff-e48b4d9a6302.png",
      existList: ["김치", "감자"],
      notExistList: ["마늘", "양파"],
      carbon: 860,
    },
    {
      recipeId: 3,
      recipeName: "김치찌개",
      recipeImg:
        "https://user-images.githubusercontent.com/31370590/236804229-35e565ad-601e-4c3b-8215-63b0c173413b.png",
      existList: ["김치", "감자"],
      notExistList: ["마늘", "양파"],
      carbon: 860,
    },
  ]);

  const getRecipeListAPI = async () => {
    try {
      const response = await instance.get("/recommend");  
      setRecipeList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRecipeListAPI();
  }, []);

  const navigate = useNavigate();

  const showRecipeDetail = (recipeId) => {
    navigate(`/RecipeDetail/${recipeId}`);
  };

  return (
    <ul className={styles.container}>
      {recipeList.map((item) => (
        <li
          key={item.recipeId}
          className={styles.recipe}
          onClick={() => showRecipeDetail(item.recipeId)}
        >
          <div className={styles.recipe__header}>
            <span className={styles.recipe__name}>{item.recipeName}</span>
            <span className={styles.carbon__output}>{item.carbon + "g"}</span>
          </div>
          <div className={styles.recipe__content}>
            <img
              className={styles.recipe__img}
              src={item.recipeImg}
              alt="recipe_img"
            />
            <div className={styles.ingredient__list}>
              <span className={styles.exist__list}>
                {"냉장고에 있는 재료 : " + item.existList.join(" ")}
              </span>
              <span className={styles.not__exist__list}>
                {"사야하는 재료 : " + item.notExistList.join(" ")}
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
