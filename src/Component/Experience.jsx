import "../Component/Experience.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Experience() {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="experience">
         <button className="back-btn" onClick={() => navigate("/")}>
    ⬅ Back to Home
  </button>

      <h1 className="exp-title">💼 Experience</h1>

      {/* SINGLE CARD */}
      <div className="exp-card">

      <h2>Junior Software Engineer (Intern)</h2>

        <h3>Mobilestyx Consulting Private Limited</h3>

        <p className="duration">📅 2023 - 2024</p>

        {/* SHORT INFO ALWAYS VISIBLE */}
        <p>
          Worked as a Junior Software Engineer focusing on backend development,
          web applications, and database management.
        </p>

        {/* EXPANDED CONTENT */}
        {showMore && (
          <>
            <p>
              Developed and maintained enterprise applications using Java, Spring Boot,
              JDBC, JavaScript, and Thymeleaf.
            </p>

            <p>
              Collaborated with team to design scalable backend systems and improve UI functionality.
            </p>

            <hr />
               <h2>Key Responsibilities</h2>
            <h2>HR Management System</h2>

            <p>
              A complete HR Management System built for tracking employee attendance,
              leave management, and workforce records.
            </p>

            <p>
              The system allows employees to apply for leave, managers to approve/reject requests,
              and HR to monitor attendance records in real time.
            </p>

            <p>
              Implemented secure authentication and database-driven workflows using Spring Boot
              and JDBC.
            </p>
          </>
        )}

        <p className="tech">
          Java • Spring Boot • JDBC • JavaScript • Thymeleaf • MySQL
        </p>

        {/* TOGGLE BUTTON */}
        <button
          className="see-more-btn"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "⬆ See Less" : "⬇ See More"}
        </button>

      </div>
      <div className="exp-card">

        <h2>Full Stack Developer</h2>

        <h3>Eduhubspot</h3>

        <p className="duration">📅 2024 - 2025</p>

        {/* SHORT INFO ALWAYS VISIBLE */}
       <p>
  Worked as a Full Stack Developer specializing in Spring Boot for backend API development,
  Angular for frontend UI development, and React Native CLI for mobile application development.
</p>

        {/* EXPANDED CONTENT */}
       {showMore && (
  <>
    <p>
      Designed and developed responsive UI screens and scalable backend APIs for enterprise applications.
    </p>

    <p>
      Built Admin CRM systems, blog management platforms, and mobile applications with clean architecture and reusable components.
    </p>

    <p>
      Worked on RESTful API development using Spring Boot and integrated frontend applications using Angular and React Native CLI.
    </p>

    <p>
      Collaborated with teams to improve UI/UX, performance optimization, and system scalability.
    </p>

    <hr />

    <h2>Key Responsibilities</h2>

    <p>
      • API development using Spring Boot  
      • UI development using Angular  
      • Mobile app development using React Native CLI  
      • Admin CRM & Blog system development  
      • Database design and integration  
    </p>
  </>
)}

        <p className="tech">
          Java • Spring Boot • Angular • JavaScript • TypeScript• MySQL
        </p>

        {/* TOGGLE BUTTON */}
        <button
          className="see-more-btn"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "⬆ See Less" : "⬇ See More"}
        </button>

      </div>
       <div className="exp-card">

        <h2>Full Stack Developer</h2>

        <h3>ZAP Solution</h3>

        <p className="duration">📅 2024 - Present</p>

        {/* SHORT DESCRIPTION */}
        <p>
          Worked as a Full Stack Developer responsible for designing, developing,
          and deploying web and mobile applications independently.
        </p>

        {/* EXPANDED CONTENT */}
        {showMore && (
          <>
            <p>
              Built and deployed complete role-based systems including Super Admin,
              Admin, Member, and Security Guard modules with secure access control.
            </p>

            <p>
              Developed backend APIs using Spring Boot and managed frontend using React
              and mobile applications for user access and operations.
            </p>

            <p>
              Implemented Excel bulk upload functionality for members, billing, and data operations.
            </p>

            <p>
              Handled full project lifecycle including development, database design,
              and production hosting independently.
            </p>

            <hr />

            <h2>Key Features Worked On</h2>

            <p>
              • Role-based authentication system (Super Admin → Admin → Member → Security Guard)  
              • Excel bulk upload & data processing  
              • Admin CRM system development  
              • Mobile application integration  
              • Hosting & deployment management  
              • Billing, ledger & complaint management system  
            </p>
          </>
        )}

        <p className="tech">
          Spring Boot • React • MySQL • JWT • Excel Upload • Mobile App • Hosting
        </p>

        {/* TOGGLE BUTTON */}
        <button
          className="see-more-btn"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "⬆ See Less" : "⬇ See More"}
        </button>

      </div>
    </div>
  );
}

export default Experience;