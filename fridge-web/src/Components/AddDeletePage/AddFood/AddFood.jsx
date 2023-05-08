import React from 'react';
import styles from './AddFood.module.css'
import {IoMdAddCircle} from 'react-icons/io'

export default function AddFood() {
    return (
        <div className={styles.container}>
            <p className={styles.add__food}>식재료 추가</p>
            <select className={styles.add__food__name}>
            </select>
            <input type="date" id="myDate" name="myDate" className={styles.add__duration__at}/>
            <IoMdAddCircle className={styles.add__button}/>
        </div>
    );
}

