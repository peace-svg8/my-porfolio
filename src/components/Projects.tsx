import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Solaris Nigeria",
    description: "A solar energy services website built for Nigeria, presenting clean power solutions with a polished design, service highlights, and easy contact access.",
    tech: ["TypeScript", "Tailwind CSS"],
    image: "/solaris.png",
    liveUrl: "https://solaris-peach-eight.vercel.app/",
    githubUrl: "https://github.com/peace-svg8/solaris"
  },
  {
    title: "Savory Spot",
    description: "A modern restaurant landing page for Savory Spot in Sapele, featuring a bold menu showcase, order call to action, and mouthwatering visuals.",
    tech: ["TypeScript", "Tailwind CSS", "Node.js"],
    image: "/savory-spot.png",
    liveUrl: "https://savory-spot-six.vercel.app/",
    githubUrl: "https://github.com/peace-svg8/savory-spot"
  },
  {
    title: "NaijaWeather",
    description: "A weather app for Nigeria with live forecasts, location search, and API-powered hourly updates in a polished glassmorphism UI.",
    tech: ["TypeScript", "Tailwind CSS", "Node.js"],
    image: "/naija-weather.png",
    liveUrl: "https://weatherapp-delta-pink.vercel.app/",
    githubUrl: "https://github.com/peace-svg8/weatherapp"
  },
  {
    title: "Clipboard Landing Page",
    description: "A sleek landing page that highlights product value, strong calls to action, and a modern visual hierarchy for fast conversions.",
    tech: ["HTML", "CSS"],
    image: "/landing-page.png",
    liveUrl: "https://landing-page-rlre.vercel.app/",
    githubUrl: "https://github.com/peace-svg8/landing-page"
  },
  {
    title: "Luxury Crown Wigs",
    description: "A premium e-commerce platform offering high-quality human hair and synthetic wigs. Features an elegant design, seamless shopping experience, and nationwide delivery.",
    tech: ["TypeScript", "Tailwind CSS", "Node.js"],
    image: "/luxury-crown.png",
    liveUrl: "https://luxury-crown-wigs.vercel.app/",
    githubUrl: "https://github.com/peace-svg8/luxury-crown-wigs"
  },
  {
    title: "Currency Converter and Exchange Rates",
    description: "A user-friendly currency converter app that fetches real-time exchange rates using APIs, built with TypeScript and Tailwind CSS for a sleek interface.",
    tech: ["TypeScript", "Tailwind CSS", "API"],
    image: "/currency-converter.png",
    liveUrl: "https://xchange-five-omega.vercel.app/",
    githubUrl: "https://github.com/peace-svg8/xchange"
  },
  {
    title: "Job Application Tracker",
    description: "A comprehensive job application tracking tool that helps job seekers organize, monitor, and manage their applications with ease, keeping track of deadlines and opportunities in one place.",
    tech: ["TypeScript", "Tailwind CSS"],
    image: "/careerflow.png",
    liveUrl: "https://careerflow-black.vercel.app/",
    githubUrl: "https://github.com/peace-svg8/careerflow"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            A selection of projects that showcase clean interfaces, real-time data, and modern web experiences — from solar solutions to weather dashboards and restaurant sites.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/10 transition-colors" />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 max-h-[3.6rem] overflow-hidden">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-4">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                  >
                    Live Demo <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center text-sm font-semibold text-slate-600 hover:text-slate-900"
                  >
                    GitHub <Github className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
