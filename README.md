# 🎨 Cristian Sclifos (CRIS-AI) Portfolio Website

[![Website Status](https://img.shields.io/website-up-down-green-red/https/cris-ai.com.svg)](https://cris-ai.com/) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE) [![Netlify Status](https://api.netlify.com/api/v1/badges/your-site-id/deploy-status)](https://app.netlify.com/sites/your-site-id)

A vibrant portfolio showcasing my projects, skills, experience, and contact details, built with modern web technologies for a sleek, responsive design.

---

## 🚀 Live Demo & Repo

* 🔗 Live Site: [cris-ai.com](https://cris-ai.com/)
* 📦 Repository: [github.com/CSwebD/cris-ai.com](https://github.com/CSwebD/cris-ai.com)

---

## ✨ Description

This repository powers my personal portfolio website, highlighting:

* **🎯 Home:** Dynamic hero section with a brief introduction.
* **🛠️ Projects:** Interactive gallery of HTML/CSS, Java, and Python projects with direct links to live demos and code.
* **👤 About:** Skillset overview in HTML, CSS, JavaScript, Java, Python, R, and Bash with tooling icons.
* **📜 Experience:** Timeline of roles as IT Support Analyst, Full Stack Developer, and Web Designer.
* **📞 Contact:** Clickable phone, email links, and downloadable CV PDF.

---

## ✨ Badges & Technologies

![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5\&logoColor=white) ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3) ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript\&logoColor=black) ![Java](https://img.shields.io/badge/-Java-007396?logo=java\&logoColor=white) ![Python](https://img.shields.io/badge/-Python-3776AB?logo=python\&logoColor=white) ![R](https://img.shields.io/badge/-R-276DC3?logo=r) ![Bash](https://img.shields.io/badge/-Bash-4EAA25?logo=gnu-bash)

---

## 🎨 Features

* 🖥️ **Responsive Navigation:** Fixed header with smooth scrolling.
* 📁 **Project Showcase:** Categorized by language with live previews.
* 🛡️ **Skills Summary:** Icon-based list of languages & tools.
* 📈 **Experience Timeline:** Clear chronological layout.
* 📄 **Contact & CV:** Click-to-call/email links and CV download.
* 🌈 **Animated Background:** CSS gradient and optional Particles.js integration.

---

## 🏗️ Background Design

```css
body {
  background: linear-gradient(135deg, #1e3c72, #2a5298, #6dd5fa, #2980b9);
  background-size: 400% 400%;
  animation: gradient 20s ease infinite;
}
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

Add Particles.js for extra flair:

```html
<div id="particles-js"></div>
<script src="https://cdn.jsdelivr.net/npm/particles.js"></script>
<script>
  particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('Particles.js loaded');
  });
</script>
```

---

## 📂 Repository Structure

```plaintext
├── index.html           # Home & Projects
├── about.html           # About & Skills
├── experience.html      # Work Timeline
├── contact.html         # Contact & CV
├── assets/              # CSS, JS, images, PDF
│   ├── css/             # Stylesheets
│   ├── js/              # Scripts
│   └── images/          # Photos & icons
├── cv/                  # Resume PDF
└── README.md            # This document
```

---

## 💻 Getting Started

1. **Clone the repo**:

   ```bash
   git clone https://github.com/CSwebD/cris-ai.com.git
   cd cris-ai.com
   ```
2. **Serve locally**:

   ```bash
   npx serve .
   ```
3. **Deploy** via Netlify by connecting to this repo and pushing to `main`.

---

## 🤝 Contributing

Contributions are welcome! Fork the repo, create a branch named **feature/your-feature**, and submit a pull request.

---

## 📄 License

*© 2025 Cristian Sclifos*
Licensed under the [MIT License](LICENSE).
