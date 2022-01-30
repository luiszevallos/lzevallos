import React from 'react'
import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'
import Hero from "../components/Hero"
import SocialNetwork from "../components/SocialNetwork"
import Tecnhology from '../components/Tecnhology'
import WorkExperience from '../components/WorkExperience'

export default function HomeScreen() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <SocialNetwork />
      <Tecnhology />
      <WorkExperience />
      <Contact />
    </main>
  )
}
