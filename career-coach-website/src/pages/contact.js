import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const ContactPage = () => (
  <Layout>
    <h1>Contact Me</h1>
    <p>Email: ananedelcu@jobseekerseurope.com</p>
    <p>Phone: +49 1522 2452174</p>
  </Layout>
);

export const Head = () => <Seo title="Contact" description="Get in touch with Ana for career coaching." />;

export default ContactPage;