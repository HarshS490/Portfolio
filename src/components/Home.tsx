"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, CloudDownload } from "lucide-react";
import {GradientButton, SecondaryButton} from "./ui/Buttons";


function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const config = {
    name: "Harsh Singh",
    description:
      "I am a passionate software engineer with a focus on building innovative solutions.",
    scrollIndicatorText: "Scroll to explore",
    greeting: "Hi, I'm ",
    resumeLink: "https://example.com/resume.pdf",
    connectLink: "#connect",
  };

  return (
    <section
      id="hero" 
      className="w-full min-h-[90vh] flex flex-col justify-center relative"
      
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient background with mesh pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 " />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(74, 222, 128, 0.1) 0%, transparent 8%)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/3 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl opacity-40"
          animate={{
            x: [0, 10, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl opacity-40"
          animate={{
            x: [0, -10, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex items-center h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center w-full">
          {/* Main content area */}
          <motion.div
            className="lg:col-span-7 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main heading */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-tight"
              variants={itemVariants}
            >
              <span className="text-white">{config.greeting} </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                {config.name}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8"
            >
              {config.description}
            </motion.p>

            {/* Action buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6"
            >              
              <GradientButton icon={<CloudDownload/>} label={"Download Resume"} />
              <SecondaryButton icon={<ArrowRight />} label={"Connect with Me"} />
            </motion.div>
          </motion.div>
          
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-gray-400 text-sm mb-2">
          {config.scrollIndicatorText}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="text-emerald-400" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HomePage;
