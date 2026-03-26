import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload, FaEye } from 'react-icons/fa';
import Button from './ui/Button';

const Resume = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 40,
                y: (e.clientY / window.innerHeight - 0.5) * 40
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="resume" className="py-20 bg-dark relative">
            <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -5, scale: 1.01, transition: { duration: 0.2 } }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-gradient-to-br from-secondary/80 to-dark border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group shadow-2xl hover:border-accent-emerald/20 transition-all duration-500"
                    >
                        {/* Decorative Glow with Parallax */}
                        <motion.div 
                            animate={{ x: mousePos.x, y: mousePos.y }}
                            transition={{ type: "spring", damping: 40, stiffness: 200 }}
                            className="absolute top-0 right-0 w-80 h-80 bg-accent-emerald/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-accent-emerald/20 transition-colors"
                        ></motion.div>

                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold font-heading mb-4 text-white">Check out my Resume</h2>
                        <p className="text-text-muted text-lg max-w-xl">
                            Grab a copy of my resume to learn more about my educational background, work experience, and technical skills in detail.
                        </p>
                    </div>

                    <div className="flex gap-4 relative z-10">
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                            <Button variant="primary" icon={FaFileDownload}>
                                Download PDF
                            </Button>
                        </a>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                            <Button variant="secondary" icon={FaEye}>
                                View Online
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Resume;
