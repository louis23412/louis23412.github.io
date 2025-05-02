
document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      title: "Samle Project 1",
      description: "Coming Soon",
      image: "https://placehold.co/300x200",
      link: "#"
    },
    {
      title: "Samle Project 2",
      description: "Coming Soon",
      image: "https://placehold.co/300x200",
      link: "#"
    },
    {
      title: "Samle Project 3",
      description: "Coming Soon",
      image: "https://placehold.co/300x200",
      link: "#"
    },
    {
      title: "Samle Project 4",
      description: "Coming Soon",
      image: "https://placehold.co/300x200",
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
