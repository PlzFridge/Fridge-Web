import React, { useEffect, useState } from 'react';
import styles from './AddFood.module.css'
import {IoMdAddCircle} from 'react-icons/io'
import ingredientList from '../../API/ingredientList';
import instance from '../../API/api';

export default function AddFood(props) {
    
    const [newFood, setNewFood] = useState("");
    const [newDate, setNewDate] = useState("");

    const handleFoodChange = (event) => {
        setNewFood(event.target.value);
    };

    const handleDateChange = (event) => {
        setNewDate(event.target.value);
    };
    
    // 오늘 날짜를 가져오는 함수
    const getToday = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    // 페이지 로드 시 오늘 날짜를 최소 날짜로 설정
    useEffect(()=>{
        const dateInput = document.getElementById('durationDate');
        dateInput.min = getToday();
    }, []);
    

    // 현재 선택된 식재료와 날짜를 리턴하는 함수 
    const getNewFoodDate = () => {
        return ({
            ingredientName : newFood,
            durationAt : newDate
        });
    };

    // 식재료 추가하는 POST Method
    const postNewFood = async () => {
        if(newFood !== ""){ // 추가될 재료 이름과 유통기한 모두 선택되었을 때 추가 가능
            try {
                const response = await instance.post("/save", getNewFoodDate()); 
                setNewFood("");
                setNewDate("");
                props.afterFoodUpdate();
                window.location.reload();
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        }
    }; 


    return (
        <div className={styles.container}>
            <p className={styles.add__food}>식재료 추가</p>
            <select id="newFood" className={styles.add__food__name} onChange={handleFoodChange} value={newFood}>
                <option value="">추가할 재료</option>
                {
                    ingredientList.map((item) => (
                        <option key={item}>{item}</option>
                    ))
                }
            </select>
            <input type="date" id="durationDate" className={styles.add__duration__at} onChange={handleDateChange} value={newDate}/>
            <IoMdAddCircle className={styles.add__button} onClick={postNewFood}/>
        </div> 
    );
}