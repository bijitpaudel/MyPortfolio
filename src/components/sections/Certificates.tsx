// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import { Award, ExternalLink, Calendar } from "lucide-react";

// const certificates = [
//   {
//     title: "AWS Certified Solutions Architect",
//     issuer: "Amazon Web Services",
//     date: "2024",
//     credential: "#",
//     image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
//   },
//   {
//     title: "Google Professional Cloud Developer",
//     issuer: "Google Cloud",
//     date: "2023",
//     credential: "#",
//     image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=250&fit=crop",
//   },
//   {
//     title: "Meta Frontend Developer Professional",
//     issuer: "Meta",
//     date: "2023",
//     credential: "#",
//     image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
//   },
//   {
//     title: "MongoDB Certified Developer",
//     issuer: "MongoDB University",
//     date: "2022",
//     credential: "#",
//     image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
//   },
// ];

// const Certificates = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="certificates" className="section-padding bg-background" ref={ref}>
//       <div className="container-custom">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 25 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.5 }}
//         >
//           <span className="section-title">Credentials</span>
//           <h2 className="heading-md">
//             Certifications & <span className="text-gradient">Achievements</span>
//           </h2>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {certificates.map((cert, index) => (
//             <motion.div
//               key={cert.title}
//               className="group relative rounded-2xl overflow-hidden bg-gradient-card border border-border hover:border-primary/30 transition-all duration-500"
//               initial={{ opacity: 0, y: 40 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{ y: -5 }}
//             >
//               <div className="flex flex-col sm:flex-row">
//                 {/* Image */}
//                 <div className="relative w-full sm:w-40 h-32 sm:h-auto overflow-hidden">
//                   <img
//                     src={cert.image}
//                     alt={cert.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80" />
//                 </div>

//                 {/* Content */}
//                 <div className="flex-1 p-6">
//                   <div className="flex items-start justify-between gap-4">
//                     <div>
//                       <div className="flex items-center gap-2 mb-2">
//                         <Award className="w-5 h-5 text-primary" />
//                         <span className="text-xs text-muted-foreground flex items-center gap-1">
//                           <Calendar className="w-3 h-3" />
//                           {cert.date}
//                         </span>
//                       </div>
//                       <h3 className="font-display font-bold text-lg mb-1 group-hover:text-primary transition-colors">
//                         {cert.title}
//                       </h3>
//                       <p className="text-sm text-muted-foreground">{cert.issuer}</p>
//                     </div>
//                     <a
//                       href={cert.credential}
//                       className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
//                       aria-label="View credential"
//                     >
//                       <ExternalLink className="w-4 h-4" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certificates;
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificates" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-title">Credentials</span>
          <h2 className="heading-md">
            Certifications & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto">
            Exciting certifications and achievements are on the way! Stay tuned for updates.
          </p>
        </motion.div>

        {/* Coming Soon Message */}
        <motion.div
          className="flex flex-col items-center justify-center py-32 bg-gradient-to-r from-card via-card/50 to-card rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-8 h-8 text-primary animate-bounce" />
            <h3 className="text-2xl font-bold text-primary">Certificates Coming Soon 🚀</h3>
          </div>
          <p className="text-muted-foreground text-center max-w-md">
            I'm working on adding my certifications and achievements. Check back soon to see them here!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
