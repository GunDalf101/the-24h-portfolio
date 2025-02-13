import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Parallax, useParallax } from "react-scroll-parallax";

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { scrollYProgress } = useScroll();

    const socialLinks = {
        GitHub: "https://github.com/GunDalf101",
        LinkedIn: "https://www.linkedin.com/in/mouad-bennani-a4302a208/",
        Twitter: "https://x.com/GunDalf382641",
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const starryNightParallax = useParallax({ speed: -10 });
    const runesParallax = useParallax({
        speed: -5,
        translateX: mousePosition.x,
        translateY: mousePosition.y,
    });
    const orbParallax = useParallax({
        speed: -2,
        translateX: mousePosition.x * 0.5,
        translateY: mousePosition.y * 0.5,
    });

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.8,
                ease: "easeOut"
            }
        })
    };

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-black via-black overflow-hidden pt-20 lg:pt-0">
            <div ref={starryNightParallax.ref} className="absolute inset-0">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={`cloud-${i}`}
                        className="absolute blur-xl bg-purple-500/20"
                        style={{
                            width: `${Math.random() * 300 + 200}px`,
                            height: `${Math.random() * 100 + 100}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            x: [0, 100, 0],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: Math.random() * 20 + 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}

                {[...Array(50)].map((_, i) => (
                    <motion.div
                        key={`star-${i}`}
                        className="absolute h-1 w-1 bg-white rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0.2, 1, 0.2],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                ))}
            </div>

            <div ref={runesParallax.ref} className="absolute inset-0 pointer-events-none">
                {['⚡', '✨', '🌟', '🌙', '⭐', '💫'].map((rune, index) => (
                    <motion.span
                        key={`rune-${index}`}
                        className="absolute text-4xl sm:text-5xl opacity-70"
                        style={{
                            left: `${(index * 20) % 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [-20, 20],
                            rotate: [0, 360],
                            opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                            duration: 8,
                            delay: index * 0.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    >
                        {rune}
                    </motion.span>
                ))}

                <svg className="absolute inset-0 w-full h-full">
                    {[...Array(3)].map((_, i) => (
                        <motion.path
                            key={`constellation-${i}`}
                            d={`M${Math.random() * 100},${Math.random() * 100} L${Math.random() * 100},${Math.random() * 100}`}
                            stroke="rgba(255, 255, 255, 0.2)"
                            strokeWidth="0.5"
                            fill="none"
                            animate={{
                                opacity: [0.2, 0.5, 0.2],
                            }}
                            transition={{
                                duration: 3,
                                delay: i * 1,
                                repeat: Infinity,
                            }}
                        />
                    ))}
                </svg>
            </div>

            <div className="container mx-auto px-4 min-h-screen relative z-10">
                <div className="flex flex-col-reverse lg:flex-row min-h-screen items-center justify-center gap-8 lg:gap-16 py-12 lg:py-0">
                    <motion.div
                        className="w-full lg:w-1/2 text-white space-y-8 text-center lg:text-left relative"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy" />

                        <div className="relative space-y-6 p-8 bg-black/30 rounded-lg backdrop-blur-sm border border-purple-500/30">
                            <motion.div
                                className="space-y-4"
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                custom={0}
                            >
                                <motion.div
                                    className="inline-block"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <h2 className="text-base sm:text-lg text-purple-400 font-medievalsharp tracking-widest">
                                        WELCOME TO MY REALM
                                    </h2>
                                </motion.div>

                                <motion.div
                                    className="relative inline-block"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-medievalsharp bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 pb-2">
                                        Mouad Bennani
                                    </h1>
                                    <motion.div
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ delay: 0.5, duration: 0.8 }}
                                    />
                                </motion.div>

                                <motion.h3
                                    className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-medievalsharp"
                                    variants={textVariants}
                                    custom={1}
                                >
                                    <span className="text-purple-400">Digital Sorcerer</span> &
                                    <span className="text-blue-400"> Code Artisan</span>
                                </motion.h3>
                            </motion.div>

                            <motion.p
                                className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                                variants={textVariants}
                                custom={2}
                            >
                                Wielding the arcane arts of coding, the enigmatic powers of system wizardry, and the boundless skills of a true jack-of-all-trades, I conjure digital solutions that defy limitations and bring ideas to life.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                                variants={textVariants}
                                custom={3}
                            >
                                <motion.button
                                    whileHover={{
                                        scale: 1.05,
                                        textShadow: "0 0 8px rgb(255,255,255)",
                                        boxShadow: "0 0 15px rgb(124,58,237)",
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg overflow-hidden"
                                    onClick={() => {
                                        const link = document.createElement("a");
                                        link.href = "/mouad_bennani_resume.pdf";
                                        link.download = "mouad_bennani_resume.pdf";
                                        document.body.appendChild(link);
                                        link.click();
                                        document.body.removeChild(link);
                                    }}
                                >
                                    <div className="absolute inset-0 bg-white/30 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                                    <span className="relative text-white font-medievalsharp text-lg">
                                        View My Spellbook
                                    </span>
                                </motion.button>


                                <motion.button
                                    whileHover={{
                                        scale: 1.05,
                                        textShadow: "0 0 8px rgb(255,255,255)",
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative px-8 py-4 border-2 border-purple-500 rounded-lg overflow-hidden"
                                    onClick={() => {
                                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                >
                                    <div className="absolute inset-0 bg-purple-600/30 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                                    <span className="relative text-white font-medievalsharp text-lg">
                                        Contact Portal
                                    </span>
                                </motion.button>

                            </motion.div>

                            <motion.div
                                className="flex justify-center lg:justify-start space-x-6"
                                variants={textVariants}
                                custom={4}
                            >
                                {['GitHub', 'LinkedIn', 'Twitter'].map((platform) => (
                                    <motion.a
                                        key={platform}
                                        href={socialLinks[platform]}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className="font-medievalsharp">{platform}</span>
                                    </motion.a>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                    <div ref={orbParallax.ref} className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[600px] relative">
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            animate={{
                                y: [-10, 10],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut",
                            }}
                        >
                            <motion.div
                                className="relative w-48 sm:w-64 h-48 sm:h-64"
                                animate={{
                                    rotate: [0, 360],
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 opacity-75 blur-xl animate-pulse" />
                                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-90 blur-md" />
                                <div className="absolute inset-8 rounded-full bg-white opacity-30" />

                                {[...Array(3)].map((_, i) => (
                                    <motion.div
                                        key={`ring-${i}`}
                                        className="absolute inset-0 rounded-full border-2 border-purple-400/30"
                                        style={{
                                            transform: `scale(${1.2 + i * 0.2})`,
                                        }}
                                        animate={{
                                            rotate: [0, 360],
                                            scale: [1.2 + i * 0.2, 1.3 + i * 0.2, 1.2 + i * 0.2],
                                        }}
                                        transition={{
                                            duration: 4 + i,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                    />
                                ))}

                                {[...Array(5)].map((_, i) => (
                                    <motion.div
                                        key={`orbit-${i}`}
                                        className="absolute w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-yellow-400"
                                        animate={{
                                            rotate: [0, 360],
                                        }}
                                        transition={{
                                            duration: 3,
                                            delay: i * 0.6,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                        style={{
                                            top: '50%',
                                            left: '50%',
                                            transform: `rotate(${i * 72}deg) translateX(100px)`,
                                        }}
                                    />
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;