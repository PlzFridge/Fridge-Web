import React from "react";
import { useState } from "react";
import styles from "./RecipeList.module.css";

export default function RecipeList() {
  // dummy data
  const [recipeList, setRecipeList] = useState([
    { recipe_id: 1, recipe_name: "김치찌개", recipe_img: "https://user-images.githubusercontent.com/31370590/236804229-35e565ad-601e-4c3b-8215-63b0c173413b.png", 
        exist_list: ["김치", "감자"], not_exist_list: ["마늘", "양파"], carbon_output: 860},
    { recipe_id: 1, recipe_name: "김치볶음밥", recipe_img: "https://user-images.githubusercontent.com/31370590/236810148-ff27e0ec-d8c9-4752-96ff-e48b4d9a6302.png", 
        exist_list: ["김치", "감자"], not_exist_list: ["마늘", "양파"], carbon_output: 860},
    { recipe_id: 1, recipe_name: "김치찌개", recipe_img: "https://user-images.githubusercontent.com/31370590/236804229-35e565ad-601e-4c3b-8215-63b0c173413b.png", 
        exist_list: ["김치", "감자"], not_exist_list: ["마늘", "양파"], carbon_output: 860}
  ]);

  return (
    <ul className={styles.container}>
        {recipeList.map((item) => (
                <li key={item.recipe_id} className={styles.recipe}>
                    <div className={styles.recipe__header}>
                      <span className={styles.recipe__name}>{item.recipe_name}</span>
                      <span className={styles.carbon__output}>{item.carbon_output + "g"}</span>
                    </div>
                    <div className={styles.recipe__content}>
                      <img className={styles.recipe__img} src={item.recipe_img} alt="recipe_img"/>
                      <div className={styles.ingredient__list}>
                        <span className={styles.exist__list}>{"냉장고에 있는 재료 : " + item.exist_list.join(" ")}</span>
                        <span className={styles.not__exist__list}>{"사야하는 재료 : " + item.not_exist_list.join(" ")}</span>
                      </div>
                    </div>
                </li>   
        ))}
    </ul>
  );
}
