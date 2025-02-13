import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import "./AboutMe.css";

const BREAKPOINTS = {
    sm: 640,
    md: 768,
    lg: 1024,
};


const WIZARD_STATS = [
    {
        name: "Intelligence",
        value: 90,
        description: "The ability to unravel the most intricate puzzles and weave solutions from the threads of logic and insight. A mind that thrives in the labyrinth of complexity.",
        icon: "🧠"
    },
    {
        name: "Dexterity",
        value: 60,
        description: "A nimble mind and quick reflexes, capable of adapting to shifting challenges and crafting elegant solutions with precision and grace.",
        icon: "⚡"
    },
    {
        name: "Wisdom",
        value: 50,
        description: "A deep reservoir of experience and foresight, enabling sound judgement and the ability to see the bigger picture in every decision.",
        icon: "📚"
    },
    {
        name: "Charisma",
        value: 70,
        description: "The art of connection—building trust, inspiring collaboration, and uniting diverse voices to achieve a shared vision.",
        icon: "💫"
    },
    {
        name: "Mana",
        value: 94,
        description: "An endless wellspring of creative energy, fuelling innovation and the ability to approach challenges with fresh, imaginative perspectives.",
        icon: "✨"
    },
    {
        name: "Constitution",
        value: 85,
        description: "An unyielding spirit, standing firm in the face of adversity and maintaining focus and determination through even the most gruelling trials.",
        icon: "🛡️"
    },
    {
        name: "Luck",
        value: 9999999,
        description: "A mysterious force that bends the odds, revealing hidden opportunities and solutions when all seems lost.",
        icon: "🍀"
    }
];

const equipmentIcons = {
    mainhand: "🪶",
    offhand: "📓",
    helm: "🎓"
};

const CHARACTER_DETAILS = {
    name: "Mouad Bennani",
    specialAbilities: [
        {
            name: "Problem-Solving Vision",
            description: "A piercing gaze that cuts through confusion, revealing the heart of any challenge and the steps to overcome it.",
            cooldown: "1 hour"
        },
        {
            name: "Creative Spark",
            description: "A flash of brilliance that ignites new ideas and unconventional approaches to even the most stubborn problems.",
            cooldown: "30 minutes"
        },
        {
            name: "Resilience Aura",
            description: "A protective field of focus and endurance, allowing for sustained effort and clarity during prolonged challenges.",
            cooldown: "4 hours"
        }
    ],
    equipment: {
        mainhand: "Quill of Infinite Ideas (+10 creativity and problem-solving)",
        offhand: "Notebook of Endless Possibilities (+5 organisation and clarity)",
        helm: "1337 Scholar's Hood (+10 problem-solving, +5 continuous learning)"
    }
};

const useResponsive = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < BREAKPOINTS.md);
            setIsTablet(window.innerWidth >= BREAKPOINTS.md && window.innerWidth < BREAKPOINTS.lg);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { isMobile, isTablet };
};

const CharacterPortrait = () => {
    return (
        <motion.div
            className="relative w-48 h-48 mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-800/20"
                animate={{
                    boxShadow: [
                        "0 0 20px rgba(147,51,234,0.2)",
                        "0 0 40px rgba(147,51,234,0.4)",
                        "0 0 20px rgba(147,51,234,0.2)"
                    ]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="absolute inset-0 bg-[url('/wizard-silhouette.png')] bg-contain bg-center bg-no-repeat" />

            {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                    key={`portrait-particle-${i}`}
                    className="absolute w-2 h-2 rounded-full bg-purple-400"
                    style={{
                        left: `${50 + 35 * Math.cos(i * (Math.PI / 6))}%`,
                        top: `${50 + 35 * Math.sin(i * (Math.PI / 6))}%`
                    }}
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                        duration: 2,
                        delay: i * 0.2,
                        repeat: Infinity
                    }}
                />
            ))}
        </motion.div>
    );
};

const AnimatedIcon = ({ icon, name }) => {
    const [isHovered, setIsHovered] = useState(false);

    const iconAnimations = {
        "Quill": {
            animate: {
                rotate: isHovered ? [0, -15, 0] : 0,
                transition: { duration: 1, repeat: isHovered ? Infinity : 0 }
            }
        },
        "Notebook": {
            animate: {
                scale: isHovered ? [1, 1.1, 1] : 1,
                transition: { duration: 0.5 }
            }
        },
        "Crown": {
            animate: {
                y: isHovered ? [0, -5, 0] : 0,
                transition: { duration: 1, repeat: isHovered ? Infinity : 0 }
            }
        }
    };

    return (
        <motion.span
            className="inline-block"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            {...iconAnimations[name]}
        >
            {icon}
        </motion.span>
    );
};
const WizardTower = () => {
    const { scrollYProgress } = useScroll();
    const towerScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const towerOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.15]);

    return (
        <motion.div
            className="absolute inset-0 z-0"
            style={{ scale: towerScale, opacity: towerOpacity }}
        >
            <div className="absolute inset-0 bg-[url('tower-bg.png')] bg-center bg-no-repeat bg-contain opacity-20" />

            {Array.from({ length: 7 }).map((_, i) => (
                <motion.div
                    key={`window-${i}`}
                    className="absolute w-4 h-4 rounded-full blur-[8px]"
                    style={{
                        background: 'radial-gradient(circle, rgba(147,51,234,0.3) 0%, rgba(147,51,234,0) 70%)',
                        left: `${25 + (i % 3) * 25}%`,
                        top: `${20 + Math.floor(i / 3) * 20}%`,
                    }}
                    animate={{
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 2 + i * 0.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </motion.div>
    );
};

const SocialHub = () => {
    const [isOpen, setIsOpen] = useState(false);

    const socialLinks = [
        { name: 'GitHub', icon: '⚡', url: 'https://github.com/GunDalf101' },
        { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/mouad-bennani-a4302a208/' },
        { name: 'Twitter', icon: '🐦', url: 'https://x.com/GunDalf382641' }
    ];

    return (
        <motion.div
            className="lg:hidden fixed bottom-4 right-4 z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 bg-purple-900/90 rounded-full flex items-center justify-center
                   border border-purple-500 shadow-lg backdrop-blur-sm"
            >
                <span className="text-2xl">🔗</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="absolute bottom-16 right-0 bg-black/90 rounded-lg border border-purple-500
                       backdrop-blur-sm p-4 w-48"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                    >
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center gap-2 p-2 rounded-lg mb-2 last:mb-0
                                text-purple-400 hover:bg-purple-500/20 hover:text-purple-300"
                            >
                                <span>{link.icon}</span>
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};
const FloatingPages = () => {
    return (
        <div className="absolute inset-0 z-1 overflow-hidden">
            {Array.from({ length: 15 }).map((_, i) => (
                <motion.div
                    key={`page-${i}`}
                    className="absolute"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        rotate: Math.random() * 360,
                    }}
                    animate={{
                        y: [-100, window.innerHeight + 100],
                        x: (Math.random() - 0.5) * 200,
                        rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
                    }}
                    transition={{
                        duration: 15 + Math.random() * 10,
                        repeat: Infinity,
                        delay: i * -2,
                        ease: "linear",
                    }}
                >
                    <div className="w-16 h-20 relative bg-[rgba(147,51,234,0.05)] rounded-[2px] shadow-[0_0_10px_rgba(147,51,234,0.1)]">
                        {Array.from({ length: 5 }).map((_, j) => (
                            <div
                                key={j}
                                className="absolute h-[2px] bg-purple-500/10"
                                style={{
                                    width: `${Math.random() * 30 + 40}%`,
                                    top: `${20 + j * 20}%`,
                                    left: '10%',
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

const MagicalParticles = () => {
    return (
        <div className="absolute inset-0 z-2">
            {Array.from({ length: 30 }).map((_, i) => (
                <motion.div
                    key={`particle-${i}`}
                    className="absolute w-2 h-2 rounded-full blur-[1px]"
                    style={{
                        background: `rgba(147, 51, 234, ${Math.random() * 0.3 + 0.1})`,
                    }}
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                    }}
                    animate={{
                        y: [-20, -40, -20],
                        x: [-20, 20, -20],
                        scale: [1, 1.5, 1],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                    }}
                />
            ))}
        </div>
    );
};

const AboutMe = () => {
    const [activePage, setActivePage] = useState(0);
    const { isMobile } = useResponsive();

    const handlePageChange = (pageIndex) => {
        setActivePage(pageIndex);
    };
    return (
        <section className="relative min-h-screen bg-black py-20 overflow-hidden">
            <MistLayer />
            <WizardTower />
            <FloatingPages />
            <MagicalParticles />

            <div className="container mx-auto px-4 relative z-10">
                <motion.h2 className="text-4xl md:text-5xl font-medievalsharp text-center text-purple-300 mb-8 md:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    GunDalf's Tome
                </motion.h2>

                <div className="flex flex-col lg:flex-row gap-8">
                    <SpellbookPage isLeftPage isActive={!isMobile || activePage === 0}
                        onClick={() => setActivePage(0)}
                        className="w-full lg:w-1/2">
                        <div className="prose prose-lg prose-purple max-w-none">
                            <h3 className="text-3xl font-medievalsharp text-purple-300 mb-6 border-b-2 border-purple-900 pb-2">
                                The Journey Begins
                            </h3>
                            <CharacterPortrait />
                            <div className="font-medieval text-purple-300 leading-relaxed space-y-4">
                                <p>In Rabat, Morocco, Mouad Bennani embarked on a journey to master the digital arts. As a student at 1337 Coding School, he delved into applied mathematics and computer science, driven by a passion for exploring new technologies.</p>

                                <p>Mouad honed his skills in Full-Stack development, mastering languages like JavaScript, Python, and C++. He developed expertise across various domains, including data and databases, web technologies, reverse engineering, DevOps, showcasing his adaptability and commitment to continuous learning.</p>

                                <p>Now a developer, Mouad continues to push the boundaries of innovation. He actively seeks opportunities to collaborate, learn, and contribute to impactful projects that make a difference in the digital universe.</p>
                            </div>

                            <div className="mt-8">
                                <h4 className="font-medievalsharp text-purple-300 text-xl mb-4">
                                    Character Profile
                                </h4>
                                <div className="space-y-2">
                                    <p className="font-medieval text-purple-400">
                                        Name: {CHARACTER_DETAILS.name}
                                    </p>
                                    <p className="font-medieval text-purple-400">
                                        Class: Digital Wizard Apprentice
                                    </p>
                                </div>

                                <div className="mt-6">
                                    <h5 className="font-medievalsharp text-purple-300 text-lg mb-2">
                                        Equipment
                                    </h5>
                                    {Object.entries(CHARACTER_DETAILS.equipment).map(([slot, item]) => (
                                        <div key={slot} className="text-purple-400 flex items-center gap-2">
                                            <AnimatedIcon
                                                icon={equipmentIcons[slot]}
                                                name={slot === "mainhand" ? "Quill" : slot === "offhand" ? "Notebook" : "Crown"}
                                            />
                                            <span className="capitalize">{slot}</span>: {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </SpellbookPage>

                    <SpellbookPage isActive={!isMobile || activePage === 1}
                        onClick={() => setActivePage(1)}
                        className="w-full lg:w-1/2">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-medievalsharp text-purple-300 mb-6 border-b-2 border-purple-900 pb-2">
                                Abilities & Stats
                            </h3>

                            <div className="mb-8">
                                <h5 className="font-medievalsharp text-purple-300 text-lg mb-2">
                                    Special Abilities
                                </h5>
                                {CHARACTER_DETAILS.specialAbilities.map((ability, index) => (
                                    <div key={index} className="mb-2 text-purple-400">
                                        <span className="font-bold">{ability.name}</span>: {ability.description}
                                        <span className="text-sm italic"> (CD: {ability.cooldown})</span>
                                    </div>
                                ))}
                            </div>

                            <div className="grid gap-4">
                                {WIZARD_STATS.map((stat) => (
                                    <StatBar key={stat.name} stat={stat} />
                                ))}
                            </div>
                        </div>
                    </SpellbookPage>
                </div>
            </div>
            <SocialHub activePage={activePage} onPageChange={setActivePage} />
        </section>
    );
};

const SpellbookPage = ({ children, isLeftPage, isActive, onClick }) => {
    return (
        <motion.div
            className={`w-full lg:w-1/2 min-h-[600px] cursor-pointer transition-all duration-100
                       ${isActive ? 'scale-105 z-10' : 'scale-100 z-0 opacity-80'}`}
            initial={{ opacity: 0, x: isLeftPage ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: isActive ? 1.05 : 1.02 }}
            transition={{
                duration: 0.4,
                type: "spring",
                stiffness: 100,
                damping: 15
            }}
            onClick={onClick}
        >
            <div className={`relative h-full transition-transform duration-500
                           ${isActive ? 'transform-none' : isLeftPage ? '-rotate-2' : 'rotate-2'}`}>
                <div
                    className={`absolute inset-0 bg-gradient-to-b from-purple-900/5 to-purple-800/5 
                               mix-blend-overlay rounded-lg transition-all duration-500
                               ${isActive ? 'shadow-2xl' : 'shadow-xl'}`}
                />

                <div className={`relative h-full bg-gradient-to-b from-mystic-900/95 to-mystic-800/95 
                                p-8 rounded-lg border border-purple-800/30 backdrop-blur-sm
                                transition-all duration-500
                                ${isActive
                        ? 'shadow-[0_0_35px_rgba(147,51,234,0.25)]'
                        : 'shadow-[0_0_15px_rgba(147,51,234,0.15)]'}`}>

                    <motion.div
                        className="absolute -top-2 left-1/2 transform -translate-x-1/2"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-4 py-1 bg-purple-500/20 rounded-full backdrop-blur-sm">
                            <span className="text-purple-300 text-sm">
                                {isLeftPage ? "Character" : "Abilities"}
                            </span>
                        </div>
                    </motion.div>

                    {[0, 1, 2, 3].map((corner) => (
                        <div
                            key={`corner-${corner}`}
                            className={`absolute w-16 h-16 border-2 border-purple-500/30
                                      transition-all duration-500
                                      ${corner === 0 ? 'top-0 left-0 rounded-tl-lg border-t border-l' :
                                    corner === 1 ? 'top-0 right-0 rounded-tr-lg border-t border-r' :
                                        corner === 2 ? 'bottom-0 left-0 rounded-bl-lg border-b border-l' :
                                            'bottom-0 right-0 rounded-br-lg border-b border-r'}
                                      ${isActive ? 'border-purple-400/40' : ''}`}
                        >
                            <motion.div
                                className="absolute inset-0 bg-purple-500/10 rounded-lg"
                                animate={{
                                    opacity: isActive ? [0.1, 0.3, 0.1] : [0.05, 0.15, 0.05],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />
                        </div>
                    ))}

                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent 
                                  via-purple-500/5 to-transparent pointer-events-none"
                        animate={{
                            x: [-500, 500],
                            opacity: isActive ? [0.1, 0.3, 0.1] : [0.05, 0.15, 0.05],
                        }}
                        transition={{
                            duration: isActive ? 3 : 4,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />

                    <div className="relative z-10 h-full">
                        <div className="relative text-purple-200">
                            {children}
                        </div>
                    </div>

                    <div className={`absolute top-0 bottom-0 ${isLeftPage ? 'right-0' : 'left-0'} w-8 
                                   bg-gradient-to-${isLeftPage ? 'l' : 'r'} from-black/20 to-transparent 
                                   rounded-${isLeftPage ? 'r' : 'l'}-lg transition-opacity duration-500
                                   ${isActive ? 'opacity-100' : 'opacity-50'}`} />
                </div>
            </div>
        </motion.div>
    );
};


const MistLayer = () => {
    return (
        <motion.div
            className="absolute inset-0 z-1"
            style={{
                background: 'linear-gradient(to right, transparent, rgba(147,51,234,0.05), transparent)',
            }}
            animate={{
                x: [-100, 100, -100],
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
            }}
        />
    );
};

const StatBar = ({ stat }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="mb-6 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{stat.icon}</span>
                <h4 className="font-medievalsharp text-purple-300 text-lg">
                    {stat.name}
                </h4>
                <span className="ml-auto font-medieval text-purple-400">
                    {stat.value}/100
                </span>
            </div>
            <div className="h-3 bg-purple-900/30 rounded-full overflow-hidden relative">
                <motion.div
                    className="h-full"
                    style={{
                        background: 'linear-gradient(90deg, #9333EA, #C084FC)',
                        filter: isHovered ? 'brightness(1.2)' : 'none',
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.value}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    {isHovered && (
                        <motion.div
                            className="absolute top-0 right-0 w-4 h-full"
                            style={{
                                background: 'linear-gradient(90deg, transparent, white)',
                            }}
                            animate={{
                                x: [-20, 100],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                            }}
                        />
                    )}
                </motion.div>
            </div>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        className="absolute z-10 bg-black/90 p-4 rounded-lg border border-purple-500 mt-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                    >
                        <p className="text-purple-300 text-sm">{stat.description}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default AboutMe;