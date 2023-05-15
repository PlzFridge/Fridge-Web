import React from 'react';
import styles from './FoodList.module.css'
import { useState } from "react";

export default function FoodList() {

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
        {id: '10', foodName: '대파', foodImg: 'https://user-images.githubusercontent.com/31370590/235884518-6937db58-d4c4-4ee3-b817-ba0f88d88073.png', storedAt:'2023-05-02', durationAt:'2023-05-05'}, 
        {id: '11', foodName: '대파', foodImg: 'https://user-images.githubusercontent.com/31370590/235884518-6937db58-d4c4-4ee3-b817-ba0f88d88073.png', storedAt:'2023-05-02', durationAt:'2023-05-05'},  
        {id: '12', foodName: '대파', foodImg: 'https://user-images.githubusercontent.com/31370590/235884518-6937db58-d4c4-4ee3-b817-ba0f88d88073.png', storedAt:'2023-05-02', durationAt:'2023-05-05'}, 
        {id: '13', foodName: '대파', foodImg: 'https://user-images.githubusercontent.com/31370590/235884518-6937db58-d4c4-4ee3-b817-ba0f88d88073.png', storedAt:'2023-05-02', durationAt:'2023-05-05'}, 
        {id: '14', foodName: '대파', foodImg: 'https://user-images.githubusercontent.com/31370590/235884518-6937db58-d4c4-4ee3-b817-ba0f88d88073.png', storedAt:'2023-05-02', durationAt:'2023-05-05'},  
        {id: '15', foodName: '대파', foodImg: 'https://user-images.githubusercontent.com/31370590/235884518-6937db58-d4c4-4ee3-b817-ba0f88d88073.png', storedAt:'2023-05-02', durationAt:'2023-05-05'},        
        {id: '16', foodName: '대파', foodImg: 'https://user-images.githubusercontent.com/31370590/235884518-6937db58-d4c4-4ee3-b817-ba0f88d88073.png', storedAt:'2023-05-02', durationAt:'2023-05-05'}, 
        {id: '17', foodName: '대파', foodImg: 'https://user-images.githubusercontent.com/31370590/235884518-6937db58-d4c4-4ee3-b817-ba0f88d88073.png', storedAt:'2023-05-02', durationAt:'2023-05-05'},  
        {id: '18', foodName: '대파', foodImg: 'https://user-images.githubusercontent.com/31370590/235884518-6937db58-d4c4-4ee3-b817-ba0f88d88073.png', storedAt:'2023-05-02', durationAt:'2023-05-05'},         
    ]);
    
    return (
        <div className={styles.container}>
                <ul className={styles.list}>
                    {foodList.map((item) => (
                            <li className={styles.food} key={item.id}>
                            <img src={item.foodImg}
                                className={styles.food__img}
                                alt="food"></img>
                            <div className={styles.food__description}>
                                <h3 className={styles.food__name}>{item.foodName}</h3>
                                <span className={styles.food__date}>{item.durationAt}</span>
                            </div>
                            </li>
                        ))}
                </ul>
        </div>
    );
}


