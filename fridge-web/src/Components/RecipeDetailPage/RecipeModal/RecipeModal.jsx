import React, { useState } from 'react';
import styles from './RecipeModal.module.css'
import axios from 'axios';
import instance from './../../API/api';

export default function RecipeModal(props) {
    const exist_list = props.existList; // RecipeModal에서 넘겨받은 exist_list
    const [remainList, setRemainList] = useState([]); // 사용자가 모달창에서 선택한 남은 재료 list
    
    const handleInputChange = (event) => {
        const {value, checked} = event.target;

        if(checked){
            setRemainList((pre)=>[...pre, value]);
        }
        else{
            setRemainList((pre)=> pre.filter((v)=>v!==value));
        }
    }

    const getUsedList = () => {
        // 사용한 재료 = Exist_list - 유저가 선택한 남은 재료
        const usedList = exist_list.filter((item)=>!remainList.includes(item));
        const forDelete = usedList.join(",");
        console.log(forDelete);
        return ({
            deleteList : forDelete
        });
    };

    const deleteUsedList = async() => {
        try{
            const response = await instance.post("/delete-after", getUsedList()); 
            console.log(response);
        }
        catch (error) {
            console.error(error);
        }
    }
  
    function closeModal()  {
        // 완료 버튼 눌렀을 때, 
        // Exist_list - 유저가 선택한 남은 재료 = 사용한 재료
        // 이 재료 list들로 삭제 API 호출  
        deleteUsedList();
        props.closeModal();
    }

    return ( 
        <div className={styles.modal__container}>
            <p className={styles.modal__title}>사용하고 남은 재료가 있다면 선택해주세요</p>
            <div className={styles.check__box__container}>
                {exist_list.map((item) => (
                    <label for = {exist_list.indexOf(item)} key={exist_list.indexOf(item)} className={styles.check__label}>
                    <input id = {exist_list.indexOf(item)} key={exist_list.indexOf(item)} className={styles.check__box} type='checkbox' 
                    value ={item} onChange={handleInputChange}></input>
                    {item}</label>
                ))} 
            </div>
            <button className={styles.complete__btn} onClick={closeModal}>완료</button> 
        </div>
    );
}