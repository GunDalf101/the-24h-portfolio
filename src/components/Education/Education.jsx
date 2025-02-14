
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import "./Education.css"
import {
    DevOpsIcon,
    WebDevIcon,
    CyberSecurityIcon,
    SystemsIcon,
    MathIcon,
    DataStructuresIcon,
    PhysicsIcon,
    CIcon
  } from './SpellIcons';

const SCHOOLS = [
    {
        id: 1,
        name: "Moulay Youssef High",
        title: "The Apprentice's Journey",
        years: "2019 - 2020",
        fieldOfStudy: "High-Level Arcane Programming & Mathematical Runes",
        spellsMastered: [
            { name: "Applied Mathematics", icon: MathIcon },
            { name: "Physics", icon: PhysicsIcon },
        ]
    },
    {
        id: 2,
        name: "Faculty of Science Rabat",
        title: "The Arcane Academy",
        years: "2020 - 2022",
        fieldOfStudy: "Enchantment of Computational Magic",
        spellsMastered: [
            { name: "Applied Mathematics", icon: MathIcon },
            { name: "Physics", icon: PhysicsIcon },
            { name: "Basic Programming", icon: CIcon },
            { name: "Data Structures & Algorithms", icon: DataStructuresIcon }
        ]
    },
    {
        id: 3,
        name: "1337 Coding School (42 Network)",
        title: "The Grandmaster's Codex",
        years: "2022 - Present",
        fieldOfStudy: "Mastery in Algorithmic Sorcery & Software Engineering",
        spellsMastered: [
            { name: "Devops and Networking", icon: DevOpsIcon },
            { name: "Web Development", icon: WebDevIcon },
            { name: "Cybersecurity & CTFs", icon: CyberSecurityIcon },
            { name: "Systems Programming", icon: SystemsIcon },
            { name: "Data Structures & Algorithms", icon: DataStructuresIcon }
        ]
    },
];

const ScrollHandle = ({ position }) => (
    <div className={`absolute ${position} left-0 right-0 h-6 scroll-handle 
                    rounded-full transform -translate-y-1/2 shadow-lg`}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent 
                      via-yellow-500/10 to-transparent animate-pulse" />
    </div>
);

const MagicalScroll = ({ school, isExpanded, onToggle }) => {
    const controls = useAnimation();
    const floatControls = useAnimation();

    useEffect(() => {
        floatControls.start({
            y: [0, -10, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        });
    }, [floatControls]);

    const handleHover = async () => {
        await controls.start({
            scale: 1.02,
            transition: { duration: 0.3 }
        });
    };

    return (
        <motion.div
            className="relative w-full md:w-[calc(33.333%-2rem)] mb-8"
            animate={floatControls}
        >
            <motion.div
                className={`relative scroll-parchment magical-glow
                           ${isExpanded ? 'h-auto' : 'h-[300px]'}
                           rounded-lg overflow-hidden`}
                style={{ cursor: "url('/gundalf-cursor.png'), pointer" }}
                whileHover={{ scale: isExpanded ? 1 : 1.05 }}
                onClick={() => !isExpanded && onToggle(school.id)}
                onHoverStart={handleHover}
                initial={{ opacity: 0, y: 50 }}
                animate={{ 
                    opacity: 1, 
                    y: 0,
                    height: isExpanded ? 'auto' : '300px'
                }}
                transition={{ duration: 0.5 }}
            >
                <ScrollHandle position="top-0" />
                <ScrollHandle position="bottom-0" />

                <div className="relative z-10 p-8 bg-gradient-to-b 
                               from-purple-900/90 to-purple-800/90
                               backdrop-blur-sm">
                    <div className="absolute inset-0 border-2 border-purple-500/30 
                                  rounded-lg pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-r 
                                      from-transparent via-purple-500/10 to-transparent 
                                      animate-shine" />
                    </div>

                    <RuneBackground isActive={isExpanded} />

                    <div className="relative z-20">
                        <motion.h4 
                            className="text-2xl font-medievalsharp text-purple-300 mb-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            {school.title}
                        </motion.h4>
                        
                        <motion.p 
                            className="text-purple-400 mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {school.name}
                        </motion.p>

                        <AnimatePresence>
                            {isExpanded && (
                                <ScrollContent school={school} />
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const RuneBackground = ({ isActive }) => (
    <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
                key={i}
                className="absolute rune-inscription"
                style={{
                    width: Math.random() * 30 + 20,
                    height: Math.random() * 30 + 20,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                }}
                animate={{
                    opacity: isActive ? [0.3, 0.7, 0.3] : [0.1, 0.3, 0.1],
                    scale: isActive ? [1, 1.2, 1] : [1, 1.1, 1],
                }}
                transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            />
        ))}
    </div>
);

const ScrollContent = ({ school }) => (
    <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
    >
        <div className="p-4 bg-purple-900/30 rounded-lg border border-purple-500/30">
            <p className="text-purple-300">{school.fieldOfStudy}</p>
            <p className="text-purple-400 mt-2">{school.years}</p>
        </div>

        <div className="space-y-4">
            <h5 className="text-lg font-medievalsharp text-purple-300">
                Spells Mastered
            </h5>
            {school.spellsMastered.map((spell, index) => (
                <motion.div
                    key={index}
                    className="flex items-center gap-3 p-2 bg-purple-900/20 
                               rounded-lg border border-purple-500/20"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <motion.div 
                        className="text-purple-300 w-6 h-6"
                        animate={{ 
                            rotate: [0, 360],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    >
                        <spell.icon />
                    </motion.div>
                    <span className="text-purple-300">{spell.name}</span>
                </motion.div>
            ))}
        </div>
    </motion.div>
);

const WizardTrainingGrounds = () => {
    const [expandedId, setExpandedId] = useState(null);

    const handleToggle = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section className="relative min-h-screen bg-black py-20 overflow-hidden">
            <MagicalBackground />
            
            <div className="container mx-auto px-4 relative z-10">
                <motion.h2 
                    className="text-4xl md:text-5xl font-medievalsharp text-center 
                               text-purple-300 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    GunDalf's Apprenticeship
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-8">
                    {SCHOOLS.map((school) => (
                        <MagicalScroll
                            key={school.id}
                            school={school}
                            isExpanded={expandedId === school.id}
                            onToggle={handleToggle}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const MagicalBackground = () => (
    <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b 
                       from-purple-900/5 to-purple-800/5" />
        {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
                key={i}
                className="absolute w-1 h-1 bg-purple-500/30 rounded-full"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                }}
                animate={{
                    y: [0, -10, 0],
                    opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                }}
            />
        ))}
    </div>
);

export default WizardTrainingGrounds;