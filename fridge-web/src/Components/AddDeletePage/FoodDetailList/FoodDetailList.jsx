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
    const [foodList, setFoodList] = useState([  
        {fridgeId: '1', ingredientId: "1", ingredientName: '돼지고기', ingredientImg: 'https://user-images.githubusercontent.com/31370590/235884434-4b6cd656-3df1-458e-bd30-685d84ad17ea.png', storedAt:'2023-05-02', durationAt:'2023-05-05'},
        {fridgeId: '2', ingredientId: "3", ingredientName: '마늘', ingredientImg: 'https://user-images.githubusercontent.com/31370590/235884434-4b6cd656-3df1-458e-bd30-685d84ad17ea.png', storedAt:'2023-05-02', durationAt:'2023-05-05'},
        {fridgeId: '3', ingredientId: "1", ingredientName: '돼지고기', ingredientImg: 'https://user-images.githubusercontent.com/31370590/235884434-4b6cd656-3df1-458e-bd30-685d84ad17ea.png', storedAt:'2023-05-02', durationAt:'2023-05-05'},
        {fridgeId: '4', ingredientId: "3", ingredientName: '마늘', ingredientImg: 'https://user-images.githubusercontent.com/31370590/235884434-4b6cd656-3df1-458e-bd30-685d84ad17ea.png', storedAt:'2023-05-02', durationAt:'2023-05-05'},
        {fridgeId: '5', ingredientId: "1", ingredientName: '돼지고기', ingredientImg: 'https://user-images.githubusercontent.com/31370590/235884434-4b6cd656-3df1-458e-bd30-685d84ad17ea.png', storedAt:'2023-05-02', durationAt:'2023-05-05'},
        {fridgeId: '6', ingredientId: "3", ingredientName: '마늘', ingredientImg: 'https://user-images.githubusercontent.com/31370590/235884434-4b6cd656-3df1-458e-bd30-685d84ad17ea.png', storedAt:'2023-05-02', durationAt:'2023-05-05'},
        {fridgeId: '7', ingredientId: "1", ingredientName: '돼지고기', ingredientImg: 'https://user-images.githubusercontent.com/31370590/235884434-4b6cd656-3df1-458e-bd30-685d84ad17ea.png', storedAt:'2023-05-02', durationAt:'2023-05-05'},
        {fridgeId: '8', ingredientId: "3", ingredientName: '마늘', ingredientImg: 'https://user-images.githubusercontent.com/31370590/235884434-4b6cd656-3df1-458e-bd30-685d84ad17ea.png', storedAt:'2023-05-02', durationAt:'2023-05-05'},
        {fridgeId: '9', ingredientId: "1", ingredientName: '돼지고기', ingredientImg: 'https://user-images.githubusercontent.com/31370590/235884434-4b6cd656-3df1-458e-bd30-685d84ad17ea.png', storedAt:'2023-05-02', durationAt:'2023-05-05'},
    ]);

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
