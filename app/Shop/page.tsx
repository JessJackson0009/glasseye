import React from "react";
import NavBar from "../../components/NavBar";
import styles from "../../components/Shop.module.css";

export default function About() {
  return (
    <>
      <NavBar />
      <div className={styles.shopContainer}>
        <h1 className={styles.shopHeading}>Our Products</h1>
      </div>
    </>
  );
}
