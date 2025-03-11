"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

const mentors = [
  {
    id: 1,
    name: "Alex Chen",
    role: "AI Research Scientist",
    company: "TechCorp",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Alex specializes in deep learning and computer vision. With over 10 years of experience, he has published numerous papers on AI applications in robotics.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 2,
    name: "Sophia Rodriguez",
    role: "Blockchain Developer",
    company: "CryptoInnovate",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Sophia is a blockchain expert who has worked on several decentralized applications. She's passionate about Web3 and cryptocurrency innovations.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "Cybersecurity Expert",
    company: "SecureNet",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Marcus has protected Fortune 500 companies from cyber threats for over 15 years. He specializes in ethical hacking and security architecture.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 4,
    name: "Priya Patel",
    role: "UX/UI Designer",
    company: "DesignFuture",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Priya creates intuitive and beautiful interfaces for tech products. Her designs have helped startups increase user engagement by over 200%.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 5,
    name: "David Kim",
    role: "IoT Specialist",
    company: "ConnectedTech",
    image: "/placeholder.svg?height=400&width=400",
    bio: "David builds innovative IoT solutions that bridge the physical and digital worlds. He's worked on smart city projects across three continents.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 6,
    name: "Emma Wilson",
    role: "AR/VR Developer",
    company: "ImmerseTech",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Emma creates immersive experiences using cutting-edge AR and VR technologies. Her work has been featured at major tech conferences worldwide.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
]

export default function MentorsSection() {
  const [activeMentor, setActiveMentor] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const mentorsPerPage = 3
  const totalPages = Math.ceil(mentors.length / mentorsPerPage)

  const nextPage = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const visibleMentors = mentors.slice(currentIndex * mentorsPerPage, (currentIndex + 1) * mentorsPerPage)

  return (
    <section
      id="mentors"
      className="relative py-20 bg-gradient-to-b from-black via-purple-950/10 to-black overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1)_0%,transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 inline-block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Meet Our Mentors
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Get guidance from industry experts who will help you bring your ideas to life.
          </p>
        </motion.div>

        {/* 3D Rotating Gallery */}
        <div className="relative">
          {/* Navigation buttons */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevPage}
              className="bg-black/50 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-950/30 hover:text-cyan-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={nextPage}
              className="bg-black/50 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-950/30 hover:text-cyan-300"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Mentors gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
            <AnimatePresence mode="wait">
              {visibleMentors.map((mentor, index) => (
                <motion.div
                  key={mentor.id}
                  initial={{ opacity: 0, y: 50, rotateY: -30 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  exit={{ opacity: 0, y: -50, rotateY: 30 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                  }}
                  className="relative group perspective"
                >
                  <div
                    className="relative overflow-hidden rounded-lg bg-black/50 backdrop-blur-sm border border-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-300 transform group-hover:scale-105 h-full"
                    onMouseEnter={() => setActiveMentor(mentor.id)}
                    onMouseLeave={() => setActiveMentor(null)}
                  >
                    {/* Holographic effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Mentor image */}
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                      <img
                        src={mentor.image || "/placeholder.svg"}
                        alt={mentor.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Glitch effect on hover */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: activeMentor === mentor.id ? [0, 0.1, 0] : 0,
                        }}
                        transition={{
                          duration: 0.2,
                          repeat: activeMentor === mentor.id ? Number.POSITIVE_INFINITY : 0,
                          repeatType: "loop",
                        }}
                        className="absolute inset-0 bg-cyan-500 mix-blend-overlay"
                      ></motion.div>
                    </div>

                    {/* Mentor info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-1">{mentor.name}</h3>
                      <p className="text-cyan-400 text-sm mb-3">
                        {mentor.role} at {mentor.company}
                      </p>

                      {/* Bio with glitch transition */}
                      <AnimatePresence>
                        {activeMentor === mentor.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-gray-400 text-sm mb-4 overflow-hidden"
                          >
                            {mentor.bio}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Social links */}
                      <div className="flex gap-3 mt-4">
                        <a href={mentor.social.twitter} className="text-gray-400 hover:text-cyan-400 transition-colors">
                          <Twitter className="h-5 w-5" />
                        </a>
                        <a
                          href={mentor.social.linkedin}
                          className="text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a href={mentor.social.github} className="text-gray-400 hover:text-cyan-400 transition-colors">
                          <Github className="h-5 w-5" />
                        </a>
                      </div>
                    </div>

                    {/* Neon edge glow on hover */}
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute inset-0 rounded-lg shadow-[0_0_15px_rgba(0,255,255,0.5)] pointer-events-none"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? "bg-cyan-400 w-6" : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to page ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">Want to become a mentor for Make-a-Thon 6.0?</p>
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-none">
            Apply as Mentor
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

