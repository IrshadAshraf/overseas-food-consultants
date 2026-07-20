import AboutUs from "@/components/AboutUs";
import Approach from "@/components/Approach";
import ContactUs from "@/components/ContactUs";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SuccessStories from "@/components/SuccessStories";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import WhyCooseUs from "@/components/WhyCooseUs";
import React from "react";

function Home() {
  return (
    <>
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <section id="about-us">
        <AboutUs />
      </section>

      <section id="expertise">
        <Expertise />
      </section>

      <section id="approach">
        <Approach />
      </section>

      <section id="why-choose-us">
        <WhyCooseUs />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="team">
        <Team />
      </section>

      <section id="success-stories">
        <SuccessStories />
      </section>

      <section id="contact-us">
        <ContactUs />
      </section>

      <Footer />
    </>
  );
}

export default Home;
