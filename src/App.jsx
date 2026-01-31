import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import useTheme from "./hooks/useTheme";

export default function App() {
  useTheme(); // apply persisted theme if present
  return (
    <> 
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
