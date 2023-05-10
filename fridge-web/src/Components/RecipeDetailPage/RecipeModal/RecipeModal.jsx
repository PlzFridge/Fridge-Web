import React from 'react';
import styles from './RecipeModal.module.css'

export default function RecipeModal(props) {
    const exist_list = props.existList; // RecipeModal에서 넘겨받은 exist_list

    function closeModal()  {
        // 완료 버튼 눌렀을 때, 
        // Exist_list - 유저가 선택한 남은 재료 = 사용한 재료
        // 이 재료 list들로 삭제 API 호출
        props.closeModal();
    }

    
    if(!props.modalOpen) // 열려있지 않으면 
        return null;

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
            <button className={styles.complete__btn} onClick={closeModal}>완료</button> 
        </div>
    );
}