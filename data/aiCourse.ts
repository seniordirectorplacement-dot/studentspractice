export interface WeeklyTopic {
  week: number;
  title: string;
  focus: string;
  objectives: string[];
  activities: string[];
  placementNotes: string;
  isMilestone?: boolean;
  resources: {
    title: string;
    type: 'Primary' | 'Supplementary' | 'Practice' | 'Code Lab';
    url: string;
  }[];
}

export const AI_SKILL_COURSE: WeeklyTopic[] = [
  {
    week: 1,
    title: "Python for Data Science & Scientific Computing",
    focus: "Python Core, Data Structures, OOP for Data Workflows",
    objectives: [
      "Master Python data structures (lists, dicts, sets, tuples, generators)",
      "Understand memory models, mutability, and functional patterns (map, filter, reduce)",
      "Set up Anaconda, virtual environments, and Jupyter / VS Code workflows"
    ],
    activities: [
      "Implement custom matrix operations from scratch in pure Python",
      "Benchmark time and space complexities of core collections",
      "Complete 10 Python algorithmic scripting challenges"
    ],
    placementNotes: "Common technical round filters test Python generator syntax, decorators, and list comprehension internals.",
    resources: [
      { title: "Python Official Docs & Tutorial", type: "Primary", url: "https://docs.python.org/3/tutorial/" },
      { title: "Real Python Scientific Guide", type: "Supplementary", url: "https://realpython.com/" },
      { title: "HackerRank Python Practice Track", type: "Practice", url: "https://www.hackerrank.com/domains/python" },
      { title: "Google Colab Environment", type: "Code Lab", url: "https://colab.research.google.com/" }
    ]
  },
  {
    week: 2,
    title: "Linear Algebra & Vector Calculus for ML",
    focus: "Vector Spaces, Matrices, Eigenvalues & Gradients",
    objectives: [
      "Understand matrix multiplication, rank, null space, and determinants",
      "Grasp eigenvalues, eigenvectors, and spectral decomposition",
      "Derive multivariate gradients and Jacobian/Hessian matrices"
    ],
    activities: [
      "Code manual matrix transformation visualizers in Python",
      "Compute analytical gradients for quadratic loss functions",
      "Solve 15 Linear Algebra vector projection problems"
    ],
    placementNotes: "Top product companies frequently ask about geometric interpretations of dot products and eigenvalue significance in PCA.",
    resources: [
      { title: "3Blue1Brown Essence of Linear Algebra", type: "Primary", url: "https://www.3blue1brown.com/topics/linear-algebra" },
      { title: "MIT Gilbert Strang Linear Algebra", type: "Supplementary", url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/" },
      { title: "Khan Academy Multivariable Calculus", type: "Practice", url: "https://www.khanacademy.org/math/multivariable-calculus" },
      { title: "Matrix Calculus for Deep Learning", type: "Code Lab", url: "https://matrixcalculus.org/" }
    ]
  },
  {
    week: 3,
    title: "Probability, Statistics & Bayesian Inference",
    focus: "Distributions, Hypothesis Testing & Maximum Likelihood",
    objectives: [
      "Master discrete and continuous distributions (Normal, Bernoulli, Poisson)",
      "Apply Bayes Theorem, conditional expectation, and covariance",
      "Conduct p-value hypothesis tests, A/B testing statistical power, and MLE estimation"
    ],
    activities: [
      "Simulate Monte Carlo experiments in Python",
      "Implement Maximum Likelihood Estimation (MLE) from scratch for Gaussian data",
      "Design an end-to-end simulated A/B testing significance test"
    ],
    placementNotes: "Crucial for Data Scientist & ML Engineer interviews; expects clear articulation of Central Limit Theorem and Type I vs Type II errors.",
    resources: [
      { title: "Penn State STAT 414 Probability Course", type: "Primary", url: "https://online.stat.psu.edu/stat414/" },
      { title: "StatQuest with Josh Starmer", type: "Supplementary", url: "https://statquest.org/" },
      { title: "Brilliant Applied Probability", type: "Practice", url: "https://brilliant.org/" },
      { title: "Scipy Stats Interactive Reference", type: "Code Lab", url: "https://docs.scipy.org/doc/scipy/reference/stats.html" }
    ]
  },
  {
    week: 4,
    title: "Numerical Computing with NumPy & Vectorization",
    focus: "NDArray Manipulation, Broadcasting & Memory Strides",
    objectives: [
      "Master ndarray slicing, strides, views vs copies",
      "Leverage multidimensional array broadcasting rules efficiently",
      "Eliminate slow Python loops through vectorization and SIMD principles"
    ],
    activities: [
      "Vectorize a complex Euclidean distance matrix calculation",
      "Benchmark vectorized NumPy vs pure Python loops (observe 100x speedup)",
      "Solve the 100 NumPy Exercises challenge"
    ],
    placementNotes: "Live coding interviews evaluate whether candidates can write vectorized matrix operations without fallback loops.",
    resources: [
      { title: "NumPy Comprehensive User Guide", type: "Primary", url: "https://numpy.org/doc/stable/user/" },
      { title: "100 NumPy Exercises by Rougier", type: "Practice", url: "https://github.com/rougier/numpy-100" },
      { title: "From Python to NumPy Book", type: "Supplementary", url: "https://www.labri.fr/perso/nrougier/from-python-to-numpy/" },
      { title: "NumPy Illustrated Visual Walkthrough", type: "Code Lab", url: "https://betterprogramming.pub/numpy-illustrated-the-visually-stunning-guide-to-machine-learning-with-python-450b116b1476" }
    ]
  },
  {
    week: 5,
    title: "Data Manipulation & Analysis with Pandas",
    focus: "DataFrames, MultiIndex, GroupBy, Merges & Reshaping",
    objectives: [
      "Deep dive into Series, DataFrames, indexing, and memory optimization",
      "Execute multi-table joins, merges, concatenations, and pivot tables",
      "Master high-performance aggregation with split-apply-combine (GroupBy)"
    ],
    activities: [
      "Clean a messy 1,000,000-row real estate dataset with missing and malformed entries",
      "Perform multi-index aggregation and custom transform lambda expressions",
      "Write unit tests for data extraction pipelines"
    ],
    placementNotes: "Product companies test SQL-like manipulation in Pandas: inner vs left joins, group-by aggregations, and window functions.",
    resources: [
      { title: "Pandas Documentation & Cookbook", type: "Primary", url: "https://pandas.pydata.org/docs/" },
      { title: "Modern Pandas Guide by Tom Augspurger", type: "Supplementary", url: "https://tomaugspurger.net/posts/modern-1-intro/" },
      { title: "Kaggle Pandas Certification", type: "Practice", url: "https://www.kaggle.com/learn/pandas" },
      { title: "Data School Pandas Tutorials", type: "Code Lab", url: "https://www.dataschool.io/easier-data-analysis-with-pandas/" }
    ]
  },
  {
    week: 6,
    title: "Exploratory Data Analysis (EDA) & Data Visualization",
    focus: "Matplotlib, Seaborn, Plotly & Distribution Diagnostics",
    objectives: [
      "Detect outliers using IQR, Z-scores, and box plots",
      "Analyze univariate, bivariate, and multivariate distribution correlations",
      "Build publication-quality interactive charts with Plotly and Seaborn"
    ],
    activities: [
      "Perform complete EDA on the Titanic & Boston Housing datasets",
      "Generate correlation heatmaps and identify multicollinearity (VIF)",
      "Create interactive dashboards highlighting business anomalies"
    ],
    placementNotes: "Interviewers look for visual storytelling and critical statistical reasoning beyond just calling .plot().",
    resources: [
      { title: "Seaborn Statistical Data Visualization", type: "Primary", url: "https://seaborn.pydata.org/" },
      { title: "Matplotlib Architecture & Style Guide", type: "Supplementary", url: "https://matplotlib.org/" },
      { title: "Plotly Python Interactive Library", type: "Practice", url: "https://plotly.com/python/" },
      { title: "Storytelling with Data Guide", type: "Code Lab", url: "https://www.storytellingwithdata.com/" }
    ]
  },
  {
    week: 7,
    title: "Feature Engineering & Preprocessing Pipelines",
    focus: "Encoding, Imputation, Scaling & Scikit-Learn Pipelines",
    objectives: [
      "Handle missing data with KNN / iterative imputer algorithms",
      "Encode categorical features (One-Hot, Target, Frequency, Ordinal)",
      "Build leak-free Scikit-Learn ColumnTransformer and Pipeline architectures"
    ],
    activities: [
      "Build a robust end-to-end preprocessing pipeline for high-cardinality features",
      "Benchmark scaling methods: StandardScaler vs RobustScaler on skewed data",
      "Implement automated feature selection via SelectKBest and Mutual Information"
    ],
    placementNotes: "Data leakage during training/test preprocessing is the number one blunder interviewers trap candidates with.",
    resources: [
      { title: "Scikit-Learn Preprocessing User Guide", type: "Primary", url: "https://scikit-learn.org/stable/modules/preprocessing.html" },
      { title: "Feature Engineering for ML (Alice Zheng)", type: "Supplementary", url: "https://www.oreilly.com/library/view/feature-engineering-for/9781491953235/" },
      { title: "Kaggle Feature Engineering Course", type: "Practice", url: "https://www.kaggle.com/learn/feature-engineering" },
      { title: "Category Encoders Python Library", type: "Code Lab", url: "https://contrib.scikit-learn.org/category_encoders/" }
    ]
  },
  {
    week: 8,
    title: "Supervised Learning: Linear & Logistic Regression",
    focus: "Ordinary Least Squares, Cost Functions, Regularization (L1/L2)",
    objectives: [
      "Derive normal equations and gradient descent for linear regression",
      "Understand logistic sigmoid function, log-odds, and cross-entropy loss",
      "Differentiate Ridge (L2), Lasso (L1), and ElasticNet regularization mechanics"
    ],
    activities: [
      "Implement batch and stochastic gradient descent from scratch in Python",
      "Calculate analytical derivatives of binary cross-entropy loss",
      "Evaluate ROC-AUC, Precision-Recall curves, and Confusion Matrices on unbalanced data"
    ],
    placementNotes: "Expect mathematical derivations of logistic loss gradient and why L1 regularization enforces sparsity.",
    resources: [
      { title: "Scikit-Learn Generalized Linear Models", type: "Primary", url: "https://scikit-learn.org/stable/modules/linear_model.html" },
      { title: "Andrew Ng CS229 Lecture Notes (Linear Regression)", type: "Supplementary", url: "https://cs229.stanford.edu/notes2022fall/main_notes.pdf" },
      { title: "Machine Learning Crash Course by Google", type: "Practice", url: "https://developers.google.com/machine-learning/crash-course" },
      { title: "Interactive Sigmoid & Logistic Explorer", type: "Code Lab", url: "https://ml-cheatsheet.readthedocs.io/en/latest/logistic_regression.html" }
    ]
  },
  {
    week: 9,
    title: "Tree-Based Models & Ensemble Learning",
    focus: "Decision Trees, Random Forests, Bagging vs Boosting",
    objectives: [
      "Understand impurity metrics: Gini Impurity, Shannon Entropy, and Variance Reduction",
      "Grasp Random Forest bootstrap aggregation and out-of-bag (OOB) error",
      "Master Gradient Boosting theory: residual fitting and learning rate decay"
    ],
    activities: [
      "Write a recursive Decision Tree split algorithm from scratch",
      "Train and compare Random Forest vs AdaBoost on noisy tabular data",
      "Interpret tree feature importances (MDI vs Permutation Importance)"
    ],
    placementNotes: "Compare bagging (variance reduction) vs boosting (bias reduction) and how Random Forest reduces tree correlation.",
    resources: [
      { title: "Scikit-Learn Ensemble Methods Reference", type: "Primary", url: "https://scikit-learn.org/stable/modules/ensemble.html" },
      { title: "StatQuest Decision Trees and Random Forests", type: "Supplementary", url: "https://statquest.org/" },
      { title: "Elements of Statistical Learning (Hastie)", type: "Practice", url: "https://hastie.su.domains/ElemStatLearn/" },
      { title: "Visualizing Decision Trees with dtreeviz", type: "Code Lab", url: "https://github.com/parrt/dtreeviz" }
    ]
  },
  {
    week: 10,
    title: "High-Performance Boosting: XGBoost, LightGBM, CatBoost",
    focus: "Second-Order Gradients, Histogram Binning & Categorical Splits",
    objectives: [
      "Understand Taylor series 2nd-order Taylor expansions in XGBoost objective",
      "Compare LightGBM leaf-wise tree growth and GOSS (Gradient-based One-Side Sampling)",
      "Leverage CatBoost ordered boosting for handling categorical variables without leakage"
    ],
    activities: [
      "Fine-tune hyperparameters using Optuna (learning_rate, max_depth, subsample)",
      "Train XGBoost on financial fraud detection with extreme class imbalance",
      "Evaluate inference latency across XGBoost, LightGBM, and CatBoost"
    ],
    placementNotes: "Tabular interview tasks almost exclusively rely on XGBoost/LightGBM. Know why 2nd order Taylor approximations enable exact Newton steps.",
    resources: [
      { title: "XGBoost Official Documentation", type: "Primary", url: "https://xgboost.readthedocs.io/en/stable/" },
      { title: "LightGBM Documentation", type: "Supplementary", url: "https://lightgbm.readthedocs.io/en/latest/" },
      { title: "CatBoost Core Concepts Guide", type: "Practice", url: "https://catboost.ai/docs/" },
      { title: "Optuna Hyperparameter Optimization", type: "Code Lab", url: "https://optuna.org/" }
    ]
  },
  {
    week: 11,
    title: "Support Vector Machines & Kernel Methods",
    focus: "Max-Margin Hyperplane, Primal/Dual Form, Soft-Margin & Kernels",
    objectives: [
      "Derive hard-margin and soft-margin SVM optimization problems (slack variables)",
      "Understand Lagrangian duality, KKT conditions, and support vector sparsity",
      "Apply the Kernel Trick (Linear, Polynomial, RBF) to non-linear manifolds"
    ],
    activities: [
      "Implement linear SVM using CVXOPT quadratic programming solver",
      "Visualize RBF kernel gamma boundaries on spiral synthetic data",
      "Benchmark SVM training time complexity against large datasets"
    ],
    placementNotes: "Classic FAANG question: Explain Mercer theorem, why dual representation only requires dot products, and why SVM scales O(n^2) with sample size.",
    resources: [
      { title: "Scikit-Learn SVM Documentation", type: "Primary", url: "https://scikit-learn.org/stable/modules/svm.html" },
      { title: "Stanford CS229 SVM Lecture Notes", type: "Supplementary", url: "https://cs229.stanford.edu/notes2022fall/main_notes.pdf" },
      { title: "MIT 6.034 SVM Lecture by Patrick Winston", type: "Practice", url: "https://ocw.mit.edu/courses/6-034-artificial-intelligence-fall-2010/" },
      { title: "Interactive Support Vector Machine Playground", type: "Code Lab", url: "https://cs.stanford.edu/people/karpathy/svmjs/demo/" }
    ]
  },
  {
    week: 12,
    title: "ML Foundations Milestone & Model Validation Framework",
    focus: "Cross-Validation, Bias-Variance Diagnostics & Production Assessment",
    objectives: [
      "Conduct nested K-Fold cross validation without data leakage",
      "Diagnose overfitting/underfitting via learning curves and validation curves",
      "Deliver a comprehensive production-grade machine learning model pipeline"
    ],
    activities: [
      "Milestone Evaluation: Complete end-to-end Kaggle-style ML competition baseline",
      "Perform SHAP (SHapley Additive exPlanations) model explainability analysis",
      "Draft a structured technical report summarizing model trade-offs"
    ],
    placementNotes: "Milestone checkpoint: Candidates must defend feature selection, metric choice, and production monitoring strategies.",
    isMilestone: true,
    resources: [
      { title: "SHAP Model Interpretability Documentation", type: "Primary", url: "https://shap.readthedocs.io/en/latest/" },
      { title: "Scikit-Learn Cross-Validation Guide", type: "Supplementary", url: "https://scikit-learn.org/stable/modules/cross_validation.html" },
      { title: "Google Rules of Machine Learning", type: "Practice", url: "https://developers.google.com/machine-learning/guides/rules-of-ml" },
      { title: "Papers with Code ML Benchmarks", type: "Code Lab", url: "https://paperswithcode.com/" }
    ]
  },
  {
    week: 13,
    title: "Unsupervised Learning: Clustering Algorithms",
    focus: "K-Means, K-Means++, Hierarchical Clustering & DBSCAN",
    objectives: [
      "Derive K-Means Lloyd algorithm, inertia, and Silhouette score",
      "Master density-based clustering with DBSCAN (eps, min_samples, core/border points)",
      "Construct agglomerative hierarchical dendrograms with ward/average linkage"
    ],
    activities: [
      "Implement K-Means clustering from scratch with random and K-Means++ initialization",
      "Cluster geographic spatial location points using DBSCAN to identify hotspots",
      "Evaluate cluster stability with Rand Index and Davies-Bouldin index"
    ],
    placementNotes: "Compare K-Means spherical assumption vs DBSCAN arbitrary shapes and sensitivity to distance metrics.",
    resources: [
      { title: "Scikit-Learn Clustering Documentation", type: "Primary", url: "https://scikit-learn.org/stable/modules/clustering.html" },
      { title: "StatQuest K-Means and Hierarchical Clustering", type: "Supplementary", url: "https://statquest.org/" },
      { title: "DBSCAN Clustering Interactive Visualizer", type: "Practice", url: "https://www.naftaliharris.com/blog/visualizing-dbscan-clustering/" },
      { title: "Clustering Performance Evaluation Metrics", type: "Code Lab", url: "https://scikit-learn.org/stable/modules/clustering.html#clustering-performance-evaluation" }
    ]
  },
  {
    week: 14,
    title: "Dimensionality Reduction: PCA, SVD, and t-SNE",
    focus: "Eigenvectors, Covariance Matrix, Singular Value Decomposition",
    objectives: [
      "Derive Principal Component Analysis through maximum variance projection",
      "Understand Singular Value Decomposition (SVD) relation to low-rank approximation",
      "Apply t-SNE and UMAP for high-dimensional non-linear manifold visualization"
    ],
    activities: [
      "Implement PCA using SVD in pure NumPy and verify against Scikit-Learn",
      "Reduce MNIST 784 dimensions to 2D using PCA vs t-SNE and compare cluster separation",
      "Perform image compression via truncated SVD matrix factorizations"
    ],
    placementNotes: "Derive how PCA eigenvalues correspond to explained variance ratio. Explain why t-SNE preserves local neighborhood but distorts global distance.",
    resources: [
      { title: "Distill.pub: How to Use t-SNE Effectively", type: "Primary", url: "https://distill.pub/2016/misread-tsne/" },
      { title: "Understanding PCA with Interactive Visuals", type: "Supplementary", url: "https://setosa.io/ev/principal-component-analysis/" },
      { title: "UMAP Dimensionality Reduction Guide", type: "Practice", url: "https://umap-learn.readthedocs.io/en/latest/" },
      { title: "Fast.ai Computational Linear Algebra", type: "Code Lab", url: "https://github.com/fastai/numerical-linear-algebra" }
    ]
  },
  {
    week: 15,
    title: "Recommendation Systems & Collaborative Filtering",
    focus: "Matrix Factorization, Alternating Least Squares (ALS), Cosine Similarity",
    objectives: [
      "Build memory-based collaborative filtering (User-User, Item-Item)",
      "Formulate model-based Matrix Factorization with embedding latent factors",
      "Handle cold start problems using hybrid content-based recommendation techniques"
    ],
    activities: [
      "Build a movie recommendation engine on MovieLens 100k dataset",
      "Train an implicit feedback Matrix Factorization model with ALS",
      "Evaluate precision@k, recall@k, and NDCG (Normalized Discounted Cumulative Gain)"
    ],
    placementNotes: "E-commerce and streaming company interviews heavily scrutinize two-tower candidate generation and ranking architecture.",
    resources: [
      { title: "Google Developers Recommendation Systems Course", type: "Primary", url: "https://developers.google.com/machine-learning/recommendation" },
      { title: "Implicit Collaborative Filtering Library", type: "Supplementary", url: "https://benfred.github.io/implicit/" },
      { title: "Surprise Python RecSys Library", type: "Practice", url: "https://surpriselib.com/" },
      { title: "MovieLens Dataset Hub", type: "Code Lab", url: "https://grouplens.org/datasets/movielens/" }
    ]
  },
  {
    week: 16,
    title: "Time Series Forecasting & Anomaly Detection",
    focus: "Stationarity, ARIMA, Prophet, Exponential Smoothing & Isolation Forests",
    objectives: [
      "Test for stationarity via Augmented Dickey-Fuller (ADF) test and differencing",
      "Model autocorrelation (ACF) and partial autocorrelation (PACF) in ARIMA",
      "Detect temporal anomalies with Isolation Forests and Autoencoders"
    ],
    activities: [
      "Decompose time series into trend, seasonality, and residual components",
      "Build and evaluate an ARIMA / SARIMAX demand forecasting pipeline",
      "Deploy an Isolation Forest pipeline detecting network intrusion anomalies"
    ],
    placementNotes: "Financial and logistics companies test understanding of walk-forward validation without lookahead bias.",
    resources: [
      { title: "Forecasting: Principles and Practice (Hyndman)", type: "Primary", url: "https://otexts.com/fpp3/" },
      { title: "Statsmodels Time Series Analysis", type: "Supplementary", url: "https://www.statsmodels.org/stable/tsa.html" },
      { title: "Meta Prophet Forecasting Tool", type: "Practice", url: "https://facebook.github.io/prophet/" },
      { title: "Darts Time Series Python Library", type: "Code Lab", url: "https://unit8co.github.io/darts/" }
    ]
  },
  {
    week: 17,
    title: "Deep Learning Foundations: Neural Networks & Backprop",
    focus: "Multilayer Perceptrons, Activation Functions, Chain Rule & Loss",
    objectives: [
      "Trace forward propagation from affine transformation to non-linear activations (ReLU, GELU)",
      "Derive backpropagation gradient equations via multi-variable chain rule",
      "Diagnose vanishing and exploding gradients and initialization strategies (He, Xavier)"
    ],
    activities: [
      "Code an autograd engine and 2-layer Neural Network from scratch in pure Python",
      "Implement numerical gradient checking to verify analytical backpropagation",
      "Train an MLP on digits classification without external DL frameworks"
    ],
    placementNotes: "Deriving backprop for a 2-layer MLP on a whiteboard is an iconic senior ML interview standard.",
    resources: [
      { title: "Andrej Karpathy: Micrograd & Backprop Walkthrough", type: "Primary", url: "https://github.com/karpathy/micrograd" },
      { title: "Deep Learning Book by Goodfellow, Bengio, Courville", type: "Supplementary", url: "https://www.deeplearningbook.org/" },
      { title: "Neural Networks and Deep Learning by Michael Nielsen", type: "Practice", url: "http://neuralnetworksanddeeplearning.com/" },
      { title: "TensorFlow Neural Network Playground", type: "Code Lab", url: "https://playground.tensorflow.org/" }
    ]
  },
  {
    week: 18,
    title: "PyTorch Framework & GPU Accelerated Computing",
    focus: "Tensors, Autograd, nn.Module, Datasets & DataLoader",
    objectives: [
      "Master torch.Tensor operations, device management (CUDA / MPS), and broadcasting",
      "Implement custom nn.Module architectures with forward passes and hook utilities",
      "Build multi-threaded DataLoaders with custom collation and transform pipelines"
    ],
    activities: [
      "Construct a PyTorch training loop with validation, checkpointing, and early stopping",
      "Implement a custom learning rate scheduler (Cosine Annealing with Warm Restarts)",
      "Profile GPU memory allocation and eliminate CPU-GPU bottlenecks"
    ],
    placementNotes: "Be ready to write a clean PyTorch training loop on coderpad including loss.backward(), optimizer.step(), and optimizer.zero_grad().",
    resources: [
      { title: "PyTorch Deep Learning Official Tutorials", type: "Primary", url: "https://pytorch.org/tutorials/" },
      { title: "Deep Learning with PyTorch Book (free)", type: "Supplementary", url: "https://pytorch.org/deep-learning-with-pytorch" },
      { title: "PyTorch Blitz 60-Minute Primer", type: "Practice", url: "https://pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html" },
      { title: "PyTorch Lightning Framework", type: "Code Lab", url: "https://lightning.ai/" }
    ]
  },
  {
    week: 19,
    title: "Optimization Algorithms & Regularization in Deep Learning",
    focus: "SGD with Momentum, RMSprop, Adam, AdamW, Dropout & BatchNorm",
    objectives: [
      "Contrast first-order optimizers: SGD, Momentum, Nesterov, AdaGrad, RMSprop, Adam, AdamW",
      "Understand why Batch Normalization accelerates convergence and covariate shift",
      "Analyze Layer Normalization, Weight Decay vs L2 penalty, and Dropout dynamics"
    ],
    activities: [
      "Implement AdamW optimizer from scratch in PyTorch",
      "Benchmark convergence speeds on CIFAR-10 across SGD, Adam, and AdamW",
      "Inspect gradient histograms with TensorBoard and Weights & Biases"
    ],
    placementNotes: "Explain why AdamW decouples weight decay from gradient update unlike classic L2 regularized Adam.",
    resources: [
      { title: "Sebastian Ruder: Overview of Gradient Descent Algorithms", type: "Primary", url: "https://ruder.io/optimizing-gradient-descent/" },
      { title: "Batch Normalization Original Paper (Ioffe & Szegedy)", type: "Supplementary", url: "https://arxiv.org/abs/1502.03167" },
      { title: "Decoupled Weight Decay Regularization (AdamW)", type: "Practice", url: "https://arxiv.org/abs/1711.05101" },
      { title: "Weights & Biases ML Experiment Tracking", type: "Code Lab", url: "https://wandb.ai/" }
    ]
  },
  {
    week: 20,
    title: "Convolutional Neural Networks (CNN) Architecture",
    focus: "Convolutions, Pooling, Receptive Fields, ResNet & Residual Connections",
    objectives: [
      "Calculate output feature map dimensions, padding, stride, and dilation",
      "Understand why skip connections in ResNet eliminate degradation and vanishing gradients",
      "Master modern backbones: EfficientNet, MobileNet depthwise separable convolutions"
    ],
    activities: [
      "Implement a 2D convolution forward and backward pass in NumPy",
      "Build and train a custom mini-ResNet with bottleneck blocks in PyTorch",
      "Compute receptive field sizes across layered convolutional networks"
    ],
    placementNotes: "Derive output shape formula: [(W - K + 2P)/S] + 1 and parameter count for Conv2D layers.",
    resources: [
      { title: "Stanford CS231n: CNNs for Visual Recognition", type: "Primary", url: "https://cs231n.stanford.edu/" },
      { title: "Deep Residual Learning for Image Recognition (ResNet)", type: "Supplementary", url: "https://arxiv.org/abs/1512.03385" },
      { title: "Torchvision Models & Pretrained Weights", type: "Practice", url: "https://pytorch.org/vision/stable/models.html" },
      { title: "CNN Explainer Interactive Interactive Architecture", type: "Code Lab", url: "https://poloclub.github.io/cnn-explainer/" }
    ]
  },
  {
    week: 21,
    title: "Transfer Learning & Computer Vision Tasks",
    focus: "Fine-Tuning, Feature Extraction, Augmentation & Vision Transformers",
    objectives: [
      "Execute fine-tuning vs freezing backbone weights for downstream tasks",
      "Leverage Albumentations for test-time augmentation (TTA) and geometric transforms",
      "Understand Vision Transformer (ViT) patch embedding and self-attention on images"
    ],
    activities: [
      "Fine-tune a pretrained ResNet-50 / EfficientNet on medical imaging classification",
      "Benchmark feature extractor vs end-to-end fine-tuning accuracy",
      "Visualize model decisions using Grad-CAM heatmaps"
    ],
    placementNotes: "Candidates must explain how to avoid catastrophic forgetting when fine-tuning pretrained vision models.",
    resources: [
      { title: "Torchvision Transfer Learning Tutorial", type: "Primary", url: "https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html" },
      { title: "Albumentations Image Augmentation Library", type: "Supplementary", url: "https://albumentations.ai/" },
      { title: "An Image is Worth 16x16 Words (ViT Paper)", type: "Practice", url: "https://arxiv.org/abs/2010.11929" },
      { title: "Pytorch Grad-CAM Library", type: "Code Lab", url: "https://github.com/jacobgil/pytorch-grad-cam" }
    ]
  },
  {
    week: 22,
    title: "Object Detection & Instance Segmentation",
    focus: "YOLOv8, Faster R-CNN, Anchor Boxes, IoU & Non-Max Suppression",
    objectives: [
      "Calculate Intersection over Union (IoU) and mean Average Precision (mAP@50:95)",
      "Understand anchor-free vs anchor-based one-stage detectors (YOLO, RetinaNet)",
      "Implement Non-Maximum Suppression (NMS) to eliminate duplicate bounding boxes"
    ],
    activities: [
      "Write Non-Maximum Suppression (NMS) algorithm from scratch in Python",
      "Train YOLOv8 on custom annotated object dataset using Ultralytics",
      "Evaluate inference speed (FPS) across ONNX and TensorRT runtimes"
    ],
    placementNotes: "Questions probe mAP calculation mechanics, Precision-Recall AUC across multiple confidence thresholds, and real-time latency tradeoffs.",
    resources: [
      { title: "Ultralytics YOLOv8 Documentation", type: "Primary", url: "https://docs.ultralytics.com/" },
      { title: "Faster R-CNN Architecture Overview", type: "Supplementary", url: "https://arxiv.org/abs/1506.01497" },
      { title: "Roboflow Computer Vision Datasets & Tools", type: "Practice", url: "https://roboflow.com/" },
      { title: "Papers with Code Object Detection Leaderboard", type: "Code Lab", url: "https://paperswithcode.com/task/object-detection" }
    ]
  },
  {
    week: 23,
    title: "Recurrent Networks & Sequential Modeling",
    focus: "RNN, LSTM, GRU, Gated Mechanisms & Seq2Seq",
    objectives: [
      "Identify vanishing gradients in simple RNNs unfolding across time steps",
      "Master LSTM internal gates: Forget gate, Input gate, Cell state update, Output gate",
      "Formulate Sequence-to-Sequence (Seq2Seq) encoder-decoder architectures"
    ],
    activities: [
      "Implement LSTM forward equations step-by-step in pure NumPy",
      "Train a character-level text generator on Shakespeare using PyTorch",
      "Compare training stability and parameter counts of LSTM vs GRU"
    ],
    placementNotes: "Whiteboard interview classic: Draw the LSTM memory cell and explain how the additive cell state gradient highway resists vanishing gradients.",
    resources: [
      { title: "Colah's Blog: Understanding LSTM Networks", type: "Primary", url: "https://colah.github.io/posts/2015-08-Understanding-LSTMs/" },
      { title: "Andrej Karpathy: The Unreasonable Effectiveness of RNNs", type: "Supplementary", url: "http://karpathy.github.io/2015/05/21/rnn-effectiveness/" },
      { title: "PyTorch Sequence Models Tutorial", type: "Practice", url: "https://pytorch.org/tutorials/beginner/nlp/sequence_models_tutorial.html" },
      { title: "Illustrated Guide to LSTM and GRU", type: "Code Lab", url: "https://towardsdatascience.com/illustrated-guide-to-lstms-and-gru-s-a-step-by-step-explanation-44e9eb85bf21" }
    ]
  },
  {
    week: 24,
    title: "Core ML & Deep Learning Milestone Assessment",
    focus: "Comprehensive DL Pipeline, Model Evaluation & Milestone Defense",
    objectives: [
      "Synthesize computer vision or sequential deep learning model end-to-end",
      "Benchmark model against production metrics (F1, latency, throughput, memory)",
      "Complete comprehensive milestone evaluation review"
    ],
    activities: [
      "Milestone Evaluation: Deploy a production-ready PyTorch vision/sequential model",
      "Package model into TorchScript / ONNX format for cross-platform runtime",
      "Present milestone project architecture in peer mock review"
    ],
    placementNotes: "Milestone checkpoint: Tests candidate ability to transition from exploratory notebook code to modular Python packages.",
    isMilestone: true,
    resources: [
      { title: "ONNX Runtime Documentation", type: "Primary", url: "https://onnxruntime.ai/" },
      { title: "TorchScript JIT Compiler Guide", type: "Supplementary", url: "https://pytorch.org/docs/stable/jit.html" },
      { title: "Full Stack Deep Learning Course", type: "Practice", url: "https://fullstackdeeplearning.com/" },
      { title: "Hugging Face Model Hub", type: "Code Lab", url: "https://huggingface.co/models" }
    ]
  },
  {
    week: 25,
    title: "Natural Language Processing (NLP) & Tokenization",
    focus: "TF-IDF, Word2Vec, GloVe, BPE, WordPiece & Subword Tokenization",
    objectives: [
      "Compare frequency-based embeddings (TF-IDF, Bag-of-Words) with dense distributed embeddings",
      "Understand Word2Vec skip-gram and CBOW architectures with negative sampling",
      "Master modern subword tokenizers: Byte-Pair Encoding (BPE), SentencePiece, WordPiece"
    ],
    activities: [
      "Implement Byte-Pair Encoding (BPE) tokenizer algorithm from scratch",
      "Train Word2Vec embeddings and test vector arithmetic (King - Man + Woman = Queen)",
      "Build a sentiment classifier leveraging Spacy and Scikit-Learn"
    ],
    placementNotes: "Interviews probe subword tokenization internals and why out-of-vocabulary (OOV) tokens are eliminated by BPE.",
    resources: [
      { title: "Stanford CS224N: Natural Language Processing with Deep Learning", type: "Primary", url: "https://web.stanford.edu/class/cs224n/" },
      { title: "Hugging Face Tokenizers Library", type: "Supplementary", url: "https://huggingface.co/docs/tokenizers/index" },
      { title: "Illustrated Word2Vec by Jay Alammar", type: "Practice", url: "https://jalammar.github.io/illustrated-word2vec/" },
      { title: "Spacy Industrial-Strength NLP", type: "Code Lab", url: "https://spacy.io/" }
    ]
  },
  {
    week: 26,
    title: "The Transformer Architecture & Self-Attention",
    focus: "Attention Is All You Need, Scaled Dot-Product, Multi-Head Attention",
    objectives: [
      "Derive Scaled Dot-Product Attention: Softmax(Q K^T / sqrt(d_k)) V",
      "Understand why scaling factor sqrt(d_k) prevents vanishing softmax gradients",
      "Formulate Positional Encodings (Sinusoidal & RoPE rotary embeddings)"
    ],
    activities: [
      "Code Multi-Head Attention layer in PyTorch from scratch without nn.MultiheadAttention",
      "Visualize self-attention weight heatmaps across sentence tokens",
      "Build a mini-Transformer encoder block with layer norm and residual connections"
    ],
    placementNotes: "Top-tier AI interview mandatory question: Write the exact tensor shapes for Q, K, V across batch_size, seq_len, num_heads, head_dim.",
    resources: [
      { title: "Attention Is All You Need (Vaswani et al.)", type: "Primary", url: "https://arxiv.org/abs/1706.03762" },
      { title: "The Illustrated Transformer by Jay Alammar", type: "Supplementary", url: "https://jalammar.github.io/illustrated-transformer/" },
      { title: "The Annotated Transformer (Harvard NLP)", type: "Practice", url: "https://nlp.seas.harvard.edu/annotated-transformer/" },
      { title: "Andrej Karpathy: Let's build GPT from scratch", type: "Code Lab", url: "https://github.com/karpathy/ng-video-lecture" }
    ]
  },
  {
    week: 27,
    title: "Pretrained Language Models: BERT, RoBERTa, T5, GPT",
    focus: "Masked Language Modeling (MLM), Causal Language Modeling (CLM), Seq2Seq",
    objectives: [
      "Differentiate autoencoding (BERT), autoregressive (GPT), and sequence-to-sequence (T5)",
      "Understand pretraining objectives: MLM, Next Sentence Prediction (NSP), Causal Cross-Entropy",
      "Fine-tune Hugging Face transformer models with Trainer API and evaluate BLEU / ROUGE"
    ],
    activities: [
      "Fine-tune BERT for multi-class legal document classification on Hugging Face",
      "Implement text summarization with T5 / BART and calculate ROUGE-L metrics",
      "Benchmark model parameter size vs inference throughput across fp32 and fp16"
    ],
    placementNotes: "Distinguish when to choose encoder-only (classification, NER) vs decoder-only (text gen) vs encoder-decoder (translation).",
    resources: [
      { title: "Hugging Face Transformers Documentation", type: "Primary", url: "https://huggingface.co/docs/transformers/index" },
      { title: "BERT: Pre-training of Deep Bidirectional Transformers", type: "Supplementary", url: "https://arxiv.org/abs/1810.04805" },
      { title: "Hugging Face NLP Course (Free & Interactive)", type: "Practice", url: "https://huggingface.co/learn/nlp-course" },
      { title: "Exploring the Limits of Transfer Learning (T5 Paper)", type: "Code Lab", url: "https://arxiv.org/abs/1910.10683" }
    ]
  },
  {
    week: 28,
    title: "Large Language Models (LLMs) & Decoder Foundations",
    focus: "Next-Token Prediction, KV Caching, Sampling Strategies, Context Windows",
    objectives: [
      "Understand autoregressive generation and why KV Cache reduces complexity from O(N^2) to O(N)",
      "Analyze decoding parameters: Temperature, Top-p (nucleus), Top-k, Repetition Penalty",
      "Explore modern architectures: LLaMA, Mistral, FlashAttention, Mixture of Experts (MoE)"
    ],
    activities: [
      "Implement text generation decoding with manual KV Cache in PyTorch",
      "Simulate greedy search vs beam search vs top-p sampling outputs",
      "Inspect Mistral / LLaMA architecture config files on Hugging Face"
    ],
    placementNotes: "Crucial technical interview concept: Explain KV cache memory footprint (2 * num_layers * num_heads * head_dim * seq_len * dtype_bytes).",
    resources: [
      { title: "FlashAttention: Fast and Memory-Efficient Exact Attention", type: "Primary", url: "https://arxiv.org/abs/2205.14135" },
      { title: "LLaMA: Open and Efficient Foundation Language Models", type: "Supplementary", url: "https://arxiv.org/abs/2302.13971" },
      { title: "Hugging Face Text Generation Strategies", type: "Practice", url: "https://huggingface.co/docs/transformers/main/en/generation_strategies" },
      { title: "Mistral AI Architecture Deep-Dive", type: "Code Lab", url: "https://docs.mistral.ai/" }
    ]
  },
  {
    week: 29,
    title: "Prompt Engineering & In-Context Learning",
    focus: "Few-Shot, Chain-of-Thought (CoT), ReAct, Structured Outputs & JSON Mode",
    objectives: [
      "Master Zero-Shot, Few-Shot exemplars, and Chain-of-Thought reasoning prompting",
      "Implement ReAct (Reason + Act) prompting loop for agentic workflows",
      "Enforce strict JSON schema outputs and function calling protocols"
    ],
    activities: [
      "Benchmark prompt templates for data extraction with precision/recall checks",
      "Build a multi-step reasoning prompt solving arithmetic & logic puzzles",
      "Implement automated prompt evaluation using LLM-as-a-judge techniques"
    ],
    placementNotes: "Companies value rigorous prompt evaluations with test suites over ad-hoc prompt tweaking.",
    resources: [
      { title: "Prompt Engineering Guide (DAIR.AI)", type: "Primary", url: "https://www.promptingguide.ai/" },
      { title: "OpenAI Prompt Engineering Best Practices", type: "Supplementary", url: "https://platform.openai.com/docs/guides/prompt-engineering" },
      { title: "Anthropic Prompt Engineering Interactive Tutorial", type: "Practice", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview" },
      { title: "ReAct: Synergizing Reasoning and Acting in Language Models", type: "Code Lab", url: "https://arxiv.org/abs/2210.03629" }
    ]
  },
  {
    week: 30,
    title: "Retrieval-Augmented Generation (RAG) Architecture",
    focus: "Chunking Strategies, Embeddings, Dense Retrieval, Vector Stores & Re-ranking",
    objectives: [
      "Compare chunking methods: recursive character, semantic, markdown chunking",
      "Benchmark dense embedding models (text-embedding-3, BGE, E5) and cosine similarity",
      "Implement cross-encoder re-ranking (Cohere, BGE-Reranker) to boost top-k relevance"
    ],
    activities: [
      "Build a complete RAG system answering queries over 50 technical PDF documents",
      "Evaluate RAG using RAGAS framework (faithfulness, answer relevancy, context precision)",
      "Add hybrid search combining BM25 keyword matching with dense vector retrieval"
    ],
    placementNotes: "RAG is the #1 requested enterprise GenAI skill today. Candidates must know how to mitigate hallucinations and evaluate retrieval precision.",
    resources: [
      { title: "LangChain RAG Architecture Tutorial", type: "Primary", url: "https://python.langchain.com/docs/tutorials/rag/" },
      { title: "LlamaIndex Production RAG Guide", type: "Supplementary", url: "https://docs.llamaindex.ai/en/stable/" },
      { title: "RAGAS: Automated Evaluation of Retrieval Augmented Generation", type: "Practice", url: "https://docs.ragas.io/en/stable/" },
      { title: "Pinecone Learning Center: Vector Embeddings Guide", type: "Code Lab", url: "https://www.pinecone.io/learn/" }
    ]
  },
  {
    week: 31,
    title: "Vector Databases & Semantic Search at Scale",
    focus: "HNSW, IVF-PQ, FAISS, Chroma, Qdrant, Milvus & Filtering",
    objectives: [
      "Understand Approximate Nearest Neighbor (ANN) algorithms: Hierarchical Navigable Small World (HNSW)",
      "Grasp Inverted File Index with Product Quantization (IVF-PQ) compression",
      "Perform metadata filtered vector queries with strict latency SLAs (<50ms)"
    ],
    activities: [
      "Index 100,000 vectors in FAISS with HNSW vs Flat L2 index and measure recall vs QPS",
      "Build a semantic search application backed by ChromaDB / Qdrant",
      "Implement real-time vector upserts and namespace isolation"
    ],
    placementNotes: "Explain the tradeoff between exact k-NN (O(N*D)) vs HNSW graph traversal and how quantization compresses RAM requirements.",
    resources: [
      { title: "FAISS: A Library for Efficient Similarity Search (Meta AI)", type: "Primary", url: "https://github.com/facebookresearch/faiss" },
      { title: "Pinecone HNSW Vector Search Visualized", type: "Supplementary", url: "https://www.pinecone.io/learn/series/faiss/hnsw/" },
      { title: "Qdrant Vector Database Documentation", type: "Practice", url: "https://qdrant.tech/documentation/" },
      { title: "Chroma Open-Source Vector Store", type: "Code Lab", url: "https://docs.trychroma.com/" }
    ]
  },
  {
    week: 32,
    title: "Fine-Tuning LLMs: LoRA, QLoRA, and PEFT",
    focus: "Parameter-Efficient Fine-Tuning, Low-Rank Adaptation, 4-bit Quantization",
    objectives: [
      "Understand why full fine-tuning is cost-prohibitive for 7B+ parameter models",
      "Derive Low-Rank Adaptation (LoRA) matrix decomposition: W + B*A with rank r << d",
      "Master QLoRA: NormalFloat4 (NF4) data type, Double Quantization, and Paged Optimizers"
    ],
    activities: [
      "Fine-tune a LLaMA-3 / Mistral-7B model using QLoRA on a single consumer GPU",
      "Merge LoRA adapter weights back into base model for high-throughput serving",
      "Evaluate domain-specific accuracy gains vs base foundation model"
    ],
    placementNotes: "Top interview topic: Explain how LoRA keeps base weights frozen and only trains low-rank matrices A and B, slashing VRAM by 75%.",
    resources: [
      { title: "LoRA: Low-Rank Adaptation of Large Language Models Paper", type: "Primary", url: "https://arxiv.org/abs/2106.09685" },
      { title: "Hugging Face PEFT Library Documentation", type: "Supplementary", url: "https://huggingface.co/docs/peft/index" },
      { title: "QLoRA: Efficient Finetuning of Quantized LLMs Paper", type: "Practice", url: "https://arxiv.org/abs/2305.14314" },
      { title: "Axolotl: LLM Fine-Tuning Made Easy", type: "Code Lab", url: "https://github.com/OpenAccess-AI-Collective/axolotl" }
    ]
  },
  {
    week: 33,
    title: "Alignment: RLHF, DPO, and Safety Guardrails",
    focus: "Direct Preference Optimization (DPO), PPO, Constitutional AI, NeMo Guardrails",
    objectives: [
      "Understand Reinforcement Learning from Human Feedback (RLHF) with reward modeling",
      "Master Direct Preference Optimization (DPO) eliminating separate reward model and RL loop",
      "Deploy safety guardrails against jailbreaks, prompt injection, and toxic outputs"
    ],
    activities: [
      "Fine-tune a model using DPO on chosen vs rejected pair dataset with TRL library",
      "Implement input/output guardrail checks with regex and LLM moderation filters",
      "Red-team an LLM application to verify refusal of adversarial injections"
    ],
    placementNotes: "Companies deploying customer-facing AI rigorously question how you prevent jailbreaks and enforce policy guardrails.",
    resources: [
      { title: "Direct Preference Optimization (DPO Paper)", type: "Primary", url: "https://arxiv.org/abs/2305.18290" },
      { title: "TRL - Transformer Reinforcement Learning Library", type: "Supplementary", url: "https://huggingface.co/docs/trl/index" },
      { title: "NVIDIA NeMo Guardrails Documentation", type: "Practice", url: "https://github.com/NVIDIA/NeMo-Guardrails" },
      { title: "Anthropic Constitutional AI Paper", type: "Code Lab", url: "https://arxiv.org/abs/2212.08073" }
    ]
  },
  {
    week: 34,
    title: "AI Agents, Function Calling & Multi-Agent Systems",
    focus: "Tool Use, LangGraph, CrewAI, AutoGen, Memory & State Management",
    objectives: [
      "Design autonomous agent loops with persistent memory and scratchpads",
      "Implement deterministic JSON function calling tools (Search, SQL, Calculators)",
      "Orchestrate multi-agent collaborations using directed acyclic graphs (LangGraph)"
    ],
    activities: [
      "Build a multi-agent research analyst: Planner, Web Scraper, Synthesizer, Fact Checker",
      "Implement cyclical state graphs with human-in-the-loop interruption",
      "Add short-term (buffer) and long-term (vector-backed) memory to agents"
    ],
    placementNotes: "Agentic architectures represent the cutting edge of AI engineering interviews: state machine transitions and error recovery.",
    resources: [
      { title: "LangGraph Official Guide & State Machine Tutorials", type: "Primary", url: "https://langchain-ai.github.io/langgraph/" },
      { title: "CrewAI Multi-Agent Framework", type: "Supplementary", url: "https://docs.crewai.com/" },
      { title: "Microsoft AutoGen Framework", type: "Practice", url: "https://microsoft.github.io/autogen/" },
      { title: "Function Calling with Google GenAI SDK", type: "Code Lab", url: "https://ai.google.dev/gemini-api/docs/function-calling" }
    ]
  },
  {
    week: 35,
    title: "High-Throughput LLM Serving & Optimization",
    focus: "vLLM, PagedAttention, TensorRT-LLM, Quantization (AWQ, GPTQ, GGUF)",
    objectives: [
      "Understand PagedAttention virtual memory management eliminating KV cache fragmentation",
      "Benchmark continuous batching vs static batching throughput (tokens/sec)",
      "Quantize models with AWQ (Activation-aware Weight Quantization) and GGUF for edge/local"
    ],
    activities: [
      "Deploy an open-weights LLM using vLLM Docker container with OpenAI-compatible endpoint",
      "Benchmark token latency across varying concurrency loads (1, 10, 50 clients)",
      "Compare inference speed of unquantized vs 4-bit AWQ quantized models"
    ],
    placementNotes: "Essential for infrastructure & ML systems roles: Be ready to discuss TTFT (Time to First Token) vs TPOT (Time Per Output Token).",
    resources: [
      { title: "vLLM: Easy, Fast, and Cheap LLM Serving with PagedAttention", type: "Primary", url: "https://docs.vllm.ai/en/latest/" },
      { title: "NVIDIA TensorRT-LLM Documentation", type: "Supplementary", url: "https://github.com/NVIDIA/TensorRT-LLM" },
      { title: "AWQ: Activation-aware Weight Quantization Paper", type: "Practice", url: "https://arxiv.org/abs/2306.00978" },
      { title: "Ollama Local Model Serving", type: "Code Lab", url: "https://ollama.com/" }
    ]
  },
  {
    week: 36,
    title: "Full-Stack GenAI System Milestone Showcase",
    focus: "FastAPI, Next.js, Streaming Responses, Caching & Milestone Defense",
    objectives: [
      "Build production async API endpoints with FastAPI and Server-Sent Events (SSE) streaming",
      "Integrate vector search, semantic caching (Redis / GPTCache), and user rate limits",
      "Deliver a complete full-stack GenAI application with interactive UI"
    ],
    activities: [
      "Milestone Evaluation: Deploy an end-to-end full-stack GenAI SaaS prototype",
      "Implement semantic caching saving 60% of API token expenses",
      "Present milestone project live with architecture diagram and live QA defense"
    ],
    placementNotes: "Milestone checkpoint: Demonstrates candidates can bridge ML model endpoints with scalable full-stack web applications.",
    isMilestone: true,
    resources: [
      { title: "FastAPI Official Documentation", type: "Primary", url: "https://fastapi.tiangolo.com/" },
      { title: "GPTCache: Semantic Cache for LLM Applications", type: "Supplementary", url: "https://github.com/zilliztech/GPTCache" },
      { title: "Vercel AI SDK for Streaming LLM Interfaces", type: "Practice", url: "https://sdk.vercel.ai/docs" },
      { title: "Building Full-Stack GenAI Applications Guide", type: "Code Lab", url: "https://github.com/ray-project/llm-applications" }
    ]
  },
  {
    week: 37,
    title: "MLOps: CI/CD, Containerization & Orchestration",
    focus: "Docker, Kubernetes, GitHub Actions, MLflow & DVC",
    objectives: [
      "Containerize ML training and serving workloads into reproducible multi-stage Dockerfiles",
      "Version data and model artifacts using Data Version Control (DVC)",
      "Automate testing, linting, and model registry promotion with GitHub Actions CI/CD"
    ],
    activities: [
      "Write multi-stage Dockerfile optimizing Python ML images from 2GB down to 350MB",
      "Configure MLflow Tracking server to log metrics, parameters, and model artifacts",
      "Build a GitHub Actions workflow that executes PyTest and pushes images to container registry"
    ],
    placementNotes: "Companies test candidates on reproducible environments, automated testing of data drift, and zero-downtime deployment strategies.",
    resources: [
      { title: "MLflow Documentation & Model Registry", type: "Primary", url: "https://mlflow.org/docs/latest/index.html" },
      { title: "DVC: Data Version Control Guide", type: "Supplementary", url: "https://dvc.org/doc" },
      { title: "Docker Official Getting Started Guide", type: "Practice", url: "https://docs.docker.com/get-started/" },
      { title: "Made With ML MLOps Course by Goku Mohandas", type: "Code Lab", url: "https://madewithml.com/" }
    ]
  },
  {
    week: 38,
    title: "Production Monitoring, Data Drift & Observability",
    focus: "Evidently AI, Prometheus, Grafana, OpenTelemetry & Model Monitoring",
    objectives: [
      "Detect covariate shift and data drift using Kolmogorov-Smirnov and Population Stability Index (PSI)",
      "Monitor concept drift, accuracy decay, and prediction distribution shifts",
      "Set up automated alert thresholds for inference latency and error anomalies"
    ],
    activities: [
      "Generate automated data drift HTML reports with Evidently AI",
      "Expose custom Prometheus metrics from a model serving endpoint",
      "Build Grafana dashboards tracking p95 latency, requests per second, and drift scores"
    ],
    placementNotes: "Candidates who understand day-2 operations (monitoring drift and setting rollback triggers) stand out in senior hiring rounds.",
    resources: [
      { title: "Evidently AI: Open-source ML Monitoring", type: "Primary", url: "https://docs.evidentlyai.com/" },
      { title: "Prometheus Monitoring System Documentation", type: "Supplementary", url: "https://prometheus.io/docs/introduction/overview/" },
      { title: "Grafana Dashboards & Visualization", type: "Practice", url: "https://grafana.com/docs/" },
      { title: "Arize AI ML Observability Guide", type: "Code Lab", url: "https://arize.com/blog/" }
    ]
  },
  {
    week: 39,
    title: "Machine Learning System Design for Product Companies",
    focus: "High-Level Architecture, Scalability, Latency SLAs & Trade-offs",
    objectives: [
      "Master the 7-step ML System Design framework (Problem formulation, Metrics, Data, Modeling, Serving, Monitoring)",
      "Architect industry architectures: News Feed Ranking, YouTube Video Recommendations, Ad Click Prediction",
      "Formulate offline training vs nearline feature stores vs online inference trade-offs"
    ],
    activities: [
      "Design an end-to-end real-time Fraud Detection system handling 50,000 transactions/sec",
      "Design a Visual Search engine supporting 1 billion image catalog with vector ANN search",
      "Conduct 2 peer mock ML system design interviews with whiteboard diagrams"
    ],
    placementNotes: "System design rounds decide placement tier (SDE-2 / Senior ML Engineer). Focus on concrete numbers, QPS, RAM sizing, and fallback strategies.",
    resources: [
      { title: "Machine Learning System Design Interview Book (Alex Xu)", type: "Primary", url: "https://www.amazon.com/Machine-Learning-System-Design-Interview/dp/1736049127" },
      { title: "Chip Huyen: Designing Machine Learning Systems", type: "Supplementary", url: "https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/" },
      { title: "Google Cloud Architecture Framework: AI and ML", type: "Practice", url: "https://cloud.google.com/architecture/framework/ai-ml" },
      { title: "Awesome ML System Design Github Curated List", type: "Code Lab", url: "https://github.com/alirezadir/Machine-Learning-Interviews" }
    ]
  },
  {
    week: 40,
    title: "Placement Showcase: Capstone Defense & Mock Technical Panels",
    focus: "Portfolio Defense, Live Coding Drills, Behavioral Stories & Final Review",
    objectives: [
      "Polish GitHub repositories with pristine READMEs, live demo URLs, and architectural schematics",
      "Complete 5 timed live coding whiteboard algorithmic and ML implementation drills",
      "Deliver final placement capstone defense in front of industry hiring panel"
    ],
    activities: [
      "Publish comprehensive capstone project with live demo and open-source documentation",
      "Rehearse STAR-format behavioral answers for leadership, conflict resolution, and impact",
      "Final portfolio audit and resume ATS keyword optimization"
    ],
    placementNotes: "Placement readiness unlocked! Graduating candidates are equipped to tackle Tier-1 product company tech interviews with total confidence.",
    isMilestone: true,
    resources: [
      { title: "Cracking the Machine Learning Interview Guide", type: "Primary", url: "https://github.com/ashishpatel26/500-Machine-Learning-Interview-Questions" },
      { title: "LeetCode Premium Top Interview 150", type: "Supplementary", url: "https://leetcode.com/studyplan/top-interview-150/" },
      { title: "Tech Interview Handbook by Yangshun Tay", type: "Practice", url: "https://www.techinterviewhandbook.org/" },
      { title: "Resume ATS Review & Optimization Tool", type: "Code Lab", url: "https://resumeworded.com/" }
    ]
  }
];
