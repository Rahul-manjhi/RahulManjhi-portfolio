import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-purple-900 via-gray-900 to-black">
      {/* Profile Image with Toss Effect */}
      <motion.img
        src="/profile.jpg"
        alt="Rahul Manjhi"
        className="w-40 h-40 rounded-full border-4 border-purple-500 shadow-lg mb-6"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: "spring" }}
        whileHover={{
          rotate: [0, 10, -10, 0],   // toss/tilt effect
          scale: 1.1,                // thoda zoom
          transition: { duration: 0.6 }
        }}
      />

      <motion.h1
        className="text-4xl md:text-6xl font-bold text-purple-400"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Rahul Manjhi
      </motion.h1>

      <motion.p
        className="mt-4 text-lg md:text-xl text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        Technical Support Executive | ERP Systems | Coder | Problem Solver
      </motion.p>

      <motion.p
        className="mt-2 text-gray-400 max-w-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        </motion.p>

      <motion.div
        className="mt-6 flex gap-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <a
          href="/resume.pdf"
          download
          className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg shadow-md"
        >
          Download Resume
        </a>
        <a
          href="#projects"
          className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg shadow-md"
        >
          View Projects
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
