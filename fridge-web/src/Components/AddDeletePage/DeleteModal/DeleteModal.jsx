import React from 'react';
import styles from './DeleteModal.module.css'
import instance from '../../API/api';

export default function DeleteModal(props) { 
    // props - selectedFood, closeModal

    function closeModal()  {
        props.closeModal();
    }

    const deleteFoodAPI= async () => { // 예를 눌렀을 때 
        try{  // props.selectedFood 를 가지고 식재료 삭제 API 호출
            const response = await instance.delete('/delete', {
                params: {
                    fridgeId: props.selectedFood
                }
            })
            props.closeModal();
        }
        catch(error){
            console.error(error);
        }
    }

    return (
        <div className={styles.modal__container}>
            <p className={styles.modal__title}>정말 삭제하시겠습니까 ?</p> 
            <div className={styles.btn__container}> 
                <button className={styles.yes__btn} onClick={deleteFoodAPI}>예</button>
                <button className={styles.no__btn} onClick={closeModal}>아니오</button>
            </div>
        </div>
    );
}

