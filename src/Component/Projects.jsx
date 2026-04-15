import "../Component/Projects.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Projects() {
  const [openCard, setOpenCard] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="projects">
      <button className="back-btn" onClick={() => navigate("/")}>
  ⬅ Back to Home
</button>
      <h1 className="projects-title">My Projects 🚀</h1>
      <p className="projects-subtitle">
        Some of the work I’ve built using Full Stack Development.
      </p>

      <div className="projects-grid">

        {/* PROJECT 1 */}
        <div className="project-card">
          <h2>Super Admin System</h2>

          <p>
            A full-stack Society Management System built using Spring Boot, React, and SQL.
            Users can create societies, assign admins via email, and manage roles securely.
          </p>

          {openCard === "super" && (
            <p>
              Super Admin controls access using JWT token authentication and authorizes admin-level permissions.
            </p>
          )}

          <p className="tech">Spring Boot • React • SQL • JWT • REST API</p>

          <a
            href="https://superadmin.devaccounts.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            🔗 Live Demo
          </a>

          <button
            className="see-more-btn"
            onClick={() =>
              setOpenCard(openCard === "super" ? null : "super")
            }
          >
            {openCard === "super" ? "⬆ See Less" : "⬇ See More"}
          </button>
        </div>

        {/* PROJECT 2 */}
        <div className="project-card">
          <h2>Admin CRM System</h2>

          <p>
            A powerful full-stack CRM system built using Spring Boot, React, and SQL.
            Admin users are created by Super Admin with secure JWT authentication.
          </p>

          {openCard === "admin" && (
            <>
              <p>
                Admin can manage society operations including member details, complaints,
                NOC requests, parking records, receipts, bills, and service management.
              </p>

              <p>
                Supports Excel file upload for bulk data entry and automated system-generated
                billing, receipts, opening balances, and ledger management.
              </p>
            </>
          )}

          <p className="tech">
            Spring Boot • React • SQL • JWT Authentication • Excel Upload • REST API
          </p>

          <a
            href="https://admin.devaccounts.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            🔗 Live Admin Panel
          </a>

          <button
            className="see-more-btn"
            onClick={() =>
              setOpenCard(openCard === "admin" ? null : "admin")
            }
          >
            {openCard === "admin" ? "⬆ See Less" : "⬇ See More"}
          </button>
        </div>

        {/* PROJECT 3 */}
        <div className="project-card">
          <h2>Admin CRM System (Web + Mobile App)</h2>

          <p>
            A complete Society Management CRM system built using Spring Boot, React, and SQL
            with a dedicated mobile application for users.
          </p>

          {openCard === "mobile" && (
            <>
              <p>
                The system is fully role-based with Super Admin, Admin, Employee, Security Guard,
                and Member/User roles with JWT and OTP authentication.
              </p>

              <p>
                Mobile application allows users to view receipts, ledgers, raise complaints,
                request NOC, upload documents, and give ratings.
              </p>
            </>
          )}

          <p className="tech">
            Spring Boot • React • SQL • Android (APK) • JWT • OTP Authentication • REST API • Role-Based Access Control
          </p>

          <a
            href="https://admin.devaccounts.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            🔗 Admin Panel
          </a>

          <button
            className="see-more-btn"
            onClick={() =>
              setOpenCard(openCard === "mobile" ? null : "mobile")
            }
          >
            {openCard === "mobile" ? "⬆ See Less" : "⬇ See More"}
          </button>
        </div>

        {/* PROJECT 4 */}
        <div className="project-card">
          <h2>Portfolio Website</h2>
          <p>
            Personal portfolio built with React showcasing skills, projects,
            and contact details with modern UI design.
          </p>
          <p className="tech">React • CSS • JavaScript</p>
        </div>
        {/* PROJECT 8 */}
<div className="project-card">
  <h2>Employee Dashboard</h2>

  <p>
    A full-stack employee dashboard application where employees can view and manage
    user information efficiently with a clean and responsive UI.
  </p>

  {openCard === "employee" && (
    <>
      <p>
        Employees can access complete user data, monitor records, and manage
        day-to-day operations through a centralized dashboard.
      </p>

      <p>
        Built with a focus on performance, usability, and real-time data handling
        using modern web technologies.
      </p>
    </>
  )}

  <p className="tech">
    React • JavaScript • REST API • Responsive UI
  </p>

  <a
    href="https://employee-dashboard-nkif-2fp1qtrgu-shiwangee1s-projects.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="project-btn"
  >
    🔗 Live Dashboard
  </a>

  <button
    className="see-more-btn"
    onClick={() =>
      setOpenCard(openCard === "employee" ? null : "employee")
    }
  >
    {openCard === "employee" ? "⬆ See Less" : "⬇ See More"}
  </button>
</div>

        {/* PROJECT 5 */}
        <div className="project-card">
          <h2>E-Commerce App</h2>
          <p>
            Full stack e-commerce application with product listing, cart system,
            and backend API integration.
          </p>
          <p className="tech">React • Node.js • MongoDB</p>
        </div>

        {/* PROJECT 6 */}
        <div className="project-card">
          <h2>Mobile App UI</h2>
          <p>
            Designed mobile-friendly UI for booking and service application
            with responsive layout.
          </p>
          <p className="tech">React Native • UI/UX</p>
        </div>

        {/* PROJECT 7 */}
        <div className="project-card">
          <h2>School Management System</h2>
          <p>
            Java-based full stack system for managing students, attendance,
            and results.
          </p>
          <p className="tech">Java • JDBC • MySQL</p>
        </div>

      </div>
    </div>
  );
}

export default Projects;