import { motion } from "framer-motion";
function About() {

    return (<>
    <div className="mx-4 py-12 text-center scroll-mt-20" id="about">
    <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay:0.1 }}
            viewport={{ once: true }}
          >
        <h1  className="text-white text-4xl font-bold" >About</h1>
        <p className="text-gray-300 mt-4 leading-relaxed">
            I’m a passionate MERN Stack Developer who loves turning ideas into clean, functional, and visually engaging web applications.
            My journey started with curiosity — experimenting with HTML and JavaScript — and has grown into building fully responsive React interfaces, secure Express APIs, and scalable MongoDB solutions, all powered by efficient Node.js backends.
            I enjoy writing clean, maintainable code, and I’m always learning new technologies to sharpen my craft. Whether it’s optimizing performance, designing a smooth user experience, or solving complex backend challenges, I bring both creativity and logic to the table.
            When I’m not coding, you’ll find me exploring new tech trends, contributing to open-source projects, or sharing knowledge with other developers.
        </p>
        </motion.div>
        </div>
    </>)

}
export default About;