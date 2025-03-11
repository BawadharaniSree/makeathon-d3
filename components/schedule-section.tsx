"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Clock, Calendar, Users, Award, Coffee, Code, Lightbulb, Zap } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

// Updated schedule data for 24 hours (2 days)
const scheduleData = {
  day1: [
    {
      time: "09:00 AM",
      title: "Registration & Check-in",
      description: "Get your badges and welcome kit",
      icon: <Users className="h-5 w-5 text-cyan-400" />,
    },
    {
      time: "10:00 AM",
      title: "Opening Ceremony",
      description: "Kickoff and introduction to the hackathon",
      icon: <Zap className="h-5 w-5 text-purple-400" />,
    },
    {
      time: "11:00 AM",
      title: "Team Formation",
      description: "Find teammates and brainstorm ideas",
      icon: <Lightbulb className="h-5 w-5 text-cyan-400" />,
    },
    {
      time: "12:00 PM",
      title: "Lunch Break",
      description: "Networking lunch with sponsors",
      icon: <Coffee className="h-5 w-5 text-purple-400" />,
    },
    {
      time: "01:00 PM",
      title: "Hacking Begins",
      description: "Start building your projects",
      icon: <Code className="h-5 w-5 text-cyan-400" />,
    },
    {
      time: "03:00 PM",
      title: "Workshop: AI Integration",
      description: "Learn how to integrate AI into your projects",
      icon: <Lightbulb className="h-5 w-5 text-purple-400" />,
    },
    {
      time: "06:00 PM",
      title: "Dinner",
      description: "Refuel for the night ahead",
      icon: <Coffee className="h-5 w-5 text-cyan-400" />,
    },
    {
      time: "08:00 PM",
      title: "Mentor Sessions",
      description: "Get guidance from industry experts",
      icon: <Users className="h-5 w-5 text-purple-400" />,
    },
    {
      time: "10:00 PM",
      title: "Late Night Coding",
      description: "Continue hacking through the night",
      icon: <Code className="h-5 w-5 text-cyan-400" />,
    },
  ],
  day2: [
    {
      time: "12:00 AM",
      title: "Midnight Snack",
      description: "Energy boost for night owls",
      icon: <Coffee className="h-5 w-5 text-cyan-400" />,
    },
    {
      time: "03:00 AM",
      title: "Progress Check-in",
      description: "Optional check-in with mentors",
      icon: <Lightbulb className="h-5 w-5 text-purple-400" />,
    },
    {
      time: "07:00 AM",
      title: "Breakfast",
      description: "Morning fuel for hackers",
      icon: <Coffee className="h-5 w-5 text-cyan-400" />,
    },
    {
      time: "09:00 AM",
      title: "Final Sprint",
      description: "Last push before submission deadline",
      icon: <Zap className="h-5 w-5 text-purple-400" />,
    },
    {
      time: "12:00 PM",
      title: "Lunch Break",
      description: "Final meal before submissions",
      icon: <Coffee className="h-5 w-5 text-cyan-400" />,
    },
    {
      time: "01:00 PM",
      title: "Hacking Ends",
      description: "Submission deadline",
      icon: <Code className="h-5 w-5 text-purple-400" />,
    },
    {
      time: "02:00 PM",
      title: "Project Expo",
      description: "Showcase your projects to judges",
      icon: <Lightbulb className="h-5 w-5 text-cyan-400" />,
    },
    {
      time: "04:00 PM",
      title: "Finalist Presentations",
      description: "Top teams present on the main stage",
      icon: <Users className="h-5 w-5 text-purple-400" />,
    },
    {
      time: "05:30 PM",
      title: "Awards Ceremony",
      description: "Winners announcement and prizes",
      icon: <Award className="h-5 w-5 text-cyan-400" />,
    },
    {
      time: "06:30 PM",
      title: "Closing Ceremony",
      description: "Farewell and future announcements",
      icon: <Zap className="h-5 w-5 text-purple-400" />,
    },
  ],
}

// 3D Digital Clock Component
function DigitalClock({ time }) {
  return (
    <div className="relative w-32 h-16 perspective-500">
      <motion.div
        initial={{ rotateX: -90 }}
        animate={{ rotateX: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-black border border-cyan-500/30 rounded-md flex items-center justify-center shadow-lg shadow-cyan-500/20"
      >
        <div className="font-mono text-2xl font-bold text-cyan-400">{time}</div>
      </motion.div>
    </div>
  )
}

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState("day1")

  return (
    <section
      id="schedule"
      className="relative py-20 bg-gradient-to-b from-black via-blue-950/10 to-black overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(to_right,#8884_1px,transparent_1px),linear-gradient(to_bottom,#8884_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
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
            Event Schedule
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            24 hours of innovation, coding, and collaboration. Here's what to expect during the hackathon.
          </p>
        </motion.div>

        {/* 3D Floating Digital Clocks */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8 mb-12"
        >
          <DigitalClock time="Day 1" />
          <DigitalClock time="Day 2" />
        </motion.div>

        {/* Schedule Tabs */}
        <Tabs defaultValue="day1" value={activeDay} onValueChange={setActiveDay} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-black/50 border border-cyan-500/20">
            <TabsTrigger
              value="day1"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500/20 data-[state=active]:to-purple-500/20 data-[state=active]:text-white"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Day 1
            </TabsTrigger>
            <TabsTrigger
              value="day2"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500/20 data-[state=active]:to-purple-500/20 data-[state=active]:text-white"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Day 2
            </TabsTrigger>
          </TabsList>

          {Object.keys(scheduleData).map((day) => (
            <TabsContent key={day} value={day} className="mt-0">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500 hidden md:block"></div>

                {/* Schedule items */}
                <div className="space-y-6">
                  {scheduleData[day].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex flex-col md:flex-row gap-4"
                    >
                      <div className="flex items-start">
                        <div className="hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-black border-2 border-cyan-500 z-10">
                          <Clock className="h-6 w-6 text-cyan-400" />
                        </div>
                        <div className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-black border-2 border-cyan-500 mr-3">
                          <Clock className="h-4 w-4 text-cyan-400" />
                        </div>
                        <div className="text-sm font-mono text-cyan-400 mt-2 md:hidden">{item.time}</div>
                      </div>

                      <Card className="flex-1 bg-black/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all overflow-hidden">
                        <CardContent className="p-0">
                          <div className="flex flex-col md:flex-row">
                            <div className="hidden md:flex items-center justify-center w-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-4">
                              <div className="text-sm font-mono text-cyan-400">{item.time}</div>
                            </div>
                            <div className="p-6">
                              <div className="flex items-center gap-2 mb-2">
                                {item.icon}
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                              </div>
                              <p className="text-gray-400">{item.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Leaderboard */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Live Leaderboard
          </h3>

          <div className="relative overflow-hidden rounded-lg border border-cyan-500/20 bg-black/50 backdrop-blur-sm">
            {/* Glitch effect overlay */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 mix-blend-overlay"></div>
              <motion.div
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
                className="absolute inset-0 w-full h-[200%] bg-[url('/placeholder.svg?height=100&width=1000')] bg-repeat opacity-10"
              ></motion.div>
            </div>

            <div className="p-6 overflow-x-auto">
              <div className="min-w-[600px]">
                <div className="grid grid-cols-12 text-sm font-medium text-gray-400 border-b border-cyan-500/20 pb-3 mb-3">
                  <div className="col-span-1">#</div>
                  <div className="col-span-5">Team</div>
                  <div className="col-span-3">Category</div>
                  <div className="col-span-3 text-right">Score</div>
                </div>

                {[
                  { rank: 1, team: "Cyber Wizards", category: "AI", score: 95 },
                  { rank: 2, team: "Neon Hackers", category: "Blockchain", score: 92 },
                  { rank: 3, team: "Digital Nomads", category: "IoT", score: 88 },
                  { rank: 4, team: "Code Breakers", category: "Cybersecurity", score: 85 },
                  { rank: 5, team: "Quantum Coders", category: "AI", score: 82 },
                ].map((team, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`grid grid-cols-12 py-3 ${index !== 4 ? "border-b border-cyan-500/10" : ""} ${
                      index === 0 ? "bg-gradient-to-r from-cyan-500/10 to-transparent" : ""
                    }`}
                  >
                    <div className="col-span-1 font-mono text-cyan-400">{team.rank}</div>
                    <div className="col-span-5 font-medium text-white">{team.team}</div>
                    <div className="col-span-3 text-gray-400">{team.category}</div>
                    <div className="col-span-3 text-right font-mono text-cyan-400">{team.score}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

