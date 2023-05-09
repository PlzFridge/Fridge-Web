import React, { useCallback, useState, useRef } from 'react';
import Category from './Category/Category';
import FoodDetailList from './FoodDetailList/FoodDetailList';
import AddFood from './AddFood/AddFood';
import styles from './AddDeletePage.module.css'
import DeleteModal from './DeleteModal/DeleteModal';

export default function AddDeletePage() {

    const [modalOpen, setModalOpen] = useState(false); // 모달창의 오픈 여부 
    const [selectedFood, setSelectedFood] = useState(-1);

    const myListRef = useRef(null);

    const hideFoodList = () => {
        // 모달창을 열어야 하니 식재료 현황 감추도록
        myListRef.current.style.display = "none";
    }

    const showFoodList = () => {
        // 모달창 닫혔으니 식재료 현황 다시 보여지도록
        myListRef.current.style.display = "flex";
    }

    const openModal = (foodId) => {
        hideFoodList();
        setModalOpen((prev)=>(!prev));
        setSelectedFood(foodId);
    }

    const closeModal = () => {
        showFoodList();
        setModalOpen((prev)=>(!prev));
        setSelectedFood(-1);
    }

    console.log(modalOpen);

    return (
        <div className={styles.container}>
            <div ref={myListRef} className={styles.showList}>
                <header className={styles.header}>
                    <h1 className={styles.title}>식재료 추가 및 삭제</h1>
                </header>
                <div className={styles.food__container}>
                    <Category/>
                    <FoodDetailList openModal={openModal}/> 
                    <AddFood/> 
                </div>
            </div>

            <DeleteModal modalOpen={modalOpen} selectedFood={selectedFood} closeModal={closeModal}/>   
        </div>
    );
}