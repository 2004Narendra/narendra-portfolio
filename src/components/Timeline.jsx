import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaLaptopCode, FaBook } from 'react-icons/fa';
import SectionTitle from './ui/SectionTitle';

const Timeline = () => {
    const experiences = [
        {
            year: "Jul 2025 - Aug 2025",
            title: "Dynamic Route Optimization",
            description: "Developed real-time route optimization system using C++, Dijkstra's algorithm, and STL.",
            icon: FaLaptopCode,
        },
        {
            year: "Aug 2023 - Present",
            title: "B.Tech CSE",
            description: "Lovely Professional University. CGPA: 6.32.",
            icon: FaGraduationCap,
        },
        {
            year: "2021 - 2023",
            title: "Intermediate",
            description: "Sri Chaitanya E.M College. Score: 87%.",
            icon: FaBook,
        },
        {
            year: "2020 - 2021",
            title: "Matriculation",
            description: "Oxford E.M High School. Score: 91%.",
            icon: FaBook,
        }
    ];

    return (
        <section id="education" className="py-20 bg-secondary/10">
            <div className="container mx-auto px-6">
                <SectionTitle title="Experience & Education" subtitle="My Journey" />

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <motion.div 
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        style={{ transformOrigin: "top" }}
                        className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-emerald/40 via-accent-emerald/10 to-transparent -translate-x-1/2"
                    ></motion.div>

                    {experiences.map((exp, index) => (
                        <div key={index} className={`relative flex items-center justify-between mb-12 md:mb-24 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Spacer for desktop layout */}
                            <div className="hidden md:block w-5/12"></div>

                            {/* Timeline Node */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 bg-dark border-4 border-accent-emerald rounded-full z-10 flex items-center justify-center text-accent-emerald shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                            >
                                <exp.icon size={14} />
                            </motion.div>

                            {/* Content Card */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.2 }}
                                className="ml-12 md:ml-0 w-full md:w-5/12 bg-secondary/30 backdrop-blur-md border border-white/5 p-6 rounded-xl relative hover:border-accent-emerald/30 transition-all duration-300"
                            >
                                <span className="text-accent-emerald font-mono text-xs mb-2 block">{exp.year}</span>
                                <h3 className="text-xl font-bold mb-3 text-white">{exp.title}</h3>
                                <p className="text-text-muted text-sm leading-relaxed">{exp.description}</p>

                                {/* Arrow */}
                                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-secondary/30 rotate-45 border-b border-l border-white/5 ${index % 2 === 0 ? '-right-2 border-r border-t border-b-0 border-l-0' : '-left-2'}`}></div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
