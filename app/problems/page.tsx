"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Cpu, Database, Globe, Lightbulb, Shield, Smartphone, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

// Problem statement data
const problemStatements = {
  ai: [
    {
      id: 1,
      title: "AI-Powered Healthcare Diagnostics",
      description: "Develop an AI system that can analyze medical images to assist in early disease detection.",
      details:
        "Create a solution that uses computer vision and machine learning to identify potential health issues from X-rays, MRIs, or other medical imaging. Focus on accuracy, explainability, and integration with existing healthcare systems.",
      difficulty: "Hard",
      resources: ["TensorFlow/PyTorch", "Medical imaging datasets", "Healthcare API documentation"],
    },
    {
      id: 2,
      title: "Natural Language Processing for Education",
      description: "Build an AI tutor that can answer student questions and provide personalized learning resources.",
      details:
        "Develop a conversational AI that understands educational queries, provides accurate answers, and adapts to the student's learning style and progress. Consider multilingual support and integration with existing educational platforms.",
      difficulty: "Medium",
      resources: ["OpenAI API", "Educational content datasets", "NLP libraries"],
    },
  ],
  cybersecurity: [
    {
      id: 1,
      title: "Secure Authentication System",
      description: "Design a multi-factor authentication system that balances security and user experience.",
      details:
        "Create an authentication solution that implements biometrics, behavioral analysis, and/or hardware tokens while maintaining a smooth user experience. Consider privacy implications and compliance with security standards.",
      difficulty: "Medium",
      resources: ["Authentication libraries", "Security best practices documentation", "UX design guidelines"],
    },
    {
      id: 2,
      title: "Threat Detection and Response",
      description: "Build a system that can detect and respond to network security threats in real-time.",
      details:
        "Develop a solution that monitors network traffic, identifies potential security breaches, and automatically initiates appropriate responses. Focus on minimizing false positives while ensuring comprehensive protection.",
      difficulty: "Hard",
      resources: ["Network security datasets", "Threat intelligence APIs", "SIEM documentation"],
    },
  ],
  blockchain: [
    {
      id: 1,
      title: "Decentralized Supply Chain Tracking",
      description: "Create a blockchain solution for transparent and secure supply chain management.",
      details:
        "Build a system that tracks products from origin to consumer, ensuring authenticity and ethical sourcing. Consider integration with IoT devices for automated verification and user-friendly interfaces for stakeholders.",
      difficulty: "Medium",
      resources: ["Ethereum/Solana documentation", "Smart contract examples", "Supply chain APIs"],
    },
    {
      id: 2,
      title: "NFT Marketplace for Digital Rights",
      description: "Develop a platform for creators to tokenize and trade digital intellectual property.",
      details:
        "Create a marketplace where artists, musicians, writers, and other creators can mint NFTs representing their work and manage licensing rights. Focus on fair compensation, ease of use, and protection against unauthorized copying.",
      difficulty: "Hard",
      resources: ["NFT standards documentation", "IPFS", "Digital rights management resources"],
    },
  ],
  iot: [
    {
      id: 1,
      title: "Smart City Infrastructure Monitoring",
      description: "Build an IoT system to monitor and optimize urban infrastructure.",
      details:
        "Develop a network of sensors and analytics tools to monitor traffic flow, energy usage, waste management, or other urban systems. Focus on scalability, power efficiency, and actionable insights for city planners.",
      difficulty: "Hard",
      resources: ["IoT sensor documentation", "City data APIs", "Edge computing frameworks"],
    },
    {
      id: 2,
      title: "Agricultural Automation System",
      description: "Create an IoT solution for precision farming and agricultural optimization.",
      details:
        "Design a system that uses sensors, drones, and/or automated equipment to monitor crop health, optimize irrigation, and increase farm productivity. Consider environmental sustainability and ease of use for farmers.",
      difficulty: "Medium",
      resources: ["Agricultural sensor documentation", "Weather APIs", "Automation control systems"],
    },
  ],
}

export default function ProblemsPage() {
  const [activeCategory, setActiveCategory] = useState("ai")

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background effects */}
      <div className="fixed inset-0 bg-gradient-to-b from-purple-950/30 via-black to-black -z-10"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1)_0%,transparent_70%)] -z-10"></div>
      <div className="fixed inset-0 opacity-20 -z-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#8884_1px,transparent_1px),linear-gradient(to_bottom,#8884_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="flex items-center mb-8">
          <Link href="/">
            <Button variant="ghost" size="icon" className="mr-4 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30">
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            Problem Statements
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-300 mb-12 max-w-3xl"
        >
          Choose from the following problem statements for Make-a-Thon 6.0. Each category offers unique challenges that
          will push your creativity and technical skills to the limit.
        </motion.p>

        <Tabs defaultValue="ai" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 bg-black/50 border border-cyan-500/20 overflow-x-auto max-w-full">
            {[
              { value: "ai", label: "Artificial Intelligence", icon: <Cpu className="h-4 w-4 mr-2" /> },
              { value: "cybersecurity", label: "Cybersecurity", icon: <Shield className="h-4 w-4 mr-2" /> },
              { value: "blockchain", label: "Blockchain", icon: <Database className="h-4 w-4 mr-2" /> },
              { value: "iot", label: "Internet of Things", icon: <Smartphone className="h-4 w-4 mr-2" /> },
            ].map((category) => (
              <TabsTrigger
                key={category.value}
                value={category.value}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500/20 data-[state=active]:to-purple-500/20 data-[state=active]:text-white flex items-center justify-center whitespace-nowrap"
              >
                {category.icon}
                <span className="hidden sm:inline">{category.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.keys(problemStatements).map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {problemStatements[category].map((problem) => (
                  <motion.div
                    key={problem.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="h-full"
                  >
                    <Card className="bg-black/50 backdrop-blur-md border-cyan-500/30 hover:border-cyan-500/50 transition-all h-full flex flex-col">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          {category === "ai" ? (
                            <Cpu className="h-5 w-5 text-cyan-400" />
                          ) : category === "cybersecurity" ? (
                            <Shield className="h-5 w-5 text-cyan-400" />
                          ) : category === "blockchain" ? (
                            <Database className="h-5 w-5 text-cyan-400" />
                          ) : (
                            <Smartphone className="h-5 w-5 text-cyan-400" />
                          )}
                          <div className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400">
                            {problem.difficulty}
                          </div>
                        </div>
                        <CardTitle className="text-xl text-white">{problem.title}</CardTitle>
                        <CardDescription className="text-gray-400">{problem.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="text-sm text-gray-300 mb-4">{problem.details}</div>
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-cyan-400">Resources:</h4>
                          <ul className="text-sm text-gray-400 list-disc pl-5 space-y-1">
                            {problem.resources.map((resource, index) => (
                              <li key={index}>{resource}</li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                          <Lightbulb className="h-4 w-4 mr-2" />
                          Select This Challenge
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 p-6 bg-black/50 backdrop-blur-md border border-cyan-500/30 rounded-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            <Globe className="h-6 w-6 text-cyan-400" />
            <h2 className="text-xl font-bold text-white">Open Innovation Track</h2>
          </div>
          <p className="text-gray-300 mb-4">
            Have a groundbreaking idea that doesn't fit into the categories above? The Open Innovation track allows you
            to work on any problem that you're passionate about solving.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Zap className="h-4 w-4 text-purple-400" />
            <span>
              Projects in this track will be judged on creativity, technical implementation, and real-world impact.
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

