import { Ipost } from "../models/post";
import { Imath } from "../models/post";
import { IroboticsArr } from "../models/post";
import { IbusinessArr } from "../models/post";
import { IgeographyArr } from "../models/post";

export let aiArr: Array<Ipost> = [
    { topic: "AI Fundamentals", details: "Understand the core ideas behind Artificial Intelligence." },
    { topic: "Neural Networks", details: "Learn how interconnected nodes mimic human brains." },
    { topic: "Machine Learning", details: "Use data-driven algorithms to make intelligent predictions." },
    { topic: "Deep Learning", details: "Explore CNNs and RNNs for complex pattern recognition." },
    { topic: "Computer Vision", details: "Enable machines to interpret and understand images." },
    { topic: "Speech Recognition", details: "Convert spoken language into text using ML models." },
    { topic: "AI Ethics", details: "Learn responsible use of AI and fairness in models." },
    { topic: "Chatbots", details: "Build conversational bots using NLP and APIs." },
    { topic: "Reinforcement Learning", details: "Train models through reward-based learning systems." },
    { topic: "AI Tools", details: "Use TensorFlow, PyTorch, and Keras for development." }
];

export let mathArr: Array<Imath> = [
    { concept: "Algebra", explain: "Work with variables, equations, and expressions." },
    { concept: "Geometry", explain: "Study shapes, lines, and spatial relationships." },
    { concept: "Trigonometry", explain: "Understand angles and functions like sine and cosine." },
    { concept: "Calculus", explain: "Learn differentiation and integration for change rates." },
    { concept: "Statistics", explain: "Analyze and interpret numerical data." },
    { concept: "Probability", explain: "Predict outcomes of random experiments." },
    { concept: "Linear Algebra", explain: "Work with matrices and vector spaces." },
    { concept: "Number Theory", explain: "Study prime numbers and divisibility." },
    { concept: "Set Theory", explain: "Understand unions, intersections, and complements." },
    { concept: "Discrete Math", explain: "Explore logic, graphs, and combinatorics." }
];

export let roboticsArr: Array<IroboticsArr> = [
    { module: "Robot Anatomy", summary: "Learn the mechanical structure of robots." },
    { module: "Sensors", summary: "Understand how robots perceive their environment." },
    { module: "Actuators", summary: "Control robot motion using motors and servos." },
    { module: "Microcontrollers", summary: "Program devices like Arduino and Raspberry Pi." },
    { module: "Kinematics", summary: "Calculate robot movement and arm positions." },
    { module: "Path Planning", summary: "Find optimal movement routes for robots." },
    { module: "Automation", summary: "Integrate robotics in industrial automation systems." },
    { module: "AI in Robotics", summary: "Apply AI for decision-making and perception." },
    { module: "Human-Robot Interaction", summary: "Design intuitive robot interfaces for users." },
    { module: "Robotic Vision", summary: "Implement image recognition in robots." }
];

export let businessArr: Array<IbusinessArr> = [
    { topicName: "Entrepreneurship", description: "Start and manage new business ventures." },
    { topicName: "Marketing", description: "Promote products using modern marketing strategies." },
    { topicName: "Finance", description: "Manage investments, budgets, and capital." },
    { topicName: "Operations", description: "Optimize business processes and workflows." },
    { topicName: "Sales", description: "Learn persuasion and negotiation techniques." },
    { topicName: "Leadership", description: "Develop decision-making and team management skills." },
    { topicName: "Economics", description: "Understand supply, demand, and market behavior." },
    { topicName: "Business Ethics", description: "Conduct business responsibly and transparently." },
    { topicName: "E-Commerce", description: "Create and manage online selling platforms." },
    { topicName: "Start-up Funding", description: "Learn about investors, equity, and venture capital." }
];

export let geographyArr:Array<IgeographyArr> = [
    { subject: "Continents", info: "Explore the seven continents of the world." },
    { subject: "Oceans", info: "Learn about Earth's five major oceans." },
    { subject: "Climate", info: "Understand weather patterns and temperature zones." },
    { subject: "Mountains", info: "Study the formation and features of mountains." },
    { subject: "Rivers", info: "Know the importance of river systems and deltas." },
    { subject: "Forests", info: "Learn about rainforests, deciduous, and coniferous types." },
    { subject: "Deserts", info: "Discover Earth's driest and hottest regions." },
    { subject: "Maps", info: "Read and interpret different kinds of maps." },
    { subject: "Natural Disasters", info: "Understand earthquakes, floods, and volcanoes." },
    { subject: "Human Geography", info: "Study population, culture, and urbanization." }
];