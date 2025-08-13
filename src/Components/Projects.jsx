import ecom from './../assets/projects/ecommerse.png'
import hms from './../assets/projects/hms.png'
import port from './../assets/projects/port.png'
function Projects() {
    const projectList = [
      {
        title: "Hospital Management System",
        description:
          "A MERN full-stack Hospital Management System with separate logins for doctors, nurses, and patients, providing secure access to patient details",
        image:hms,
        link: "#",
      },
      {
        title: "Portfolio Website",
        description:
          "A personal portfolio website built with React and Tailwind CSS, showcasing projects and skills.",
        image:port,
        link: "#",
      },
      {
        title: "E-Commerce App",
        description:
          "Full-stack MERN e-commerce application with user authentication, product management, and payment integration.",
        image: ecom,
        link: "#",
      }
     
    ];
  
    return (
      <section className="projects-section bg-gray-950 text-white py-12 px-8 py-12 scroll-mt-20" id='projects' >
        <h2 className="text-4xl font-bold mb-6 text-center" >Projects</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" >
          {projectList.map((project, index) => (
            <div
              key={index}
              className="project-card bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-green-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Projects;
  