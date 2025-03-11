"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Instagram, Mail, MapPin, Calendar, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FooterSection() {
  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Cyber wave effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <motion.path
            fill="#0099ff"
            fillOpacity="0.1"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{
              d: [
                "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,128L48,154.7C96,181,192,235,288,234.7C384,235,480,181,576,181.3C672,181,768,235,864,250.7C960,267,1056,245,1152,229.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              duration: 10,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and about */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Terminal className="h-6 w-6 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Make-a-Thon 6.0
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              The ultimate cyberpunk hackathon where coders, designers, and innovators converge to build the future.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-1">
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Schedule", href: "#schedule" },
                { name: "Mentors", href: "#mentors" },
                { name: "Register", href: "#register" },
                { name: "Sponsors", href: "#sponsors" },
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="md:col-span-1">
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-cyan-400 mt-0.5" />
                <span className="text-gray-400">info@makeathon.tech</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-cyan-400 mt-0.5" />
                <span className="text-gray-400">TechHub Convention Center, 123 Innovation St, San Francisco, CA</span>
              </li>
              <li className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-cyan-400 mt-0.5" />
                <span className="text-gray-400">October 15-17, 2023</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-white font-bold mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-black/50 border border-cyan-500/30 rounded-md px-4 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-none whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* QR Codes */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
          {[
            { label: "Event Details", url: "#event" },
            { label: "Registration", url: "#register" },
            { label: "Venue Map", url: "#map" },
            { label: "Discord Server", url: "#discord" },
          ].map((qr, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 bg-white p-2 rounded-md relative overflow-hidden">
                {/* Simulated QR code */}
                <div className="w-full h-full bg-[url('/placeholder.svg?height=80&width=80')] bg-no-repeat bg-center"></div>

                {/* Glitch effect */}
                <motion.div
                  animate={{
                    opacity: [0, 0.1, 0],
                    y: [0, 80],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                  className="absolute inset-0 bg-cyan-500/30"
                ></motion.div>
              </div>
              <span className="text-sm text-gray-400 mt-2">{qr.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-cyan-500/20 text-center"
        >
          <p className="text-gray-500 text-sm">© 2023 Make-a-Thon 6.0. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4 text-xs text-gray-500">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Code of Conduct
            </a>
          </div>

          {/* Glitchy thank you message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 text-lg font-mono"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {"<Thank_You_For_Visiting/>"}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

