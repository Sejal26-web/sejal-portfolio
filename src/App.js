import { useState } from "react";
import "./App.css";

function App() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="container">

      {/* HERO */}
      <section className="hero">
        <h1>Sejal Ranka</h1>

        {/* CHANGE TAGLINE HERE */}
        <p className="tagline">
          Turning Complex Tech into Clear, Engaging Stories
        </p>

        {/* CHANGE DESCRIPTION HERE */}
        <p className="hero-desc">
          Tech Content Creator with experience building educational short-form
          videos on MERN, MongoDB, Apache Airflow, and AI concepts.
        </p>

        {/* ADD RESUME PDF IN public FOLDER */}
        <a href="/resume.pdf" className="resume-btn" download>
          Download Resume
        </a>
      </section>

      {/* EXPERIENCE */}
      <section>
        <h2>Experience</h2>

        <div className="card">
          <h3>Bolt Byte — Tech Content Creator</h3>

          {/* CHANGE DATES */}
          <p className="muted">2025 · Project Based</p>

          <ul>
            <li>Created 20+ educational tech reels.</li>
            <li>Explained MERN, MongoDB, Apache Airflow, and AI basics.</li>
            <li>Handled scripting, editing, and publishing.</li>
            <li>Improved viewer engagement with structured hooks.</li>
          </ul>
        </div>
      </section>

      {/* WORK */}
      <section>
        <h2>Featured Work</h2>

        <button className="work-btn" onClick={() => setShowVideo(true)}>
          View My Work
        </button>

        {showVideo && (
          <div className="video-box">

            {/* REPLACE VIDEO LINK IF NEEDED */}
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Bolt Byte Work"
              allowFullScreen
            ></iframe>

            <button className="close-btn" onClick={() => setShowVideo(false)}>
              Close
            </button>

          </div>
        )}
      </section>

      {/* SKILLS */}
      <section>
        <h2>Skills</h2>

        <div className="skills-grid">
          <span>Tech Script Writing</span>
          <span>Video Editing</span>
          <span>MERN Basics</span>
          <span>MongoDB</span>
          <span>Node.js</span>
          <span>React</span>
          <span>AI & ML Basics</span>
        </div>
      </section>

      {/* CONTACT */}
      <section>
        <h2>Contact</h2>

        <p>Email: sejalranka26@gmail.com</p>

        {/* CHANGE LINKS */}
        <div className="links">
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
          <a href="#">Instagram</a>
        </div>
      </section>

    </div>
  );
}

export default App;