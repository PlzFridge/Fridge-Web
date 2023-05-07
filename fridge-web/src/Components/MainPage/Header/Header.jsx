import React from 'react';
import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
                <h1 className={styles.title}>냉장고 식재료 현황</h1> 
        </header>
    );
}