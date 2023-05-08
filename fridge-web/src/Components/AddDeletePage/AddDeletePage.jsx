import React from 'react';
import Category from './Category/Category';
import FoodDetailList from './FoodDetailList/FoodDetailList';
import AddFood from './AddFood/AddFood';
import styles from './AddDeletePage.module.css'

export default function AddDeletePage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>식재료 추가 및 삭제</h1>
            </header>
            <div className={styles.food__container}>
                <Category/>
                <FoodDetailList/> 
                <AddFood/>
            </div>
        </div>
    );
}

