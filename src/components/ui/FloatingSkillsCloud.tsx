'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface FloatingSkillsCloudProps {
    skills: { name: string; icon: string }[];
}

export function FloatingSkillsCloud({ skills }: FloatingSkillsCloudProps) {
    // Use client-side only rendering to avoid hydration mismatches with random values
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 [perspective:1000px]">
            {skills.map((skill: any, index: number) => {
                // Handle both string (legacy) and object formats to prevent runtime errors
                const isString = typeof skill === 'string';
                const name = isString ? skill : skill.name;
                const icon = isString ? '' : skill.icon;

                // Generate values based on index to ensure consistency
                const randomDuration = 3 + (index % 4);
                const randomDelay = index * 0.1;
                const randomY = 5 + (index % 4) * 2;

                return (
                    <motion.div
                        key={`${name}-${index}`}
                        className="relative group"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                        <motion.div
                            animate={{
                                y: [-randomY, randomY, -randomY],
                            }}
                            transition={{
                                duration: randomDuration,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: randomDelay,
                            }}
                            className="
                                p-2 sm:px-4 sm:py-2
                                rounded-xl
                                bg-muted/20
                                backdrop-blur-sm
                                border border-border/50
                                shadow-sm
                                hover:shadow-lg
                                hover:border-foreground/50
                                hover:bg-muted/40
                                transition-all duration-300
                                cursor-default
                                flex items-center gap-2
                            "
                        >
                            {icon && (
                                <div className="relative w-8 h-8 md:w-10 md:h-10">
                                    <Image
                                        src={icon}
                                        alt={name}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 32px, 40px"
                                    />
                                </div>
                            )}
                            <span className="hidden sm:inline-block text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                                {name}
                            </span>
                        </motion.div>
                    </motion.div>
                );
            })}
        </div>
    );
}
