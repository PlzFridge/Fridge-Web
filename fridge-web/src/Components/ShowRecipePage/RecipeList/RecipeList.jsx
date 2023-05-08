import React from "react";
import { useState } from "react";
import styles from "./RecipeList.module.css";

export default function RecipeList() {
  // dummy data
  const [recipeList, setRecipeList] = useState([
    { recipe_id: 1, recipe_name: "김치찌개", recipe_img: "https://qwafsdfas", 
        exist_list: ["김치", "감자"], not_exist_list: ["마늘", "양파"], carbon_output: 860},
    { recipe_id: 1, recipe_name: "김치찌개", recipe_img: "https://qwafsdfas", 
        exist_list: ["김치", "감자"], not_exist_list: ["마늘", "양파"], carbon_output: 860},
    { recipe_id: 1, recipe_name: "김치찌개", recipe_img: "https://qwafsdfas", 
        exist_list: ["김치", "감자"], not_exist_list: ["마늘", "양파"], carbon_output: 860}
  ]);

  return (
    <ul className={styles.container}>
        {recipeList.map((item) => (
                <li key={item.recipe_id} className={styles.recipe}>
                    <p className={styles.recipe__name}>{item.recipe_name}</p>
                    <p className={styles.carbon__output}>{item.carbon_output}</p>
                    <img src={item.recipe_img} alt="recipe_img"/>
                    <p className={styles.exist__list}>{item.exist_list}</p>
                    <p className={styles.not__exist__list}>{item.not_exist_list}</p>
                </li>   
        ))}
    </ul>
  );
}
