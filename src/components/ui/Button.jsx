import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const Button = ({
    children,
    variant = 'primary',
    className,
    icon: Icon,
    ...props
}) => {
    const variants = {
        primary: "bg-gradient-to-r from-accent-cyan to-accent-violet text-white shadow-lg shadow-accent-cyan/20 hover:shadow-accent-cyan/40",
        secondary: "bg-secondary text-white hover:bg-secondary/80 border border-white/5",
        outline: "bg-transparent border border-accent-cyan/50 text-accent-cyan hover:bg-accent-cyan/10"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2",
                variants[variant],
                className
            )}
            {...props}
        >
            {Icon && <Icon className="w-5 h-5" />}
            {children}
        </motion.button>
    );
};

export default Button;
