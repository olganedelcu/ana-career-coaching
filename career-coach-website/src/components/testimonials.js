import React from "react";
import * as styles from "./testimonials.module.css";

const Testimonials = ({ testimonials }) => {
  return (
    <div className={styles.testimonialsSection}>
      <h2 style={{ color: '#ff6b6b' }}>Testimonials</h2> {/* Use primary color for heading */}
      {testimonials.map((testimonial, index) => (
        <blockquote key={index}>
          <p>{testimonial.text}</p>
          <footer>— {testimonial.author}, {testimonial.position}</footer>
        </blockquote>
      ))}
    </div>
  );
};

export default Testimonials;