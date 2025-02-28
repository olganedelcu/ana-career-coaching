import React from "react";
import * as styles from "./services.module.css";

const Services = () => {
  const services = [
    { 
      title: "Career Foundations", 
      description: "We'll turn your CV and cover letter from overlooked to getting noticed by recruiters.", 
      image: "path/to/career-foundations.jpg" // Replace with actual image path
    },
    { 
      title: "LinkedIn Branding", 
      description: "We'll transform your LinkedIn profile to showcase your skills and attract attention from top employers.", 
      image: "path/to/linkedin-branding.jpg" // Replace with actual image path
    },
    { 
      title: "Job Search Strategy", 
      description: "We'll develop a job search plan that takes you from no responses to landing interviews with the best opportunities.", 
      image: "path/to/job-search-strategy.jpg" // Replace with actual image path
    },
    { 
      title: "Interview Preparation", 
      description: "We'll equip you with winning interview techniques, giving you the confidence to impress hiring managers.", 
      image: "path/to/interview-preparation.jpg" // Replace with actual image path
    },
  ];

  return (
    <div className={styles.servicesSection}>
      <h2 className={styles.heading}>How Can We Help You</h2>
      <div className={styles.servicesContainer}>
        {services.map((service, index) => (
          <div key={index} className={styles.service}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <img src={service.image} alt={service.title} className={styles.serviceImage} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;