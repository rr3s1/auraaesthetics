"use client";

import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ElegantShapeProps {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: ElegantShapeProps) {
    const shapeRef = useRef<HTMLDivElement>(null);
    const innerShapeRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!shapeRef.current || !innerShapeRef.current) return;

        const ctx = gsap.context(() => {
            // Initial animation
            gsap.fromTo(shapeRef.current, 
                { opacity: 0, y: -150, rotate: rotate - 15 },
                {
                    opacity: 1,
                    y: 0,
                    rotate,
                    duration: 2.4,
                    delay,
                    ease: "power2.out", // Simplified ease, original was [0.23, 0.86, 0.39, 0.96]
                    onStart: () => {
                        // Ensure visibility for animation
                        if (shapeRef.current) shapeRef.current.style.visibility = 'visible';
                    }
                }
            );
            gsap.to(shapeRef.current, { opacity: 1, duration: 1.2, delay }); // Separate opacity for finer control if needed

            // Continuous floating animation
            gsap.to(innerShapeRef.current, {
                y: 15,
                duration: 6, // Halved duration for a similar feel to original 12s cycle (0-15-0)
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        });

        return () => ctx.revert();
    }, [delay, rotate]);

    return (
        <div ref={shapeRef} className={cn("absolute", className)} style={{ visibility: 'hidden' }}>
            <div
                ref={innerShapeRef}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </div>
        </div>
    );
}

interface HeroGeometricProps {
    badge?: string;
    title1?: string;
    title2?: string;
}

export function HeroGeometric({
    badge = "Design Collective",
    title1 = "Elevate Your Digital Vision",
    title2 = "Crafting Exceptional Websites",
}: HeroGeometricProps) {
    const heroRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const titleContainerRef = useRef<HTMLDivElement>(null);
    const paragraphRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!heroRef.current || !badgeRef.current || !titleContainerRef.current || !paragraphRef.current) return;

        const elementsToAnimate = [badgeRef.current, titleContainerRef.current, paragraphRef.current];
        
        const ctx = gsap.context(() => {
            gsap.from(elementsToAnimate, {
                opacity: 0,
                y: 30,
                duration: 1,
                stagger: 0.2,
                delay: 0.5, // Initial delay for the sequence
                ease: "power2.out", // Simplified ease
                onStart: () => {
                    elementsToAnimate.forEach(el => {
                        if(el) el.style.visibility = 'visible';
                    });
                }
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={heroRef} className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#030303]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-indigo-500/[0.15]"
                    className="left-[-10%] top-[15%] md:left-[-5%] md:top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-rose-500/[0.15]"
                    className="right-[-5%] top-[70%] md:right-0 md:top-3/4"
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-violet-500/[0.15]"
                    className="bottom-[5%] left-[5%] md:bottom-[10%] md:left-[10%]"
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-amber-500/[0.15]"
                    className="right-[15%] top-[10%] md:right-[20%] md:top-[15%]"
                />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-cyan-500/[0.15]"
                    className="left-[20%] top-[5%] md:left-1/4 md:top-[10%]"
                />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <div
                        ref={badgeRef}
                        style={{ visibility: 'hidden' }}
                        className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 md:mb-12"
                    >
                        <Circle className="size-2 fill-rose-500/80" />
                        <span className="text-sm tracking-wide text-white/60">
                            {badge}
                        </span>
                    </div>

                    <div ref={titleContainerRef} style={{ visibility: 'hidden' }}>
                        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl md:mb-8 md:text-8xl">
                            <span className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                                {title1}
                            </span>
                            <br />
                            <span
                                className={cn(
                                    "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 "
                                )}
                            >
                                {title2}
                            </span>
                        </h1>
                    </div>

                    <div ref={paragraphRef} style={{ visibility: 'hidden' }}>
                        <p className="mx-auto mb-8 max-w-xl px-4 text-base font-light leading-relaxed tracking-wide text-white/40 sm:text-lg md:text-xl">
                            Crafting exceptional digital experiences through
                            innovative design and cutting-edge technology.
                        </p>
                    </div>
                </div>
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80" />
        </div>
    );
}

export default HeroGeometric;
