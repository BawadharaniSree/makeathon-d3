"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import {
  Environment,
  OrbitControls,
  Float,
  useAnimations,
  useGLTF,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  Sphere,
  Box,
  Stars,
} from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

// Robot character that works on a holographic interface
function RobotWorker(props) {
  const group = useRef()
  const { scene, animations } = useGLTF("/assets/3d/duck.glb")
  const { actions } = useAnimations(animations, group)

  // Create a simple robot since we're using the duck as a placeholder
  const robotRef = useRef()

  useFrame(({ clock }) => {
    if (robotRef.current) {
      // Simulate robot working movements
      robotRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2
      robotRef.current.position.y = Math.sin(clock.getElapsedTime() * 2) * 0.1 + 0.1
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Robot body - created from primitive shapes */}
      <group ref={robotRef} position={[0, 0, 0]} scale={0.5}>
        {/* Robot head */}
        <mesh position={[0, 1.5, 0]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />

          {/* Robot eyes */}
          <mesh position={[0.2, 0.1, 0.41]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={2} />
          </mesh>
          <mesh position={[-0.2, 0.1, 0.41]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={2} />
          </mesh>

          {/* Robot antenna */}
          <mesh position={[0, 0.5, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.3, 8]} />
            <meshStandardMaterial color="#666666" metalness={0.8} roughness={0.2} />
            <mesh position={[0, 0.2, 0]}>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial color="#ff00ff" emissive="#ff00ff" emissiveIntensity={1} />
            </mesh>
          </mesh>
        </mesh>

        {/* Robot body */}
        <mesh position={[0, 0.6, 0]}>
          <boxGeometry args={[1, 1.2, 0.6]} />
          <meshStandardMaterial color="#444444" metalness={0.8} roughness={0.3} />

          {/* Robot chest light */}
          <mesh position={[0, 0.2, 0.31]}>
            <circleGeometry args={[0.2, 16]} />
            <MeshWobbleMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={1} factor={0.2} speed={2} />
          </mesh>
        </mesh>

        {/* Robot arms */}
        {/* Left arm */}
        <group position={[-0.6, 0.7, 0]}>
          <mesh position={[-0.15, 0, 0]}>
            <cylinderGeometry args={[0.1, 0.1, 0.8, 8]} rotation={[0, 0, Math.PI / 2]} />
            <meshStandardMaterial color="#555555" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh position={[-0.5, 0, 0]}>
            <boxGeometry args={[0.3, 0.15, 0.15]} />
            <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>

        {/* Right arm - animated to work on holographic interface */}
        <group position={[0.6, 0.7, 0]}>
          <motion.mesh
            position={[0.15, 0, 0]}
            rotation={[0, 0, Math.PI / 2]}
            animate={{
              rotateZ: [Math.PI / 2, Math.PI / 2 + 0.3, Math.PI / 2],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <cylinderGeometry args={[0.1, 0.1, 0.8, 8]} />
            <meshStandardMaterial color="#555555" metalness={0.8} roughness={0.2} />
          </motion.mesh>
          <motion.mesh
            position={[0.5, 0, 0]}
            animate={{
              positionY: [0, 0.2, 0],
              positionZ: [0, 0.2, 0],
            }}
            transition={{
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <boxGeometry args={[0.3, 0.15, 0.15]} />
            <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
          </motion.mesh>
        </group>

        {/* Robot legs */}
        <mesh position={[-0.25, -0.3, 0]}>
          <boxGeometry args={[0.25, 0.8, 0.3]} />
          <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0.25, -0.3, 0]}>
          <boxGeometry args={[0.25, 0.8, 0.3]} />
          <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>

      {/* Holographic workstation the robot is interacting with */}
      <group position={[1.5, 0.8, 0]}>
        {/* Base platform */}
        <mesh position={[0, -0.1, 0]}>
          <cylinderGeometry args={[0.5, 0.6, 0.1, 16]} />
          <meshStandardMaterial color="#222222" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* Holographic projection */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Sphere args={[0.4, 16, 16]} position={[0, 0.5, 0]}>
            <MeshDistortMaterial color="#00ffff" attach="material" distort={0.3} speed={2} transparent opacity={0.6} />
          </Sphere>

          {/* Data elements floating around the hologram */}
          {Array.from({ length: 5 }).map((_, i) => (
            <group key={i} rotation={[0, ((Math.PI * 2) / 5) * i, 0]}>
              <Float
                speed={3}
                rotationIntensity={2}
                floatIntensity={1}
                position={[
                  Math.sin(((Math.PI * 2) / 5) * i) * 0.8,
                  0.5 + Math.cos(i * 0.5) * 0.3,
                  Math.cos(((Math.PI * 2) / 5) * i) * 0.8,
                ]}
              >
                <Box args={[0.1, 0.1, 0.1]}>
                  <MeshWobbleMaterial
                    color={i % 2 === 0 ? "#ff00ff" : "#00ffff"}
                    factor={0.4}
                    speed={2}
                    transparent
                    opacity={0.7}
                  />
                </Box>
              </Float>
            </group>
          ))}
        </Float>

        {/* Holographic data streams */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.mesh
            key={`stream-${i}`}
            position={[Math.sin(((Math.PI * 2) / 8) * i) * 0.3, 0.5, Math.cos(((Math.PI * 2) / 8) * i) * 0.3]}
            animate={{
              scaleY: [0.5, 1.5, 0.5],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: i * 0.2,
            }}
          >
            <boxGeometry args={[0.02, 0.5, 0.02]} />
            <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={2} transparent opacity={0.5} />
          </motion.mesh>
        ))}
      </group>
    </group>
  )
}

// Digital Grid Floor
function DigitalGrid() {
  return (
    <group position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <mesh>
        <planeGeometry args={[100, 100, 100, 100]} />
        <meshStandardMaterial color="#000000" wireframe emissive="#00ffff" emissiveIntensity={0.2} />
      </mesh>
    </group>
  )
}

// Glitchy text effect component
function GlitchyText({ text, className = "" }) {
  const [displayText, setDisplayText] = useState("")
  const [glitching, setGlitching] = useState(false)

  useEffect(() => {
    let currentText = ""
    let currentIndex = 0

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        currentText += text[currentIndex]
        setDisplayText(currentText)
        currentIndex++

        // Random glitch effect
        if (Math.random() > 0.7) {
          setGlitching(true)
          setTimeout(() => setGlitching(false), 100)
        }
      } else {
        clearInterval(interval)

        // Occasional glitch after completion
        const glitchInterval = setInterval(() => {
          setGlitching(true)
          setTimeout(() => setGlitching(false), 100)
        }, 3000)

        return () => clearInterval(glitchInterval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [text])

  return (
    <div className={`font-mono ${className} ${glitching ? "text-red-500" : ""}`}>
      {displayText}
      {glitching && (
        <span className="inline-block ml-1">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className="opacity-70">
              {String.fromCharCode(Math.floor(Math.random() * 26) + 97)}
            </span>
          ))}
        </span>
      )}
    </div>
  )
}

// Countdown timer component
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 12,
    minutes: 34,
    seconds: 56,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-4 gap-4 text-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col">
          <div className="text-4xl font-bold bg-black/80 backdrop-blur-sm p-3 rounded-lg border border-cyan-500/50 text-cyan-400 shadow-lg shadow-cyan-500/20">
            {value.toString().padStart(2, "0")}
          </div>
          <div className="text-xs uppercase mt-2 text-gray-300">{unit}</div>
        </div>
      ))}
    </div>
  )
}

// Floating particles background
function ParticlesBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-cyan-500/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * -1000],
            opacity: [0, 0.5, 0],
            scale: [0, Math.random() * 2 + 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced background with layered effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/30 via-black to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15)_0%,transparent_70%)]"></div>

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(to_right,#8884_1px,transparent_1px),linear-gradient(to_bottom,#8884_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Floating particles */}
      <ParticlesBackground />

      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#ff00ff" />
          <RobotWorker position={[-2, -2, 0]} />
          <DigitalGrid />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Environment preset="night" />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </div>

      {/* Content overlay with improved visibility */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6"
        >
          <div className="bg-black/70 backdrop-blur-md p-6 rounded-lg border border-cyan-500/50 shadow-lg shadow-cyan-500/20 max-w-3xl mx-auto">
            <GlitchyText text=">> INITIALIZING MAKE-A-THON 6.0" className="text-xl md:text-2xl text-cyan-400 mb-2" />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,255,255,0.5)]">
              MAKE-A-THON 6.0
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              The ultimate hackathon for the digital frontier
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-10"
        >
          <CountdownTimer />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-none px-8 py-6 text-lg shadow-lg shadow-cyan-500/20">
            Learn More
          </Button>
          <Button
            variant="outline"
            className="border-cyan-500 text-cyan-400 hover:bg-cyan-950 px-8 py-6 text-lg shadow-lg shadow-cyan-500/20"
          >
            View Schedule
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="h-8 w-8 text-cyan-400" />
        </motion.div>
      </div>

      {/* Enhanced animated floating circuits */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-2 border-cyan-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </section>
  )
}

