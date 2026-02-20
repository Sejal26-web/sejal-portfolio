import { useState } from "react";
import "./App.css";

function App() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="container">

      {/* HERO */}
      <section className="hero">
        <h1>Sejal Ranka</h1>

        <p className="tagline">
          Turning Complex Tech into Clear, Engaging Stories
        </p>

        <p className="hero-desc">
          Tech Content Creator skilled in building educational short-form videos
          on MERN, MongoDB, Apache Airflow, and AI concepts.
        </p>

        <a
          href="/resume.pdf"
          className="resume-btn"
          download
        >
          Download Resume
        </a>
      </section>

      {/* EXPERIENCE */}
      <section>
        <h2>Experience</h2>

        <div className="card">
          <h3>Bolt Byte — Tech Content Creator</h3>

          <p className="muted">2025 · Project Based</p>

          <ul>
            <li>Produced 20+ educational tech reels.</li>
            <li>Explained MERN stack, MongoDB, Apache Airflow, and AI basics.</li>
            <li>Handled scripting, editing, and publishing.</li>
            <li>Improved viewer engagement using structured hooks.</li>
          </ul>
        </div>
      </section>

      {/* WORK */}
      <section>
        <h2>Featured Work</h2>

        <button
          className="work-btn"
          onClick={() => setShowVideo(true)}
        >
          View My Work
        </button>

        {showVideo && (
          <div className="video-box">

            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Featured Tech Content"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            <button
              className="close-btn"
              onClick={() => setShowVideo(false)}
            >
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
          <span>MERN Fundamentals</span>
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

        <div className="links">

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

        </div>
      </section>

    </div>
  );
}

export default App;