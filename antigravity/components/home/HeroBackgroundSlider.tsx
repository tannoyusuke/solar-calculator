"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const IMAGES = [
    "/images/hero_global_dawn.png",
    "/images/hero_regional.png",
    "/images/hero_technology.png",
];

export function HeroBackgroundSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
        }, 6000); // Cross-fade every 6 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {IMAGES.map((src, index) => (
                <Image
                    key={src}
                    src={src}
                    alt={`Hero Background ${index + 1}`}
                    fill
                    sizes="100vw"
                    quality={100}
                    priority={index === 0}
                    className={`object-cover object-center transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-90 z-[-1]" : "opacity-0 z-[-2]"
                        }`}
                />
            ))}
        </>
    );
}
