"use client";

import React, { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import {
    SiPython,
    SiJavascript,
    SiPostman,
    SiMongodb,
    SiTensorflow,
    SiArduino,
    SiFlask,
    SiFirebase,
    SiGit,
    SiStreamlit,
    SiLangchain,
    SiHtml5,
    SiCss3,
    SiMysql,
    SiNodedotjs,
    SiLinux,
    SiPowers,
    SiCplusplus,
    SiFlutter,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { TbPrompt } from "react-icons/tb";
import { HiMenu, HiX } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

interface CardProps {
    children: ReactNode;
    className?: string;
}

// Animation variants
const cardVariants = {
    offscreen: { opacity: 0, y: 20 },
    onscreen: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const listItemVariants = {
    offscreen: { opacity: 0, x: -20 },
    onscreen: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.08, duration: 0.3, ease: "easeOut" },
    }),
};

// Card component for project display
function Card({ children, className = "" }: CardProps) {
    return (
        <motion.div
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            className={`rounded-xl border border-dark-600 bg-dark-800 p-6 shadow-xl shadow-dark-900/25 transition-all duration-300 hover:shadow-2xl hover:border-dark-500 hover:scale-[1.02] ${className}`}>
            {children}
        </motion.div>
    );
}

interface CardContentProps {
    children: ReactNode;
    className?: string;
}

// CardContent component for inner content of cards
function CardContent({ children, className = "" }: CardContentProps) {
    return <div className={className}>{children}</div>;
}

interface ButtonProps {
    children: ReactNode;
    variant?: "default" | "outline" | "accent" | "secondary" | "highlight";
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

// Button component with variants
function Button({ children, variant = "default", className = "", onClick, type }: ButtonProps) {
    const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-dark-900";
    const variants = {
        default: "bg-accent-500 hover:bg-accent-600 text-black shadow-sm hover:shadow-md hover:scale-105",
        outline: "bg-gray-800 hover:bg-gray-800 text-white shadow-sm hover:shadow-md hover:scale-105",
        accent: "bg-dark-800 hover:bg-dark-700 text-accent-400 shadow-sm hover:shadow-md hover:scale-105",
        secondary: "bg-dark-800 hover:bg-dark-700 text-dark-200 shadow-sm hover:shadow hover:scale-105",
        highlight: "bg-accent-500 hover:bg-accent-600 text-dark-100 shadow-sm hover:shadow-md hover:scale-105",
    };

    return (
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type={type} className={`${baseStyles} ${variants[variant]} ${className}`} onClick={onClick}>
            {children}
        </motion.button>
    );
}

// Header component
function Header() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#technical-skills" },
        { name: "Experiences", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    // Smooth scroll handler
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
        setMobileNavOpen(false); // close mobile nav on click
    };

    return (
        <header className="overflow-hidden text-white py-4 bg-dark-900 border-b border-dark-600 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6">
                <div className="flex-1 flex items-center justify-between">
                    <span className="font-bold text-lg text-accent-500">Sujit S</span>
                    {/* Hamburger for mobile */}
                    <button
                        className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-accent-500"
                        onClick={() => setMobileNavOpen(!mobileNavOpen)}
                        aria-label="Toggle navigation menu">
                        {mobileNavOpen ? <HiX className="w-7 h-7" /> : <HiMenu className="w-7 h-7" />}
                    </button>
                </div>
                {/* Desktop nav */}
                <nav className="hidden md:block flex-1">
                    <ul className="flex space-x-4 lg:space-x-8 items-center justify-end">
                        {navLinks.map((link, index) => (
                            <li key={index} className="align-middle">
                                <a
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="hover:underline text-slate-200 hover:text-blue-400 transition-colors text-base font-light cursor-pointer px-2 py-1 rounded">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            {/* Mobile nav dropdown */}
            {mobileNavOpen && (
                <nav className="md:hidden bg-dark-900 border-t border-dark-700 px-4 pb-4">
                    <ul className="flex flex-col space-y-2 mt-2">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="block w-full text-left hover:underline text-slate-200 hover:text-blue-400 transition-colors text-base font-light cursor-pointer px-2 py-2 rounded">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}

interface SkillBadgeProps {
    skill: string;
}

// Skill Badge Component
function SkillBadge({ skill }: SkillBadgeProps) {
    return (
        <motion.span whileHover={{ scale: 1.05 }} className="bg-gold-900/20 border border-gold-700 text-gold-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-gold-900/40 transition-colors">
            {skill}
        </motion.span>
    );
}

interface ExperienceCardProps {
    title: string;
    company: string;
    period: string;
    location: string;
    achievements: string[];
    certificateUrl?: string;
}

// Experience Card Component
function ExperienceCard({ title, company, period, location, achievements, certificateUrl }: ExperienceCardProps) {
    return (
        <motion.div
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-dark-800 border border-gold-800 rounded-xl p-6 shadow-xl shadow-gold-900/25 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative">
            <div className="flex flex-col sm:flex-row justify-between items-start mb-3 gap-2">
                <div>
                    <h3 className="text-xl font-semibold text-gold-100">{title}</h3>
                    <p className="text-gold-400 font-medium">{company}</p>
                    <p className="text-dark-400 text-sm">{location}</p>
                </div>
                <span className="bg-dark-700 text-dark-200 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">{period}</span>
            </div>
            <ul className="list-disc space-y-2 pl-6">
                {achievements.map((achievement, index) => (
                    <motion.li
                        key={index}
                        variants={listItemVariants}
                        custom={index}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.3 }}
                        className="text-gold-300 text-sm leading-relaxed break-words">
                        {achievement}
                    </motion.li>
                ))}
            </ul>
            {certificateUrl && (
                <a
                    href={certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block px-3 py-2 bg-blue-700 text-gold-100 rounded-lg font-semibold shadow hover:bg-blue-800 transition-all text-xs hover:underline w-full sm:w-auto text-center">
                    View Certificate
                </a>
            )}
        </motion.div>
    );
}

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    demoUrl: string;
    githubUrl: string;
    featured?: boolean;
    thumbnail: string;
    keyFeatures?: string[];
}

// Update ProjectCard
function ProjectCard({ title, description, technologies, demoUrl, githubUrl, featured = false, thumbnail, keyFeatures = [], fullDescription = "", setSelectedProject }: any) {
    const handleViewDetails = () => {
        setSelectedProject && setSelectedProject({ title, description, technologies, demoUrl, githubUrl, featured, thumbnail, keyFeatures, fullDescription });
    };
    return (
        <motion.div
            className={`rounded-xl border border-dark-600 bg-dark-800 p-6 shadow-xl shadow-dark-900/25 transition-all duration-300 hover:shadow-2xl hover:border-gold-400 hover:scale-[1.04] h-full flex flex-col justify-between`}
            whileHover={{ y: -8, boxShadow: "0 12px 32px 0 #facc1555" }}>
            <div>
                {thumbnail && (
                    <div className="w-full flex justify-center items-center mb-4">
                        <img src={thumbnail} alt={title + " thumbnail"} className="w-full max-w-[340px] h-48 object-cover rounded-lg shadow-md" />
                    </div>
                )}
                <h3 className="text-xl font-semibold text-gold-100 mb-2">{title}</h3>
                <p className="text-dark-400 mb-4 leading-relaxed line-clamp-3">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech: string, i: number) => (
                        <span key={tech} className="bg-dark-800 text-gold-300 px-2 py-1 rounded text-xs font-medium">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-between mt-4">
                <button className="px-4 py-2 bg-gold-500 text-blue-900 rounded-lg font-semibold hover:bg-gold-600 transition-all" onClick={handleViewDetails}>
                    View Details
                </button>
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-400 hover:text-gold-300 font-medium transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-gold-400 rounded mt-2"
                    aria-label={`View ${title} on GitHub`}>
                    <FaGithub className="w-6 h-6" />
                </a>
            </div>
        </motion.div>
    );
}

// Skill Progress Bar Component
interface SkillProgressBarProps {
    skill: string;
    level: number;
    icon: string | React.ReactNode;
}

function SkillProgressBar({ skill, level, icon }: SkillProgressBarProps) {
    return (
        <div className="mb-6">
            <div className="flex justify-between items-center mb-1">
                <div className="flex items-center gap-2">
                    <span className="text-gold-400">{typeof icon === "string" ? icon : icon}</span>
                    <span className="text-slate-200 font-medium">{skill}</span>
                </div>
                <span className="text-slate-400 text-sm">{level}%</span>
            </div>
            <div className="w-full bg-dark-700 rounded-full h-3 overflow-hidden">
                <motion.div
                    className="h-3 rounded-full shadow-md shadow-gold-400/30"
                    style={{
                        background: "linear-gradient(90deg, #facc15 0%, #a16207 100%)",
                        boxShadow: "0 0 8px 2px #facc15AA",
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                />
            </div>
        </div>
    );
}

function EducationSection() {
    return (
        <div className="space-y-6">
            <div>
                <span className="font-bold text-blue-600 block">B.Tech in Artificial Intelligence and Data Science</span>
                <span className="font-bold 600 block">Coimbatore Institute Of Technology</span>
                <span className="font-bold 600 block">Coimbatore, India</span>
                {/* <span className="font-bold text-gray-600 block">Keeping a CGPA of 9.13</span> */}
            </div>
            <div>
                <span className="font-bold text-blue-600 block">Higher Secondary Certificate</span>
                <span className="font-bold 700 block">SAV Balakrishna Matric Hr Sec School</span>
                <span className="font-bold 600 block">Tirunelveli, India</span>
            </div>
        </div>
    );
}

function CertificatesSection() {
    const certificates = [
        { name: "AWS Flash - Generative AI with Diffusion Models", link: "https://1drv.ms/b/c/61e9abcaf0253100/EdnoO7fLcFhMgrT-R_Nv_c8B7nwK2xWcyaft6c61qGsTFg?e=B2pZsT" },
        { name: "SQL & Relational Database", link: "https://courses.cognitiveclass.ai/certificates/88c5dd83aca24323b3601355c6a924a9" },
        { name: "Data Science", link: "https://courses.cognitiveclass.ai/certificates/76e5b1624fd74973a7563eb51fb7c735" },
        { name: "Introduction to Machine Learning Operations", link: "https://1drv.ms/b/c/61e9abcaf0253100/Ef4Qzw8V_NZClqLgtAcTMd8BfISoclM7Zm64u054lUCIPA?e=fesPqE" },
        { name: "Generative AI for All", link: "https://1drv.ms/b/c/61e9abcaf0253100/ETJtsMX6MNpNvKiC89TvE7gBNLBxVfielgZ2_CGClZtwDw?e=KvIhEH" },
        { name: "Foundations of Prompt Engineering", link: "https://1drv.ms/b/c/61e9abcaf0253100/ETSsDdafFNtBmXBf8gGiztoBxn-fMGENePSB-KYmmPCQ-g?e=HM9GYt" },
        { name: "Python for Data Science", link: "https://courses.cognitiveclass.ai/certificates/a3f219e81ed34f57aceb308f1fa9bdf8" },
    ];
    return (
        <ul className="list-disc list-inside">
            {certificates.map((cert) => (
                <li key={cert.name} className="font">
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-white-600 hover:text-blue-800">
                        {cert.name}
                    </a>
                </li>
            ))}
        </ul>
    );
}

// Utility to render heading with blue underline and second word blue
// Simplified to accept all standard heading props (including id)
interface BlueHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: string;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    className?: string;
}

function BlueHeading({ children, as = "h2", className = "", ...props }: BlueHeadingProps) {
    const words = children.trim().split(" ");
    if (words.length < 2) return React.createElement(as, { className, ...props }, children);
    return (
        <div className="w-full flex flex-col items-center">
            <div className="relative flex flex-col items-center w-full">
                {React.createElement(
                    as,
                    { className: `relative inline-block ${className}`, ...props },
                    <>
                        {words[0]} <span className="text-blue-400">{words[1]}</span> {words.slice(2).join(" ")}
                    </>
                )}
                <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="block h-2 w-32 bg-blue-500 rounded-full mt-1 origin-center mx-auto"
                    style={{ position: "relative" }}
                />
            </div>
            <div className="pt-10" />
        </div>
    );
}

export default function Home() {
    const [contactForm, setContactForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [selectedProject, setSelectedProject] = useState<any>(null);

    const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Contact form submitted:", contactForm);
        // Handle form submission here
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setContactForm({
            ...contactForm,
            [e.target.name]: e.target.value,
        });
    };

    const timelineData = [
        { year: "04/2023 – 06/2023", event: "Smart Lab Copilot - IoT prototype" },
        { year: "08/2024 – 09/2024", event: "Apartment Sales Prediction - EDA and Feature Engineering" },
        { year: "09/2024 – 10/2024", event: "Brain Tumor Detection - Deep Learning project" },
        { year: "01/2025", event: "IoT in Smart Hydroponics - IoT prototype" },
        { year: "08/2024 – present", event: "Digitizing Medical Reports for Enhanced User Interaction" },
    ];

    const projects = [
        {
            title: "Digitizing Medical Reports for Enhanced User Interaction",
            description:
                "This project transforms unstructured medical reports into an interactive, digitized format to improve accessibility and user engagement. It applies Optical Character Recognition (OCR), Natural Language Processing (NLP), and structured data mapping to extract, analyze, and visualize information from medical documents such as prescriptions, lab results, and discharge summaries.",
            keyFeatures: [
                "OCR-powered text extraction from scanned reports",
                "Named Entity Recognition (NER) for medical terms and test results",
                "Structuring and tagging key health indicators",
                "Interactive display using charts and expandable views",
                "Easily integrable with healthcare applications",
            ],
            technologies: ["Python", "Tesseract OCR", "SpaCy (Medical NLP Models)", "Streamlit / Flask", "Pandas / Matplotlib / Plotly"],
            fullDescription: `The digitized reports enable smarter queries, better patient understanding, and integration with healthcare dashboards for physicians.`,
            demoUrl: "#",
            githubUrl: "https://github.com/Sujit-S-2908/iCliniq",
            thumbnail: "/images/ehr.jpeg",
            featured: true,
        },
        {
            title: "IoT in Smart Hydroponics",
            description: "Reads water level and light intensity values using sensors. Sends data to Firebase real-time database, displays data using Flask-based Web UI.",
            technologies: ["IoT", "Firebase", "Flask"],
            demoUrl: "#",
            githubUrl: "https://github.com/Sujit-S-2908/Hydroponics-Flask",
            thumbnail: "/images/iot_hydro.jpg",
            featured: false,
        },
        {
            title: "Brain Tumour Detection using CNN",
            description:
                "This deep learning project aims to classify MRI brain scans and detect the presence of tumors using Convolutional Neural Networks (CNNs). The model is trained on annotated MRI images and learns to differentiate between tumor and non-tumor regions with high accuracy.",
            keyFeatures: [
                "End-to-end tumor detection pipeline from MRI scans",
                "CNN model trained on medical imaging datasets",
                "High accuracy and robustness against image noise",
                "Preprocessing for skull stripping and contrast enhancement",
                "Real-time prediction with visualization of scan outcomes",
            ],
            technologies: ["Python", "TensorFlow / Keras", "OpenCV / PIL", "Numpy / Matplotlib", "Scikit-learn (for metrics and evaluation)"],
            fullDescription: `The application has potential use in clinical decision support systems for radiologists and early-stage diagnostics.`,
            demoUrl: "#",
            githubUrl: "https://github.com/Sujit-S-2908/Brain-tumor-detection-using-cnn",
            thumbnail: "/images/brain.jpg",
            featured: false,
        },
        {
            title: "Apartment Sales Prediction (EDA)",
            description:
                "This project involves exploratory data analysis (EDA) and predictive modeling on real estate data to estimate apartment sale prices based on features such as location, square footage, number of rooms, and amenities.",
            keyFeatures: [
                "In-depth exploratory analysis with visual storytelling",
                "Detection of price-affecting attributes using correlation and regression",
                "Outlier and anomaly detection in sales data",
                "Price prediction using regression models",
                "Visual dashboards for comparative price trends",
            ],
            technologies: ["Python", "Pandas / NumPy", "Seaborn / Matplotlib / Plotly", "Scikit-learn (Linear Regression, Decision Trees)", "Jupyter Notebook"],
            fullDescription: `Aimed at real estate market insights, the project highlights patterns and trends that influence property valuation, supported by interactive visualizations and correlation heatmaps.`,
            demoUrl: "#",
            githubUrl: "https://github.com/Sujit-S-2908/EDA-project",
            thumbnail: "/images/eda.jpg",
            featured: false,
        },
        {
            title: "Smart Lab Copilot",
            description:
                "Reducing the utilization of computers where user is not present. Turning off the lab when no one is present (0 count). Reducing the ambient temperature(-25%) when the room heats up.",
            technologies: ["IoT"],
            demoUrl: "#",
            githubUrl: "#",
            thumbnail: "/images/iot_lab.png",
            featured: false,
        },
        {
            title: "Neural Style Transfer",
            description: "Combine the content of one image with the artistic style of another using deep learning.",
            technologies: ["Python", "Streamlit", "CUDA", "PyTorch", "OpenCV", "Numpy"],
            githubUrl: "https://github.com/Sujit-S-2908/NeuralStyleTransfer",
            demoUrl: "#",
            thumbnail: "/images/nst.jpg",
            keyFeatures: [
                "User-friendly Streamlit interface",
                "Customizable parameters for style transfer",
                "Multiple image formats supported",
                "Real-time processing with GPU acceleration",
                "High-quality output images",
            ],
            fullDescription: `This is a Streamlit web application that implements Neural Style Transfer, allowing users to combine the content of one image with the artistic style of another.\n\nThis application uses deep learning techniques to transfer the style of one image (like a famous painting) onto the content of another image (like a photograph). The implementation is based on the original Neural Style Transfer paper by Gatys et al. and uses pre-trained VGG networks (VGG16 and VGG19) to extract content and style features.`,
        },
        {
            title: "Full Stack Blog Website",
            description: "Modern blog platform with user authentication, comments, and rich text editing.",
            technologies: ["Python", "Flask", "React", "CSS/SCSS", "SQLAlchemy", "JWT", "REST API"],
            githubUrl: "https://github.com/Sudharshan-3904/BlogWebsiteFullStack",
            demoUrl: "#",
            thumbnail: "/images/blog.jpg",
            keyFeatures: [
                "User authentication and authorization",
                "Comment system for blog posts",
                "Rich text editor for blog posts",
                "Responsive design for all devices",
                "Search functionality for blog posts",
            ],
            fullDescription: `This is a full-stack blog website built with a React frontend and a Python/Flask backend. The application allows users to create, read, update, and delete blog posts, as well as manage user authentication and authorization.\n\nThe frontend is built with React, providing a modern and responsive user interface. The backend is implemented using Flask, which handles API requests, user authentication, and database interactions. The application uses SQLAlchemy for ORM and JWT for secure user authentication.`,
        },
        {
            title: "Do It Later App",
            description: "To-do list app with categories, priorities, and dark/light themes.",
            technologies: ["Flutter", "Dart", "JSON Storage", "Mobile App"],
            githubUrl: "https://github.com/Sujit-S-2908/DoItLater",
            demoUrl: "#",
            thumbnail: "/images/to-do.png",
            keyFeatures: ["Easy task management", "Categorization and prioritization of tasks", "User-friendly interface", "Data persistence using JSON files", "Dark and Light themes"],
            fullDescription: `DoItLater is a simple yet powerful to-do list manager built with Flutter. It allows you to keep track of your tasks, categorize them, prioritize them, and set deadlines. This project demonstrates how to use state management in Flutter, interact with JSON files for data persistence, and handle user inputs effectively.\n\nThe application features a clean and intuitive user interface, making it easy to add, edit, and delete tasks. It also supports task categorization and prioritization, allowing users to focus on what matters most.`,
        },
        // PubMed Article Fetcher
        {
            title: "PubMed Article Fetcher",
            description: "Automates retrieval and parsing of biomedical literature from PubMed using user-defined keywords or MeSH terms.",
            technologies: ["Python", "Biopython (Entrez API)", "Pandas", "JSON / CSV handling", "Regex / NLP Preprocessing"],
            githubUrl: "https://github.com/Sujit-S-2908/AI-Agent",
            demoUrl: "#",
            thumbnail: "/images/pubmed.png",
            keyFeatures: [
                "Keyword or MeSH term-based querying",
                "Fetches abstracts, authors, and journal metadata",
                "Export options to CSV or JSON for data analysis",
                "Lightweight and modular code for easy integration",
                "Handles large-scale queries efficiently",
            ],
            fullDescription: `This project is a Python-based application that automates the retrieval and parsing of biomedical literature from PubMed using user-defined keywords or MeSH terms.\n\nThe tool leverages the Entrez Programming Utilities (E-utilities) from NCBI to search, fetch, and extract abstracts and metadata for downstream tasks such as text analysis, summarization, or machine learning applications in biomedical NLP.`,
        },
        // Sentiment Analysis
        {
            title: "Sentiment Analysis",
            description: "Builds a sentiment analysis pipeline to classify text data as positive, negative, or neutral using NLP and ML algorithms.",
            technologies: ["Python", "Scikit-learn", "NLTK / SpaCy", "Pandas / Matplotlib", "Streamlit (optional UI)"],
            githubUrl: "https://github.com/Sujit-S-2908/Sentimental_Analysis",
            demoUrl: "#",
            thumbnail: "/images/nlp.jpg",
            keyFeatures: [
                "Clean and structured sentiment classification pipeline",
                "Comparative analysis of multiple ML models",
                "Support for real-time text input and batch processing",
                "Confusion matrix and performance metrics visualization",
                "Extensible to different domains and languages",
            ],
            fullDescription: `This project focuses on building a sentiment analysis pipeline to classify text data as positive, negative, or neutral. It uses traditional NLP techniques along with modern machine learning algorithms for accurate sentiment classification.\n\nThe dataset includes reviews from e-commerce platforms, processed using tokenization, lemmatization, and vectorization (TF-IDF). The project evaluates multiple classifiers including Logistic Regression, SVM, and Random Forest.`,
        },
        // Fine-Tuned BERT on Amazon Review Data
        {
            title: "Fine-Tuned BERT on Amazon Fine Food Reviews",
            description: "Implements a fine-tuned BERT model for nuanced multi-class sentiment classification on food reviews (1–5 stars).",
            technologies: ["Python", "Hugging Face Transformers", "PyTorch", "Amazon Fine Food Reviews Dataset", "Pandas", "Seaborn", "Scikit-learn", "Matplotlib"],
            githubUrl: "https://github.com/Sujit-S-2908/FineTunedBERT_Amazon",
            demoUrl: "#",
            thumbnail: "/images/llm.jpg",
            keyFeatures: [
                "Fine-tuned BERT for multi-class sentiment prediction (1–5 star ratings)",
                "Captures complex linguistic nuances in user-generated food reviews",
                "GPU-accelerated training for performance optimization",
                "Attention visualization for interpretability of predictions",
                "Confusion matrix, accuracy, and macro/micro F1 evaluation",
            ],
            fullDescription: `This project implements a fine-tuned BERT-based transformer model on the Amazon Fine Food Reviews dataset to perform nuanced sentiment classification. Unlike binary classification, this model is trained to understand subtle variations in user sentiment (e.g., star ratings from 1 to 5), capturing deeper semantic context from natural language.\n\nThe pipeline includes comprehensive preprocessing, tokenization using BertTokenizer, BERT model fine-tuning with attention masking, and detailed evaluation through confusion matrices and F1-scores. This approach enables the model to effectively interpret subjective and varied food-related reviews.`,
        },
    ];

    const certificates = [
        { title: "AWS Flash - Generative AI with Diffusion Models", link: "#" },
        { title: "SQL & Relational Database", link: "#" },
        { title: "Data Science", link: "#" },
        { title: "Introduction to Machine Learning Operations", link: "#" },
        { title: "Generative AI for All", link: "#" },
        { title: "Foundations of Prompt Engineering", link: "#" },
        { title: "Python for Data Science", link: "#" },
    ];

    const education = [
        {
            degree: "B.Tech in Artificial Intelligence and Data Science",
            institution: "Coimbatore Institute Of Technology",
            details: "Currently pursuing 3rd year (2022 – 2026), Coimbatore, India. Keeping a CGPA of 9.13.",
        },
        {
            degree: "Higher Secondary Certificate",
            institution: "SAV Balakrishna Matric Hr Sec School",
            details: "Scored 97.6% from Biology group (2021 – 2022), Tirunelveli, India.",
        },
    ];

    const timelineData1 = [
        { year: "2023", event: "Started working as an AI Engineer" },
        { year: "2022", event: "Completed Master's in AI" },
        { year: "2021", event: "Published research on Machine Learning" },
    ];

    const projects1 = [
        {
            title: "AI Project 1",
            description: "A project focused on AI-driven solutions for healthcare.",
            technologies: ["Python", "TensorFlow", "Streamlit"],
            demoUrl: "https://example.com/demo1",
            githubUrl: "https://github.com/example/project1",
            thumbnail: "/images/project1-thumb.jpg",
            featured: true,
        },
        {
            title: "AI Project 2",
            description: "An innovative AI project for financial forecasting.",
            technologies: ["JavaScript", "Node.js", "MongoDB"],
            demoUrl: "https://example.com/demo2",
            githubUrl: "https://github.com/example/project2",
            thumbnail: "/images/project2-thumb.jpg",
            featured: false,
        },
    ];

    const certificates1 = [
        { title: "Certificate 1", link: "#" },
        { title: "Certificate 2", link: "#" },
    ];

    // Define skill arrays for each subsection
    const FieldExp = [
        { name: "Data Science", level: 90, icon: "📊" },
        { name: "Deep Learning", level: 90, icon: "🧠" },
        { name: "Machine Learning", level: 90, icon: "🤖" },
        { name: "Data Visualization", level: 80, icon: "📈" },
        { name: "Generative AI", level: 80, icon: <SiTensorflow className="w-6 h-6" /> },
        { name: "LLM Applications", level: 75, icon: "💬" },
        { name: "IOT", level: 50, icon: <SiArduino className="w-6 h-6" /> },
        { name: "Prompt Engineering", level: 70, icon: <TbPrompt className="w-6 h-6" /> },
    ];
    const frameworks = [
        { name: "Mongo DB", level: 80, icon: <SiMongodb className="w-6 h-6" /> },
        { name: "Flask", level: 70, icon: <SiFlask className="w-6 h-6" /> },
        { name: "Firebase", level: 75, icon: <SiFirebase className="w-6 h-6" /> },
        { name: "Git", level: 80, icon: <SiGit className="w-6 h-6" /> },
        { name: "Streamlit", level: 75, icon: <SiStreamlit className="w-6 h-6" /> },
        { name: "Langchain", level: 75, icon: <SiLangchain className="w-6 h-6" /> },
        { name: "Postman", level: 65, icon: <SiPostman className="w-6 h-6" /> },
        { name: "Power BI", level: 80, icon: <img src="/images/power-bi.svg" alt="Power BI" className="w-6 h-6 inline" /> },
    ];
    const progSkills = [
        { name: "Python", level: 90, icon: <SiPython className="w-6 h-6" /> },
        { name: "JavaScript", level: 60, icon: <SiJavascript className="w-6 h-6" /> },
        { name: "Java", level: 60, icon: <DiJava className="w-6 h-6" /> },
        {
            name: "HTML & CSS",
            level: 80,
            icon: (
                <div className="flex gap-1">
                    <SiHtml5 className="w-6 h-6" />
                    <SiCss3 className="w-6 h-6" />
                </div>
            ),
        },
        { name: "SQL", level: 90, icon: <SiMysql className="w-6 h-6" /> },
        { name: "C++", level: 70, icon: <SiCplusplus className="w-6 h-6" /> },
        { name: "Flutter", level: 65, icon: <SiFlutter className="w-6 h-6" /> },
        { name: "Git", level: 80, icon: <SiGit className="w-6 h-6" /> },
    ];

    // Filter out IoT projects from main projects
    const iotKeywords = ["IoT", "hydroponics", "Lab Copilot", "Smart Lab Copilot"];
    const filteredProjects = projects.filter((p) => !iotKeywords.some((kw) => p.title.toLowerCase().includes(kw.toLowerCase())));
    const prototypeProjects = projects.filter((p) => iotKeywords.some((kw) => p.title.toLowerCase().includes(kw.toLowerCase())));

    return (
        <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900 via-dark-900 to-purple-900 animate-gradient-xy text-dark-100">
            <Header />
            <main className="lg:ml-0">
                {/* Hero Section */}
                <motion.section
                    id="home"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center justify-center min-h-screen py-0 px-6 bg-transparent">
                    <div className="max-w-6xl mx-auto w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:pl-8">
                            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
                                <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6 text-softwhite leading-tight">
                                    Hi, I'm <span className="text-accent-500">Sujit S</span>
                                </h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-xl text-dark-100 mb-4 leading-relaxed">
                                    Tech Enthusiast
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    className="text-lg text-dark-100 mb-8 leading-relaxed max-w-lg">
                                    Passionate about Deep Learning, Generative AI, Agentic AI, and LLM applications — I thrive on exploring cutting-edge tech. I specialize in working with data to
                                    transform complex problems into innovative, efficient solutions.
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                    className="flex flex-wrap gap-4 mb-8">
                                    <Button variant="outline">
                                        <a href="/resume.pdf" download>
                                            Download Resume
                                        </a>
                                    </Button>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 1 }}
                                    className="flex gap-4">
                                    {/* Social icons or other aesthetics can go here */}
                                </motion.div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="flex justify-center md:justify-end lg:text-center">
                                <div className="relative mb-8">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="w-[260px] h-[260px] md:w-[340px] md:h-[340px] lg:w-[420px] lg:h-[420px] rounded-full mx-auto overflow-hidden shadow-2xl ring-4 ring-blue-400/40 bg-gradient-to-br from-blue-900/30 to-pink-400/10">
                                        <img src="/images/sujit.jpeg" alt="Sujit S - AI Engineer" className="w-full h-full object-cover object-top" />
                                    </motion.div>
                                    {/* Interactive laptop emoji bottom left, dev.jpg top right with transparent bg and shake */}
                                    <motion.span
                                        className="absolute -bottom-8 -left-8 text-4xl select-none cursor-pointer"
                                        whileHover={{ rotate: [0, -10, 10, -10, 10, 0], transition: { duration: 0.6 } }}
                                        whileTap={{ scale: 1.2 }}>
                                        <img src="/images/app-development.png" alt="Developer" className="w-14 h-14  object-cover bg-transparent shadow-lg" style={{ background: "transparent" }} />
                                    </motion.span>
                                    <motion.span
                                        className="absolute -top-16 right-0 -translate-x-6 cursor-pointer"
                                        whileHover={{ rotate: [0, 10, -10, 10, -10, 0], transition: { duration: 0.6 } }}
                                        whileTap={{ scale: 1.1 }}>
                                        <img src="/images/analysis.png" alt="Developer" className="w-14 h-14  object-cover bg-transparent shadow-lg" style={{ background: "transparent" }} />
                                    </motion.span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* About Section */}
                <motion.section id="about" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="py-20 px-6 bg-transparent">
                    <div className="max-w-6xl mx-auto">
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
                            <BlueHeading as="h2" className="text-3xl font-bold mb-4">
                                About Me
                            </BlueHeading>
                            <p className="text-lg text-gold-300 max-w-3xl mx-auto leading-relaxed">
                                Passionate about advancing AI technologies and developing solutions that enable operational excellence and innovation.
                            </p>
                        </motion.div>

                        <div className="flex flex-col items-center justify-center gap-12 mb-16">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="w-full max-w-3xl text-center">
                                <h3 className="text-2xl font-semibold text-gold-100 mb-6">Executive Summary</h3>
                                <div className="space-y-4 text-gold-300 leading-relaxed text-left">
                                    <p>
                                        Motivated and detail-oriented AI and Data Science student. Passionate about solving real-world problems with end-to-end AI systems, with hands-on experience in
                                        Natural Language Processing, Computer Vision, Cybersecurity, and minor VR game development.
                                    </p>
                                    <p>
                                        I served as a Student Developer at iCliniq – The Virtual Hospital, where I work on critical modules involving EHR management, medical data processing, and
                                        NLP-based chatbot development. My contributions aim to enhance digital healthcare accessibility and streamline user interaction in virtual consultation
                                        platforms.
                                    </p>
                                    <p>
                                        Previously, I worked as a Student Researcher at Telkom University, Indonesia, where I helped implement an IoT-enabled smart hydroponic system that leverages
                                        real-time environmental sensing and cloud-based analytics for sustainable farming. I also developed a custom web scraping pipeline to gather agricultural data
                                        that fuels decision-making in autonomous farming solutions.
                                    </p>
                                    <p>
                                        As a Machine Learning Intern at Nunnari Labs, I gained hands-on experience with classical and deep learning techniques, deploying neural networks,
                                        transformer-based architectures, and exploring Large Language Models (LLMs). This internship solidified my ability to apply advanced ML techniques in practical
                                        contexts and taught me the nuances of building scalable AI systems.
                                    </p>
                                    <p>
                                        Experienced in developing interactive web applications with secure authentication (Google OAuth), role-based access control, and responsive UIs. Enthusiastic
                                        about exploring emerging technologies, including VR, reinforcement learning, and advanced probabilistic models.
                                    </p>
                                    <p>I enjoy building scalable, data-driven solutions and thrive at the intersection of AI, engineering, and real-world impact..</p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="w-full max-w-3xl text-center">
                                <h3 className="text-2xl font-semibold text-gold-100 mb-6">Core Expertise</h3>
                                <div className="grid grid-cols-2 gap-4 justify-center">
                                    {[
                                        {
                                            title: "AI & ML",
                                            items: ["Machine Learning", "Deep Learning", "Generative AI", "LLM", "Agentic AI"],
                                        },
                                        {
                                            title: "Tools",
                                            items: ["DBMS (MySQL, MongoDB)", "Postman", "Github", "Ollama and LM Studio", "Power BI/ Tableau"],
                                        },
                                        {
                                            title: "Data Science",
                                            items: ["Statistical Analysis", "Causal Inference", "Data Engineering", "Visualization", "Feature Engineering"],
                                        },
                                        {
                                            title: "Programming Languages",
                                            items: ["Python", "JavaScript", "R", "Java", "C++"],
                                        },
                                    ].map((category) => (
                                        <div key={category.title} className="bg-dark-800 p-4 rounded-lg">
                                            <h4 className="font-semibold text-gold-100 mb-2">{category.title}</h4>
                                            <ul className="space-y-1">
                                                {category.items.map((item) => (
                                                    <li key={item} className="text-sm text-gold-300">
                                                        • {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Skills Section */}
                        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-xl p-8">
                            <div className="mb-2">
                                <BlueHeading as="h3" className="text-3xl font-extrabold tracking-wide mb-4 text-center drop-shadow-lg" id="technical-skills">
                                    Technical Skills
                                </BlueHeading>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8 pt-8">
                                {/* AI & Machine Learning */}
                                <div className="bg-dark-700 border border-gold-800 rounded-2xl p-6 transition-all duration-300">
                                    <div className="flex items-center justify-center gap-2 mb-4">
                                        <span className="text-gold-400 text-2xl">🧠</span>
                                        <h4 className="font-bold text-gold-200 text-lg tracking-wide">Field & Experience</h4>
                                    </div>
                                    <div className="space-y-2">
                                        {FieldExp.map((s) => (
                                            <motion.div key={s.name} whileHover={{ y: -4, scale: 1.04 }} className="bg-dark-800 rounded-lg px-4 py-2 transition-all duration-200 cursor-pointer">
                                                <SkillProgressBar skill={s.name} level={s.level} icon={s.icon} />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                                {/* Cloud & Infrastructure */}
                                <div className="bg-dark-700 border border-gold-800 rounded-2xl p-6 transition-all duration-300">
                                    <div className="flex items-center justify-center gap-2 mb-4">
                                        <span className="text-gold-400 text-2xl">☁️</span>
                                        <h4 className="font-bold text-gold-200 text-lg tracking-wide">Frameworks & Tools</h4>
                                    </div>
                                    <div className="space-y-2">
                                        {frameworks.map((s) => (
                                            <motion.div key={s.name} whileHover={{ y: -4, scale: 1.04 }} className="bg-dark-800 rounded-lg px-4 py-2 transition-all duration-200 cursor-pointer">
                                                <SkillProgressBar skill={s.name} level={s.level} icon={s.icon} />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                                {/* Programming & Tools */}
                                <div className="bg-dark-700 border border-gold-800 rounded-2xl p-6 transition-all duration-300">
                                    <div className="flex items-center justify-center gap-2 mb-4">
                                        <span className="text-gold-400 text-2xl">💻</span>
                                        <h4 className="font-bold text-gold-200 text-lg tracking-wide">Programming & Tools</h4>
                                    </div>
                                    <div className="space-y-2">
                                        {progSkills.map((s) => (
                                            <motion.div key={s.name} whileHover={{ y: -4, scale: 1.04 }} className="bg-dark-800 rounded-lg px-4 py-2 transition-all duration-200 cursor-pointer">
                                                <SkillProgressBar skill={s.name} level={s.level} icon={s.icon} />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Experience Section */}
                <motion.section id="experience" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="py-20 px-6 bg-transparent">
                    <div className="max-w-6xl mx-auto">
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
                            <BlueHeading as="h2" className="text-3xl font-bold mb-4">
                                Work Experience
                            </BlueHeading>
                            <p className="text-lg text-gold-300">My professional journey and key achievements</p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-8">
                            <ExperienceCard
                                title="Machine Learning Intern"
                                company="Nunnari Labs"
                                location="Coimbatore"
                                period=" 07/2024 - 08/2024"
                                achievements={[
                                    "Worked on end-to-end implementation of machine learning algorithms including supervised and unsupervised models for data classification and anomaly detection.",
                                    "Developed and trained Neural Networks using Deep Learning frameworks such as TensorFlow and PyTorch to solve real-world business challenges in domains like speech and image recognition.",
                                    "Gained foundational experience in Generative AI, particularly understanding the workings of Transformers and Large Language Models (LLMs) including GPT-like architectures and BERT variants.",
                                    "Participated in model evaluation and hyperparameter tuning to improve accuracy and generalizability across multiple datasets.",
                                    "Tools & Tech: Python, scikit-learn, TensorFlow, PyTorch, Transformers, OCR",
                                ]}
                                certificateUrl="https://1drv.ms/i/c/61e9abcaf0253100/EcJBJWSxVutGn0TFPBqkxeQBI-wkppL6MWJiyKTt4uYFPg?e=psXWB4"
                            />

                            <ExperienceCard
                                title="Student Developer"
                                company="Icliniq - The Virtual Hospital"
                                location="Remote"
                                period="2024 - 2025"
                                achievements={[
                                    "Worked on a Project Machine-Readable Format for Enhanced User Interaction",
                                    "Engineered efficient systems for Electronic Health Record (EHR) storage and manipulation",
                                    "Collaborated on the development of a chatbot interface to streamline user interaction, integrating NLP tools to address user queries and route them to appropriate virtual departments.",
                                    "Tools & Tech: Python, MongoDB, VectorDB, RAG, NLP, LM Studio",
                                ]}
                                certificateUrl="https://1drv.ms/i/c/61e9abcaf0253100/EWoCb3Wxjr1JkjpNAhkx8QUBWEIBeVLB-e3zGTX_pHHb_Q?e=rQDFrd"
                            />
                            <ExperienceCard
                                title="Student Researcher"
                                company="Telkom University"
                                location=" Bandung, Indonesia"
                                period="2025"
                                achievements={[
                                    "Researched and implemented an IoT-based smart hydroponics system enabling real-time monitoring of environmental conditions like humidity, pH, temperature, and light exposure.",
                                    "Integrated sensors with microcontrollers (ESP32/Arduino) for seamless data streaming and cloud synchronization, facilitating predictive insights into plant health and resource efficiency.",
                                    // "Developed a Python-based web scraper to automate the collection of relevant agricultural and environmental datasets for analytics and system optimization.",
                                    "Tools & Tech: Python, BeautifulSoup, Firebase, Arduino IDE",
                                ]}
                                certificateUrl="https://1drv.ms/i/c/61e9abcaf0253100/Eac3RXmOBp9Et3bnhAGUV9MB5X2D82BoOmyBSsPbfMdZVQ?e=lDRIxk"
                            />
                        </motion.div>

                        {/* Education & Certifications */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="grid md:grid-cols-2 gap-8 mt-16">
                            <div className="bg-dark-800 rounded-xl p-6 shadow-sm border border-gold-200">
                                <h3 className="text-xl font-semibold text-gold-800 mb-4 flex items-center gap-2">
                                    <span className="text-gold-600">🎓</span> Education
                                </h3>
                                <EducationSection />
                            </div>

                            <div className="bg-dark-800 rounded-xl p-6 shadow-sm border border-gold-200">
                                <h3 className="text-xl font-semibold text-gold-800 mb-4 flex items-center gap-2">
                                    <span className="text-gold-600">🏆</span> Certificates
                                </h3>
                                <CertificatesSection />
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Projects Section */}
                <motion.section id="projects" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="py-20 px-6 bg-transparent">
                    <div className="max-w-6xl mx-auto">
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
                            <BlueHeading as="h2" className="text-3xl font-bold mb-4">
                                My Projects
                            </BlueHeading>
                            <p className="text-lg text-gold-300 max-w-2xl mx-auto">A showcase of my recent work and personal projects that demonstrate my skills and expertise.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProjects.map((project, index) => (
                                <ProjectCard key={project.title} {...project} index={index} setSelectedProject={setSelectedProject} />
                            ))}
                        </motion.div>
                    </div>
                </motion.section>

                {/* Prototypes Section */}
                <motion.section id="prototypes" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="py-20 px-6 bg-transparent">
                    <div className="max-w-6xl mx-auto">
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
                            <BlueHeading as="h2" className="text-3xl font-bold mb-4">
                                Prototypes
                            </BlueHeading>
                            <p className="text-lg text-gold-300 max-w-2xl mx-auto">A showcase of my IoT and hardware prototype projects.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {prototypeProjects.map((project, index) => (
                                <motion.div
                                    key={project.title}
                                    className="rounded-xl border border-dark-600 bg-dark-800 p-6 shadow-xl shadow-dark-900/25 transition-all duration-300 hover:shadow-2xl hover:border-gold-400 hover:scale-[1.04] h-full flex flex-col justify-between"
                                    whileHover={{ y: -8, boxShadow: "0 12px 32px 0 #facc1555" }}>
                                    <div>
                                        {project.thumbnail && (
                                            <div className="w-full flex justify-center items-center mb-4">
                                                <img src={project.thumbnail} alt={project.title + " thumbnail"} className="w-full max-w-[340px] h-48 object-cover rounded-lg shadow-md" />
                                            </div>
                                        )}
                                        <h3 className="text-xl font-semibold text-gold-100 mb-2">{project.title}</h3>
                                        <p className="text-dark-400 mb-4 leading-relaxed whitespace-pre-line">{project.fullDescription || project.description}</p>
                                        {project.keyFeatures && project.keyFeatures.length > 0 && (
                                            <ul className="list-disc list-inside text-gold-200 mb-4 ml-4">
                                                {project.keyFeatures.map((feature: string, idx: number) => (
                                                    <li key={idx}>{feature}</li>
                                                ))}
                                            </ul>
                                        )}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.map((tech: string, i: number) => (
                                                <span key={tech} className="bg-dark-800 text-gold-300 px-2 py-1 rounded text-xs font-medium">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.section>

                {/* Paper Publications Section */}
                <motion.section id="papers" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="py-20 px-6 bg-transparent">
                    <div className="max-w-4xl mx-auto">
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12">
                            <BlueHeading as="h2" className="text-3xl font-bold mb-4">
                                Paper Publications
                            </BlueHeading>
                            <p className="text-lg text-gold-300 max-w-2xl mx-auto">A dive into my academic papers publications and research contributions.</p>
                        </motion.div>
                        <div className="bg-dark-800 border border-gold-400 rounded-xl shadow-lg p-8 mb-8 flex flex-col md:flex-row items-center gap-8">
                            <div className="w-full md:w-1/2 flex justify-center items-center px-4 md:px-8">
                                <img src="/images/paper.jpg" alt="Paper Publication" className="w-full h-auto object-contain rounded-xl shadow-md" style={{ aspectRatio: "3/4", maxHeight: "480px" }} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-semibold text-gold-200 mb-2">IoT For Smart Hydroponics</h3>
                                <p className="text-gold-100 mb-4">
                                    In this research, we propose an IoT-enabled hydroponic system for maximizing plant growth and resource utilization. Our system yielded a 30% increase in crop yield
                                    and a 40% decrease in water usage, indicating its viability for sustainable farming.
                                </p>
                                <div className="mb-4">
                                    <span className="font-semibold text-gold-300">Key Highlights:</span>
                                    <ul className="list-disc list-inside text-gold-200 ml-6 mt-2">
                                        <li>
                                            <b>Autonomous Light Control:</b> Using photoresistors and LEDs to provide the best lighting conditions.
                                        </li>
                                        <li>
                                            <b>Water Level Detection:</b> Providing constant nutrient supply through real-time sensors.
                                        </li>
                                        <li>
                                            <b>Cloud Integration:</b> Using Firebase and a Flask-based web interface to provide easy monitoring and control.
                                        </li>
                                    </ul>
                                </div>
                                <a
                                    href="/paper.pdf"
                                    download
                                    className="inline-block px-5 py-2 bg-blue-600 text-white-900 rounded-xl font-bold shadow-xl hover:bg-blue-600 transition-all mt-4 hover:underline">
                                    Download PDF
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Contact Section */}
                <motion.section id="contact" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="py-20 px-6 bg-transparent">
                    <div className="max-w-4xl mx-auto">
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
                            <BlueHeading as="h2" className="text-3xl font-bold mb-4">
                                Get In Touch
                            </BlueHeading>
                            <p className="text-lg text-gold-300 max-w-2xl mx-auto">
                                I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to work together!
                            </p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-xl font-semibold text-gold-100 mb-6">Let's Connect</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-gold-100 rounded-lg">
                                            <svg className="w-5 h-5 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gold-100">Email</p>
                                            <p className="text-gold-300">sujits2908@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-gold-100 rounded-lg">
                                            <svg className="w-5 h-5 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gold-100">Location</p>
                                            <p className="text-gold-300">Coimbatore, India</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <h4 className="font-semibold text-gold-100 mb-4">Interests & Hobbies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {["Driving", "Singing", "Travel", "Puzzle Solving"].map((hobby) => (
                                            <span key={hobby} className="bg-dark-800 text-gold-200 px-3 py-1 rounded-full text-sm">
                                                {hobby}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="bg-dark-800 rounded-xl p-6 shadow-xl border border-gold-700">
                                <h3 className="text-xl font-semibold text-gold-100 mb-6">Send Message</h3>
                                <form onSubmit={handleContactSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gold-200 mb-2">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={contactForm.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gold-600 rounded-lg bg-gold-700 text-gold-100 placeholder-gold-400 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gold-200 mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={contactForm.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gold-600 rounded-lg bg-gold-700 text-gold-100 placeholder-gold-400 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                                            placeholder="your.email@example.com"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gold-200 mb-2">Message</label>
                                        <textarea
                                            name="message"
                                            value={contactForm.message}
                                            onChange={handleInputChange}
                                            rows={4}
                                            className="w-full px-4 py-3 border border-gold-600 rounded-lg bg-gold-700 text-gold-100 placeholder-gold-400 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors resize-none"
                                            placeholder="Tell me about your project or just say hello!"
                                            required></textarea>
                                    </div>
                                    <Button type="submit" variant="default" className="w-full">
                                        Send Message
                                    </Button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>
            </main>

            <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-8 px-6 text-center text-dark-100 border-t border-dark-600 bg-dark-900 relative">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="fixed bottom-8 right-8 z-50 bg-blue-700 hover:bg-blue-500 text-white rounded-full p-3 shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    aria-label="Scroll to top">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                </button>
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} Sujit S. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="text-dark-100 hover:text-accent-400 transition-colors">
                            Privacy
                        </a>
                        <a href="#" className="text-dark-100 hover:text-accent-400 transition-colors">
                            Terms
                        </a>
                        <a href="#" className="text-dark-100 hover:text-accent-400 transition-colors">
                            Contact
                        </a>
                    </div>
                </div>
            </motion.footer>

            {/* Project Details Overlay - make it a fixed overlay centered to the viewport */}
            {selectedProject ? (
                <div className="fixed inset-0 z-[1000] flex justify-center items-center bg-black bg-opacity-80 backdrop-blur-sm transition-all duration-300">
                    <div className="fixed inset-0 z-[1001] bg-black opacity-70 pointer-events-auto" />
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="relative w-full h-full max-w-4xl max-h-[95vh] bg-dark-950 border-4 border-gold-400 shadow-2xl rounded-3xl p-0 flex flex-col items-center overflow-y-auto focus:outline-none focus:ring-4 focus:ring-gold-400 z-[1002]">
                        <button
                            className="absolute top-6 right-8 text-gold-400 hover:text-gold-200 text-3xl font-bold z-[1003] bg-dark-950 bg-opacity-80 rounded-full p-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-gold-400"
                            onClick={() => setSelectedProject(null)}
                            aria-label="Close details window">
                            &times;
                        </button>
                        <div className="w-full flex flex-col items-center p-10 pt-20">
                            {selectedProject.thumbnail && (
                                <div className="w-full flex justify-center items-center mb-8">
                                    <img src={selectedProject.thumbnail} alt={selectedProject.title + " thumbnail"} className="w-full max-w-[420px] h-80 object-cover rounded-2xl shadow-lg" />
                                </div>
                            )}
                            <h3 className="text-4xl font-semibold text-gold-100 mb-4 text-center drop-shadow-lg">{selectedProject.title}</h3>
                            <p className="mb-6 text-gold-200 text-lg whitespace-pre-line text-left max-w-2xl">{selectedProject.fullDescription || selectedProject.description}</p>
                            {selectedProject.keyFeatures && selectedProject.keyFeatures.length > 0 && (
                                <div className="mb-6 w-full">
                                    <h4 className="font-medium text-gold-300 mb-2 text-lg">Key Features:</h4>
                                    <ul className="list-disc list-inside text-gold-200 pl-6">
                                        {selectedProject.keyFeatures.map((feature: string, idx: number) => (
                                            <li key={idx} className="mb-1 text-base">
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <div className="mb-4 w-full">
                                <span className="font-medium text-gold-300">Technologies Used: </span>
                                <span className="text-gold-200">{selectedProject.technologies.join(", ")}</span>
                            </div>
                            <a
                                href={selectedProject.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-gold-400 hover:text-gold-200 font-semibold mt-4 text-lg">
                                <FaGithub className="w-6 h-6 mr-2" /> View on GitHub
                            </a>
                        </div>
                    </motion.div>
                </div>
            ) : null}
        </div>
    );
}
