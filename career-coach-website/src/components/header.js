import React from "react";
import { Link } from "gatsby";
import * as styles from "./header.module.css"; 

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoText}>Career Coach Ana</span>
          </Link>
          <ul className={styles.menu}>
            <li>
              <Link to="/testimonials" className={styles.menuItem}>Testimonials</Link> {/* New menu item */}
            </li>
            <li>
              <Link to="/services" className={styles.menuItem}>Services</Link>
            </li>
          </ul>
        </div>
        <Link to="/get-hired" className={styles.getHiredButton}>Get Hired</Link> {/* Get Hired button */}
      </nav>
    </header>
  );
};

export default Header;