import React from 'react';
import { useState } from "react";
import styles from './FoodDetailList.module.css'
import {FaTrashAlt} from 'react-icons/fa'

export default function FoodDetailList() {

    // dummy data
    const [foodList, setFoodList] = useState([
        {id: '1', foodName: '돼지고기', foodImg: 'https://user-images.githubusercontent.com/31370590/235884434-4b6cd656-3df1-458e-bd30-685d84ad17ea.png', storedAt:'2023-05-02', durationAt:'2023-05-05'},
        {id: '2', foodName: '마늘', foodImg: 'https://user-images.githubusercontent.com/31370590/235884434-4b6cd656-3df1-458e-bd30-685d84ad17ea.png', storedAt:'2023-05-02', durationAt:'2023-05-05'},
        {id: '3', foodName: '대파', foodImg: 'https://user-images.githubusercontent.com/31370590/235884518-6937db58-d4c4-4ee3-b817-ba0f88d88073.png', storedAt:'2023-05-02', durationAt:'2023-05-05'},
        {id: '4', foodName: '대파', foodImg: 'https://user-images.githubusercontent.com/31370590/235884518-6937db58-d4c4-4ee3-b817-ba0f88d88073.png', storedAt:'2023-05-02', durationAt:'2023-05-05'},
        {id: '5', foodName: '대파', foodImg: 'https://user-images.githubusercontent.com/31370590/235884518-6937db58-d4c4-4ee3-b817-ba0f88d88073.png', storedAt:'2023-05-02', durationAt:'2023-05-05'},
        {id: '6', foodName: '대파', foodImg: 'https://user-images.githubusercontent.com/31370590/235884518-6937db58-d4c4-4ee3-b817-ba0f88d88073.png', storedAt:'2023-05-02', durationAt:'2023-05-05'},
        {id: '7', foodName: '대파', foodImg: 'https://user-images.githubusercontent.com/31370590/235884518-6937db58-d4c4-4ee3-b817-ba0f88d88073.png', storedAt:'2023-05-02', durationAt:'2023-05-05'},
        {id: '8', foodName: '대파', foodImg: 'https://user-images.githubusercontent.com/31370590/235884518-6937db58-d4c4-4ee3-b817-ba0f88d88073.png', storedAt:'2023-05-02', durationAt:'2023-05-05'},
        {id: '9', foodName: '대파', foodImg: 'https://user-images.githubusercontent.com/31370590/235884518-6937db58-d4c4-4ee3-b817-ba0f88d88073.png', storedAt:'2023-05-02', durationAt:'2023-05-05'},  
    ]);

    return (
        <ul className={styles.container}>
            {foodList.map((item) => (
                <li key={item.id} className={styles.food}>
                    <p className={styles.category}>{item.storedAt}</p>
                    <p className={styles.category}>{item.foodName}</p>
                    <p className={styles.category}>{item.durationAt}</p>
                    <div className={styles.icon}>
                    <button className={styles.delete__button}>
                        <FaTrashAlt/> 
                    </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

