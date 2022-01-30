import React from 'react'
import AboutMe from '../components/AboutMe'
import Hero from "../components/Hero"
import SocialNetwork from "../components/SocialNetwork"
import Tecnhology from '../components/Tecnhology'

export default function HomeScreen() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <SocialNetwork />
      <Tecnhology />
    </main>
  )
}
