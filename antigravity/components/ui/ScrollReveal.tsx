"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    once?: boolean;
}

export function ScrollReveal({
    children,
    className,
    delay = 0,
    duration = 0.8,
    direction = "up",
    once = true,
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-10% 0px" });

    const directionOffsets = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
        none: { x: 0, y: 0 },
    };

    const variants: Variants = {
        hidden: {
            opacity: 0,
            ...directionOffsets[direction],
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98], // Custom cubic-bezier for smooth premium feel
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={cn("w-full", className)}
        >
            {children}
        </motion.div>
    );
}

// Optional Stagger Container for lists
interface StaggerContainerProps {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
    delayChildren?: number;
}

export function StaggerContainer({
    children,
    className,
    staggerDelay = 0.1,
    delayChildren = 0,
}: StaggerContainerProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    const variants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: delayChildren,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={cn("", className)}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({ children, className }: { children: React.ReactNode, className?: string }) {
    const variants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        },
    };

    return (
        <motion.div variants={variants} className={className}>
            {children}
        </motion.div>
    );
}
