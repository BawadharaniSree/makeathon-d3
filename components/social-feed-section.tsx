"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Twitter, MessageSquare, Heart, Repeat, Share2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock social media data
const twitterFeed = [
  {
    id: 1,
    user: {
      name: "Alex Chen",
      handle: "@alexcoder",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    content:
      "Just arrived at #MakeAThon6! The venue looks amazing with all these neon lights and cyberpunk vibes. Can't wait to start hacking! 🚀",
    time: "10m ago",
    likes: 24,
    retweets: 5,
    replies: 3,
  },
  {
    id: 2,
    user: {
      name: "Make-a-Thon",
      handle: "@makeathon",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    content:
      "Registration is now open! Head to the main hall to get your badges and swag bags. Remember to join a team before 11:30 AM. #MakeAThon6 #Hackathon",
    time: "25m ago",
    likes: 56,
    retweets: 18,
    replies: 7,
  },
  {
    id: 3,
    user: {
      name: "TechCorp",
      handle: "@techcorp",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    content:
      "Proud to sponsor #MakeAThon6! Our mentors are ready to help teams with AI integration. Come find us at booth 12 for guidance and cool API access! 💻",
    time: "45m ago",
    likes: 42,
    retweets: 12,
    replies: 5,
  },
  {
    id: 4,
    user: {
      name: "Sarah Dev",
      handle: "@sarahcodes",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    content:
      "Looking for 2 more team members for #MakeAThon6! We're working on an AR solution for urban navigation. DM if interested! #TeamBuilding",
    time: "1h ago",
    likes: 18,
    retweets: 8,
    replies: 12,
  },
]

const discordFeed = [
  {
    id: 1,
    user: {
      name: "Moderator",
      role: "Admin",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    content:
      "Welcome to the official Make-a-Thon 6.0 Discord! Please check the #rules channel for guidelines and #resources for helpful links.",
    time: "15m ago",
    channel: "#general",
  },
  {
    id: 2,
    user: {
      name: "DevNinja",
      role: "Participant",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    content: "Anyone else having trouble with the WiFi in the east wing? Signal keeps dropping.",
    time: "22m ago",
    channel: "#tech-support",
  },
  {
    id: 3,
    user: {
      name: "AIExpert",
      role: "Mentor",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    content: "I'll be hosting a workshop on GPT integration at 6 PM in Room 204. Bring your laptops!",
    time: "30m ago",
    channel: "#announcements",
  },
  {
    id: 4,
    user: {
      name: "CoffeeCode",
      role: "Participant",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    content: "Our team is looking for someone with blockchain experience. We're at table 17 if anyone wants to join!",
    time: "45m ago",
    channel: "#team-building",
  },
]

// Terminal component for live updates
function Terminal({ messages }) {
  const [displayedMessages, setDisplayedMessages] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < messages.length) {
      const timer = setTimeout(() => {
        setDisplayedMessages((prev) => [...prev, messages[currentIndex]])
        setCurrentIndex((prev) => prev + 1)
      }, 2000)

      return () => clearTimeout(timer)
    } else {
      // Reset to start over when all messages have been displayed
      const timer = setTimeout(() => {
        setDisplayedMessages([])
        setCurrentIndex(0)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, messages])

  return (
    <div className="bg-black border border-cyan-500/30 rounded-lg p-4 font-mono text-sm h-64 overflow-y-auto">
      <div className="flex items-center gap-2 mb-4 border-b border-cyan-500/20 pb-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-gray-400 text-xs ml-2">terminal@makeathon:~</span>
      </div>

      {displayedMessages.map((msg, index) => (
        <div key={index} className="mb-2">
          <span className="text-cyan-400">{">"} </span>
          <span className="text-gray-300">{msg}</span>
        </div>
      ))}

      <div className="inline-block h-4 w-2 bg-cyan-400 animate-pulse"></div>
    </div>
  )
}

// 3D Robot Mascot component
function RobotMascot() {
  return (
    <div className="relative h-64 w-full">
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32"
      >
        {/* Simple robot representation */}
        <div className="relative">
          {/* Head */}
          <motion.div
            animate={{
              borderColor: ["#00ffff", "#ff00ff", "#00ffff"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="w-20 h-20 bg-black border-2 border-cyan-500 rounded-lg mx-auto relative"
          >
            {/* Eyes */}
            <div className="absolute top-6 left-3 w-3 h-3 bg-cyan-400 rounded-full"></div>
            <div className="absolute top-6 right-3 w-3 h-3 bg-cyan-400 rounded-full"></div>

            {/* Mouth */}
            <motion.div
              animate={{
                width: ["60%", "40%", "60%"],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-cyan-400 rounded"
              style={{ width: "60%" }}
            ></motion.div>

            {/* Antenna */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-1 h-5 bg-gray-400">
              <motion.div
                animate={{
                  backgroundColor: ["#00ffff", "#ff00ff", "#00ffff"],
                }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="w-2 h-2 rounded-full bg-cyan-400 absolute -top-1 left-1/2 transform -translate-x-1/2"
              ></motion.div>
            </div>
          </motion.div>

          {/* Body */}
          <div className="w-24 h-28 bg-black border-2 border-cyan-500 rounded-lg mx-auto mt-2 relative">
            {/* Chest light */}
            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-500/50 rounded-full"
            ></motion.div>

            {/* Buttons */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
              <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
              <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function SocialFeedSection() {
  const terminalMessages = [
    "Initializing Make-a-Thon 6.0 live feed...",
    "Team Cyber Wizards just submitted their project!",
    "Workshop on AI Ethics starting in Room 204 in 15 minutes",
    "Reminder: Lunch will be served at 12:30 PM",
    "New API challenge announced by TechCorp - check #announcements",
    "System update: WiFi issues in east wing resolved",
  ]

  return (
    <section
      id="updates"
      className="relative py-20 bg-gradient-to-b from-black via-purple-950/10 to-black overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05)_0%,transparent_70%)]"></div>
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
            Live Updates
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Stay connected with real-time updates from the hackathon floor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column - Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 h-full">
              <h3 className="text-xl font-bold text-white mb-4 font-mono flex items-center">
                <span className="inline-block h-3 w-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Live Terminal
              </h3>
              <Terminal messages={terminalMessages} />
              <div className="mt-6">
                <RobotMascot />
              </div>
            </div>
          </motion.div>

          {/* Right column - Social feeds */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4 font-mono">Social Feed</h3>

              <Tabs defaultValue="twitter" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6 bg-black/50 border border-cyan-500/20">
                  <TabsTrigger
                    value="twitter"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500/20 data-[state=active]:to-purple-500/20 data-[state=active]:text-white"
                  >
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </TabsTrigger>
                  <TabsTrigger
                    value="discord"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500/20 data-[state=active]:to-purple-500/20 data-[state=active]:text-white"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Discord
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="twitter" className="mt-0 space-y-4">
                  {twitterFeed.map((tweet, index) => (
                    <motion.div
                      key={tweet.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="p-4 border border-cyan-500/10 rounded-lg bg-black/30 hover:bg-black/50 transition-all"
                    >
                      <div className="flex gap-3">
                        <img
                          src={tweet.user.avatar || "/placeholder.svg"}
                          alt={tweet.user.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-bold text-white">{tweet.user.name}</div>
                              <div className="text-gray-400 text-sm">{tweet.user.handle}</div>
                            </div>
                            <div className="text-gray-400 text-xs">{tweet.time}</div>
                          </div>
                          <div className="mt-2 text-gray-300">{tweet.content}</div>
                          <div className="mt-3 flex gap-6 text-gray-400 text-sm">
                            <div className="flex items-center gap-1 hover:text-cyan-400 transition-colors cursor-pointer">
                              <MessageSquare className="h-4 w-4" />
                              <span>{tweet.replies}</span>
                            </div>
                            <div className="flex items-center gap-1 hover:text-green-400 transition-colors cursor-pointer">
                              <Repeat className="h-4 w-4" />
                              <span>{tweet.retweets}</span>
                            </div>
                            <div className="flex items-center gap-1 hover:text-red-400 transition-colors cursor-pointer">
                              <Heart className="h-4 w-4" />
                              <span>{tweet.likes}</span>
                            </div>
                            <div className="flex items-center gap-1 hover:text-cyan-400 transition-colors cursor-pointer">
                              <Share2 className="h-4 w-4" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </TabsContent>

                <TabsContent value="discord" className="mt-0 space-y-4">
                  {discordFeed.map((message, index) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="p-4 border border-cyan-500/10 rounded-lg bg-black/30 hover:bg-black/50 transition-all"
                    >
                      <div className="flex gap-3">
                        <img
                          src={message.user.avatar || "/placeholder.svg"}
                          alt={message.user.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-2">
                              <div className="font-bold text-white">{message.user.name}</div>
                              <div
                                className={`text-xs px-2 py-0.5 rounded ${
                                  message.user.role === "Admin"
                                    ? "bg-red-500/20 text-red-400"
                                    : message.user.role === "Mentor"
                                      ? "bg-cyan-500/20 text-cyan-400"
                                      : "bg-gray-500/20 text-gray-400"
                                }`}
                              >
                                {message.user.role}
                              </div>
                            </div>
                            <div className="text-gray-400 text-xs">{message.time}</div>
                          </div>
                          <div className="text-xs text-purple-400 mt-1">{message.channel}</div>
                          <div className="mt-2 text-gray-300">{message.content}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </TabsContent>
              </Tabs>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

