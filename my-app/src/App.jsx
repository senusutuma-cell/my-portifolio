// src/App.jsx
import { personalInfo, skillsData, projectsData } from "./data";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar brandName={personalInfo.name} />
      <main>
        <Hero info={personalInfo} />
        <About name={personalInfo.name} bio={personalInfo.bio} />
        <Skills skills={skillsData} />
        <Projects projects={projectsData} />
        <Contact contact={personalInfo} />
      </main>
      <Footer name={personalInfo.name} />
    </div>
  );
}

export default App;