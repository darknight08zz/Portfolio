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
    id: 'marketmind',
    title: 'MarketMind AI',
    description: 'AI-powered market intelligence platform for Indian retail investors. Features Opportunity Radar, Chart Pattern Intelligence, Portfolio-Aware Gemini Chat, and AI Video Engine with backtesting and conviction scoring.',
    tags: ['Next.js', 'Gemini API', 'Python', 'Backtesting', 'BSE Data'],
    category: 'ai',
    year: '2026',
    highlight: true,
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
    highlight: true,
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
    highlight: true,
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
    id: 'algovisu',
    title: 'AlgoVisu',
    description: 'Interactive algorithm visualization suite — AVL Trees with rotation badges, step-by-step sorting algorithms, keyboard shortcuts, and real-time pseudocode highlighting.',
    tags: ['React', 'Framer Motion', 'TypeScript', 'Next.js'],
    category: 'fullstack',
    year: '2024',
    links: { github: 'https://github.com/darknight08zz/AlgoVisu' },
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
