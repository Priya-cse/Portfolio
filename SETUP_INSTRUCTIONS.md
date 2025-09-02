# Portfolio Setup Instructions for Priya Malemath

## 🎉 Portfolio Customization Complete!

Your portfolio has been successfully customized with your information from your resume. Here's what has been updated:

### ✅ What's Been Customized:

1. **Personal Information**
   - Name: Priya Malemath
   - Title: Generative AI & Software Engineer
   - Contact: mpriya1043@gmail.com, (+91) 9019529770

2. **Professional Summary**
   - Updated to reflect your expertise in Generative AI, LLM fine-tuning, and RAG pipelines
   - Highlighted your 25% improvement in prediction accuracy and <500ms semantic search latency

3. **Skills Section**
   - Updated to focus on AI/ML, full-stack development, and data engineering
   - Added your technical skills: Python, C++, React.js, Node.js, TensorFlow, PyTorch, etc.

4. **Education**
   - KLE Technological University, Hubballi
   - B.E. Computer Science Engineering (GPA: 8.56)
   - Specialization in ML, Deep Learning, and Big Data Analytics

5. **Work Experience**
   - Associate Software Engineer at MediCodio (June 2025 - Present)
   - Software Engineer Trainee at MediCodio (July 2024 - May 2025)
   - Intern at MediCodio (January 2024 - June 2024)

6. **Projects**
   - Pinecone RAG vs OpenAI Chatbot
   - Doodle Recognition System
   - Enhanced PSO Clustering with Autoencoders

7. **Achievements**
   - LLM Fine-tuning Excellence
   - RAG Pipeline Optimization
   - Testing Automation Champion

8. **SEO & Metadata**
   - Updated HTML title and meta descriptions
   - Updated package.json homepage URL

## 🔧 Next Steps to Complete Setup:

### 1. Create Environment File
Create a `.env` file in the root directory with your GitHub credentials:

```bash
# Copy the example file
cp env.example .env

# Edit .env with your actual GitHub token
REACT_APP_GITHUB_TOKEN = "YOUR_ACTUAL_GITHUB_TOKEN_HERE"
GITHUB_USERNAME = "priya-malemath"
USE_GITHUB_DATA = "true"
MEDIUM_USERNAME = "priya-malemath"
```

### 2. Get GitHub Personal Access Token
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate a new token (classic)
3. Don't select any scopes (just generate a simple token)
4. Copy the token and paste it in your `.env` file

### 3. Update Resume Link
In `src/portfolio.js`, update the `resumeLink` in the greeting section to point to your actual resume:
```javascript
resumeLink: "YOUR_ACTUAL_RESUME_LINK_HERE"
```

### 4. Customize Images (Optional)
Replace placeholder images in `src/assets/images/` with:
- Your university logo
- Company logos (MediCodio)
- Project-specific images
- Achievement images

### 5. Update Project Links
Update the project URLs in `src/portfolio.js` to point to your actual GitHub repositories.

### 6. Test Your Portfolio
```bash
npm install
npm start
```

### 7. Deploy to GitHub Pages
```bash
npm run deploy
```

## 🚀 Features of Your Portfolio:

- **AI/ML Focused**: Highlights your expertise in Generative AI and Machine Learning
- **Professional Experience**: Showcases your work at MediCodio with quantifiable achievements
- **Technical Skills**: Comprehensive display of your programming and AI/ML skills
- **Project Showcase**: Features your major projects with detailed descriptions
- **GitHub Integration**: Will display your GitHub profile and pinned repositories
- **Responsive Design**: Works perfectly on all devices
- **SEO Optimized**: Proper meta tags for search engine visibility

## 📝 Customization Notes:

- The portfolio is set to show you as "Open for opportunities: Yes"
- Twitter section is disabled (you can enable it if you have a Twitter account)
- Medium blogs are set to false (enable if you want to fetch from Medium)
- All sections are enabled and ready to display your information

## 🎯 Your Portfolio Will Showcase:

1. **Greeting Section**: Professional summary with AI/ML focus
2. **Skills**: Technical expertise in AI, ML, and full-stack development
3. **Education**: KLE Technological University degree details
4. **Experience**: Progressive career growth at MediCodio
5. **Projects**: AI-driven solutions and innovative applications
6. **Achievements**: Quantifiable improvements and technical accomplishments
7. **Contact**: Professional contact information

Your portfolio is now ready to impress potential employers and clients with your AI/ML expertise and professional achievements! 🎉
