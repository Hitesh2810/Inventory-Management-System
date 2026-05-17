"use client";

import { cloneElement, isValidElement } from "react";
import { cn } from "@/utils/cn";

export function Button({ className, variant = "primary", size = "md", asChild = false, children, ...props }) {
  const variants = {
    primary: "bg-cyan-400 text-black shadow-glow hover:bg-cyan-300",
    secondary: "glass text-white hover:border-cyan-300/50",
    ghost: "text-white/78 hover:bg-white/10 hover:text-white",
    danger: "bg-rose-500 text-white hover:bg-rose-400"
  };
  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-5 text-sm",
    lg: "h-12 px-6 text-base"
  };

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition duration-300 disabled:cursor-not-allowed disabled:opacity-50",
    variants[variant],
    sizes[size],
    className
  );

  if (asChild && isValidElement(children)) {
    return cloneElement(children, { className: cn(children.props.className, classes), ...props });
  }

  return <button className={classes} {...props}>{children}</button>;
}
