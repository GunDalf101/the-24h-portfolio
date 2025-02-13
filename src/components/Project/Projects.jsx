import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Parallax, useParallax } from "react-scroll-parallax";



const Projects = () => {

    const [selectedProject, setSelectedProject] = useState(null);

    const PROJECTS = [
        {
            id: 1,
            title: "The Arcane Codex: My Portfolio",
            type: "Hero's Journey",
            skills: ["React", "Three.js", "Tailwind", "Framer Motion"],
            description: "A mystical, RPG-inspired digital grimoire that showcases my legendary quests and arcane studies. This interactive portfolio features immersive animations, 3D elements, and an enchanting design that brings my projects to life.",
            image: "/projects/portfolio.jpg",
            difficulty: "Heroic",
            completion: "80%",
            demoLink: "https://www.gundalfs-lair.tech/",
            githubLink: "https://github.com/GunDalf101/the-24h-portfolio",
        },
        {
            id: 2,
            title: "Trandadan: The Digital Odyssey",
            type: "Arcane Study",
            skills: ["React", "Django", "DRF", "Postgres", "Three.js", "Docker", "Websockets"],
            description: "This project involved crafting a full-fledged website with advanced features like JWT and OAuth2 authentication, a vibrant chat, and user management. I developed a ranking system, a data dashboard, and integrated games like 3D Pong, showcasing the power of modern web technologies.",
            image: "/projects/trandadan.jpg",
            difficulty: "Mythic",
            completion: "100%",
            demoLink: "#",
            githubLink: "https://github.com/GunDalf101/PERFECT_TranDaDan.git",
        },
        {
            id: 3,
            title: "Inception: The Virtual Realm",
            type: "Arcane Study",
            skills: ["Docker", "System Administration", "NGINX", "WordPress", "Mariadb"],
            description: "In this project, I crafted a virtual infrastructure using Docker, creating a symphony of containers. Each service, from NGINX with TLS enchantments to a WordPress realm powered by MariaDB, was orchestrated in a virtual machine, demonstrating my skills in system administration.",
            image: "/projects/inception.jpg",
            difficulty: "Adventurer",
            completion: "100%",
            demoLink: "#",
            githubLink: "https://github.com/GunDalf101/inception.git",
        },
        {
            id: 4,
            title: "ft_irc: The Communication Conclave",
            type: "Arcane Study",
            skills: ["C++", "Networking", "IRC Protocol", "Socket Programming"],
            description: "I developed my own IRC server, a bastion of real-time communication, using C++98. This project involved creating a realm where messages flow like magic, with channels, private messages, and operator commands to maintain order in the digital domain.",
            image: "/projects/ft_irc.jpg",
            difficulty: "Legendary",
            completion: "100%",
            demoLink: "#",
            githubLink: "https://github.com/GunDalf101/IRC_SERVER.git",
        },
        {
            id: 5,
            title: "Cub3D: The Arcane Arena",
            type: "Arcane Study",
            skills: ["C", "MLX", "Game Design", "Maths"],
            description: "In this completed project, I ventured into a pixelated labyrinth, enhancing it with projectiles, enemies, and enchanted textures. I implemented doors and a mystical UI to manage health and mana, allowing for spellcasting and melee attacks. The realm is alive with floor and ceiling textures, offering a thrilling combat experience.",
            image: "/projects/cub3d.jpg",
            difficulty: "Heroic",
            completion: "100%",
            demoLink: "#",
            githubLink: "https://github.com/GunDalf101/cub3d.git",
        },
        {
            id: 6,
            title: "Minishell: The Command Conclave",
            type: "Arcane Study",
            skills: ["C", "Unix", "Shell Scripting"],
            description: "In this project, I forged my own shell, a command-line sanctuary where processes and file descriptors dance in harmony. I implemented built-in commands, handled redirections and pipes, and managed environment variables, delving into the heart of Unix.",
            image: "/projects/minishell.jpg",
            difficulty: "Heroic",
            completion: "100%",
            demoLink: "#",
            githubLink: "https://github.com/GunDalf101/HomebrewShell.git",
        },
    ];
    
    

    return (
        <div className="relative min-h-screen overflow-hidden py-20">
            <FantasyBackground />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/75  to-black z-[1]" />
            <div className="container mx-auto px-4 relative z-[2]">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={`particle-${i}`}
                        className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [-20, 20],
                            opacity: [0.2, 0.8, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                ))}

                <div className="absolute inset-0 opacity-10">
                    {[...Array(10)].map((_, i) => (
                        <motion.div
                            key={`rune-${i}`}
                            className="absolute text-4xl"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                rotate: [0, 360],
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            ⚡
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-medievalsharp text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 mb-4">
                        Quest Log
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Chronicles of digital adventures and conquered challenges
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            onSelect={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </div>
    );
};

const FantasyBackground = () => {
    return (
        <div className="absolute inset-0 pointer-events-none z-0">
            <div 
                className="absolute inset-0"
                style={{
                    backgroundImage: `url('/image.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            <div 
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `url('/map-details.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            <div 
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                }}
            />

            <div className="absolute inset-0">
                <motion.div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url('/fog-layer.png')`,
                        backgroundSize: '200% 200%',
                    }}
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear"
                    }}
                />
            </div>

            <div className="absolute inset-0">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={`marker-${i}`}
                        className="absolute w-4 h-4"
                        style={{
                            left: `${15 + (i * 20)}%`,
                            top: `${20 + (i * 15)}%`,
                        }}
                    >
                        <div className="relative">
                            <div className="absolute w-4 h-4 bg-yellow-400/50 rounded-full">
                                <motion.div
                                    className="absolute inset-0 bg-yellow-400/30 rounded-full"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.5, 0, 0.5],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"
                animate={{
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            />

            <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/40" />
        </div>
    );
};

const QuestStatus = ({ completion }) => {
    const percent = parseInt(completion);
    const getStatusInfo = () => {
        if (percent === 100) return {
            text: "Quest Completed",
            color: "from-green-500 to-emerald-700",
            icon: "🏆"
        };
        if (percent >= 75) return {
            text: "Nearly Complete",
            color: "from-yellow-500 to-yellow-700",
            icon: "⚔️"
        };
        if (percent >= 50) return {
            text: "In Progress",
            color: "from-orange-500 to-orange-700",
            icon: "🔥"
        };
        return {
            text: "Just Started",
            color: "from-red-500 to-red-700",
            icon: "🌟"
        };
    };

    const status = getStatusInfo();

    return (
        <motion.div
            className={`
                inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                bg-gradient-to-r ${status.color} 
                border border-white/20 shadow-lg
            `}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <span className="text-lg">{status.icon}</span>
            <span className="text-sm font-medievalsharp text-white">
                {status.text}
            </span>
            <span className="text-xs text-white/80">
                ({completion})
            </span>
        </motion.div>
    );
};

const DifficultyBadge = ({ difficulty }) => {
    const getDifficultyInfo = () => {
        const info = {
            "Novice": {
                icon: "📜",
                color: "from-gray-400 to-gray-500",
                border: "border-gray-300/50",
                glow: "gray",
                stars: "D",
                difficulty: "Novice"
            },
            "Adventurer": {
                icon: "🏅",
                color: "from-green-500 to-emerald-600",
                border: "border-green-400/50",
                glow: "green",
                stars: "C",
                difficulty: "Adventurer"
            },
            "Heroic": {
                icon: "⚔️",
                color: "from-blue-500 to-blue-600",
                border: "border-blue-400/50",
                glow: "blue",
                stars: "B",
                difficulty: "Heroic"
            },
            "Legendary": {
                icon: "🔥",
                color: "from-orange-500 to-red-600",
                border: "border-orange-400/50",
                glow: "orange",
                stars: "A",
                difficulty: "Legendary"
            },
            "Mythic": {
                icon: "💫",
                color: "from-purple-500 to-pink-600",
                border: "border-purple-400/50",
                glow: "purple",
                stars: "S",
                difficulty: "Mythic"
            },
            "Ethereal": {
                icon: "💎",
                color: "from-yellow-600 to-orange-600",
                border: "border-yellow-400/50",
                glow: "yellow",
                stars: "S+",
                difficulty: "Ethereal"
            }
        };
        
        
        return info[difficulty] || info.Medium;
    };

    const info = getDifficultyInfo();

    return (
        <motion.div
            className={`
                inline-flex items-center gap-2 px-3 py-1.5
                bg-gradient-to-r ${info.color}
                rounded-full ${info.border}
                shadow-lg shadow-${info.glow}-500/20
            `}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <span className="text-lg">{info.icon}</span>
            <span className="text-sm font-medievalsharp text-white">
                {difficulty}
            </span>
            <span className="text-xs font-serif text-white/80">
                {info.stars}
            </span>
        </motion.div>
    );
};

const ProjectCard = ({ project, index, onSelect }) => {
    return (
        <motion.div
            className="group relative h-full flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
                scale: 1.02,
                filter: "drop-shadow(0 0 20px rgba(255, 215, 0, 0.3))" 
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-black/50 rounded-lg transform -rotate-1">
                <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="relative h-full flex flex-col overflow-hidden rounded-lg bg-[url('/parchment-texture.png')] bg-cover p-6 backdrop-blur-sm border border-purple-500/30">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 border-4 border-golden-gradient rounded-lg z-10" />
                    <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <motion.div className="relative flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-3">
                        <QuestTypeBadge type={project.type} />
                        <DifficultyBadge difficulty={project.difficulty} />
                    </div>

                    <h3 className="text-2xl font-medievalsharp text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 group-hover:animate-pulse mb-4">
                        {project.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.skills.map((skill, i) => (
                            <motion.span
                                key={i}
                                className="flex items-center gap-1 px-3 py-1.5 rounded-full 
                                    bg-gradient-to-r from-purple-500/20 to-pink-500/20 
                                    text-yellow-300 border border-yellow-500/30
                                    shadow-lg shadow-purple-500/20"
                                whileHover={{
                                    scale: 1.1,
                                    backgroundColor: "rgba(147, 51, 234, 0.3)"
                                }}
                            >
                                {getSkillIcon(skill)}
                                {skill}
                            </motion.span>
                        ))}
                    </div>

                    <div className="relative flex-grow mb-4">
                        <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-black/20 to-transparent" />
                        <p className="text-gray-300 font-serif italic line-clamp-2 pr-8">
                            {project.description}
                        </p>
                    </div>

                    <motion.button
                        onClick={onSelect}
                        className="w-full mt-auto px-6 py-3 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 
                            rounded-lg font-medievalsharp text-white relative group overflow-hidden
                            border border-yellow-400/50 shadow-lg shadow-yellow-500/20"
                        whileHover={{ 
                            scale: 1.02,
                            boxShadow: "0 0 20px rgba(255, 215, 0, 0.5)"
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <SparkleEffect />
                        <span className="relative flex items-center justify-center gap-2">
                            <span>View Quest Details</span>
                            <span className="text-xl">📜</span>
                        </span>
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
};
const SparkleEffect = () => {
    return (
        <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
                background: [
                    "radial-gradient(circle, rgba(255,215,0,0.2) 0%, transparent 50%)",
                    "radial-gradient(circle, rgba(255,215,0,0.2) 100%, transparent 50%)",
                ]
            }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
            }}
        />
    );
};

// Helper function to get skill icons
const getSkillIcon = (skill) => {
    const icons = {
        React: "⚛️",
        "Node.js": "🟢",
        MongoDB: "🍃",

    };
    return icons[skill] || "🔮";
};

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence mode="wait">
            {project && (
                <motion.div
                    className="fixed inset-0 z-50 overflow-y-auto pt-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div 
                        className="fixed inset-0 bg-black/85 backdrop-blur-md"
                        style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, purple 1px, transparent 0)`,
                            backgroundSize: '40px 40px',
                        }}
                        onClick={onClose}
                    />

                    <div className="min-h-screen px-4 py-8 flex items-center justify-center">
                        <motion.div
                            className="relative w-full max-w-5xl rounded-xl shadow-2xl"
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="absolute -inset-[2px] bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-xl opacity-75 group-hover:opacity-100 blur-sm animate-border-flow" />

                            <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-purple-500/10 via-transparent to-purple-500/5" />

                            <div className="relative rounded-xl bg-gradient-to-b from-purple-900/95 via-black/95 to-purple-950/95">
                                <div className="max-h-[80vh] overflow-y-auto scrollbar-fantasy rounded-xl">
                                    <div className="p-8 md:p-10">
                                        <motion.button
                                            onClick={onClose}
                                            className="absolute top-4 right-4 p-2 rounded-full bg-purple-800/50 text-purple-300 hover:text-white transition-colors"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </motion.button>

                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="space-y-8">
                                                <div className="space-y-4">
                                                    <motion.h2
                                                        className="text-4xl md:text-5xl font-medievalsharp text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300"
                                                        animate={{
                                                            backgroundPosition: ['0% center', '100% center', '0% center'],
                                                        }}
                                                        transition={{
                                                            duration: 8,
                                                            repeat: Infinity,
                                                            ease: 'linear',
                                                        }}
                                                        style={{
                                                            backgroundSize: '200% auto',
                                                        }}
                                                    >
                                                        {project.title}
                                                    </motion.h2>
                                                    {/* <QuestTypeBadge type={project.type} />
                                                    <DifficultyBadge difficulty={project.difficulty} /> */}
                                                </div>

                                                <ScrollSection title="Quest Description">
                                                    <p className="text-gray-300 leading-relaxed text-lg">
                                                        {project.description}
                                                    </p>
                                                </ScrollSection>

                                                <ScrollSection title="Magical Arts Mastered">
                                                    <div className="flex flex-wrap gap-3">
                                                        {project.skills.map((skill, index) => (
                                                            <SkillBadge key={index} skill={skill} />
                                                        ))}
                                                    </div>
                                                </ScrollSection>

                                                <QuestProgress 
                                                    completion={project.completion} 
                                                    difficulty={project.difficulty} 
                                                />
                                            </div>

                                            <div className="space-y-8">
                                                <div className="relative rounded-lg overflow-hidden group">
                                                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent" />
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                </div>

                                                <div className="space-y-4">
                                                    <ActionButton
                                                        href={project.demoLink}
                                                        icon="🔮"
                                                        text="Explore Live Quest"
                                                        primary
                                                    />
                                                    <ActionButton
                                                        href={project.githubLink}
                                                        icon="📚"
                                                        text="View Ancient Scrolls"
                                                    />
                                                </div>

                                                <QuestStats project={project} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const ScrollSection = ({ title, children }) => (
    <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30 hover:border-purple-400/40 transition-colors">
        <h3 className="text-xl font-medievalsharp text-purple-300 mb-4">{title}</h3>
        {children}
    </div>
);

const SkillBadge = ({ skill }) => (
    <motion.span
        className="px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-300 border border-purple-500/30"
        whileHover={{ scale: 1.1, backgroundColor: "rgba(147, 51, 234, 0.3)" }}
    >
        {skill}
    </motion.span>
);

const ActionButton = ({ href, icon, text, primary }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`
            block w-full px-6 py-3 rounded-lg font-medievalsharp text-center relative group overflow-hidden
            ${primary 
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                : 'border-2 border-purple-500 text-purple-400'
            }
        `}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
    >
        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
        <span className="relative flex items-center justify-center gap-2">
            {icon} {text}
        </span>
    </motion.a>
);

const QuestProgress = ({ completion, difficulty }) => (
    <div className="space-y-4">
        <div className="flex justify-between text-sm text-purple-300">
            <span>Quest Progress</span>
            <span>{completion}</span>
        </div>
        <div className="h-2 bg-purple-900/50 rounded-full overflow-hidden">
            <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                initial={{ width: 0 }}
                animate={{ width: `${parseInt(completion)}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            />
        </div>
    </div>
);
const QuestStats = ({ project }) => (
    <div className="bg-purple-900/30 rounded-lg p-6 border border-purple-500/30">
        <h4 className="text-lg font-medievalsharp text-purple-400 mb-4">
            Quest Statistics
        </h4>
        <div className="grid grid-cols-2 gap-4">
            <StatItem 
                label="Quest Status" 
                value={project.completion} 
                icon="🎯"
            />
            
            <StatItem 
                label="Challenge Level" 
                value={project.difficulty} 
                icon="⚔️"
            />
            
            <StatItem 
                label="Skills Mastered" 
                value={`${project.skills.length} Skills`} 
                icon="📚"
            />
            
            <StatItem 
                label="Quest Type" 
                value={project.type} 
                icon="🏹"
            />
        </div>
    </div>
);

const StatItem = ({ label, value, icon }) => (
    <div className="flex items-center space-x-3">
        <span className="text-xl">{icon}</span>
        <div>
            <p className="text-sm text-purple-300">{label}</p>
            <p className="text-base text-white font-medievalsharp">{value}</p>
        </div>
    </div>
);

const QuestTypeBadge = ({ type }) => {
    const getBadgeStyles = (questType) => {
        const styles = {
            "Arcane Study": {  // School Projects
                background: "bg-gradient-to-r from-green-600/30 to-green-500/30",
                border: "border-green-500/30",
                text: "text-green-300",
                icon: "🎓"
            },
            "Hero's Journey": {  // Personal Projects
                background: "bg-gradient-to-r from-teal-600/30 to-teal-500/30",
                border: "border-teal-500/30",
                text: "text-teal-300",
                icon: "🧑‍💻"
            },
            "Guild Mission": {  // Work Projects
                background: "bg-gradient-to-r from-blue-600/30 to-blue-500/30",
                border: "border-blue-500/30",
                text: "text-blue-300",
                icon: "💼"
            },
            "Legendary Quest": {  // Open Source Contributions
                background: "bg-gradient-to-r from-purple-600/30 to-purple-500/30",
                border: "border-purple-500/30",
                text: "text-purple-300",
                icon: "🌍"
            },
            "Tournament of Champions": {  // Hackathon Projects
                background: "bg-gradient-to-r from-orange-600/30 to-orange-500/30",
                border: "border-orange-500/30",
                text: "text-orange-300",
                icon: "🏆"
            },
            "Side Quest": {  // Default or Miscellaneous Projects
                background: "bg-gradient-to-r from-gray-600/30 to-gray-500/30",
                border: "border-gray-500/30",
                text: "text-gray-300",
                icon: "✨"
            }
        };        

        return styles[questType] || styles.default;
    };

    const style = getBadgeStyles(type);

    return (
        <motion.div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${style.background} ${style.border} border ${style.text}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
        >
            <span className="text-lg">{style.icon}</span>
            <span className="font-medievalsharp text-sm">{type}</span>
            
            <motion.span
                className="absolute inset-0 rounded-full bg-white/10"
                animate={{
                    opacity: [0, 0.2, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </motion.div>
    );
};

export default Projects;