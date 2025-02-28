import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Services from "../components/services"; // Import the Services component

const AboutPage = () => (
  <Layout>
    <h1>About Ana</h1>
    <p>I'm Ana, a career coach dedicated to helping professionals navigate the job market.</p>
    <p>With a background in sales and coaching, I understand the challenges job seekers face.</p>
    
    <Services /> 
  </Layout>
);

export const Head = () => <Seo title="About" description="Learn more about Ana, your career coach." />;

export default AboutPage;