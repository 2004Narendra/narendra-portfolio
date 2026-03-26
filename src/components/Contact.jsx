import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaPhone } from 'react-icons/fa';
import SectionTitle from './ui/SectionTitle';
import Button from './ui/Button';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        window.location.href = `mailto:bethapudinarendra@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-dark to-secondary/20">
            <div className="container mx-auto px-6">
                <SectionTitle title="Contact Me" subtitle="Get In Touch" />

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold font-heading mb-6 text-white">Let's Work Together</h3>
                        <p className="text-text-muted mb-8 leading-relaxed">
                            I'm currently preparing for GATE 2026 but always open to discussing interesting projects, algorithms, or just connecting with fellow engineers.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: FaEnvelope, label: "Email", value: "bethapudinarendra@gmail.com", href: "mailto:bethapudinarendra@gmail.com" },
                                { icon: FaPhone, label: "Phone", value: "+91 9392789160", href: "tel:+919392789160" }
                            ].map((item, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-4 group"
                                >
                                    <motion.div 
                                        whileHover={{ y: -3, scale: 1.1 }}
                                        className="bg-secondary/60 p-3 rounded-lg text-accent-emerald border border-white/10 group-hover:border-accent-emerald transition-colors shadow-lg shadow-black/50"
                                    >
                                        <item.icon size={20} />
                                    </motion.div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">{item.label}</h4>
                                        {item.href ? (
                                            <a href={item.href} className="text-text-muted hover:text-accent-emerald transition-colors">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-text-muted">{item.value}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-secondary/20 backdrop-blur-sm border border-white/5 p-8 rounded-2xl"
                    >
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-emerald/50 focus:ring-1 focus:ring-accent-emerald/50 transition-all"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-emerald/50 focus:ring-1 focus:ring-accent-emerald/50 transition-all"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-emerald/50 focus:ring-1 focus:ring-accent-emerald/50 transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                    required
                                ></textarea>
                            </div>

                            <Button 
                                variant="primary" 
                                className="w-full relative overflow-hidden group/btn" 
                                icon={FaPaperPlane}
                            >
                                <span className="relative z-10 transition-transform group-hover/btn:translate-x-1 duration-300">Send Message</span>
                                <div className="absolute inset-0 bg-white/10 translate-y-12 group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
