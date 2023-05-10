import React from 'react';
import styles from './RecipeModal.module.css'

export default function RecipeModal(props) {
    const exist_list = ["김치", "양파", "당근", "돼지고기"];
    //const exist_list = props.exist_list; // RecipeModal에서 넘겨받은 exist_list

    // 완료 버튼 눌렀을 때, 
    // Exist_list - 유저가 선택한 남은 재료 = 사용한 재료
    // 이 재료 list들로 삭제 API 호출
    
    return (
        <div className={styles.modal__container}>
            <p className={styles.modal__title}>사용하고 남은 재료가 있다면 선택해주세요</p>
            <div className={styles.check__box__container}>
                {exist_list.map((item) => (
                    <label for = {exist_list.indexOf(item)} className={styles.check__label}>
                    <input id = {exist_list.indexOf(item)} className={styles.check__box} type='checkbox' value ={item}></input>
                    {item}</label>
                ))}
            </div>
            <button className={styles.complete__btn}>완료</button> 
        </div>
    );
}