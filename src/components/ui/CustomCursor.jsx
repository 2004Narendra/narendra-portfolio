import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (target.tagName === 'BUTTON' || target.closest('button') || target.tagName === 'A' || target.closest('a')) {
                setCursorVariant("hover");
            } else if (target.tagName === 'P' || target.tagName === 'H1' || target.tagName === 'H2' || target.tagName === 'H3' || target.tagName === 'SPAN') {
                setCursorVariant("text");
            } else {
                setCursorVariant("default");
            }
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 1,
            borderColor: '#22D3EE',
            backgroundColor: 'transparent',
            mixBlendMode: 'normal'
        },
        hover: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 1.8,
            borderColor: '#8B5CF6',
            backgroundColor: 'rgba(139, 92, 246, 0.1)',
            mixBlendMode: 'difference'
        },
        text: {
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
            scale: 1.2,
            borderColor: '#E6EDF3',
            backgroundColor: 'transparent',
            borderWidth: '1px',
            borderStyle: 'dashed'
        }
    };

    const dotVariants = {
        default: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            scale: 1,
            backgroundColor: '#22D3EE'
        },
        hover: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            scale: 0.5,
            backgroundColor: '#8B5CF6'
        },
        text: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            scale: 0.8,
            backgroundColor: '#E6EDF3'
        }
    };

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border rounded-full pointer-events-none z-[100] hidden md:block"
                animate={cursorVariant}
                variants={variants}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[100] hidden md:block"
                animate={cursorVariant}
                variants={dotVariants}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                }}
            />
        </>
    );
};

export default CustomCursor;
