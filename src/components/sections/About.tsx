import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Turning complex challenges into elegant, simple solutions",
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Constantly evolving with the latest technologies and best practices",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative mindset with excellent communication skills",
    },
  ];

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-title">About Me</span>
          <h2 className="heading-md mb-6">
            Passionate about building{" "}
            <span className="text-gradient">exceptional</span> digital products
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            I’m a passionate app developer, dedicated to crafting beautiful and functional digital experiences. 
            With a strong foundation in both frontend and backend technologies, 
            I’m working toward becoming a full-stack developer, bringing ideas to life through clean code and thoughtful design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              className="group p-5 rounded-xl bg-gradient-card border border-border/60 hover:border-primary/25 transition-all duration-400"
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 * index }}
              whileHover={{ y: -3 }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-300">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-base font-medium mb-1.5">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
