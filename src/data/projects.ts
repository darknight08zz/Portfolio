export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: 'ai' | 'fullstack' | 'systems' | 'research';
  year: string;
  highlight?: boolean;
  image?: string;
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
    description: 'Real-time crowd safety management with predictive anomaly detection, operator dashboard and field response sync.',
    tags: ['React Native', 'Next.js', 'FastAPI'],
    category: 'ai',
    year: '2026',
    highlight: true,
    image: '/projects/crowdshield.jpg',
    links: { github: 'https://github.com/darknight08zz/Crowdshield-AI' },
    stats: '299/299 Tests Passed',
  },
  {
    id: 'netsentinel',
    title: 'NetSentinel',
    description: 'Network security monitoring and threat detection with real-time analysis and visualization.',
    tags: ['React', 'Node.js', 'MongoDB'],
    category: 'systems',
    year: '2025',
    highlight: true,
    image: '/projects/netsentinel.jpg',
    links: { github: 'https://github.com/darknight08zz/NetSentinal' },
    stats: 'Deep Learning NIDS',
  },
  {
    id: 'vtrace',
    title: 'VTRACE',
    description: 'Interactive DSA visualizer with animated explanations for arrays, trees, graphs and more.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    category: 'fullstack',
    year: '2024',
    highlight: true,
    image: '/projects/vtrace.jpg',
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
    image: '/projects/marketmind.jpg',
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
    image: '/projects/fraudshield.jpg',
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
    image: '/projects/finpath.jpg',
    links: { github: 'https://github.com/darknight08zz/FinPath' },
  },
  {
    id: 'synapti',
    title: 'SynaptiScan',
    description: "AI-powered Parkinson's Disease screening app using soft-voting ensemble (RF, GBM, XGBoost, SVM) with isotonic calibration and SMOTE across six biomarker modules.",
    tags: ['FastAPI', 'React 19', 'Ensemble ML', 'SMOTE', 'OpenCV'],
    category: 'ai',
    year: '2025',
    image: '/projects/synaptiscan.jpg',
    links: { github: 'https://github.com/darknight08zz' },
  },
  // {
  //   id: 'fmri',
  //   title: 'fMRI Preprocessing Pipeline',
  //   description: 'Web-based SPM12-equivalent rs-fMRI pipeline for Alzheimer\'s research (ADNI). Steps: DICOM→NIfTI, STC, Realignment, Coregistration, Segmentation, Normalisation, Smoothing + 3D NiftiViewer.',
  //   tags: ['Python', 'Next.js', 'NIfTI', 'Neuroimaging', 'SPM12'],
  //   category: 'research',
  //   year: '2025',
  //   image: '/projects/fmri.jpg',
  //   links: { github: 'https://github.com/darknight08zz' },
  //   stats: 'ADNI Dataset',
  // },
  {
    id: 'omr',
    title: 'Automated OMR System',
    description: 'Computer vision pipeline for automated grading of OMR sheets using contour detection, perspective transform, and bubble recognition.',
    tags: ['OpenCV', 'Python', 'Computer Vision'],
    category: 'systems',
    year: '2024',
    image: '/projects/omr.jpg',
    links: { github: 'https://github.com/darknight08zz/OMR' },
  },
  {
    id: 'earthquake',
    title: 'Earthquake Data Analysis',
    description: 'Statistical modeling and pattern recognition on global seismic data. Includes magnitude distribution analysis, frequency heatmaps, and temporal trend modeling.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    category: 'research',
    year: '2024',
    image: '/projects/earthquake.jpg',
    links: { github: 'https://github.com/darknight08zz/Earthquake-Data-Analysis' },
  },
];
