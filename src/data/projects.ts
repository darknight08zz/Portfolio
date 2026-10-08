export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: 'ai' | 'fullstack' | 'systems' | 'research';
  year: string;
  highlight?: boolean;
  links: {
    github?: string;
    live?: string;
  };
  stats?: string;
}

export const projects: Project[] = [
  {
    id: 'crowdshield',
    title: 'CrowdShield',
    description: 'Architected a real-time crowd safety platform pairing YOLOv8 detection and OpenCV optical flow with temporal risk intelligence to forecast bottleneck hazards. Broadcasts spatial telemetry via FastAPI WebSockets to a Next.js command dashboard, backed by sensor failover logic and a 299-test verified safety suite.',
    tags: ['YOLOv8', 'FastAPI', 'Next.js', 'OpenCV', 'WebSockets', 'Pytest'],
    category: 'ai',
    year: '2026',
    highlight: true,
    links: { github: 'https://github.com/darknight08zz/Crowdshield-AI' },
    stats: '299/299 Tests Passed',
  },
  {
    id: 'netsentinel',
    title: 'NetSentinel',
    description: 'Engineered a real-time Network Intrusion Detection System coupling an unsupervised deep learning fusion pipeline (PyTorch Autoencoders + Isolation Forests) with Random Forest threat triage. Streams ~50 flows/sec via FastAPI WebSockets to an interactive D3.js force-directed topology graph, backed by asynchronous MongoDB telemetry persistence.',
    tags: ['PyTorch', 'FastAPI', 'D3.js', 'WebSockets', 'MongoDB', 'Docker'],
    category: 'systems',
    year: '2025',
    highlight: true,
    links: { github: 'https://github.com/darknight08zz/NetSentinal' },
    stats: 'Deep Learning NIDS',
  },
  {
    id: 'vtrace',
    title: 'VTRACE',
    description: 'Developed an interactive algorithm exploration platform using Next.js App Router, TypeScript, and Framer Motion. Built a deterministic execution engine with bidirectional stepping and synchronized pseudocode tracing to visualize self-balancing AVL Trees, Trie prefix trees, Heaps, and comparative side-by-side sorting algorithms.',
    tags: ['Next.js', 'TypeScript', 'Framer Motion', 'Radix UI', 'Tailwind'],
    category: 'fullstack',
    year: '2024',
    highlight: true,
    links: { github: 'https://github.com/darknight08zz/AlgoVisu' },
    stats: 'Interactive DSA Suite',
  },
  {
    id: 'marketmind',
    title: 'MarketMind AI',
    description: 'AI-powered market intelligence platform for Indian retail investors. Features Opportunity Radar, Chart Pattern Intelligence, Portfolio-Aware Gemini Chat, and AI Video Engine with backtesting and conviction scoring.',
    tags: ['Next.js', 'Gemini API', 'Python', 'Backtesting', 'BSE Data'],
    category: 'ai',
    year: '2026',
    links: { github: 'https://github.com/darknight08zz' },
    stats: 'ET Markets Hackathon',
  },
  {
    id: 'fraudshield',
    title: 'FraudShield AI',
    description: 'Real-time fraud detection system with XGBoost scoring, SHAP explainability, 4-tier decision engine, Kafka scaffold, and MLflow retraining loop with interactive dashboard.',
    tags: ['XGBoost', 'SHAP', 'FastAPI', 'Kafka', 'MLflow'],
    category: 'ai',
    year: '2026',
    links: { github: 'https://github.com/darknight08zz' },
    stats: 'AI Automate Hackathon',
  },
  {
    id: 'finpath',
    title: 'FinPath',
    description: 'Gamified financial literacy app — not just tracking. Makes personal finance engaging with levels, quizzes, achievement badges, and real portfolio simulation.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    category: 'fullstack',
    year: '2024',
    links: { github: 'https://github.com/darknight08zz/FinPath' },
  },
  {
    id: 'synapti',
    title: 'SynaptiScan',
    description: "AI-powered Parkinson's Disease screening app using soft-voting ensemble (RF, GBM, XGBoost, SVM) with isotonic calibration and SMOTE across six biomarker modules.",
    tags: ['FastAPI', 'React 19', 'Ensemble ML', 'SMOTE', 'OpenCV'],
    category: 'ai',
    year: '2025',
    links: { github: 'https://github.com/darknight08zz' },
  },
  {
    id: 'fmri',
    title: 'fMRI Preprocessing Pipeline',
    description: 'Web-based SPM12-equivalent rs-fMRI pipeline for Alzheimer\'s research (ADNI). Steps: DICOM→NIfTI, STC, Realignment, Coregistration, Segmentation, Normalisation, Smoothing + 3D NiftiViewer.',
    tags: ['Python', 'Next.js', 'NIfTI', 'Neuroimaging', 'SPM12'],
    category: 'research',
    year: '2025',
    links: { github: 'https://github.com/darknight08zz' },
    stats: 'ADNI Dataset',
  },
  {
    id: 'omr',
    title: 'Automated OMR System',
    description: 'Computer vision pipeline for automated grading of OMR sheets using contour detection, perspective transform, and bubble recognition.',
    tags: ['OpenCV', 'Python', 'Computer Vision'],
    category: 'systems',
    year: '2024',
    links: { github: 'https://github.com/darknight08zz/OMR' },
  },
  {
    id: 'earthquake',
    title: 'Earthquake Data Analysis',
    description: 'Statistical modeling and pattern recognition on global seismic data. Includes magnitude distribution analysis, frequency heatmaps, and temporal trend modeling.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    category: 'research',
    year: '2024',
    links: { github: 'https://github.com/darknight08zz/Earthquake-Data-Analysis' },
  },
];
