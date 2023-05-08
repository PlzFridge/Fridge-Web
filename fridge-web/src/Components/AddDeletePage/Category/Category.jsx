import React from 'react';
import styles from './Category.module.css'

export default function Category() {
    return (
        <ul className={styles.container}>
            <li><p className={styles.category}>보관일자</p></li> 
            <li><p className={styles.category}>식재료명</p></li>
            <li><p className={styles.category}>유통기한</p></li>
        </ul>
    );
}

