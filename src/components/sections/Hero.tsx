import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30"
        style={{ background: "var(--gradient-glow)" }}
      />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-1.5 mb-8 text-xs font-medium tracking-wide rounded-full bg-secondary/80 border border-border/60 text-muted-foreground">
            Open to opportunities
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 tracking-tight leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Hi, I'm{" "}
          <span className="text-gradient">Bijit Poudel</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Full-Stack Developer crafting digital experiences with clean code and creative solutions
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button variant="hero" size="lg" asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex gap-3 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {[
            { icon: Github, href: "https://github.com/bijitpaudel", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/bijit-paudel-55871a36b/https://www.linkedin.com/in/bijit-paudel-55871a36b/", label: "LinkedIn" },
            { icon: Twitter, href: "https://x.com/BijitPaudel", label: "Twitter" },
            { icon: Mail, href: "mailto:bijitpaudel@gmail.com", label: "Email" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="p-2.5 rounded-full bg-secondary/40 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-secondary/60 transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
