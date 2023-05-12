import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import styles from "./ShowRecipePage.module.css";

export default function Root() {
  return (
    <div>
      <Navbar />
      <Outlet className={styles.outlet} />
    </div>
  );
}
