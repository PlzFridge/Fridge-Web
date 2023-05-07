import React from "react";
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.btn__container}>
        <button className={styles.btn}>식재료 추가/삭제</button>
        <button className={styles.btn}>레시피 추천 받기</button>
      </div>
    </div>
  );
}