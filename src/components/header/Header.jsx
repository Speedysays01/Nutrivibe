import { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoWrapper}>
          <svg
            className={styles.logoIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m5.618-4.275a1.125 1.125 0 011.079 1.287C21.604 10.124 21 12.388 21 15a9 9 0 11-17.758-2.545M16 10.5V6m-4 4V6m-4 4V6"
            />
          </svg>
          <a href="#" className={styles.logoText}>
            NutriVibe
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          <a href="#hero">Home</a>
          <a href="#benefits">Benefits</a>
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#about">About</a>
          <a href="#contact" className={styles.cta}>
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={styles.menuButton}
          onClick={() => setIsOpen(true)}
        >
          <svg
            className={styles.menuIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Overlay */}
      {isOpen && <div className={styles.overlay} onClick={closeSidebar}></div>}

      {/* Mobile Sidebar Nav */}
      <div className={`${styles.mobileNav} ${isOpen ? styles.open : ""}`}>
        {/* Close Button */}
        <button className={styles.closeButton} onClick={closeSidebar}>
          &times;
        </button>

        <a href="#hero" onClick={closeSidebar}>
          Home
        </a>
        <a href="#benefits" onClick={closeSidebar}>
          Benefits
        </a>
        <a href="#services" onClick={closeSidebar}>
          Services
        </a>
        <a href="#testimonials" onClick={closeSidebar}>
          Testimonials
        </a>
        <a href="#about" onClick={closeSidebar}>
          About
        </a>
        <a href="#contact" className={styles.cta} onClick={closeSidebar}>
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Header;
