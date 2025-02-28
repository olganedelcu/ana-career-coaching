import React from "react";
import * as styles from './team.module.css'; // Import the CSS module
import teamMemberImage from '../images/ana.png'; // Import the image

const Team = () => {
  return (
    <section className={styles.teamSection}>
      <h2 className={styles.teamTitle}>About the Team</h2>
      <p className={styles.teamText}>
        We are a dedicated team of professionals committed to helping you achieve your career goals. Our expertise spans various industries, and we are here to provide personalized mentorship and support.
      </p>
      <div className={styles.teamMemberContainer}>
        {/* Example team member */}
        <div className={styles.teamMember}>
        <img className={styles.teamMemberImage} src={teamMemberImage} alt="Team Member 1" />
        <h3 className={styles.teamMemberName}>Team Member 1</h3>
          <p className={styles.teamMemberRole}>Role Description</p>
        </div>
        {/* Add more team members as needed */}
      </div>
    </section>
  );
};

export default Team;