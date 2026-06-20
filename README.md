<img src="./assets/logo.png" width="100" style="background:white;padding:10px;border-radius:8px;"/>

# English Janala

An interactive English vocabulary learning platform that helps users explore lesson-based vocabulary, search words instantly, listen to pronunciations, save favorite words, and learn through an intuitive and responsive interface.

---

## Overview

**English Janala** is a modern vocabulary learning web application built with **Vanilla JavaScript** and powered by REST APIs. The application organizes vocabulary into lessons, allowing users to browse words by level, search across the entire dictionary, hear correct English pronunciation, and view detailed word information inside an interactive modal.

The project focuses on **dynamic API integration**, **responsive UI design**, **DOM manipulation**, and **interactive user experience**, making vocabulary learning simple and engaging across all devices.

---

## Live Demo

🔗 **Live Site:** https://english-janala-vocabulary-web.netlify.app/

---

## Tech Stack

| Layer | Technology |
|--------|------------|
| Markup | HTML5 |
| Styling | CSS3, Tailwind CSS, DaisyUI |
| Logic | Vanilla JavaScript (ES6+) |
| API | Fetch API |
| Browser API | Web Speech API |
| Icons | Font Awesome |

---

## Features

- **Dynamic Lesson Loader** — Fetches all vocabulary lessons from the API and generates lesson buttons automatically.
- **Lesson-Based Vocabulary** — Displays vocabulary cards dynamically based on the selected lesson.
- **Active Lesson Indicator** — Highlights the currently selected lesson for a better user experience.
- **Vocabulary Details Modal** — Shows pronunciation, meaning, example sentence, and synonyms in a modal window.
- **Instant Search** — Search vocabulary across all lessons with real-time filtering.
- **Voice Pronunciation** — Pronounces English vocabulary using the browser's Speech Synthesis API.
- **Loading Spinner** — Displays a loading animation while fetching vocabulary from the API.
- **Graceful Error Handling** — Prevents displaying undefined or null values and provides meaningful fallback messages.
- **Fully Responsive Design** — Optimized for desktop, tablet, and mobile devices.

---

## Key Highlights

- Built a **fully dynamic vocabulary learning platform** using multiple REST API endpoints.
- Implemented **asynchronous data fetching** with the Fetch API and Promises.
- Designed an **interactive lesson navigation system** with active button state management.
- Integrated the **Web Speech API** for real-time English pronunciation.
- Developed a **dynamic search feature** that filters vocabulary instantly.
- Added **saved vocabulary functionality** for improved learning experience.
- Implemented **loading indicators** and graceful fallback UI for missing data.
- Achieved a **fully responsive layout** using Tailwind CSS Grid and Flex utilities.

---

## API Endpoints

| Purpose | Endpoint |
|----------|----------|
| Get All Levels | `https://openapi.programming-hero.com/api/levels/all` |
| Get Words by Level | `https://openapi.programming-hero.com/api/level/{id}` |
| Get Word Details | `https://openapi.programming-hero.com/api/word/{id}` |
| Get All Words | `https://openapi.programming-hero.com/api/words/all` |

---

## 📸 UI Screenshots

<table>
<tr>
<td align="center"><b>Home Page</b></td>
<td align="center"><b>Vocabulary Cards</b></td>
</tr>

<tr>
<td><img src="./screenshots/homepage.png" alt="Home Page"></td>
<td><img src="./screenshots/cards.png" alt="Vocabulary Cards"></td>
</tr>

<tr>
<td align="center"><b>Word Details Modal</b></td>
<td align="center"><b>Mobile Responsive View</b></td>
</tr>

<tr>
<td><img src="./screenshots/modal.png" alt="Word Details"></td>
<td><img src="./screenshots/mobile.png" alt="Mobile View"></td>
</tr>
</table>

---

## 📖 Usage Guide

| Action | Result |
|--------|--------|
| Click a Lesson button | Loads vocabulary for the selected lesson |
| Click the **Info** icon | Opens the vocabulary details modal |
| Click the **Speaker** icon | Pronounces the selected English word |
| Type in the search box | Instantly filters vocabulary |
| Select another lesson | Updates vocabulary and highlights the active lesson |

---

## Project Structure

```text
English-Janala/
│
├── assets/
├── screenshots/
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Future Improvements
- Implement user authentication (Sign Up, Login, and Logout)
- Store saved vocabulary using Local Storage
- Add autocomplete search suggestions
- Add an FAQ to explain app features.
- Implement dark mode
- Add pronunciation speed controls
- Introduce vocabulary quiz and practice mode
- Track user learning progress
- Add user authentication and cloud synchronization

---

## Author

**A S M Saim**

- GitHub: https://github.com/asm-saim
- LinkedIn: https://www.linkedin.com/in/asmsaim/

---

