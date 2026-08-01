import { motion } from "framer-motion";

function Skills() {
  const skills = [
    { category: "Programming Languages", items: ["Java", "Python", "C/C++"] },
    { category: "Web Technologies", items: ["HTML", "CSS", "Bootstrap", "JavaScript"] },
    { category: "Databases & Tools", items: ["SQL", "Excel", "Power BI"] },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800 text-center">
      <h2 className="text-3xl font-bold text-purple-400 mb-10">Technical Skills</h2>
      <div className="grid md:grid-cols-3 gap-10 px-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
          >
            <h3 className="text-xl font-semibold text-purple-300 mb-4">{skill.category}</h3>
            <ul className="space-y-2 text-gray-300">
              {skill.items.map((item, i) => (
                <li key={i} className="hover:text-purple-400">{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;




