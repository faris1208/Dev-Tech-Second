import React from 'react'
import styles from "../landing-page/styles.module.scss"
import NavBar from "../landing-page/components/navbar";
import Services from "../landing-page/components/services";
import Portfolio from "../landing-page/components/portfolio";
import Experience from "../landing-page/components/experience";
import AboutUs from "../landing-page/components/about-us";
import Touch from "../landing-page/components/touch";
import Footer from "../landing-page/components/footer";
import Technology from "../landing-page/components/technology";

export default function LandingPage() {
  return (
    <div className={styles.landing_page}>
    <NavBar />
    <Technology />
    <Services />
    <Portfolio />
    <Experience />
    <AboutUs />
    <Touch />
    <Footer />
    </div>
  )
}
