// Portfolio-Worthy Engineering Projects Generator
// These are real-world, impressive projects that students can build to showcase their skills

const projectIdeas = {
  mechanical: [
    {
      title: "3D CAD Model Generator",
      overview: "Create a Python tool that generates 3D CAD models programmatically and exports them to standard formats for 3D printing and manufacturing.",
      impressive: "Combines mechanical design with programming. Shows you can automate complex engineering tasks.",
      skills: "Python, 3D modeling, CAD automation, geometric algorithms, file processing",
      guidance: "1. Use libraries like FreeCAD or Blender Python API. 2. Create parametric design functions. 3. Export to STL, STEP, or IGES formats.",
      stretchGoals: "Add optimization algorithms, create web interface, or integrate with 3D printers.",
      resources: "FreeCAD Python API, numpy for calculations, Flask for web interface, matplotlib for visualization"
    },
    {
      title: "Finite Element Analysis Tool",
      overview: "Build a Python-based FEA tool that can analyze stress, strain, and deformation in mechanical components using numerical methods.",
      impressive: "Advanced engineering analysis with computational methods. Shows deep understanding of mechanical engineering principles.",
      skills: "Python, numerical analysis, mechanical engineering, scientific computing, visualization",
      guidance: "1. Use libraries like FEniCS or SfePy for FEA. 2. Implement mesh generation and boundary conditions. 3. Create visualization of results.",
      stretchGoals: "Add optimization algorithms, create web interface, or support complex geometries.",
      resources: "FEniCS, numpy, matplotlib, scipy, Flask for web interface"
    },
    {
      title: "Robotics Control System",
      overview: "Develop a Python-based control system for robotic arms that can perform complex movements and tasks using inverse kinematics.",
      impressive: "Robotics and automation with real-time control. Shows you can build systems that interact with the physical world.",
      skills: "Python, robotics, control systems, mathematical modeling, real-time programming",
      guidance: "1. Use libraries like PyBullet or ROS for simulation. 2. Implement inverse kinematics algorithms. 3. Create path planning and collision detection.",
      stretchGoals: "Add computer vision integration, create web interface, or support multiple robots.",
      resources: "PyBullet, numpy, matplotlib, Flask for web interface, OpenCV for vision"
    },
    {
      title: "Thermal Analysis and Optimization Tool",
      overview: "Create a comprehensive thermal analysis tool that can model heat transfer, thermal stress, and optimize thermal management systems.",
      impressive: "Advanced thermal engineering with optimization. Shows you can solve complex heat transfer problems.",
      skills: "Python, thermal analysis, optimization algorithms, scientific computing, data visualization",
      guidance: "1. Use libraries like CoolProp for fluid properties. 2. Implement finite difference methods for heat transfer. 3. Create optimization algorithms for thermal design.",
      stretchGoals: "Add CFD integration, create web interface, or support complex geometries.",
      resources: "CoolProp, numpy, scipy, matplotlib, Flask for web interface"
    },
    {
      title: "Mechanical Design Optimization Platform",
      overview: "Build a Python platform that uses genetic algorithms and machine learning to optimize mechanical designs for weight, strength, and cost.",
      impressive: "Advanced optimization with AI for mechanical design. Shows you can automate complex engineering decisions.",
      skills: "Python, optimization algorithms, machine learning, mechanical design, data analysis",
      guidance: "1. Use libraries like DEAP for genetic algorithms. 2. Implement constraint handling for design requirements. 3. Create visualization of optimization results.",
      stretchGoals: "Add multi-objective optimization, create web interface, or integrate with CAD software.",
      resources: "DEAP, scikit-learn, numpy, matplotlib, Flask for web interface"
    }
  ],
  computer: [
    {
      title: "AI-Powered Study Assistant",
      overview: "Build an intelligent study tool that analyzes your learning patterns and generates personalized practice questions using natural language processing.",
      impressive: "Combines AI, data analysis, and educational technology. Shows you can build intelligent systems that actually help people learn.",
      skills: "Python, data analysis, API integration, machine learning basics, file I/O",
      guidance: "1. Use OpenAI API or similar for question generation. 2. Track study sessions and performance data. 3. Create adaptive difficulty based on user performance.",
      stretchGoals: "Add speech recognition, create a web interface with Flask, or integrate with learning management systems.",
      resources: "OpenAI API, pandas for data analysis, Flask for web interface, matplotlib for visualizations"
    },
    {
      title: "Smart Personal Finance Dashboard",
      overview: "Create a comprehensive financial tracker that analyzes spending patterns, predicts future expenses, and provides investment insights using machine learning.",
      impressive: "Real-world data science with predictive analytics. Shows you can build tools that provide genuine financial value.",
      skills: "Python, data analysis, machine learning, API integration, web development",
      guidance: "1. Integrate with banking APIs or CSV imports. 2. Use scikit-learn for expense prediction. 3. Create interactive dashboards with Plotly.",
      stretchGoals: "Add cryptocurrency tracking, create investment recommendations, or build a mobile app.",
      resources: "pandas, scikit-learn, Plotly for dashboards, Flask/Django for web interface"
    },
    {
      title: "Computer Vision Security System",
      overview: "Build an intelligent security system that uses computer vision to detect intruders, track objects, and analyze behavior patterns.",
      impressive: "Advanced computer vision with real-time processing. Shows you can build sophisticated AI systems.",
      skills: "Python, computer vision, machine learning, real-time processing, web development",
      guidance: "1. Use OpenCV for image processing and object detection. 2. Implement YOLO or similar for object recognition. 3. Create alert system and web dashboard.",
      stretchGoals: "Add facial recognition, create mobile app, or integrate with smart home systems.",
      resources: "OpenCV, YOLO, Flask, numpy, matplotlib, webcam integration"
    },
    {
      title: "Natural Language Processing Chatbot",
      overview: "Create an intelligent chatbot that can understand context, answer questions, and perform tasks using advanced NLP techniques.",
      impressive: "Advanced NLP with conversational AI. Shows you can build intelligent language processing systems.",
      skills: "Python, natural language processing, machine learning, API development, web development",
      guidance: "1. Use transformers library for language models. 2. Implement intent recognition and entity extraction. 3. Create conversation flow management.",
      stretchGoals: "Add voice recognition, create multi-language support, or integrate with external APIs.",
      resources: "transformers, spaCy, Flask, numpy, web interface development"
    },
    {
      title: "Real-Time Stock Market Analyzer",
      overview: "Create a sophisticated stock analysis tool that uses machine learning to predict market trends and provide investment recommendations.",
      impressive: "Financial technology with real-time data processing and ML. Shows you can build professional-grade financial tools.",
      skills: "Python, machine learning, real-time data processing, financial analysis, web development",
      guidance: "1. Use yfinance or Alpha Vantage API for real-time data. 2. Implement ML models for price prediction. 3. Create risk assessment algorithms.",
      stretchGoals: "Add portfolio optimization, create trading bots, or build a mobile app.",
      resources: "yfinance, scikit-learn, pandas, Plotly for charts, Flask for web interface"
    }
  ],
  bioengineering: [
    {
      title: "DNA Sequence Analysis Platform",
      overview: "Build a comprehensive platform for analyzing DNA sequences, identifying patterns, and predicting genetic variations using bioinformatics algorithms.",
      impressive: "Bioinformatics with advanced sequence analysis. Shows you can work with complex biological data.",
      skills: "Python, bioinformatics, data analysis, machine learning, scientific computing",
      guidance: "1. Use Biopython for sequence manipulation. 2. Implement pattern recognition algorithms. 3. Create visualization of genetic data.",
      stretchGoals: "Add protein structure prediction, create web interface, or integrate with genomic databases.",
      resources: "Biopython, numpy, matplotlib, Flask, genomic databases"
    },
    {
      title: "Medical Image Analysis System",
      overview: "Develop an AI-powered system that can analyze medical images (X-rays, MRIs) to detect diseases and assist in diagnosis.",
      impressive: "Healthcare AI with medical imaging. Shows you can build systems that impact human health.",
      skills: "Python, computer vision, machine learning, medical imaging, healthcare technology",
      guidance: "1. Use libraries like SimpleITK for medical image processing. 2. Implement deep learning models for disease detection. 3. Create diagnostic reporting system.",
      stretchGoals: "Add 3D image analysis, create mobile app, or integrate with hospital systems.",
      resources: "SimpleITK, TensorFlow/PyTorch, Flask, numpy, medical image datasets"
    },
    {
      title: "Drug Discovery Platform",
      overview: "Create a computational platform that can predict drug-protein interactions and assist in drug discovery using molecular modeling.",
      impressive: "Computational chemistry with drug discovery. Shows you can build tools for pharmaceutical research.",
      skills: "Python, molecular modeling, machine learning, scientific computing, data analysis",
      guidance: "1. Use RDKit for molecular manipulation. 2. Implement docking algorithms. 3. Create prediction models for drug efficacy.",
      stretchGoals: "Add 3D molecular visualization, create web interface, or integrate with chemical databases.",
      resources: "RDKit, scikit-learn, numpy, Flask, chemical databases"
    },
    {
      title: "Biosensor Data Analysis Platform",
      overview: "Build a platform that can process and analyze data from various biosensors to monitor health parameters and detect anomalies.",
      impressive: "IoT and healthcare monitoring. Shows you can build systems that process real-time biological data.",
      skills: "Python, IoT, data analysis, signal processing, healthcare technology",
      guidance: "1. Use libraries for sensor data processing. 2. Implement anomaly detection algorithms. 3. Create real-time monitoring dashboard.",
      stretchGoals: "Add predictive health analytics, create mobile app, or integrate with wearable devices.",
      resources: "pandas, numpy, scikit-learn, Flask, sensor data processing libraries"
    },
    {
      title: "Gene Expression Analysis Tool",
      overview: "Develop a comprehensive tool for analyzing gene expression data, identifying differentially expressed genes, and predicting biological pathways.",
      impressive: "Advanced genomics with statistical analysis. Shows you can work with complex biological datasets.",
      skills: "Python, genomics, statistical analysis, data visualization, bioinformatics",
      guidance: "1. Use libraries like DESeq2 for differential expression analysis. 2. Implement pathway analysis algorithms. 3. Create interactive visualizations.",
      stretchGoals: "Add single-cell analysis, create web interface, or integrate with gene databases.",
      resources: "DESeq2, pandas, matplotlib, Flask, genomic databases"
    }
  ]
};

export const getProjectIdeas = (trackName) => {
  return projectIdeas[trackName] || projectIdeas.python_basics;
};

export const getRandomProjectIdea = (trackName) => {
  const ideas = getProjectIdeas(trackName);
  return ideas[Math.floor(Math.random() * ideas.length)];
}; 