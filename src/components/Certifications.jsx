import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaExternalLinkAlt, FaCode, FaRobot, FaNetworkWired, FaShieldAlt, FaHdd } from 'react-icons/fa';
import SectionTitle from './ui/SectionTitle';

// Import Images
import problemSolvingImg from '../assets/certificates/problem_solving.png';
import securityImg from '../assets/certificates/security.png';
import csTheoryImg from '../assets/certificates/cs_theory.png';
import automationImg from '../assets/certificates/automation.png';
import hardwareImg from '../assets/certificates/hardware.png';
import networkImg from '../assets/certificates/network.png';

const TiltCard = ({ cert, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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
        <motion.a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative group bg-secondary/40 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden hover:bg-secondary/50 transition-colors h-full flex flex-col shadow-2xl hover:shadow-accent-emerald/20"
        >
            {/* Image Header */}
            <div className="h-48 relative overflow-hidden bg-dark/60 p-4">
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent z-10"></div>
                <motion.img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-500"
                    style={{ transform: "translateZ(50px)" }}
                />
            </div>

            <div className="p-8 pt-6 flex flex-col flex-grow" style={{ transform: "translateZ(30px)" }}>
                <div className="mb-4 flex items-center justify-between">
                    <div className="w-10 h-10 bg-dark/60 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-accent-emerald/40 transition-colors">
                        <cert.icon className="text-xl text-accent-emerald group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="text-text-muted group-hover:text-accent-emerald transition-colors transform group-hover:translate-x-1 duration-300">
                        <FaExternalLinkAlt size={12} />
                    </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-accent-emerald transition-colors">{cert.title}</h3>
                <p className="text-text-muted text-xs mb-6 font-medium tracking-wide">{cert.issuer}</p>

                <div className="mt-auto flex items-center justify-between bg-dark/40 p-3 rounded-xl border border-white/5 group-hover:border-accent-emerald/20 transition-colors text-[10px]">
                    <span className="text-accent-emerald font-mono font-bold tracking-widest uppercase">{cert.date}</span>
                    <span className="text-text-muted/60 uppercase font-black tracking-widest group-hover:text-white/80 transition-colors">Verify Credentials</span>
                </div>
            </div>

            {/* Holographic Shine Effect */}
            <motion.div
                className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: useTransform(
                        mouseXSpring,
                        [-0.5, 0.5],
                        ["radial-gradient(circle at 0% 0%, rgba(16,185,129,0.1) 0%, transparent 50%)", "radial-gradient(circle at 100% 100%, rgba(16,185,129,0.1) 0%, transparent 50%)"]
                    )
                }}
            />
        </motion.a>
    );
};

const Certifications = () => {
    const certifications = [
        {
            title: "ICAT Participation Certification",
            issuer: "NSS / Community Event",
            date: "Nov 2025",
            link: "#",
            icon: FaNetworkWired,
            image: csTheoryImg
        },
        {
            title: "Cloud Computing",
            issuer: "NPTEL",
            date: "Nov 2025",
            link: "#",
            icon: FaNetworkWired,
            image: networkImg
        },
        {
            title: "Automation Anywhere Developer",
            issuer: "Automation Anywhere",
            date: "Oct 2025",
            link: "#",
            icon: FaRobot,
            image: automationImg
        },
        {
            title: "Introduction to Hardware and Operating Systems",
            issuer: "Coursera",
            date: "Sep 2024",
            link: "#",
            icon: FaHdd,
            image: hardwareImg
        },
        {
            title: "Applying Social Work Law",
            issuer: "Online Certification",
            date: "Jul 2024",
            link: "#",
            icon: FaShieldAlt,
            image: problemSolvingImg
        }
    ];

    return (
        <section id="certifications" className="py-20 relative overflow-hidden bg-dark">
            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle title="Certifications" subtitle="Credentials & Validations" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {certifications.map((cert, index) => (
                        <TiltCard key={index} cert={cert} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
