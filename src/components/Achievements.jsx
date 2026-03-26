import { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { FaCode, FaRocket, FaGithub, FaGraduationCap } from 'react-icons/fa';
import SectionTitle from './ui/SectionTitle';

const Counter = ({ value, duration = 2.5 }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => {
        // Handle values like "800+", "1.2k+", "2027"
        const numericPart = latest.toFixed(value.includes('.') ? 1 : 0);
        return value.replace(/[0-9.]+/, numericPart);
    });
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, amount: 0.5 });

    useEffect(() => {
        if (inView) {
            const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
            const animation = animate(count, numericValue, { duration });
            return animation.stop;
        } else {
            count.set(0); // Reset for re-animation
        }
    }, [inView, value, duration, count]);

    return (
        <motion.div
            animate={inView ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 0.4, delay: duration }}
            className="inline-block"
        >
            <motion.span ref={ref}>{rounded}</motion.span>
        </motion.div>
    );
};

const Achievements = () => {
    const achievements = [
        {
            label: "Problems Solved",
            value: "100+",
            description: "Across LeetCode and GFG",
            icon: FaCode,
            isCounter: true
        },
        {
            label: "NSS Volunteer",
            value: "Active",
            description: "Community service & campus initiatives (Aug 2023 - Present)",
            icon: FaGraduationCap,
            isCounter: false
        },
        {
            label: "AI/ML Models",
            value: "10+",
            description: "System-level applications & models",
            icon: FaRocket,
            isCounter: true
        },
        {
            label: "GitHub Commits",
            value: "1.5k+",
            description: "Active contributions on GitHub",
            icon: FaGithub,
            isCounter: true
        }
    ];

    return (
        <section id="achievements" className="py-20 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent-emerald/5 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle title="Extracurriculars & Achievements" subtitle="Milestones" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            // removed fade-in animation props
                            whileHover={{ 
                                y: -12, 
                                scale: 1.05,
                                rotateZ: 1,
                                transition: { type: "spring", stiffness: 400, damping: 10 }
                            }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="relative bg-secondary/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 text-center group hover:bg-secondary/50 transition-all duration-300 hover:border-accent-emerald/30 h-full border-b-2 border-b-transparent hover:border-b-accent-emerald shadow-lg overflow-hidden"
                        >
                            {/* Background Glow Pulse */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-accent-emerald/5 rounded-full blur-3xl group-hover:bg-accent-emerald/10 transition-colors duration-500"></div>
                            <div className="mb-4 flex justify-center">
                                <div className="w-14 h-14 bg-dark/60 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-accent-emerald/40 transition-colors shadow-black/50 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <item.icon className="text-2xl text-accent-emerald group-hover:scale-110 transition-transform duration-300" />
                                </div>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-bold font-heading text-white mb-2 group-hover:text-accent-emerald transition-colors duration-300">
                                {item.isCounter ? <Counter value={item.value} duration={item.fast ? 1 : undefined} /> : item.value}
                            </h3>
                            <p className="text-lg font-medium text-accent-emerald mb-2">{item.label}</p>
                            <p className="text-sm text-text-muted">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
