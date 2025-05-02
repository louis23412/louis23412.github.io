
document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      title: "RESTful API Service",
      description: "A scalable and secure API built with Node.js and Express, featuring authentication and database integration.",
      image: "https://via.placeholder.com/300x200",
      link: "#"
    },
    {
      title: "Database Management Tool",
      description: "A CLI and web dashboard built with PostgreSQL and Sequelize for data modeling, migration, and analytics.",
      image: "https://via.placeholder.com/300x200",
      link: "#"
    },
    {
      title: "Authentication System",
      description: "JWT-based user authentication and role management system with Express and MongoDB.",
      image: "https://via.placeholder.com/300x200",
      link: "#"
    },
    {
      title: "Job Queue & Worker",
      description: "Queue system using Bull and Redis for handling background jobs like emails and notifications.",
      image: "https://via.placeholder.com/300x200",
      link: "#"
    }
  ];

  const projectList = document.querySelector(".project-list");

  if (projectList) {
    projectList.innerHTML = projects.map(project => `
      <div class="project">
        <img src="${project.image}" alt="Project Image" />
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
      </div>
    `).join('');
  }
});
