import React from "react";
import Layout from "../components/layout"; // Import the Layout component
import Seo from "../components/seo";
import Experience from "../components/experience";
import Team from "../components/team";
import Services from "../components/services"; // Import the Services component
import { Link } from "gatsby"; // Import Link from Gatsby
import menteeImage from "../images/mentee.jpeg"; // Import the first mentee image
import menteeImage2 from "../images/mentee2.jpeg";
import menteeImage3 from "../images/mentee3.jpeg";
import menteeImage4 from "../images/mentee4.jpeg";
import menteeImage5 from "../images/mentee5.jpeg";
import menteeImage6 from "../images/mentee6.jpeg";
import menteeImage7 from "../images/mentee7.jpeg";

const IndexPage = () => {
  return (
    <Layout>
      <section className="job-search-section">
        <div className="text-container">
          <h1 className="title">
            Your Job Search Ends Here: <span className="highlighted-text">We Get You Hired</span>
          </h1>
          <p>
            At JobSeekers Europe, we use proven methods to understand the job market and what employers want. Our team conducts thorough research to identify the skills and qualifications needed across various fields.
            <br /><br />
            We break this information down into simple steps that anyone can follow to land their dream job. 
            <br /><br />
            As a career accelerator, we offer personalized mentorship and training tailored to your unique needs. Our goal is to help you succeed in landing the job you want.
          </p>
          <Link to="/testimonials" className="button">WATCH Testimonial Here</Link>
          
          {/* Button and Avatar/Text Next to Each Other */}
          <div className="avatar-wrap">
            <img className="avatar-image" src={menteeImage} loading="lazy" alt="Anant Parashar" />
            <img className="avatar-image" src={menteeImage2} loading="lazy" alt="Anant Parashar" />
            <img className="avatar-image" src={menteeImage3} loading="lazy" alt="Anant Parashar" />
            <img className="avatar-image" src={menteeImage4} loading="lazy" alt="Anant Parashar" />
            <img className="avatar-image" src={menteeImage5} loading="lazy" alt="Anant Parashar" />
            <img className="avatar-image" src={menteeImage6} loading="lazy" alt="Anant Parashar" />
            <img className="avatar-image" src={menteeImage7} loading="lazy" alt="Anant Parashar" />
            {/* Add more AvatarImage components as needed */}
          </div>
          <div className="small-text">Join 200+ professionals in their journey to excellence.</div>
        </div>
        <div className="video-container">
          <iframe 
            width="100%" 
            height="266" 
            src="https://www.youtube.com/embed/your-video-id" // Replace with your video URL
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <Experience />
      <Services /> 
      <Team />
      
    </Layout>
  );
};

export const Head = () => <Seo title="Home" description="Welcome to JobSeekers Europe, where we empower you to land your dream job." />;

export default IndexPage;