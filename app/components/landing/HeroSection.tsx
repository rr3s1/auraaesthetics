import React from "react";

import styles from "./HeroSection.module.css";

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.headline}>
          Streamline Your Medical Appointments
        </h1>
        <p className={styles.introText}>
          Easily book, manage, and track your medical consultations with our
          intuitive platform. Say goodbye to long waits and scheduling hassles.
        </p>
        <div className={styles.ctaButtons}>
          <button className={`${styles.btn} ${styles.btnRegister}`}>
            Register
          </button>
          <button className={`${styles.btn} ${styles.btnBook}`}>
            Book an Appointment
          </button>
        </div>
      </div>
      {/* Placeholder for background image/graphic - can be set via CSS */}
    </section>
  );
};

export default HeroSection; 