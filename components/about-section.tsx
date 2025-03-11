"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Cpu, Zap, Code, Braces, Bot, Layers } from "lucide-react"

export default function AboutSection({ scrollYProgress }) {
  const ref = useRef(null)
  const { scrollYProgress: sectionProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(sectionProgress, [0, 1], [100, -100])
  const opacity = useTransform(sectionProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // Parallax layers with different speeds
  const layer1Y = useTransform(sectionProgress, [0, 1], [0, -150])
  const layer2Y = useTransform(sectionProgress, [0, 1], [0, -100])
  const layer3Y = useTransform(sectionProgress, [0, 1], [0, -50])
  const layer4Y = useTransform(sectionProgress, [0, 1], [0, -25])

  return (
    <section id="about" ref={ref} className="relative min-h-screen py-20 overflow-hidden">
      {/* Enhanced layered background with parallax effect */}
      <motion.div
        style={{ y: layer1Y }}
        className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black -z-10"
      />

      <motion.div
        style={{ y: layer2Y }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,0,255,0.1),transparent_50%)] -z-20"
      />

      <motion.div
        style={{ y: layer3Y }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,255,255,0.1),transparent_50%)] -z-30"
      />

      <motion.div style={{ y: layer4Y }} className="absolute inset-0 opacity-20 -z-40">
        <div className="h-full w-full bg-[linear-gradient(to_right,#8884_1px,transparent_1px),linear-gradient(to_bottom,#8884_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      </motion.div>

      {/* Animated background wave */}
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

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-500"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -100],
              x: [0, Math.random() * 50 - 25],
              opacity: [0, 0.7, 0],
              scale: [0, Math.random() + 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="bg-black/70 backdrop-blur-md p-6 rounded-lg border border-cyan-500/30 inline-block">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 inline-block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              &lt;About Make-a-Thon 6.0/&gt;
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Join the ultimate cyberpunk hackathon where coders, designers, and innovators converge to build the
              future. 48 hours of coding, collaboration, and cutting-edge tech await.
            </p>
          </div>
        </motion.div>

        {/* Parallax content */}
        <div className="relative">
          <motion.div style={{ y, opacity }} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left side - Animated text */}
            <div className="space-y-8">
              {[
                {
                  icon: <Cpu className="h-8 w-8 text-cyan-400" />,
                  title: "Cutting-Edge Tech",
                  description:
                    "Experiment with the latest AI, blockchain, and IoT technologies to build innovative solutions.",
                },
                {
                  icon: <Zap className="h-8 w-8 text-purple-400" />,
                  title: "48-Hour Sprint",
                  description: "An adrenaline-fueled coding marathon where ideas transform into working prototypes.",
                },
                {
                  icon: <Code className="h-8 w-8 text-cyan-400" />,
                  title: "Expert Mentorship",
                  description: "Get guidance from industry veterans and tech pioneers throughout the event.",
                },
                {
                  icon: <Bot className="h-8 w-8 text-purple-400" />,
                  title: "AI & Robotics Focus",
                  description: "Special tracks dedicated to artificial intelligence and robotic innovations.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-6 rounded-lg bg-black/70 backdrop-blur-md border border-cyan-500/30 hover:border-cyan-500/50 transition-all shadow-lg shadow-cyan-500/10"
                >
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right side - Enhanced animated illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] flex items-center justify-center"
            >
              <div className="relative w-full h-full max-w-md mx-auto">
                {/* Enhanced animated circuit board background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(0, 255, 255, 0.3)",
                        "0 0 40px rgba(0, 255, 255, 0.5)",
                        "0 0 20px rgba(0, 255, 255, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                    className="w-64 h-64 rounded-full border-4 border-cyan-500/50 animate-pulse"
                  />
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                    className="absolute w-80 h-80 rounded-full border border-purple-500/30"
                  />
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    className="absolute w-96 h-96 rounded-full border border-cyan-500/20"
                  />
                </div>

                {/* Enhanced central holographic element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      rotateY: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    className="relative w-48 h-48"
                  >
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(0, 255, 255, 0.3)",
                          "0 0 40px rgba(0, 255, 255, 0.5)",
                          "0 0 20px rgba(0, 255, 255, 0.3)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-32 h-32 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-lg backdrop-blur-md border border-white/20 shadow-lg shadow-cyan-500/30"></div>
                    </motion.div>

                    {/* Enhanced orbiting elements */}
                    {[0, 1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        animate={{
                          rotate: [i * 90, i * 90 + 360],
                        }}
                        transition={{
                          duration: 10,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                        className="absolute inset-0"
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            boxShadow: [
                              "0 0 5px rgba(0, 255, 255, 0.5)",
                              "0 0 15px rgba(0, 255, 255, 0.8)",
                              "0 0 5px rgba(0, 255, 255, 0.5)",
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                            delay: i * 0.5,
                          }}
                          className="absolute w-6 h-6 bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/50"
                          style={{
                            left: "calc(50% + 80px * cos(" + i + "rad))",
                            top: "calc(50% + 80px * sin(" + i + "rad))",
                          }}
                        />
                      </motion.div>
                    ))}

                    {/* Data streams */}
                    {[0, 1, 2, 3].map((i) => (
                      <motion.div
                        key={`stream-${i}`}
                        className="absolute w-1 h-40 bg-gradient-to-b from-cyan-500/0 via-cyan-500/80 to-cyan-500/0"
                        style={{
                          left: "calc(50% + 40px * cos(" + (i * Math.PI) / 2 + "))",
                          top: "calc(50% + 40px * sin(" + (i * Math.PI) / 2 + "))",
                          transform: `rotate(${i * 90}deg)`,
                        }}
                        animate={{
                          height: [40, 80, 40],
                          opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                          delay: i * 0.5,
                        }}
                      />
                    ))}
                  </motion.div>
                </div>

                {/* Enhanced animated code snippets */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute top-10 left-0 right-0 flex justify-center"
                >
                  <motion.div
                    animate={{
                      opacity: [0.5, 0.9, 0.5],
                      y: [0, -5, 0],
                      boxShadow: [
                        "0 0 5px rgba(0, 255, 255, 0.3)",
                        "0 0 15px rgba(0, 255, 255, 0.5)",
                        "0 0 5px rgba(0, 255, 255, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                    className="text-xs text-cyan-400 font-mono bg-black/80 p-3 rounded border border-cyan-500/30"
                  >
                    &lt;div className="hackathon"&gt;
                    <br />
                    &nbsp;&nbsp;&#123;renderInnovation()&#125;
                    <br />
                    &lt;/div&gt;
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="absolute bottom-10 right-0 left-0 flex justify-center"
                >
                  <motion.div
                    animate={{
                      opacity: [0.5, 0.9, 0.5],
                      y: [0, 5, 0],
                      boxShadow: [
                        "0 0 5px rgba(255, 0, 255, 0.3)",
                        "0 0 15px rgba(255, 0, 255, 0.5)",
                        "0 0 5px rgba(255, 0, 255, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: 1,
                    }}
                    className="text-xs text-purple-400 font-mono bg-black/80 p-3 rounded border border-purple-500/30"
                  >
                    function createFuture() &#123;
                    <br />
                    &nbsp;&nbsp;return innovation.build();
                    <br />
                    &#125;
                  </motion.div>
                </motion.div>

                {/* Binary data rain effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <motion.div
                      key={`binary-${i}`}
                      className="absolute text-xs font-mono text-cyan-500/50"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: "-20px",
                      }}
                      animate={{
                        y: [0, 500],
                        opacity: [0, 0.7, 0],
                      }}
                      transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: Math.random() * 5,
                      }}
                    >
                      {Array.from({ length: Math.floor(Math.random() * 10) + 5 }).map((_, j) => (
                        <div key={j}>{Math.round(Math.random())}</div>
                      ))}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { value: "500+", label: "Hackers", icon: <Code /> },
            { value: "48", label: "Hours", icon: <Zap /> },
            { value: "50+", label: "Mentors", icon: <Braces /> },
            { value: "$50K", label: "in Prizes", icon: <Layers /> },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)" }}
              className="text-center p-6 rounded-lg bg-black/70 backdrop-blur-md border border-cyan-500/30 shadow-lg shadow-cyan-500/10 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 5px rgba(0, 255, 255, 0.3)",
                      "0 0 15px rgba(0, 255, 255, 0.5)",
                      "0 0 5px rgba(0, 255, 255, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: index * 0.5,
                  }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center"
                >
                  {stat.icon}
                </motion.div>
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

