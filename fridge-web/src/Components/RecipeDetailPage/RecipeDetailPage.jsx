import React from "react";
import styles from "./RecipeDetailPage.module.css";
import { useState, useRef } from "react";
import RecipeModal from "./RecipeModal/RecipeModal";
import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function RecipeDetailPage() {

  const location = useLocation();

  const [recipeDetail, setRecipeDetail] = useState(
    location.state
  );

  // Navigate 관련
  const navigate = useNavigate();

  // 모달창 관련
  const [modalOpen, setModalOpen] = useState(false); // 모달창의 오픈 여부
  const myRecipe = useRef(null);

  const openModal = () => {
    setModalOpen((prev) => !prev);
  };

  const closeModal = () => {
    setModalOpen((prev) => !prev);
    // 모달이 닫혔다는 것은
    // 레시피를 선택타고 사용한 재료도 서버에 전달했으므로
    // 이제 메인 화면으로 가는 로직 추가
    navigate(`/`);
  };

  return (
    <div className={styles.container}>
      {!modalOpen ? (
        <div ref={myRecipe} className={styles.show__recipe}>
          <header className={styles.header}>
            <h1 className={styles.title}> {recipeDetail.recipeName} </h1>
          </header>

          <img
            className={styles.recipe__img}
            src={recipeDetail.recipeImg}
            alt="recipe_img"
          />

          <div className={styles.ingredient__list}>
            필요한 재료 :&nbsp; 
            <span className={styles.not__exist__list}>
              {recipeDetail.notExistList.join(" ")}
            </span>
            &nbsp;
            <span className={styles.exist__list}>
              {recipeDetail.existList.join(" ")}
            </span>
          </div>

          <a
            className={styles.method}
            href={recipeDetail.method}
            target="blank"
          >
            조리 과정 보기
          </a>

          <div className={styles.carbon__output__container}>
            <span className={styles.carbon__text}>
              {"이 음식을 만드는 데 필요한 "}
              <span className={styles.exist__list}>
                {recipeDetail.existList.join(", ")}
              </span>
              {"의 유통기한이 지나"}
            </span>
            <span className={styles.carbon__text}>
              {"버려진다면 이를 다시 생산하는데 "}{" "}
              <span className={styles.carbon__output}>
                {recipeDetail.carbon}
                &nbsp;gCO<sub>2e</sub>
              </span>
              {"의 탄소량이 배출됩니다."}
            </span>
            <div className={styles.carbon__text__container}>
              <span className={styles.carbon__text}>
                {"이는 승용차 🚗 1대가 "} <span className={styles.carbon__output}>{(recipeDetail.carbon * 0.0041).toFixed(3)}</span>{" km 이동 시 배출하는 탄소량이며"}
              </span>
              <span className={styles.carbon__text}>
                {"소나무🌲 "} <span className={styles.carbon__output}>{(recipeDetail.carbon / 8530 * 365).toFixed(3)}</span>{" 그루가 하루에 흡수하는 이산화탄소량과 같습니다."}
              </span>
            </div>
          </div>

          <div className={styles.btn__container}>
            <button className={styles.later__btn} onClick={()=>{ navigate(`/ShowRecipe`);}}>나중에 먹을래요</button>
            <button className={styles.ate__btn} onClick={openModal}>
              만들어 먹었어요
            </button>
          </div>
        </div>
      ) : (
        <RecipeModal
          existList={recipeDetail.existList}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}
