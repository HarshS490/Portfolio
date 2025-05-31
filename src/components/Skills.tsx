"use client";
import React from "react";
import { motion } from "framer-motion";
import { portFolioConfig } from "@/lib/portfolio";
import CardWrapper from "./ui/CardWrapper";
import { Code2Icon, Cpu, Hammer, LayoutTemplate, Server } from "lucide-react";
import Taglist from "./Taglist";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ProfileCard } from "./ProfileCard";

const getDomainIcon = (domain: string) => {
  switch (domain.toLowerCase()) {
    case "frontend":
      return <LayoutTemplate className="text-pink-500" size={18} />;
    case "backend":
      return <Server className="text-green-400" size={18} />;
    case "tools":
      return <Hammer className="text-gray-400" size={18} />;
    case "programming languages":
      return <Code2Icon size={20} />;
    default:
      return <Cpu size={18} />;
  }
};

function Skills() {
  const config = portFolioConfig.skills;

  return (
    <section
      id="skills"
      className="py-24 w-full min-h-[100vh] relative"
      aria-labelledby="skills-title"
    >
      {/* decorative element */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <motion.div
          className="text-center mb-9"
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
          <p className="my-6 max-w-2xl text-gray-300">{config.descritpion}</p>
        </motion.div>

        <Tabs className="flex flex-col items-center " defaultValue="dev">
          <TabsList className="mb-8 bg-gray-800/40 backdrop-blur-sm border-gray-700/50 border shadow-lg box-content p-2">
            <TabsTrigger
              value="dev"
              className="text-gray-200 text-lg data-[state=active]:from-emerald-700 data-[state=active]:to-blue-600 data-[state=active]:bg-gradient-to-r transition-colors duration-500"
            >
              Development
            </TabsTrigger>
            <TabsTrigger
              value="cp"
              className=" text-gray-300 text-lg data-[state=active]:from-emerald-700 data-[state=active]:to-blue-600 data-[state=active]:bg-gradient-to-r transition-colors duration-500"
            >
              Competitive Programming
            </TabsTrigger>
          </TabsList>
          {/*Development Skill tag categories */}

          <TabsContent value="dev">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-auto">
              {config.techstack.map((tech, index) => {
                const styledDomain =
                  tech.domain.slice(0, 1).toUpperCase() + tech.domain.slice(1);
                const icon = getDomainIcon(styledDomain);
                console.log(tech);
                return (
                  <motion.div key={`${tech.domain}-${index}`}>
                    <CardWrapper>
                      <div className="p-4">
                        <h3 className="text-xl font-semibold flex items-center gap-2">
                          <span>{icon}</span>
                          {styledDomain}
                        </h3>

                        <div className="mt-2">
                          <Taglist techStack={tech.skills} />
                        </div>
                      </div>
                    </CardWrapper>
                  </motion.div>
                );
              })}
            </div>
          </TabsContent>

          {/* Competitive Programming */}
          <TabsContent value="cp">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center auto-cols-auto">
              {portFolioConfig.codingProfiles.map((profile, index) => (
                <ProfileCard
                  platformInfo={profile}
                  key={`${profile.platform}-${index}`}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default Skills;
