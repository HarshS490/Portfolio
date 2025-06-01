"use client";
import React from "react";
import { motion } from "framer-motion";
import { portFolioConfig } from "@/lib/portfolio";
import CardWrapper from "./ui/CardWrapper";
import Image from "next/image";
import { ArrowUpRight, ExternalLinkIcon } from "lucide-react";
import { Button } from "./ui/Buttons";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";

function Projects() {
  const config = portFolioConfig.projects;
  const projects = config.projects;
  return (
    <section
      id="projects"
      className="py-24 w-full min-h-[100vh] relative"
      aria-labelledby="projects-title"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="projects-title"
            className="text-3xl md:text-4xl font-bold text-white"
          >
            {config.title}
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-4">
          {projects.map((project, index) => {
            return (
              <motion.div
                key={`${project.projectTitle}-${index}`}
                className="relative "
                initial="initial"
                whileInView={"inView"}
                whileHover={"hover"}
                variants={{
                  initial: {
                    opacity: 0,
                    y: 10,
                    x: 0,
                  },
                  inView: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <CardWrapper>
                  {/* subtle grid */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `radial-gradient(circle at center, rgba(74, 222, 128, 0.3) 0%, transparent 8%)`,
                      backgroundSize: "40px 40px",
                    }}
                  />
                  <div className="flex flex-col relative items-center">
                    {/* Image Container */}
                    <div className="relative w-full min-h-40 ">
                      <Image
                        src="https://picsum.photos/seed/picsum/200/300"
                        alt="placeholder"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Text Container */}
                    <div className="p-8 flex flex-col gap-4 w-full">
                      <div>
                        <span className="text-gray-300 mb-2 block">2022</span>
                        <h3 className="text-2xl font-bold ">
                          <Link
                            href={`/${project.projectTitle.toLowerCase()}`}
                            className="flex items-center gap-2"
                          >
                            <span className="  text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500">
                              {project.projectTitle}
                            </span>
                            <motion.span
                              variants={{
                                initial: { x: 0, y: 0 },
                                hover: { x: 3, y: -3 },
                              }}
                              transition={{ delay: 0.1, duration: 0.2 }}
                            >
                              <ArrowUpRight className="mr-1 text-blue-500" />
                            </motion.span>
                          </Link>
                        </h3>
                      </div>
                      <p className="text-gray-300">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quasi, recusandae. Animi laudantium quae natus
                        itaque, non,
                      </p>
                      {/* <div>
                        <Taglist techStack={project.techStack} minimal={true} show={4}/>
                      </div> */}

                      <div className="flex gap-2">
                        <Button
                          label="View Source"
                          icon={<FiGithub size={18} />}
                          iconPosition="left"
                          animateOnHover="true"
                          iconAnimationStyle="tilt"
                        />
                        <Button
                          label="Live Demo"
                          animateOnHover="true"
                          iconPosition="right"
                          icon={<ExternalLinkIcon size={18} />}
                          iconAnimationStyle="translate-tr"
                          gradient={true}
                        />
                      </div>
                    </div>
                  </div>
                </CardWrapper>
              </motion.div>
            );
          })}
        </div>

        <motion.span
          initial={{ x: 0, y: 0 }}
          whileHover={{ x: 0, y: -3 }}
          transition={{ delay: 0.1, duration: 0.15 }}
        >
          <Button
            label="View More Projects"
            icon={<FiGithub />}
            className="px-4 py-3 rounded-full shadow-lg hover:shadow-teal-700/40 my-16"
          ></Button>
        </motion.span>
      </div>
    </section>
  );
}

export default Projects;
