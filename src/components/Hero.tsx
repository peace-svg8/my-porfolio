import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto w-full pt-40 px-6 md:px-8 min-h-[calc(100vh-40px)] overflow-hidden bg-[linear-gradient(to_bottom,#fff,#f8f8f8_55%,#e8e8e8_95%)] rounded-b-[2rem]"
    >
      <div
        className="absolute inset-0 opacity-80 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_5rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
      />
      <div
        className="absolute left-1/2 top-[calc(100%-90px)] lg:top-[calc(100%-150px)] h-[450px] w-[650px] sm:h-[500px] sm:w-[900px] lg:h-[700px] lg:w-[1200px] -translate-x-1/2 rounded-full border border-[#B48CDE]/20 bg-white opacity-80 blur-3xl"
      />
      <div className="absolute top-16 right-10 hidden sm:block h-3 w-3 rounded-full bg-yellow-400" />
      <div className="absolute top-28 right-28 hidden sm:block h-2 w-2 rounded-sm bg-purple-400 rotate-45" />
      <div className="absolute top-36 right-16 hidden sm:block h-6 w-1 bg-purple-500" />
      <div className="absolute top-44 right-24 hidden sm:block h-1 w-6 bg-yellow-400" />

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
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
              Hi, I'm <span className="text-indigo-600">Peace</span> — I build fast, responsive, and modern web applications.
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl">
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex items-center gap-6">
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
