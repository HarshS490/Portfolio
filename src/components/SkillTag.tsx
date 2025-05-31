import { techColorMap, techDisplayNameMap, techIconMap } from "@/lib/techstack";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  tech: string;
  className?: string;
  variant?: "solid" | "outline";
  size?: "icon" | "base";
};

function SkillTag({
  tech,
  className,
  variant = "solid",
  size = "base",
}: Props) {
  const techName = tech.toLowerCase();
  const styledTechName = techDisplayNameMap[techName];

  const iconLink = techIconMap[techName];

  const baseClass = clsx("flex items-center gap-2 p-2 mx-0.5 cursor-default");
  const variantClass = clsx(
    variant === "solid" &&
      `${techColorMap[techName].color} ${techColorMap[techName].bgColor} `,
    variant === "outline" && `border ${techColorMap[techName].borderColor} hover:shadow-md ${techColorMap[techName].shadowColor} text-gray-300 `
  );

  return (
    <motion.span
      className={`${baseClass} ${variantClass} ${className} `}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.25 }}
    >
      <Image src={iconLink} alt={`${tech}-icon`} width={18} height={18} />
      {size === "base" && (
        <span className="text-sm ">
          {styledTechName}
        </span>
      )}
    </motion.span>
  );
}

export default SkillTag;
