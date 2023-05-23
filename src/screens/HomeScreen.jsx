import React from "react";
import WorkExperience from "../components/WorkExperience";
import SocialNetwork from "../components/SocialNetwork";
import Tecnhology from "../components/Tecnhology";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Hero from "../components/Hero";

export default function HomeScreen() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <SocialNetwork />
      <Tecnhology />
      <Projects />
      <WorkExperience />
      <Contact />
    </main>
  );
}
