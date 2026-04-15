import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex items-center gap-6"
          >
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
