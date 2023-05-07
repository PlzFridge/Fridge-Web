import React from "react";
import Header from "./Header/Header";
import FoodList from "./FoodList/FoodList";
import Footer from "./Footer/Footer";
import styles from './MainPage.module.css';

export default function MainPage() {
  return (
    <div className={styles.container}>
      <Header/>
      <FoodList/>
      <Footer/>
    </div>
  );
}