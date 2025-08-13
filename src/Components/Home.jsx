import My from "./../assets/loki.jpeg";
import Typewriter from "./Type";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <div className="home" id="home">
        {/* Text + Description */}
        <div className="discription">
          <Typewriter />
          <p className="text-gray-300 mt-4 leading-relaxed">
            My journey as a MERN Stack Developer began with curiosity and a passion for creating from scratch.
            Over time, I’ve built projects that unite design and functionality — delivering responsive React interfaces,
            secure Express APIs, and scalable MongoDB solutions, all powered by clean, efficient, and maintainable Node.js architecture.
          </p>

          {/* Social Links */}
          <div className="mt-3 mb-4 flex gap-4">
            <a
              href="https://www.linkedin.com/in/logesh-waran-mca"
              target="_blank"
              rel="noreferrer"
              className="text-2xl"
            >
              <i className="fa-brands fa-linkedin text-white hover:text-blue-900"></i>
            </a>
            <a
              href="https://github.com/Logeshwaran-M"
              target="_blank"
              rel="noreferrer"
              className="text-2xl"
            >
              <i className="fa-brands fa-github text-white hover:text-black hover:bg-white rounded-full"></i>
            </a>
            <a
              href="https://www.instagram.com/mr_.loki_.03/"
              target="_blank"
              rel="noreferrer"
              className="text-2xl"
            >
              <i className="fa-brands fa-instagram text-white hover:text-orange-700"></i>
            </a>
          </div>

          {/* Resume Download Button */}
          <a  href="/logesh.pdf"
            download="Logeshwaran_Resume.pdf"
            className="bg-green-500 hover:bg-green-600 hover:scale-105 active:scale-95 transform text-white font-semibold px-6 py-2 rounded transition duration-300 inline-flex items-center gap-2 mt-4">
            Download Resume
            <i className="fa-solid fa-download"></i>
            </a>
          
        </div>

        {/* Image */}
        <div>
          <img src={My} alt="Logeshwaran" className="image" />
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
