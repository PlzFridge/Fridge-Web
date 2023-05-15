import React from "react";
import styles from "./Footer.module.css";
import { useNavigate } from "react-router-dom";

export default function Footer() {  

  const navigate = useNavigate();
  
  const moveToAddDelete = () => {
    navigate(`/addDelete`);
  };

  const moveToShowRecipe = () => {
    navigate(`/showRecipe`);
  };

  return (
    <div className={styles.footer}>
      <div className={styles.btn__container}>
        <button className={styles.btn} onClick={moveToAddDelete}>
          식재료 추가/삭제
        </button>
        <button className={styles.btn} onClick={moveToShowRecipe}>
          레시피 추천 받기
        </button>
      </div>
    </div>
  );
}
