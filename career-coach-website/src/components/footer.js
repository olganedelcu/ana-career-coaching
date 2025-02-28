import React from "react";
import * as styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Career Coaching Ana. All rights reserved.</p>
    </footer>
  );
};

export default Footer;