import Hero from "components/Hero";
import Details from "components/Details";
import NavContainer from "components/NavContainer";
import Footer from "components/Footer";
import React from "react";

import { connectLinks, workLinks } from "data/ContactPage";

const ContactPage: React.FC = () => {
  return (
    <div className="ContactPage">
      <Hero />
      <Details
        header="Thank you for being a friend :)"
        previewText="If you'd like to connect with me, feel free to reach out through any of the following channels :D"
        bgImage=""
      />
      <NavContainer navLinks={connectLinks} />
      <Details
        header="Looking good and need a solution?"
        previewText="I'm open to hear you out and talk about building something awesome together!"
        bgImage=""
      />
      <NavContainer navLinks={workLinks} />
      <Footer />
    </div>
  );
};

export default ContactPage;