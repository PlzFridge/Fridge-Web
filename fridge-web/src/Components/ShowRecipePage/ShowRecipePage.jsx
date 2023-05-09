import React from 'react';
import styles from './ShowRecipePage.module.css'
import RecipeList from './RecipeList/RecipeList';

export default function ShowRecipePage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>레시피 추천</h1>
            </header>
            <RecipeList/>
        </div>
    );
}

