// ─────────────────────────────────────
//  data.js  –  Roles, skills & gap info
// ─────────────────────────────────────

const ROLES_DATA = {

  // ── 1. Cybersecurity Analyst ────────────────────────────────
  cybersecurity: {
    label: "Cybersecurity Analyst",
    skills: [
      { name: "Network Security",                badge: "required" },
      { name: "Penetration Testing",             badge: "required" },
      { name: "SIEM Tools",                      badge: "required" },
      { name: "Threat Intelligence",             badge: "required" },
      { name: "Incident Response",               badge: "required" },
      { name: "Vulnerability Assessment",        badge: "required" },
      { name: "Cryptography & PKI",              badge: "required" },
      { name: "Security Frameworks (NIST, ISO)", badge: "recommended" },
      { name: "Cloud Security",                  badge: "recommended" },
      { name: "Python Scripting",                badge: "recommended" },
      { name: "Identity & Access Management",    badge: "recommended" },
      { name: "Digital Forensics",               badge: "nice" },
      { name: "Reverse Engineering",             badge: "nice" },
    ],
  },

  // ── 2. Full-Stack Developer ─────────────────────────────────
  fullstack: {
    label: "Full-Stack Developer",
    skills: [
      { name: "HTML / CSS",                badge: "required" },
      { name: "JavaScript / TypeScript",   badge: "required" },
      { name: "React or Vue",              badge: "required" },
      { name: "Node.js",                   badge: "required" },
      { name: "REST APIs",                 badge: "required" },
      { name: "SQL Databases",             badge: "required" },
      { name: "Authentication & Security", badge: "required" },
      { name: "Git & CI/CD",               badge: "recommended" },
      { name: "Docker",                    badge: "recommended" },
      { name: "Cloud Hosting (AWS/Vercel)", badge: "recommended" },
      { name: "GraphQL",                   badge: "nice" },
      { name: "Testing (Jest, Cypress)",   badge: "nice" },
      { name: "WebSockets / Real-time",    badge: "nice" },
    ],
  },

  // ── 3. Data Scientist ───────────────────────────────────────
  datascience: {
    label: "Data Scientist",
    skills: [
      { name: "Python",                              badge: "required" },
      { name: "Machine Learning",                    badge: "required" },
      { name: "Statistics & Probability",            badge: "required" },
      { name: "Data Wrangling (Pandas)",             badge: "required" },
      { name: "Data Visualization",                  badge: "required" },
      { name: "SQL",                                 badge: "required" },
      { name: "Experiment Design & A/B Testing",     badge: "required" },
      { name: "Deep Learning (TensorFlow/PyTorch)",  badge: "recommended" },
      { name: "Feature Engineering",                 badge: "recommended" },
      { name: "NLP Fundamentals",                    badge: "recommended" },
      { name: "Big Data (Spark)",                    badge: "nice" },
      { name: "MLOps",                               badge: "nice" },
      { name: "Time Series Analysis",                badge: "nice" },
    ],
  },

  // ── 4. DevOps Engineer ──────────────────────────────────────
  devops: {
    label: "DevOps Engineer",
    skills: [
      { name: "Linux / Bash Scripting",               badge: "required" },
      { name: "Docker & Kubernetes",                  badge: "required" },
      { name: "CI/CD Pipelines",                      badge: "required" },
      { name: "Cloud Platforms (AWS / GCP / Azure)",  badge: "required" },
      { name: "Infrastructure as Code (Terraform)",   badge: "required" },
      { name: "Monitoring & Logging (Grafana/ELK)",   badge: "required" },
      { name: "Networking Fundamentals",              badge: "required" },
      { name: "Git & CI/CD",                          badge: "recommended" },
      { name: "Security & Compliance (DevSecOps)",    badge: "recommended" },
      { name: "Configuration Management (Ansible)",   badge: "recommended" },
      { name: "Helm Charts",                          badge: "nice" },
      { name: "Service Mesh (Istio)",                 badge: "nice" },
      { name: "Cost Optimization",                    badge: "nice" },
    ],
  },

  // ── 5. Product Manager ──────────────────────────────────────
  product: {
    label: "Product Manager",
    skills: [
      { name: "Product Strategy",           badge: "required" },
      { name: "User Research & Interviews", badge: "required" },
      { name: "Roadmapping",                badge: "required" },
      { name: "Stakeholder Management",     badge: "required" },
      { name: "Data Analysis & Metrics",    badge: "required" },
      { name: "Agile / Scrum",              badge: "required" },
      { name: "Competitive Analysis",       badge: "required" },
      { name: "A/B Testing",                badge: "recommended" },
      { name: "SQL Basics",                 badge: "recommended" },
      { name: "Go-to-Market Strategy",      badge: "recommended" },
      { name: "Figma / Prototyping",        badge: "nice" },
      { name: "Technical Writing & PRDs",   badge: "nice" },
      { name: "OKRs & Goal Setting",        badge: "nice" },
    ],
  },

  // ── 6. ML Engineer ──────────────────────────────────────────
  mleng: {
    label: "ML Engineer",
    skills: [
      { name: "Python",                       badge: "required" },
      { name: "Deep Learning",                badge: "required" },
      { name: "Model Training & Evaluation",  badge: "required" },
      { name: "Model Deployment & Serving",   badge: "required" },
      { name: "MLOps & Experiment Tracking",  badge: "required" },
      { name: "Feature Engineering",          badge: "required" },
      { name: "Cloud ML Platforms",           badge: "required" },
      { name: "Docker & Kubernetes",          badge: "recommended" },
      { name: "Data Pipelines (Airflow)",     badge: "recommended" },
      { name: "Distributed Training",         badge: "recommended" },
      { name: "LLM Fine-tuning & RAG",        badge: "nice" },
      { name: "Monitoring & Drift Detection", badge: "nice" },
      { name: "Responsible AI & Fairness",    badge: "nice" },
    ],
  },

  // ── 7. Cloud Architect ──────────────────────────────────────
  cloudarch: {
    label: "Cloud Architect",
    skills: [
      { name: "AWS / Azure / GCP Core Services", badge: "required" },
      { name: "Cloud Networking & VPC",          badge: "required" },
      { name: "Identity & Access Management",    badge: "required" },
      { name: "Infrastructure as Code (Terraform)", badge: "required" },
      { name: "High Availability & DR Design",   badge: "required" },
      { name: "Cloud Security Best Practices",   badge: "required" },
      { name: "Microservices Architecture",      badge: "required" },
      { name: "Docker & Kubernetes",             badge: "recommended" },
      { name: "Serverless Architecture",         badge: "recommended" },
      { name: "Cost Management & FinOps",        badge: "recommended" },
      { name: "Multi-Cloud Strategy",            badge: "nice" },
      { name: "Edge Computing",                  badge: "nice" },
    ],
  },

  // ── 8. UI/UX Designer ───────────────────────────────────────
  uiux: {
    label: "UI/UX Designer",
    skills: [
      { name: "User Research Methods",        badge: "required" },
      { name: "Wireframing & Prototyping",    badge: "required" },
      { name: "Figma",                        badge: "required" },
      { name: "Interaction Design",           badge: "required" },
      { name: "Visual Design Principles",     badge: "required" },
      { name: "Usability Testing",            badge: "required" },
      { name: "Design Systems",               badge: "required" },
      { name: "Accessibility (WCAG)",         badge: "recommended" },
      { name: "Information Architecture",     badge: "recommended" },
      { name: "Motion & Micro-interactions",  badge: "recommended" },
      { name: "HTML / CSS Basics",            badge: "nice" },
      { name: "Design Thinking Facilitation", badge: "nice" },
    ],
  },

  // ── 9. Blockchain Developer ─────────────────────────────────
  blockchain: {
    label: "Blockchain Developer",
    skills: [
      { name: "Solidity / Smart Contracts",   badge: "required" },
      { name: "Ethereum & EVM",               badge: "required" },
      { name: "Web3.js / Ethers.js",          badge: "required" },
      { name: "DeFi Protocols",               badge: "required" },
      { name: "Cryptography & PKI",           badge: "required" },
      { name: "Hardhat / Truffle",            badge: "required" },
      { name: "JavaScript / TypeScript",      badge: "required" },
      { name: "IPFS & Decentralized Storage", badge: "recommended" },
      { name: "Layer 2 Solutions",            badge: "recommended" },
      { name: "Smart Contract Auditing",      badge: "recommended" },
      { name: "Cross-chain Bridges",          badge: "nice" },
      { name: "ZK Proofs",                    badge: "nice" },
    ],
  },

  // ── 10. Data Engineer ───────────────────────────────────────
  dataeng: {
    label: "Data Engineer",
    skills: [
      { name: "Python",                          badge: "required" },
      { name: "SQL & Query Optimization",        badge: "required" },
      { name: "Data Warehousing (Snowflake/BQ)", badge: "required" },
      { name: "ETL / ELT Pipelines",             badge: "required" },
      { name: "Apache Spark",                    badge: "required" },
      { name: "Apache Airflow",                  badge: "required" },
      { name: "Cloud Data Platforms",            badge: "required" },
      { name: "Data Modeling",                   badge: "recommended" },
      { name: "Kafka / Streaming Data",          badge: "recommended" },
      { name: "dbt (data build tool)",           badge: "recommended" },
      { name: "Data Quality & Governance",       badge: "nice" },
      { name: "Real-time Analytics",             badge: "nice" },
    ],
  },

  // ── 11. Mobile Developer ────────────────────────────────────
  mobile: {
    label: "Mobile Developer",
    skills: [
      { name: "React Native or Flutter",        badge: "required" },
      { name: "JavaScript / Dart",              badge: "required" },
      { name: "Mobile UI Patterns",             badge: "required" },
      { name: "REST API Integration",           badge: "required" },
      { name: "State Management",               badge: "required" },
      { name: "App Store Deployment",           badge: "required" },
      { name: "Push Notifications",             badge: "recommended" },
      { name: "Offline Storage & Sync",         badge: "recommended" },
      { name: "Performance Optimization",       badge: "recommended" },
      { name: "Native Modules (iOS / Android)", badge: "nice" },
      { name: "AR / Camera Features",           badge: "nice" },
      { name: "Testing (Detox / Jest)",         badge: "nice" },
    ],
  },

  // ── 12. AI Prompt Engineer ──────────────────────────────────
  prompteng: {
    label: "AI Prompt Engineer",
    skills: [
      { name: "LLM Fundamentals",                  badge: "required" },
      { name: "Prompt Design & Chaining",          badge: "required" },
      { name: "RAG Architecture",                  badge: "required" },
      { name: "Vector Databases",                  badge: "required" },
      { name: "Python Scripting",                  badge: "required" },
      { name: "OpenAI / Anthropic APIs",           badge: "required" },
      { name: "Fine-tuning Concepts",              badge: "recommended" },
      { name: "LangChain / LlamaIndex",            badge: "recommended" },
      { name: "Evaluation & Benchmarking",         badge: "recommended" },
      { name: "AI Safety & Alignment Basics",      badge: "recommended" },
      { name: "Multi-modal Prompting",             badge: "nice" },
      { name: "Agent Frameworks (AutoGPT etc)",    badge: "nice" },
    ],
  },

  // ── 13. Backend Engineer ────────────────────────────────────
  backend: {
    label: "Backend Engineer",
    skills: [
      { name: "Python or Java or Go",              badge: "required" },
      { name: "REST API Design",                   badge: "required" },
      { name: "SQL & Database Design",             badge: "required" },
      { name: "Authentication (OAuth / JWT)",      badge: "required" },
      { name: "Caching (Redis / Memcached)",       badge: "required" },
      { name: "Message Queues (RabbitMQ / Kafka)", badge: "required" },
      { name: "Unit & Integration Testing",        badge: "required" },
      { name: "Docker & Containerisation",         badge: "recommended" },
      { name: "gRPC / GraphQL",                    badge: "recommended" },
      { name: "API Rate Limiting & Security",      badge: "recommended" },
      { name: "Microservices Architecture",        badge: "nice" },
      { name: "OpenAPI / Swagger",                 badge: "nice" },
      { name: "Performance Profiling",             badge: "nice" },
    ],
  },

  // ── 14. QA / Test Engineer ──────────────────────────────────
  qa: {
    label: "QA / Test Engineer",
    skills: [
      { name: "Manual Testing Fundamentals",       badge: "required" },
      { name: "Test Case Design",                  badge: "required" },
      { name: "Selenium or Playwright",            badge: "required" },
      { name: "API Testing (Postman / REST)",      badge: "required" },
      { name: "Bug Tracking (Jira)",               badge: "required" },
      { name: "CI/CD Integration",                 badge: "required" },
      { name: "SQL for QA",                        badge: "recommended" },
      { name: "Performance Testing (JMeter)",      badge: "recommended" },
      { name: "Mobile Testing",                    badge: "recommended" },
      { name: "Test-Driven Development (TDD)",     badge: "nice" },
      { name: "Security Testing Basics",           badge: "nice" },
      { name: "AI-Assisted Testing Tools",         badge: "nice" },
    ],
  },

  // ── 15. Scrum Master / Agile Coach ─────────────────────────
  scrum: {
    label: "Scrum Master / Agile Coach",
    skills: [
      { name: "Scrum Framework",                   badge: "required" },
      { name: "Kanban & Lean Principles",          badge: "required" },
      { name: "Sprint Planning & Retrospectives",  badge: "required" },
      { name: "Stakeholder Communication",         badge: "required" },
      { name: "Conflict Resolution",               badge: "required" },
      { name: "Jira / Confluence",                 badge: "required" },
      { name: "Metrics (Velocity, Burn-down)",     badge: "recommended" },
      { name: "SAFe / LeSS Scaling Frameworks",   badge: "recommended" },
      { name: "Coaching & Mentoring",              badge: "recommended" },
      { name: "Risk Management",                   badge: "nice" },
      { name: "Product Owner Collaboration",       badge: "nice" },
      { name: "OKR Frameworks",                    badge: "nice" },
    ],
  },

  // ── 16. Data Analyst ────────────────────────────────────────
  dataanalyst: {
    label: "Data Analyst",
    skills: [
      { name: "SQL (Advanced Queries)",            badge: "required" },
      { name: "Excel / Google Sheets",             badge: "required" },
      { name: "Data Visualization (Tableau/PowerBI)", badge: "required" },
      { name: "Python or R for Analysis",          badge: "required" },
      { name: "Statistical Analysis",              badge: "required" },
      { name: "Data Cleaning & ETL",               badge: "required" },
      { name: "Business Acumen & Storytelling",    badge: "required" },
      { name: "A/B Testing",                       badge: "recommended" },
      { name: "Dashboard Design",                  badge: "recommended" },
      { name: "Google Analytics / Mixpanel",       badge: "recommended" },
      { name: "Predictive Modelling Basics",       badge: "nice" },
      { name: "dbt / Looker",                      badge: "nice" },
      { name: "Spark / BigQuery",                  badge: "nice" },
    ],
  },

  // ── 17. Technical Writer ────────────────────────────────────
  techwriter: {
    label: "Technical Writer",
    skills: [
      { name: "Docs-as-Code (Markdown / RST)",     badge: "required" },
      { name: "API Documentation",                 badge: "required" },
      { name: "Information Architecture",          badge: "required" },
      { name: "Git & Version Control",             badge: "required" },
      { name: "Audience Analysis",                 badge: "required" },
      { name: "Style Guides (Google, Microsoft)",  badge: "required" },
      { name: "Static Site Generators (Hugo/Docusaurus)", badge: "recommended" },
      { name: "Developer Experience (DX) Writing", badge: "recommended" },
      { name: "Diagrams (Mermaid / draw.io)",      badge: "recommended" },
      { name: "OpenAPI / Swagger Docs",            badge: "nice" },
      { name: "Video & Screencasts",               badge: "nice" },
      { name: "Localisation Basics",               badge: "nice" },
    ],
  },

  // ── ECE: Embedded Systems Engineer ─────────────────────────
  ece_embedded: {
    label: "Embedded Systems Engineer (ECE)",
    skills: [
      { name: "C / C++ Programming",                        badge: "required" },
      { name: "Microcontrollers (ARM / AVR / STM32)",       badge: "required" },
      { name: "RTOS (FreeRTOS / Zephyr)",                   badge: "required" },
      { name: "Communication Protocols (I2C, SPI, UART)",   badge: "required" },
      { name: "Digital Circuit Design",                     badge: "required" },
      { name: "PCB Design (KiCad / Altium)",                badge: "required" },
      { name: "Embedded Linux",                             badge: "recommended" },
      { name: "FPGA / VHDL / Verilog",                      badge: "recommended" },
      { name: "Signal Processing (DSP)",                    badge: "recommended" },
      { name: "Device Drivers Development",                 badge: "recommended" },
      { name: "Wireless Protocols (BLE / Zigbee / LoRa)",   badge: "nice" },
      { name: "IoT Platforms (AWS IoT / Azure IoT Hub)",    badge: "nice" },
      { name: "Hardware Debugging (JTAG / Oscilloscope)",   badge: "nice" },
    ],
  },

  // ── ECE: VLSI Design Engineer ───────────────────────────────
  ece_vlsi: {
    label: "VLSI / Chip Design Engineer (ECE)",
    skills: [
      { name: "Verilog / SystemVerilog",                    badge: "required" },
      { name: "VHDL",                                       badge: "required" },
      { name: "RTL Design & Synthesis",                     badge: "required" },
      { name: "Static Timing Analysis (STA)",               badge: "required" },
      { name: "ASIC Design Flow",                           badge: "required" },
      { name: "EDA Tools (Cadence / Synopsys / Mentor)",    badge: "required" },
      { name: "Physical Design & Place & Route",            badge: "recommended" },
      { name: "FPGA Implementation",                        badge: "recommended" },
      { name: "UVM / OVM Verification",                     badge: "recommended" },
      { name: "DFT & Scan Insertion",                       badge: "recommended" },
      { name: "Mixed-Signal Design",                        badge: "nice" },
      { name: "Low-Power Design Techniques",               badge: "nice" },
      { name: "SPICE Simulation",                           badge: "nice" },
    ],
  },

  // ── ECE: RF / Telecom Engineer ──────────────────────────────
  ece_rf: {
    label: "RF / Telecom Engineer (ECE)",
    skills: [
      { name: "RF Circuit Design",                          badge: "required" },
      { name: "Antenna Theory & Design",                    badge: "required" },
      { name: "Wireless Standards (5G / LTE / WiFi)",       badge: "required" },
      { name: "Signal Modulation Techniques",               badge: "required" },
      { name: "Network Protocol Stack (OSI / TCP-IP)",      badge: "required" },
      { name: "Spectrum Analysis & Measurement",            badge: "required" },
      { name: "MATLAB / GNU Radio",                         badge: "recommended" },
      { name: "SDR (Software Defined Radio)",               badge: "recommended" },
      { name: "EMI / EMC Compliance",                       badge: "recommended" },
      { name: "Microwave Engineering",                      badge: "recommended" },
      { name: "OFDM & MIMO Systems",                        badge: "nice" },
      { name: "Network Planning & Optimization",            badge: "nice" },
      { name: "Fiber Optics & Photonics",                   badge: "nice" },
    ],
  },

  // ── EEE: Electrical Design Engineer ────────────────────────
  eee_design: {
    label: "Electrical Design Engineer (EEE)",
    skills: [
      { name: "Electrical Circuit Analysis",                badge: "required" },
      { name: "Power Systems Design",                       badge: "required" },
      { name: "AutoCAD Electrical / EPLAN",                 badge: "required" },
      { name: "Protection & Control Systems",               badge: "required" },
      { name: "Transformer & Switchgear Design",            badge: "required" },
      { name: "Electrical Standards (IEC / IEEE / NEC)",    badge: "required" },
      { name: "PLC Programming (Ladder / Structured Text)", badge: "recommended" },
      { name: "SCADA Systems",                              badge: "recommended" },
      { name: "Cable Sizing & Load Calculations",           badge: "recommended" },
      { name: "Grounding & Earthing Systems",               badge: "recommended" },
      { name: "Energy Auditing",                            badge: "nice" },
      { name: "Harmonic Analysis",                          badge: "nice" },
      { name: "Solar / Renewable Energy Systems",           badge: "nice" },
    ],
  },

  // ── EEE: Power Electronics Engineer ────────────────────────
  eee_power: {
    label: "Power Electronics Engineer (EEE)",
    skills: [
      { name: "Power Converter Design (DC-DC / AC-DC)",     badge: "required" },
      { name: "Inverter & Rectifier Design",                badge: "required" },
      { name: "MOSFET / IGBT Gate Drive Circuits",          badge: "required" },
      { name: "Motor Drive Systems (VFD)",                  badge: "required" },
      { name: "Battery Management Systems (BMS)",           badge: "required" },
      { name: "Control Systems & Feedback Loops",           badge: "required" },
      { name: "MATLAB / Simulink",                          badge: "recommended" },
      { name: "Thermal Management & Heatsink Design",       badge: "recommended" },
      { name: "EMI Filtering & Shielding",                  badge: "recommended" },
      { name: "EV Charging Systems",                        badge: "recommended" },
      { name: "GaN / SiC Wide-Bandgap Devices",             badge: "nice" },
      { name: "Grid-Tied Inverter & PFC Design",            badge: "nice" },
      { name: "Wireless Power Transfer",                    badge: "nice" },
    ],
  },

  // ── EEE: Automation & Instrumentation Engineer ─────────────
  eee_automation: {
    label: "Automation & Instrumentation Engineer (EEE)",
    skills: [
      { name: "PLC Programming (Siemens / Allen Bradley)",  badge: "required" },
      { name: "SCADA & DCS Systems",                        badge: "required" },
      { name: "Process Instrumentation (Sensors / Transmitters)", badge: "required" },
      { name: "Industrial Networking (Modbus / PROFIBUS / EtherNet/IP)", badge: "required" },
      { name: "Control Loop Tuning (PID)",                  badge: "required" },
      { name: "P&ID Interpretation",                        badge: "required" },
      { name: "Electrical Panel Wiring & Commissioning",    badge: "recommended" },
      { name: "HMI Development",                            badge: "recommended" },
      { name: "Functional Safety (IEC 61508 / SIL)",        badge: "recommended" },
      { name: "Robotics & Motion Control",                  badge: "recommended" },
      { name: "IoT & Industry 4.0 Integration",             badge: "nice" },
      { name: "OPC-UA / MQTT Protocols",                    badge: "nice" },
      { name: "Predictive Maintenance & Analytics",         badge: "nice" },
    ],
  },

  // ── Civil: Structural Engineer ──────────────────────────────
  civil_structural: {
    label: "Structural Engineer (Civil)",
    skills: [
      { name: "Structural Analysis & Design",               badge: "required" },
      { name: "RCC / Steel Design (IS / ACI / Eurocode)",   badge: "required" },
      { name: "AutoCAD & Drafting",                         badge: "required" },
      { name: "STAAD.Pro / ETABS / SAP2000",                badge: "required" },
      { name: "Foundation Design (Shallow & Deep)",         badge: "required" },
      { name: "Construction Materials & Quality Control",   badge: "required" },
      { name: "BIM (Revit / Tekla Structures)",             badge: "recommended" },
      { name: "Seismic & Wind Load Analysis",               badge: "recommended" },
      { name: "Pre-stressed / Pre-cast Concrete Design",    badge: "recommended" },
      { name: "Geotechnical Investigation Interpretation",  badge: "recommended" },
      { name: "Post-Tensioning Design",                     badge: "nice" },
      { name: "Structural Health Monitoring",               badge: "nice" },
      { name: "Progressive Collapse Analysis",              badge: "nice" },
    ],
  },

  // ── Civil: Transportation / Highway Engineer ────────────────
  civil_transport: {
    label: "Transportation / Highway Engineer (Civil)",
    skills: [
      { name: "Highway Geometric Design",                   badge: "required" },
      { name: "Pavement Design & Analysis",                 badge: "required" },
      { name: "Traffic Engineering & Simulation",           badge: "required" },
      { name: "AutoCAD Civil 3D",                           badge: "required" },
      { name: "Survey & Alignment Design",                  badge: "required" },
      { name: "IRC / AASHTO / BS Standards",                badge: "required" },
      { name: "VISSIM / SYNCHRO Traffic Modelling",         badge: "recommended" },
      { name: "Bridge Design Basics",                       badge: "recommended" },
      { name: "GIS & Remote Sensing",                       badge: "recommended" },
      { name: "Drainage & Stormwater Design",               badge: "recommended" },
      { name: "Road Safety Auditing",                       badge: "nice" },
      { name: "ITS (Intelligent Transport Systems)",        badge: "nice" },
      { name: "Urban Mass Transit Planning",                badge: "nice" },
    ],
  },

  // ── Civil: Water Resources / Environmental Engineer ────────
  civil_water: {
    label: "Water Resources Engineer (Civil)",
    skills: [
      { name: "Hydraulics & Hydrology",                     badge: "required" },
      { name: "Water Supply System Design",                 badge: "required" },
      { name: "Wastewater Treatment Design",                badge: "required" },
      { name: "Irrigation Engineering",                     badge: "required" },
      { name: "HEC-RAS / SWMM / EPANET",                   badge: "required" },
      { name: "Dam & Reservoir Design",                     badge: "required" },
      { name: "Flood Risk Assessment",                      badge: "recommended" },
      { name: "Environmental Impact Assessment",            badge: "recommended" },
      { name: "GIS & Watershed Modelling",                  badge: "recommended" },
      { name: "Ground Water Modelling (MODFLOW)",           badge: "recommended" },
      { name: "Water Quality Analysis",                     badge: "nice" },
      { name: "Desalination Technologies",                  badge: "nice" },
      { name: "Climate Resilience in Water Planning",       badge: "nice" },
    ],
  },

  // ── Civil: Construction Project Manager ─────────────────────
  civil_pm: {
    label: "Construction Project Manager (Civil)",
    skills: [
      { name: "Project Planning & Scheduling (MS Project / Primavera)", badge: "required" },
      { name: "Cost Estimation & Budgeting",                badge: "required" },
      { name: "Contract Management (FIDIC / NEC)",          badge: "required" },
      { name: "Construction Quality Management",            badge: "required" },
      { name: "Site Safety (OSHA / IS 18001)",              badge: "required" },
      { name: "Tendering & BOQ Preparation",                badge: "required" },
      { name: "BIM Coordination",                           badge: "recommended" },
      { name: "Risk Management",                            badge: "recommended" },
      { name: "Stakeholder & Subcontractor Management",     badge: "recommended" },
      { name: "Quantity Surveying",                         badge: "recommended" },
      { name: "Lean Construction Techniques",               badge: "nice" },
      { name: "EPC Project Delivery",                       badge: "nice" },
      { name: "Earned Value Management (EVM)",              badge: "nice" },
    ],
  },

  // ── Mechanical: Design Engineer ─────────────────────────────
  mech_design: {
    label: "Mechanical Design Engineer",
    skills: [
      { name: "CAD Modeling (SolidWorks / CATIA / Creo)",   badge: "required" },
      { name: "GD&T (Geometric Dimensioning & Tolerancing)", badge: "required" },
      { name: "Engineering Drawing & Standards",            badge: "required" },
      { name: "Finite Element Analysis (ANSYS / Abaqus)",   badge: "required" },
      { name: "Thermodynamics & Heat Transfer",             badge: "required" },
      { name: "Materials Selection & Properties",           badge: "required" },
      { name: "Manufacturing Processes (Casting / Forging / Machining)", badge: "recommended" },
      { name: "Fluid Mechanics & CFD",                      badge: "recommended" },
      { name: "Product Lifecycle Management (PLM)",         badge: "recommended" },
      { name: "Design for Manufacturing (DFM)",             badge: "recommended" },
      { name: "Sheet Metal & Weld Design",                  badge: "nice" },
      { name: "Topology Optimization",                      badge: "nice" },
      { name: "Additive Manufacturing / 3D Printing",       badge: "nice" },
    ],
  },

  // ── Mechanical: Manufacturing / Production Engineer ─────────
  mech_manufacturing: {
    label: "Manufacturing / Production Engineer (Mechanical)",
    skills: [
      { name: "CNC Programming (G-Code / CAM)",             badge: "required" },
      { name: "Lean Manufacturing & Kaizen",                badge: "required" },
      { name: "Quality Control & Six Sigma",                badge: "required" },
      { name: "Production Planning & Scheduling",           badge: "required" },
      { name: "Process FMEA",                               badge: "required" },
      { name: "Tooling & Fixture Design",                   badge: "required" },
      { name: "ERP Systems (SAP / Oracle)",                 badge: "recommended" },
      { name: "Statistical Process Control (SPC)",          badge: "recommended" },
      { name: "Automation & Robotics Integration",          badge: "recommended" },
      { name: "OEE Improvement & TPM",                      badge: "recommended" },
      { name: "Industry 4.0 & Digital Manufacturing",       badge: "nice" },
      { name: "Jigs, Fixtures & Press Tool Design",         badge: "nice" },
      { name: "Supply Chain & Vendor Management",           badge: "nice" },
    ],
  },

  // ── Mechanical: HVAC / Thermal Systems Engineer ─────────────
  mech_hvac: {
    label: "HVAC / Thermal Systems Engineer (Mechanical)",
    skills: [
      { name: "HVAC System Design (AHU / Chiller / VRF)",   badge: "required" },
      { name: "Psychrometrics & Load Calculations",         badge: "required" },
      { name: "Duct & Piping Design",                       badge: "required" },
      { name: "ASHRAE / ISHRAE Standards",                  badge: "required" },
      { name: "Refrigeration Cycles & Equipment",           badge: "required" },
      { name: "AutoCAD MEP / Revit MEP",                    badge: "required" },
      { name: "Energy Simulation (HAP / Carrier E20-II)",   badge: "recommended" },
      { name: "Building Energy Modelling (EnergyPlus)",     badge: "recommended" },
      { name: "Fire Suppression & Ventilation Systems",     badge: "recommended" },
      { name: "Commissioning & Balancing",                  badge: "recommended" },
      { name: "Green Building (LEED / GRIHA)",              badge: "nice" },
      { name: "District Cooling Systems",                   badge: "nice" },
      { name: "Cleanroom Design",                           badge: "nice" },
    ],
  },

  // ── Mechanical: Automotive Engineer ─────────────────────────
  mech_auto: {
    label: "Automotive Engineer (Mechanical)",
    skills: [
      { name: "Vehicle Dynamics & NVH",                     badge: "required" },
      { name: "Powertrain Engineering (ICE / EV)",          badge: "required" },
      { name: "CAD Modeling (CATIA / NX)",                  badge: "required" },
      { name: "Crash & Safety Simulation (LS-DYNA)",        badge: "required" },
      { name: "AUTOSAR Architecture",                       badge: "required" },
      { name: "Automotive Standards (IATF 16949 / APQP)",  badge: "required" },
      { name: "Engine Management & ECU Calibration",        badge: "recommended" },
      { name: "Battery & Thermal Management (EV)",          badge: "recommended" },
      { name: "Aerodynamics & CFD",                         badge: "recommended" },
      { name: "Transmission & Driveline Design",            badge: "recommended" },
      { name: "ADAS & Autonomous Systems",                  badge: "nice" },
      { name: "Lightweighting (Composites / Aluminium)",    badge: "nice" },
      { name: "V2X Communication",                          badge: "nice" },
    ],
  },

};

// ─────────────────────────────────────
//  CAREER_PATHS  –  Role progression map
// ─────────────────────────────────────
const CAREER_PATHS = {
  cybersecurity:    { icon:"🛡️", steps:["Junior Security Analyst","Cybersecurity Analyst","Senior Security Engineer","CISO / Security Architect"] },
  fullstack:        { icon:"💻", steps:["Junior Developer","Full-Stack Developer","Senior Full-Stack","Tech Lead / Architect"] },
  datascience:      { icon:"📊", steps:["Data Analyst","Data Scientist","Senior Data Scientist","Principal Scientist / ML Lead"] },
  devops:           { icon:"⚙️", steps:["DevOps Engineer","Senior DevOps","Platform Engineer","VP of Infrastructure"] },
  product:          { icon:"🎯", steps:["Associate PM","Product Manager","Senior PM","Director of Product"] },
  mleng:            { icon:"🤖", steps:["ML Engineer","Senior ML Engineer","Staff ML Engineer","Principal Engineer / ML Architect"] },
  cloudarch:        { icon:"☁️", steps:["Cloud Engineer","Cloud Architect","Principal Architect","CTO / VP Cloud"] },
  uiux:             { icon:"🎨", steps:["UI Designer","UX Designer","Senior UX Designer","Head of Design / Design Director"] },
  blockchain:       { icon:"⛓️", steps:["Smart Contract Dev","Blockchain Developer","Senior Blockchain Engineer","Protocol Engineer / Founder"] },
  dataeng:          { icon:"🔧", steps:["Data Analyst","Data Engineer","Senior Data Engineer","Data Platform Lead"] },
  mobile:           { icon:"📱", steps:["Junior Mobile Dev","Mobile Developer","Senior Mobile Engineer","Mobile Architect"] },
  prompteng:        { icon:"✨", steps:["Prompt Engineer","AI Product Engineer","AI Solutions Architect","Head of AI Products"] },
  backend:          { icon:"🖥️", steps:["Junior Backend Dev","Backend Engineer","Senior Backend Engineer","Principal Backend Architect"] },
  qa:               { icon:"🔍", steps:["QA Tester","QA Engineer","Senior QA / SDET","QA Lead / Test Architect"] },
  scrum:            { icon:"🏃", steps:["Scrum Master","Senior Scrum Master / RTE","Agile Coach","Head of Agile / CTO"] },
  dataanalyst:      { icon:"📈", steps:["Data Analyst","Senior Data Analyst","Analytics Manager","Chief Data Officer"] },
  techwriter:       { icon:"✍️", steps:["Technical Writer","Senior Technical Writer","Docs Lead","Head of Developer Relations"] },
  ece_embedded:     { icon:"🔌", steps:["Junior Embedded Engineer","Embedded Systems Engineer","Senior Embedded Engineer","IoT / Firmware Architect"] },
  ece_vlsi:         { icon:"🔬", steps:["RTL Design Engineer","VLSI Design Engineer","Senior VLSI Engineer","Chip Architect / Principal Engineer"] },
  ece_rf:           { icon:"📡", steps:["RF Engineer","Senior RF / Telecom Engineer","RF Systems Architect","Director of RF Engineering"] },
  eee_design:       { icon:"⚡", steps:["Electrical Engineer","Electrical Design Engineer","Senior Electrical Engineer","Principal Electrical Architect"] },
  eee_power:        { icon:"🔋", steps:["Power Electronics Engineer","Senior Power Electronics","Power Systems Lead","Chief Engineer / R&D Director"] },
  eee_automation:   { icon:"🏭", steps:["Automation Engineer","Instrumentation Engineer","Senior Automation Engineer","Automation Architect / Plant Manager"] },
  civil_structural: { icon:"🏗️", steps:["Graduate Structural Engineer","Structural Engineer","Senior Structural Engineer","Principal Structural Engineer / Director"] },
  civil_transport:  { icon:"🛣️", steps:["Graduate Transportation Eng.","Transportation Engineer","Senior Highway Engineer","Principal Transport Planner"] },
  civil_water:      { icon:"💧", steps:["Graduate Water Resources Eng.","Water Resources Engineer","Senior Hydraulic Engineer","Principal Water Engineer / Director"] },
  civil_pm:         { icon:"👷", steps:["Site Engineer","Construction PM","Senior Project Manager","Programme Director / VP Projects"] },
  mech_design:      { icon:"⚙️", steps:["Graduate Mechanical Engineer","Mechanical Design Engineer","Senior Design Engineer","Chief Engineer / R&D Director"] },
  mech_manufacturing:{ icon:"🔩", steps:["Process Engineer","Manufacturing Engineer","Senior Manufacturing Engineer","Plant Director / VP Manufacturing"] },
  mech_hvac:        { icon:"🌡️", steps:["HVAC Technician / Graduate","HVAC Design Engineer","Senior HVAC Engineer","MEP Director / Principal Engineer"] },
  mech_auto:        { icon:"🚗", steps:["Graduate Automotive Engineer","Automotive Engineer","Senior Automotive Engineer","Chief Vehicle Engineer / VP Engineering"] },
};

// ─────────────────────────────────────
//  ROLE_PROJECTS  –  Build-to-learn projects
// ─────────────────────────────────────
const ROLE_PROJECTS = {
  cybersecurity:    ["Build a port scanner in Python","Set up a home lab with VMs and simulate an attack/defence scenario","Create a vulnerability report for an open-source app using OWASP ZAP"],
  fullstack:        ["Build a full-stack Todo app with React + Node + PostgreSQL","Clone a real product (Twitter feed, Airbnb listing page)","Create a REST API with auth, rate-limiting, and deployed to a cloud provider"],
  datascience:      ["End-to-end ML pipeline: data → model → hosted API","Kaggle competition submission with a write-up","Interactive data dashboard with Streamlit or Plotly"],
  devops:           ["CI/CD pipeline with GitHub Actions deploying to AWS","Dockerise a multi-service app with docker-compose","Terraform script to provision a VPC, EC2, and RDS in AWS"],
  product:          ["Write a full PRD for a feature you wish existed","Create a competitive analysis doc for a product you use","Run a mock user interview and produce an insights report"],
  mleng:            ["Fine-tune a small open-source LLM on a custom dataset","Build a model serving endpoint with FastAPI + Docker","MLflow experiment tracking pipeline for a classification problem"],
  cloudarch:        ["Design a 3-tier architecture on AWS with Terraform","Set up monitoring + alerting with Grafana + Prometheus","Build a serverless image processing pipeline using Lambda + S3"],
  uiux:             ["Full Figma redesign of a real app's onboarding flow","Conduct 3 user interviews and produce a usability report","Design and prototype a mobile app from scratch in Figma"],
  blockchain:       ["Deploy an ERC-20 token on a testnet","Build a simple DeFi staking contract in Solidity + Hardhat","Create a full-stack dApp with MetaMask wallet connect"],
  dataeng:          ["Build an ELT pipeline: API → S3 → Snowflake with Airflow","dbt project transforming raw e-commerce data into analytics-ready tables","Real-time streaming pipeline with Kafka → Spark → Dashboard"],
  mobile:           ["Build a cross-platform app in React Native or Flutter","Clone a core screen of a popular app (e.g. Spotify player)","Publish an app to the Play Store / App Store (even a simple one)"],
  prompteng:        ["Build a RAG chatbot over a PDF document","Create a structured output pipeline using function calling","Benchmark 3 different prompt strategies on the same task"],
  backend:          ["REST API with JWT auth, pagination, and test coverage > 80%","Build a real-time notification system with WebSockets","Design and document a microservice with OpenAPI / Swagger"],
  qa:               ["Automate an E2E test suite for a public website with Playwright","Write a full test plan for a login feature","Set up a CI pipeline that runs your test suite on every PR"],
  scrum:            ["Run a mock sprint with a small team and write a retrospective","Create a full Definition of Done + team agreements doc","Map a real product's backlog and run a refinement session"],
  dataanalyst:      ["EDA + insight report on a public dataset (e.g. Kaggle)","Build a KPI dashboard in Tableau or Power BI","A/B test analysis with statistical significance writeup"],
  techwriter:       ["Document an open-source project's REST API","Write a getting-started guide for a library you use","Create a style guide for a fictional product team"],
  ece_embedded:     ["Build a sensor data logger on STM32 with I2C + UART output","Implement a FreeRTOS multi-task firmware for LED + button + serial","Design and assemble a simple PCB breakout board in KiCad"],
  ece_vlsi:         ["Write and simulate a 4-bit ALU in Verilog on ModelSim","Implement a simple UART in SystemVerilog with testbench","Synthesise a design on an FPGA (e.g. Basys3) and verify on hardware"],
  ece_rf:           ["Design and simulate a low-pass RF filter in MATLAB","Build a simple FM receiver using RTL-SDR dongle","Model a dipole antenna in HFSS or 4nec2 and compare to measured"],
  eee_design:       ["Design a single-line diagram for a 3-phase industrial panel in AutoCAD Electrical","Create a cable sizing & load flow calculation sheet in Excel","Draw a full P&ID for a simple pump system with interlocks"],
  eee_power:        ["Simulate a buck converter in MATLAB Simulink and plot efficiency","Build a small DC-DC converter on breadboard and measure waveforms","Design a basic BMS cell balancing circuit and simulate in LTSpice"],
  eee_automation:   ["Program a traffic-light sequence on a Siemens LOGO! / Arduino PLC","Build a SCADA screen in Ignition (community edition) for a simulated process","Configure a PID loop in TIA Portal and tune it using step response"],
  civil_structural: ["Model and analyse a 2-storey RCC frame in ETABS","Design a simply supported beam to IS 456 / Eurocode with hand calcs","Create a complete structural drawing set for a slab-column system"],
  civil_transport:  ["Design a horizontal curve with superelevation in AutoCAD Civil 3D","Run a VISSIM simulation of a signalised intersection and optimise timing","Produce a road drainage design with AutoCAD and rational method calcs"],
  civil_water:      ["Set up a HEC-RAS 1D flood model for a simple river reach","Design a water distribution network in EPANET for a small community","Perform a rational method stormwater calculation and size a culvert"],
  civil_pm:         ["Build a full project schedule for a 5-storey building in Primavera P6","Prepare a BOQ and cost estimate for a small civil works package","Write a construction risk register with mitigation strategies"],
  mech_design:      ["Model a mechanical assembly in SolidWorks and run an FEA stress analysis","Design a bracket under load and optimise for minimum weight","Create a full engineering drawing set with GD&T annotations"],
  mech_manufacturing:["Map and improve a production value stream with a VSM diagram","Conduct a PFMEA for a simple machined part","Write and execute an SPC control chart for a mock production run"],
  mech_hvac:        ["Do a full cooling load calculation for a small office in Excel / HAP","Design a duct layout for a single-floor commercial space in AutoCAD MEP","Prepare a chiller and AHU selection report using manufacturer software"],
  mech_auto:        ["Build a quarter-car suspension model in MATLAB Simulink","Conduct a basic NVH analysis using FFT on vibration data","Create a DFMEA for a vehicle door assembly"],
};


// ─────────────────────────────────────
//  GAP_INFO  –  Per-skill descriptions
//              + 3 course recommendations
// ─────────────────────────────────────
const GAP_INFO = {

  // ── Cybersecurity ────────────────────────────────────────────
  "Network Security": {
    desc: "Covers firewalls, VPNs, IDS/IPS, TCP/IP, and traffic analysis — the foundation of defending any infrastructure.",
    courses: [
      { name: "CompTIA Network+",                    platform: "CompTIA",              url: "https://www.comptia.org/certifications/network" },
      { name: "Cisco CyberOps Associate",            platform: "Cisco",                url: "https://learningnetwork.cisco.com/s/cyberops-associate" },
      { name: "Complete Network Security Course",    platform: "Udemy",                url: "https://www.udemy.com/course/network-security-course/" },
    ],
  },
  "Penetration Testing": {
    desc: "Ethical hacking skills to proactively discover vulnerabilities — covering recon, exploitation, and reporting.",
    courses: [
      { name: "Practical Ethical Hacking",           platform: "TCM Security",         url: "https://academy.tcm-sec.com/p/practical-ethical-hacking-the-complete-course" },
      { name: "OffSec OSCP",                         platform: "OffSec",               url: "https://www.offsec.com/courses/pen-200/" },
      { name: "Penetration Testing Path",            platform: "Hack The Box",         url: "https://academy.hackthebox.com/paths/jobrole/1" },
    ],
  },
  "SIEM Tools": {
    desc: "SIEM platforms correlate logs from across your environment to surface threats and compliance violations.",
    courses: [
      { name: "Splunk Fundamentals 1 (Free)",        platform: "Splunk",               url: "https://www.splunk.com/en_us/training/splunk-fundamentals-1.html" },
      { name: "Microsoft Sentinel Training",         platform: "Microsoft Learn",      url: "https://learn.microsoft.com/en-us/training/paths/security-ops-sentinel/" },
      { name: "SOC Analyst Learning Path",           platform: "TryHackMe",            url: "https://tryhackme.com/paths" },
    ],
  },
  "Threat Intelligence": {
    desc: "Understand adversary TTPs, track threat actors, and apply intelligence to harden defences proactively.",
    courses: [
      { name: "Cyber Threat Intelligence",           platform: "SANS",                 url: "https://www.sans.org/cyber-security-courses/cyber-threat-intelligence/" },
      { name: "MITRE ATT&CK Fundamentals",           platform: "MITRE",                url: "https://attack.mitre.org/resources/training/" },
      { name: "IBM Cybersecurity Analyst",           platform: "Coursera",             url: "https://www.coursera.org/learn/ibm-cybersecurity-analyst" },
    ],
  },
  "Incident Response": {
    desc: "A structured IR process — preparation, detection, containment, eradication, and recovery — limits breach impact.",
    courses: [
      { name: "Incident Response & Digital Forensics", platform: "Coursera",           url: "https://www.coursera.org/learn/incident-response-digital-forensics-eccu" },
      { name: "GCIH Certification",                  platform: "SANS GIAC",            url: "https://www.giac.org/certifications/certified-incident-handler-gcih/" },
      { name: "IR with Velociraptor",                platform: "TryHackMe",            url: "https://tryhackme.com/room/velociraptor" },
    ],
  },
  "Vulnerability Assessment": {
    desc: "Systematically scan, score (CVSS), and prioritise vulnerabilities before attackers can exploit them.",
    courses: [
      { name: "Vulnerability Management",            platform: "Qualys Training",      url: "https://www.qualys.com/training/" },
      { name: "Nessus Essentials (Free)",            platform: "Tenable",              url: "https://www.tenable.com/products/nessus/nessus-essentials" },
      { name: "Web App Pentesting (OWASP Top 10)",   platform: "PortSwigger Web Academy", url: "https://portswigger.net/web-security" },
    ],
  },
  "Cryptography & PKI": {
    desc: "From symmetric/asymmetric ciphers to certificate chains — cryptography underpins every secure communication.",
    courses: [
      { name: "Cryptography I",                      platform: "Coursera (Stanford)",  url: "https://www.coursera.org/learn/crypto" },
      { name: "PKI Fundamentals",                    platform: "Udemy",                url: "https://www.udemy.com/course/pki-masterclass-building-a-certificate-authority/" },
      { name: "Practical Cryptography for Devs (Free Book)", platform: "Free Book",   url: "https://cryptobook.nakov.com/" },
    ],
  },
  "Security Frameworks (NIST, ISO)": {
    desc: "NIST CSF and ISO 27001 provide governance blueprints that align security programs with business risk.",
    courses: [
      { name: "NIST Cybersecurity Framework",        platform: "Coursera",             url: "https://www.coursera.org/learn/nist-csf" },
      { name: "ISO/IEC 27001 Lead Implementer",      platform: "PECB",                 url: "https://pecb.com/en/education-and-certification-for-individuals/iso-iec-27001" },
      { name: "IT Governance & Risk",                platform: "edX",                  url: "https://www.edx.org/learn/cybersecurity" },
    ],
  },
  "Cloud Security": {
    desc: "Securing cloud-native workloads: IAM least-privilege, data encryption, shared responsibility, and CSPM.",
    courses: [
      { name: "AWS Security Specialty",              platform: "AWS",                  url: "https://aws.amazon.com/certification/certified-security-specialty/" },
      { name: "Google Professional Cloud Security Engineer", platform: "Google Cloud", url: "https://cloud.google.com/learn/certification/cloud-security-engineer" },
      { name: "Cloud Security Fundamentals",         platform: "Coursera",             url: "https://www.coursera.org/specializations/palo-alto-networks-cybersecurity" },
    ],
  },
  "Identity & Access Management": {
    desc: "IAM, SSO, MFA, and Zero Trust principles prevent unauthorised access even when perimeter defences fail.",
    courses: [
      { name: "Identity and Access Management",      platform: "Okta Training",        url: "https://training.okta.com/" },
      { name: "Zero Trust Security",                 platform: "Coursera",             url: "https://www.coursera.org/learn/zero-trust" },
      { name: "Microsoft Entra (Azure AD)",          platform: "Microsoft Learn",      url: "https://learn.microsoft.com/en-us/training/paths/implement-identity-management-solution/" },
    ],
  },
  "Digital Forensics": {
    desc: "Preserve and analyse digital evidence from disk, memory, and network captures following a security event.",
    courses: [
      { name: "CHFI Certification",                  platform: "EC-Council",           url: "https://www.eccouncil.org/programs/computer-hacking-forensic-investigator-chfi/" },
      { name: "Digital Forensics using Autopsy",     platform: "Coursera",             url: "https://www.coursera.org/learn/autopsy-windows-digital-forensics" },
      { name: "DFIR Learning Path",                  platform: "Blue Team Labs Online", url: "https://blueteamlabs.online/" },
    ],
  },
  "Reverse Engineering": {
    desc: "Disassemble and analyse malware or closed-source software to understand behaviour and extract indicators.",
    courses: [
      { name: "Malware Analysis & Reverse Engineering", platform: "TCM Security",      url: "https://academy.tcm-sec.com/p/malware-analysis-and-reverse-engineering" },
      { name: "Practical Reverse Engineering",       platform: "Udemy",                url: "https://www.udemy.com/course/reverse-engineering-and-malware-analysis/" },
      { name: "RE101",                               platform: "OpenSecurityTraining2", url: "https://opensecuritytraining2.info/Re1010.html" },
    ],
  },

  // ── Full-Stack ───────────────────────────────────────────────
  "HTML / CSS": {
    desc: "The building blocks of every web page — semantic HTML and modern CSS (Flexbox, Grid, custom properties).",
    courses: [
      { name: "Responsive Web Design",               platform: "freeCodeCamp",         url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/" },
      { name: "HTML & CSS Full Course",              platform: "Scrimba",              url: "https://scrimba.com/learn/htmlcss" },
      { name: "CSS — The Complete Guide",            platform: "Udemy",                url: "https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/" },
    ],
  },
  "JavaScript / TypeScript": {
    desc: "Core language knowledge from fundamentals to async patterns, plus TypeScript for type-safe large codebases.",
    courses: [
      { name: "JavaScript Algorithms & Data Structures", platform: "freeCodeCamp",    url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" },
      { name: "The Complete JavaScript Course",      platform: "Udemy",               url: "https://www.udemy.com/course/the-complete-javascript-course/" },
      { name: "TypeScript Course for Beginners",     platform: "Academind (YouTube)", url: "https://www.youtube.com/watch?v=BwuLxPH8IDs" },
    ],
  },
  "React or Vue": {
    desc: "Component-based UI frameworks that power modern single-page applications at scale.",
    courses: [
      { name: "React — The Complete Guide",          platform: "Udemy",                url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/" },
      { name: "Vue Mastery",                         platform: "Vue Mastery",          url: "https://www.vuemastery.com/courses/intro-to-vue-3/intro-to-vue3" },
      { name: "Full Stack Open",                     platform: "University of Helsinki", url: "https://fullstackopen.com/en/" },
    ],
  },
  "Node.js": {
    desc: "Server-side JavaScript — build APIs, handle I/O, work with streams, and manage packages with npm.",
    courses: [
      { name: "Node.js Developer Course",            platform: "Udemy",                url: "https://www.udemy.com/course/the-complete-nodejs-developer-course-2/" },
      { name: "Node.js & Express.js Full Course",    platform: "freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=Oe421EPjeBE" },
      { name: "Back End Development & APIs",         platform: "freeCodeCamp",         url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/" },
    ],
  },
  "REST APIs": {
    desc: "Design, build, and consume RESTful services — covering HTTP methods, status codes, auth, and versioning.",
    courses: [
      { name: "REST API Design with Flask & Python",  platform: "Udemy",              url: "https://www.udemy.com/course/rest-api-flask-and-python/" },
      { name: "APIs for Beginners",                  platform: "freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=GZvSYJDk-us" },
      { name: "Postman API Fundamentals",            platform: "Postman Academy",      url: "https://academy.postman.com/path/postman-api-fundamentals-student-expert" },
    ],
  },
  "SQL Databases": {
    desc: "Relational database fundamentals — querying, joins, indexing, normalisation, and transactions.",
    courses: [
      { name: "SQL for Data Science",                platform: "Coursera (UC Davis)",  url: "https://www.coursera.org/learn/sql-for-data-science" },
      { name: "The Complete SQL Bootcamp",           platform: "Udemy",                url: "https://www.udemy.com/course/the-complete-sql-bootcamp/" },
      { name: "SQLZoo Interactive Tutorials",        platform: "SQLZoo",               url: "https://sqlzoo.net/" },
    ],
  },
  "Authentication & Security": {
    desc: "JWT, OAuth 2.0, session management, HTTPS, and OWASP Top 10 vulnerabilities every developer must know.",
    courses: [
      { name: "Web Security & Bug Bounty",           platform: "Udemy",                url: "https://www.udemy.com/course/web-security-and-bug-bounty-learn-penetration-testing/" },
      { name: "OWASP Web Security Testing Guide",    platform: "OWASP",                url: "https://owasp.org/www-project-web-security-testing-guide/" },
      { name: "Node.js Security Best Practices",     platform: "Node.js Docs",         url: "https://nodejs.org/en/docs/guides/security/" },
    ],
  },
  "Git & CI/CD": {
    desc: "Version control workflows (branching, PRs) and automated pipelines (GitHub Actions, GitLab CI) for continuous delivery.",
    courses: [
      { name: "Git & GitHub Bootcamp",               platform: "Udemy",                url: "https://www.udemy.com/course/git-and-github-bootcamp/" },
      { name: "GitHub Actions — The Complete Guide", platform: "Udemy",                url: "https://www.udemy.com/course/github-actions-the-complete-guide/" },
      { name: "CI/CD with GitLab",                   platform: "GitLab Docs",          url: "https://docs.gitlab.com/ee/ci/" },
    ],
  },
  "Docker": {
    desc: "Containerise applications for consistent environments across dev, staging, and production.",
    courses: [
      { name: "Docker & Kubernetes: The Practical Guide", platform: "Udemy",           url: "https://www.udemy.com/course/docker-kubernetes-the-practical-guide/" },
      { name: "Play with Docker (Free)",             platform: "Docker",               url: "https://labs.play-with-docker.com/" },
      { name: "Docker Official Get Started",         platform: "Docker Docs",          url: "https://docs.docker.com/get-started/" },
    ],
  },
  "Cloud Hosting (AWS/Vercel)": {
    desc: "Deploy and scale web apps using cloud platforms — from managed PaaS (Vercel, Netlify) to AWS compute.",
    courses: [
      { name: "AWS Cloud Practitioner",              platform: "AWS",                  url: "https://aws.amazon.com/certification/certified-cloud-practitioner/" },
      { name: "Vercel Documentation",                platform: "Vercel",               url: "https://vercel.com/docs" },
      { name: "Full Stack for Front-End Engineers",  platform: "Frontend Masters",     url: "https://frontendmasters.com/courses/fullstack-v3/" },
    ],
  },
  "GraphQL": {
    desc: "Query language for APIs that lets clients fetch exactly the data they need — great for complex UIs.",
    courses: [
      { name: "GraphQL with React",                  platform: "Udemy",                url: "https://www.udemy.com/course/graphql-with-react-course/" },
      { name: "How to GraphQL (Free)",               platform: "howtographql.com",     url: "https://www.howtographql.com/" },
      { name: "Apollo GraphQL Tutorials",            platform: "Apollo",               url: "https://www.apollographql.com/tutorials/" },
    ],
  },
  "Testing (Jest, Cypress)": {
    desc: "Unit, integration, and end-to-end testing strategies that catch bugs before they reach production.",
    courses: [
      { name: "JavaScript Testing Introduction",     platform: "Academind (YouTube)",  url: "https://www.youtube.com/watch?v=r9HdJ8P6GQI" },
      { name: "Cypress End-to-End Testing",          platform: "Cypress Docs",         url: "https://docs.cypress.io/guides/getting-started/installing-cypress" },
      { name: "Testing JavaScript",                  platform: "TestingJavaScript.com", url: "https://testingjavascript.com/" },
    ],
  },
  "WebSockets / Real-time": {
    desc: "Build live features (chat, notifications, collaborative editing) using WebSockets and Socket.io.",
    courses: [
      { name: "Socket.io Real-time Web App",         platform: "Udemy",                url: "https://www.udemy.com/course/socketio/" },
      { name: "WebSockets Crash Course",             platform: "Fireship (YouTube)",   url: "https://www.youtube.com/watch?v=1BfCnjr_Vjg" },
      { name: "Socket.io Official Docs",             platform: "Socket.io",            url: "https://socket.io/docs/v4/" },
    ],
  },

  // ── Data Science ────────────────────────────────────────────
  "Python": {
    desc: "The lingua franca of data science and ML — from scripting and data wrangling to building production models.",
    courses: [
      { name: "Python for Everybody",                platform: "Coursera (Michigan)",  url: "https://www.coursera.org/specializations/python" },
      { name: "100 Days of Code: Python",            platform: "Udemy",                url: "https://www.udemy.com/course/100-days-of-code/" },
      { name: "Real Python Tutorials",               platform: "Real Python",          url: "https://realpython.com/" },
    ],
  },
  "Machine Learning": {
    desc: "Supervised, unsupervised, and reinforcement learning algorithms — from linear regression to ensemble methods.",
    courses: [
      { name: "Machine Learning Specialization",     platform: "Coursera (Andrew Ng)", url: "https://www.coursera.org/specializations/machine-learning-introduction" },
      { name: "Hands-On ML with Scikit-Learn (Book)", platform: "O'Reilly",            url: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/" },
      { name: "Fast.ai Practical ML (Free)",         platform: "fast.ai",              url: "https://course.fast.ai/" },
    ],
  },
  "Statistics & Probability": {
    desc: "Hypothesis testing, distributions, Bayesian inference, and regression — the mathematical backbone of data science.",
    courses: [
      { name: "Statistics with Python",              platform: "Coursera (Michigan)",  url: "https://www.coursera.org/specializations/statistics-with-python" },
      { name: "Think Stats (Free Book)",             platform: "Green Tea Press",      url: "https://greenteapress.com/wp/think-stats-2e/" },
      { name: "Khan Academy Statistics (Free)",      platform: "Khan Academy",         url: "https://www.khanacademy.org/math/statistics-probability" },
    ],
  },
  "Data Wrangling (Pandas)": {
    desc: "Clean, reshape, and merge messy datasets using Pandas and NumPy — often 80% of a data scientist's work.",
    courses: [
      { name: "Data Analysis with Python",           platform: "freeCodeCamp",         url: "https://www.freecodecamp.org/learn/data-analysis-with-python/" },
      { name: "Pandas Course",                       platform: "Kaggle Learn (Free)",  url: "https://www.kaggle.com/learn/pandas" },
      { name: "Python for Data Analysis (Book)",     platform: "O'Reilly",             url: "https://wesmckinney.com/book/" },
    ],
  },
  "Data Visualization": {
    desc: "Turn numbers into insights using Matplotlib, Seaborn, Plotly, and Tableau for exploratory and presentational charts.",
    courses: [
      { name: "Data Visualization with Python",      platform: "Coursera (IBM)",       url: "https://www.coursera.org/learn/python-for-data-visualization" },
      { name: "Data Visualization",                  platform: "Kaggle Learn (Free)",  url: "https://www.kaggle.com/learn/data-visualization" },
      { name: "Storytelling with Data (Book)",       platform: "Book",                 url: "https://www.storytellingwithdata.com/book" },
    ],
  },
  "SQL": {
    desc: "Write efficient queries, use window functions, and understand execution plans for analytical workloads.",
    courses: [
      { name: "SQL for Data Science",                platform: "Coursera (UC Davis)",  url: "https://www.coursera.org/learn/sql-for-data-science" },
      { name: "The Complete SQL Bootcamp",           platform: "Udemy",                url: "https://www.udemy.com/course/the-complete-sql-bootcamp/" },
      { name: "Mode SQL Tutorial (Free)",            platform: "Mode Analytics",       url: "https://mode.com/sql-tutorial/" },
    ],
  },
  "Experiment Design & A/B Testing": {
    desc: "Design statistically valid experiments, calculate sample sizes, and interpret results without p-hacking.",
    courses: [
      { name: "A/B Testing by Google",               platform: "Udacity (Free)",       url: "https://www.udacity.com/course/ab-testing--ud257" },
      { name: "Designing Experiments",               platform: "Coursera",             url: "https://www.coursera.org/learn/experimentation-analytics" },
      { name: "Trustworthy Online Controlled Experiments (Book)", platform: "Cambridge UP", url: "https://www.cambridge.org/core/books/trustworthy-online-controlled-experiments/D97B26382EB0EB2DC2019A7A7B518F59" },
    ],
  },
  "Deep Learning (TensorFlow/PyTorch)": {
    desc: "Neural networks, CNNs, RNNs, and transformers — build and train models for vision, NLP, and beyond.",
    courses: [
      { name: "Deep Learning Specialization",        platform: "Coursera (DeepLearning.AI)", url: "https://www.coursera.org/specializations/deep-learning" },
      { name: "Practical Deep Learning for Coders (Free)", platform: "fast.ai",         url: "https://course.fast.ai/" },
      { name: "PyTorch for Deep Learning (Free)",    platform: "learnpytorch.io",       url: "https://www.learnpytorch.io/" },
    ],
  },
  "Feature Engineering": {
    desc: "Transform raw data into informative features that dramatically improve model performance.",
    courses: [
      { name: "Feature Engineering",                platform: "Kaggle Learn (Free)",   url: "https://www.kaggle.com/learn/feature-engineering" },
      { name: "Feature Engineering for ML",         platform: "Udemy",                 url: "https://www.udemy.com/course/feature-engineering-for-machine-learning/" },
      { name: "Hands-On Feature Engineering (Book)", platform: "O'Reilly",             url: "https://www.oreilly.com/library/view/feature-engineering-for/9781491953235/" },
    ],
  },
  "NLP Fundamentals": {
    desc: "Text preprocessing, embeddings, transformers (BERT, GPT), and building NLP pipelines with HuggingFace.",
    courses: [
      { name: "NLP Specialization",                  platform: "Coursera (DeepLearning.AI)", url: "https://www.coursera.org/specializations/natural-language-processing" },
      { name: "HuggingFace NLP Course (Free)",       platform: "HuggingFace",          url: "https://huggingface.co/learn/nlp-course" },
      { name: "spaCy Course (Free)",                 platform: "Explosion AI",          url: "https://course.spacy.io/en" },
    ],
  },
  "Big Data (Spark)": {
    desc: "Process petabyte-scale datasets in distributed clusters using Apache Spark and Hadoop.",
    courses: [
      { name: "Apache Spark with Python",            platform: "Udemy",                url: "https://www.udemy.com/course/spark-and-python-for-big-data-with-pyspark/" },
      { name: "Big Data with Spark & Hadoop",        platform: "Coursera (IBM)",       url: "https://www.coursera.org/learn/introduction-to-big-data-with-spark-hadoop" },
      { name: "Databricks Academy (Free Tier)",      platform: "Databricks",           url: "https://www.databricks.com/learn/training/home" },
    ],
  },
  "MLOps": {
    desc: "Manage the full ML lifecycle — data/model versioning, experiment tracking, and automated retraining pipelines.",
    courses: [
      { name: "MLOps Fundamentals",                  platform: "Google Cloud (Coursera)", url: "https://www.coursera.org/learn/mlops-fundamentals" },
      { name: "MLflow Tracking Guide (Free)",        platform: "MLflow",               url: "https://mlflow.org/docs/latest/tracking.html" },
      { name: "Weights & Biases Courses (Free)",     platform: "W&B",                  url: "https://www.wandb.courses/" },
    ],
  },
  "Time Series Analysis": {
    desc: "Forecast trends and seasonality with ARIMA, Prophet, and LSTM-based approaches.",
    courses: [
      { name: "Time Series Analysis in Python",      platform: "Udemy",                url: "https://www.udemy.com/course/time-series-analysis-in-python/" },
      { name: "Forecasting: Principles & Practice (Free Book)", platform: "OTexts",    url: "https://otexts.com/fpp3/" },
      { name: "Prophet Documentation (Free)",        platform: "Meta / Facebook",      url: "https://facebook.github.io/prophet/" },
    ],
  },

  // ── DevOps ──────────────────────────────────────────────────
  "Linux / Bash Scripting": {
    desc: "Command-line proficiency, shell scripting, process management, and system administration basics.",
    courses: [
      { name: "Linux Command Line Bootcamp",         platform: "Udemy",                url: "https://www.udemy.com/course/the-linux-command-line-bootcamp/" },
      { name: "The Missing Semester of CS (Free)",   platform: "MIT OpenCourseWare",   url: "https://missing.csail.mit.edu/" },
      { name: "Introduction to Linux",               platform: "edX (Free Audit)",     url: "https://www.edx.org/learn/linux/the-linux-foundation-introduction-to-linux" },
    ],
  },
  "Docker & Kubernetes": {
    desc: "Container lifecycle management and orchestration with Kubernetes for scalable, resilient deployments.",
    courses: [
      { name: "Docker & Kubernetes Complete Guide",  platform: "Udemy",                url: "https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/" },
      { name: "CKAD Certification",                  platform: "Linux Foundation",     url: "https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/" },
      { name: "Kubernetes Basics (Free)",            platform: "Kubernetes.io",        url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/" },
    ],
  },
  "CI/CD Pipelines": {
    desc: "Automate build, test, and deploy workflows with GitHub Actions, Jenkins, GitLab CI, or CircleCI.",
    courses: [
      { name: "DevOps & CI/CD Bootcamp",             platform: "Udemy",                url: "https://www.udemy.com/course/devops-bootcamp-terraform-cicd-gitlab-docker-kubernetes/" },
      { name: "GitHub Actions Complete Guide",       platform: "Udemy",                url: "https://www.udemy.com/course/github-actions-the-complete-guide/" },
      { name: "Jenkins Pipeline Tutorial (Free)",    platform: "Jenkins Docs",         url: "https://www.jenkins.io/doc/tutorials/" },
    ],
  },
  "Cloud Platforms (AWS / GCP / Azure)": {
    desc: "Core cloud services, compute, storage, networking, and managed services across the top three providers.",
    courses: [
      { name: "AWS Solutions Architect Associate",   platform: "AWS",                  url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/" },
      { name: "Google Cloud Digital Leader",         platform: "Google Cloud",         url: "https://cloud.google.com/learn/certification/cloud-digital-leader" },
      { name: "AZ-900: Microsoft Azure Fundamentals", platform: "Microsoft Learn",     url: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/" },
    ],
  },
  "Infrastructure as Code (Terraform)": {
    desc: "Define and provision infrastructure declaratively — enabling reproducible, version-controlled environments.",
    courses: [
      { name: "Terraform — Getting Started (Free)",  platform: "HashiCorp Learn",      url: "https://developer.hashicorp.com/terraform/tutorials" },
      { name: "HashiCorp Terraform Associate Cert",  platform: "HashiCorp",            url: "https://developer.hashicorp.com/certifications/infrastructure-automation" },
      { name: "Complete Terraform Bootcamp",         platform: "Udemy",                url: "https://www.udemy.com/course/complete-terraform-course-beginner-to-advanced/" },
    ],
  },
  "Monitoring & Logging (Grafana/ELK)": {
    desc: "Observe system health with metrics (Prometheus/Grafana), centralised logging (ELK Stack), and alerting.",
    courses: [
      { name: "Grafana & Prometheus Masterclass",    platform: "Udemy",                url: "https://www.udemy.com/course/mastering-prometheus-and-grafana/" },
      { name: "Elastic Observability (Free Tier)",   platform: "Elastic Training",     url: "https://www.elastic.co/training/free" },
      { name: "SRE Book (Free)",                     platform: "Google",               url: "https://sre.google/sre-book/table-of-contents/" },
    ],
  },
  "Networking Fundamentals": {
    desc: "TCP/IP, DNS, HTTP/S, load balancers, and subnet design — the plumbing every DevOps engineer must understand.",
    courses: [
      { name: "CompTIA Network+",                    platform: "CompTIA",              url: "https://www.comptia.org/certifications/network" },
      { name: "Computer Networking (Full Course Free)", platform: "freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=qiQR5rTSshw" },
      { name: "Computer Networking: A Top-Down Approach (Book)", platform: "Pearson",  url: "https://gaia.cs.umass.edu/kurose_ross/index.php" },
    ],
  },
  "Configuration Management (Ansible)": {
    desc: "Automate server provisioning, configuration, and application deployment with idempotent playbooks.",
    courses: [
      { name: "Ansible for the Absolute Beginner",   platform: "Udemy",                url: "https://www.udemy.com/course/learn-ansible/" },
      { name: "Red Hat Ansible Automation",          platform: "Red Hat",              url: "https://www.redhat.com/en/services/training/do007-ansible-essentials-simplicity-automation-technical-overview" },
      { name: "Ansible Documentation (Free)",        platform: "Ansible",              url: "https://docs.ansible.com/ansible/latest/getting_started/" },
    ],
  },

  // ── Product Management ──────────────────────────────────────
  "Product Strategy": {
    desc: "Define vision, set goals, and align product development with business outcomes and market opportunity.",
    courses: [
      { name: "Digital Product Management",          platform: "Coursera (UVA)",       url: "https://www.coursera.org/specializations/uva-darden-digital-product-management" },
      { name: "Product Strategy",                    platform: "Reforge",              url: "https://www.reforge.com/product-strategy" },
      { name: "Inspired by Marty Cagan (Book)",      platform: "SVPG",                 url: "https://www.svpg.com/inspired-by-marty-cagan/" },
    ],
  },
  "User Research & Interviews": {
    desc: "Plan and conduct discovery interviews, surveys, and usability tests to validate assumptions with real users.",
    courses: [
      { name: "UX Research & Strategy",              platform: "Coursera (Michigan)",  url: "https://www.coursera.org/learn/ux-research" },
      { name: "User Research Fundamentals",          platform: "Interaction Design Foundation", url: "https://www.interaction-design.org/courses/user-research" },
      { name: "Continuous Discovery Habits (Book)",  platform: "Book",                 url: "https://www.producttalk.org/continuous-discovery-habits/" },
    ],
  },
  "Roadmapping": {
    desc: "Prioritise features with RICE/ICE/Jobs-to-be-Done frameworks and communicate the roadmap to stakeholders.",
    courses: [
      { name: "Product Roadmaps",                    platform: "Product School",       url: "https://productschool.com/resources/product-management-glossary/product-roadmap" },
      { name: "Prioritisation Frameworks",           platform: "Pragmatic Institute",  url: "https://www.pragmaticinstitute.com/resources/articles/product/a-customers-guide-to-product-roadmaps/" },
      { name: "Jira Product Discovery",              platform: "Atlassian",            url: "https://www.atlassian.com/software/jira/product-discovery" },
    ],
  },
  "Stakeholder Management": {
    desc: "Communicate progress, manage conflicting priorities, and align diverse stakeholders around a shared product vision.",
    courses: [
      { name: "Stakeholder Management",              platform: "LinkedIn Learning",    url: "https://www.linkedin.com/learning/stakeholder-management" },
      { name: "Communication Skills for PMs",        platform: "Coursera",             url: "https://www.coursera.org/learn/communication-in-the-workplace" },
      { name: "Cracking the PM Interview (Book)",    platform: "Book",                 url: "https://www.amazon.com/Cracking-PM-Interview-Product-Technology/dp/0984782818" },
    ],
  },
  "Data Analysis & Metrics": {
    desc: "Define success metrics, build dashboards, and use data to drive product decisions and prioritisation.",
    courses: [
      { name: "Product Analytics",                   platform: "Reforge",              url: "https://www.reforge.com/product-analytics-series" },
      { name: "Google Data Analytics Certificate",   platform: "Coursera",             url: "https://www.coursera.org/professional-certificates/google-data-analytics" },
      { name: "Lean Analytics (Book)",               platform: "O'Reilly",             url: "https://www.oreilly.com/library/view/lean-analytics/9781449335687/" },
    ],
  },
  "Agile / Scrum": {
    desc: "Iterative development with sprints, standups, retrospectives, and continuous delivery of value.",
    courses: [
      { name: "Professional Scrum Master I",         platform: "Scrum.org",            url: "https://www.scrum.org/assessments/professional-scrum-master-i-certification" },
      { name: "Agile with Atlassian Jira",           platform: "Coursera",             url: "https://www.coursera.org/learn/agile-atlassian-jira" },
      { name: "Agile Fundamentals",                  platform: "Udemy",                url: "https://www.udemy.com/course/agile-fundamentals-scrum-kanban-scrumban/" },
    ],
  },
  "Competitive Analysis": {
    desc: "Systematically benchmark competitors' features, pricing, and positioning to find strategic opportunities.",
    courses: [
      { name: "Business Strategy & Competitive Analysis", platform: "Coursera (BCG)", url: "https://www.coursera.org/learn/bcg-strategy-consulting" },
      { name: "Market Research",                     platform: "edX",                  url: "https://www.edx.org/learn/market-research" },
      { name: "Competing Against Luck (Book)",       platform: "Book",                 url: "https://www.christenseninstitute.org/books/competing-against-luck/" },
    ],
  },
  "A/B Testing": {
    desc: "Run controlled experiments to validate product changes and make data-driven decisions.",
    courses: [
      { name: "A/B Testing by Google",               platform: "Udacity (Free)",       url: "https://www.udacity.com/course/ab-testing--ud257" },
      { name: "Optimizely Academy",                  platform: "Optimizely",           url: "https://academy.optimizely.com/" },
      { name: "Experimentation Works (Book)",        platform: "Book",                 url: "https://hbr.org/product/experimentation-works-the-surprising-power-of-business-experiments/10127-HBK-ENG" },
    ],
  },
  "Go-to-Market Strategy": {
    desc: "Plan product launches: define ICP, messaging, channels, and success metrics for reaching the market.",
    courses: [
      { name: "Go-to-Market Strategy",               platform: "HubSpot Academy (Free)", url: "https://academy.hubspot.com/courses/go-to-market" },
      { name: "Product Marketing",                   platform: "Product Marketing Alliance", url: "https://productmarketingalliance.com/courses/" },
      { name: "Obviously Awesome (Book)",            platform: "April Dunford",        url: "https://www.aprildunford.com/obviously-awesome" },
    ],
  },
  "Figma / Prototyping": {
    desc: "Communicate ideas as interactive mockups and hand off pixel-perfect designs to engineers.",
    courses: [
      { name: "Figma UI UX Design Essentials",       platform: "Udemy",                url: "https://www.udemy.com/course/figma-ux-ui-design-user-experience-tutorial-course/" },
      { name: "Google UX Design Certificate",        platform: "Coursera",             url: "https://www.coursera.org/professional-certificates/google-ux-design" },
      { name: "Figma Learn Hub (Free)",              platform: "Figma",                url: "https://www.figma.com/resources/learn-design/" },
    ],
  },
  "Technical Writing & PRDs": {
    desc: "Write clear product requirements documents, user stories, and specs that engineering and design can act on.",
    courses: [
      { name: "Technical Writing Courses",           platform: "Google (Free)",        url: "https://developers.google.com/tech-writing" },
      { name: "Product Requirements Documents",      platform: "Product School",       url: "https://productschool.com/blog/product-fundamentals/product-requirements-document-prd/" },
      { name: "The Art of Writing PRDs",             platform: "Medium / Lenny's Newsletter", url: "https://www.lennysnewsletter.com/p/how-to-write-a-product-requirements" },
    ],
  },
  "OKRs & Goal Setting": {
    desc: "Define and cascade Objectives and Key Results to align teams and measure meaningful progress.",
    courses: [
      { name: "OKRs: From Mission to Metrics",       platform: "LinkedIn Learning",    url: "https://www.linkedin.com/learning/okrs-from-mission-to-metrics" },
      { name: "Measure What Matters (Book)",         platform: "John Doerr",           url: "https://www.whatmatters.com/the-book" },
      { name: "Google re:Work OKR Guide (Free)",     platform: "Google",               url: "https://rework.withgoogle.com/guides/set-goals-with-okrs/" },
    ],
  },
  "SQL Basics": {
    desc: "Query databases to pull user metrics, funnel data, and support data-driven product decisions.",
    courses: [
      { name: "SQLZoo Interactive (Free)",           platform: "SQLZoo",               url: "https://sqlzoo.net/" },
      { name: "SQL for Product Managers",            platform: "Mode Analytics",       url: "https://mode.com/sql-tutorial/" },
      { name: "The Complete SQL Bootcamp",           platform: "Udemy",                url: "https://www.udemy.com/course/the-complete-sql-bootcamp/" },
    ],
  },

  // ── ML Engineer ─────────────────────────────────────────────
  "Deep Learning": {
    desc: "Neural networks, CNNs, RNNs, and transformers — build and train deep models for vision, NLP, and beyond.",
    courses: [
      { name: "Deep Learning Specialization",        platform: "Coursera (DeepLearning.AI)", url: "https://www.coursera.org/specializations/deep-learning" },
      { name: "Practical Deep Learning for Coders (Free)", platform: "fast.ai",         url: "https://course.fast.ai/" },
      { name: "PyTorch for Deep Learning (Free)",    platform: "learnpytorch.io",       url: "https://www.learnpytorch.io/" },
    ],
  },
  "Model Training & Evaluation": {
    desc: "Train, tune, and evaluate models with cross-validation, proper metrics, and bias-variance tradeoff awareness.",
    courses: [
      { name: "ML Specialization (Andrew Ng)",       platform: "Coursera",             url: "https://www.coursera.org/specializations/machine-learning-introduction" },
      { name: "Intro to Machine Learning",           platform: "Kaggle Learn (Free)",  url: "https://www.kaggle.com/learn/intro-to-machine-learning" },
      { name: "MLU Explain (Free)",                  platform: "Amazon ML University", url: "https://mlu-explain.github.io/" },
    ],
  },
  "Model Deployment & Serving": {
    desc: "Package models as REST APIs (FastAPI, Flask), serve at scale (TorchServe, TF Serving), and manage versioning.",
    courses: [
      { name: "Deploying ML Models in Production",   platform: "Coursera (DeepLearning.AI)", url: "https://www.coursera.org/learn/deploying-machine-learning-models-in-production" },
      { name: "MLOps Specialization",                platform: "DeepLearning.AI",      url: "https://www.deeplearning.ai/courses/machine-learning-engineering-for-production-mlops/" },
      { name: "BentoML Tutorials (Free)",            platform: "BentoML",              url: "https://docs.bentoml.org/en/latest/tutorial.html" },
    ],
  },
  "MLOps & Experiment Tracking": {
    desc: "Version data and models, track experiments with MLflow/W&B, and automate retraining pipelines.",
    courses: [
      { name: "MLOps Fundamentals",                  platform: "Google Cloud (Coursera)", url: "https://www.coursera.org/learn/mlops-fundamentals" },
      { name: "MLflow Tracking Guide (Free)",        platform: "MLflow",               url: "https://mlflow.org/docs/latest/tracking.html" },
      { name: "Weights & Biases Courses (Free)",     platform: "W&B",                  url: "https://www.wandb.courses/" },
    ],
  },
  "Cloud ML Platforms": {
    desc: "Leverage SageMaker, Vertex AI, or Azure ML for managed training, hyperparameter tuning, and deployment.",
    courses: [
      { name: "AWS Machine Learning Specialty",      platform: "AWS",                  url: "https://aws.amazon.com/certification/certified-machine-learning-specialty/" },
      { name: "ML with Google Cloud",                platform: "Coursera (Google)",    url: "https://www.coursera.org/specializations/machine-learning-tensorflow-gcp" },
      { name: "Azure ML Fundamentals",               platform: "Microsoft Learn (Free)", url: "https://learn.microsoft.com/en-us/training/paths/create-no-code-predictive-models-azure-machine-learning/" },
    ],
  },
  "Data Pipelines (Airflow)": {
    desc: "Author, schedule, and monitor data workflows as code using Apache Airflow or Prefect.",
    courses: [
      { name: "Apache Airflow: The Hands-On Guide",  platform: "Udemy",                url: "https://www.udemy.com/course/the-complete-hands-on-course-to-master-apache-airflow/" },
      { name: "Astronomer Academy (Free)",           platform: "Astronomer",           url: "https://academy.astronomer.io/" },
      { name: "Airflow Documentation (Free)",        platform: "Apache",               url: "https://airflow.apache.org/docs/apache-airflow/stable/tutorial/index.html" },
    ],
  },
  "Distributed Training": {
    desc: "Train large models across multiple GPUs/nodes using DDP, Horovod, or Ray Train for faster iteration.",
    courses: [
      { name: "Large Scale ML on Spark & Ray",       platform: "Udemy",                url: "https://www.udemy.com/course/large-scale-machine-learning-on-apache-spark/" },
      { name: "Efficient Deep Learning (MIT, Free)", platform: "MIT HAN Lab",          url: "https://hanlab.mit.edu/courses/2024-fall-65940" },
      { name: "Ray Documentation (Free)",            platform: "Anyscale",             url: "https://docs.ray.io/en/latest/train/train.html" },
    ],
  },
  "LLM Fine-tuning & RAG": {
    desc: "Adapt large language models with LoRA/PEFT fine-tuning and build retrieval-augmented generation pipelines.",
    courses: [
      { name: "LLMOps: Building with LLMs (Free)",   platform: "DeepLearning.AI",      url: "https://www.deeplearning.ai/short-courses/llmops/" },
      { name: "Building & Evaluating Advanced RAG (Free)", platform: "DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/building-evaluating-advanced-rag/" },
      { name: "HuggingFace PEFT Docs (Free)",        platform: "HuggingFace",          url: "https://huggingface.co/docs/peft/index" },
    ],
  },
  "Monitoring & Drift Detection": {
    desc: "Detect model degradation, data drift, and concept shift in production to trigger timely retraining.",
    courses: [
      { name: "ML Monitoring Course (Free)",         platform: "Evidently AI",         url: "https://learn.evidentlyai.com/" },
      { name: "Monitoring ML in Production",         platform: "Arize AI (Free)",      url: "https://arize.com/ml-observability-course/" },
      { name: "MLOps Specialization (Module 3)",     platform: "Coursera",             url: "https://www.coursera.org/learn/mlops-deployment-and-lifecycle-management" },
    ],
  },
  "Responsible AI & Fairness": {
    desc: "Identify, measure, and mitigate bias in ML systems while meeting ethical guidelines and regulatory requirements.",
    courses: [
      { name: "AI for Everyone",                     platform: "Coursera (Andrew Ng)", url: "https://www.coursera.org/learn/ai-for-everyone" },
      { name: "Responsible AI Practices (Free)",     platform: "Google",               url: "https://ai.google/responsibility/responsible-ai-practices/" },
      { name: "Fairness in ML (Free)",               platform: "Google Developers",    url: "https://developers.google.com/machine-learning/crash-course/fairness/video-lecture" },
    ],
  },

  // ── Cloud Architect ─────────────────────────────────────────
  "AWS / Azure / GCP Core Services": {
    desc: "Deep knowledge of compute, storage, databases, and networking on the major cloud providers.",
    courses: [
      { name: "AWS Solutions Architect Associate",   platform: "AWS",                  url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/" },
      { name: "AZ-104: Azure Administrator",         platform: "Microsoft Learn",      url: "https://learn.microsoft.com/en-us/certifications/azure-administrator/" },
      { name: "Google Professional Cloud Architect", platform: "Google Cloud",         url: "https://cloud.google.com/learn/certification/cloud-architect" },
    ],
  },
  "Cloud Networking & VPC": {
    desc: "Design VPCs, subnets, routing tables, peering, Transit Gateway, and hybrid-cloud connectivity.",
    courses: [
      { name: "AWS Networking Specialty",            platform: "AWS",                  url: "https://aws.amazon.com/certification/certified-advanced-networking-specialty/" },
      { name: "Cloud Networking Fundamentals",       platform: "Coursera",             url: "https://www.coursera.org/learn/cloud-networking" },
      { name: "Azure Networking Path",               platform: "Microsoft Learn (Free)", url: "https://learn.microsoft.com/en-us/training/paths/az-104-manage-virtual-networks/" },
    ],
  },
  "High Availability & DR Design": {
    desc: "Multi-AZ deployments, auto-scaling, global load balancing, and tested disaster recovery runbooks.",
    courses: [
      { name: "AWS Disaster Recovery Guide (Free)",  platform: "AWS",                  url: "https://aws.amazon.com/blogs/architecture/disaster-recovery-dr-architecture-on-aws-part-i-strategies-for-recovery-in-the-cloud/" },
      { name: "Site Reliability Engineering (Free Book)", platform: "Google",          url: "https://sre.google/books/" },
      { name: "Designing Distributed Systems (Book)", platform: "O'Reilly",            url: "https://www.oreilly.com/library/view/designing-distributed-systems/9781491983638/" },
    ],
  },
  "Cloud Security Best Practices": {
    desc: "Zero Trust, secrets management, IAM least-privilege, encryption at rest/transit, and cloud compliance.",
    courses: [
      { name: "AWS Security Specialty",              platform: "AWS",                  url: "https://aws.amazon.com/certification/certified-security-specialty/" },
      { name: "Cloud Security Alliance Guidance (Free)", platform: "CSA",              url: "https://cloudsecurityalliance.org/research/guidance/" },
      { name: "Google Cloud Security Foundations",   platform: "Google Cloud Skills Boost", url: "https://cloudskillsboost.google/paths/15" },
    ],
  },
  "Microservices Architecture": {
    desc: "Decompose monoliths into independently deployable services with clear API contracts and resilience patterns.",
    courses: [
      { name: "Microservices with Node & React",     platform: "Udemy",                url: "https://www.udemy.com/course/microservices-with-node-js-and-react/" },
      { name: "Building Microservices (Book)",       platform: "O'Reilly",             url: "https://www.oreilly.com/library/view/building-microservices-2nd/9781492034018/" },
      { name: "Microservices Patterns (Book)",       platform: "Manning",              url: "https://www.manning.com/books/microservices-patterns" },
    ],
  },
  "Serverless Architecture": {
    desc: "Build event-driven, auto-scaling systems with Lambda/Cloud Functions — eliminating server management.",
    courses: [
      { name: "AWS Lambda & Serverless",             platform: "Udemy",                url: "https://www.udemy.com/course/aws-lambda-serverless/" },
      { name: "Serverless Framework Docs (Free)",    platform: "Serverless",           url: "https://www.serverless.com/framework/docs" },
      { name: "Cloud Functions for Firebase (Free)", platform: "Google",               url: "https://firebase.google.com/docs/functions" },
    ],
  },
  "Cost Management & FinOps": {
    desc: "Optimise cloud spend through right-sizing, reserved instances, spot usage, and FinOps culture.",
    courses: [
      { name: "FinOps Certified Practitioner",       platform: "FinOps Foundation",    url: "https://www.finops.org/certification/" },
      { name: "AWS Cost Optimization (Free)",        platform: "AWS",                  url: "https://aws.amazon.com/aws-cost-management/" },
      { name: "Cloud Cost Optimization",             platform: "Udemy",                url: "https://www.udemy.com/course/aws-cost-optimization/" },
    ],
  },

  // ── UI/UX Designer ──────────────────────────────────────────
  "User Research Methods": {
    desc: "Interviews, surveys, diary studies, card sorting — a UX designer's toolkit for understanding user needs.",
    courses: [
      { name: "UX Research & Design Specialization", platform: "Coursera (Michigan)",  url: "https://www.coursera.org/specializations/michiganux" },
      { name: "User Research Methods & Best Practices", platform: "Interaction Design Foundation", url: "https://www.interaction-design.org/courses/user-research-methods-and-best-practices" },
      { name: "Just Enough Research (Book)",         platform: "A Book Apart",         url: "https://abookapart.com/products/just-enough-research" },
    ],
  },
  "Wireframing & Prototyping": {
    desc: "Rapidly communicate ideas from low-fidelity sketches to interactive clickable prototypes before coding.",
    courses: [
      { name: "Figma UI UX Design Essentials",       platform: "Udemy",                url: "https://www.udemy.com/course/figma-ux-ui-design-user-experience-tutorial-course/" },
      { name: "Google UX Design Certificate",        platform: "Coursera",             url: "https://www.coursera.org/professional-certificates/google-ux-design" },
      { name: "Prototyping in Figma (Free)",         platform: "Figma Learn",          url: "https://help.figma.com/hc/en-us/articles/360040314193" },
    ],
  },
  "Figma": {
    desc: "The industry-standard design tool for UI design, component libraries, auto-layout, and collaborative handoff.",
    courses: [
      { name: "Figma for Beginners (Free YouTube)",  platform: "Figma (YouTube)",      url: "https://www.youtube.com/playlist?list=PLXDU_eVOJTx7QHLShNqIXL1Cgbxj7HlN4" },
      { name: "UI Design Fundamentals in Figma",     platform: "Udemy",                url: "https://www.udemy.com/course/figma-ui-design/" },
      { name: "Figma Learn Hub (Free)",              platform: "Figma",                url: "https://www.figma.com/resources/learn-design/" },
    ],
  },
  "Interaction Design": {
    desc: "Define how users interact with interfaces — micro-interactions, affordances, feedback, and flow.",
    courses: [
      { name: "Interaction Design Specialization",   platform: "Coursera (UC San Diego)", url: "https://www.coursera.org/specializations/interaction-design" },
      { name: "Laws of UX (Free Resource)",          platform: "lawsofux.com",         url: "https://lawsofux.com/" },
      { name: "Design for How People Think (Book)",  platform: "O'Reilly",             url: "https://www.oreilly.com/library/view/design-for-how/9781491985441/" },
    ],
  },
  "Visual Design Principles": {
    desc: "Typography, colour theory, hierarchy, grid systems, and Gestalt principles for beautiful and clear interfaces.",
    courses: [
      { name: "Graphic Design Specialization",       platform: "Coursera (CalArts)",   url: "https://www.coursera.org/specializations/graphic-design" },
      { name: "Visual Design Fundamentals",          platform: "Interaction Design Foundation", url: "https://www.interaction-design.org/courses/the-ultimate-guide-to-visual-perception-and-design" },
      { name: "Refactoring UI (Book)",               platform: "Adam Wathan",          url: "https://www.refactoringui.com/" },
    ],
  },
  "Usability Testing": {
    desc: "Plan and run moderated/unmoderated tests, analyse task completion rates, and iterate on findings.",
    courses: [
      { name: "Usability Testing",                   platform: "Interaction Design Foundation", url: "https://www.interaction-design.org/courses/usability-testing" },
      { name: "UserTesting Academy",                 platform: "UserTesting",          url: "https://academy.usertesting.com/" },
      { name: "Rocket Surgery Made Easy (Book)",     platform: "Steve Krug",           url: "https://sensible.com/rocket-surgery-made-easy/" },
    ],
  },
  "Design Systems": {
    desc: "Build and maintain reusable component libraries, tokens, and guidelines that scale across products and teams.",
    courses: [
      { name: "Design Systems with Figma",           platform: "Udemy",                url: "https://www.udemy.com/course/design-system-figma/" },
      { name: "Zero to One Design System",           platform: "Frontend Masters",     url: "https://frontendmasters.com/courses/design-systems/" },
      { name: "Design Systems 101 (Free)",           platform: "Nielsen Norman Group", url: "https://www.nngroup.com/articles/design-systems-101/" },
    ],
  },
  "Accessibility (WCAG)": {
    desc: "Design and test interfaces that are usable by everyone — following WCAG 2.2 AA standards.",
    courses: [
      { name: "Web Accessibility by Google (Free)",  platform: "Udacity",              url: "https://www.udacity.com/course/web-accessibility--ud891" },
      { name: "Accessibility: Design for All",       platform: "Interaction Design Foundation", url: "https://www.interaction-design.org/courses/accessibility-how-to-design-for-all" },
      { name: "WCAG 2.2 Quick Reference (Free)",     platform: "W3C",                  url: "https://www.w3.org/WAI/WCAG22/quickref/" },
    ],
  },
  "Information Architecture": {
    desc: "Organise and structure content so users can find what they need — navigation, taxonomies, and sitemaps.",
    courses: [
      { name: "Information Architecture Course",     platform: "Interaction Design Foundation", url: "https://www.interaction-design.org/courses/information-architecture" },
      { name: "UX Design Fundamentals",              platform: "Udemy",                url: "https://www.udemy.com/course/ux-design-fundamentals/" },
      { name: "Information Architecture (Book)",     platform: "O'Reilly",             url: "https://www.oreilly.com/library/view/information-architecture-4th/9781491913529/" },
    ],
  },
  "Motion & Micro-interactions": {
    desc: "Add purposeful animation to guide attention, provide feedback, and delight users — without distraction.",
    courses: [
      { name: "UI Animation in Figma",               platform: "Udemy",                url: "https://www.udemy.com/course/ui-animation-in-figma/" },
      { name: "Microinteractions (Book)",            platform: "O'Reilly",             url: "https://www.oreilly.com/library/view/microinteractions-full-color/9781491945513/" },
      { name: "Kevin Powell CSS Animations (Free YouTube)", platform: "YouTube",       url: "https://www.youtube.com/kevinpowell" },
    ],
  },
  "HTML / CSS Basics": {
    desc: "Basic front-end knowledge helps designers communicate better with engineers and create realistic prototypes.",
    courses: [
      { name: "Responsive Web Design (Free)",        platform: "freeCodeCamp",         url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/" },
      { name: "HTML & CSS for Designers",            platform: "Scrimba",              url: "https://scrimba.com/learn/htmlcss" },
      { name: "CSS for Designers (YouTube)",         platform: "Kevin Powell",         url: "https://www.youtube.com/kevinpowell" },
    ],
  },

  // ── Blockchain ──────────────────────────────────────────────
  "Solidity / Smart Contracts": {
    desc: "Write, test, and audit Solidity contracts — the programming language of the Ethereum ecosystem.",
    courses: [
      { name: "Solidity & Smart Contracts Full Course (Free)", platform: "freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=M576WGiDBdQ" },
      { name: "CryptoZombies (Free Interactive)",    platform: "CryptoZombies",        url: "https://cryptozombies.io/" },
      { name: "Blockchain A-Z",                      platform: "Udemy",                url: "https://www.udemy.com/course/build-your-blockchain-az/" },
    ],
  },
  "Ethereum & EVM": {
    desc: "Understand the EVM, gas mechanics, accounts, transactions, and the Ethereum execution layer.",
    courses: [
      { name: "Alchemy University Ethereum (Free)",  platform: "Alchemy University",   url: "https://university.alchemy.com/overview/ethereum" },
      { name: "Mastering Ethereum (Free Book)",      platform: "GitHub",               url: "https://github.com/ethereumbook/ethereumbook" },
      { name: "Ethereum.org Learn Hub (Free)",       platform: "Ethereum",             url: "https://ethereum.org/en/learn/" },
    ],
  },
  "Web3.js / Ethers.js": {
    desc: "Connect front-end applications to Ethereum nodes, read on-chain data, and send transactions programmatically.",
    courses: [
      { name: "Full Stack Web3 Development (Free)",  platform: "freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=gyMwXuJrbJQ" },
      { name: "Ethers.js v6 Documentation (Free)",   platform: "Ethers.js",            url: "https://docs.ethers.org/v6/" },
      { name: "Alchemy Road to Web3 (Free)",         platform: "Alchemy",              url: "https://docs.alchemy.com/docs/welcome-to-the-road-to-web3" },
    ],
  },
  "DeFi Protocols": {
    desc: "Understand lending (Aave), DEXs (Uniswap), yield farming, and the mechanics behind DeFi composability.",
    courses: [
      { name: "DeFi Developer Road Map (Free)",      platform: "GitHub",               url: "https://github.com/OffcierCia/DeFi-Developer-Road-Map" },
      { name: "Finematics (Free YouTube)",           platform: "YouTube",              url: "https://www.youtube.com/@Finematics" },
      { name: "DeFi & the Future of Finance (Book)", platform: "Wiley",                url: "https://www.wiley.com/en-us/DeFi+and+the+Future+of+Finance-p-9781119836056" },
    ],
  },
  "Hardhat / Truffle": {
    desc: "Local Ethereum development environments for compiling, testing, and deploying smart contracts efficiently.",
    courses: [
      { name: "Hardhat Tutorial (Free)",             platform: "Hardhat",              url: "https://hardhat.org/tutorial" },
      { name: "Patrick Collins Web3 Course (Free)",  platform: "freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=umepbfKp5rI" },
      { name: "Complete DApp Development",           platform: "Udemy",                url: "https://www.udemy.com/course/complete-dapp-solidity-react-blockchain-development/" },
    ],
  },
  "Smart Contract Auditing": {
    desc: "Identify reentrancy, overflow, access-control, and oracle manipulation vulnerabilities in Solidity code.",
    courses: [
      { name: "Cyfrin Updraft Security (Free)",      platform: "Cyfrin Updraft",       url: "https://updraft.cyfrin.io/" },
      { name: "Secureum Bootcamp",                   platform: "Secureum",             url: "https://secureum.xyz/" },
      { name: "Smart Contract Auditor Roadmap (Free)", platform: "GitHub",             url: "https://github.com/razzorsec/AuditorsRoadmap" },
    ],
  },
  "IPFS & Decentralized Storage": {
    desc: "Store files on a content-addressed, peer-to-peer network — removing single points of failure.",
    courses: [
      { name: "IPFS Documentation (Free)",           platform: "IPFS",                 url: "https://docs.ipfs.tech/concepts/" },
      { name: "ProtoSchool Interactive Tutorials (Free)", platform: "Protocol Labs",   url: "https://proto.school/" },
      { name: "Filecoin Documentation (Free)",       platform: "Filecoin",             url: "https://docs.filecoin.io/" },
    ],
  },
  "Layer 2 Solutions": {
    desc: "Scale Ethereum with rollups (Optimism, Arbitrum), state channels, and sidechains — reducing gas costs.",
    courses: [
      { name: "Ethereum Layer 2 Scaling",            platform: "Ethereum.org (Free)",  url: "https://ethereum.org/en/layer-2/" },
      { name: "Optimism & Arbitrum Deep Dive",       platform: "YouTube (Finematics)", url: "https://www.youtube.com/@Finematics" },
      { name: "L2BEAT Research (Free)",              platform: "L2BEAT",               url: "https://l2beat.com/scaling/summary" },
    ],
  },

  // ── Data Engineering ────────────────────────────────────────
  "SQL & Query Optimization": {
    desc: "Write efficient queries, design indexes, use window functions, and understand query execution plans.",
    courses: [
      { name: "Advanced SQL for Data Scientists",    platform: "Udemy",                url: "https://www.udemy.com/course/advanced-sql-for-data-scientists/" },
      { name: "Mode SQL Tutorial (Free)",            platform: "Mode Analytics",       url: "https://mode.com/sql-tutorial/" },
      { name: "Use The Index, Luke (Free Book)",     platform: "usetheindexluke.com",  url: "https://use-the-index-luke.com/" },
    ],
  },
  "Data Warehousing (Snowflake/BQ)": {
    desc: "Design star/snowflake schemas, partition tables, and optimise cost and performance on cloud data warehouses.",
    courses: [
      { name: "Snowflake — Zero to Hero",            platform: "Udemy",                url: "https://www.udemy.com/course/snowflake-zero-to-hero-masterclass/" },
      { name: "BigQuery for Data Analysts (Free)",   platform: "Google Cloud Skills Boost", url: "https://cloudskillsboost.google/course_templates/83" },
      { name: "Data Warehouse Concepts",             platform: "Coursera",             url: "https://www.coursera.org/learn/dwdesign" },
    ],
  },
  "ETL / ELT Pipelines": {
    desc: "Extract, transform, and load data between systems reliably — handling schema evolution and failure recovery.",
    courses: [
      { name: "Data Engineering Zoomcamp (Free)",    platform: "DataTalks.Club",       url: "https://github.com/DataTalksClub/data-engineering-zoomcamp" },
      { name: "The Complete dbt Bootcamp",           platform: "Udemy",                url: "https://www.udemy.com/course/complete-dbt-data-build-tool-bootcamp-zero-to-hero-learn-dbt/" },
      { name: "Fundamentals of Data Engineering (Book)", platform: "O'Reilly",         url: "https://www.oreilly.com/library/view/fundamentals-of-data/9781098108298/" },
    ],
  },
  "Apache Spark": {
    desc: "Distributed data processing for batch and streaming workloads — with PySpark and Spark SQL.",
    courses: [
      { name: "Apache Spark with Python (PySpark)",  platform: "Udemy",                url: "https://www.udemy.com/course/spark-and-python-for-big-data-with-pyspark/" },
      { name: "Databricks Academy (Free)",           platform: "Databricks",           url: "https://www.databricks.com/learn/training/home" },
      { name: "Learning Spark (Book)",               platform: "O'Reilly",             url: "https://www.oreilly.com/library/view/learning-spark-2nd/9781492050032/" },
    ],
  },
  "Apache Airflow": {
    desc: "Author, schedule, and monitor data pipelines as Python DAGs with rich dependency management.",
    courses: [
      { name: "The Complete Airflow Course",         platform: "Udemy",                url: "https://www.udemy.com/course/the-complete-hands-on-course-to-master-apache-airflow/" },
      { name: "Astronomer Academy (Free)",           platform: "Astronomer",           url: "https://academy.astronomer.io/" },
      { name: "Airflow Documentation (Free)",        platform: "Apache",               url: "https://airflow.apache.org/docs/apache-airflow/stable/tutorial/index.html" },
    ],
  },
  "Cloud Data Platforms": {
    desc: "Provision and manage cloud-native data services — S3, Glue, Dataflow, Azure Data Factory, BigQuery.",
    courses: [
      { name: "Google Professional Data Engineer",   platform: "Google Cloud",         url: "https://cloud.google.com/learn/certification/data-engineer" },
      { name: "AWS Data Analytics Specialty",        platform: "AWS",                  url: "https://aws.amazon.com/certification/certified-data-analytics-specialty/" },
      { name: "Azure Data Engineer Associate",       platform: "Microsoft Learn",      url: "https://learn.microsoft.com/en-us/certifications/azure-data-engineer/" },
    ],
  },
  "Data Modeling": {
    desc: "Translate business requirements into logical and physical data models — normalised, dimensional, and NoSQL.",
    courses: [
      { name: "dbt Fundamentals (Free)",             platform: "dbt Learn",            url: "https://courses.getdbt.com/courses/fundamentals" },
      { name: "Database Design Course (Free YouTube)", platform: "freeCodeCamp",       url: "https://www.youtube.com/watch?v=ztHopE5Wnpc" },
      { name: "The Data Warehouse Toolkit (Book)",   platform: "Kimball Group",        url: "https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/books/data-warehouse-dw-toolkit/" },
    ],
  },
  "Kafka / Streaming Data": {
    desc: "Build real-time data pipelines and streaming applications with Apache Kafka and Kafka Streams.",
    courses: [
      { name: "Apache Kafka Complete Guide",         platform: "Udemy",                url: "https://www.udemy.com/course/apache-kafka/" },
      { name: "Confluent Kafka Fundamentals (Free)", platform: "Confluent",            url: "https://developer.confluent.io/courses/#fundamentals" },
      { name: "Streaming Systems (Book)",            platform: "O'Reilly",             url: "https://www.oreilly.com/library/view/streaming-systems/9781491983867/" },
    ],
  },
  "dbt (data build tool)": {
    desc: "Transform data in your warehouse using SQL and software engineering best practices (testing, docs, CI).",
    courses: [
      { name: "dbt Fundamentals (Free)",             platform: "dbt Learn",            url: "https://courses.getdbt.com/courses/fundamentals" },
      { name: "Complete dbt Bootcamp",               platform: "Udemy",                url: "https://www.udemy.com/course/complete-dbt-data-build-tool-bootcamp-zero-to-hero-learn-dbt/" },
      { name: "dbt Documentation (Free)",            platform: "dbt Labs",             url: "https://docs.getdbt.com/" },
    ],
  },

  // ── Mobile Developer ────────────────────────────────────────
  "React Native or Flutter": {
    desc: "Cross-platform mobile frameworks that let you ship to iOS and Android from a single codebase.",
    courses: [
      { name: "React Native — The Practical Guide",  platform: "Udemy",                url: "https://www.udemy.com/course/react-native-the-practical-guide/" },
      { name: "Complete Flutter Bootcamp with Dart", platform: "Udemy",                url: "https://www.udemy.com/course/flutter-bootcamp-with-dart/" },
      { name: "Flutter Official Codelabs (Free)",    platform: "Flutter.dev",          url: "https://docs.flutter.dev/codelabs" },
    ],
  },
  "JavaScript / Dart": {
    desc: "Core language skills — JS for React Native, Dart for Flutter — including async patterns and OOP.",
    courses: [
      { name: "Dart Programming Language",           platform: "Udemy",                url: "https://www.udemy.com/course/dart-and-flutter-the-complete-developers-guide/" },
      { name: "JavaScript Full Course (Free)",       platform: "freeCodeCamp (YouTube)", url: "https://www.youtube.com/watch?v=PkZNo7MFNFg" },
      { name: "Dart Language Tour (Free)",           platform: "Dart.dev",             url: "https://dart.dev/language" },
    ],
  },
  "Mobile UI Patterns": {
    desc: "Platform conventions (Material Design, Apple HIG), navigation patterns, and gesture-based interactions.",
    courses: [
      { name: "Material Design 3 (Free)",            platform: "Google",               url: "https://m3.material.io/" },
      { name: "Apple Human Interface Guidelines (Free)", platform: "Apple",            url: "https://developer.apple.com/design/human-interface-guidelines/" },
      { name: "Mobile App Design from Scratch",      platform: "Udemy",                url: "https://www.udemy.com/course/mobile-app-design-from-scratch-for-developers/" },
    ],
  },
  "REST API Integration": {
    desc: "Fetch data from REST APIs in mobile apps — handling auth, caching, error states, and pagination.",
    courses: [
      { name: "Flutter REST API Integration",        platform: "Udemy",                url: "https://www.udemy.com/course/flutter-bootcamp-with-dart/" },
      { name: "React Native Networking",             platform: "React Native Docs (Free)", url: "https://reactnative.dev/docs/network" },
      { name: "APIs for Beginners (Free YouTube)",   platform: "freeCodeCamp",         url: "https://www.youtube.com/watch?v=GZvSYJDk-us" },
    ],
  },
  "State Management": {
    desc: "Manage complex app state with Redux/Zustand (React Native) or Provider/Riverpod/Bloc (Flutter).",
    courses: [
      { name: "Flutter State Management (Provider/Riverpod)", platform: "Udemy",       url: "https://www.udemy.com/course/flutter-development-bootcamp-with-dart/" },
      { name: "Redux Toolkit Tutorial (Free)",       platform: "Redux Docs",           url: "https://redux.js.org/tutorials/essentials/part-1-overview-concepts" },
      { name: "React Native State & Navigation",     platform: "Codecademy",           url: "https://www.codecademy.com/learn/learn-react-native" },
    ],
  },
  "App Store Deployment": {
    desc: "Prepare builds, manage signing certificates, create App Store/Play Store listings, and handle releases.",
    courses: [
      { name: "iOS App Distribution Guide (Free)",   platform: "Apple Dev Docs",       url: "https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases" },
      { name: "Android Publishing Guide (Free)",     platform: "Google",               url: "https://developer.android.com/studio/publish" },
      { name: "Fastlane CI/CD Automation (Free)",    platform: "Fastlane",             url: "https://fastlane.tools/" },
    ],
  },
  "Native Modules (iOS / Android)": {
    desc: "Bridge JavaScript/Dart to native platform APIs when the cross-platform framework doesn't expose what you need.",
    courses: [
      { name: "React Native Native Modules (Free)",  platform: "React Native Docs",    url: "https://reactnative.dev/docs/native-modules-intro" },
      { name: "Flutter Platform Channels (Free)",    platform: "Flutter.dev",          url: "https://docs.flutter.dev/platform-integration/platform-channels" },
      { name: "Advanced React Native Course",        platform: "Udemy",                url: "https://www.udemy.com/course/the-complete-react-native-and-redux-course/" },
    ],
  },

  // ── AI Prompt Engineer ──────────────────────────────────────
  "LLM Fundamentals": {
    desc: "Understand how large language models work — tokenisation, attention, context windows, temperature, and sampling.",
    courses: [
      { name: "ChatGPT Prompt Engineering for Devs (Free)", platform: "DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/" },
      { name: "LLM Bootcamp",                        platform: "Full Stack Deep Learning", url: "https://fullstackdeeplearning.com/llm-bootcamp/" },
      { name: "Intro to LLMs by Karpathy (Free YouTube)", platform: "YouTube",          url: "https://www.youtube.com/watch?v=zjkBMFhNj_g" },
    ],
  },
  "Prompt Design & Chaining": {
    desc: "Write effective system/user prompts, apply few-shot and CoT techniques, and chain prompts into multi-step workflows.",
    courses: [
      { name: "Prompt Engineering Guide (Free)",     platform: "PromptingGuide.ai",    url: "https://www.promptingguide.ai/" },
      { name: "Learn Prompting (Free)",              platform: "LearnPrompting.org",    url: "https://learnprompting.org/" },
      { name: "Prompt Engineering for Generative AI (Book)", platform: "O'Reilly",     url: "https://www.oreilly.com/library/view/prompt-engineering-for/9781098153427/" },
    ],
  },
  "RAG Architecture": {
    desc: "Augment LLM responses with retrieved documents — reducing hallucination and enabling up-to-date knowledge.",
    courses: [
      { name: "Building & Evaluating Advanced RAG (Free)", platform: "DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/building-evaluating-advanced-rag/" },
      { name: "LangChain RAG Tutorial (Free)",       platform: "LangChain Docs",       url: "https://python.langchain.com/docs/tutorials/rag/" },
      { name: "RAG from Scratch (Free YouTube)",     platform: "LangChain",            url: "https://www.youtube.com/playlist?list=PLfaIDFEXuae2LXbO1_PKyVJiQ23ZztA0x" },
    ],
  },
  "Vector Databases": {
    desc: "Store and query embeddings at scale using Pinecone, Weaviate, Qdrant, or pgvector for semantic search.",
    courses: [
      { name: "Vector Databases: from Embeddings to Apps (Free)", platform: "DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/vector-databases-embeddings-applications/" },
      { name: "Pinecone Learning Center (Free)",     platform: "Pinecone",             url: "https://www.pinecone.io/learn/" },
      { name: "Weaviate Academy (Free)",             platform: "Weaviate",             url: "https://weaviate.io/developers/academy" },
    ],
  },
  "Python Scripting": {
    desc: "Automate tasks, call APIs, process data, and build tool integrations with Python.",
    courses: [
      { name: "Python for Everybody",                platform: "Coursera (Michigan)",  url: "https://www.coursera.org/specializations/python" },
      { name: "Automate the Boring Stuff (Free Book)", platform: "automatetheboringstuff.com", url: "https://automatetheboringstuff.com/" },
      { name: "100 Days of Code: Python",            platform: "Udemy",                url: "https://www.udemy.com/course/100-days-of-code/" },
    ],
  },
  "OpenAI / Anthropic APIs": {
    desc: "Call chat completion, embeddings, function-calling, and vision endpoints to build production AI features.",
    courses: [
      { name: "OpenAI API Quickstart (Free)",        platform: "OpenAI",               url: "https://platform.openai.com/docs/quickstart" },
      { name: "Anthropic API Documentation (Free)",  platform: "Anthropic",            url: "https://docs.anthropic.com/en/docs/welcome" },
      { name: "Building AI Apps with ChatGPT",       platform: "Udemy",                url: "https://www.udemy.com/course/building-ai-apps-with-chatgpt-dalle-and-gpt-4/" },
    ],
  },
  "Fine-tuning Concepts": {
    desc: "Adapt pre-trained models with LoRA, QLoRA, and PEFT techniques for domain-specific tasks.",
    courses: [
      { name: "Finetuning Large Language Models (Free)", platform: "DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/finetuning-large-language-models/" },
      { name: "HuggingFace PEFT Docs (Free)",        platform: "HuggingFace",          url: "https://huggingface.co/docs/peft/index" },
      { name: "QLoRA Fine-tuning Guide (Free)",      platform: "HuggingFace Blog",     url: "https://huggingface.co/blog/4bit-transformers-bitsandbytes" },
    ],
  },
  "LangChain / LlamaIndex": {
    desc: "Orchestration frameworks for chaining LLM calls, integrating tools, managing memory, and building agents.",
    courses: [
      { name: "LangChain for LLM Development (Free)", platform: "DeepLearning.AI",    url: "https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/" },
      { name: "LlamaIndex Starter Guide (Free)",     platform: "LlamaIndex",           url: "https://docs.llamaindex.ai/en/stable/getting_started/starter_example/" },
      { name: "Build AI Apps with LangChain",        platform: "Udemy",                url: "https://www.udemy.com/course/langchain/" },
    ],
  },
  "Evaluation & Benchmarking": {
    desc: "Measure LLM output quality with automated evals, human preference, RAGAS, and benchmark datasets.",
    courses: [
      { name: "Evaluating & Debugging Generative AI (Free)", platform: "DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/evaluating-debugging-generative-ai/" },
      { name: "RAGAS Documentation (Free)",          platform: "RAGAS",                url: "https://docs.ragas.io/" },
      { name: "LLM Evals Handbook (Free)",           platform: "Confident AI",         url: "https://www.confident-ai.com/blog/llm-evaluation-metrics-everything-you-need-for-llm-evaluation" },
    ],
  },
  "AI Safety & Alignment Basics": {
    desc: "Understand hallucination, prompt injection, jailbreaks, and responsible deployment principles for LLM apps.",
    courses: [
      { name: "AI Safety Fundamentals (Free)",       platform: "BlueDot Impact",       url: "https://aisafetyfundamentals.com/" },
      { name: "Red Teaming LLM Applications (Free)", platform: "DeepLearning.AI",      url: "https://www.deeplearning.ai/short-courses/red-teaming-llm-applications/" },
      { name: "Constitutional AI Paper (Free)",      platform: "Anthropic",            url: "https://www.anthropic.com/news/constitutional-ai-harmlessness-from-ai-feedback" },
    ],
  },
  "Agent Frameworks (AutoGPT etc)": {
    desc: "Build autonomous AI agents that plan, use tools, and complete multi-step tasks with minimal human intervention.",
    courses: [
      { name: "AI Agents in LangGraph (Free)",       platform: "DeepLearning.AI",      url: "https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/" },
      { name: "Building Agentic RAG with LlamaIndex (Free)", platform: "DeepLearning.AI", url: "https://www.deeplearning.ai/short-courses/building-agentic-rag-with-llamaindex/" },
      { name: "CrewAI Documentation (Free)",         platform: "CrewAI",               url: "https://docs.crewai.com/" },
    ],
  },

  // ── Backend Engineer ────────────────────────────────────────
  "Python or Java or Go": {
    desc: "Server-side language fundamentals — choose one to master: Python for versatility, Java for enterprise, Go for performance.",
    courses: [
      { name: "Python for Everybody",                platform: "Coursera",            url: "https://www.coursera.org/specializations/python" },
      { name: "Java Programming Masterclass",        platform: "Udemy",               url: "https://www.udemy.com/course/java-the-complete-java-developer-course/" },
      { name: "Go by Example (Free)",                platform: "gobyexample.com",     url: "https://gobyexample.com/" },
    ],
  },
  "REST API Design": {
    desc: "Design clean, versioned REST APIs with proper HTTP semantics, pagination, error responses, and OpenAPI specs.",
    courses: [
      { name: "REST API Design Rulebook (Free chapters)", platform: "O'Reilly",       url: "https://www.oreilly.com/library/view/rest-api-design/9781449317904/" },
      { name: "Designing RESTful APIs",              platform: "Udemy",               url: "https://www.udemy.com/course/rest-api/" },
      { name: "HTTP & REST (Free)",                  platform: "MDN Web Docs",        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP" },
    ],
  },
  "SQL & Database Design": {
    desc: "Model relational data, write complex queries, optimize indexes, and understand ACID transactions.",
    courses: [
      { name: "The Complete SQL Bootcamp",           platform: "Udemy",               url: "https://www.udemy.com/course/the-complete-sql-bootcamp/" },
      { name: "SQL for Data Science (Free)",         platform: "Coursera (UC Davis)", url: "https://www.coursera.org/learn/sql-for-data-science" },
      { name: "Use The Index, Luke (Free)",          platform: "use-the-index-luke.com", url: "https://use-the-index-luke.com/" },
    ],
  },
  "Authentication (OAuth / JWT)": {
    desc: "Implement secure auth flows — OAuth 2.0, OpenID Connect, JWTs, refresh tokens, and session management.",
    courses: [
      { name: "OAuth 2.0 & OpenID Connect (Free)",  platform: "Okta Dev Blog",       url: "https://developer.okta.com/blog/2019/10/21/illustrated-guide-to-oauth-and-oidc" },
      { name: "Auth0 Learn (Free)",                  platform: "Auth0",               url: "https://auth0.com/learn/" },
      { name: "Node.js Auth Deep Dive",              platform: "Udemy",               url: "https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/" },
    ],
  },
  "Caching (Redis / Memcached)": {
    desc: "Speed up reads and reduce DB load with in-memory caching strategies, TTLs, and cache invalidation patterns.",
    courses: [
      { name: "Redis University (Free)",             platform: "Redis",               url: "https://university.redis.com/" },
      { name: "Caching Strategies Guide (Free)",     platform: "AWS",                 url: "https://aws.amazon.com/caching/best-practices/" },
      { name: "Redis Crash Course (Free YouTube)",   platform: "Traversy Media",      url: "https://www.youtube.com/watch?v=jgpVdJB2sKQ" },
    ],
  },
  "Message Queues (RabbitMQ / Kafka)": {
    desc: "Decouple services with async messaging — queues, pub/sub, dead-letter queues, and at-least-once delivery.",
    courses: [
      { name: "RabbitMQ Tutorials (Free)",           platform: "RabbitMQ",            url: "https://www.rabbitmq.com/tutorials" },
      { name: "Apache Kafka Complete Guide",         platform: "Udemy",               url: "https://www.udemy.com/course/apache-kafka/" },
      { name: "Confluent Kafka Fundamentals (Free)", platform: "Confluent",           url: "https://developer.confluent.io/courses/#fundamentals" },
    ],
  },
  "Unit & Integration Testing": {
    desc: "Write reliable automated tests with mocking, fixtures, and test doubles — covering unit, integration, and contract tests.",
    courses: [
      { name: "Testing JavaScript (Free chapters)",  platform: "Kent C. Dodds",       url: "https://testingjavascript.com/" },
      { name: "Python Testing with pytest",          platform: "Udemy",               url: "https://www.udemy.com/course/pytest-course/" },
      { name: "Effective Software Testing (Book)",   platform: "Manning",             url: "https://www.manning.com/books/effective-software-testing" },
    ],
  },
  "Microservices Architecture": {
    desc: "Design distributed systems with service discovery, API gateways, circuit breakers, and saga patterns.",
    courses: [
      { name: "Microservices with Node.js & React",  platform: "Udemy",               url: "https://www.udemy.com/course/microservices-with-node-js-and-react/" },
      { name: "Building Microservices (Book)",       platform: "O'Reilly",            url: "https://www.oreilly.com/library/view/building-microservices-2nd/9781492034018/" },
      { name: "Microservices Patterns (Free intro)", platform: "microservices.io",    url: "https://microservices.io/patterns/index.html" },
    ],
  },
  "OpenAPI / Swagger": {
    desc: "Document and design APIs with OpenAPI 3.x — generating interactive docs, SDKs, and mock servers.",
    courses: [
      { name: "OpenAPI Specification (Free)",        platform: "swagger.io",          url: "https://swagger.io/docs/specification/about/" },
      { name: "Designing APIs with Swagger (Free)", platform: "SwaggerHub",           url: "https://support.smartbear.com/swaggerhub/docs/tutorials/openapi-3-tutorial.html" },
      { name: "API Design 101",                      platform: "Udemy",               url: "https://www.udemy.com/course/rest-api-design-best-practices/" },
    ],
  },
  "Performance Profiling": {
    desc: "Identify bottlenecks with CPU profiling, memory leak detection, query analysis, and load testing.",
    courses: [
      { name: "Web Performance (Free)",              platform: "web.dev",             url: "https://web.dev/learn/performance" },
      { name: "Python Performance Tips (Free)",      platform: "Real Python",         url: "https://realpython.com/python-performance/" },
      { name: "Node.js Performance Workshop",        platform: "Udemy",               url: "https://www.udemy.com/course/node-js-performance/" },
    ],
  },
  "gRPC / GraphQL": {
    desc: "Go beyond REST — build type-safe RPC services with gRPC/protobuf, or flexible APIs with GraphQL.",
    courses: [
      { name: "GraphQL with React (Free intro)",     platform: "Apollo Docs",         url: "https://www.apollographql.com/tutorials/" },
      { name: "gRPC Master Class",                   platform: "Udemy",               url: "https://www.udemy.com/course/grpc-nodejs/" },
      { name: "How to GraphQL (Free)",               platform: "howtographql.com",    url: "https://www.howtographql.com/" },
    ],
  },
  "API Rate Limiting & Security": {
    desc: "Protect APIs with rate limiting, input validation, HTTPS enforcement, and OWASP top-10 mitigations.",
    courses: [
      { name: "OWASP API Security Top 10 (Free)",   platform: "OWASP",               url: "https://owasp.org/www-project-api-security/" },
      { name: "Web Application Security",            platform: "Udemy",               url: "https://www.udemy.com/course/web-application-security/" },
      { name: "API Security in Action (Book)",       platform: "Manning",             url: "https://www.manning.com/books/api-security-in-action" },
    ],
  },

  // ── QA / Test Engineer ──────────────────────────────────────
  "Manual Testing Fundamentals": {
    desc: "Structured test planning, exploratory testing, equivalence partitioning, and boundary value analysis.",
    courses: [
      { name: "Software Testing Fundamentals (Free)", platform: "ISTQB",             url: "https://www.istqb.org/certifications/certified-tester-foundation-level" },
      { name: "Software Testing Masterclass",        platform: "Udemy",               url: "https://www.udemy.com/course/software-testing-masterclass/" },
      { name: "Test Design Techniques (Free)",       platform: "Ministry of Testing", url: "https://www.ministryoftesting.com/articles/test-design-techniques" },
    ],
  },
  "Test Case Design": {
    desc: "Write clear, maintainable test cases with preconditions, steps, and expected results that non-QAs can execute.",
    courses: [
      { name: "ISTQB Foundation (Free prep)",        platform: "ISTQB",               url: "https://www.istqb.org/certifications/certified-tester-foundation-level" },
      { name: "Effective Software Testing (Book)",   platform: "Manning",             url: "https://www.manning.com/books/effective-software-testing" },
      { name: "Test Management with Zephyr (Free)", platform: "Atlassian",            url: "https://www.atlassian.com/software/jira/guides/test-management" },
    ],
  },
  "Selenium or Playwright": {
    desc: "Automate browser interactions for end-to-end testing across multiple browsers and screen sizes.",
    courses: [
      { name: "Playwright Documentation (Free)",     platform: "Playwright",          url: "https://playwright.dev/docs/intro" },
      { name: "Selenium WebDriver with Java",        platform: "Udemy",               url: "https://www.udemy.com/course/selenium-real-time-exams-interview-questions/" },
      { name: "Modern Web Automation with Playwright", platform: "Udemy",             url: "https://www.udemy.com/course/playwright-tutorials-automation-testing/" },
    ],
  },
  "API Testing (Postman / REST)": {
    desc: "Test REST and GraphQL APIs with collections, environments, assertions, and Newman CLI runners.",
    courses: [
      { name: "Postman Learning Center (Free)",      platform: "Postman",             url: "https://learning.postman.com/docs/getting-started/introduction/" },
      { name: "API Testing with Postman",            platform: "Udemy",               url: "https://www.udemy.com/course/postman-the-complete-guide/" },
      { name: "REST API Testing (Free YouTube)",     platform: "freeCodeCamp",        url: "https://www.youtube.com/watch?v=VywxIQ2ZXw4" },
    ],
  },
  "Bug Tracking (Jira)": {
    desc: "Log, prioritize, and manage defects through their lifecycle — writing clear repro steps and severity ratings.",
    courses: [
      { name: "Jira Software Essentials (Free)",     platform: "Atlassian",           url: "https://university.atlassian.com/student/catalog/list?category_ids=701560-jira-software" },
      { name: "Agile & Jira for QA",                 platform: "Udemy",               url: "https://www.udemy.com/course/agile-crash-course/" },
      { name: "Bug Reporting Best Practices (Free)", platform: "Ministry of Testing", url: "https://www.ministryoftesting.com/articles/how-to-write-a-bug-report" },
    ],
  },
  "Performance Testing (JMeter)": {
    desc: "Load test APIs and web apps to find throughput limits, response time degradation, and memory leaks under load.",
    courses: [
      { name: "JMeter Beginner to Advanced",         platform: "Udemy",               url: "https://www.udemy.com/course/jmeter-course/" },
      { name: "Apache JMeter Documentation (Free)",  platform: "Apache",              url: "https://jmeter.apache.org/usermanual/get-started.html" },
      { name: "k6 Performance Testing (Free)",       platform: "Grafana",             url: "https://k6.io/docs/" },
    ],
  },
  "Mobile Testing": {
    desc: "Test iOS and Android apps for functionality, usability, and performance using real devices and emulators.",
    courses: [
      { name: "Mobile Testing with Appium",          platform: "Udemy",               url: "https://www.udemy.com/course/mobile-automation-using-appiumselenium-3/" },
      { name: "Android Testing Fundamentals (Free)", platform: "Google",              url: "https://developer.android.com/training/testing/fundamentals" },
      { name: "iOS Testing Basics (Free)",           platform: "Apple",               url: "https://developer.apple.com/documentation/xctest" },
    ],
  },
  "Test-Driven Development (TDD)": {
    desc: "Write failing tests before code, red-green-refactor cycles, and building a fast, trustworthy test suite.",
    courses: [
      { name: "TDD by Example (Book)",               platform: "Kent Beck",           url: "https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530" },
      { name: "TDD in Python (Free)",                platform: "Obey the Testing Goat", url: "https://www.obeythetestinggoat.com/" },
      { name: "TDD with JavaScript",                 platform: "Udemy",               url: "https://www.udemy.com/course/javascript-unit-testing-the-practical-guide/" },
    ],
  },
  "Security Testing Basics": {
    desc: "Apply OWASP top-10 checks, run DAST tools like OWASP ZAP, and integrate security scans into CI pipelines.",
    courses: [
      { name: "OWASP Testing Guide (Free)",          platform: "OWASP",               url: "https://owasp.org/www-project-web-security-testing-guide/" },
      { name: "Web Security Testing with OWASP ZAP", platform: "Udemy",              url: "https://www.udemy.com/course/owasp-zap-from-beginner-to-advanced/" },
      { name: "Penetration Testing Path (Free)",     platform: "Hack The Box",        url: "https://academy.hackthebox.com/paths/jobrole/1" },
    ],
  },
  "AI-Assisted Testing Tools": {
    desc: "Leverage AI-powered test generation, visual regression, and self-healing selectors to scale QA coverage.",
    courses: [
      { name: "Testim AI Testing (Free Trial)",      platform: "Testim",              url: "https://www.testim.io/" },
      { name: "Mabl AI Testing (Free Trial)",        platform: "Mabl",                url: "https://www.mabl.com/" },
      { name: "AI in Software Testing (Free YouTube)", platform: "Ministry of Testing", url: "https://www.youtube.com/c/MinistryOfTesting" },
    ],
  },

  // ── Scrum Master / Agile Coach ──────────────────────────────
  "Scrum Framework": {
    desc: "Scrum events, artifacts, and accountabilities — Sprint, Daily Scrum, Review, Retrospective, and the Scrum Guide.",
    courses: [
      { name: "Professional Scrum Master I (PSM I)", platform: "Scrum.org",          url: "https://www.scrum.org/assessments/professional-scrum-master-i-certification" },
      { name: "Scrum Guide (Free)",                  platform: "Scrum.org",           url: "https://scrumguides.org/scrum-guide.html" },
      { name: "Scrum Master Certification Prep",     platform: "Udemy",               url: "https://www.udemy.com/course/scrum-certification-prep-mock-exam-questions-psm-i/" },
    ],
  },
  "Kanban & Lean Principles": {
    desc: "Visualize work, limit WIP, manage flow, and apply Lean thinking to reduce waste in software delivery.",
    courses: [
      { name: "Kanban University Essentials (Free)",  platform: "Kanban University",  url: "https://kanban.university/kanban-guide/" },
      { name: "Lean Software Development",           platform: "Udemy",               url: "https://www.udemy.com/course/lean-software-development/" },
      { name: "The Lean Startup (Book)",             platform: "Eric Ries",           url: "https://theleanstartup.com/" },
    ],
  },
  "Sprint Planning & Retrospectives": {
    desc: "Facilitate effective sprint ceremonies — backlog refinement, planning poker, retrospective formats, and action items.",
    courses: [
      { name: "Agile Retrospectives (Free)",         platform: "Retromat",            url: "https://retromat.org/" },
      { name: "Sprint Planning Best Practices",      platform: "Scrum.org",           url: "https://www.scrum.org/resources/blog/sprint-planning" },
      { name: "Agile Coaching & Facilitation",       platform: "Udemy",               url: "https://www.udemy.com/course/agile-scrum-in-practice/" },
    ],
  },
  "Conflict Resolution": {
    desc: "Navigate team disagreements, mediate between stakeholders and developers, and build psychological safety.",
    courses: [
      { name: "Conflict Management (Free)",          platform: "Coursera (UCI)",      url: "https://www.coursera.org/learn/conflict-management" },
      { name: "Crucial Conversations (Book)",        platform: "VitalSmarts",         url: "https://cruciallearning.com/crucial-conversations-book/" },
      { name: "Team Dynamics & Facilitation",        platform: "Udemy",               url: "https://www.udemy.com/course/agile-leadership-coaching/" },
    ],
  },
  "Metrics (Velocity, Burn-down)": {
    desc: "Track and communicate team health through velocity, burn-down/up charts, cycle time, and cumulative flow diagrams.",
    courses: [
      { name: "Agile Metrics (Free)",                platform: "Scrum.org",           url: "https://www.scrum.org/resources/blog/agile-metrics-good-bad-and-ugly" },
      { name: "Evidence-Based Management (Free)",    platform: "Scrum.org",           url: "https://www.scrum.org/resources/evidence-based-management" },
      { name: "Jira Reporting & Dashboards (Free)",  platform: "Atlassian",           url: "https://university.atlassian.com/student/catalog/list?category_ids=701560-jira-software" },
    ],
  },
  "SAFe / LeSS Scaling Frameworks": {
    desc: "Scale Agile across multiple teams with SAFe Program Increments, LeSS Sprints, and cross-team coordination.",
    courses: [
      { name: "SAFe Scrum Master (SSM)",             platform: "Scaled Agile",        url: "https://scaledagile.com/training/safe-scrum-master/" },
      { name: "LeSS Framework (Free)",               platform: "less.works",          url: "https://less.works/less/framework" },
      { name: "Scaling Agile Frameworks",            platform: "Udemy",               url: "https://www.udemy.com/course/safe-5-scrum-master-ssm-certification/" },
    ],
  },
  "Coaching & Mentoring": {
    desc: "Grow individuals and teams with active listening, powerful questions, and a servant-leader mindset.",
    courses: [
      { name: "Agile Coaching (ICP-ACC)",            platform: "ICAgile",             url: "https://www.icagile.com/certification/agile-coaching" },
      { name: "The Coaching Habit (Book)",           platform: "Michael Bungay Stanier", url: "https://www.mbs.works/2-book/" },
      { name: "Leadership & Coaching",               platform: "Coursera (Michigan)", url: "https://www.coursera.org/learn/coaching-skills-manager" },
    ],
  },
  "Risk Management": {
    desc: "Identify, assess, and mitigate delivery risks — dependency mapping, impediment logs, and escalation paths.",
    courses: [
      { name: "Risk Management in Projects (Free)", platform: "PMI",                  url: "https://www.pmi.org/learning/library/risk-analysis-project-management-7070" },
      { name: "Agile Risk Management",              platform: "Udemy",                url: "https://www.udemy.com/course/agile-scrum-in-practice/" },
      { name: "PMBOK Risk Chapter (Free summary)",  platform: "PMI",                  url: "https://www.pmi.org/pmbok-guide-standards" },
    ],
  },
  "OKR Frameworks": {
    desc: "Set and track Objectives and Key Results — connecting team deliverables to company-level outcomes.",
    courses: [
      { name: "Measure What Matters (Book)",         platform: "John Doerr",          url: "https://www.whatmatters.com/the-book/" },
      { name: "OKR Fundamentals (Free)",             platform: "Weekdone",            url: "https://weekdone.com/okr-university" },
      { name: "OKR Masterclass",                     platform: "Udemy",               url: "https://www.udemy.com/course/okr-masterclass/" },
    ],
  },
  "Product Owner Collaboration": {
    desc: "Align with Product Owners on backlog prioritization, acceptance criteria, and sprint goal clarity.",
    courses: [
      { name: "Professional Product Owner (PSPO)",  platform: "Scrum.org",            url: "https://www.scrum.org/assessments/professional-scrum-product-owner-i-certification" },
      { name: "Collaboration for Agile Teams",      platform: "Udemy",                url: "https://www.udemy.com/course/agile-scrum-in-practice/" },
      { name: "Scrum Team Dynamics (Free)",         platform: "Scrum.org",            url: "https://www.scrum.org/resources/blog/scrum-team" },
    ],
  },

  // ── Data Analyst ─────────────────────────────────────────────
  "SQL (Advanced Queries)": {
    desc: "Window functions, CTEs, recursive queries, query optimisation, and advanced joins for analytical workloads.",
    courses: [
      { name: "Advanced SQL for Query Tuning",       platform: "Coursera",            url: "https://www.coursera.org/learn/advanced-sql-for-query-tuning-and-performance-optimization" },
      { name: "Mode SQL Tutorial (Free)",            platform: "Mode Analytics",      url: "https://mode.com/sql-tutorial/" },
      { name: "SQL for Data Analysis",              platform: "Udacity (Free)",       url: "https://learn.udacity.com/courses/ud198" },
    ],
  },
  "Excel / Google Sheets": {
    desc: "PivotTables, VLOOKUP/INDEX-MATCH, array formulas, and data validation for day-to-day business analysis.",
    courses: [
      { name: "Excel Skills for Business",           platform: "Coursera (Macquarie)", url: "https://www.coursera.org/specializations/excel" },
      { name: "Google Sheets Mastery",               platform: "Udemy",               url: "https://www.udemy.com/course/google-sheets-master/" },
      { name: "Google Sheets Tutorials (Free)",      platform: "Google Workspace",    url: "https://workspace.google.com/intl/en/products/sheets/" },
    ],
  },
  "Data Visualization (Tableau/PowerBI)": {
    desc: "Build interactive dashboards and reports that turn raw numbers into decisions-ready visual stories.",
    courses: [
      { name: "Tableau Public (Free Tool)",          platform: "Tableau",             url: "https://public.tableau.com/en-us/s/resources" },
      { name: "Microsoft Power BI Desktop (Free)",   platform: "Microsoft Learn",     url: "https://learn.microsoft.com/en-us/training/paths/create-use-analytics-reports-power-bi/" },
      { name: "Data Visualisation with Tableau",     platform: "Coursera (UC Davis)", url: "https://www.coursera.org/specializations/data-visualization" },
    ],
  },
  "Python or R for Analysis": {
    desc: "Use Pandas/Numpy (Python) or tidyverse (R) to manipulate, aggregate, and model analytical datasets.",
    courses: [
      { name: "Python for Data Analysis",            platform: "Udemy",               url: "https://www.udemy.com/course/data-analysis-with-pandas/" },
      { name: "R for Data Science (Free Book)",      platform: "Hadley Wickham",      url: "https://r4ds.had.co.nz/" },
      { name: "Data Analysis with Python (Free)",    platform: "freeCodeCamp",        url: "https://www.freecodecamp.org/learn/data-analysis-with-python/" },
    ],
  },
  "Business Acumen & Storytelling": {
    desc: "Translate data findings into business insights using narrative structure, executive summaries, and stakeholder framing.",
    courses: [
      { name: "Storytelling with Data (Book)",       platform: "Cole Nussbaumer",     url: "https://www.storytellingwithdata.com/books" },
      { name: "Communicating Data Findings",         platform: "Coursera",            url: "https://www.coursera.org/learn/communication-data-science" },
      { name: "Business Analytics",                  platform: "Coursera (Wharton)",  url: "https://www.coursera.org/specializations/business-analytics" },
    ],
  },
  "Data Cleaning & ETL": {
    desc: "Handle missing values, outliers, inconsistent formats, and build repeatable data transformation pipelines.",
    courses: [
      { name: "Data Wrangling with Python",          platform: "Udemy",               url: "https://www.udemy.com/course/data-analysis-with-pandas/" },
      { name: "Data Cleaning in Python (Free)",      platform: "Kaggle",              url: "https://www.kaggle.com/learn/data-cleaning" },
      { name: "Trifacta Wrangler (Free Tool)",       platform: "Alteryx",             url: "https://www.alteryx.com/products/trifacta-platform" },
    ],
  },
  "Dashboard Design": {
    desc: "Lay out dashboards for clarity — choosing chart types, minimising clutter, and guiding the viewer's eye.",
    courses: [
      { name: "Storytelling with Data (Free blog)",  platform: "Cole Nussbaumer",     url: "https://www.storytellingwithdata.com/blog" },
      { name: "Dashboard Design Best Practices",     platform: "Tableau",             url: "https://www.tableau.com/learn/whitepapers/tableau-visual-guidebook" },
      { name: "Data Visualisation for Data Analysis", platform: "Udemy",              url: "https://www.udemy.com/course/data-visualization-for-data-analysis-and-reporting/" },
    ],
  },
  "Google Analytics / Mixpanel": {
    desc: "Track user behaviour, conversion funnels, retention, and product metrics in GA4 or Mixpanel.",
    courses: [
      { name: "Google Analytics Certification (Free)", platform: "Skillshop",        url: "https://skillshop.withgoogle.com/intl/en_ALL/learn/course/google-analytics" },
      { name: "Mixpanel Academy (Free)",             platform: "Mixpanel",            url: "https://mixpanel.com/blog/category/tutorials/" },
      { name: "Product Analytics",                   platform: "Udemy",               url: "https://www.udemy.com/course/product-analytics/" },
    ],
  },
  "Predictive Modelling Basics": {
    desc: "Build and evaluate regression and classification models for business forecasting and customer segmentation.",
    courses: [
      { name: "Intro to Machine Learning (Free)",    platform: "Kaggle",              url: "https://www.kaggle.com/learn/intro-to-machine-learning" },
      { name: "Machine Learning for Business",       platform: "Coursera",            url: "https://www.coursera.org/learn/machine-learning-business-professionals" },
      { name: "Applied Predictive Modeling (Book)",  platform: "Kuhn & Johnson",      url: "https://www.springer.com/gp/book/9781461468486" },
    ],
  },
  "dbt / Looker": {
    desc: "Transform data in the warehouse with dbt, and build a governed semantic layer for self-serve BI in Looker.",
    courses: [
      { name: "dbt Fundamentals (Free)",             platform: "dbt Learn",           url: "https://courses.getdbt.com/courses/fundamentals" },
      { name: "Looker Learning Path (Free)",         platform: "Google Cloud",        url: "https://cloud.google.com/looker/docs/intro" },
      { name: "Analytics Engineering with dbt",      platform: "Udemy",               url: "https://www.udemy.com/course/complete-dbt-data-build-tool-bootcamp-zero-to-hero-learn-dbt/" },
    ],
  },
  "Spark / BigQuery": {
    desc: "Query and transform large-scale datasets using distributed compute — Spark with PySpark or BigQuery SQL.",
    courses: [
      { name: "BigQuery Fundamentals (Free)",        platform: "Google Cloud",        url: "https://cloud.google.com/bigquery/docs/introduction" },
      { name: "Apache Spark with Python (PySpark)",  platform: "Udemy",               url: "https://www.udemy.com/course/apache-spark-programming-in-python-for-beginners/" },
      { name: "Google BigQuery: The Definitive Guide", platform: "O'Reilly",          url: "https://www.oreilly.com/library/view/google-bigquery-the/9781492044451/" },
    ],
  },

  // ── Technical Writer ─────────────────────────────────────────
  "Docs-as-Code (Markdown / RST)": {
    desc: "Write documentation in plain text markup, manage it in Git, and publish via automated CI pipelines.",
    courses: [
      { name: "Docs as Code (Free)",                 platform: "Write the Docs",      url: "https://www.writethedocs.org/guide/docs-as-code/" },
      { name: "Markdown Guide (Free)",               platform: "markdownguide.org",   url: "https://www.markdownguide.org/" },
      { name: "Learn reStructuredText (Free)",       platform: "Sphinx Docs",         url: "https://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html" },
    ],
  },
  "API Documentation": {
    desc: "Write getting-started guides, endpoint references, code samples, and authentication walkthroughs for developers.",
    courses: [
      { name: "Documenting APIs: A Guide for Tech Writers (Free)", platform: "idratherbewriting.com", url: "https://idratherbewriting.com/learnapidoc/" },
      { name: "Technical Writing Courses (Free)",    platform: "Google",              url: "https://developers.google.com/tech-writing" },
      { name: "Documenting REST APIs",               platform: "Udemy",               url: "https://www.udemy.com/course/documenting-rest-apis/" },
    ],
  },
  "Information Architecture": {
    desc: "Organise content hierarchies, navigation structures, and labelling systems that help users find what they need.",
    courses: [
      { name: "Information Architecture for the Web (Free)", platform: "Nielsen Norman Group", url: "https://www.nngroup.com/articles/ia-vs-navigation/" },
      { name: "Rosenfeld's IA book summary (Free)", platform: "O'Reilly",             url: "https://www.oreilly.com/library/view/information-architecture-4th/9781491913529/" },
      { name: "UX Writing & IA",                     platform: "Coursera",            url: "https://www.coursera.org/learn/ux-design-fundamentals" },
    ],
  },
  "Audience Analysis": {
    desc: "Identify user personas, technical expertise levels, and reading contexts to calibrate your writing appropriately.",
    courses: [
      { name: "Technical Writing: How to Write for a Technical Audience", platform: "Udemy", url: "https://www.udemy.com/course/technical-writing/" },
      { name: "Google Tech Writing Fundamentals (Free)", platform: "Google",          url: "https://developers.google.com/tech-writing/one" },
      { name: "Every Page is Page One (Book)",       platform: "Mark Baker",          url: "https://everypageispageone.com/the-book/" },
    ],
  },
  "Style Guides (Google, Microsoft)": {
    desc: "Apply consistent voice, tone, and terminology using industry-standard style references.",
    courses: [
      { name: "Google Developer Documentation Style Guide (Free)", platform: "Google", url: "https://developers.google.com/style" },
      { name: "Microsoft Writing Style Guide (Free)", platform: "Microsoft",          url: "https://learn.microsoft.com/en-us/style-guide/welcome/" },
      { name: "Technical Writing with Style",        platform: "Udemy",               url: "https://www.udemy.com/course/technical-writing/" },
    ],
  },
  "Static Site Generators (Hugo/Docusaurus)": {
    desc: "Build fast, versioned documentation sites using Hugo, Docusaurus, MkDocs, or Sphinx with custom themes.",
    courses: [
      { name: "Docusaurus Documentation (Free)",     platform: "Docusaurus",          url: "https://docusaurus.io/docs" },
      { name: "MkDocs Getting Started (Free)",       platform: "MkDocs",              url: "https://www.mkdocs.org/getting-started/" },
      { name: "Hugo Static Site Generator (Free)",   platform: "Hugo",                url: "https://gohugo.io/getting-started/quick-start/" },
    ],
  },
  "Developer Experience (DX) Writing": {
    desc: "Craft onboarding flows, SDK guides, changelogs, and tutorials that reduce developer time-to-first-success.",
    courses: [
      { name: "Developer Relations (DevRel) Handbook (Free)", platform: "devrel.co",  url: "https://www.devrel.co/book" },
      { name: "API Documentation Best Practices",    platform: "Udemy",               url: "https://www.udemy.com/course/documenting-rest-apis/" },
      { name: "Write the Docs Community (Free)",     platform: "Write the Docs",      url: "https://www.writethedocs.org/guide/" },
    ],
  },
  "Diagrams (Mermaid / draw.io)": {
    desc: "Create architecture diagrams, flowcharts, and sequence diagrams that live alongside documentation in code.",
    courses: [
      { name: "Mermaid Live Editor (Free)",          platform: "Mermaid",             url: "https://mermaid.live/" },
      { name: "draw.io Tutorials (Free)",            platform: "draw.io",             url: "https://www.drawio.com/doc/faq" },
      { name: "Diagram as Code (Free YouTube)",      platform: "Mermaid Community",   url: "https://www.youtube.com/results?search_query=mermaid+diagram+tutorial" },
    ],
  },
  "OpenAPI / Swagger Docs": {
    desc: "Write and publish machine-readable API specs that auto-generate interactive reference documentation.",
    courses: [
      { name: "OpenAPI Specification (Free)",        platform: "swagger.io",          url: "https://swagger.io/docs/specification/about/" },
      { name: "Documenting APIs with OpenAPI",       platform: "Udemy",               url: "https://www.udemy.com/course/documenting-rest-apis/" },
      { name: "Redoc & SwaggerUI (Free)",            platform: "Redocly",             url: "https://redocly.com/docs/redoc/" },
    ],
  },
  "Video & Screencasts": {
    desc: "Record, edit, and publish product walkthroughs and tutorial videos that complement written documentation.",
    courses: [
      { name: "Screencasting 101 (Free)",            platform: "Telestream",          url: "https://learn.techsmith.com/catalog" },
      { name: "Video Editing with DaVinci Resolve (Free)", platform: "Blackmagic",    url: "https://www.blackmagicdesign.com/products/davinciresolve/training" },
      { name: "Tutorial Video Production",           platform: "Udemy",               url: "https://www.udemy.com/course/create-tutorial-videos/" },
    ],
  },
  "Localisation Basics": {
    desc: "Prepare documentation for translation — internationalisation best practices, locale-neutral writing, and TMS tools.",
    courses: [
      { name: "Localization Essentials (Free)",      platform: "Google",              url: "https://developers.google.com/style/translation" },
      { name: "Writing for Translation (Free)",      platform: "Write the Docs",      url: "https://www.writethedocs.org/guide/writing/localization/" },
      { name: "Localisation & Translation Course",   platform: "Udemy",               url: "https://www.udemy.com/course/localisation-localization-course/" },
    ],
  },

  // ── ECE Skills ──────────────────────────────────────────────
  "C / C++ Programming": {
    desc: "Foundation of embedded systems — used for writing firmware, device drivers, and real-time control logic on microcontrollers and processors.",
    courses: [
      { name: "C Programming for Embedded Systems (Free)", platform: "Coursera", url: "https://www.coursera.org/learn/embedded-software-hardware" },
      { name: "Embedded C Programming",                    platform: "Udemy",    url: "https://www.udemy.com/course/embedded-c-programming-design-patterns-and-best-practices/" },
      { name: "C++ for Embedded Systems (Free)",           platform: "YouTube",  url: "https://www.youtube.com/results?search_query=C+embedded+systems+tutorial" },
    ],
  },
  "Microcontrollers (ARM / AVR / STM32)": {
    desc: "Programming and interfacing microcontroller units; key for embedded product development, automation, and IoT devices.",
    courses: [
      { name: "STM32 Microcontroller Course",       platform: "Udemy",    url: "https://www.udemy.com/course/microcontroller-embedded-c-programming/" },
      { name: "Arduino & AVR Programming (Free)",   platform: "YouTube",  url: "https://www.youtube.com/results?search_query=STM32+tutorial+for+beginners" },
      { name: "ARM Cortex-M Programming",           platform: "Coursera", url: "https://www.coursera.org/learn/introduction-to-arm-cortex" },
    ],
  },
  "RTOS (FreeRTOS / Zephyr)": {
    desc: "Real-time operating systems manage task scheduling, inter-process communication, and deterministic timing in embedded applications.",
    courses: [
      { name: "FreeRTOS for Embedded Systems",     platform: "Udemy",   url: "https://www.udemy.com/course/freertos-on-arm-processors/" },
      { name: "FreeRTOS Documentation (Free)",      platform: "FreeRTOS", url: "https://www.freertos.org/Documentation/RTOS_book.html" },
      { name: "Zephyr RTOS Getting Started (Free)", platform: "Zephyr",  url: "https://docs.zephyrproject.org/latest/introduction/index.html" },
    ],
  },
  "Communication Protocols (I2C, SPI, UART)": {
    desc: "Serial communication interfaces essential for sensor interfacing, peripheral control, and system-level data exchange in embedded hardware.",
    courses: [
      { name: "Embedded Protocols: I2C, SPI, UART (Free)", platform: "YouTube", url: "https://www.youtube.com/results?search_query=I2C+SPI+UART+embedded+tutorial" },
      { name: "Mastering Embedded Communication Protocols",  platform: "Udemy",  url: "https://www.udemy.com/course/mastering-microcontroller-with-peripheral-driver-development/" },
      { name: "Embedded Systems - Shape The World (Free)",   platform: "edX",    url: "https://www.edx.org/course/embedded-systems-shape-the-world-microcontroller-inputoutput" },
    ],
  },
  "PCB Design (KiCad / Altium)": {
    desc: "Designing printed circuit boards from schematic capture through layout, DRC, and Gerber file generation for manufacturing.",
    courses: [
      { name: "KiCad PCB Design (Free)",           platform: "YouTube", url: "https://www.youtube.com/results?search_query=KiCad+PCB+design+tutorial" },
      { name: "PCB Design with Altium Designer",   platform: "Udemy",   url: "https://www.udemy.com/course/pcb-design-with-altium-designer/" },
      { name: "KiCad Documentation (Free)",         platform: "KiCad",  url: "https://docs.kicad.org/" },
    ],
  },
  "FPGA / VHDL / Verilog": {
    desc: "Hardware description languages and FPGA platforms for parallel digital logic design, prototyping, and high-speed signal processing.",
    courses: [
      { name: "FPGA Design for Engineers",          platform: "Coursera", url: "https://www.coursera.org/specializations/fpga-design" },
      { name: "Verilog / VHDL for Beginners (Free)", platform: "YouTube", url: "https://www.youtube.com/results?search_query=verilog+VHDL+tutorial+beginners" },
      { name: "FPGA Fundamentals",                  platform: "Udemy",   url: "https://www.udemy.com/course/fpga-design-for-engineers/" },
    ],
  },
  "Verilog / SystemVerilog": {
    desc: "Industry-standard hardware description and verification languages used for RTL design and ASIC/FPGA development.",
    courses: [
      { name: "SystemVerilog for Verification",    platform: "Udemy",    url: "https://www.udemy.com/course/systemverilog-for-design-and-verification/" },
      { name: "Verilog / SystemVerilog (Free)",    platform: "YouTube",  url: "https://www.youtube.com/results?search_query=systemverilog+tutorial" },
      { name: "Digital Design & Computer Arch",    platform: "Coursera", url: "https://www.coursera.org/learn/digital-design" },
    ],
  },
  // ── EEE Skills ──────────────────────────────────────────────
  "Power Systems Design": {
    desc: "Analysis and design of electrical power systems including generation, transmission, substation layout, and load flow calculations.",
    courses: [
      { name: "Power Systems Analysis",              platform: "Coursera", url: "https://www.coursera.org/learn/power-system-analysis" },
      { name: "Electrical Power Systems Design",     platform: "Udemy",   url: "https://www.udemy.com/course/electrical-power-systems/" },
      { name: "NPTEL Power Systems (Free)",          platform: "NPTEL",   url: "https://nptel.ac.in/courses/108/105/108105019/" },
    ],
  },
  "PLC Programming (Ladder / Structured Text)": {
    desc: "Writing control logic for industrial automation using programmable logic controllers in ladder diagram and IEC 61131-3 languages.",
    courses: [
      { name: "PLC Programming from Scratch",        platform: "Udemy",   url: "https://www.udemy.com/course/plc-programming-from-scratch/" },
      { name: "Siemens TIA Portal PLC (Free)",       platform: "YouTube", url: "https://www.youtube.com/results?search_query=Siemens+TIA+Portal+PLC+tutorial" },
      { name: "Allen Bradley RSLogix PLC",           platform: "Udemy",   url: "https://www.udemy.com/course/plc-programming-allen-bradley/" },
    ],
  },
  "SCADA Systems": {
    desc: "Supervisory control and data acquisition systems for real-time monitoring and control of industrial processes.",
    courses: [
      { name: "SCADA Systems Fundamentals",          platform: "Udemy",   url: "https://www.udemy.com/course/scada-systems/" },
      { name: "Ignition SCADA (Free)",               platform: "Inductive Automation", url: "https://inductiveuniversity.com/" },
      { name: "Industrial Automation & SCADA",       platform: "Coursera", url: "https://www.coursera.org/learn/industrial-iot" },
    ],
  },
  "Motor Drive Systems (VFD)": {
    desc: "Variable frequency drives and motor control for AC/DC drives, speed regulation, and energy-efficient operation in industry.",
    courses: [
      { name: "Variable Frequency Drives (VFD)",     platform: "Udemy",   url: "https://www.udemy.com/course/variable-frequency-drives/" },
      { name: "Motor Drives & Control (Free)",       platform: "YouTube", url: "https://www.youtube.com/results?search_query=VFD+motor+drive+tutorial" },
      { name: "Electric Drives",                     platform: "NPTEL",   url: "https://nptel.ac.in/courses/108/102/108102077/" },
    ],
  },
  // ── Civil Engineering Skills ────────────────────────────────
  "Structural Analysis & Design": {
    desc: "Analysing forces, moments, and deformations in structures; designing beams, columns, slabs, and frames to code requirements.",
    courses: [
      { name: "Structural Analysis",                platform: "Coursera", url: "https://www.coursera.org/learn/structural-analysis" },
      { name: "NPTEL Structural Analysis (Free)",   platform: "NPTEL",   url: "https://nptel.ac.in/courses/105/101/105101085/" },
      { name: "Structural Design with RCC",         platform: "Udemy",   url: "https://www.udemy.com/course/structural-engineering-complete-course/" },
    ],
  },
  "STAAD.Pro / ETABS / SAP2000": {
    desc: "Industry-leading structural analysis software for modelling, analyzing, and designing buildings, bridges, and industrial structures.",
    courses: [
      { name: "ETABS for Building Design",           platform: "Udemy",   url: "https://www.udemy.com/course/etabs-building-design/" },
      { name: "STAAD.Pro Structural Analysis",       platform: "Udemy",   url: "https://www.udemy.com/course/staad-pro/" },
      { name: "SAP2000 Tutorial (Free)",             platform: "YouTube", url: "https://www.youtube.com/results?search_query=SAP2000+structural+tutorial" },
    ],
  },
  "AutoCAD Civil 3D": {
    desc: "Parametric design tool for civil engineering — alignment design, corridor modelling, surface analysis, and plan production.",
    courses: [
      { name: "AutoCAD Civil 3D Complete Course",   platform: "Udemy",   url: "https://www.udemy.com/course/autocad-civil-3d/" },
      { name: "Civil 3D Essentials (Free)",         platform: "Autodesk", url: "https://www.autodesk.com/certification/learn/course/autodesk-civil3d" },
      { name: "Civil 3D Tutorials (Free)",          platform: "YouTube", url: "https://www.youtube.com/results?search_query=AutoCAD+Civil+3D+tutorial" },
    ],
  },
  "Hydraulics & Hydrology": {
    desc: "Fluid flow in open channels and closed conduits; rainfall-runoff modelling, flood estimation, and water supply system hydraulics.",
    courses: [
      { name: "Hydrology & Hydraulics",             platform: "Coursera", url: "https://www.coursera.org/learn/hydrology" },
      { name: "NPTEL Fluid Mechanics (Free)",       platform: "NPTEL",   url: "https://nptel.ac.in/courses/105/101/105101082/" },
      { name: "HEC-RAS Flood Modelling (Free)",     platform: "YouTube", url: "https://www.youtube.com/results?search_query=HEC-RAS+tutorial+beginners" },
    ],
  },
  "Project Planning & Scheduling (MS Project / Primavera)": {
    desc: "Creating WBS, scheduling activities, resource loading, and tracking project progress using industry-standard planning tools.",
    courses: [
      { name: "Primavera P6 for Project Managers",  platform: "Udemy",   url: "https://www.udemy.com/course/primavera-p6-professional/" },
      { name: "Microsoft Project Complete Course",  platform: "Udemy",   url: "https://www.udemy.com/course/microsoft-project-course/" },
      { name: "Project Scheduling (Free)",          platform: "Coursera", url: "https://www.coursera.org/learn/project-planning" },
    ],
  },
  // ── Mechanical Engineering Skills ───────────────────────────
  "CAD Modeling (SolidWorks / CATIA / Creo)": {
    desc: "3D parametric modelling, assemblies, and drawing generation for mechanical components and products.",
    courses: [
      { name: "SolidWorks Complete Course",         platform: "Udemy",   url: "https://www.udemy.com/course/solidworks-for-beginners/" },
      { name: "CATIA V5 Mechanical Design",         platform: "Udemy",   url: "https://www.udemy.com/course/catia-v5-beginners/" },
      { name: "SolidWorks Tutorials (Free)",        platform: "YouTube", url: "https://www.youtube.com/results?search_query=SolidWorks+tutorial+beginners" },
    ],
  },
  "Finite Element Analysis (ANSYS / Abaqus)": {
    desc: "Simulating structural stress, thermal, and fatigue behaviour of components using FEA solvers to validate designs before prototyping.",
    courses: [
      { name: "ANSYS FEA for Beginners",            platform: "Udemy",   url: "https://www.udemy.com/course/ansys-workbench-fea-cfd/" },
      { name: "Abaqus FEA Tutorial",                platform: "Udemy",   url: "https://www.udemy.com/course/abaqus-fea-tutorial/" },
      { name: "ANSYS Learning (Free)",              platform: "Ansys",   url: "https://courses.ansys.com/" },
    ],
  },
  "Lean Manufacturing & Kaizen": {
    desc: "Applying waste-elimination and continuous-improvement principles to production systems for productivity and quality gains.",
    courses: [
      { name: "Lean Manufacturing & Six Sigma",     platform: "Coursera", url: "https://www.coursera.org/learn/six-sigma-and-the-organization" },
      { name: "Lean Manufacturing Complete",        platform: "Udemy",   url: "https://www.udemy.com/course/lean-manufacturing/" },
      { name: "Kaizen Fundamentals (Free)",         platform: "YouTube", url: "https://www.youtube.com/results?search_query=lean+manufacturing+kaizen+tutorial" },
    ],
  },
  "HVAC System Design (AHU / Chiller / VRF)": {
    desc: "Designing heating, ventilation, and air conditioning systems for buildings — equipment selection, load calculations, and system layout.",
    courses: [
      { name: "HVAC Design for Buildings",          platform: "Udemy",   url: "https://www.udemy.com/course/hvac-design-for-buildings/" },
      { name: "ASHRAE HVAC Fundamentals (Free)",    platform: "ASHRAE",  url: "https://www.ashrae.org/technical-resources/free-resources" },
      { name: "HVAC Basics (Free)",                 platform: "YouTube", url: "https://www.youtube.com/results?search_query=HVAC+design+tutorial+for+engineers" },
    ],
  },
  "Vehicle Dynamics & NVH": {
    desc: "Analysing ride, handling, braking, and noise-vibration-harshness characteristics of vehicles for performance and comfort targets.",
    courses: [
      { name: "Vehicle Dynamics Fundamentals",      platform: "Coursera", url: "https://www.coursera.org/learn/vehicle-dynamics" },
      { name: "Automotive NVH Engineering",         platform: "Udemy",   url: "https://www.udemy.com/course/nvh-engineering/" },
      { name: "Vehicle Dynamics (Free)",            platform: "YouTube", url: "https://www.youtube.com/results?search_query=vehicle+dynamics+NVH+engineering" },
    ],
  },
  "Powertrain Engineering (ICE / EV)": {
    desc: "Design and calibration of internal combustion or electric powertrain systems — engine, transmission, motors, and battery integration.",
    courses: [
      { name: "EV Engineering & Battery Systems",   platform: "Coursera", url: "https://www.coursera.org/learn/battery-state-of-health" },
      { name: "Automotive Powertrain Design",       platform: "Udemy",   url: "https://www.udemy.com/course/automotive-engineering/" },
      { name: "Electric Vehicle Technology (Free)", platform: "YouTube", url: "https://www.youtube.com/results?search_query=EV+powertrain+engineering+tutorial" },
    ],
  },

};

// ── Fallback for any skill not explicitly listed ──────────────
function getGapInfo(skillName) {
  return GAP_INFO[skillName] || {
    desc: `Developing ${skillName} will meaningfully strengthen your readiness for this role.`,
    courses: [
      { name: "Search on Coursera",   platform: "Coursera",  url: `https://www.coursera.org/search?query=${encodeURIComponent(skillName)}` },
      { name: "Search on Udemy",      platform: "Udemy",     url: `https://www.udemy.com/courses/search/?q=${encodeURIComponent(skillName)}` },
      { name: "Search on YouTube",    platform: "YouTube",   url: `https://www.youtube.com/results?search_query=${encodeURIComponent(skillName + " tutorial")}` },
    ],
  };
}
