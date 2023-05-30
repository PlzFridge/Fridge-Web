import React from 'react';
import styles from './FoodList.module.css'
import { useState, useEffect } from "react";
import instance from '../../API/api';


export default function FoodList() {
    
    // dummy data
    const [foodList, setFoodList] = useState([
        {fridgeId: 1, ingredientId: 1, ingredientName: '당근', ingredientImg: 'https://github.com/PlzFridge/Fridge-Web/assets/31370590/da57a899-c7da-4313-9f46-2e7e5f04b839', storedAt:'2023-05-02', durationAt:'2023-05-05'},
        {fridgeId: 2, ingredientId: 3, ingredientName: '대파', ingredientImg: 'https://github.com/PlzFridge/Fridge-Web/assets/31370590/773011b3-c432-4bd7-859c-ca5471232a7f', storedAt:'2023-05-02', durationAt:'2023-05-05'},
        {fridgeId: 3, ingredientId: 1, ingredientName: '감자', ingredientImg: 'https://github.com/PlzFridge/Fridge-Web/assets/31370590/93ffb9fd-9d0a-446e-90ee-5f87099e4965', storedAt:'2023-05-02', durationAt:'2023-05-05'},
        {fridgeId: 4, ingredientId: 3, ingredientName: '양파', ingredientImg: 'https://github.com/PlzFridge/Fridge-Web/assets/31370590/8a6a3064-e61d-47e5-be72-70bec26ae322', storedAt:'2023-05-02', durationAt:'2023-05-05'},
        ]);

    const getFoodListAPI = async () => {
      try {
        const response = await instance.get("/fridge-list");
        setFoodList(response.data.data);
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





// {fridgeId: '5', ingredientId: "1", ingredientName: '마늘', ingredientImg: 'https://github.com/PlzFridge/Fridge-Web/assets/31370590/974ac4b5-c42d-4fe5-a8aa-066c1abc0d38', storedAt:'2023-05-02', durationAt:'2023-05-05'},
//         {fridgeId: '6', ingredientId: "3", ingredientName: '시금치', ingredientImg: 'https://github.com/PlzFridge/Fridge-Web/assets/31370590/98b6e88d-3103-404b-b703-79a177a6a03a', storedAt:'2023-05-02', durationAt:'2023-05-05'},
//         {fridgeId: '7', ingredientId: "1", ingredientName: '콩나물', ingredientImg: 'https://github.com/PlzFridge/Fridge-Web/assets/31370590/a35818ad-182c-4ca3-8a84-4d6b76619eb3', storedAt:'2023-05-02', durationAt:'2023-05-05'},
//         {fridgeId: '8', ingredientId: "3", ingredientName: '토마토', ingredientImg: 'https://github.com/PlzFridge/Fridge-Web/assets/31370590/c71f040a-ea3c-4a54-b0ab-c6dc019a8e72', storedAt:'2023-05-02', durationAt:'2023-05-05'},
//         {fridgeId: '9', ingredientId: "1", ingredientName: '피망', ingredientImg: 'https://github.com/PlzFridge/Fridge-Web/assets/31370590/328bae5b-9707-45fa-b978-79a335896092', storedAt:'2023-05-02', durationAt:'2023-05-05'},
//         {fridgeId: '10', ingredientId: "1", ingredientName: '오이', ingredientImg: 'https://github.com/PlzFridge/Fridge-Web/assets/31370590/ba7b631c-e5a2-4acb-a6fa-44d866730d75', storedAt:'2023-05-02', durationAt:'2023-05-05'},
//         {fridgeId: '11', ingredientId: "1", ingredientName: '애호박', ingredientImg: 'https://github.com/PlzFridge/Fridge-Web/assets/31370590/bb27af7f-5d05-41ad-b7f4-50e5815c2cb0', storedAt:'2023-05-02', durationAt:'2023-05-05'},
//         {fridgeId: '12', ingredientId: "1", ingredientName: '가지', ingredientImg: 'https://github.com/PlzFridge/Fridge-Web/assets/31370590/e868b53a-ceae-4622-aa44-d30289c9c0a5', storedAt:'2023-05-02', durationAt:'2023-05-05'},
//         {fridgeId: '13', ingredientId: "1", ingredientName: '표고버섯', ingredientImg: 'https://github.com/PlzFridge/Fridge-Web/assets/31370590/59b5f383-539e-4044-a3ce-186f3e6d8bf5', storedAt:'2023-05-02', durationAt:'2023-05-05'},
//         {fridgeId: '14', ingredientId: "1", ingredientName: '어묵', ingredientImg: 'https://github.com/PlzFridge/Fridge-Web/assets/31370590/53e8d8c2-3109-494e-a137-72eecbb380ec  ', storedAt:'2023-05-02', durationAt:'2023-05-05'},
//         {fridgeId: '15', ingredientId: "1", ingredientName: '계란', ingredientImg: 'https://github.com/PlzFridge/Fridge-Web/assets/31370590/fb7350bf-2759-442f-9bcc-62c6089c6a31', storedAt:'2023-05-02', durationAt:'2023-05-05'},
//         {fridgeId: '16', ingredientId: "1", ingredientName: '김치', ingredientImg: 'https://github.com/PlzFridge/Fridge-Web/assets/31370590/68095e9e-6b28-46bd-85b7-9fcf7ea58ae7', storedAt:'2023-05-02', durationAt:'2023-05-05'},
//         {fridgeId: '17', ingredientId: "1", ingredientName: '닭고기', ingredientImg: 'https://github.com/PlzFridge/Fridge-Web/assets/31370590/df7f576b-0ba5-4073-b6cc-5b02ee2ca905', storedAt:'2023-05-02', durationAt:'2023-05-05'},
//         {fridgeId: '18', ingredientId: "1", ingredientName: '돼지고기', ingredientImg: 'https://github.com/PlzFridge/Fridge-Web/assets/31370590/b9b60222-4278-4e5a-929c-f2096cfbb5a9', storedAt:'2023-05-02', durationAt:'2023-05-05'},
//         {fridgeId: '19', ingredientId: "1", ingredientName: '소고기', ingredientImg: 'https://github.com/PlzFridge/Fridge-Web/assets/31370590/b1b1a6e4-5ab6-45f4-87ab-80c1cfe68ca9', storedAt:'2023-05-02', durationAt:'2023-05-05'},
//         {fridgeId: '20', ingredientId: "1", ingredientName: '소시지', ingredientImg: 'https://github.com/PlzFridge/Fridge-Web/assets/31370590/2cf21a88-93f3-4d1c-9984-887844bdee4c', storedAt:'2023-05-02', durationAt:'2023-05-05'},
//         {fridgeId: '21', ingredientId: "1", ingredientName: '새우', ingredientImg: 'https://github.com/PlzFridge/Fridge-Web/assets/31370590/297bed81-a2ae-4fa2-b7fa-7f1e37e55afd', storedAt:'2023-05-02', durationAt:'2023-05-05'},
//         {fridgeId: '22', ingredientId: "1", ingredientName: '두부', ingredientImg: 'https://github.com/PlzFridge/Fridge-Web/assets/31370590/d2dfa797-ca17-44f8-bcec-61cc8a89964e', storedAt:'2023-05-02', durationAt:'2023-05-05'},
//         {fridgeId: '23', ingredientId: "1", ingredientName: '치즈', ingredientImg: 'https://github.com/PlzFridge/Fridge-Web/assets/31370590/4cd71b15-cdf7-4471-93f0-1ba6e20c48a7', storedAt:'2023-05-02', durationAt:'2023-05-05'},
//         {fridgeId: '24', ingredientId: "1", ingredientName: '사과', ingredientImg: 'https://github.com/PlzFridge/Fridge-Web/assets/31370590/32c74622-a381-4b55-970d-eb050d339ab1', storedAt:'2023-05-02', durationAt:'2023-05-05'},
//         {fridgeId: '25', ingredientId: "1", ingredientName: '배', ingredientImg: 'https://github.com/PlzFridge/Fridge-Web/assets/31370590/07dfa433-01fc-4797-8c20-e3e59318ffaf', storedAt:'2023-05-02', durationAt:'2023-05-05'},
//         {fridgeId: '26', ingredientId: "1", ingredientName: '포도', ingredientImg: 'https://github.com/PlzFridge/Fridge-Web/assets/31370590/bd527b04-871c-4a60-ab7b-6d84ddb2c15b', storedAt:'2023-05-02', durationAt:'2023-05-05'},
//         {fridgeId: '27', ingredientId: "1", ingredientName: '생선', ingredientImg: 'https://github.com/PlzFridge/Fridge-Web/assets/31370590/8a0c0705-f07f-4f2b-a5ef-44af01f1d619', storedAt:'2023-05-02', durationAt:'2023-05-05'},
//         {fridgeId: '28', ingredientId: "1", ingredientName: '고추', ingredientImg: 'https://github.com/PlzFridge/Fridge-Web/assets/31370590/d57ba657-89bf-43ab-a96c-97a3586c70ea', storedAt:'2023-05-02', durationAt:'2023-05-05'},
//         {fridgeId: '29', ingredientId: "1", ingredientName: '무', ingredientImg: 'https://github.com/PlzFridge/Fridge-Web/assets/31370590/73099561-fd4d-4d28-8b2c-dbaaa2eed300', storedAt:'2023-05-02', durationAt:'2023-05-05'},
//         {fridgeId: '30', ingredientId: "1", ingredientName: '고구마', ingredientImg: 'https://github.com/PlzFridge/Fridge-Web/assets/31370590/f886bec9-5ea5-4ecb-b1a8-5919da4994d5', storedAt:'2023-05-02', durationAt:'2023-05-05'},
//         {fridgeId: '31', ingredientId: "1", ingredientName: '떡', ingredientImg: 'https://github.com/PlzFridge/Fridge-Web/assets/31370590/38d925c8-81c2-44ce-8cb5-33bb21dea65b', storedAt:'2023-05-02', durationAt:'2023-05-05'}
      