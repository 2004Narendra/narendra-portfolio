import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa';
import { cn } from '../lib/utils';
import Button from './ui/Button';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [hoveredLink, setHoveredLink] = useState(null);
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        if (theme === 'light') {
            document.documentElement.classList.add('light-theme');
        } else {
            document.documentElement.classList.remove('light-theme');
        }
    }, [theme]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Education', to: 'education' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 flex justify-center pointer-events-none pt-4">
            <motion.div
                layout
                initial={false}
                animate={{
                    width: isScrolled ? 'auto' : '95%',
                    maxWidth: isScrolled ? '850px' : '1400px',
                    borderRadius: isScrolled ? '9999px' : '12px',
                    backgroundColor: isScrolled ? 'rgba(5, 10, 24, 0.85)' : 'rgba(5, 10, 24, 0.3)',
                    backdropFilter: isScrolled ? 'blur(20px)' : 'blur(8px)',
                    paddingLeft: isScrolled ? '3rem' : '3.5rem',
                    paddingRight: isScrolled ? '3rem' : '3.5rem',
                    scale: isScrolled ? 0.98 : 1,
                    y: isScrolled ? 12 : 0
                }}
                transition={{ type: "spring", stiffness: 150, damping: 20, mass: 1 }}
                className={cn(
                    "relative flex items-center h-16 pointer-events-auto border border-white/10 shadow-2xl shadow-accent-amber/5 overflow-hidden",
                    !isScrolled && "backdrop-blur-md"
                )}
            >
                <div className={cn(
                    "flex items-center w-full transition-all duration-500 gap-6 md:gap-12",
                    isScrolled ? "justify-center" : "justify-between"
                )}>
                    {/* Logo Section */}
                    <Link to="hero" smooth={true} duration={500} className="text-xl md:text-2xl font-bold cursor-pointer font-heading tracking-tight group flex items-center gap-1 shrink-0">
                        <motion.span layout whileHover={{ y: -2 }} className="text-white group-hover:text-accent-emerald transition-colors">Narendra</motion.span>
                        <span className="text-accent-emerald shadow-[0_0_15px_rgba(16,185,129,0.2)]">.dev</span>
                    </Link>

                    {/* Navigation Actions (Desktop) */}
                    <div className="hidden md:flex items-center gap-8">
                        {/* Links */}
                        <div className="flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={500}
                                    onMouseEnter={() => setHoveredLink(link.name)}
                                    onMouseLeave={() => setHoveredLink(null)}
                                    activeClass="!text-white"
                                    className="relative px-5 py-2 text-text-muted hover:text-accent-emerald cursor-pointer transition-all text-[13px] font-normal tracking-wide z-10 hover:-translate-y-0.5"
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    {(hoveredLink === link.name) && (
                                        <motion.div
                                            layoutId="nav-hover"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            className="absolute inset-0 bg-white/5 rounded-full z-0"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* Socials & Theme Toggle */}
                        <div className="flex items-center gap-4">
                            {!isScrolled && <div className="w-px h-6 bg-white/10 mx-2 hidden lg:block" />}
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                                    className="text-text-muted hover:text-accent-emerald transition-colors"
                                >
                                    {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
                                </button>
                                <motion.a
                                    whileHover={{ y: -2 }}
                                    href="https://github.com/2004Narendra"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-text-muted hover:text-white transition-colors"
                                >
                                    <FaGithub size={18} />
                                </motion.a>
                                <motion.a
                                    whileHover={{ y: -2 }}
                                    href="https://www.linkedin.com/in/narendra0805"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-text-muted hover:text-white transition-colors"
                                >
                                    <FaLinkedin size={18} />
                                </motion.a>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center group shrink-0"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className={cn(
                            "w-5 h-0.5 bg-text transition-all duration-300 ease-out",
                            isMobileMenuOpen ? "rotate-45 translate-y-0.5 bg-accent-cyan" : "-translate-y-1"
                        )}></span>
                        <span className={cn(
                            "w-5 h-0.5 bg-text transition-all duration-300 ease-out mt-1",
                            isMobileMenuOpen ? "-rotate-45 -translate-y-1 bg-accent-cyan" : "translate-y-0"
                        )}></span>
                    </button>
                </div>
            </motion.div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute top-24 left-6 right-6 md:hidden bg-dark/80 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden z-50 shadow-2xl"
                    >
                        <div className="flex flex-col items-center gap-4 py-8">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={link.to}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-lg font-medium text-text-muted hover:text-accent-cyan cursor-pointer transition-all"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
