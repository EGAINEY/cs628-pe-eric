import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <header className="header">
        <h1>Eric Gainey</h1>
        <p>3156 Main Street, Tacoma WA USA, 98445 | (253) 456-7890 | gainey.eric@cityuniversity.edu</p>
      </header>

      <section className="section">
        <h2>Education</h2>
        <div className="education">
          <h3>Master of Science in Computer Science</h3>
          <p>City University of Seattle, Seattle WA | May 2025</p>
          <p>GPA: 4.0</p>

          <h3>Bachelor of Science in Applied Computing</h3>
          <p>City University of Seattle, Seattle WA | Dec 2019</p>
          <p>GPA: 3.8</p>
        </div>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <div className="skills">
          <p>Programming languages: C#, Java, Python, Javascript</p>
          <p>Frameworks and libraries: .NET Core, Entity Framework, NUnit, React, Node</p>
          <p>Database systems: T-SQL, MySQL, SQLite</p>
          <p>Operating Systems: Windows, Linux</p>
          <p>Version control: Git, TFS</p>
        </div>
      </section>

      <section className="section">
        <h2>Work Experience</h2>
        <div className="experience">
          <h3>Software Engineer II</h3>
          <p>MultiCare Health System, Tacoma WA | April 2022 - Present</p>
          <p>Built and maintained advanced enterprise web applications.</p>
          <p>Cloud development in Azure to assist in advanced multi-organization data integrations.</p>

          <h3>Software Engineer I</h3>
          <p>MultiCare Health System, Tacoma WA | Feb 2020 - April 2022</p>
          <p>Built and maintained mid-tier enterprise web applications.</p>

          <h3>Software Engineer Intern II</h3>
          <p>MultiCare Health System, Tacoma WA | Aug 2018 - Jan 2020</p>
          <p>Built and maintained low-tier enterprise web applications.</p>
          <p>Built and maintained scheduled tasks to automate business tasks.</p>
        </div>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="projects">
          <h3>Personal Github</h3>
          <p>Github profile containing various projects:</p>
          <p>Link:{" "}
            <a href="https://github.com/EGAINEY" target="_blank" rel="noopener noreferrer">
                https://github.com/EGAINEY
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Resume;