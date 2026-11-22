/* =========================================================
   EraaSoft — AI & ML Diploma Landing
   Content lives in the DATA objects below — edit them to
   update the curriculum, outcomes, projects and partners.
   ========================================================= */

/* ---------------- DATA ---------------- */

const LEVELS = [
  {
    id: 1,
    title: 'AI-Driven Python & Programming Foundations',
    goal: 'Build rock-solid programming foundations from scratch, eliminate coding anxiety, and deliver an early AI Quick Win.',
    project: {
      name: 'SmartRetail',
      title: 'AI-Powered Inventory, Customer Feedback & Similarity Engine',
      text: 'A pure-Python & NumPy backend that ingests messy transaction and review files, scores review sentiment through a Pretrained AI API, and recommends similar products using vector math.',
      stack: ['OOP', 'File I/O', 'HuggingFace API', 'NumPy', 'CLI'],
    },
    sessions: [
      {
        n: 1, lo: [1, 2],
        title: 'The AI Landscape & Python Programming Kickoff',
        topics: [
          'Demystifying Data Science, ML, DL and GenAI with real-world applications',
          'How AI thinks: the Data + Algorithm workflow and the role of Python',
          'Setting up the workspace: VS Code, Jupyter Notebook, Google Colab',
          'Python syntax, variables, data types, operators and interactive I/O',
        ],
        labs: ['Smart Calculator', 'Personal BMI Calculator'],
        assignment: 'Solve 15 progressive Python foundation problems and build an interactive I/O console utility.',
      },
      {
        n: 2, lo: [2, 3],
        title: 'Problem Solving, Logic & Control Flow',
        topics: [
          'Problem-solving methodology: decomposition, flowcharts and pseudocode',
          'Boolean expressions, comparison and logical operators',
          'Conditional statements: if, elif, else and nested conditions',
          'Core String Manipulation for text & data cleaning',
        ],
        labs: ['Student Grade Evaluator', 'Smart Ticket Pricing System', 'Rule-Based Mini Expert System'],
        assignment: 'Complete a structured problem-solving worksheet covering complex conditions and text parsing.',
      },
      {
        n: 3, lo: [3, 4],
        title: 'Iteration, Algorithms & Core Data Structures',
        topics: [
          'for / while loops, break & continue, and nested loops',
          'Algorithmic tracing and time-complexity intuition',
          'Lists, Tuples, Sets and Dictionaries',
          'Lists & Dictionaries as the backbone of JSON and tabular datasets',
        ],
        labs: ['Shopping Cart Analyzer', 'Student Grades Analyzer'],
        assignment: 'Build a Python data-processing script that filters, aggregates and ranks dictionary records.',
      },
      {
        n: 4, lo: [4, 5],
        title: 'Functions, File Handling & First AI API Integration',
        badge: 'Quick Win',
        topics: [
          'Clean, reusable functions: parameters, return values, scope, lambda',
          'Built-in / external modules and Exception Handling (try / except)',
          'Reading and writing TXT, CSV and JSON files',
          'Your first Pretrained AI API call',
        ],
        labs: ['Contact Book Application'],
        assignment: 'Build a file-based record management & AI-enrichment application with robust error handling.',
      },
      {
        n: 5, lo: [6],
        title: 'Practical Object-Oriented Programming for Data & AI',
        milestone: 'Milestone 1',
        topics: [
          'Why OOP matters in AI: how Pandas & Scikit-Learn work under the hood (fit / predict)',
          'Classes, objects, attributes, methods and constructors (__init__)',
          'Encapsulation, Inheritance and modular software design',
          'Organizing code for a GitHub-ready portfolio',
        ],
        labs: ['Full Tkinter GUI project (Library / Hospital system)', 'DataPipeline & SimplePredictor classes mimicking Scikit-Learn'],
        assignment: 'Build and document a modular OOP Data Processing System on GitHub.',
      },
      {
        n: 6, lo: [7],
        title: 'NumPy Fundamentals & Visual Linear Algebra',
        topics: [
          'Why NumPy powers AI: vectorization vs. Python loops',
          'Creating, indexing, slicing, reshaping and broadcasting 1D / 2D / 3D arrays',
          'Scalars, Vectors, Matrices, Transpose and Dot Product',
          'How images and tabular datasets are represented as matrices',
        ],
        labs: ['Matrix Operations Calculator'],
        assignment: 'Complete an applied NumPy & Matrix Operations mini-project on numerical and image arrays.',
      },
    ],
  },
  {
    id: 2,
    title: 'Data Analysis, Applied Statistics & ML Foundations',
    goal: 'Master real-world data wrangling, visual statistics, data privacy, and foundational Supervised Machine Learning.',
    project: {
      name: 'FinGuard',
      title: 'End-to-End Credit Default & Dynamic Loan Pricing System',
      text: 'Anonymize 25,000 messy loan applications, build an executive EDA storyboard, then train leak-free classification and regression models that translate metrics into financial savings.',
      stack: ['Pandas', 'PII Masking', 'Pipeline', 'Logistic / KNN', 'Ridge / Lasso'],
    },
    sessions: [
      {
        n: 7, lo: [8],
        title: 'Pandas Fundamentals & Data Inspection',
        topics: [
          'Series and DataFrame architectures',
          'Loading data from CSV, Excel and JSON',
          'Systematic inspection: head, tail, info, describe, shape, dtypes',
          'Selecting and filtering with loc, iloc and boolean masks',
        ],
        labs: ['Sales Data Explorer', 'Answer 10 business questions on a Telecom / Retail dataset'],
        assignment: 'Load a multi-source dataset with Pandas and produce a structured Data Inspection Report.',
      },
      {
        n: 8, lo: [8],
        title: 'Data Cleaning, Wrangling & Exploratory Data Analysis',
        topics: [
          'Missing values (imputation vs. dropping) and duplicate records',
          'Type conversion, string cleaning and datetime parsing',
          'groupby, pivot_table, merge and concat',
          'A professional EDA workflow',
        ],
        labs: ['Clean the "Messy Business Data" set and extract operational KPIs'],
        assignment: 'Complete an end-to-end Data Cleaning & Wrangling project on a messy real-world dataset.',
      },
      {
        n: 9, lo: [9],
        title: 'Applied Statistics & Probability in Python',
        topics: [
          'Population vs. Sample and sampling bias',
          'Mean, Median, Mode — and when averages lie',
          'Variance, Standard Deviation, IQR and Outlier Detection',
          'Probability, Normal Distribution, Skewness and hypothesis intuition',
        ],
        labs: ['Student Performance Statistics', 'IQR / Z-score outlier removal on a housing dataset'],
        assignment: 'Solve applied statistics & probability challenges in Python with written business interpretations.',
      },
      {
        n: 10, lo: [9],
        title: 'Data Visualization, Correlation & Storytelling',
        topics: [
          'Choosing the right chart for numerical and categorical data',
          'Matplotlib & Seaborn: histograms, box plots, scatter, bar, heatmaps',
          'Pearson / Spearman correlation — and correlation vs. causation',
          'Executive Data Storytelling',
        ],
        labs: ['Sales Visualization Dashboard', 'Customer Churn root-cause report'],
        assignment: 'Deliver a complete EDA & Visual Storytelling project using Pandas, Matplotlib and Seaborn.',
      },
      {
        n: 11, lo: [10],
        title: 'ML Foundations, Preprocessing & Data Privacy',
        topics: [
          'Supervised vs. Unsupervised vs. Reinforcement Learning',
          'End-to-end ML workflow and preventing Data Leakage',
          'One-Hot / Label Encoding and Standard / MinMax Scaling',
          'PII Masking & data anonymization before training',
        ],
        labs: ['Leak-free Scikit-Learn Preprocessing Pipeline with PII masking'],
        assignment: 'Prepare, anonymize and document a full Feature Engineering pipeline on a Kaggle dataset.',
      },
      {
        n: 12, lo: [11],
        title: 'Supervised Learning: Regression Models',
        topics: [
          'Regression formulation and business use cases',
          'Simple & Multiple Linear Regression, cost functions and Gradient Descent',
          'Polynomial Regression, Bias-Variance Tradeoff and Regularization',
          'MAE, MSE, RMSE and R-squared',
        ],
        labs: ['House Price Predictor', 'Student Score Predictor'],
        assignment: 'Build, evaluate and compare multiple Regression models on a real-world dataset.',
      },
      {
        n: 13, lo: [11],
        title: 'Supervised Learning: Classification Fundamentals',
        milestone: 'Milestone 2',
        topics: [
          'Binary vs. Multi-class problems and industry applications',
          'Logistic Regression (Sigmoid intuition) and K-Nearest Neighbors',
          'Confusion Matrix, Precision, Recall, F1-Score and ROC-AUC',
          'Choosing metrics by business / medical risk (FP vs. FN)',
        ],
        labs: ['Spam / Not-Spam Mail', 'Iris Flower Classifier', 'Medical Diagnosis / Churn classifier tuned for Recall'],
        assignment: 'End-to-End EDA + Supervised Classification model with full metric interpretation.',
      },
    ],
  },
  {
    id: 3,
    title: 'Advanced ML, Deep Learning Basics & AI Deployment',
    goal: 'Transition to high-performance Ensemble ML, foundational Deep Learning (Vision & NLP), Pretrained Models, and Cloud Deployment.',
    project: {
      name: 'OmniCare / SmartCommerce',
      title: 'Multi-Modal AI Intelligence & Cloud Platform',
      text: 'One production Streamlit app that combines a tuned ensemble model, K-Means personas, an image classifier and an NLP text analyzer — deployed live with secure secret management.',
      stack: ['XGBoost', 'K-Means', 'Transfer Learning', 'HuggingFace', 'Streamlit Cloud'],
    },
    sessions: [
      {
        n: 14, lo: [11],
        title: 'Tree-Based Models, Ensembles & Tuning',
        topics: [
          'Decision Trees: Entropy / Gini and why single trees overfit',
          'Bagging (Random Forest) and Boosting (Gradient Boosting / XGBoost)',
          'K-Fold Cross-Validation and GridSearchCV',
          'Feature Importance for stakeholder explanations',
        ],
        labs: ['Benchmark Logistic, KNN, Random Forest & XGBoost — then tune the winner'],
        assignment: 'Complete a competitive ML benchmarking & hyperparameter tuning project.',
      },
      {
        n: 15, lo: [12],
        title: 'Unsupervised Learning: Clustering & Pattern Discovery',
        topics: [
          'Working with unlabeled data',
          'K-Means: distance metrics, centroids and convergence',
          'Elbow Method and Silhouette Score',
          'PCA for visualizing high-dimensional clusters',
        ],
        labs: ['E-Commerce Customer Segmentation in 2D'],
        assignment: 'Apply K-Means to a business dataset and write a marketing profile for each cluster.',
      },
      {
        n: 16, lo: [13],
        title: 'Introduction to Deep Learning & Neural Networks',
        topics: [
          'Where classical ML plateaus: unstructured data & complex patterns',
          'Neurons, Layers, Weights, Biases and Activations (ReLU, Sigmoid, Softmax)',
          'Forward Propagation, Loss Functions, Optimizers and Backpropagation',
          'Dropout & Early Stopping in TensorFlow / Keras',
        ],
        labs: ['Multi-layer network on MNIST with live loss curves'],
        assignment: 'Implement and tune a Keras Neural Network and compare it against Random Forest.',
      },
      {
        n: 17, lo: [14],
        title: 'Image Processing & Introductory Computer Vision',
        topics: [
          'Pixels, RGB vs. Grayscale channels and resolution',
          'OpenCV: loading, resizing, cropping, color conversion and filtering',
          'How CNNs extract features: Convolutions & Pooling',
          'Transfer Learning with MobileNet / ResNet',
        ],
        labs: ['Smart Image Classifier (plant disease, product defect, cat vs. dog)'],
        assignment: 'Develop a mini Computer Vision app with image preprocessing and a pretrained model.',
      },
      {
        n: 18, lo: [15],
        title: 'Natural Language Processing & Pretrained AI Models',
        topics: [
          'How machines process human language — business use cases',
          'Cleaning, Tokenization, Stopword removal and Lemmatization',
          'Bag-of-Words & TF-IDF to Word Embeddings',
          'HuggingFace pipelines for classification, summarization and Q&A',
        ],
        labs: ['AI Review Analyzer', 'Text Preprocessing Toolkit'],
        assignment: 'Build an NLP text classification or automated review analysis tool.',
      },
      {
        n: 19, lo: [16],
        title: 'AI Application Packaging, Security & Web Deployment',
        topics: [
          'From Notebook to Production: Joblib / Pickle / Keras Save',
          'Interactive AI web apps with Streamlit or Gradio',
          'Input validation, API keys in .env and safe error handling',
          'Deploying to Streamlit Community Cloud / HuggingFace Spaces',
        ],
        labs: ['Wrap a trained model in Streamlit and deploy it live for mobile testing'],
        assignment: 'Deploy a functional AI web app with a public URL and clean GitHub documentation.',
      },
      {
        n: 20, lo: [10, 11, 12, 13, 14, 15, 16],
        title: 'Capstone Defense & Next-Level AI Career Roadmap',
        milestone: 'Milestone 3',
        topics: [
          'Capstone presentations, live demos and technical code reviews',
          'Communicating performance, business value and model limitations',
          'Portfolio & GitHub optimization for Junior AI / DS roles',
          'Roadmap to the Advanced AI Diploma: Deep CV, LLMs, RAG, AI Agents & MLOps',
        ],
        labs: ['Live Capstone Defense, peer review & individual feedback'],
        assignment: 'Deliver and present an End-to-End Deployed AI / ML Capstone Project.',
      },
    ],
  },
];

const OUTCOMES = [
  { g: 'python', t: 'The AI Landscape', d: 'Data Science, ML, DL and GenAI — use cases and the role of Python.' },
  { g: 'python', t: 'Clean Python Code', d: 'Variables, data types, operators, strings and I/O.' },
  { g: 'python', t: 'Algorithmic Thinking', d: 'Flowcharts, conditionals and loops for data-driven problems.' },
  { g: 'python', t: 'Modular Programs', d: 'Functions, modules, core data structures and exception handling.' },
  { g: 'python', t: 'Files & First AI APIs', d: 'TXT, CSV and JSON handling plus Pretrained AI API integration.' },
  { g: 'python', t: 'Practical OOP', d: 'Classes, encapsulation and inheritance for modular data pipelines.' },
  { g: 'data', t: 'NumPy & Linear Algebra', d: 'Vectors, matrices, broadcasting and dot products on numbers & images.' },
  { g: 'data', t: 'Pandas & EDA', d: 'Clean, filter, aggregate and explore messy real-world datasets.' },
  { g: 'data', t: 'Statistics & Visualization', d: 'Distributions, outliers and correlation with Matplotlib & Seaborn.' },
  { g: 'ml', t: 'Preprocessing Pipelines', d: 'Feature engineering, encoding, scaling, leakage prevention and PII masking.' },
  { g: 'ml', t: 'Supervised Learning', d: 'Linear & Polynomial Regression, Logistic, KNN, Trees, Random Forest, Boosting.' },
  { g: 'ml', t: 'Unsupervised Learning', d: 'K-Means and introductory PCA for segmentation and pattern discovery.' },
  { g: 'dl', t: 'Deep Learning', d: 'Neurons, layers, activations, backpropagation — trained in TensorFlow / Keras.' },
  { g: 'dl', t: 'Computer Vision', d: 'OpenCV image processing and Transfer Learning with pretrained models.' },
  { g: 'dl', t: 'Natural Language Processing', d: 'Text preprocessing, TF-IDF, embeddings and HuggingFace models.' },
  { g: 'dl', t: 'Packaging & Deployment', d: 'Streamlit / Gradio apps with input validation, deployed to the cloud.' },
];

const PROJECTS = [
  { s: 'Sessions 1–3', t: 'Rule-Based Smart Assistant', d: 'Interactive Python problem-solving suite with rule-based decision logic.', stack: ['Python', 'Logic', 'Strings'] },
  { s: 'Session 4', t: 'AI-Enriched Data Manager', d: 'File-based data manager integrated with an external Pretrained AI API.', stack: ['CSV / JSON', 'AI API', 'try/except'] },
  { s: 'Session 5', t: 'OOP Data Processing Pipeline', d: 'Modular object-oriented pipeline published and documented on GitHub.', stack: ['OOP', 'GitHub'], ms: 'Milestone 1' },
  { s: 'Session 6', t: 'Matrix & Image Array Lab', d: 'NumPy matrix operations and digital image array manipulation.', stack: ['NumPy', 'Linear Algebra'] },
  { s: 'Sessions 7–10', t: 'Messy Data to Visual Story', d: 'Data cleaning, statistical profiling and an executive storytelling report.', stack: ['Pandas', 'Seaborn', 'EDA'] },
  { s: 'Session 11', t: 'Leak-Free Privacy Pipeline', d: 'Kaggle dataset preprocessing with PII masking and zero data leakage.', stack: ['Scikit-Learn', 'Pipeline', 'PII'] },
  { s: 'Sessions 12–14', t: 'Supervised Learning Suite', d: 'Real-estate price regression and customer churn classification.', stack: ['Regression', 'XGBoost', 'GridSearchCV'], ms: 'Milestone 2' },
  { s: 'Session 15', t: 'Customer Persona Discovery', d: 'E-commerce segmentation into behavioral personas with K-Means.', stack: ['K-Means', 'PCA'] },
  { s: 'Sessions 16–18', t: 'Vision or NLP AI App', d: 'Computer Vision classifier or NLP sentiment analyzer on pretrained models.', stack: ['Keras', 'OpenCV', 'HuggingFace'] },
  { s: 'Sessions 19–20', t: 'Deployed AI Capstone', d: 'End-to-end AI / ML web application running live on Streamlit Cloud.', stack: ['Streamlit', 'Cloud', 'GitHub'], ms: 'Milestone 3', capstone: true },
];


/* ---------------- HELPERS ---------------- */

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const pad = (n) => String(n).padStart(2, '0');
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------------- SCROLL REVEAL ---------------- */

const revealObserver = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          revealObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
  : null;

function observeReveals(root = document) {
  $$('[data-reveal]:not(.is-visible)', root).forEach((el) => {
    if (revealObserver && !reduceMotion) revealObserver.observe(el);
    else el.classList.add('is-visible');
  });
}

/* ---------------- CURRICULUM ---------------- */

function renderTabs() {
  const wrap = $('#levelTabs');
  wrap.innerHTML = LEVELS.map((l, i) => `
    <button class="level-tab" role="tab" id="tab-${l.id}" aria-controls="levelPanel"
            aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" data-level="${l.id}">
      <span class="lt-head">
        <span class="lt-num">LEVEL ${pad(l.id)}</span>
        <span class="lt-state"><span class="dot"></span><span class="on">Viewing</span><span class="off">View sessions</span></span>
      </span>
      <span class="lt-title">${esc(l.title)}</span>
      <span class="lt-foot">
        <span class="lt-meta">${l.sessions.length} Sessions · ${pad(l.sessions[0].n)}–${pad(l.sessions[l.sessions.length - 1].n)}</span>
        <span class="lt-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
      </span>
    </button>`).join('');

  wrap.addEventListener('click', (e) => {
    const btn = e.target.closest('.level-tab');
    if (!btn) return;
    selectLevel(+btn.dataset.level);
    if (window.innerWidth < 768) $('#levelPanel').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  });

  wrap.addEventListener('keydown', (e) => {
    const tabs = $$('.level-tab', wrap);
    const idx = tabs.indexOf(document.activeElement);
    if (idx < 0) return;
    // Tabs container is LTR: ArrowRight = next
    let next = null;
    if (e.key === 'ArrowRight') next = (idx + 1) % tabs.length;
    if (e.key === 'ArrowLeft') next = (idx - 1 + tabs.length) % tabs.length;
    if (next !== null) {
      e.preventDefault();
      tabs[next].focus();
      selectLevel(+tabs[next].dataset.level);
    }
  });
}

function sessionItem(s, open) {
  const badge = s.milestone
    ? `<span class="tag-ms">★ ${esc(s.milestone)}</span>`
    : s.badge ? `<span class="tag-ms">⚡ ${esc(s.badge)}</span>` : '';
  return `
    <li class="acc-item ${open ? 'is-open' : ''}">
      <button class="acc-btn" aria-expanded="${open}" aria-controls="sess-${s.n}">
        <span class="acc-num">${pad(s.n)}</span>
        <span class="min-w-0 flex-1">
          <span class="flex flex-wrap items-center gap-2">
            <span class="acc-title">${esc(s.title)}</span>${badge}
          </span>
          <span class="acc-sub block">Session ${pad(s.n)} · LO ${s.lo.join(", ")}</span>
        </span>
        <span class="acc-chevron" aria-hidden="true">
          <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
        </span>
      </button>
      <div class="acc-body" id="sess-${s.n}" role="region">
        <div>
          <div class="grid gap-6 border-t border-white/10 px-5 pb-6 pt-5 md:grid-cols-5">
            <div class="md:col-span-3">
              <p class="sub-label">Topics</p>
              <ul class="topic-list mt-3 space-y-1.5">${s.topics.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
            </div>
            <div class="space-y-5 md:col-span-2">
              <div>
                <p class="sub-label">In-Class Lab</p>
                <div class="mt-3 flex flex-wrap gap-2">${s.labs.map((l) => `<span class="lab-chip">${esc(l)}</span>`).join('')}</div>
              </div>
              <div>
                <p class="sub-label">Assignment</p>
                <p class="mt-2 text-sm leading-7 text-white/70">${esc(s.assignment)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>`;
}

function selectLevel(id) {
  const level = LEVELS.find((l) => l.id === id);
  $$('.level-tab').forEach((t) => {
    const on = +t.dataset.level === id;
    t.setAttribute('aria-selected', on);
    t.tabIndex = on ? 0 : -1;
  });

  const p = level.project;
  const panel = $('#levelPanel');
  panel.setAttribute('aria-labelledby', `tab-${id}`);
  panel.setAttribute('role', 'tabpanel');
  panel.innerHTML = `
    <div class="panel-enter grid gap-6 lg:grid-cols-12" dir="ltr">
      <div class="lg:col-span-8">
        <div class="goal-box mb-4 text-sm leading-7">
          <span class="sub-label me-2">Level Goal</span> ${esc(level.goal)}
        </div>
        <ul class="space-y-3">${level.sessions.map((s, i) => sessionItem(s, i === 0)).join('')}</ul>
      </div>
      <aside class="lg:col-span-4">
        <div class="level-project sticky top-28 p-6">
          <p class="sub-label">Level ${pad(level.id)} Integration Project</p>
          <p class="mt-4 font-mono text-sm text-spark">${esc(p.name)}</p>
          <h3 class="mt-1 text-xl font-bold leading-snug text-white">${esc(p.title)}</h3>
          <p class="mt-3 text-sm leading-7 text-white/65">${esc(p.text)}</p>
          <div class="mt-5 flex flex-wrap gap-1.5">${p.stack.map((x) => `<span class="lo-tag">${esc(x)}</span>`).join('')}</div>
          <div class="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/10 text-center">
            <div class="bg-ink/60 p-3"><p class="font-mono text-xl font-semibold text-white">${level.sessions.reduce((a, s) => a + s.labs.length, 0)}</p><p class="sub-label mt-1">Labs</p></div>
            <div class="bg-ink/60 p-3"><p class="font-mono text-xl font-semibold text-white">${level.sessions.length}</p><p class="sub-label mt-1">Sessions</p></div>
          </div>
        </div>
      </aside>
    </div>`;
}

function initAccordion() {
  $('#levelPanel').addEventListener('click', (e) => {
    const btn = e.target.closest('.acc-btn');
    if (!btn) return;
    const item = btn.closest('.acc-item');
    const open = !item.classList.contains('is-open');
    item.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', open);
  });
}

/* ---------------- OUTCOMES ---------------- */

function renderOutcomes() {
  $('#outcomeList').innerHTML = OUTCOMES.map((o, i) => `
    <li class="lo-card" data-reveal style="--d:${(i % 2) * 60}ms" data-group="${o.g}">
      <span class="lo-num">${pad(i + 1)}</span>
      <div><p class="lo-title">${esc(o.t)}</p><p class="lo-text">${esc(o.d)}</p></div>
    </li>`).join('');

  $('#outcomeFilters').addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    $$('.chip', e.currentTarget).forEach((c) => c.classList.toggle('is-active', c === chip));
    const f = chip.dataset.filter;
    $$('.lo-card').forEach((c) => c.classList.toggle('is-dim', f !== 'all' && c.dataset.group !== f));
  });
}

/* ---------------- PROJECTS ---------------- */

function capstoneCard(p, i) {
  return `
    <article class="project-card is-capstone sm:col-span-2 lg:col-span-3" data-reveal dir="ltr">
      <div class="grid gap-6 lg:grid-cols-12 lg:items-center">
        <div class="lg:col-span-7">
          <div class="flex items-center gap-4">
            <span class="p-num">${pad(i + 1)}</span>
            <span class="tag-ms">★ ${esc(p.ms)} · Capstone</span>
          </div>
          <p class="p-title !text-2xl">${esc(p.t)}</p>
          <p class="p-text max-w-xl">${esc(p.d)} Combines tabular ML, segmentation, vision and NLP behind one secure web interface.</p>
        </div>
        <div class="lg:col-span-5">
          <div class="rounded-2xl border border-white/10 bg-white/[.04] p-4 font-mono text-[12.5px] leading-6 text-white/70">
            <p><span class="text-white/35">$</span> git push origin main</p>
            <p><span class="text-white/35">$</span> streamlit deploy <span class="text-signal-300">app.py</span></p>
            <p class="text-spark">✓ Live at https://your-ai-app.streamlit.app</p>
          </div>
          <div class="p-stack">${p.stack.map((x) => `<span>${esc(x)}</span>`).join('')}</div>
          <p class="p-sess mt-4">${esc(p.s)}</p>
        </div>
      </div>
    </article>`;
}

function renderProjects() {
  $('#projectGrid').innerHTML = PROJECTS.map((p, i) => p.capstone ? capstoneCard(p, i) : `
    <article class="project-card ${p.ms ? 'is-milestone' : ''}"
             data-reveal style="--d:${(i % 3) * 80}ms" dir="ltr">
      <div class="flex items-start justify-between gap-3">
        <span class="p-num">${pad(i + 1)}</span>
        ${p.ms ? `<span class="tag-ms" style="${p.capstone ? '' : 'background:#FDF3D2;color:#8A6A00'}">★ ${esc(p.ms)}</span>` : ''}
      </div>
      <p class="p-title">${esc(p.t)}</p>
      <p class="p-text">${esc(p.d)}</p>
      <div class="mt-4 flex items-center justify-between gap-3">
        <div class="p-stack !mt-0">${p.stack.map((x) => `<span>${esc(x)}</span>`).join('')}</div>
      </div>
      <p class="p-sess mt-4">${esc(p.s)}</p>
    </article>`).join('');
}

/* ---------------- NAVBAR ---------------- */

function initNav() {
  const nav = $('#navbar');
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const btn = $('#menuBtn');
  const menu = $('#mobileMenu');
  btn.addEventListener('click', () => {
    const open = !menu.classList.contains('is-open');
    menu.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', open);
    if (open) nav.classList.add('is-scrolled');
  });
  $$('a', menu).forEach((a) => a.addEventListener('click', () => {
    menu.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
  }));

  // Active link on scroll
  const links = $$('.nav-link');
  const sections = links.map((l) => $(l.getAttribute('href'))).filter(Boolean);
  if (!('IntersectionObserver' in window)) return;
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        links.forEach((l) => l.classList.toggle('is-active', l.getAttribute('href') === `#${e.target.id}`));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach((s) => spy.observe(s));
}

/* ---------------- COUNTERS ---------------- */

function initCounters() {
  const els = $$('[data-count]');
  const run = (el) => {
    const target = +el.dataset.count;
    if (reduceMotion) { el.textContent = target; return; }
    const dur = 1200;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if (!('IntersectionObserver' in window)) return els.forEach(run);
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
  }, { threshold: 0.6 });
  els.forEach((el) => io.observe(el));
}

/* ---------------- HERO NEURAL NET ---------------- */

function initNetwork() {
  const canvas = $('#netCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const layers = [4, 6, 6, 3];
  let W, H, nodes = [], edges = [], pulses = [], raf, visible = true;

  function build() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const r = canvas.getBoundingClientRect();
    W = r.width; H = r.height;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    nodes = []; edges = [];
    const padX = W * 0.12, padY = H * 0.14;
    layers.forEach((count, li) => {
      const x = padX + (li * (W - padX * 2)) / (layers.length - 1);
      const gap = (H - padY * 2.4) / (count - 1 || 1);
      const offset = (H - padY * 0.8 - gap * (count - 1)) / 2;
      for (let i = 0; i < count; i++) nodes.push({ x, y: offset + i * gap, l: li, a: 0 });
    });
    nodes.forEach((a) => nodes.forEach((b) => {
      if (b.l === a.l + 1) edges.push({ a, b, w: Math.random() });
    }));
  }

  function spawn() {
    const starts = edges.filter((e) => e.a.l === 0);
    const e = starts[(Math.random() * starts.length) | 0];
    pulses.push({ e, t: 0, v: 0.012 + Math.random() * 0.01 });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    edges.forEach((e) => {
      ctx.strokeStyle = `rgba(122, 140, 255, ${0.08 + e.w * 0.14})`;
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(e.a.x, e.a.y); ctx.lineTo(e.b.x, e.b.y); ctx.stroke();
    });

    for (let i = pulses.length - 1; i >= 0; i--) {
      const p = pulses[i];
      p.t += p.v;
      const { a, b } = p.e;
      const x = a.x + (b.x - a.x) * p.t;
      const y = a.y + (b.y - a.y) * p.t;
      ctx.strokeStyle = 'rgba(94, 214, 230, .55)';
      ctx.lineWidth = 1.4;
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(x, y); ctx.stroke();
      ctx.fillStyle = '#F4C430';
      ctx.beginPath(); ctx.arc(x, y, 2.2, 0, Math.PI * 2); ctx.fill();
      if (p.t >= 1) {
        b.a = 1;
        pulses.splice(i, 1);
        if (b.l < layers.length - 1 && Math.random() < 0.85) {
          const nexts = edges.filter((n) => n.a === b);
          pulses.push({ e: nexts[(Math.random() * nexts.length) | 0], t: 0, v: p.v });
        }
      }
    }

    nodes.forEach((n) => {
      n.a *= 0.95;
      const r = n.l === layers.length - 1 ? 7 : 5.5;
      if (n.a > 0.02) {
        ctx.fillStyle = `rgba(244, 196, 48, ${n.a * 0.25})`;
        ctx.beginPath(); ctx.arc(n.x, n.y, r + 8 * n.a, 0, Math.PI * 2); ctx.fill();
      }
      ctx.fillStyle = '#0A0F2C';
      ctx.strokeStyle = n.a > 0.1 ? '#F4C430' : 'rgba(122, 140, 255, .8)';
      ctx.lineWidth = 1.6;
      ctx.beginPath(); ctx.arc(n.x, n.y, r, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    });

    if (visible && pulses.length < 10 && Math.random() < 0.06) spawn();
    raf = requestAnimationFrame(draw);
  }

  build();
  window.addEventListener('resize', () => { build(); });

  if (reduceMotion) { draw(); cancelAnimationFrame(raf); return; }

  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible && !raf) draw();
    if (!visible) { cancelAnimationFrame(raf); raf = null; }
  }).observe(canvas);

  // fake training readout
  let epoch = 1;
  const eNum = $('#epochNum'), eBar = $('#epochBar'), acc = $('#accNum');
  setInterval(() => {
    if (!visible) return;
    epoch = epoch >= 20 ? 1 : epoch + 1;
    const a = 0.61 + (0.34 * (1 - Math.exp(-epoch / 6))) + Math.random() * 0.006;
    eNum.textContent = pad(epoch);
    eBar.style.width = `${(epoch / 20) * 100}%`;
    acc.textContent = a.toFixed(3);
  }, 900);
}

/* ---------------- HERO AURA ----------------
   Three blurred color fields that follow the pointer with
   different lag (parallax). Touch drag + device tilt on mobile,
   slow autonomous drift when idle.                           */

function initAura() {
  const root = $('#heroAura');
  if (!root) return;
  const hero = root.parentElement;
  const blobs = [
    { el: $('.aura-a', root), ease: 0.035, ox: 0.10, oy: -0.06, depth: 1.0 },
    { el: $('.aura-b', root), ease: 0.06,  ox: -0.14, oy: 0.10, depth: 0.7 },
    { el: $('.aura-c', root), ease: 0.10,  ox: 0.02,  oy: 0.02, depth: 0.45 },
  ].map((b) => ({ ...b, x: 0, y: 0 }));

  let W = 0, H = 0, raf = null, visible = true;
  const ptr = { tx: 0, ty: 0, active: false, last: 0 };

  function size() {
    W = hero.clientWidth; H = hero.clientHeight;
    blobs.forEach((b) => { if (!b.x) { b.x = W * (0.6 + b.ox); b.y = H * (0.35 + b.oy); } });
  }

  function setTarget(clientX, clientY) {
    const r = hero.getBoundingClientRect();
    ptr.tx = clientX - r.left; ptr.ty = clientY - r.top;
    ptr.active = true; ptr.last = performance.now();
  }

  hero.addEventListener('pointermove', (e) => setTarget(e.clientX, e.clientY), { passive: true });
  hero.addEventListener('touchmove', (e) => { const t = e.touches[0]; if (t) setTarget(t.clientX, t.clientY); }, { passive: true });
  hero.addEventListener('pointerleave', () => { ptr.active = false; });

  // Tilt on phones that expose orientation without a permission prompt (Android)
  if (window.DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission !== 'function') {
    window.addEventListener('deviceorientation', (e) => {
      if (e.gamma == null || !W) return;
      const r = hero.getBoundingClientRect();
      setTarget(r.left + W * (0.5 + Math.max(-1, Math.min(1, e.gamma / 35)) * 0.4),
                r.top + H * (0.4 + Math.max(-1, Math.min(1, (e.beta - 45) / 40)) * 0.3));
    }, { passive: true });
  }

  function frame(now) {
    const t = now / 1000;
    if (!ptr.active || now - ptr.last > 3500) {
      ptr.tx = W * (0.5 + 0.3 * Math.sin(t * 0.17));
      ptr.ty = H * (0.38 + 0.18 * Math.sin(t * 0.23 + 1));
    }
    blobs.forEach((b, i) => {
      // each blob aims at the pointer, offset and scaled by depth for parallax
      const cx = W / 2, cy = H * 0.4;
      const gx = cx + (ptr.tx - cx) * b.depth + W * b.ox + Math.sin(t * (0.3 + i * 0.1)) * 30;
      const gy = cy + (ptr.ty - cy) * b.depth + H * b.oy + Math.cos(t * (0.25 + i * 0.12)) * 24;
      b.x += (gx - b.x) * b.ease;
      b.y += (gy - b.y) * b.ease;
      b.el.style.setProperty('--x', `${b.x.toFixed(1)}px`);
      b.el.style.setProperty('--y', `${b.y.toFixed(1)}px`);
    });
    if (visible && !reduceMotion) raf = requestAnimationFrame(frame);
  }

  size();
  window.addEventListener('resize', size);
  if (reduceMotion) { blobs.forEach((b) => { b.el.style.setProperty('--x', `${b.x}px`); b.el.style.setProperty('--y', `${b.y}px`); }); return; }

  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible && !raf) raf = requestAnimationFrame(frame);
    if (!visible && raf) { cancelAnimationFrame(raf); raf = null; }
  }).observe(hero);
}

/* ---------------- BOOKING FORM ----------------
   Set LEAD_ENDPOINT to your backend / Formspree / Google Apps
   Script URL. It receives a JSON POST: { name, email, phone,
   source, submittedAt }. Empty = demo mode (no data is sent). */

const LEAD_ENDPOINT = '';

const ARABIC_CHARS = /[؀-ۿݐ-ݿࢠ-ࣿﭐ-﷿ﹰ-﻿]/g;
const ARABIC_DIGITS = /[٠-٩۰-۹]/g;
const toLatinDigits = (s) => s.replace(ARABIC_DIGITS, (d) => String((d.charCodeAt(0) & 0xF) % 10));

const MSG = {
  arabic: 'اكتب بالإنجليزي بس — الحروف العربي مش مسموحة.',
  name: {
    empty: 'اكتب اسمك.',
    chars: 'الاسم لازم يكون حروف إنجليزي بس (A–Z).',
    full: 'اكتب اسمك الأول والأخير.',
    short: 'الاسم قصير أوي.',
  },
  email: {
    empty: 'اكتب الإيميل بتاعك.',
    invalid: 'الإيميل مش صحيح — مثال: name@example.com',
  },
  phone: {
    empty: 'اكتب رقم الموبايل.',
    chars: 'الرقم لازم يكون أرقام بس.',
    invalid: 'رقم موبايل مش صحيح — مثال: 01012345678',
  },
};

const VALIDATORS = {
  name(v) {
    const s = v.trim().replace(/\s+/g, ' ');
    if (!s) return MSG.name.empty;
    if (ARABIC_CHARS.test(s)) { ARABIC_CHARS.lastIndex = 0; return MSG.arabic; }
    if (!/^[A-Za-z][A-Za-z .'-]*$/.test(s)) return MSG.name.chars;
    if (s.replace(/[^A-Za-z]/g, '').length < 3) return MSG.name.short;
    if (s.split(' ').filter((w) => /[A-Za-z]{2,}/.test(w)).length < 2) return MSG.name.full;
    return '';
  },
  email(v) {
    const s = v.trim();
    if (!s) return MSG.email.empty;
    if (ARABIC_CHARS.test(s)) { ARABIC_CHARS.lastIndex = 0; return MSG.arabic; }
    const ok = /^[A-Za-z0-9](?:[A-Za-z0-9._%+-]{0,62}[A-Za-z0-9])?@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*\.[A-Za-z]{2,24}$/.test(s);
    if (!ok || s.includes('..') || s.length > 254) return MSG.email.invalid;
    return '';
  },
  phone(v) {
    const s = v.trim();
    if (!s) return MSG.phone.empty;
    if (/[^\d+\s()-]/.test(s)) return MSG.phone.chars;
    return normalizePhone(s) ? '' : MSG.phone.invalid;
  },
};

/** Egyptian mobile (01x + 8 digits, optional +20 / 0020) or international E.164. */
function normalizePhone(raw) {
  let s = raw.replace(/[\s()-]/g, '');
  if (s.startsWith('0020')) s = '0' + s.slice(4);
  else if (s.startsWith('+20')) s = '0' + s.slice(3);
  else if (/^20(1[0125]\d{8})$/.test(s)) s = '0' + s.slice(2);
  if (/^01[0125]\d{8}$/.test(s)) return s;
  if (/^\+[1-9]\d{7,14}$/.test(s)) return s;
  return null;
}

function initLeadForm() {
  const modal = $('#formModal');
  const form = $('#leadForm');
  if (!modal || !form) return;
  const dialog = $('.modal-dialog', modal);
  const formView = $('#formView');
  const successView = $('#successView');
  const submitBtn = $('#formSubmit');
  const formError = $('#formError');
  const fields = ['name', 'email', 'phone'].map((n) => ({ n, input: form.elements[n], wrap: form.elements[n].closest('.field'), msg: $(`#e-${n}`), touched: false }));
  let lastFocus = null;

  /* --- modal open / close --- */
  function open(e) {
    e?.preventDefault();
    lastFocus = document.activeElement;
    $('#mobileMenu')?.classList.remove('is-open');
    $('#menuBtn')?.setAttribute('aria-expanded', 'false');
    modal.hidden = false;
    modal.classList.remove('is-closing');
    document.body.classList.add('modal-open');
    setTimeout(() => (successView.hidden ? fields[0].input : successView).focus(), 60);
  }
  function close() {
    if (modal.hidden) return;
    modal.classList.add('is-closing');
    setTimeout(() => {
      modal.hidden = true;
      modal.classList.remove('is-closing');
      document.body.classList.remove('modal-open');
      if (!successView.hidden) resetForm();
      lastFocus?.focus?.();
    }, reduceMotion ? 0 : 200);
  }

  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-open-form]')) open(e);
    else if (e.target.closest('[data-close-form]')) close();
  });
  document.addEventListener('keydown', (e) => {
    if (modal.hidden) return;
    if (e.key === 'Escape') { e.preventDefault(); close(); return; }
    if (e.key === 'Tab') {                                        // focus trap
      const f = $$('button, [href], input:not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])', dialog)
        .filter((el) => !el.disabled && el.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* --- per-field validation UI --- */
  function show(f, error, hint = '') {
    f.wrap.classList.toggle('is-invalid', !!error);
    f.wrap.classList.toggle('is-valid', !error && !!f.input.value.trim());
    f.input.setAttribute('aria-invalid', error ? 'true' : 'false');
    f.msg.textContent = error || hint;
    f.msg.classList.toggle('is-hint', !error && !!hint);
  }
  const check = (f) => VALIDATORS[f.n](f.input.value);

  fields.forEach((f) => {
    f.input.addEventListener('input', () => {
      let v = f.input.value;
      let hint = '';
      if (f.n === 'phone') v = toLatinDigits(v);                 // ٠١٢ → 012
      if (ARABIC_CHARS.test(v)) {                                 // block Arabic letters
        ARABIC_CHARS.lastIndex = 0;
        v = v.replace(ARABIC_CHARS, '');
        hint = MSG.arabic;
      }
      ARABIC_CHARS.lastIndex = 0;
      if (f.n === 'phone' && /[^\d+\s()-]/.test(v)) { v = v.replace(/[^\d+\s()-]/g, ''); hint = MSG.phone.chars; }
      if (f.n === 'email') v = v.replace(/\s/g, '');
      if (v !== f.input.value) {
        const pos = f.input.selectionStart - (f.input.value.length - v.length);
        f.input.value = v;
        try { f.input.setSelectionRange(pos, pos); } catch (_) { /* type=email has no selection API */ }
      }
      if (f.touched) show(f, check(f), hint);
      else show(f, '', hint);
      formError.hidden = true;
    });
    f.input.addEventListener('blur', () => {
      if (!f.input.value.trim() && !f.touched) return;            // don't nag on empty tab-through
      f.touched = true;
      if (f.n === 'name') f.input.value = f.input.value.trim().replace(/\s+/g, ' ');
      if (f.n === 'email') f.input.value = f.input.value.trim().toLowerCase();
      show(f, check(f));
    });
  });

  function resetForm() {
    form.reset();
    fields.forEach((f) => { f.touched = false; show(f, ''); f.wrap.classList.remove('is-valid'); });
    formError.hidden = true;
    formView.hidden = false;
    successView.hidden = true;
  }

  function setLoading(on) {
    submitBtn.disabled = on;
    submitBtn.classList.toggle('is-loading', on);
    $('.btn-label', submitBtn).textContent = on ? 'جاري الإرسال…' : 'ابعت البيانات';
  }

  /* --- submit --- */
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    formError.hidden = true;

    let firstBad = null;
    fields.forEach((f) => {
      f.touched = true;
      const err = check(f);
      show(f, err);
      if (err && !firstBad) firstBad = f;
    });
    if (firstBad) { firstBad.input.focus(); return; }

    if (form.elements.company.value) return;                      // honeypot hit → silently drop

    const payload = {
      name: form.elements.name.value.trim().replace(/\s+/g, ' '),
      email: form.elements.email.value.trim().toLowerCase(),
      phone: normalizePhone(form.elements.phone.value),
      source: 'ai-diploma-landing',
      submittedAt: new Date().toISOString(),
    };

    setLoading(true);
    try {
      if (LEAD_ENDPOINT) {
        const res = await fetch(LEAD_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
      } else {
        await new Promise((r) => setTimeout(r, 700));            // demo mode
        console.info('[lead form] demo mode — set LEAD_ENDPOINT to send:', payload);
      }
      $('#successName').textContent = payload.name.split(' ')[0];
      formView.hidden = true;
      successView.hidden = false;
      successView.focus();
    } catch (err) {
      formError.textContent = 'حصلت مشكلة في الإرسال. جرّب تاني أو كلمنا على WhatsApp.';
      formError.hidden = false;
    } finally {
      setLoading(false);
    }
  });
}

/* ---------------- INIT ---------------- */

document.addEventListener('DOMContentLoaded', () => {
  renderTabs();
  selectLevel(1);
  initAccordion();
  renderOutcomes();
  renderProjects();
  initNav();
  initCounters();
  initAura();
  initLeadForm();
  initNetwork();
  observeReveals();
  const y = $('#year'); if (y) y.textContent = new Date().getFullYear();
});
