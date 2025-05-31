"use client";
import { portFolioConfig } from "@/lib/portfolio";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import BezierEasing from "bezier-easing";

function Navbar() {
  const easing = BezierEasing(0.77, 0, 0.175, 1);
  const config = portFolioConfig.navBar;
  const [activeSection, setActiveSection] = useState("home");

  const smoothScrollTo = (targetY:number, duration = 600) => {
    const startY = window.scrollY;
    const diffY = targetY - startY;
    let startTime: number | null = null;

    function step(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const t = Math.min(1, elapsed / duration);
      const easedT = easing(t);
      window.scrollTo(0, startY + diffY * easedT);
      if (t < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  };

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

    return ()=>observer.disconnect();
  }, [config.navLinks]);

  const handleClick = (e: React.MouseEvent<HTMLLIElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const offsetTop = target.offsetTop;
      smoothScrollTo(offsetTop, 800);
    }
  };

  const linkVariants = {
    initial:{
      opacity:0,
      y:-10,
    },
    animate:{
      opacity:1,
      y:0,
    }
  }

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
          {config.navLinks.map((section,index) => {
            const id = section.toLowerCase();
            return (
              <li key={section} className="list-none" onClick={(e)=>handleClick(e,id)}>
                <motion.a
                  href={`#${id}`}
                  className={clsx("px-3 py-1 cursor-pointer transition-colors duration-300", {
                    "text-emerald-500": activeSection === id,
                    "text-gray-300": activeSection !== id,
                  })}
                  initial={linkVariants.initial}
                  animate={linkVariants.animate}
                  transition={{
                    duration: 0.3,
                    delay: index*0.1,
                  }}
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
