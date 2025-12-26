// import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const socialLinks = [
//   { icon: Github, href: "https://github.com/bijitpaudel", label: "GitHub" },
//             { icon: Linkedin, href: "https://www.linkedin.com/in/bijit-paudel-55871a36b/https://www.linkedin.com/in/bijit-paudel-55871a36b/", label: "LinkedIn" },
//             { icon: Twitter, href: "https://x.com/BijitPaudel", label: "Twitter" },
//             { icon: Mail, href: "mailto:bijitpaudel@gmail.com", label: "Email" },
//   ];

//   return (
//     <footer className="py-8 px-4 border-t border-border bg-background">
//       <div className="container-custom">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//           {/* Logo/Name */}
//           <div className="font-display font-bold text-xl">
//           </div>

//           {/* Social Links */}
//           <div className="flex items-center gap-4">
//             {socialLinks.map((social) => (
//               <a
//                 key={social.label}
//                 href={social.href}
//                 className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-all duration-300"
//                 aria-label={social.label}
//               >
//                 <social.icon className="w-5 h-5" />
//               </a>
//             ))}
//           </div>

//           {/* Copyright */}
//           <p className="text-sm text-muted-foreground flex items-center gap-1">
//             © {currentYear}  ||  Built with <Heart className="w-4 h-4 text-primary" />
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border bg-background">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          {/* Professional footer message */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Bijit Paudel. Designed & Developed with passion for clean and modern web experiences.
          </p>

          {/* Optional subtle accent icon */}
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary animate-pulse" /> by Bijit Paudel
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
