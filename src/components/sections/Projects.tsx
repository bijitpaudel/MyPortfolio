// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import { ExternalLink, Github, Folder } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const projects = [
//   {
//     title: "E-Commerce Platform",
//     description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and an intuitive admin dashboard.",
//     tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
//     image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
//     github: "#",
//     live: "#",
//     featured: true,
//   },
//   {
//     title: "AI Task Manager",
//     description: "Smart task management app with AI-powered prioritization and natural language processing for task creation.",
//     tech: ["Next.js", "OpenAI", "Prisma", "TailwindCSS"],
//     image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
//     github: "#",
//     live: "#",
//     featured: true,
//   },
//   {
//     title: "Real-Time Chat App",
//     description: "Scalable messaging platform with WebSocket support, file sharing, and end-to-end encryption.",
//     tech: ["React", "Socket.io", "MongoDB", "Redis"],
//     image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&h=400&fit=crop",
//     github: "#",
//     live: "#",
//     featured: true,
//   },
//   {
//     title: "Portfolio Analytics",
//     description: "Dashboard for tracking investment portfolios with real-time market data and performance metrics.",
//     tech: ["Vue.js", "Python", "FastAPI", "Chart.js"],
//     github: "#",
//     live: "#",
//     featured: false,
//   },
//   {
//     title: "DevOps Pipeline Tool",
//     description: "CI/CD automation tool with GitHub integration and deployment monitoring.",
//     tech: ["Go", "Docker", "Kubernetes", "GitHub API"],
//     github: "#",
//     live: "#",
//     featured: false,
//   },
//   {
//     title: "Recipe Sharing Platform",
//     description: "Social platform for food enthusiasts to share and discover recipes.",
//     tech: ["React Native", "Firebase", "Algolia"],
//     github: "#",
//     live: "#",
//     featured: false,
//   },
// ];

// const Projects = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   const featuredProjects = projects.filter((p) => p.featured);
//   const otherProjects = projects.filter((p) => !p.featured);

//   return (
//     <section id="projects" className="section-padding bg-background" ref={ref}>
//       <div className="container-custom">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 25 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.5 }}
//         >
//           <span className="section-title">Portfolio</span>
//           <h2 className="heading-md mb-4">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <p className="text-muted-foreground text-base max-w-lg mx-auto">
//             A selection of projects I've built. Each one pushed me to learn something new.
//           </p>
//         </motion.div>

//         {/* Featured Projects */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
//           {featuredProjects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               className="group relative rounded-2xl overflow-hidden bg-gradient-card border border-border hover:border-primary/30 transition-all duration-500"
//               initial={{ opacity: 0, y: 40 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{ y: -5 }}
//             >
//               {/* Image */}
//               <div className="relative h-56 overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
//                   {project.title}
//                 </h3>
//                 <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
//                   {project.description}
//                 </p>

//                 {/* Tech stack */}
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tech.map((t) => (
//                     <span
//                       key={t}
//                       className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Links */}
//                 <div className="flex gap-3">
//                   <Button variant="ghost" size="sm" asChild>
//                     <a href={project.github} className="gap-2">
//                       <Github className="w-4 h-4" />
//                       Code
//                     </a>
//                   </Button>
//                   <Button variant="ghost" size="sm" asChild>
//                     <a href={project.live} className="gap-2">
//                       <ExternalLink className="w-4 h-4" />
//                       Live Demo
//                     </a>
//                   </Button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Other Projects */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           <h3 className="font-display text-2xl font-bold mb-8 text-center">
//             Other Noteworthy Projects
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {otherProjects.map((project, index) => (
//               <motion.div
//                 key={project.title}
//                 className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-500"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
//                 whileHover={{ y: -5 }}
//               >
//                 <div className="flex justify-between items-start mb-4">
//                   <Folder className="w-10 h-10 text-primary" />
//                   <div className="flex gap-3">
//                     <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
//                       <Github className="w-5 h-5" />
//                     </a>
//                     <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
//                       <ExternalLink className="w-5 h-5" />
//                     </a>
//                   </div>
//                 </div>
//                 <h4 className="font-display font-semibold mb-2 group-hover:text-primary transition-colors">
//                   {project.title}
//                 </h4>
//                 <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
//                   {project.description}
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tech.slice(0, 3).map((t) => (
//                     <span key={t} className="text-xs text-muted-foreground">
//                       {t}
//                     </span>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-md mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto">
            I'm working on new projects! Stay tuned for updates.
          </p>
        </motion.div>

        {/* Coming Soon Message */}
        <motion.div
          className="text-center py-32 bg-gradient-to-r from-card via-card/50 to-card rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-primary mb-2">Projects Coming Soon 🚀</h3>
          <p className="text-muted-foreground">
            Exciting projects are in the works! Check back later to see what I've been building.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
