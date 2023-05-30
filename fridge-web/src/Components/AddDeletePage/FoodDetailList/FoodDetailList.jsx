import React from 'react';
import { useState, useEffect } from "react";
import styles from './FoodDetailList.module.css'
import {FaTrashAlt} from 'react-icons/fa'
import instance from '../../API/api';

export default function FoodDetailList(props) {  

    const openModal = (foodId) => {
        props.openModal(foodId); // AddDeletePage에서 전달받은 openModal함수를 현재 선택된 food의 Id를 인자로 실행
    }
    
    // dummy data
    const [foodList, setFoodList] = useState([]);

    const getFoodList = async () => {
        try {
            const response = await instance.get("/fridge-list");
            setFoodList(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getFoodList();
    }, []);

    return (
        <ul className={styles.container}>
            {foodList.map((item) => (
                <li key={item.fridgeId} className={styles.food}>
                    <p className={styles.category}>{item.storedAt}</p>
                    <p className={styles.category}>{item.ingredientName}</p>
                    <p className={styles.category}>{item.durationAt}</p>
                    <div className={styles.icon}>
                    <button className={styles.delete__button} onClick={() => {openModal(item.fridgeId)}}>
                        <FaTrashAlt/>
                    </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}
