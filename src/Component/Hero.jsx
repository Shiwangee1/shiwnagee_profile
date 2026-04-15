import "./Hero.css";
import { useNavigate } from "react-router-dom";
import profileImg from "../Image/shiwangeeprofile.jpeg";

export default function Hero() {
     const navigate = useNavigate();

  return (
    <section className="hero">
      {/* LEFT SIDE */}
      <div className="hero-left">
        <div className="badge">
          <span className="dot"></span>
          AVAILABLE FOR WORK
        </div>

        <h1 className="title">Shiwangee Singh</h1>

        <h2 className="subtitle">Full Stack Developer</h2>

        <p className="desc">
          I design and build modern, scalable web & mobile applications using
          cutting-edge technologies.
        </p>

        <div className="skills">
          <span>React</span>
          <span>React Native</span>
          <span>Angular</span>
          <span>Spring Boot</span>
          <span>SQL</span>
        </div>

        <div className="buttons">
        <button className="primary" onClick={() => navigate("/project")}>
  View Projects <span>→</span>
</button>

         <button className="secondary" onClick={() => navigate("/contact")}>
        ✉ Contact Me
      </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hero-right">
  <div className="circle">
    <img src={profileImg} alt="Profile" className="profile-img" />
  </div>
</div>
    </section>
  );
}