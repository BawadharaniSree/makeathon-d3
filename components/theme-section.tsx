"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Brain, PinIcon as Chip, Globe, Lock, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ThemeSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // Theme categories with icons
  const themes = [
    {
      icon: <Brain className="h-10 w-10 text-cyan-400" />,
      title: "Artificial Intelligence",
      description: "Harness the power of AI to solve complex problems and create innovative solutions.",
    },
    {
      icon: <Lock className="h-10 w-10 text-purple-400" />,
      title: "Cybersecurity",
      description: "Develop cutting-edge security solutions to protect digital assets and privacy.",
    },
    {
      icon: <Chip className="h-10 w-10 text-cyan-400" />,
      title: "Blockchain",
      description: "Build decentralized applications that revolutionize trust and transparency.",
    },
    {
      icon: <Globe className="h-10 w-10 text-purple-400" />,
      title: "Internet of Things",
      description: "Connect the physical and digital worlds to create smarter environments.",
    },
  ]

  return (
    <section id="theme" ref={ref} className="relative min-h-screen py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05)_0%,transparent_70%)] -z-20"></div>

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20 -z-30">
        <div className="h-full w-full bg-[linear-gradient(to_right,#8884_1px,transparent_1px),linear-gradient(to_bottom,#8884_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 inline-block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Hackathon Themes
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Choose from our cutting-edge themes or bring your own innovative ideas to life during the 24-hour coding
            marathon.
          </p>
        </motion.div>

        <motion.div style={{ y, opacity }} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-black/50 backdrop-blur-md border border-cyan-500/30 rounded-lg hover:border-cyan-500/50 transition-all shadow-lg shadow-cyan-500/10"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                <div className="p-3 bg-black/70 rounded-lg border border-cyan-500/30">{theme.icon}</div>
                <h3 className="text-xl font-bold text-white">{theme.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{theme.description}</p>

              {/* Animated circuit lines */}
              <div className="relative h-1 w-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full overflow-hidden mb-4">
                <motion.div
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2,
                    ease: "linear",
                  }}
                  className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-cyan-400 to-purple-400"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/problems">
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-none px-8 py-6 text-lg shadow-lg shadow-cyan-500/20 group">
              <span>View Problem Statements</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-0.5 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 mt-16 mx-auto max-w-md"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <Zap className="h-5 w-5 text-cyan-400" />
            <p className="text-gray-400">Explore detailed problem statements and choose your challenge</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

