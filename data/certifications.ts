export interface HackerRankCert {
  id: string;
  title: string;
  type: 'Role Certification' | 'Skill Verification';
  level: 'Basic' | 'Intermediate' | 'Advanced' | 'Professional';
  duration: string;
  questions: string;
  description: string;
  verificationUrl: string;
  badgeColor: string;
}

export interface IndustryAiCert {
  id: string;
  title: string;
  provider: string;
  trackType: string;
  duration: string;
  cost: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  guidance: string;
  url: string;
}

export const HACKERRANK_CERTS: HackerRankCert[] = [
  {
    id: "hr-ps-basic",
    title: "Problem Solving (Basic)",
    type: "Skill Verification",
    level: "Basic",
    duration: "90 mins",
    questions: "2 coding questions",
    description: "Validates basic data structures (Arrays, Strings) and foundational algorithmic problem-solving ability.",
    verificationUrl: "https://www.hackerrank.com/skills-verification/problem_solving_basic",
    badgeColor: "emerald"
  },
  {
    id: "hr-ps-intermediate",
    title: "Problem Solving (Intermediate)",
    type: "Skill Verification",
    level: "Intermediate",
    duration: "90 mins",
    questions: "2 coding questions",
    description: "Evaluates complex data structures, trees, graphs, greedy heuristics, and dynamic programming.",
    verificationUrl: "https://www.hackerrank.com/skills-verification/problem_solving_intermediate",
    badgeColor: "amber"
  },
  {
    id: "hr-python-basic",
    title: "Python (Basic)",
    type: "Skill Verification",
    level: "Basic",
    duration: "90 mins",
    questions: "2 questions",
    description: "Covers Python syntax, data types, conditional flow, functions, loops, and standard library collections.",
    verificationUrl: "https://www.hackerrank.com/skills-verification/python_basic",
    badgeColor: "cyan"
  },
  {
    id: "hr-sql-basic",
    title: "SQL (Basic)",
    type: "Skill Verification",
    level: "Basic",
    duration: "30 mins",
    questions: "1 question",
    description: "Covers simple relational queries, relationships, and basic filtering with SELECT, WHERE, and ORDER BY.",
    verificationUrl: "https://www.hackerrank.com/skills-verification/sql_basic",
    badgeColor: "cyan"
  },
  {
    id: "hr-sql-intermediate",
    title: "SQL (Intermediate)",
    type: "Skill Verification",
    level: "Intermediate",
    duration: "35 mins",
    questions: "2 questions",
    description: "Covers multi-table joins, subqueries, group by aggregations, HAVING clauses, and case expressions.",
    verificationUrl: "https://www.hackerrank.com/skills-verification/sql_intermediate",
    badgeColor: "amber"
  },
  {
    id: "hr-sql-advanced",
    title: "SQL (Advanced)",
    type: "Skill Verification",
    level: "Advanced",
    duration: "45 mins",
    questions: "2 questions",
    description: "Covers window functions, recursive CTEs, query plan optimization, and complex analytical aggregations.",
    verificationUrl: "https://www.hackerrank.com/skills-verification/sql_advanced",
    badgeColor: "purple"
  },
  {
    id: "hr-java-basic",
    title: "Java (Basic)",
    type: "Skill Verification",
    level: "Basic",
    duration: "90 mins",
    questions: "2 questions",
    description: "Validates Java OOP design, exception handling, collections framework, and JVM execution model.",
    verificationUrl: "https://www.hackerrank.com/skills-verification/java_basic",
    badgeColor: "cyan"
  },
  {
    id: "hr-cpp-basic",
    title: "C++ (Basic)",
    type: "Skill Verification",
    level: "Basic",
    duration: "90 mins",
    questions: "2 questions",
    description: "Covers pointers, memory management, STL containers, templates, and object-oriented C++ patterns.",
    verificationUrl: "https://www.hackerrank.com/skills-verification/cpp_basic",
    badgeColor: "cyan"
  },
  {
    id: "hr-rest-basic",
    title: "REST API (Intermediate)",
    type: "Skill Verification",
    level: "Intermediate",
    duration: "90 mins",
    questions: "2 questions",
    description: "Evaluates consuming and processing HTTP GET/POST endpoints, pagination parsing, and data aggregation.",
    verificationUrl: "https://www.hackerrank.com/skills-verification/rest_api_intermediate",
    badgeColor: "amber"
  },
  {
    id: "hr-react-basic",
    title: "React (Basic)",
    type: "Skill Verification",
    level: "Basic",
    duration: "90 mins",
    questions: "2 coding questions",
    description: "Validates React components, hooks (useState, useEffect), props passing, and state management.",
    verificationUrl: "https://www.hackerrank.com/skills-verification/react_basic",
    badgeColor: "cyan"
  },
  {
    id: "hr-node-basic",
    title: "Node.js (Basic)",
    type: "Skill Verification",
    level: "Basic",
    duration: "90 mins",
    questions: "2 coding questions",
    description: "Tests Node.js event loop, asynchronous promises, stream processing, and Express routing.",
    verificationUrl: "https://www.hackerrank.com/skills-verification/node_basic",
    badgeColor: "cyan"
  },
  {
    id: "hr-swe-intern",
    title: "Software Engineer Intern",
    type: "Role Certification",
    level: "Professional",
    duration: "90 mins",
    questions: "4 questions (DSA + SQL + Core CS)",
    description: "Comprehensive industry benchmark for college placement applicants targeting product company internships.",
    verificationUrl: "https://www.hackerrank.com/skills-verification/software_engineer_intern",
    badgeColor: "indigo"
  },
  {
    id: "hr-frontend-dev",
    title: "Frontend Developer (React)",
    type: "Role Certification",
    level: "Professional",
    duration: "120 mins",
    questions: "3 tasks (React + JS + CSS)",
    description: "Tests modern SPA architecture, component hierarchies, responsive styling, and API data fetching.",
    verificationUrl: "https://www.hackerrank.com/skills-verification/frontend_developer_react",
    badgeColor: "indigo"
  },
  {
    id: "hr-backend-dev",
    title: "Backend Developer (Node.js)",
    type: "Role Certification",
    level: "Professional",
    duration: "120 mins",
    questions: "3 tasks (Node + Database + REST)",
    description: "Validates backend server construction, API design, database transactions, and error handling middleware.",
    verificationUrl: "https://www.hackerrank.com/skills-verification/backend_developer_node",
    badgeColor: "indigo"
  }
];

export const INDUSTRY_AI_CERTS: IndustryAiCert[] = [
  {
    id: "ai-cert-1",
    title: "Google Cloud Certified Professional Machine Learning Engineer",
    provider: "Google Cloud",
    trackType: "Cloud ML & MLOps",
    duration: "2-3 months preparation",
    cost: "$200 USD (Proctored Exam)",
    level: "Advanced",
    guidance: "Gold standard for production ML pipelines, Vertex AI, BigQuery ML, and model deployment architectures.",
    url: "https://cloud.google.com/learn/certification/machine-learning-engineer"
  },
  {
    id: "ai-cert-2",
    title: "Deep Learning Specialization by Andrew Ng",
    provider: "DeepLearning.AI / Coursera",
    trackType: "Deep Learning Foundations",
    duration: "3 months (5 courses)",
    cost: "Financial Aid Available / $49/mo",
    level: "Intermediate",
    guidance: "The world's most acclaimed deep learning credential covering Neural Networks, CNNs, RNNs, and Transformers.",
    url: "https://www.deeplearning.ai/courses/deep-learning-specialization/"
  },
  {
    id: "ai-cert-3",
    title: "Stanford Machine Learning Specialization",
    provider: "Stanford Online / DeepLearning.AI",
    trackType: "Core Machine Learning",
    duration: "2 months (3 courses)",
    cost: "Audit Free / Certificate Paid",
    level: "Beginner",
    guidance: "Updated modern Python/NumPy edition of Andrew Ng's legendary CS229 course. Essential for placement foundations.",
    url: "https://www.coursera.org/specializations/machine-learning-introduction"
  },
  {
    id: "ai-cert-4",
    title: "AWS Certified Machine Learning - Specialty (MLS-C01)",
    provider: "Amazon Web Services",
    trackType: "Cloud Architecture & SageMaker",
    duration: "2-3 months",
    cost: "$300 USD (Proctored)",
    level: "Advanced",
    guidance: "Recognized credential demonstrating mastery of Amazon SageMaker, data engineering for ML, and security.",
    url: "https://aws.amazon.com/certification/certified-machine-learning-specialty/"
  },
  {
    id: "ai-cert-5",
    title: "Generative AI with Large Language Models",
    provider: "DeepLearning.AI & AWS",
    trackType: "Generative AI & LLMs",
    duration: "3 weeks (16 hours)",
    cost: "Audit Free / Certificate Paid",
    level: "Intermediate",
    guidance: "Deeply practical course covering LLM pretraining, instruction tuning, RLHF, PEFT, LoRA, and LLM deployment.",
    url: "https://www.deeplearning.ai/courses/generative-ai-with-llms/"
  },
  {
    id: "ai-cert-6",
    title: "IBM Data Science Professional Certificate",
    provider: "IBM / Coursera",
    trackType: "Applied Data Science",
    duration: "3-5 months (10 courses)",
    cost: "Financial Aid Available",
    level: "Beginner",
    guidance: "Comprehensive applied curriculum spanning Python, SQL, Data Visualization, Analysis, and Machine Learning.",
    url: "https://www.coursera.org/professional-certificates/ibm-data-science"
  },
  {
    id: "ai-cert-7",
    title: "Microsoft Certified: Azure AI Engineer Associate (AI-102)",
    provider: "Microsoft",
    trackType: "Azure Cognitive Services & OpenAI",
    duration: "1-2 months",
    cost: "$165 USD (Proctored)",
    level: "Intermediate",
    guidance: "Validates building computer vision, natural language, and conversational AI solutions using Azure AI and OpenAI.",
    url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/"
  },
  {
    id: "ai-cert-8",
    title: "Kaggle Machine Learning & Deep Learning Micro-Courses",
    provider: "Kaggle / Google",
    trackType: "Hands-on Code Certificates",
    duration: "1-2 weeks per track",
    cost: "100% Free",
    level: "Beginner",
    guidance: "Free interactive certificates covering Intro to ML, Intermediate ML, Pandas, Feature Engineering, and Deep Learning.",
    url: "https://www.kaggle.com/learn"
  }
];
