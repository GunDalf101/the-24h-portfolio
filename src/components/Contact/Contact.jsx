import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FantasyBackground = () => {
    return (
        <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black/50 to-purple-900/20" />

            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
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
        </div>
    );
};

const FormField = ({ label, type, value, onChange, icon, required }) => {
    const inputClasses = `
      w-full bg-purple-900/30 border border-purple-500/30 rounded-lg px-4 py-3 pl-12
      text-purple-100 placeholder-purple-400/50
      focus:outline-none focus:border-purple-400/50 focus:ring-2 focus:ring-purple-500/20
      transition-all duration-300
    `;

    return (
        <div className="relative">
            <label className="block text-purple-300 text-sm mb-2 font-medievalsharp">
                {label} {required && <span className="text-red-400">*</span>}
            </label>
            <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">
                    {icon}
                </span>
                {type === 'textarea' ? (
                    <textarea
                        value={value}
                        onChange={onChange}
                        className={`${inputClasses} h-32 resize-none`}
                        placeholder={`Enter ${label.toLowerCase()}...`}
                        required={required}
                    />
                ) : (
                    <input
                        type={type}
                        value={value}
                        onChange={onChange}
                        className={inputClasses}
                        placeholder={`Enter ${label.toLowerCase()}...`}
                        required={required}
                    />
                )}
            </div>
        </div>
    );
};

const SocialLink = ({ icon, href, label }) => (
    <motion.a
        href={href}
        className="relative group"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
    >
        <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-md group-hover:bg-purple-500/30 transition-all duration-300" />
        <div className="relative p-3 rounded-full border border-purple-500/30 group-hover:border-purple-500/50 text-purple-400 hover:text-purple-300 transition-colors duration-300">
            <span className="text-2xl">{icon}</span>
            <span className="sr-only">{label}</span>
        </div>
    </motion.a>
);

const SparkleEffect = () => (
    <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
            background: [
                "radial-gradient(circle, rgba(147,51,234,0.2) 0%, transparent 50%)",
                "radial-gradient(circle, rgba(147,51,234,0.2) 100%, transparent 50%)",
            ]
        }}
        transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
        }}
    />
);

const ContactInfo = () => {
    return (
        <div className="w-full md:w-1/3">
            <motion.div
                className="h-full relative bg-purple-900/20 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
            >
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-medievalsharp text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
                            Contact Details
                        </h3>
                        <div className="space-y-4">
                            <ContactDetail icon="📧" label="Email" value="mouadbennani6@gmail.com" />
                            <ContactDetail icon="📱" label="Phone" value="+(212) 626-018322" />
                            <ContactDetail icon="📍" label="Location" value="Mystic Tower, Fantasy Realm" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-medievalsharp text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
                            Connect With Us
                        </h3>
                        <div className="flex space-x-4">
                            <SocialLink icon="🔮" href="https://www.linkedin.com/in/mouad-bennani-a4302a208/" label="LinkedIn" />
                            <SocialLink icon="📜" href="https://github.com/GunDalf101" label="GitHub" />
                            <SocialLink icon="⚔️" href="https://x.com/GunDalf382641" label="Twitter" />
                        </div>
                    </div>

                    <div className="absolute bottom-4 right-4 opacity-10">
                        <div className="text-6xl">✨</div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const ContactDetail = ({ icon, label, value }) => (
    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-800/20 transition-colors duration-300">
        <span className="text-xl">{icon}</span>
        <div>
            <p className="text-purple-400 text-sm">{label}</p>
            <p className="text-purple-200">{value}</p>
        </div>
    </div>
);

const TimeDetail = ({ day, hours }) => (
    <div className="flex justify-between items-center p-3 rounded-lg hover:bg-purple-800/20 transition-colors duration-300">
        <span className="text-purple-400">{day}</span>
        <span className="text-purple-200">{hours}</span>
    </div>
);

// ContactForm.jsx (Right Section)
const ContactForm = ({ formState, setFormState, isSubmitting, setIsSubmitting }) => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: 'f8a80196-c90b-4d5e-a602-b1e994c273de', // Replace with your actual access key
                    name: formState.name,
                    email: formState.email,
                    message: formState.message,
                    subject: "New Contact Form Submission",
                    from_name: "GunDalf's Portfolio"
                })
            });

            const data = await response.json();

            if (data.success) {
                setSuccess(true);
                setFormState({ name: '', email: '', message: '' });
            } else {
                setError('Something went wrong. Please try again.');
            }
        } catch (error) {
            setError('Failed to send message. Please try again.');
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full md:w-2/3">
            <motion.div
                className="h-full relative bg-purple-900/20 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
            >
                <h3 className="text-2xl font-medievalsharp text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
                    Send a Message
                </h3>

                {success ? (
                    <div className="text-green-400 text-center p-4 bg-green-900/20 rounded-lg">
                        Message sent successfully! ✨
                    </div>
                ) : (
                    <form onSubmit={handleFormSubmit} className="relative space-y-6">
                        {error && (
                            <div className="text-red-400 text-center p-4 bg-red-900/20 rounded-lg">
                                {error}
                            </div>
                        )}

                        <FormField
                            label="Your Name"
                            type="text"
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            icon="👤"
                            required
                        />
                        <FormField
                            label="Your Email"
                            type="email"
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            icon="✉️"
                            required
                        />
                        <FormField
                            label="Your Message"
                            type="textarea"
                            value={formState.message}
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            icon="📜"
                            required
                        />

                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medievalsharp text-white relative group overflow-hidden disabled:opacity-70"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <SparkleEffect />
                            <span className="relative flex items-center justify-center gap-2">
                                {isSubmitting ? 'Casting Spell...' : 'Send Message'} ✨
                            </span>
                        </motion.button>
                    </form>
                )}

                <div className="absolute top-4 right-4 opacity-10">
                    <div className="text-6xl">📜</div>
                </div>
            </motion.div>
        </div>
    );
};
const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <div className="relative min-h-screen overflow-hidden py-20">
            <FantasyBackground />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/75 to-black/90 z-[1]" />

            <div className="container mx-auto px-4 relative z-[2]">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-medievalsharp text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 mb-4">
                        Open the Portal
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Send your message through the ethereal planes
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-8">
                    <ContactInfo />
                    <ContactForm
                        formState={formState}
                        setFormState={setFormState}
                        isSubmitting={isSubmitting}
                        setIsSubmitting={setIsSubmitting}
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;