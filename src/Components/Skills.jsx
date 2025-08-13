import { motion } from "framer-motion";
import html from './../assets/skills/html.png';
import css from './../assets/skills/css-3.png';
import js from './../assets/skills/js.png';
import react from './../assets/skills/React.png';
import Node from './../assets/skills/Node.js.png';
import mango from './../assets/skills/MongoDB.png';
import sql from './../assets/skills/database.png';
import boot from './../assets/skills/Bootstrap.png';
import tailwind from './../assets/skills/Tailwind CSS.png';
import redux from './../assets/skills/Redux.png';
import social from './../assets/skills/social.png';

function Skills() {
  const skills = [
    { img: html, name: 'HTML' },
    { img: css, name: 'CSS' },
    { img: js, name: 'JavaScript' },
    { img: react, name: 'React' },
    { img: tailwind, name: 'Tailwind CSS' },
    { img: boot, name: 'Bootstrap' },
    { img: redux, name: 'Redux' },
    { img: Node, name: 'Node.js' },
    { img: sql, name: 'SQL' },
    { img: mango, name: 'MongoDB' },
    { img: social, name: 'Git' },
  ];

  return (
    <div className="py-12 text-center scroll-mt-20"  id="skills">
      <h1 className="text-4xl text-white my-4 font-bold" >Skills</h1>
      <div className="grid grid-cols-4 md:grid-cols-5 gap-6 place-items-center" >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="w-16 h-16 object-contain transition-transform duration-300 hover:scale-110"
            />
            <span className="text-white mt-2 text-sm">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
