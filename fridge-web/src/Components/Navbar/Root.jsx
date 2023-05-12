import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import styles from "./Root.module.css"

export default function Root() {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  );
}
