import "./style.css";
import { useState, useEffect } from "react";

function FolderPanel({ title, items, onClose }) {
  return (
    <div className={`folder ${open ? "open-folder" : ""}`}>
      <div className="folder-panel-header">
        <h2>{title}</h2>
        <button onClick={onClose} className="close-btn">✖</button>

      </div>
      <div className="folder-panel">
        {title === "Projects" && (
          <div className="projects-list">
            {items.map((p, i) => (
              <div key={i} className="project-card">
                <h3>{p.title}</h3>
                {p.info && <p>{p.info}</p>}
                {p.link && <p><b>Link:</b>             <a href={p.link} target="_blank" rel="noreferrer">
                  {p.link}            </a>

                </p>}
              </div>
            ))}
          </div>
        )}

        {title === "Skills" && (
          <ul className="skills-list">
            {items.map((s, i) => (
              <li key={i} className={s.isHeader ? "skills-header" : "skills-item"}>
                {s.title || s}
              </li>
            ))}
          </ul>
        )}

        {title === "Experience" && (
          <div className="experience-list">
            {items.map((e, i) => (
              <div key={i} className="skills-item">
                <h3>{e.title}</h3>
                {e.info && <p>{e.info}</p>}
                {e.duration && <p>{e.duration}</p>}
              </div>
            ))}
          </div>
        )}


        {/* Default fallback */}
        {title !== "Projects" && title !== "Skills" && title !== "Experience" && (
          <ul className="list">
            {items.map((item, i) => (
              <li key={i}>
                {item.title}: {item.info}
              </li>))}
          </ul>
        )}
      </div>
    </div>
  );
}


export default function App() {
  const profile = {
    name: "Emine Zülal Araç",
    role: "Software Engineer • AI & Data",
    location: "Istanbul, TR",
    email: "eminezulalarac@gmail.com",
  };

  const images = ["/welcome.png", "/el.png"];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);


  const [activeFolder, setActiveFolder] = useState(null);

  const projects = [
    {
      title: "Customs Shield",
      info: "I did this",
      link: ["https://github.com/earac21/customs-shield"]
    },
    {
      title: "AutoVerify Ansible",
      info: "jksc",
      link: ["https://github.com/earac21/customs-shield"]
    },
    {
      title: "Portfolio Site",
      info: "I did this",
      link: ["https://github.com/earac21/customs-shield"]
    }
  ];
  const experience = [
    { title: "ATEZ Software Technologies - AI & Data Analytics", info: "Classifying customs documents and extracting valuable data using artificial intelligence. Developing algorithms for accurate document categorization and employ machine learning techniques to enhance data retrieval efficiency. Expanding my understanding of AI applications while honing my data processing skills.", duration: "3years" },
    { title: "Freelance", info: "akjnds", duration: "2 years" },
  ];

  const extracurriculars = [
    { title: "Vice President, Science Club" },
    { title: "Accountant, KU IEEE" },
    { title: "Team member, Koç University Basketball Team" },
    { title: "Team member, KBK Basketball Team" }
  ]

  const communication = [
    {
      title: "Address",
      info: "Istanbul, Turkey"
    },
    {
      title: "Email",
      info: "eminezulalarac@gmail.com"
    },
    {
      title: "Linkedin",
      info: (
        <a
          href="https://www.linkedin.com/in/emine-zülal-araç-a9409b219"
          target="_blank"
          rel="noreferrer"
        >
          Visit my profile
        </a>
      )
    },
    {
      title: "Resume",
      info: <a href="/CV GUNCEL.pdf" target="_blank" rel="noreferrer">
        <img src="/CV GUNCEL.png" alt="Download" style={{ width: "95%", maxWidth: "800px" }} />
      </a>
    },

  ]


  const skills = [
    { title: "Programming Languages:", isHeader: true },
    { title: "Python" },
    { title: "Java" },
    { title: "C" },
    { title: "NumPy" },
    { title: "SQL" },
    { title: "R" },
    { title: "React" },
    { title: "TypeScript" },
    { title: "Docker" },
  ];

  const getItems = () => {
    if (activeFolder === "Projects") return projects;
    if (activeFolder === "Experience") return experience;
    if (activeFolder === "Skills") return skills;
    if (activeFolder === "Github") return github;
    if (activeFolder === "Extracurriculars") return extracurriculars;
    if (activeFolder === "Communication") return communication;
    return [];
  };

  return (
    <div className="layout">
      {/* Sol profil */}
      <aside className="sidebar">
        <h1 className="pixel-text">{profile.name}</h1>
        <h2>{profile.role}</h2>
        <img className="profile-pic" src={images[currentIndex]} alt="Profile" />
        <ul className="card__list">
          <li>{profile.location}</li>
          <li>Computer Engineering, Koç University</li>
          <li>Data/AI • DevOps • Frontend</li>
          <li><a href="/CV GUNCEL.pdf" download>Download resume</a></li>
        </ul>
      </aside>

      {/* Sağ taraf */}
      <main className="content">
        {!activeFolder ? (
          <>
            <div className="folder" onClick={() => setActiveFolder("Projects")}>
              <img src="/file.png" className="folder-big-icon" alt="Projects" />
              <div className="folder-label">Projects</div>
            </div>
            <div className="folder" onClick={() => setActiveFolder("Experience")}>
              <img src="/file.png" className="folder-big-icon" alt="Experience" />
              <div className="folder-label">Experience</div>
            </div>
            <div className="folder" onClick={() => setActiveFolder("Skills")}>
              <img src="/file.png" className="folder-big-icon" alt="Skills" />
              <div className="folder-label">Skills</div>
            </div>
            <div
              className="folder"
              onClick={() => window.open("https://github.com/earac21", "_blank")}
            >
              <img src="/file.png" className="folder-big-icon" alt="GitHub" />
              <div className="folder-label">GitHub</div>
            </div>
            <div className="folder" onClick={() => setActiveFolder("Extracurriculars")}>
              <img src="/file.png" className="folder-big-icon" alt="Extracurriculars" />
              <div className="folder-label">Extracurriculars</div>
            </div>
            <div className="folder" onClick={() => setActiveFolder("Communication")}>
              <img src="/file.png" className="folder-big-icon" alt="Communication" />
              <div className="folder-label">Communication</div>
            </div>
          </>
        ) : (
          <FolderPanel
            title={activeFolder}
            items={getItems()}
            onClose={() => setActiveFolder(null)}
          />
        )}
      </main>
    </div>
  );
}
