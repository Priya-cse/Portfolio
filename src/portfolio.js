/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Priya Malemath",
  title: "Hi all, I'm Priya",
  subTitle: emoji(
    "Generative AI & Software Engineer 🚀 delivering AI-powered solutions across NLP and data platforms. Experienced in LLM fine-tuning, RAG pipelines, and vector database integration to optimize real-world applications."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1K00lRMX9SJGVPHvpOwl_IbOW-Qw3KuOi/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Priya-cse",
  linkedin: "https://www.linkedin.com/in/priya-m-918a27248/",
  gmail: "mpriya1043@gmail.com",
  // gitlab: "https://gitlab.com/priya-malemath",
  // facebook: "https://www.facebook.com/priya.malemath",
  // medium: "https://medium.com/@priya-malemath",
  // stackoverflow: "https://stackoverflow.com/users/priya-malemath",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "GENERATIVE AI & SOFTWARE ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Fine-tune LLMs and build RAG pipelines to improve prediction accuracy and reduce semantic search latency"
    ),
    emoji("⚡ Develop full-stack applications with modern frameworks and AI integration"),
    emoji("⚡ Worked closely with clients to ensure timely delivery of requirements, consistently meeting 24-hour turnaround")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Keras",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "VectorstoreDB (Pinecone)",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "NLP",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "HuggingFace Transformers",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "LangChain",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "RAG",
      fontAwesomeClassname: "fas fa-search"
    },
    {
      skillName: "Prompt Engineering",
      fontAwesomeClassname: "fas fa-magic"
    },
    {
      skillName: "Agentic Workflows",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "Fine-tuning LLMs",
      fontAwesomeClassname: "fas fa-sliders-h"
    },
    {
      skillName: "LLM Integration",
      fontAwesomeClassname: "fas fa-plug"
    },
    {
      skillName: "CI/CD (Jenkins)",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git/GitHub",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "KLE Technological University, Hubballi",
      logo: require("./assets/images/KLE_Technological_University_logo.webp"),
      subHeader: "B.E. Computer Science Engineering",
      duration: "Graduated June 2024",
      desc: "Graduated with a GPA of 8.56. Specialized in Machine Learning, Deep Learning (Neural Networks), and Exploratory Big Data Analytics.",
      descBullets: [
        "Machine Learning & Deep Learning",
        "Exploratory Big Data Analytics",
        "Computer Science Engineering"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Generative AI", // Max
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Agentic Workflows",
      progressPercentage: "90%"
    },
    {
      Stack: "RAG & Prompt Engineering",
      progressPercentage: "88%"
    },
    {
      Stack: "Data Engineering",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Associate Software Engineer",
      company: "MediCodio",
      companylogo: require("./assets/images/Medicodio_logo.webp"),
      date: "June 2025 – Present",
      desc: "Promoted from Software Engineer Trainee. Fine-tuned transformer APIs on proprietary medical datasets, boosting medical-code prediction accuracy by 25%.",
      descBullets: [
        "Fine-tuned existing transformer APIs (OpenAI) on proprietary medical datasets, boosting prediction accuracy by 25%",
        "Co-led architecture redesign with CEO, reducing codebase complexity by 30%",
        "Worked closely with clients to ensure timely delivery of requirements, consistently meeting 24-hour turnaround"
      ]
    },
    {
      role: "Software Engineer Trainee",
      company: "MediCodio",
      companylogo: require("./assets/images/Medicodio_logo.webp"),
      date: "July 2024 – May 2025",
      desc: "Developed ETL pipelines and AI models for clinical data processing and medical code prediction.",
      descBullets: [
        "Engineered advanced prompt-engineering strategies and integrated RAG workflows with Pinecone vector store",
        "Automated full-stack UI validation using Playwright, reducing regression testing cycles from 48hr to 4hr"
      ]
    },
    {
      role: "Intern",
      company: "MediCodio",
      companylogo: require("./assets/images/Medicodio_logo.webp"),
      date: "January 2024 – June 2024",
      desc: "Prototyped ETL pipelines using SciSpacy and BioBERT, achieving 20% reduction in preprocessing time and 25% improvement in semantic precision.",
      descBullets: [
        "Prototyped ETL pipelines using SciSpacy and BioBERT to clean and normalize 1K+ clinical records",
        "Prototyped decision-tree baseline (72% accuracy) to benchmark advanced models",
        "Benchmarked LangChain vs. Pinecone embeddings, selecting pipeline that boosted semantic precision by 25%"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Hide Open Source section (also removes header button)
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "AI-DRIVEN SOLUTIONS AND INNOVATIVE PROJECTS I'VE DEVELOPED",
  projects: [
    {
      image: require("./assets/images/RAG.png"),
      projectName: "Pinecone RAG vs OpenAI Chatbot",
      projectDesc: "Production-grade RAG chatbot reducing hallucination rate by 35% with 99.9% uptime. Automated ingestion of 100+ web pages achieving sub-150ms vector lookup latency.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Priya-cse/Pinecone-RAG-chatbot"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Doodle_recognition.jpg"),
      projectName: "Doodle Recognition System",
      projectDesc: "CNN-based doodle recognition system achieving 95% test accuracy on 30,000 OpenCV-processed doodles with dual input modes for camera-scan and in-air capture.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Priya-cse/DoodleRecognition"
        }
      ]
    },
    {
      image: require("./assets/images/autoencoders.jpg"),
      projectName: "Enhanced PSO Clustering with Autoencoders",
      projectDesc: "Automated k-selection and dimension reduction for stock market metrics, accelerating PSO convergence by ~40% with improved clustering quality.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Priya-cse/PSO-and-KMeans-for-Clustering-High-dimensional-data-using-Autoencoders"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆 "),
  subtitle:
    "Technical Achievements, Performance Improvements, and Innovative Solutions I've Delivered!",

  achievementsCards: [
    {
      title: "LLM Fine-tuning Excellence",
      subtitle:
        "Successfully fine-tuned transformer APIs on proprietary medical datasets, achieving 25% improvement in medical-code prediction accuracy.",
      image: require("./assets/images/llm.png"),
      imageAlt: "LLM Fine-tuning",
      footerLink: [
        /* No external links for achievements */
      ]
    },
    {
      title: "RAG Pipeline Optimization",
      subtitle:
        "Engineered RAG workflows with Pinecone vector store integration, delivering <500ms semantic-search response times and 35% reduction in hallucination rate.",
      image: require("./assets/images/rag_achievements.jpg"),
      imageAlt: "RAG Pipeline Achievement",
      footerLink: [
        /* No external links for achievements */
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool AI solutions, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@priya-malemath",
      title: "Building Production-Grade RAG Systems",
      description:
        "Learn how to build scalable RAG pipelines with vector databases and achieve sub-500ms response times."
    },
    {
      url: "https://medium.com/@priya-malemath",
      title: "Fine-tuning LLMs for Medical Applications",
      description:
        "A comprehensive guide to fine-tuning transformer models on domain-specific datasets for improved accuracy."
    }
  ],
  display: false // Hide Blogs section
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY KNOWLEDGE ABOUT AI, ML, AND SOFTWARE ENGINEERING 😅"
  ),

  talks: [
    {
      title: "Building RAG Systems with Vector Databases",
      subtitle: "Technical talk on implementing production-ready RAG pipelines",
      slides_url: "https://github.com/priya-malemath",
      event_url: "https://github.com/priya-malemath"
    }
  ],
  display: false // Hide Talks section
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT AI, MACHINE LEARNING, AND SOFTWARE ENGINEERING",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Priya-Malemath-from-Bengaluru--India-e9givv/a-a15itvo"
  ],
  display: false // Hide Podcast section
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(+91) 9019529770",
  email_address: "mpriya1043@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "priya_malemath", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
