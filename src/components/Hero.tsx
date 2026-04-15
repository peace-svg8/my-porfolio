import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const heroPrompt = [
    "You are given a task to integrate an existing React component in the codebase",
    "",
    "The codebase should support:",
    "- shadcn project structure",
    "- Tailwind CSS",
    "- Typescript",
    "",
    "If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.",
    "",
    "Determine the default path for components and styles.",
    "If default path for components is not /components/ui, provide instructions on why it's important to create this folder",
    "Copy-paste this component to /components/ui folder:",
    "```tsx",
    "quantam-mysh-hero.tsx",
    "import React from 'react';",
    "",
    "const HeroSection = () => {",
    "  return (",
    "    <div className=\"bg-black text-white w-full min-h-screen space-y-28 relative max-w-screen overflow-x-hidden font-sans\">",
    "      {/* Navbar */}",
    "      <nav className=\"flex justify-between items-center px-10 py-6 z-10\">",
    "        <div className=\"flex items-center\">",
    "          <span className=\"text-purple-600 text-2xl mr-1\">•</span>",
    "          <span className=\"text-xl font-semibold\">Mysh</span><span className=\"text-purple-600 text-2xl ml-1\">•</span>",
    "        </div>",
    "        <ul className=\"sm:flex space-x-8 text-sm bg-purple-500/10 py-1 rounded-full px-3 hidden\">",
    "          <li className=\"cursor-pointer hover:bg-purple-700 rounded-full p-2 px-3 font-thin\">Home</li>",
    "          <li className=\"cursor-pointer hover:bg-purple-700 rounded-full p-2 px-3 font-thin\">About</li>",
    "          <li className=\"cursor-pointer hover:bg-purple-700 rounded-full p-2 px-3 font-thin\">Portfolio</li>",
    "          <li className=\"cursor-pointer hover:bg-purple-700 rounded-full p-2 px-3 font-thin\">Contact</li>",
    "          <li className=\"cursor-pointer hover:bg-purple-700 rounded-full p-2 px-3 font-thin\">FAQ</li>",
    "        </ul>",
    "        <button className=\"bg-purple-600 text-white px-5 py-2 rounded-md text-sm font-medium\">Get In Touch</button>",
    "      </nav>",
    "",
    "      {/* Main Content */}",
    "      <div className=\"flex flex-col items-center text-center px-10 z-10\">",
    "        <div className=\"flex items-center bg-purple-900/20 border border-purple-600/50 rounded-full pl-2 pr-4 py-1 text-purple-400 text-xs mb-8 tracking-wider font-light\">",
    "          <span className=\"bg-purple-600 text-white px-3 py-1 rounded-full mr-2 text-xs font-light\">2025</span>",
    "          Next-Gen AI Studio",
    "        </div>",
    "        <h1 className=\"text-7xl font-bold leading-tight font-light\">",
    "          AI-Driven Success.",
    "        </h1>",
    "        <h1 className=\"text-7xl font-bold leading-tight mb-6 font-light \">",
    "          Redefining the Future.",
    "        </h1>",
    "        <p className=\"text-sm max-w-lg mb-2 font-light\">Creating latest solutions that redefine innovation.</p>",
    "        <p className=\"text-sm max-w-lg mb-8 font-light\">Stay ahead with AI-powered technology for the future.</p>",
    "        <div className=\"flex space-x-4 mb-16\">",
    "          <button className=\"bg-white text-black px-5 py-2 cursor-pointer hover:bg-purple-200 rounded-md text-sm \">Connect With Us</button>",
    "          <button className=\"bg-white/50  text-white px-5 py-2 cursor-pointer hover:bg-purple-600 rounded-md text-sm \">What is Mysh?</button>",
    "        </div>",
    "",
    "        {/* Infinite Moving Fading Carousel */}",
    "        <div className=\"w-full max-w-xl mx-auto overflow-hidden relative h-10 mb-20 z-10\">",
    "          <div className=\"flex animate-marquee whitespace-nowrap text-gray-400 text-xl\">",
    "            <span className=\"mx-6\">IPSUM</span>",
    "            <span className=\"mx-6\">∞</span>",
    "            <span className=\"mx-6\">MOOO</span>",
    "            {/* Duplicated for seamless loop */}",
    "            <span className=\"mx-6\">IPSUM</span>",
    "            <span className=\"mx-6\">∞</span>",
    "            <span className=\"mx-6\">MOOO</span>",
    "          </div>",
    "          {/* Fading gradients */}",
    "          <div className=\"pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-purple-900/10 to-transparent\"></div>",
    "          <div className=\"pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-purple-900/10 to-transparent\"></div>",
    "        </div>",
    "      </div>",
    "",
    "      {/* Gradient Glow */}",
    "      <div className=\"absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-purple-900/50 via-purple-600/20 to-transparent rounded-t-full opacity-80 blur-3xl\"></div>",
    "",
    "    </div>",
    "  );",
    "};",
    "",
    "export default HeroSection;",
    "",
    "demo.tsx",
    "import HeroSection from \"@/components/ui/quantam-mysh-hero\";",
    "",
    "export default function DemoOne() {",
    "  return <HeroSection />;",
    "}",
    "```",
    "",
    "Extend existing Tailwind 4 index.css with this code (or if project uses Tailwind 3, extend tailwind.config.js or globals.css):",
    "```css",
    "@import \"tailwindcss\";",
    "@import \"tw-animate-css\";",
    "",
    "@keyframes marquee {",
    "  0% {",
    "    transform: translateX(0);",
    "  }",
    "  100% {",
    "    transform: translateX(-50%);",
    "  }",
    "}",
    "```",
    "",
    "Implementation Guidelines",
    " 1. Analyze the component structure and identify all required dependencies",
    " 2. Review the component's argumens and state",
    " 3. Identify any required context providers or hooks and install them",
    " 4. Questions to Ask",
    " - What data/props will be passed to this component?",
    " - Are there any specific state management requirements?",
    " - Are there any required assets (images, icons, etc.)?",
    " - What is the expected responsive behavior?",
    " - What is the best place to use this component in the app?",
    "",
    "Steps to integrate",
    " 0. Copy paste all the code above in the correct directories",
    " 1. Install external dependencies",
    " 2. Fill image assets with Unsplash stock images you know exist",
    " 3. Use lucide-react icons for svgs or logos if component requires them",
  ].join("\n");
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold tracking-wide mb-6">
              Available for new opportunities
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
              Hi, I'm <span className="text-indigo-600">Peace</span> — I build fast, responsive, and modern web applications.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
              A passionate Frontend Developer specializing in building exceptional digital experiences that are functional, beautiful, and user-centric.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 group"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-all"
            >
              Let's Talk
            </a>
          </motion.div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50/95 p-6 text-slate-900 text-xs leading-5 overflow-auto max-h-[420px]">
            <pre className="whitespace-pre-wrap">
              {heroPrompt}
            </pre>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex items-center gap-6"
          >
            <a href="https://github.com/peace-svg8" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:amehinpeace@gmail.com" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
