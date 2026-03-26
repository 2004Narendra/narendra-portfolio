import { useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCode } from 'react-icons/fa';
import SectionTitle from './ui/SectionTitle';
import Button from './ui/Button';

const ProjectCard = ({ project, index, onClick }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="group relative bg-secondary/40 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-accent-emerald/10 transition-all duration-300 flex flex-col h-full border-b-2 border-b-transparent hover:border-b-accent-emerald"
        >
            <div className="h-48 bg-secondary relative overflow-hidden shrink-0" style={{ transform: "translateZ(30px)" }}>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                <div className="absolute inset-0 bg-accent-emerald/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6 flex flex-col flex-grow" style={{ transform: "translateZ(20px)" }}>
                <span className="text-accent-emerald text-xs font-medium tracking-wider uppercase mb-2 block">{project.category}</span>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent-emerald transition-colors">{project.title}</h3>
                <p className="text-text-muted text-sm line-clamp-3 mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.slice(0, 3).map(t => (
                        <span key={t} className="text-xs bg-dark/50 border border-white/5 px-2 py-1 rounded-md text-text-muted">
                            {t}
                        </span>
                    ))}
                    {project.tech.length > 3 && (
                        <span className="text-xs bg-dark/50 border border-white/5 px-2 py-1 rounded-md text-text-muted">+{project.tech.length - 3}</span>
                    )}
                </div>
            </div>
            
            {/* Holographic Shine */}
            <motion.div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: useTransform(
                        mouseXSpring,
                        [-0.5, 0.5],
                        ["radial-gradient(circle at 0% 0%, rgba(16,185,129,0.05) 0%, transparent 50%)", "radial-gradient(circle at 100% 100%, rgba(16,185,129,0.05) 0%, transparent 50%)"]
                    )
                }}
            />
        </motion.div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Credit Card Fraud Detection",
            category: "Machine Learning",
            image: "/projects/fraud_detection.png",
            description: "Machine learning model to detect fraudulent transactions by handling data preprocessing and imbalance.",
            details: "Duration: Oct 2025 – Nov 2025. Applied feature engineering techniques and evaluated using precision, recall, F1-score, and ROC-AUC. Tuned hyperparameters for performance output.",
            tech: ["Python", "NumPy", "Pandas", "TensorFlow", "PyTorch", "SQL"],
            links: { github: "https://github.com/2004Narendra", live: null }
        },
        {
            id: 2,
            title: "Real-time Heart Rate Estimation",
            category: "Machine Learning",
            image: "/projects/heart_rate.png",
            description: "Estimated heart rate using physiological signals with a predictive ML model, achieving ~80% accuracy.",
            details: "Duration: Mar 2024 – Apr 2024. Performed noise reduction and feature extraction (PPG peaks) to build the robust predictive model. Highlight: Achieved ~80% accuracy.",
            tech: ["Python", "NumPy", "Pandas"],
            links: { github: "https://github.com/2004Narendra", live: null }
        }
    ];

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <SectionTitle title="Featured Projects" subtitle="What I've Built" />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={project.id} 
                            project={project} 
                            index={index} 
                            onClick={() => setSelectedProject(project)} 
                        />
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-dark/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-secondary border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 text-text-muted hover:text-white bg-dark/50 rounded-full p-2 z-10"
                            >
                                <FaTimes />
                            </button>

                            <div className="h-64 md:h-80 relative overflow-hidden">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent"></div>
                            </div>

                            <div className="p-8">
                                <span className="text-accent-emerald font-medium tracking-wider uppercase text-sm mb-2 block">{selectedProject.category}</span>
                                <h3 className="text-3xl font-bold font-heading mb-4">{selectedProject.title}</h3>

                                <p className="text-text-muted leading-relaxed mb-6 text-lg">{selectedProject.details}</p>

                                <div className="mb-8">
                                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map(t => (
                                            <span key={t} className="text-sm bg-dark border border-white/10 px-3 py-1.5 rounded-lg text-text">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    {selectedProject.links.github && (
                                        <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                                            <Button variant="secondary" className="w-full" icon={FaGithub}>GitHub Repo</Button>
                                        </a>
                                    )}
                                    {selectedProject.links.live && (
                                        <a href={selectedProject.links.live} target="_blank" rel="noopener noreferrer" className="flex-1">
                                            <Button variant="primary" className="w-full" icon={FaExternalLinkAlt}>Live Demo</Button>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
