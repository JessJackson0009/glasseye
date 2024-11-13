import React from "react";
import NavBar from "../../components/NavBar";
import styles from "../../components/Contact.module.css";

export default function Contact() {
  return (
    <>
      <NavBar />
      <div className={styles.contactHeroContainer}>
        <img
          src="/contact-logo.png"
          alt="Contact Logo"
          className={styles.contactLogo}
        />
        <h1 className={styles.contactHeading}>How to Get in Touch</h1>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.contactsContainer}>
          <div className={styles.cardContainer}>
            <img
              src="/phone.png"
              alt="Phone Logo"
              className={styles.cardLogo}
            />
            <h3 className={styles.cardTitle}>By Phone</h3>
            <p className={styles.cardText}>(904)693-9868</p>
          </div>
          <div className={styles.cardContainer}>
            <img
              src="/email.png"
              alt="Email Logo"
              className={styles.cardLogo}
            />
            <h3 className={styles.cardTitle}>By Email</h3>
            <p className={styles.cardText}>Theglasseye@comcast.net</p>
          </div>
          <div className={styles.cardContainer}>
            <img
              src="/gram.png"
              alt="Instagram Logo"
              className={styles.cardLogo}
            />
            <h3 className={styles.cardTitle}>By Instagram</h3>
            <p className={styles.cardText}>@glasseye76</p>
          </div>
        </div>
      </div>
      <p className={styles.bottomText}>
        Or feel free to come see us in person during our business hours ☺️ We
        look forward to hearing from you soon!{" "}
      </p>
    </>
  );
}
