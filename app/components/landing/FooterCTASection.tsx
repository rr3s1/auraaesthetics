import React from "react";

import styles from "./FooterCTASection.module.css";

const FooterCTASection: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerCtaSection}>
      <div className={styles.contentWrapper}>
        <h2>Ready to Take Control of Your Schedule?</h2>
        <p className={styles.subText}>
          Join thousands of satisfied users and experience healthcare scheduling
          like never before.
        </p>
        <div className={styles.ctaButtons}>
          <button className={`${styles.btn} ${styles.btnRegister}`}>
            Register Now
          </button>
          <button className={`${styles.btn} ${styles.btnBook}`}>
            Book an Appointment
          </button>
        </div>
        <div className={styles.footerLinks}>
          <a href="#/privacy">Privacy Policy</a>
          <span className={styles.linkSeparator}>|</span>
          <a href="#/terms">Terms of Service</a>
        </div>
        <p className={styles.copyright}>
          &copy; {currentYear} YourMedicalScheduler. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterCTASection;
