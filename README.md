# PulseCheck 🩺

**"Stop guessing why your users leave."**

PulseCheck is a lightweight, non-intrusive feedback tool designed for small business owners who need to understand user friction without the complexity of heavy analytics suites.

## 🚀 The Product Goal
Most small businesses lose potential customers because they don't know where users are getting frustrated. PulseCheck captures "micro-feedback" via a smart-trigger widget, bridging the gap between user silence and actionable data.

## 🏗️ Project Roadmap
This project demonstrates a **Product Engineering** workflow, moving from a marketing vision to a functional technical onboarding.

- [x] **Phase 1: Marketing & UX** - Built a high-conversion landing page focused on user "pain points."
- [x] **Phase 2: The Feedback Engine** - Developed a Vanilla JS widget with scroll-depth triggers and celebratory micro-interactions (Canvas Confetti).
- [x] **Phase 3: Lead Capture & Onboarding** - Implemented a personalized setup flow using `localStorage` to pass user data across pages.
- [ ] **Phase 4: Data Persistence** - (Upcoming) Connecting to a backend API to save and visualize "Confusion Trends."

## 💡 Product Decisions
- **Lead Gen over Public Snippets:** Chose an email-first flow to build a customer database and create a more professional "SaaS-style" onboarding experience.
- **Contextual Triggers:** The widget is programmed to stay hidden until a 60% scroll threshold is met, ensuring we only ask for feedback from engaged users.
- **Decoupled Logic:** JavaScript is structured to check for DOM elements before execution, allowing for a lightweight, single-file script across multiple pages.

## 🛠️ Tech Stack
- **HTML5/CSS3:** Custom Glassmorphism UI, CSS Grid, and Flexbox for a responsive experience.
- **Vanilla JavaScript:** DOM manipulation, Scroll-tracking logic, and Browser Storage API.
- **Canvas-Confetti:** Integrated via CDN for enhanced user-response delight.

---
*Built by Salome Gathumbi — Building with purpose.*