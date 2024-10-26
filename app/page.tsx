// pages/index.tsx
import React from "react";
import styles from "../components/Home.module.css";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <header className={styles.heroSection}>
        <div className={styles.overlay}>
          <h2>One of the OLDEST and LARGEST tobacco shops in Jacksonville.</h2>
          <p>
            Visit us to find trendy, unconventional, and eclectic items all
            under one roof.
          </p>
        </div>
      </header>

      {/* First Section */}
      <section className={styles.infoSection}>
        <div className={styles.imageContainer}>
          <img src="/logo.png" alt="Logo" className={styles.firstImage} />{" "}
          {/* Unique class for first image */}
        </div>
        <div className={styles.textContainer}>
          <p>
            *short summary of origins of business filler Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Adipiscing elit pellentesque
            habitant morbi tristique senectus et netus. Ut lectus arcu bibendum
            at varius vel pharetra vel. Turpis egestas sed tempus urna et
            pharetra pharetra massa. Feugiat scelerisque varius morbi enim.
            Faucibus vitae aliquet nec ullamcorper sit amet. At augue eget arcu
            dictum varius duis. Convallis convallis tellus id interdum velit
            laoreet. Sit amet aliquam id diam maecenas ultricies mi. Vel eros
            donec ac odio tempor orci dapibus. Morbi leo urna molestie at
            elementum. Donec enim diam vulputate ut pharetra.
          </p>
        </div>
      </section>

      {/* Second Section */}
      <section className={styles.infoSection}>
        <div className={styles.textContainer}>
          <p>
            *short summary of products sold Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Adipiscing elit pellentesque habitant
            morbi tristique senectus et netus. Ut lectus arcu bibendum at varius
            vel pharetra vel. Turpis egestas sed tempus urna et pharetra
            pharetra massa. Feugiat scelerisque varius morbi enim. Faucibus
            vitae aliquet nec ullamcorper sit amet. At augue eget arcu dictum
            varius duis. Convallis convallis tellus id interdum velit laoreet.
            Sit amet aliquam id diam maecenas ultricies mi. Vel eros donec ac
            odio tempor orci dapibus.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img
            src="/prodsum.png"
            alt="Products Summary"
            className={styles.secondImage}
          />{" "}
          {/* Unique class for second image */}
        </div>
      </section>
    </>
  );
}
