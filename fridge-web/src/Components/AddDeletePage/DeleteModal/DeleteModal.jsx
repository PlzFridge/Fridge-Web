import React from 'react';
import styles from './DeleteModal.module.css'

export default function DeleteModal() {
    return (
        <div className={styles.modal__container}>
            <p className={styles.modal__title}>정말 삭제하시겠습니까 ?</p>
            <div className={styles.btn__container}>
                <button className={styles.yes__btn}>예</button>
                <button className={styles.no__btn}>아니오</button>
            </div>
        </div>
    );
}

