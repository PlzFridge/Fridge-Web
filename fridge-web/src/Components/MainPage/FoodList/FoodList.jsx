import React from 'react';
import styles from './FoodList.module.css'
import { useState, useEffect } from "react";
import instance from '../../API/api';


export default function FoodList() {
    
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

    const getFoodListAPI = async () => {
      try {
        const response = await instance.get("/fridge-list");
        setFoodList(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      getFoodListAPI();
    }, []);
    
    return (
        <div className={styles.container}>
                <ul className={styles.list}>
                    {foodList.map((item) => (
                            <li className={styles.food} key={item.fridgeId}>
                            <img src={item.ingredientImg}
                                className={styles.food__img}
                                alt="food"></img>
                            <div className={styles.food__description}>
                                <h3 className={styles.food__name}>{item.ingredientName}</h3>
                                <span className={styles.food__date}>{item.durationAt}</span>
                            </div>
                            </li>
                        ))}
                </ul>
        </div>
    );
}


