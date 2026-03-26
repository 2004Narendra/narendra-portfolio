import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaFileDownload, FaArrowRight } from 'react-icons/fa';
import Button from './ui/Button';
import profileImage from '../../formal_image.jpeg';

const roles = [
    "Machine Learning Enthusiast",
    "Problem Solver",
    "DSA Practitioner"
];

const Hero = () => {
    const [text, setText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentRole.substring(0, text.length + 1));
                if (text.length === currentRole.length) {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                setText(currentRole.substring(0, text.length - 1));
                if (text === '') {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex]);

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-dark">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/40 via-dark to-dark opacity-40"></div>
                
                {/* Parallax Glows */}
                <motion.div 
                    animate={{ x: mousePos.x, y: mousePos.y }}
                    transition={{ type: "spring", damping: 30, stiffness: 200 }}
                    className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent-emerald/5 rounded-full blur-[120px]"
                ></motion.div>
                <motion.div 
                    animate={{ x: -mousePos.x, y: -mousePos.y }}
                    transition={{ type: "spring", damping: 30, stiffness: 200 }}
                    className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent-emerald/5 rounded-full blur-[120px]"
                ></motion.div>
            </div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-accent-cyan font-medium mb-4 tracking-wide"
                    >
                        Hi, my name is
                    </motion.p>

                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
                        Narendra <span className="text-gradient">Bethapudi</span>
                    </h1>

                    <div className="text-xl md:text-2xl text-text-muted mb-8 h-8 font-mono">
                        I am a <span className="text-white">{text}</span>
                        <span className="animate-pulse">|</span>
                    </div>

                    <p className="text-text-muted text-lg mb-10 max-w-lg leading-relaxed">
                        Passionate Computer Science student with expertise in Machine Learning, NLP, and Data Structures. I enjoy building intelligent systems that solve real-world problems.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link to="projects" smooth={true} duration={500}>
                            <Button variant="primary" icon={FaArrowRight}>
                                View Projects
                            </Button>
                        </Link>

                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" icon={FaFileDownload}>
                                Download Resume
                            </Button>
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:flex justify-center"
                >
                    {/* 
                      Profile Visual System 
                      - Orbital navigation rings with satellite trackers
                      - Multi-layer blend isolation to preserve facial colors
                    */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-64 h-64 md:w-[22rem] md:h-[22rem]"
                    >
                        {/* 
                          Atmospheric Glow (Isolated behind the subject)
                        */}
                        <div className="absolute inset-0 bg-accent-cyan/10 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>

                        {/* Orbitals with Satellite Particles */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-4 border border-accent-emerald/10 rounded-full border-dashed pointer-events-none"
                        >
                            <div className="absolute top-1/2 -left-1 w-2 h-2 bg-accent-emerald rounded-sm shadow-[0_0_12px_#10b981]"></div>
                        </motion.div>

                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-8 border border-white/5 rounded-full border-dashed pointer-events-none"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-accent-violet rounded-full shadow-[0_0_10px_#8b5cf6]"></div>
                            <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-1 h-1 bg-accent-emerald/40 rounded-full"></div>
                        </motion.div>

                        {/* 
                          Main Image Processing Module 
                          - Isolation prevents 'multiply' bleed from background glows onto the face
                        */}
                        <div
                            className="relative w-full h-full rounded-full p-2 border border-white/10 overflow-hidden bg-white shadow-2xl z-10"
                            style={{
                                mixBlendMode: 'multiply',
                                isolation: 'isolate'
                            }}
                        >
                            <img
                                src={profileImage}
                                alt="Narendra Bethapudi"
                                className="w-full h-full object-cover transition-transform duration-700"
                                style={{
                                    transform: 'scale(1.25)',
                                    objectPosition: 'center',
                                    filter: 'contrast(1.02) brightness(1.05)',
                                    // Soften the photo edge to prevent sharp cuts
                                    maskImage: 'radial-gradient(circle, black 85%, transparent 100%)',
                                    WebkitMaskImage: 'radial-gradient(circle, black 85%, transparent 100%)'
                                }}
                            />
                        </div>

                        {/* HUD Decoration Corners */}
                        <div className="absolute -top-1 -right-1 w-5 h-5 border-t border-r border-accent-cyan/40"></div>
                        <div className="absolute -bottom-1 -left-1 w-5 h-5 border-b border-l border-accent-cyan/40"></div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <Link to="about" smooth={true} duration={500} className="cursor-pointer flex flex-col items-center gap-2 text-text-muted hover:text-accent-cyan transition-colors">
                    <span className="text-xs tracking-widest uppercase">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-5 h-8 border-2 border-current rounded-full flex justify-center p-1"
                    >
                        <div className="w-1 h-2 bg-current rounded-full"></div>
                    </motion.div>
                </Link>
            </motion.div>
        </section >
    );
};

export default Hero;
