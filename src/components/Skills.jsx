import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';
import { FaCode, FaLayerGroup, FaWrench, FaBrain } from 'react-icons/fa';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            icon: FaCode,
            skills: [
                { name: "Python", level: 95 },
                { name: "C", level: 90 },
                { name: "C++", level: 90 },
                { name: "SQL", level: 85 },
            ]
        },
        {
            title: "Libraries",
            icon: FaLayerGroup,
            skills: [
                { name: "PyTorch", level: 90 },
                { name: "Pandas", level: 95 },
                { name: "TensorFlow", level: 85 },
            ]
        },
        {
            title: "Tools & Systems",
            icon: FaWrench,
            skills: [
                { name: "MySQL", level: 90 },
                { name: "MongoDB", level: 85 },
                { name: "Git / GitHub", level: 90 },
            ]
        },
        {
            title: "Concepts & Soft Skills",
            icon: FaBrain,
            skills: [
                { name: "Machine Learning & NLP", level: 90 },
                { name: "DSA", level: 95 },
                { name: "Problem Solving", level: 95 },
                { name: "Teamwork & Adaptability", level: 90 },
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-secondary/10">
            <div className="container mx-auto px-6">
                <SectionTitle title="Skills" subtitle="Technical Expertise" />

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: catIndex * 0.1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            className="bg-secondary/40 backdrop-blur-md border border-white/5 p-8 rounded-xl hover:border-accent-emerald/40 transition-all duration-500 shadow-sm group hover:bg-secondary/60 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-accent-emerald/[0.02] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                            <h3 className="text-xl font-bold mb-6 text-white border-l-4 border-accent-emerald/60 pl-4 tracking-tight flex items-center gap-3">
                                {category.icon && <category.icon size={20} className="text-accent-emerald" />}
                                {category.title}
                            </h3>

                            <div className="space-y-4">
                                {category.skills.map((skill, index) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between mb-1.5">
                                            <span className="text-text-muted font-medium text-[13px]">{skill.name}</span>
                                            <span className="text-text-muted/50 text-[11px] font-mono">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-dark/80 rounded-full h-1.5 overflow-hidden border border-white/10 shadow-inner">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1.2, delay: 0.1, ease: "circOut" }}
                                                viewport={{ once: false }}
                                                className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full relative shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                                            >
                                                <div className="absolute inset-0 bg-white/20 opacity-40 blur-[1px]"></div>
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
