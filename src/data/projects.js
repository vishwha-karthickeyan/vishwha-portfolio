import QrImage from '../assets/qr_generator.png';

export const projectCategories = ['All', 'IoT & AI', 'Full Stack', 'Frontend', 'Backend'];

export const projectsData = [
  {
    id: 'iot-anomaly-detection',
    title: 'AI-Powered Realtime IoT Monitoring System',
    category: 'IoT & AI',
    featured: true,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
    description: 'End-to-end IoT system using ESP8266 microcontrollers streaming real-time time-series temperature data via MQTT. Includes a React Native mobile application for real-time telemetry, BLE device pairing, Scikit-Learn anomaly detection, and Gemini AI alert summaries.',
    tags: ['ESP8266', 'MQTT', 'React Native', 'BLE', 'FastAPI', 'MySQL', 'Scikit-Learn', 'Gemini AI'],
    link: 'https://github.com/vishwha-karthickeyan/iot-project',
    mobileLink: 'https://github.com/vishwha-karthickeyan/iot-app',
    isPrivate: false
  },
  {
    id: 'omnichat-rag',
    title: 'OmniChat: Multi-Modal RAG Chatbot Pipeline',
    category: 'IoT & AI',
    featured: true,
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=1000&auto=format&fit=crop',
    description: 'Full-stack Retrieval-Augmented Generation (RAG) chatbot using React, FastAPI, and local LLMs. Includes PDF document vectorization with FAISS index, live token streaming, and multi-modal image-text payloads.',
    tags: ['React', 'FastAPI', 'RAG', 'FAISS', 'Vector Search', 'Python', 'LLM'],
    link: 'https://github.com/vishwha-karthickeyan/rag-chatbot',
    isPrivate: false
  },
  {
    id: 'intelshop-ecommerce',
    title: 'IntelShop: AI E-Commerce & Semantic Search',
    category: 'Full Stack',
    featured: true,
    image: 'https://images.unsplash.com/photo-1556742049-0a675659e366?q=80&w=1000&auto=format&fit=crop',
    description: 'Full-stack AI e-commerce platform using Next.js, TypeScript, FastAPI, and MongoDB. Engineered hybrid keyword + vector semantic search with sentence-transformers and Gemini AI shopping assistant.',
    tags: ['Next.js', 'TypeScript', 'FastAPI', 'MongoDB', 'Vector Search', 'Gemini AI'],
    link: 'https://github.com/vishwha-karthickeyan/ai-ecommerce',
    isPrivate: false
  },
  {
    id: 'task-manager',
    title: 'Enterprise Task Manager',
    category: 'Full Stack',
    featured: false,
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1000&auto=format&fit=crop',
    description: 'A high-concurrency productivity dashboard with real-time state management, customizable workflows, and role-based permissions.',
    tags: ['Next.js', 'React', 'MySQL', 'Tailwind CSS', 'REST API'],
    link: 'https://github.com/vishwha-karthickeyan/task-manager',
    isPrivate: false
  },
  {
    id: 'qr-generator',
    title: 'High-Performance QR Code Generator',
    category: 'Frontend',
    featured: false,
    image: QrImage,
    description: 'A lightning-fast web tool for custom QR code generation, SVG/PNG exports, and real-time aesthetic customization.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Canvas API'],
    link: 'https://github.com/vishwha-karthickeyan/QR-code-generator',
    isPrivate: false
  }
];
