import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "AI Voice Assistant",
      description: "Python-based assistant with speech-to-text, text-to-speech, and Gemini AI integration; deployed via Flask.",
      image: process.env.PUBLIC_URL + "/Aichatbot.png",
      // link: "https://github.com/Rahul-manjhi"
      link: "https://github.com/Rahul-manjhi/Beginner-level-python-chatbot-project"
    },
    {
      title: "Full-Stack Todo App",
      description: "Built with Spring Boot (Java), REST APIs, and a JavaScript frontend.",
      image: process.env.PUBLIC_URL + "/TodoApp.png",
      // link: "https://github.com/Rahul-manjhi"
      link: "https://github.com/Rahul-manjhi/Full-Stack-Todo-App"
    },
    {
      title: "Employee Management System",
      description: "Full-stack web app with Node.js, Express, and React.",
      image: process.env.PUBLIC_URL + "/EmployeeManagement.png",
      // link: "https://github.com/Rahul-manjhi"
      link:"https://github.com/Rahul-manjhi/Employee-Management-System"
    },
    {
      title: "Registration & Login System",
      description: "Built in C++ for secure user registration and login.",
      image: process.env.PUBLIC_URL + "/RegistrationLogin.png",
      // link: "https://github.com/Rahul-manjhi"
      link: "https://github.com/Rahul-manjhi"
    },
    {
      title: "Snake Game",
      description: "A full-stack web-based Cyberpunk Snake Game built using Node.js, Express, HTML5, CSS3, and JavaScript.",
      image: process.env.PUBLIC_URL + "/snake.png",
      // link: "https://github.com/Rahul-manjhi"
      link: "https://github.com/Rahul-manjhi/Snake-Game"
    },

    {
      title: "Library-Management-System",
      description: "A complete full-stack web application upgraded from a C++ console-based program into a modern web interface powered by Node.js, Express, and SQLite.",
      image: process.env.PUBLIC_URL + "/library.png",
      // link: "https://github.com/Rahul-manjhi"
      link: "https://github.com/Rahul-manjhi/Library-Management-System"
    },

  ];

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
            {/* 👇 Image size updated here */}
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-32 h-32 object-cover mx-auto mt-6 rounded-md"
            />
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
