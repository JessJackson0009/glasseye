// components/NavBar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./NavBar.module.css";

const NavBar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
        <div className={styles.title}>
          <h1>The Glass Eye</h1>
          <p className={styles.title}>Jacksonville, FL</p>
        </div>
      </div>
      <ul className={isMobile ? styles.navLinksMobile : styles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/About">About</Link>
        </li>
        <li>
          <Link href="/Shop">Shop</Link>
        </li>
        <li>
          <Link href="/Contact">Contact</Link>
        </li>
      </ul>
      <button
        className={styles.mobileMenuIcon}
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? "✕" : "☰"}
      </button>
    </nav>
  );
};

export default NavBar;
