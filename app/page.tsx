"use client"

import { useRef } from "react"
import { useScroll } from "framer-motion"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ScheduleSection from "@/components/schedule-section"
import MentorsSection from "@/components/mentors-section"
import SocialFeedSection from "@/components/social-feed-section"
import SponsorsSection from "@/components/sponsors-section"
import FooterSection from "@/components/footer-section"
import ThemeSection from "@/components/theme-section"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
      <div ref={containerRef} className="bg-black text-white overflow-hidden">
        <Navbar />
        <HeroSection />
        <AboutSection scrollYProgress={scrollYProgress} />
        <ThemeSection />
        <ScheduleSection />
        <MentorsSection />
        <SocialFeedSection />
        <SponsorsSection />
        <FooterSection />
      </div>
    </ThemeProvider>
  )
}

