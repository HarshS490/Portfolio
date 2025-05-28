"use client";
import { portFolioConfig } from "@/lib/portfolio";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

function Navbar() {
  const config = portFolioConfig.navBar;
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (enteries) => {
        enteries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.7 }
    );

    config.navLinks.forEach((section) => {
      const id = section.toLowerCase();
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  });

  return (
    <nav
      id="navbar"
      className="p-5 fixed top-0 w-full bg-gray-800/30  backdrop-blur-md border-b border-gray-700/30 z-50"
    >
      <div className="mx-auto max-w-7xl flex justify-between px-2 sm:px-3 md:px-4 lg:px-6">
        <span id="logo" className="block text-gray-300">
          Logo
        </span>
        <ul className="flex flex-nowrap gap-2.5">
          {config.navLinks.map((section) => {
            const id = section.toLowerCase();
            return (
              <li key={section} className="list-none">
                <motion.a
                  href={`#${id}`}
                  className={clsx("px-3 py-1 cursor-pointer", {
                    "text-emerald-500": activeSection === id,
                    "text-gray-300": activeSection !== id,
                  })}
                >
                  {section.toUpperCase().slice(0, 1) + id.slice(1)}
                </motion.a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
