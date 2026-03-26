import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, className }) => {
    return (
        <div className={`mb-12 ${className}`}>
            <motion.p
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="text-accent-cyan font-medium mb-2 tracking-wider uppercase text-sm"
            >
                {subtitle}
            </motion.p>

            <motion.h2
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold font-heading"
            >
                {title}
                <span className="text-accent-cyan">.</span>
            </motion.h2>

            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '60px' }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-accent-cyan to-accent-violet mt-4 rounded-full"
            ></motion.div>
        </div>
    );
};

export default SectionTitle;
