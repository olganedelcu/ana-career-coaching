import React from "react";
import * as styles from "./experience.module.css";

import ebayLogo from "../images/ebay.webp"; 
import company2Logo from "../images/microsoft.webp"; 
import company3Logo from "../images/logo2.jpeg"; 
import company4Logo from "../images/logo4.jpeg"; 
import company5Logo from "../images/logo3.jpeg"; 
import company6Logo from "../images/logo5.jpeg"; 
import company7Logo from "../images/logo6.jpeg"; 
import company8Logo from "../images/logo7.jpeg"; 

const logos = [
  { src: ebayLogo, alt: "eBay" },
  { src: company2Logo, alt: "Microsoft" },
  { src: company8Logo, alt: "Exela Technologies" },
  { src: company3Logo, alt: "Company 3" },
  { src: company4Logo, alt: "Company 4" },
  { src: company5Logo, alt: "Company 5" },
  { src: company6Logo, alt: "Company 6" },
  { src: company7Logo, alt: "Company 7" },
];

const Experience = () => {
  return (
    <div className={styles.experienceSection}>
      <h2>Trusted by professionals at top Companies</h2>
      <p>Over 200 professionals helped through personalized coaching and support.</p>
      <div className={styles.logoContainer}>
        <div className={styles.logoWrapper}>
          {logos.map((logo, index) => (
            <img 
              key={index} 
              src={logo.src} 
              alt={logo.alt} 
              className={`${styles.logo} ${logo.alt === "Exela Technologies" ? styles.largeLogo : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;