import "../Component/Contact.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Contact() {
    const [showMore, setShowMore] = useState(false);
    const navigate = useNavigate();
  return (
    <div className="contact">
      <div className="contact-left">
     <div className="back-btn-group">
  <button className="back-btn" onClick={() => navigate("/")}>
    ⬅ Back to Home
  </button>
<button className="back-btn" onClick={() => navigate("/experience")}>
  💼 Experience in Organization
</button>
</div>
   
        <h1 className="contact-title">Get In Touch</h1>
<p className="contact-subtitle">
  Full Stack Developer with 2 years of experience in web and mobile app development, building responsive and scalable applications.
</p>
        <div className="contact-info">
          <div className="info-item">📧 shivangeesingh117@gmail.com</div>
          <div className="info-item">📱 +91 9336914305</div>

          <a className="info-link" href="https://github.com/Shiwangee1?tab=repositories" target="_blank">
            https://github.com/Shiwangee1?tab=repositories
          </a>

          <a className="info-link" href="https://in.linkedin.com/in/shiwangee1" target="_blank">
            💼 LinkedIn / https://in.linkedin.com/in/shiwangee1
          </a>
        </div>
      </div>

      <div className="contact-right">
        <div className="contact-card">
          <h2>Let’s Connect</h2>
          <p>Open for freelance, internships & collaborations.</p>

          <a href="tel:+919336914035" className="contact-btn">
            Send Message 📞
          </a>

          {/* ✅ NEW BUTTON */}
        

          {/* ✅ EDUCATION SECTION */}
          <div id="education" className="education-box">
            <h3>🎓 Education</h3>
            <p><b>B.Tech (CSE)</b> - Computer Science Engineering</p>
            <p>📍 prasad institute of technology jaunpur</p>
            <p>📅 2016 - 2020</p>
            <p>💡 Skills: Web Development, React, JavaScript, HTML, CSS, JAVA , JDBC</p>
          </div>
         {showMore && (
              <div className="extra-education">
                <hr />

                <p><b>M.Tech (CSE)</b> - Computer Science Engineering</p>
                <p>📍 Veer Bahadur Singh Purvanchal University</p>
                <p>📅 2020 - Present (Ongoing)</p>
                <p>💡 Skills: Full Stack Development, React, JavaScript, HTML, CSS, Python, JDBC</p>
              </div>
            )}

            {/* TOGGLE BUTTON */}
            <button
              className="back-btn"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "⬆ See Less" : "⬇ See More"}
            </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;