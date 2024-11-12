// app/about/page.tsx
import React from "react";
import NavBar from "../../components/NavBar";
import styles from "../../components/About.module.css";

export default function About() {
  return (
    <>
      <NavBar />
      <div className={styles.aboutContainer}>
        <img
          src="/about-logo.png"
          alt="About Logo"
          className={styles.aboutLogo}
        />
        <h1 className={styles.aboutHeading}>About Us</h1>
        <p className={styles.aboutText}>
          *longer decription of business orhins, founding, and mission. A lacus
          vestibulum sed arcu non odio euismod lacinia. Erat pellentesque
          adipiscing commodo elit at imperdiet dui. Tortor at risus viverra
          adipiscing at. Ornare arcu odio ut sem nulla pharetra diam sit amet.
          Tristique et egestas quis ipsum suspendisse ultrices gravida. Aliquet
          nec ullamcorper sit amet risus nullam. Viverra suspendisse potenti
          nullam ac tortor vitae purus faucibus. Integer quis auctor elit sed
          vulputate mi sit amet. Parturient montes nascetur ridiculus mus mauris
          vitae.
        </p>
      </div>
      <div className={styles.locationContainer}>
        <h2 className={styles.locationHeader}>Our Location</h2>
        <div className={styles.locContentContainer}>
          <p className={styles.locationText}>
            Founded in Jacksonville Florida, (more info about location(s) Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut diam quam
            nulla porttitor.
            <p className={styles.locationText}>
              Orci phasellus egestas tellus rutrum tellus. Auctor eu augue ut
              lectus arcu bibendum at. Eu mi bibendum neque egestas congue
              quisque egestas diam. Urna neque viverra justo nec ultrices.
            </p>
          </p>
          <iframe
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.7405959057683!2d-81.75393862490392!3d30.301445606349176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5b8ef4d48eee3%3A0x23f1d4fba1306953!2s1233%20Lane%20Ave%20S%20%235%2C%20Jacksonville%2C%20FL%2032205!5e0!3m2!1sen!2sus!4v1731445715522!5m2!1sen!2sus&zoom=5"
            width="500"
            height="400"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className={styles.storeHoursContainer}>
        <h2 className={styles.storeHoursHeader}>Store Hours</h2>
        <div className={styles.scheduleContainer}>
          <div className={styles.day}>
            <p>Monday</p>
            <p>9:00 AM – 8:00 PM</p>
          </div>
          <div className={styles.day}>
            <p>Tuesday</p>
            <p>9:00 AM – 8:00 PM</p>
          </div>
          <div className={styles.day}>
            <p>Wednesday</p>
            <p>9:00 AM – 8:00 PM</p>
          </div>
          <div className={styles.day}>
            <p>Thursday</p>
            <p>9:00 AM – 8:00 PM</p>
          </div>
          <div className={styles.day}>
            <p>Friday</p>
            <p>9:00 AM – 8:00 PM</p>
          </div>
          <div className={styles.day}>
            <p>Saturday</p>
            <p>10:00 AM – 8:00 PM</p>
          </div>
          <div className={styles.day}>
            <p>Sunday</p>
            <p>11:00 AM – 6:00 PM</p>
          </div>
        </div>
      </div>
    </>
  );
}
