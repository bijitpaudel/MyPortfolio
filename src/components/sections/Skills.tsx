import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React", category: "Frontend" },
  { name: "Python", category: "Language" },
  { name: "Figma", category: "Design" },
  { name: "Java", category: "Language" },
  { name: "C", category: "Language" },
  { name: "HTML/CSS/JS", category: "Frontend" },
  { name: "Kotlin", category: "Language" },
];

const techIcons: Record<string, string> = {
  React: "⚛️",
  Python: "🐍",
  Figma: "🎯",
  Java: "☕",
  C: "💻",
  "HTML/CSS/JS": "🌐",
  Kotlin: "🅺",
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-card relative" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-title">Skills & Technologies</span>
          <h2 className="heading-md">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative p-4 rounded-xl bg-gradient-card border border-border/60 hover:border-primary/25 transition-all duration-400 overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-xl">{techIcons[skill.name]}</span>
                <div>
                  <h3 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-[11px] text-muted-foreground">{skill.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
