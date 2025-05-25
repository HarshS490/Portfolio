"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

function GradientButton({ label, icon, onClick, className }: Props) {
  const variantClasses =
    "bg-gradient-to-r from-emerald-600 to-blue-600 shadow-emerald-600/20 hover:shadow-emerald-600/40";

  return (
    <button
      type="button"
      className={`py-3 px-4 ${variantClasses} flex items-center justify-center  rounded-full cursor-pointer hover:shadow-lg hover:shadow-teal-300/20 ${className}`}
      onClick={onClick}
    >
      <span className="flex items-center gap-2 items-center">
        {label}
        {icon && <span className="mr-2">{icon}</span>}
      </span>
    </button>
  );
}

function SecondaryButton({ label, icon, onClick, className = "" }: Props) {
  const baseClasses =
    "py-3 px-4 bg-gray-800 shadow-gray-600/20 hover:shadow-gray-600/40";
  const variantClasses = "border border-gray-600 hover:border-emerald-600";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} flex items-center justify-center rounded-full cursor-pointer ${className}`}
    >
      <span className="flex items-center gap-2">
        {label}
        {icon && (
          <motion.span
            className="inline-block"
            whileHover={{ x: 4 }}
            transition={{ delay: 0.15, duration: 0.25 }}
          >
            {icon}
          </motion.span>
        )}
      </span>
    </button>
  );
}

export { GradientButton, SecondaryButton };
