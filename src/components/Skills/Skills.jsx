import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParallax } from 'react-scroll-parallax';
import "./Skills.css"

const SkillTree = () => {
    const [selectedNode, setSelectedNode] = useState(null);
    const [hoveredPath, setHoveredPath] = useState(null);

    const skillTreeData = {
        id: 'root',
        title: "Mastery of the Arcane Arts",
        description: "A collection of mystical powers and technical expertise",
        icon: "🔮",
        children: [
            {
                id: 'web_dev',
                title: "Web Development",
                description: "Crafting magical interfaces and experiences",
                icon: "🌐",
                color: "from-blue-500 to-cyan-500",
                children: [
                    {
                        id: 'frontend_magic',
                        title: "Frontend Magic",
                        description: "Creating enchanting user interfaces",
                        icon: "✨",
                        skills: [
                            {
                                id: 'html5',
                                name: 'HTML5',
                                description: "The foundational structure of web spells",
                                proficiency: 90,
                                icon: "📄",
                                requirements: []
                            },
                            {
                                id: 'css3',
                                name: 'CSS3',
                                description: "Styling enchantments for visual appeal",
                                proficiency: 90,
                                icon: "🎨",
                                requirements: ['html5']
                            },
                            {
                                id: 'react_js',
                                name: 'React',
                                description: "Component-based sorcery for dynamic interfaces",
                                proficiency: 80,
                                icon: "⚛️",
                                requirements: ['html5', 'css3']
                            },
                            {
                                id: 'tailwind_css',
                                name: 'Tailwind CSS',
                                description: "Utility-first styling magic",
                                proficiency: 90,
                                icon: "🎭",
                                requirements: ['css3']
                            },
                            {
                                id: 'three_js',
                                name: 'Three.js',
                                description: "3D wizardry in web development",
                                proficiency: 70,
                                icon: "🎥",
                                requirements: ['javascript']
                            },
                            {
                                id: 'sass_scss',
                                name: 'SASS/SCSS',
                                description: "Advanced styling techniques for modular and maintainable CSS",
                                proficiency: 80,
                                icon: "🎨",
                                requirements: ['css3']
                            },
                        ]
                    },
                    {
                        id: 'backend_magic',
                        title: "Backend Alchemy",
                        description: "Powering the mystical workings behind the scenes",
                        icon: "🔥",
                        skills: [
                            {
                                id: 'node_js',
                                name: 'Node.js',
                                description: "JavaScript enchantments for server-side magic",
                                proficiency: 80,
                                icon: "🟢",
                                requirements: []
                            },
                            {
                                id: 'express_js',
                                name: 'Express.js',
                                description: "Lightweight spells for backend structuring",
                                proficiency: 70,
                                icon: "⚡",
                                requirements: ['node_js']
                            },
                            {
                                id: 'django',
                                name: 'Django',
                                description: "Python framework for robust backend structures",
                                proficiency: 80,
                                icon: "🐍",
                                requirements: []
                            },
                            {
                                id: 'postgresql',
                                name: 'PostgreSQL',
                                description: "Relational database wizardry",
                                proficiency: 70,
                                icon: "🐘",
                                requirements: []
                            },
                            {
                                id: 'mariadb',
                                name: 'MariaDB',
                                description: "Experience with relational database management",
                                proficiency: 70,
                                icon: "🐬",
                                requirements: []
                            }
                        ]
                    }
                ]
            },
            {
                id: 'devops_mastery',
                title: "DevOps Mastery",
                description: "Automation and deployment sorcery",
                icon: "⚙️",
                color: "from-green-500 to-emerald-500",
                children: [
                    {
                        id: 'containerization',
                        title: "Container Magic",
                        description: "Mastery of containment spells",
                        icon: "📦",
                        skills: [
                            {
                                id: 'docker_container',
                                name: 'Docker',
                                description: "Containerization magic for consistent deployments",
                                proficiency: 90,
                                icon: "🐳",
                                requirements: []
                            },
                            {
                                id: 'nginx',
                                name: 'NGINX',
                                description: "Reverse proxy and web server mastery",
                                proficiency: 70,
                                icon: "🚀",
                                requirements: []
                            },
                            {
                                id: 'virtualization_tech',
                                name: 'Virtualization Technologies',
                                description: "Proficiency in setting up virtual environments",
                                proficiency: 80,
                                icon: "🖥️",
                                requirements: []
                            }
                        ]
                    }
                ]
            },
            {
                id: 'cybersec_expertise',
                title: "Cybersecurity & Reverse Engineering",
                description: "Mastery of digital defense and code deconstruction",
                icon: "🔐",
                color: "from-red-500 to-purple-500",
                children: [
                    {
                        id: 'reverse_eng',
                        title: "Reverse Engineering",
                        description: "Understanding the inner workings of compiled spells",
                        icon: "🔎",
                        skills: [
                            {
                                id: 'ghidra',
                                name: 'Ghidra',
                                description: "Binary analysis and decompilation mastery",
                                proficiency: 60,
                                icon: "🕵️‍♂️",
                                requirements: []
                            },
                            {
                                id: 'ida',
                                name: 'IDA',
                                description: "Binary analysis and decompilation mastery",
                                proficiency: 70,
                                icon: "🕵️‍♂️",
                                requirements: []
                            },
                            {
                                id: 'gdb',
                                name: 'GDB',
                                description: "Debugging and memory inspection techniques",
                                proficiency: 80,
                                icon: "🐞",
                                requirements: []
                            },
                            {
                                id: 'radare2',
                                name: 'Radare2',
                                description: "Proficiency in binary analysis and reverse engineering",
                                proficiency: 70,
                                icon: "🔍",
                                requirements: []
                            },
                            {
                                id: 'linux_kernel_api',
                                name: 'Linux Kernel API',
                                description: "Understanding of low-level system interactions",
                                proficiency: 70,
                                icon: "🐧",
                                requirements: []
                            }
                        ]
                    }
                ]
            },
            {
                "id": "programming_languages",
                "title": "Programming Languages",
                "description": "Proficiency in various programming languages for diverse applications",
                "icon": "💻",
                "color": "from-blue-500 to-green-500",
                "children": [
                    {
                        "id": "c_language",
                        "title": "C Programming",
                        "description": "Foundational language for system-level and embedded programming",
                        "icon": "⚙️",
                        "skills": [
                            {
                                "id": "c_basics",
                                "name": "C Basics",
                                "description": "Understanding of variables, control structures, and memory management",
                                "proficiency": 99,
                                "icon": "🔧",
                                "requirements": []
                            },
                            {
                                "id": "c_advanced",
                                "name": "Advanced C",
                                "description": "Advanced techniques like pointers, structs, and file I/O",
                                "proficiency": 95,
                                "icon": "🔍",
                                "requirements": []
                            },
                        ]
                    },
                    {
                        "id": "cpp_language",
                        "title": "C++ Programming",
                        "description": "Object-oriented programming with system-level control",
                        "icon": "🖥️",
                        "skills": [
                            {
                                "id": "cpp_basics",
                                "name": "C++ Basics",
                                "description": "Mastering syntax, functions, and control flow",
                                "proficiency": 95,
                                "icon": "⚡",
                                "requirements": []
                            },
                            {
                                "id": "cpp_oop",
                                "name": "Object-Oriented C++",
                                "description": "Understanding of classes, inheritance, and polymorphism",
                                "proficiency": 95,
                                "icon": "🎯",
                                "requirements": []
                            }
                        ]
                    },
                    {
                        "id": "python_language",
                        "title": "Python Programming",
                        "description": "Versatile and easy-to-learn language for rapid development",
                        "icon": "🐍",
                        "skills": [
                            {
                                "id": "python_basics",
                                "name": "Python Basics",
                                "description": "Mastering syntax, data types, and control structures",
                                "proficiency": 90,
                                "icon": "📚",
                                "requirements": []
                            },
                            {
                                "id": "python_advanced",
                                "name": "Advanced Python",
                                "description": "Working with libraries, frameworks, and advanced concepts like decorators",
                                "proficiency": 80,
                                "icon": "🔧",
                                "requirements": []
                            },
                            {
                                "id": "pandas",
                                "name": "Pandas",
                                "description": "Data manipulation and analysis",
                                "proficiency": 70,
                                "icon": "📊",
                                "requirements": []
                            },
                            {
                                "id": "sqlalchemy",
                                "name": "SQLAlchemy",
                                "description": "Database toolkit and ORM for Python",
                                "proficiency": 60,
                                "icon": "🗄️",
                                "requirements": []
                            },
                            {
                                "id": "matplotlib",
                                "name": "Matplotlib",
                                "description": "Data visualisation and plotting",
                                "proficiency": 60,
                                "icon": "📈",
                                "requirements": []
                            }
                        ]
                    },
                    {
                        "id": "javascript_language",
                        "title": "JavaScript Programming",
                        "description": "Language for dynamic web content and interactive interfaces",
                        "icon": "🌐",
                        "skills": [
                            {
                                "id": "js_basics",
                                "name": "JavaScript Basics",
                                "description": "Fundamentals of syntax, DOM manipulation, and event handling",
                                "proficiency": 90,
                                "icon": "🖱️",
                                "requirements": []
                            },
                            {
                                "id": "js_frameworks",
                                "name": "JavaScript Frameworks",
                                "description": "Experience with React, Angular, and Node.js for web development",
                                "proficiency": 80,
                                "icon": "⚙️",
                                "requirements": []
                            }
                        ]
                    },
                    {
                        "id": "assembly_language",
                        "title": "Assembly Programming",
                        "description": "Low-level programming for hardware control and performance optimization",
                        "icon": "⚡",
                        "skills": [
                            {
                                "id": "asm_basics",
                                "name": "Assembly Basics",
                                "description": "Understanding assembly syntax and operations for specific architectures",
                                "proficiency": 70,
                                "icon": "🧰",
                                "requirements": []
                            }
                        ]
                    }
                ]
            }
        ]
    };


    return (
        <div className="relative min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black overflow-hidden">
            <MagicalBackground />

            <div className="container mx-auto px-4 py-20 relative z-10">
                <TreeHeader />
                <TreeVisualization
                    data={skillTreeData}
                    selectedNode={selectedNode}
                    setSelectedNode={setSelectedNode}
                    hoveredPath={hoveredPath}
                    setHoveredPath={setHoveredPath}
                />
                <NodeDetailModal
                    node={selectedNode}
                    onClose={() => setSelectedNode(null)}
                />
            </div>
        </div>
    );
};

const NodeDetailModal = ({ node, onClose }) => {
    if (!node) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                />

                <motion.div
                    className="relative bg-gradient-to-b from-purple-900 to-purple-950 rounded-xl p-6 max-w-md w-full"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-purple-300 hover:text-white transition-colors"
                    >
                        <span className="sr-only">Close</span>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    <div className="text-center">
                        <div className="mb-4 text-4xl">
                            {node.icon}
                        </div>

                        <h3 className="text-2xl font-medievalsharp text-purple-200 mb-4">
                            {node.title || node.name}
                        </h3>

                        {node.description && (
                            <p className="text-purple-300 mb-6">
                                {node.description}
                            </p>
                        )}

                        {node.proficiency && (
                            <div className="space-y-2">
                                <div className="text-sm text-purple-300">
                                    Mastery Level
                                </div>
                                <div className="h-3 bg-purple-900/50 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-yellow-500 to-yellow-300"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${node.proficiency}%` }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                    />
                                </div>
                                <div className="text-yellow-400 font-medievalsharp">
                                    {node.proficiency}% Mastered
                                </div>
                            </div>
                        )}

                        {node.requirements?.length > 0 && (
                            <div className="mt-6">
                                <h4 className="text-purple-200 font-medievalsharp mb-2">
                                    Prerequisites
                                </h4>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {node.requirements.map((req) => (
                                        <span
                                            key={req}
                                            className="px-3 py-1 rounded-full bg-purple-800/50 text-purple-200 text-sm"
                                        >
                                            {req}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {node.details && (
                            <div className="mt-6 text-left">
                                <h4 className="text-purple-200 font-medievalsharp mb-2">
                                    Spell Details
                                </h4>
                                <ul className="space-y-2">
                                    {node.details.map((detail, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-2 text-purple-300"
                                        >
                                            <span className="text-yellow-500">•</span>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {node.relatedSkills?.length > 0 && (
                            <div className="mt-6">
                                <h4 className="text-purple-200 font-medievalsharp mb-2">
                                    Related Skills
                                </h4>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {node.relatedSkills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 rounded-full bg-purple-800/50 text-purple-200 text-sm"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="absolute inset-0 rounded-xl pointer-events-none">
                        <div className="absolute inset-0 rounded-xl border border-purple-500/20" />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10" />
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const TreeVisualization = ({ data, selectedNode, setSelectedNode, hoveredPath, setHoveredPath }) => {
    return (
        <div className="relative mt-12">
            <div className="min-w-[300px] w-full max-w-[1200px] mx-auto px-3 md:px-6 pb-12">
                <div className="flex justify-center mb-8 md:mb-16">
                    <RootNode
                        node={data}
                        onSelect={setSelectedNode}
                        isHovered={hoveredPath === data.id}
                        onHover={setHoveredPath}
                    />
                </div>

                <div className="flex flex-col gap-8 md:gap-16">
                    {data.children.map((branch, index) => (
                        <PrimaryBranch
                            key={branch.id}
                            branch={branch}
                            index={index}
                            onSelect={setSelectedNode}
                            hoveredPath={hoveredPath}
                            onHover={setHoveredPath}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const RootNode = ({ node, onSelect, isHovered, onHover }) => {
    return (
        <motion.div
            className="relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <CircularNode
                node={node}
                size="xl"  // Using the new xl size
                onSelect={() => onSelect(node)}
                isHovered={isHovered}
                onHover={onHover}
                color="from-purple-500 to-purple-700"
            />
        </motion.div>
    );
};

const PrimaryBranch = ({ branch, index, onSelect, hoveredPath, onHover }) => {
    return (
        <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 items-center">
                <div className="relative flex justify-center md:justify-start">
                    <div className="relative">
                        <CircularNode
                            node={branch}
                            size="lg"
                            onSelect={() => onSelect(branch)}
                            isHovered={hoveredPath === branch.id}
                            onHover={onHover}
                            color={branch.color}
                        />
                        <div className="hidden md:block absolute top-1/2 -right-8 w-8 h-px bg-gradient-to-r from-purple-500/50 to-purple-500/20 transform -translate-y-1/2" />
                    </div>
                </div>

                <div className="space-y-12">
                    {branch.children?.map((skillGroup, groupIndex) => (
                        <SkillCategory
                            key={skillGroup.id}
                            skillGroup={skillGroup}
                            branchColor={branch.color}
                            index={groupIndex}
                            onSelect={onSelect}
                            hoveredPath={hoveredPath}
                            onHover={onHover}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const SkillCategory = ({ skillGroup, branchColor, index, onSelect, hoveredPath, onHover }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 md:gap-32">
            <div className="relative flex justify-center md:block self-start md:self-center">
                <div className="relative">
                    <CircularNode
                        node={skillGroup}
                        size="md"
                        onSelect={() => onSelect(skillGroup)}
                        isHovered={hoveredPath === skillGroup.id}
                        onHover={onHover}
                        color={branchColor}
                    />
                    <div className="hidden md:block absolute top-1/2 right-0 w-6 h-px bg-gradient-to-r from-purple-500/50 to-purple-500/20 transform -translate-y-1/2" />
                </div>
            </div>

            <div className="flex flex-wrap justify-center sm:hidden gap-4 mt-4 md:mt-0">
                {skillGroup.skills?.map((skill, skillIndex) => (
                    <div key={skill.id} className="w-auto">
                        <SkillNode
                            skill={skill}
                            branchColor={branchColor}
                            index={skillIndex}
                            onSelect={onSelect}
                            isHovered={hoveredPath === skill.id}
                            onHover={onHover}
                            requirements={skill.requirements}
                        />
                    </div>
                ))}
            </div>

            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mt-4 md:mt-0">
                {skillGroup.skills?.map((skill, skillIndex) => (
                    <SkillNode
                        key={skill.id}
                        skill={skill}
                        branchColor={branchColor}
                        index={skillIndex}
                        onSelect={onSelect}
                        isHovered={hoveredPath === skill.id}
                        onHover={onHover}
                        requirements={skill.requirements}
                    />
                ))}
            </div>
        </div>
    );
};

const CircularNode = ({ node, size = "md", onSelect, isHovered, onHover, color }) => {
    const sizeConfig = {
        sm: {
            wrapper: "w-16 h-16",
            icon: "w-8 h-8",
            innerPadding: "inset-2",
            strokeWidth: "8",
            titleClass: "text-xs",
        },
        md: {
            wrapper: "w-20 h-20",
            icon: "w-10 h-10",
            innerPadding: "inset-2.5",
            strokeWidth: "6",
            titleClass: "text-sm",
        },
        lg: {
            wrapper: "w-24 h-24",
            icon: "w-12 h-12",
            innerPadding: "inset-3",
            strokeWidth: "4",
            titleClass: "text-base",
        },
        xl: {
            wrapper: "w-48 h-48",
            icon: "w-16 h-16",
            innerPadding: "inset-3",
            strokeWidth: "4",
            titleClass: "text-lg",
        }
    };

    const config = sizeConfig[size];
    const progressColor = getColorFromClass(color);
    const isRoot = node.id === 'root';

    return (
        <div className="group relative">
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                <div className="bg-gray-900/90 text-white px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap">
                    <p className="font-medievalsharp">{node.title || node.name}</p>
                    <p className="text-xs text-gray-300">{node.description}</p>
                </div>
                <div className="w-2 h-2 bg-gray-900/90 transform rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
            </div>

            <button
                onClick={() => onSelect(node)}
                onMouseEnter={() => onHover(node.id)}
                onMouseLeave={() => onHover(null)}
                className={`relative ${config.wrapper} transition-transform duration-300 transform hover:scale-110`}
            >
                <div className={`absolute inset-0 rounded-full blur-md bg-${color}/20 group-hover:bg-${color}/30 transition-all duration-300`} />

                <svg
                    className="absolute inset-0 w-full h-full transform -rotate-90"
                    viewBox="0 0 100 100"
                >
                    <circle
                        className="opacity-20"
                        stroke={progressColor}
                        fill="none"
                        strokeWidth={config.strokeWidth}
                        r="44"
                        cx="50"
                        cy="50"
                    />
                    <motion.circle
                        className="transition-all duration-1000 ease-out"
                        stroke={progressColor}
                        fill="none"
                        strokeWidth={config.strokeWidth}
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 44}`}
                        strokeDashoffset={2 * Math.PI * 44 * (1 - (node.proficiency || 100) / 100)}
                        r="44"
                        cx="50"
                        cy="50"
                        initial={{ strokeDashoffset: 2 * Math.PI * 44 }}
                        animate={{ strokeDashoffset: 2 * Math.PI * 44 * (1 - (node.proficiency || 100) / 100) }}
                    />
                </svg>

                <div className={`absolute ${config.innerPadding} rounded-full bg-gray-900/80 backdrop-blur-sm flex flex-col items-center justify-center`}>
                    {isRoot ? (
                        <>
                            <span className="text-3xl mb-2">{node.icon}</span>
                            <h3 className={`${config.titleClass} font-medievalsharp text-purple-100 text-center`}>
                                {node.title}
                            </h3>
                        </>
                    ) : (
                        <SkillIcon name={node.id} className={config.icon + " text-purple-200"} />
                    )}
                </div>

                <div className={`absolute inset-0 rounded-full border-2 border-${color}/0 group-hover:border-${color}/50 transition-all duration-300`} />
            </button>
        </div>
    );
};
const getColorFromClass = (colorClass) => {
    const colorMap = {
        'blue-500': '#3B82F6',
        'cyan-500': '#06B6D4',
        'green-500': '#10B981',
        'emerald-500': '#10B981',
        'purple-500': '#8B5CF6',
        // Add more color mappings as needed
    };
    const color = colorClass.split('-')[1];
    return colorMap[colorClass] || '#8B5CF6';
};
const MagicalBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900" />

            <div className="stars-container">
                {[...Array(100)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="star"
                        initial={{
                            opacity: Math.random(),
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                        }}
                        animate={{
                            opacity: [0.2, 1, 0.2],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                    />
                ))}
            </div>

            <div className="absolute inset-0">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute inset-0"
                        initial={{
                            backgroundPosition: '0% 0%',
                            opacity: 0.1 + (i * 0.1),
                        }}
                        animate={{
                            backgroundPosition: ['0% 0%', '100% 100%'],
                        }}
                        transition={{
                            duration: 20 + (i * 10),
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                        style={{
                            backgroundImage: 'url("/mist.png")',
                            backgroundSize: '400% 400%',
                        }}
                    />
                ))}
            </div>

            <div className="absolute inset-0">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full border border-purple-500/20"
                        initial={{
                            width: 100,
                            height: 100,
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            opacity: 0,
                        }}
                        animate={{
                            width: [100, 200],
                            height: [100, 200],
                            opacity: [0, 0.2, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: i * 2,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </div>

            <div className="absolute inset-0">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-32 h-32 rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(147,51,234,0.2) 0%, transparent 70%)',
                            filter: 'blur(20px)',
                        }}
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                        }}
                        animate={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

const TreeHeader = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
        >
            <h2 className="text-4xl md:text-5xl font-medievalsharp text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 mb-4">
                Skill Tree of Power
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Explore the mystical branches of knowledge and mastery. Each node represents
                a skill or technology I've mastered in my journey as a digital craftsman.
            </p>
        </motion.div>
    );
};

const SkillNode = ({ skill, branchColor, index, onSelect, isHovered, onHover, requirements }) => {
    const getColorFromClass = (colorClass) => {
        const colorMap = {
            'blue-500': '#3B82F6',
            'cyan-500': '#06B6D4',
            'green-500': '#10B981',
            'emerald-500': '#10B981',
            'purple-500': '#8B5CF6',
        };
        const color = colorClass.split('-')[1];
        return colorMap[colorClass] || '#8B5CF6';
    };

    const progressColor = getColorFromClass(branchColor.split(' ')[1]);

    return (
        <motion.div
            className="relative inline-flex"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            id={`skill-${skill.id}`}
        >
            <div className="group relative">
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                    <div className="bg-gray-900/90 text-white px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap">
                        <p className="font-medievalsharp">{skill.name}</p>
                        <p className="text-xs text-gray-300">{skill.description}</p>
                    </div>
                    <div className="w-2 h-2 bg-gray-900/90 transform rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
                </div>

                <button
                    onClick={() => onSelect(skill)}
                    onMouseEnter={() => onHover(skill.id)}
                    onMouseLeave={() => onHover(null)}
                    className="relative w-12 h-12 sm:w-16 sm:h-16 transition-transform duration-300 transform hover:scale-110"
                >
                    <div className={`absolute inset-0 rounded-full blur-md bg-${branchColor.split(' ')[1]}/20 group-hover:bg-${branchColor.split(' ')[1]}/30 transition-all duration-300`} />

                    <svg
                        className="absolute inset-0 w-full h-full transform -rotate-90"
                        viewBox="0 0 100 100"
                    >
                        <circle
                            className="opacity-20"
                            stroke={progressColor}
                            fill="none"
                            strokeWidth="8"
                            r="44"
                            cx="50"
                            cy="50"
                        />
                        <motion.circle
                            className="transition-all duration-1000 ease-out"
                            stroke={progressColor}
                            fill="none"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray={`${2 * Math.PI * 44}`}
                            strokeDashoffset={2 * Math.PI * 44 * (1 - skill.proficiency / 100)}
                            r="44"
                            cx="50"
                            cy="50"
                            initial={{ strokeDashoffset: 2 * Math.PI * 44 }}
                            animate={{ strokeDashoffset: 2 * Math.PI * 44 * (1 - skill.proficiency / 100) }}
                        />
                    </svg>

                    <div className="absolute inset-2 rounded-full bg-gray-900/80 backdrop-blur-sm flex items-center justify-center">
                        <SkillIcon name={skill.id} className="w-6 h-6 sm:w-8 sm:h-8 text-purple-200" />
                    </div>

                    <div className={`absolute inset-0 rounded-full border-2 border-${branchColor.split(' ')[1]}/0 group-hover:border-${branchColor.split(' ')[1]}/50 transition-all duration-300`} />
                </button>
            </div>

        </motion.div>
    );
};

// SkillIcon component for SVG icons
const SkillIcon = ({ name, className }) => {
    const icons = {
        html5: (
            <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 18.178l-4.62-1.256-.328-3.544h2.27l.158 1.844 2.52.667 2.52-.667.26-2.866H6.96l-.635-6.678h11.35l-.227 2.21H8.822l.204 2.256h8.217l-.624 6.778L12 18.178z" />
                <path d="M3 2h18l-1.623 18L12 22l-7.377-2L3 2zm2.188 2L6.49 18.434 12 19.928l5.51-1.494L18.812 4H5.188z" />
            </svg>
        ),
        css3: (
            <svg className={className} viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.502 0h2.578v1.078h-1.5v1.078h1.5v1.078H7.502V0zm3.093 0h2.579v.938h-1.5v.187h1.5v2.156h-2.579v-.984h1.5v-.188h-1.5V0zm3.095 0h2.577v.938h-1.5v.187h1.5v2.156h-2.577v-.984h1.5v-.188h-1.5V0z" />
                <path d="M3 2l1.627 18L12 22l7.373-2L21 2H3zm14.83 14.896L12 18.297l-5.83-1.401L5.462 5h13.076l-.708 11.896z" />
                <path d="M12 7.315L8.357 8.88l.16 1.796h5.903l-.322 3.378L12 14.868l-2.098-.814-.135-1.515H7.94l.264 2.971L12 16.59l3.796-1.08.804-8.195H12z" />
            </svg>
        ),
        react_js: (

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-24 h-24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
            >
                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-60 12 12)" />

                <circle cx="12" cy="12" r="2" fill="currentColor" />
            </svg>
        ),
        three_js: (
            <svg
                width="90%"
                height="80%"
                viewBox="0 0 512 512"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlSpace="preserve"
                xmlnsSerif="http://www.serif.com/"
                style={{
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    strokeLinejoin: 'round',
                    strokeMiterlimit: 10,
                }}
            >
                <g transform="matrix(2.25096,0,0,2.25096,256.253,256.48)">
                    <g id="Three.js_Icon.svg" transform="matrix(1,0,0,1,-113.385,-113.385)">
                        <g transform="matrix(1,0,0,1,8.964,4.2527)">
                            <path
                                d="M63.02,200.61L19.807,25.67L193.037,75.544L63.02,200.61Z"
                                style={{ fill: 'none', stroke: 'currentColor', strokeWidth: '6px' }}
                            />
                            <path
                                d="M106.39,50.612L127.981,138.108L41.414,113.163L106.39,50.612Z"
                                style={{ fill: 'none', stroke: 'currentColor', strokeWidth: '6px' }}
                            />
                            <path
                                d="M84.91,125.03L74.186,81.565L117.194,93.911L84.91,125.03Z"
                                style={{ fill: 'none', stroke: 'currentColor', strokeWidth: '6px' }}
                            />
                            <path
                                d="M63.458,38.153L74.182,81.618L31.174,69.272L63.458,38.153Z"
                                style={{ fill: 'none', stroke: 'currentColor', strokeWidth: '6px' }}
                            />
                            <path
                                d="M149.47,62.93L160.194,106.395L117.186,94.049L149.47,62.93Z"
                                style={{ fill: 'none', stroke: 'currentColor', strokeWidth: '6px' }}
                            />
                            <path
                                d="M84.915,125.06L95.639,168.525L52.631,156.179L84.915,125.06Z"
                                style={{ fill: 'none', stroke: 'currentColor', strokeWidth: '6px' }}
                            />
                        </g>
                    </g>
                    <g id="Three.js_Icon.svg1" serifId="Three.js_Icon.svg"></g>
                </g>
            </svg>
        ),
        tailwind_css: (
            <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
            >
                <title>Tailwind CSS</title>
                <path
                    d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                />
            </svg>
        ),
        frontend_magic: (
            <svg viewBox="0 0 24 24" width="80%" height="80%" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
            </svg>
        ),
        devops_mastery: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" fill="currentColor" />
            </svg>
        ),
        web_dev: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="80%"
                height="122.879px"
                viewBox="0 0 122.879 122.879"
                xmlSpace="preserve"
            >
                <g>
                    <path
                        d="M109.465,89.503c0.182,0,0.359,0.019,0.533,0.053c1.146-1.998,2.191-4.095,3.135-6.286 c0.018-0.044,0.037-0.086,0.059-0.128c1.418-3.345,2.488-6.819,3.209-10.419c0.559-2.793,0.904-5.657,1.035-8.591h-16.893 c-0.307,8.574-2.867,17.03-7.639,25.371H109.465L109.465,89.503z M106.52,94.889H89.506c-5.164,7.481-12.121,14.87-20.838,22.167 c1.367-0.17,2.719-0.388,4.055-0.655c3.646-0.729,7.164-1.817,10.549-3.264l-0.002-0.004c3.441-1.48,6.646-3.212,9.609-5.199 c2.969-1.992,5.721-4.255,8.25-6.795l0.01-0.01l0,0C103.096,99.18,104.889,97.099,106.52,94.889L106.52,94.889z M54.21,117.055 c-8.716-7.296-15.673-14.685-20.838-22.166H16.361c1.631,2.21,3.423,4.291,5.379,6.24l0.01,0.011v-0.001 c2.53,2.54,5.282,4.803,8.25,6.795c2.962,1.987,6.167,3.719,9.609,5.199c0.043,0.019,0.086,0.038,0.128,0.059 c3.345,1.419,6.819,2.488,10.42,3.209C51.493,116.668,52.843,116.886,54.21,117.055L54.21,117.055z M12.852,89.503h17.122 c-4.771-8.341-7.332-16.797-7.637-25.371H5.445c0.13,2.934,0.475,5.797,1.034,8.59c0.729,3.646,1.818,7.164,3.264,10.549 l0.004-0.001C10.682,85.442,11.716,87.521,12.852,89.503L12.852,89.503z M5.445,58.747h16.997c0.625-8.4,3.412-16.857,8.407-25.371 H12.852c-1.136,1.982-2.17,4.061-3.105,6.234c-0.019,0.043-0.039,0.086-0.059,0.127C8.269,43.083,7.2,46.557,6.479,50.157 C5.92,52.95,5.575,55.814,5.445,58.747L5.445,58.747z M16.361,27.991h17.938c5.108-7.361,11.862-14.765,20.29-22.212 c-1.496,0.175-2.973,0.408-4.431,0.7c-3.647,0.729-7.164,1.818-10.549,3.264l0.001,0.003c-3.442,1.481-6.647,3.212-9.609,5.2 c-2.968,1.992-5.72,4.255-8.25,6.794l-0.011,0.01h0C19.784,23.7,17.992,25.78,16.361,27.991L16.361,27.991z M68.289,5.778 c8.428,7.447,15.182,14.851,20.291,22.212h17.939c-1.631-2.21-3.424-4.291-5.381-6.24l-0.01-0.01l0,0 c-2.529-2.54-5.281-4.802-8.25-6.794c-2.963-1.988-6.168-3.719-9.609-5.2c-0.043-0.018-0.086-0.038-0.127-0.059 c-3.346-1.418-6.82-2.488-10.42-3.208C71.264,6.187,69.785,5.954,68.289,5.778L68.289,5.778z M110.027,33.376H92.029 c4.996,8.514,7.783,16.971,8.408,25.371h16.998c-0.131-2.934-0.477-5.797-1.035-8.59c-0.73-3.646-1.818-7.164-3.264-10.549 l-0.004,0.002C112.197,37.437,111.164,35.358,110.027,33.376L110.027,33.376z M49.106,1.198C53.098,0.399,57.21,0,61.44,0 c4.23,0,8.341,0.399,12.333,1.198c3.934,0.788,7.758,1.97,11.473,3.547c0.051,0.018,0.1,0.037,0.148,0.058 c3.703,1.594,7.197,3.485,10.471,5.684c3.268,2.192,6.291,4.677,9.066,7.462c2.785,2.775,5.27,5.799,7.461,9.065 c2.197,3.275,4.09,6.768,5.684,10.473l-0.004,0.001l0.004,0.009c1.607,3.758,2.809,7.628,3.605,11.609 c0.799,3.992,1.197,8.104,1.197,12.334c0,4.23-0.398,8.343-1.197,12.335c-0.787,3.932-1.971,7.758-3.547,11.472 c-0.018,0.05-0.037,0.099-0.059,0.147c-1.594,3.705-3.486,7.197-5.684,10.472c-2.191,3.267-4.676,6.29-7.461,9.065 c-2.775,2.785-5.799,5.271-9.066,7.462c-3.273,2.198-6.768,4.091-10.471,5.684l-0.002-0.004l-0.01,0.004 c-3.758,1.606-7.629,2.808-11.609,3.604c-3.992,0.799-8.104,1.198-12.333,1.198c-4.229,0-8.342-0.399-12.334-1.198 c-3.933-0.787-7.758-1.97-11.474-3.546c-0.049-0.019-0.098-0.037-0.147-0.059c-3.705-1.593-7.197-3.485-10.472-5.684 c-3.266-2.191-6.29-4.677-9.065-7.462c-2.785-2.775-5.27-5.799-7.461-9.065c-2.198-3.274-4.09-6.767-5.684-10.472l0.004-0.002 l-0.004-0.009c-1.606-3.758-2.808-7.628-3.604-11.609C0.4,69.782,0,65.67,0,61.439c0-4.229,0.4-8.342,1.199-12.334 c0.787-3.933,1.97-7.758,3.546-11.473c0.018-0.049,0.037-0.099,0.058-0.147c1.594-3.705,3.485-7.198,5.684-10.473 c2.192-3.266,4.677-6.29,7.461-9.065c2.775-2.785,5.799-5.27,9.065-7.462c3.275-2.198,6.768-4.09,10.472-5.684l0.001,0.004 l0.009-0.004C41.254,3.197,45.125,1.995,49.106,1.198L49.106,1.198z M64.133,9.268v18.723h17.826 C77.275,21.815,71.34,15.575,64.133,9.268L64.133,9.268z M64.133,33.376v25.371h30.922c-0.699-8.332-3.789-16.788-9.318-25.371 H64.133L64.133,33.376z M64.133,64.132v25.371h22.51c5.328-8.396,8.189-16.854,8.531-25.371H64.133L64.133,64.132z M64.133,94.889 v18.952c7.645-6.283,13.902-12.601,18.746-18.952H64.133L64.133,94.889z M58.747,113.843V94.889H40 C44.843,101.24,51.1,107.559,58.747,113.843L58.747,113.843z M58.747,89.503V64.132H27.706c0.341,8.518,3.201,16.975,8.531,25.371 H58.747L58.747,89.503z M58.747,58.747V33.376H37.143c-5.529,8.583-8.619,17.04-9.319,25.371H58.747L58.747,58.747z M58.747,27.991 V9.266C51.54,15.573,45.604,21.815,40.92,27.991H58.747L58.747,27.991z"
                        fill="currentColor"
                        stroke="black"
                        strokeWidth="0.5"
                    />
                </g>
            </svg>
        ),
        backend_magic: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 115.25 122.88"
                width="60%"
                height="122.88"
            >
                <g>
                    <path
                        d="M7.91,37.95h99.43c0.14,0,0.28,0,0.42,0.01c0.47-0.09,0.89-0.32,1.22-0.65c0.42-0.42,0.69-1.01,0.69-1.64V7.9c0-0.64-0.26-1.22-0.69-1.64c-0.42-0.42-1.01-0.69-1.64-0.69H7.91c-0.64,0-1.22,0.26-1.64,0.69C5.85,6.68,5.58,7.26,5.58,7.9v27.77c0,0.64,0.26,1.22,0.69,1.64c0.33,0.33,0.75,0.56,1.22,0.65C7.63,37.95,7.77,37.95,7.91,37.95L7.91,37.95z M75.97,98.85h7.66V81.52H33.21v17.33h7.67v7.65H57.7h10.41h7.85V98.85L75.97,98.85z M92.43,81.52v17.33h7.67v7.65h15.16v8.8H100.1v7.58H75.97v-7.58h-7.85H57.7H40.88v7.58H16.75v-7.58H0v-8.8h16.75v-7.65h7.66V81.52H7.91c-2.17,0-4.15-0.89-5.58-2.32c-1.43-1.43-2.32-3.41-2.32-5.58V45.85c0-1.94,0.7-3.71,1.87-5.09c-1.16-1.38-1.87-3.15-1.87-5.09V7.9c0-2.18,0.89-4.15,2.32-5.58C3.76,0.89,5.74,0,7.91,0h99.43c2.18,0,4.15,0.89,5.58,2.32c1.43,1.43,2.32,3.41,2.32,5.58v27.77c0,1.94-0.7,3.71-1.87,5.09c1.16,1.38,1.87,3.16,1.87,5.09v27.77c0,2.17-0.89,4.15-2.32,5.58c-1.43,1.43-3.41,2.32-5.58,2.32H92.43L92.43,81.52z M15.49,14.22h5.84v15.12h-5.84V14.22L15.49,14.22z M95.77,17.15c2.56,0,4.63,2.07,4.63,4.63c0,2.56-2.07,4.63-4.63,4.63c-2.56,0-4.63-2.07-4.63-4.63C91.14,19.23,93.21,17.15,95.77,17.15L95.77,17.15z M78.13,17.15c2.56,0,4.63,2.07,4.63,4.63c0,2.56-2.07,4.63-4.63,4.63c-2.56,0-4.63-2.07-4.63-4.63C73.5,19.23,75.57,17.15,78.13,17.15L78.13,17.15z M47.78,14.22h5.84v15.12h-5.84V14.22L47.78,14.22z M31.63,14.22h5.84v15.12h-5.84V14.22L31.63,14.22z M15.49,52.17h5.84v15.12h-5.84V52.17L15.49,52.17z M47.78,52.17h5.84v15.12h-5.84V52.17L47.78,52.17z M31.63,52.17h5.84v15.12h-5.84V52.17L31.63,52.17z M107.77,43.56c-0.14,0.01-0.28,0.01-0.42,0.01H7.91c-0.14,0-0.28,0-0.42-0.01c-0.47,0.09-0.89,0.32-1.22,0.65c-0.42,0.42-0.69,1.01-0.69,1.64v27.77c0,0.64,0.26,1.22,0.69,1.64c0.42,0.42,1.01,0.69,1.64,0.69h99.43c0.64,0,1.22-0.26,1.64-0.69c0.42-0.42,0.69-1.01,0.69-1.64V45.85c0-0.64-0.26-1.22-0.69-1.64C108.66,43.88,108.24,43.64,107.77,43.56L107.77,43.56z M88.03,105.39c3.03,0,5.48,2.45,5.48,5.48c0,3.03-2.45,5.48-5.48,5.48c-3.03,0-5.48-2.45-5.48-5.48C82.55,107.84,85.01,105.39,88.03,105.39L88.03,105.39z M28.81,105.39c3.03,0,5.48,2.45,5.48,5.48c0,3.03-2.45,5.48-5.48,5.48s-5.48-2.45-5.48-5.48C23.33,107.84,25.79,105.39,28.81,105.39L28.81,105.39z"
                        fill="currentColor"
                        stroke="black"
                        strokeWidth="1"
                    />
                </g>
            </svg>
        ),
        node_js: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 109 122.88"
                width="70%"
                height="122.88"
            >
                <path
                    d="M68.43,87.08c-19.7,0-23.83-9-23.83-16.63a1.3,1.3,0,0,1,1.3-1.3h5.82A1.3,1.3,0,0,1,53,70.25c.88,5.93,3.49,8.92,15.41,8.92C77.9,79.17,81.93,77,81.93,72c0-2.9-1.15-5-15.89-6.49-12.33-1.22-20-3.93-20-13.8,0-9.08,7.66-14.49,20.5-14.49,14.42,0,21.56,5,22.46,15.76a1.31,1.31,0,0,1-.35,1,1.35,1.35,0,0,1-1,.42H81.9a1.29,1.29,0,0,1-1.26-1c-1.41-6.23-4.81-8.23-14.07-8.23C56.21,45.15,55,48.76,55,51.46c0,3.28,1.42,4.24,15.4,6.09S90.82,62,90.82,71.71,82.64,87.14,68.37,87.14l.06-.06Zm-13.91,35.8a9.45,9.45,0,0,1-4.72-1.26l-15-8.9c-2.25-1.26-1.15-1.7-.41-2a30.38,30.38,0,0,0,6.8-3.1,1.15,1.15,0,0,1,1.12.08l11.55,6.85a1.51,1.51,0,0,0,1.4,0l45-26a1.42,1.42,0,0,0,.69-1.22V35.43a1.44,1.44,0,0,0-.7-1.24l-45-26a1.38,1.38,0,0,0-1.39,0l-45,26a1.42,1.42,0,0,0-.71,1.23v52a1.39,1.39,0,0,0,.7,1.21l12.33,7.12C27.85,99.06,32,95.11,32,91.15V39.86a1.29,1.29,0,0,1,1.31-1.3H39a1.29,1.29,0,0,1,1.3,1.3V91.17c0,8.93-4.87,14-13.33,14-2.6,0-4.66,0-10.38-2.82L4.72,95.59A9.51,9.51,0,0,1,0,87.38v-52a9.47,9.47,0,0,1,4.72-8.21l45.07-26a9.89,9.89,0,0,1,9.47,0l45,26A9.49,9.49,0,0,1,109,35.43v52a9.54,9.54,0,0,1-4.72,8.21l-45,26a9.5,9.5,0,0,1-4.74,1.26v0Zm0,0Z"
                    fill="currentColor"
                    stroke="black"
                    strokeWidth="1"
                />
            </svg>
        ),
        express_js: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1333.33 773.55"
                width="80%"
                height="80%"
            >
                <path
                    d="M1333.33 753.49c-48.5 12.33-78.5.54-105.41-39.87L1036.5 448.79l-27.67-36.67L785.29 714.5c-25.54 36.38-52.33 52.2-100 39.33l286.25-384.25-266.5-347.09c45.83-8.91 77.5-4.38 105.62 36.67l198.54 268.13 200-266.67c25.62-36.38 53.17-50.2 99.17-36.8l-103.33 137-140 182.29c-16.67 20.83-14.38 35.09.96 55.2l267.33 355.18zM.34 363.16l23.41-115.17c63.75-227.92 325-322.63 505.17-181.8 105.29 82.83 131.46 200 126.25 331.25H61.67C52.76 633.69 222.8 776.27 439.58 703.53c76.04-25.54 120.83-85.09 143.25-159.58 11.38-37.33 30.2-43.17 65.29-32.5-17.91 93.17-58.33 171-143.75 219.71-127.62 72.91-309.8 49.33-405.62-52C41.66 620.36 18.08 545.87 7.5 466.2c-1.67-13.17-5-25.71-7.5-38.33.22-21.56.34-43.11.34-64.67v-.04zm62.41-15.83h536.33c-3.5-170.83-109.87-292.17-255.25-293.2-159.58-1.25-274.17 117.2-281.09 293.2h.01z"
                    fill="currentColor"
                    stroke="black"
                    strokeWidth="1"
                />
            </svg>
        ),
        django: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333333 333333" width="70%">
                <path
                    d="M117587 0h54579v250154c-27956 5288-48537 7369-70805 7369C34700 257453 0 227673 0 170476c0-55108 36807-90874 93845-90874 8851 0 15594 697 23742 2783V0zm143831 86317v125248c0 43133-3231 63876-12714 81759-8851 17193-20511 28034-44604 40008l-50645-23866c24093-11197 35753-21091 43200-36189 7796-15440 10255-33324 10255-80361V86317h54509v-1zM201409 0h54579v55457h-54579V0zm-81909 127465c-6392-2087-11660-2783-18404-2783-27605 0-43550 16838-43550 46348 0 28731 15243 44595 43200 44595 6040 0 10957-340 18754-1384v-86776z"
                    fill="currentColor"
                    stroke="black"
                    strokeWidth="1"
                />
            </svg>
        ),
        postgresql: (
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 122.88 122.88"
                style={{ enableBackground: 'new 0 0 122.88 122.88' }}
                xmlSpace="preserve"
                width="76%"
                height="76%"
                fill="currentColor"
            >
                <g>
                    <path
                        className="st1"
                        d="M113.53,75.55c-14.65,3.02-15.66-1.94-15.66-1.94c15.47-22.95,21.93-52.09,16.35-59.22 C99-5.06,72.65,4.14,72.21,4.38L72.06,4.4c-2.89-0.6-6.13-0.96-9.77-1.02c-6.63-0.11-11.66,1.74-15.47,4.63 c0,0-47.01-19.37-44.82,24.36c0.47,9.3,13.33,70.38,28.68,51.93c5.61-6.75,11.03-12.45,11.03-12.45c2.69,1.79,5.92,2.7,9.29,2.37 L51.26,74c-0.08,0.84-0.04,1.66,0.1,2.63c-3.95,4.42-2.79,5.19-10.7,6.82c-8,1.65-3.3,4.58-0.23,5.35 c3.72,0.93,12.32,2.25,18.14-5.89l-0.23,0.93c1.55,1.24,2.64,8.07,2.46,14.26c-0.18,6.19-0.3,10.44,0.92,13.76 s2.44,10.79,12.83,8.56c8.68-1.86,13.18-6.68,13.81-14.72c0.44-5.72,1.45-4.87,1.51-9.98l0.81-2.42c0.93-7.75,0.15-10.25,5.5-9.09 l1.3,0.11c3.94,0.18,9.09-0.63,12.11-2.04C116.08,79.27,119.95,74.22,113.53,75.55L113.53,75.55L113.53,75.55z"
                        strokeWidth="2" // Add thicker stroke
                    />
                    <path
                        className="st0"
                        d="M57.39,79.94c0.03-1,0.86-1.79,1.86-1.76s1.79,0.86,1.76,1.86c-0.21,7.43-0.17,14.88,0.1,20.84 c0.25,5.37,0.68,9.41,1.28,10.91c0.64,1.59,1.63,3.94,3.53,5.53c1.85,1.56,4.7,2.51,9.24,1.54c3.97-0.85,6.64-2.06,8.42-3.91 c1.76-1.83,2.76-4.42,3.38-8.04c0.46-2.64,1.09-7.25,1.66-11.84c0.72-5.74,1.38-11.54,1.52-13.41c0.07-1,0.94-1.75,1.94-1.67 c1,0.07,1.75,0.94,1.67,1.94c-0.14,1.82-0.8,7.69-1.55,13.6c-0.6,4.74-1.24,9.44-1.68,11.99c-0.75,4.33-2.02,7.52-4.35,9.94 c-2.32,2.41-5.57,3.93-10.28,4.94c-5.85,1.25-9.71-0.12-12.32-2.32c-2.57-2.16-3.79-5.02-4.56-6.95c-0.76-1.89-1.27-6.35-1.54-12.1 C57.21,95.02,57.18,87.47,57.39,79.94L57.39,79.94z"
                        strokeWidth="2"
                    />
                    {/* Add strokeWidth to other paths as well */}
                </g>
            </svg>
        ),
        containerization: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 118.61 122.88"
                style={{ enableBackground: 'new 0 0 118.61 122.88' }}
                width="70%"
            >
                <g>
                    <path
                        d="M46.54,47.49l59.73,10.85l-43.75-30.2c-1.09,0.64-2.35,1.06-3.64,1.18c-1.37,0.13-2.79-0.06-4.09-0.64L10.39,53.67v63.89l-9.67-1.65c-0.36-0.06-0.66-0.3-0.66-0.66v-59.8c-0.25-1.14,0.27-2.36,1.35-2.95l49.47-27.87c-0.68-1.57-1.02-3.56-0.86-6.03l4.54,0.28c-0.12,1.84,0.12,3.18,0.58,4.12c0.77,0.15,1.47,0.62,1.87,1.36c0.06,0.12,0.12,0.24,0.16,0.36c0.36,0.09,0.74,0.12,1.11,0.1c-0.43-0.85-0.39-1.91,0.19-2.75c0.54-0.79,1.43-1.2,2.33-1.17c-0.16-0.19-0.34-0.34-0.51-0.49c-1.19-1.05-2.34-2.07-2.64-5.43l-0.01-0.01l-0.03-0.3c-2.18-0.87-3.73-3.01-3.73-5.5c0-2.45,1.49-4.56,3.62-5.46V0h4.55v3.7c2.15,0.89,3.67,3,3.67,5.48c0,2.43-1.46,4.52-3.56,5.43c0.15,1.54,0.63,1.97,1.13,2.41c0.9,0.8,1.83,1.62,2.45,3.7c0.33,1.12,0.35,2.19,0.12,3.16l51.57,35.59c0.53,0.37,0.89,0.89,1.06,1.47c0.08,0.13,0.12,0.28,0.12,0.44v47.13c0,0.53-0.45,0.87-0.97,0.97l-71.11,13c-0.52,0.1-0.97-0.44-0.97-0.97V48.46C45.57,47.93,46.01,47.4,46.54,47.49L46.54,47.49zM14.15,51.73l11.03-1.84v70.19l-11.03-1.88V51.73L14.15,51.73zM28.94,49.26l12.65-2.11c0.36-0.06,0.66,0.3,0.66,0.66v74.39c0,0.36-0.3,0.72-0.66,0.66l-12.65-2.15V49.51V49.26L28.94,49.26zM115.19,64.71v40.57h-1.25V64.71H115.19L115.19,64.71zM55.66,56.63v57.94H51.9v-59.1L55.66,56.63L55.66,56.63zM65.93,57.59v55.45h-3.44v-55.9L65.93,57.59L65.93,57.59zM75.13,59.08v52.42H72v-53L75.13,59.08L75.13,59.08zM83.33,60.36v50.01h-2.82V59.7L83.33,60.36L83.33,60.36zM90.89,61.57v47.4h-2.5V61.05L90.89,61.57L90.89,61.57zM97.87,62.45v45.45h-2.19V61.95L97.87,62.45L97.87,62.45zM104.12,63.59v43.34h-1.88V63L104.12,63.59L104.12,63.59zM109.94,64.57v41.45h-1.57V63.85L109.94,64.57L109.94,64.57z"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="0"
                    />
                </g>
            </svg>
        ),
        docker_container: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 120 90"
                style={{ enableBackground: 'new 0 0 120 90' }}
                width="80%"
            >
                <g>
                    <path
                        d="M121.68,33.34c-0.34-0.28-3.42-2.62-10.03-2.62c-1.71,0-3.48,0.17-5.19,0.46c-1.25-8.72-8.49-12.94-8.78-13.16l-1.77-1.03l-1.14,1.65c-1.42,2.22-2.51,4.73-3.13,7.29c-1.2,4.96-0.46,9.63,2.05,13.62c-3.02,1.71-7.92,2.11-8.95,2.17l-80.93,0c-2.11,0-3.82,1.71-3.82,3.82c-0.11,7.07,1.08,14.13,3.53,20.8c2.79,7.29,6.95,12.71,12.31,16.01c6.04,3.7,15.9,5.81,27.01,5.81c5.01,0,10.03-0.46,14.99-1.37c6.9-1.25,13.51-3.65,19.6-7.12c5.02-2.91,9.52-6.61,13.34-10.94c6.44-7.24,10.26-15.33,13.05-22.51c0.4,0,0.74,0,1.14,0c7.01,0,11.34-2.79,13.73-5.19c1.6-1.48,2.79-3.31,3.65-5.36l0.51-1.48L121.68,33.34L121.68,33.34zM71.59,39.38h10.83c0.51,0,0.97-0.4,0.97-0.97v-9.69c0-0.51-0.4-0.97-0.97-0.97l0,0l-10.83,0c-0.51,0-0.97,0.4-0.97,0.97l0,0v9.69C70.68,38.98,71.08,39.38,71.59,39.38L71.59,39.38zM56.49,11.63h10.83c0.51,0,0.97-0.4,0.97-0.97V0.97c0-0.51-0.46-0.97-0.97-0.97L56.49,0c-0.51,0-0.97,0.4-0.97,0.97l0,0v9.69C55.52,11.17,55.97,11.63,56.49,11.63L56.49,11.63zM56.49,25.53h10.83c0.51,0,0.97-0.46,0.97-0.97v-9.69c0-0.51-0.46-0.97-0.97-0.97H56.49c-0.51,0-0.97,0.4-0.97,0.97l0,0v9.69C55.52,25.08,55.97,25.53,56.49,25.53L56.49,25.53zM41.5,25.53h10.83c0.51,0,0.97-0.46,0.97-0.97v-9.69c0-0.51-0.4-0.97-0.97-0.97l0,0H41.5c-0.51,0-0.97,0.4-0.97,0.97l0,0v9.69C40.53,25.08,40.93,25.53,41.5,25.53L41.5,25.53zM26.28,25.53h10.83c0.51,0,0.97-0.46,0.97-0.97v-9.69c0-0.51-0.4-0.97-0.97-0.97l0,0H26.28c-0.51,0-0.97,0.4-0.97,0.97v9.69C25.37,25.08,25.77,25.53,26.28,25.53L26.28,25.53zM56.49,39.38h10.83c0.51,0,0.97-0.4,0.97-0.97v-9.69c0-0.51-0.4-0.97-0.97-0.97l0,0l-10.83,0c-0.51,0-0.97,0.4-0.97,0.97l0,0v9.69C55.52,38.98,55.97,39.38,56.49,39.38L56.49,39.38L56.49,39.38zM41.5,39.38h10.83c0.51,0,0.97-0.4,0.97-0.97l0,0v-9.69c0-0.51-0.4-0.97-0.97-0.97l0,0l-10.83,0c-0.51,0-0.97,0.4-0.97,0.97l0,0v9.69C40.53,38.98,40.93,39.38,41.5,39.38L41.5,39.38L41.5,39.38zM26.28,39.38h10.83c0.51,0,0.97-0.4,0.97-0.97l0,0v-9.69c0-0.51-0.4-0.97-0.97-0.97l0,0l-10.83,0c-0.51,0-0.97,0.4-0.97,0.97v9.69C25.37,38.98,25.77,39.38,26.28,39.38L26.28,39.38zM11.35,39.38h10.83c0.51,0,0.97-0.4,0.97-0.97l0,0v-9.69c0-0.51-0.4-0.97-0.97-0.97l0,0l-10.83,0c-0.51,0-0.97,0.4-0.97,0.97l0,0v9.69C10.44,38.98,10.84,39.38,11.35,39.38L11.35,39.38L11.35,39.38z"
                        fill="currentColor" // Use currentColor to inherit the text color
                        stroke="currentColor" // Stroke will follow the current color
                        strokeWidth="1" // This will make the stroke a little thicker
                    />
                </g>
            </svg>
        ),
        cybersec_expertise: (
            <svg viewBox="0 0 24 24" width="80%" height="80%" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
            </svg>
        ),
        ghidra: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80%"
                height="80%"
                viewBox="0 0 122.88 106.68"
                fill="currentColor"  // Inherits the current text color
            >
                <g>
                    <path
                        d="M52.4,20.33C60.04,15.89,63.76,8.53,68.19,0c2.26,2.44,3.48,8.44,2.98,16.83 c21.29-1.39,34.78,10.58,51.71-7.42C115.6,37.52,89.32,21.55,78.34,24c16.95,1.92,21.76,11.28,41.28,7.96 c-6.72,8.09-21.59,6.45-34.11,0.75c2.21,6.08,24.83,10.01,20.22,28.16c-4.36-7.49-8.45-12.09-12.29-14.08 c7.91,13.68,7.29,26.15-0.09,39.78c-1.63,3-3.62,5.73-6.05,8.09c3.38-7.47,5.02-14.43,3.58-20.48 c-1.37,5.2-26.98,55.76-13.31,14.34C50.27,115.34,23.7,88.04,0,106.68c7.91-37.07,50.98-22.56,66.84-39.74 c3.26-3.54,4.44-8.33,3.04-11.78c-4.08-10.04-18.37-7.09-23.55-0.96c-3.19,4.91-9.37,10.37-14.44,4.29 c-0.83-0.99-1.3-2.26-1.43-3.78c2.56,1.09,5.12,1.51,7.68,0.26l-2.05-2.3c2.73-0.77,5.78,0.09,8.19-2.42l8.96-5.89 c1.71-1.26-2.13-2.07-11.26-2.7c-0.77,1.99-0.42,3.81,1.79,5.38c-2.62,0.35-4.89-0.35-6.66-2.56c-1.04,0.81-0.89,1.38,1.9,5.81 c-2.51,0.11-5.02-0.89-7.53-2.48c-0.58,2.02,0.27,4.04,0.41,6.06c-1.83-0.53-3.51-1.4-5.02-2.62c-1.52-1.23-2.89-2.8-4.09-4.72 c-0.83-1.88-0.82-3.29-0.18-4.34c0.39-0.65,1.02-1.16,1.85-1.57c3.1-1.53,4.66-1.35,8.29-3.77c3.43-2.28,6.93-5.01,9.91-8.69 C47.47,22.2,47.34,23.27,52.4,20.33L52.4,20.33z M51.69,29.57c-1.19,0.49-1.28,1.07-2.92,1.52c-0.49,0.13-1.35,0.87-1.62,1.3 c-0.84,1.37,2.22,2.1,3.14,0.46c0.23-0.4,1.26-2.3,1.34-2.53c0.08-0.24,0.29-0.43,0.13-0.7C51.74,29.62,51.73,29.56,51.69,29.57 L51.69,29.57z"
                        stroke="currentColor"  // Stroke will follow current color
                        strokeWidth="2"  // Thicker stroke
                    />
                </g>
            </svg>
        ),
        gdb: (
            <svg
                width="80%"
                height="80%"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"  // Inherit color for fill
            >
                <g>
                    <path
                        d="M17.416 2.62412C17.7607 2.39435 17.8538 1.9287 17.624 1.58405C17.3943 1.23941 16.9286 1.14628 16.584 1.37604L13.6687 3.31955C13.1527 3.11343 12.5897 3.00006 12.0001 3.00006C11.4105 3.00006 10.8474 3.11345 10.3314 3.31962L7.41603 1.37604C7.07138 1.14628 6.60573 1.23941 6.37596 1.58405C6.1462 1.9287 6.23933 2.39435 6.58397 2.62412L8.9437 4.19727C8.24831 4.84109 7.75664 5.70181 7.57617 6.6719C8.01128 6.55973 8.46749 6.50006 8.93763 6.50006H15.0626C15.5328 6.50006 15.989 6.55973 16.4241 6.6719C16.2436 5.70176 15.7519 4.841 15.0564 4.19717L17.416 2.62412Z"
                        stroke="currentColor"  // Stroke color is inherited
                        strokeWidth="0"  // Thicker stroke
                    />
                    <path
                        d="M1.25 14.0001C1.25 13.5859 1.58579 13.2501 2 13.2501H5V11.9376C5 11.1019 5.26034 10.327 5.70435 9.68959L3.22141 8.69624C2.83684 8.54238 2.6498 8.10589 2.80366 7.72131C2.95752 7.33673 3.39401 7.1497 3.77859 7.30356L6.91514 8.55841C7.50624 8.20388 8.19807 8.00006 8.9375 8.00006H15.0625C15.8019 8.00006 16.4938 8.20388 17.0849 8.55841L20.2214 7.30356C20.606 7.1497 21.0425 7.33673 21.1963 7.72131C21.3502 8.10589 21.1632 8.54238 20.7786 8.69624L18.2957 9.68959C18.7397 10.327 19 11.1019 19 11.9376V13.2501H22C22.4142 13.2501 22.75 13.5859 22.75 14.0001C22.75 14.4143 22.4142 14.7501 22 14.7501H19V15.0001C19 16.1808 18.7077 17.2932 18.1915 18.2689L20.7786 19.3039C21.1632 19.4578 21.3502 19.8943 21.1963 20.2789C21.0425 20.6634 20.606 20.8505 20.2214 20.6966L17.3288 19.5394C16.1974 20.8664 14.5789 21.7655 12.75 21.9604V15.0001C12.75 14.5858 12.4142 14.2501 12 14.2501C11.5858 14.2501 11.25 14.5858 11.25 15.0001V21.9604C9.42109 21.7655 7.80265 20.8664 6.67115 19.5394L3.77859 20.6966C3.39401 20.8505 2.95752 20.6634 2.80366 20.2789C2.6498 19.8943 2.83684 19.4578 3.22141 19.3039L5.80852 18.2689C5.29231 17.2932 5 16.1808 5 15.0001V14.7501H2C1.58579 14.7501 1.25 14.4143 1.25 14.0001Z"
                        stroke="currentColor"  // Stroke color is inherited
                        strokeWidth="0"  // Thicker stroke
                    />
                </g>
            </svg>
        ),
        nginx: (
            <svg
                width="85%"
                height="85%"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"  // Inherit color for fill
            >
                <g>
                    <path
                        fillRule="nonzero"
                        clipRule="nonzero"
                        d="M7.62016 0.102166C7.85488 -0.0340553 8.14512 -0.0340553 8.37984 0.102166L14.626 3.72717C14.8576 3.86157 15 4.10825 15 4.375V11.625C15 11.8918 14.8576 12.1384 14.626 12.2728L8.37984 15.8978C8.14512 16.0341 7.85488 16.0341 7.62016 15.8978L1.374 12.2728C1.14241 12.1384 1 11.8918 1 11.625V4.375C1 4.10825 1.14241 3.86157 1.374 3.72717L7.62016 0.102166ZM2.50769 4.80578V11.1942L8 14.3817L13.4923 11.1942V4.80578L8 1.61828L2.50769 4.80578ZM4.98331 4.55709C5.265 4.441 5.58925 4.50517 5.80484 4.71967L10.0462 8.93934V5.25C10.0462 4.83579 10.3837 4.5 10.8 4.5C11.2163 4.5 11.5538 4.83579 11.5538 5.25V10.75C11.5538 11.0533 11.3702 11.3268 11.0885 11.4429C10.8068 11.559 10.4825 11.4948 10.2669 11.2803L6.02564 7.06066V10.75C6.02564 11.1642 5.68813 11.5 5.27179 11.5C4.85546 11.5 4.51795 11.1642 4.51795 10.75V5.25C4.51795 4.94665 4.70162 4.67318 4.98331 4.55709Z"
                        stroke="currentColor"  // Stroke color is inherited
                        strokeWidth="0"  // Thicker stroke
                    />
                </g>
            </svg>
        ),
        c_language: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 109.19 122.88"
                fill="currentColor"
                width="80%"
                height="80%"
            >
                <path
                    d="M107.81,92.16c0.86-1.48,1.39-3.16,1.39-4.66V35.38c0-1.5-0.53-3.17-1.39-4.66L54.6,61.44L107.81,92.16L107.81,92.16L107.81,92.16z"
                    fill="currentColor"
                />
                <path
                    d="M59.33,121.75l45.14-26.06c1.3-0.75,2.48-2.05,3.34-3.53L54.6,61.44L1.39,92.16c0.86,1.48,2.04,2.78,3.34,3.53l45.14,26.06C52.47,123.25,56.72,123.25,59.33,121.75L59.33,121.75L59.33,121.75z"
                    fill="currentColor"
                />
                <path
                    d="M107.81,30.72c-0.86-1.48-2.04-2.78-3.34-3.53L59.33,1.13c-2.6-1.5-6.86-1.5-9.46,0L4.73,27.19C2.13,28.69,0,32.38,0,35.38V87.5c0,1.5,0.53,3.17,1.39,4.66L54.6,61.44L107.81,30.72L107.81,30.72L107.81,30.72z"
                    fill="currentColor"
                />
                <path
                    d="M54.6,97.84c-20.07,0-36.4-16.33-36.4-36.4s16.33-36.4,36.4-36.4c12.95,0,25.03,6.97,31.52,18.19l-15.75,9.12c-3.25-5.62-9.29-9.1-15.77-9.1c-10.04,0-18.2,8.16-18.2,18.2c0,10.03,8.16,18.2,18.2,18.2c6.48,0,12.52-3.49,15.77-9.1l15.75,9.12C79.63,90.87,67.55,97.84,54.6,97.84L54.6,97.84L54.6,97.84z"
                    fill="#000000"
                />
            </svg>
        ),
        cpp_language: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 109.19 122.88"
                fill="currentColor"
                width="80%"
                height="80%"
            >
                <path
                    d="M107.81,92.16c0.86-1.48,1.39-3.16,1.39-4.66V35.38c0-1.5-0.53-3.17-1.39-4.66L54.6,61.44L107.81,92.16L107.81,92.16z"
                    fill="currentColor"
                />
                <path
                    d="M59.33,121.75l45.14-26.06c1.3-0.75,2.48-2.05,3.34-3.53L54.6,61.44L1.39,92.16c0.86,1.48,2.04,2.78,3.34,3.53l45.14,26.06C52.47,123.26,56.73,123.26,59.33,121.75L59.33,121.75z"
                    fill="currentColor"
                />
                <path
                    d="M107.81,30.72c-0.86-1.48-2.04-2.78-3.34-3.53L59.33,1.13c-2.6-1.5-6.86-1.5-9.46,0L4.73,27.19C2.13,28.69,0,32.37,0,35.38V87.5c0,1.5,0.53,3.17,1.39,4.66L54.6,61.44L107.81,30.72L107.81,30.72z"
                    fill="currentColor"
                />
                <path
                    d="M54.6,97.84c-20.07,0-36.4-16.33-36.4-36.4c0-20.07,16.33-36.4,36.4-36.4c12.95,0,25.03,6.97,31.52,18.19l-15.75,9.12c-3.25-5.62-9.29-9.1-15.77-9.1c-10.04,0-18.2,8.16-18.2,18.2c0,10.03,8.16,18.2,18.2,18.2c6.48,0,12.52-3.49,15.77-9.1l15.75,9.12C79.63,90.87,67.55,97.84,54.6,97.84L54.6,97.84z"
                    fill="#000000"
                />
                <polygon
                    points="91,59.42 86.95,59.42 86.95,55.37 82.91,55.37 82.91,59.42 78.86,59.42 78.86,63.46 82.91,63.46 82.91,67.51 86.95,67.51 86.95,63.46 91,63.46 91,59.42"
                    fill="#000000"
                />
                <polygon
                    points="106.16,59.42 102.12,59.42 102.12,55.37 98.07,55.37 98.07,59.42 94.03,59.42 94.03,63.46 98.07,63.46 98.07,67.51 102.12,67.51 102.12,63.46 106.16,63.46 106.16,59.42"
                    fill="#000000"
                />
            </svg>
        ),
        python_language: (
            <svg
                width="80%"
                height="80%"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="currentColor"
            >
                <g id="SVGRepo_iconCarrier">
                    <title>python [#127]</title>
                    <desc>Created with Sketch.</desc>
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7599.000000)" fill="currentColor">
                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                <path d="M296.744,7457.45798 C296.262,7457.45798 295.872,7457.06594 295.872,7456.58142 C295.872,7456.0969 296.262,7455.70587 296.744,7455.70587 C297.226,7455.70587 297.616,7456.0969 297.616,7456.58142 C297.616,7457.06594 297.226,7457.45798 296.744,7457.45798 M294.072,7459 C299.15,7459 298.833,7456.78649 298.833,7456.78649 L298.827,7454.49357 L293.982,7454.49357 L293.982,7453.80499 L300.751,7453.80499 C300.751,7453.80499 304,7454.17591 304,7449.02614 C304,7443.87636 301.165,7444.0583 301.165,7444.0583 L299.472,7444.0583 L299.472,7446.44873 C299.472,7446.44873 299.563,7449.29855 296.682,7449.29855 L291.876,7449.29855 C291.876,7449.29855 289.176,7449.25533 289.176,7451.9222 L289.176,7456.33112 C289.176,7456.33112 288.766,7459 294.072,7459 M291.257,7440.54202 C291.739,7440.54202 292.128,7440.93406 292.128,7441.41858 C292.128,7441.9031 291.739,7442.29413 291.257,7442.29413 C290.775,7442.29413 290.385,7441.9031 290.385,7441.41858 C290.385,7440.93406 290.775,7440.54202 291.257,7440.54202 M293.928,7439 C288.851,7439 289.168,7441.21351 289.168,7441.21351 L289.174,7443.50643 L294.019,7443.50643 L294.019,7444.19501 L287.249,7444.19501 C287.249,7444.19501 284,7443.82409 284,7448.97386 C284,7454.12364 286.836,7453.9417 286.836,7453.9417 L288.528,7453.9417 L288.528,7451.55127 C288.528,7451.55127 288.437,7448.70145 291.319,7448.70145 L296.124,7448.70145 C296.124,7448.70145 298.824,7448.74467 298.824,7446.0778 L298.824,7441.66888 C298.824,7441.66888 299.234,7439 293.928,7439" />
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        ),
        javascript_language: (
            <svg
                fill="currentColor"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="60%"
                height="60%"
                viewBox="0 0 512 512"
                enableBackground="new 0 0 512 512"
                xmlSpace="preserve"
            >
                <g id="SVGRepo_iconCarrier">
                    <g id="5151e0c8492e5103c096af88a51e75c7">
                        <path
                            display="inline"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.008,0.5C0.438,0.583,0.48,1.27,0.521,1.958 c0,169.668,0,339.31,0,508.974c169.364,1.135,340.808,0.162,510.979,0.486c0-170.309,0-340.61,0-510.918 C341.342,0.5,171.167,0.5,1.008,0.5z M259.893,452.167c-11.822,11.919-30.478,18.938-53.429,18.938 c-37.643,0-58.543-18.34-71.884-43.711c12.842-8.2,25.966-16.122,39.344-23.795c5.456,15.262,23.886,32.42,44.683,21.857 c13.183-6.699,11.661-27.01,11.661-49.054c0-45.773,0-98.578,0-139.872c-0.042-0.688-0.083-1.375,0.482-1.458 c15.707,0,31.413,0,47.116,0c0,36.788,0,78.402,0,117.529C277.866,395.199,280.91,430.988,259.893,452.167z M470.696,409.917 c-2.674,39.884-35.243,61.063-79.17,61.188c-43.062,0.124-70.624-19.013-87.433-48.567c12.085-8.317,25.778-15.017,38.375-22.822 c10.08,15.761,27.537,30.91,53.429,28.652c16.131-1.406,34.856-14.555,24.285-34.482c-5.127-9.66-17.516-14.567-28.656-19.425 c-35.352-15.424-76.828-29.571-72.861-84.992c1.327-18.514,9.852-31.525,20.889-40.796c11.311-9.5,26.46-15.867,46.629-16.511 c36.629-1.173,56.723,15.12,70.429,37.884c-11.664,8.891-24.514,16.608-37.401,24.281c-4.229-12.995-24.644-25.658-41.772-17.969 c-7.789,3.493-14.788,13.761-10.684,26.224c3.66,11.115,18.589,17.199,30.599,22.344 C433.706,340.486,474.331,355.693,470.696,409.917z"
                        />
                    </g>
                </g>
            </svg>
        ),
        assembly_language: (
            <svg
                fill="currentColor"
                width="90%"
                height="90%"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="SVGRepo_iconCarrier">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.5 9C7.5 8.17157 8.17157 7.5 9 7.5H15C15.8284 7.5 16.5 8.17157 16.5 9V15C16.5 15.8284 15.8284 16.5 15 16.5H9C8.17157 16.5 7.5 15.8284 7.5 15V9ZM9 8.5C8.72386 8.5 8.5 8.72386 8.5 9V15C8.5 15.2761 8.72386 15.5 9 15.5H15C15.2761 15.5 15.5 15.2761 15.5 15V9C15.5 8.72386 15.2761 8.5 15 8.5H9Z"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.5 3C10.7761 3 11 3.22386 11 3.5V6.5C11 6.77614 10.7761 7 10.5 7C10.2239 7 10 6.77614 10 6.5V3.5C10 3.22386 10.2239 3 10.5 3Z"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.5 3C13.7761 3 14 3.22386 14 3.5V6.5C14 6.77614 13.7761 7 13.5 7C13.2239 7 13 6.77614 13 6.5V3.5C13 3.22386 13.2239 3 13.5 3Z"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 13.5C3 13.2239 3.22386 13 3.5 13H6.5C6.77614 13 7 13.2239 7 13.5C7 13.7761 6.77614 14 6.5 14H3.5C3.22386 14 3 13.7761 3 13.5Z"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17 13.5C17 13.2239 17.2239 13 17.5 13H20.5C20.7761 13 21 13.2239 21 13.5C21 13.7761 20.7761 14 20.5 14H17.5C17.2239 14 17 13.7761 17 13.5Z"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 10.5C3 10.2239 3.22386 10 3.5 10H6.5C6.77614 10 7 10.2239 7 10.5C7 10.7761 6.77614 11 6.5 11H3.5C3.22386 11 3 10.7761 3 10.5Z"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17 10.5C17 10.2239 17.2239 10 17.5 10H20.5C20.7761 10 21 10.2239 21 10.5C21 10.7761 20.7761 11 20.5 11H17.5C17.2239 11 17 10.7761 17 10.5Z"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.5 17C10.7761 17 11 17.2239 11 17.5V20.5C11 20.7761 10.7761 21 10.5 21C10.2239 21 10 20.7761 10 20.5V17.5C10 17.2239 10.2239 17 10.5 17Z"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.5 17C13.7761 17 14 17.2239 14 17.5V20.5C14 20.7761 13.7761 21 13.5 21C13.2239 21 13 20.7761 13 20.5V17.5C13 17.2239 13.2239 17 13.5 17Z"
                    />
                </g>
            </svg>
        ),
        programming_languages: (
            <svg
                fill="currentColor"
                height="70%"
                width="70%"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
            >
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M282.503,149.97c-11.43-2.858-23.013,4.092-25.87,15.522l-42.667,170.667c-2.858,11.43,4.092,23.013,15.522,25.87 s23.013-4.092,25.87-15.522l42.667-170.667C300.883,164.41,293.933,152.828,282.503,149.97z"
                    />
                    <path
                        d="M170.662,234.667V192c11.782,0,21.333-9.551,21.333-21.333c0-11.782-9.551-21.333-21.333-21.333 c-25.201,0-42.667,17.466-42.667,42.667v33.83l-15.085,15.085c-8.331,8.331-8.331,21.839,0,30.17l15.085,15.085V320 c0,25.201,17.466,42.667,42.667,42.667c11.782,0,21.333-9.551,21.333-21.333c0-11.782-9.551-21.333-21.333-21.333v-42.667 c0-5.658-2.248-11.084-6.248-15.085L158.166,256l6.248-6.248C168.415,245.751,170.662,240.325,170.662,234.667z"
                    />
                    <path
                        d="M383.996,225.83V192c0-25.201-17.466-42.667-42.667-42.667c-11.782,0-21.333,9.551-21.333,21.333 c0,11.782,9.551,21.333,21.333,21.333v42.667c0,5.658,2.248,11.084,6.248,15.085l6.248,6.248l-6.248,6.248 c-4.001,4.001-6.248,9.427-6.248,15.085V320c-11.782,0-21.333,9.551-21.333,21.333c0,11.782,9.551,21.333,21.333,21.333 c25.201,0,42.667-17.466,42.667-42.667v-33.83l15.085-15.085c8.331-8.331,8.331-21.839,0-30.17L383.996,225.83z"
                    />
                    <path
                        d="M426.731,0H85.269C38.181,0,0,38.181,0,85.269v341.461C0,473.819,38.181,512,85.269,512h341.461 C473.819,512,512,473.819,512,426.731V85.269C512,38.181,473.819,0,426.731,0z M469.333,426.731 c0,23.525-19.078,42.603-42.603,42.603H85.269c-23.525,0-42.603-19.078-42.603-42.603V85.269 c0-23.525,19.078-42.603,42.603-42.603h341.461c23.525,0,42.603,19.078,42.603,42.603V426.731z"
                    />
                </g>
            </svg>
        ),
        reverse_eng: (
            <svg xmlns="http://www.w3.org/2000/svg" width="80%" height="80%" viewBox="0 0 2048 2048">
                <path fill="#FFA726" d="M255.999 539.826h1536v968.348h-1536V539.826zm1469.22 174.349H322.779v727.217h1402.44V714.175z" />
                <path fill="#FFF3E0" d="M322.781 714.174v727.216H1725.22V714.174z" />
                <path fill="#EC407A" d="M1318.75 1160.92c-17.956 67.018-57.339 123.855-109.597 163.955-52.226 40.074-117.28 63.389-186.623 63.389-84.69 0-161.365-34.33-216.866-89.832-55.501-55.5-89.831-132.176-89.831-216.866h50.087c0 70.863 28.722 135.017 75.158 181.452 46.435 46.435 110.59 75.159 181.452 75.159 58.135 0 112.616-19.5 156.297-53.019 43.648-33.491 76.562-81.036 91.596-137.15l48.327 12.912z" />
                <path fill="#EC407A" d="m664.661 1121.95 50.519-61.48 21.115-25.69 25.711 21.13 61.478 50.52z" />
                <path fill="#F06292" d="M729.254 994.644c17.956-67.017 57.339-123.854 109.597-163.955 52.226-40.072 117.28-63.388 186.623-63.388 84.69 0 161.365 34.33 216.865 89.832 55.501 55.5 89.831 132.176 89.831 216.866h-50.087c0-70.863-28.722-135.017-75.158-181.453-46.434-46.435-110.588-75.157-181.451-75.157-58.135 0-112.616 19.5-156.297 53.017-43.648 33.492-76.562 81.037-91.596 137.152l-48.327-12.914z" />
                <path fill="#EC407A" d="m1383.34 1033.61-50.52 61.48-21.11 25.69-25.72-21.13-61.47-50.51z" />
                <path fill="#78909C" d="M1001.75 877.921h44.497l9.661 67.626c25.876 6.222 48.87 19.842 66.623 38.496l63.427-25.46 22.25 38.536-53.732 42.176a135.977 135.977 0 0 1 5.531 38.486c0 13.368-1.938 26.282-5.532 38.486l53.733 42.177-22.248 38.536-63.42-25.457c-17.755 18.658-40.755 32.28-66.634 38.502l-9.658 67.618h-44.498l-9.661-67.626c-25.876-6.222-48.87-19.843-66.623-38.496l-63.427 25.46-22.25-38.537 53.73-42.176a136.019 136.019 0 0 1-5.53-38.486c0-13.37 1.935-26.283 5.53-38.487l-53.73-42.174 22.248-38.537 63.43 25.46c17.753-18.654 40.746-32.274 66.622-38.496l9.661-67.627zm-33.312 199.86c0 30.686 24.875 55.562 55.562 55.562 30.684 0 55.56-24.876 55.56-55.562 0-30.685-24.876-55.562-55.56-55.562-30.686 0-55.562 24.877-55.562 55.562z" />
            </svg>
        ),
        mariadb: (
            <svg
                fill="currentColor"
                width="80%"
                height="80%"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor" // Ensures it uses the current text color for the stroke
                strokeWidth="2" // Thicker stroke
            >
                <g id="SVGRepo_iconCarrier">
                    <title>mariadb</title>
                    <path d="M29.942 6.518c-0.597 0.293-1.3 0.465-2.042 0.465-0.017 0-0.034-0-0.051-0l0.003 0c-0.543 0-1.064 0.096-1.546 0.271l0.032-0.010c-1.052 0.391-1.916 1.082-2.513 1.969l-0.012 0.018c-0.495 0.693-1.011 1.505-1.487 2.343l-0.074 0.142c-0.382 0.63-0.759 1.169-1.168 1.681l0.024-0.031c-0.701 0.866-1.6 1.545-2.63 1.971l-0.044 0.016c-1.369 0.617-3.070 1.245-4.818 1.767l-0.308 0.079c-1.341 0.441-2.665 0.922-2.958 1.080-1.109 0.603-2.030 1.418-2.737 2.398l-0.016 0.024c-1.253 1.65-1.215 1.641-3.801 1.183q-0.421-0.051-0.844-0.079c-0.12-0.026-0.258-0.041-0.399-0.041-0.483 0-0.925 0.173-1.268 0.461l0.003-0.003-0.284 0.269 0.221 0.11c0.268 0.167 0.496 0.331 0.714 0.508l-0.013-0.010c0.202 0.167 0.426 0.328 0.661 0.473l0.026 0.015c0.089 0.041 0.164 0.084 0.236 0.131l-0.007-0.004c-0.078 0.169-0.173 0.314-0.287 0.443l0.002-0.002c-0.544 0.726-0.741 1.088-0.717 1.31 0.024 0.205 0.040 0.212 0.537 0.212 0.027 0.001 0.059 0.001 0.091 0.001 0.533 0 1.043-0.096 1.515-0.271l-0.030 0.010c1.352-0.551 2.496-1.138 3.582-1.809l-0.103 0.059c0.704-0.485 1.508-0.922 2.358-1.271l0.086-0.031c0.102-0.025 0.442-0.087 0.742-0.142 0.42-0.055 0.906-0.087 1.4-0.087 0.647 0 1.282 0.054 1.899 0.159l-0.067-0.009c0.135 0.016 0.466 0.056 0.75 0.080 0.208 0.014 0.402 0.048 0.587 0.1l-0.020-0.005c0.033 0.015 0.592 0.046 1.247 0.070 1.167 0.032 1.38 0.009 1.625-0.236 0.256-0.353 0.467-0.761 0.613-1.199l0.009-0.032c0.261-0.804 0.521-1.151 0.457-0.615-0.1 1.117-0.418 2.14-0.912 3.055l0.021-0.042c-0.351 0.662-0.738 1.234-1.179 1.758l0.012-0.015c-0.402 0.434-0.394 0.45 0.11 0.394 0.991-0.155 1.876-0.516 2.641-1.039l-0.022 0.014c1.225-0.975 2.167-2.255 2.717-3.727l0.019-0.059c0.134-0.337 0.275-0.275 0.229 0.104-0.016 0.117-0.047 0.394-0.071 0.622l-0.039 0.41 0.441-0.252c1.245-0.867 2.178-2.107 2.644-3.555l0.014-0.049c0.473-1.33 0.936-2.995 1.294-4.699l0.047-0.269c0.106-0.524 0.223-0.961 0.363-1.387l-0.024 0.085c0.092-0.425 0.305-0.791 0.599-1.071l0.001-0.001c0.37-0.353 0.768-0.684 1.189-0.987l0.033-0.023c0.63-0.358 1.134-0.87 1.473-1.486l0.010-0.020c0.16-0.307 0.254-0.671 0.254-1.057 0-0.227-0.033-0.447-0.093-0.655l0.004 0.016c-0.165-0.252-0.355-0.245-0.954 0.008z"></path>
                </g>
            </svg>

        ),
        sass_scss: (
            <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
                width="80%"
                height="80%"
            >
                <g id="SVGRepo_iconCarrier">
                    <title>file_type_scss</title>
                    <path d="M16.171,18.7c-.481.221-1.008.509-2.063,1.088-.4.225-.818.45-1.207.662-.027-.027-.055-.061-.082-.089-2.087-2.23-5.947-3.805-5.783-6.8.061-1.091.436-3.955,7.413-7.433,5.742-2.83,10.311-2.046,11.1-.307C26.683,8.3,23.1,12.913,17.17,13.582a4.469,4.469,0,0,1-3.751-.948c-.314-.341-.361-.361-.477-.293-.191.1-.068.409,0,.586a3.5,3.5,0,0,0,2.141,1.684,11.4,11.4,0,0,0,6.956-.689c3.594-1.391,6.4-5.258,5.578-8.5-.825-3.287-6.281-4.371-11.443-2.537a26,26,0,0,0-8.79,5.047c-2.844,2.66-3.294,4.972-3.11,5.94.662,3.437,5.4,5.674,7.3,7.331-.1.055-.184.1-.259.143-.948.471-4.562,2.36-5.463,4.358-1.023,2.264.164,3.887.948,4.105a5.832,5.832,0,0,0,6.281-2.544,6.3,6.3,0,0,0,.559-5.8,5.03,5.03,0,0,1,.716-.477c.484-.286.945-.568,1.354-.786l0,0a10.475,10.475,0,0,1,4.475-.989c3.246.382,3.887,2.407,3.764,3.26a2.157,2.157,0,0,1-1.03,1.459c-.225.143-.3.191-.28.293.027.15.136.143.327.116a2.535,2.535,0,0,0,1.766-2.257c.1-2-1.807-4.194-5.183-4.174a7.753,7.753,0,0,0-2.946.587q-.225.093-.437.2Zm-4.825,7.839c-1.078,1.173-2.578,1.616-3.226,1.241-.7-.4-.423-2.135.9-3.376a17.18,17.18,0,0,1,2.53-1.889c.157-.1.389-.232.668-.4.048-.027.075-.041.075-.041l.164-.1A4.658,4.658,0,0,1,11.346,26.539Z" style={{ fill: "currentColor" }} />
                </g>
            </svg>
        ),
        pandas: (
            <svg
                fill="currentColor"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeWidth="1"
                width="75%"
                height="75%"
            >
                <g id="SVGRepo_iconCarrier">
                    <title>pandas</title>
                    <path d="M11.849 2.813h3.269v6.787h-3.268zM11.849 16.755h3.269v6.789h-3.268zM11.849 11.582h3.269v3.203h-3.268zM6.598 8.393h3.268v22.563h-3.269zM16.992 22.356h3.269v6.787h-3.269zM16.992 8.401h3.269v6.787h-3.269zM16.992 17.171h3.269v3.203h-3.269zM22.134 1.045h3.269v22.563h-3.269z" style={{ fill: "currentColor" }} />
                </g>
            </svg>
        ),
        matplotlib: (
            <svg
                fill="currentColor"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeWidth="0"
                width="70%"
                height="70%"
            >
                <g id="SVGRepo_iconCarrier">
                    <path d="M29.5 7c-1.381 0-2.5 1.12-2.5 2.5 0 0.284 0.058 0.551 0.144 0.805l-6.094 5.247c-0.427-0.341-0.961-0.553-1.55-0.553-0.68 0-1.294 0.273-1.744 0.713l-4.774-2.39c-0.093-1.296-1.162-2.323-2.482-2.323-1.38 0-2.5 1.12-2.5 2.5 0 0.378 0.090 0.732 0.24 1.053l-4.867 5.612c-0.273-0.102-0.564-0.166-0.873-0.166-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5c1.381 0 2.5-1.119 2.5-2.5 0-0.332-0.068-0.649-0.186-0.939l4.946-5.685c0.236 0.073 0.48 0.124 0.74 0.124 0.727 0 1.377-0.316 1.834-0.813l4.669 2.341c0.017 1.367 1.127 2.471 2.497 2.471 1.381 0 2.5-1.119 2.5-2.5 0-0.044-0.011-0.086-0.013-0.13l6.503-5.587c0.309 0.137 0.649 0.216 1.010 0.216 1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5z" />
                </g>
            </svg>

        ),
        virtualization_tech: (
            <svg
                fill="currentColor"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeWidth="0"
                width="70%"
                height="70%"
            >
                <g id="SVGRepo_iconCarrier">
                    <path d="M7.563 9.031v-2.474l4.219-2.432-7.036-4.12-4.214 2.464v3.016l9.495 23.063 5.974 3.448v-8.661l2.807-1.635-0.031-0.016 5.661-12.651v-2.474l7.031-4.089-4.219-2.464-7.031 4.12v2.813l-4.219 9.844v3.286l-2.813 1.63zM11.781 4.151l-0.031-0.016-4.188 2.422v2.474l5.625 12.667 2.813-1.385v-3.531l-4.219-9.844zM24.438 6.557v2.474l-5.625 12.135-2.813 1.943v8.885l6.026-3.479 9.443-23.115v-2.932z" />
                </g>
            </svg>

        ),
        sqlalchemy: (
            <svg
                fill="currentColor"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeWidth="0"
                width="80%"
                height="80%"
            >
                <g id="SVGRepo_iconCarrier">
                    <title>file_type_sql</title>
                    <path
                        d="M8.562,15.256A21.159,21.159,0,0,0,16,16.449a21.159,21.159,0,0,0,7.438-1.194c1.864-.727,2.525-1.535,2.525-2V9.7a10.357,10.357,0,0,1-2.084,1.076A22.293,22.293,0,0,1,16,12.078a22.36,22.36,0,0,1-7.879-1.3A10.28,10.28,0,0,1,6.037,9.7v3.55C6.037,13.724,6.7,14.528,8.562,15.256Z"
                    />
                    <path
                        d="M8.562,21.961a15.611,15.611,0,0,0,2.6.741A24.9,24.9,0,0,0,16,23.155a24.9,24.9,0,0,0,4.838-.452,15.614,15.614,0,0,0,2.6-.741c1.864-.727,2.525-1.535,2.525-2v-3.39a10.706,10.706,0,0,1-1.692.825A23.49,23.49,0,0,1,16,18.74a23.49,23.49,0,0,1-8.271-1.348,10.829,10.829,0,0,1-1.692-.825V19.96C6.037,20.426,6.7,21.231,8.562,21.961Z"
                    />
                    <path
                        d="M16,30c5.5,0,9.963-1.744,9.963-3.894V23.269a10.5,10.5,0,0,1-1.535.762l-.157.063A23.487,23.487,0,0,1,16,25.445a23.422,23.422,0,0,1-8.271-1.351c-.054-.02-.106-.043-.157-.063a10.5,10.5,0,0,1-1.535-.762v2.837C6.037,28.256,10.5,30,16,30Z"
                    />
                    <ellipse
                        cx="16"
                        cy="5.894"
                        rx="9.963"
                        ry="3.894"
                    />
                </g>
            </svg>

        ),
        linux_kernel_api: (
            <svg
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"  // Use currentColor for fill
            stroke="currentColor" // Use currentColor for stroke
            strokeWidth="2"       // Make the stroke thicker
          >
            <g id="SVGRepo_iconCarrier">
              <defs>
                <style>
                  {`.a { fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; }`}
                </style>
              </defs>
              <path
                className="a"
                d="M16.2182,35.9c-3.1368,0-6.8982,1.496-7.2988,5.6766a.916.916,0,0,0,.9061,1.0025h11.97A.9.9,0,0,0,22.7,41.643C22.6175,39.8048,21.7865,35.9,16.2182,35.9Z"
              />
              <path
                className="a"
                d="M18.0508,20.564c-1.35,1.0368-7.3687,7.51-4.3595,15.6667"
              />
              <path
                className="a"
                d="M31.7818,35.9c3.1368,0,6.8982,1.496,7.2988,5.6766a.916.916,0,0,1-.9061,1.0025h-11.97A.9.9,0,0,1,25.3,41.643C25.3825,39.8048,26.2135,35.9,31.7818,35.9Z"
              />
              <path
                className="a"
                d="M35.0148,36.4556c3.1848-2.8438,2.7468-7.5246,2.7468-8.7785,2.8935.82,5.0306,2.9709,5.5941,2.17,1.3744-1.9531-7.5193-7.5461-7.6918-10.8989C35.4951,15.6692,35.1706,5.4214,24,5.4214S12.5049,15.6692,12.3361,18.9484c-.1725,3.3528-9.0662,8.9458-7.6918,10.8989.5635.8007,2.7006-1.35,5.5941-2.17,0,1.2539-.438,5.9347,2.7468,8.7785"
              />
              <path
                className="a"
                d="M29.2763,19.8324c1.9318,1.5032,8.0416,8.242,5.0324,16.3983"
              />
              <path
                className="a"
                d="M24,24.8431l3.9479-4.2791c-.3858-1.0127-1.712-1.929-3.9479-1.929s-3.5621.9163-3.9479,1.929Z"
              />
              <path
                className="a"
                d="M20.0521,20.564c-3.424.5063-3.9062-2.7247-3.9062-4.7019,0-2.7006,1.4467-4.4367,3.9062-4.4367S23.79,14.7529,23.79,16.3443A3.8486,3.8486,0,0,1,23.181,18.68"
              />
              <path
                className="a"
                d="M27.7205,20.1334c.6751.0482,3.9538-.3892,3.9538-3.331s-1.76-3.7615-4.1232-3.7615a3.7861,3.7861,0,0,0-3.8164,2.6682"
              />
              <path
                className="a"
                d="M22.7012,41.4815a6.8371,6.8371,0,0,0,2.6076,0"
              />
              <circle className="b" cx="22.1579" cy="16.5888" r="0.75" />
              <circle className="b" cx="25.5497" cy="16.5888" r="0.75" />
            </g>
          </svg>
        )
    };

    return icons[name] || (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" />
        </svg>
    );
};

export default SkillTree;