import { motion } from "framer-motion";

function Projects() {

const projects = [
    {
      title: "AI Voice Assistant",
      description: "Python-based assistant with speech-to-text, text-to-speech, and Gemini AI integration; deployed via Flask.",
      image: "/Aichatbot.png",
      link: "https://github.com/Rahul-manjhi"
    },
    {
      title: "Full-Stack Todo App",
      description: "Built with Spring Boot (Java), REST APIs, and a JavaScript frontend.",
      image: "/TodoApp.png",
      link: "https://github.com/Rahul-manjhi"
    },
    {
      title: "Employee Management System",
      description: "Full-stack web app with Node.js, Express, and React.",
      image: "/EmployeeManagement.png",
      link: "https://github.com/Rahul-manjhi"
    },
    {
      title: "Registration & Login System",
      description: "Built in C++ for secure user registration and login.",
      image: "/RegistrationLogin.png",
      link: "https://github.com/Rahul-manjhi"
    },
  ];


  // _________________-------------

  return (
    <section id="projects" className="py-20 bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-purple-400 mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-10 px-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
          >
               
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-purple-300">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg"
              >
                View Project
              </a>
            </div>
          

          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;



// __________________________-------------------------------

