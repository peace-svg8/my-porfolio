import { motion } from "motion/react";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Motion"]
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "GitHub", "VS Code", "Vite", "npm/yarn", "Figma"]
  },
  {
    title: "APIs & Backend",
    skills: ["Fetch API", "REST APIs", "Node.js", "Express", "Firebase"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            My Skillset
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            The technologies and tools I use to bring ideas to life.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
                <span className="w-8 h-1 bg-indigo-600 rounded-full mr-3" />
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (groupIndex * 0.1) + (skillIndex * 0.05) }}
                    className="px-4 py-2 rounded-lg bg-slate-50 text-slate-700 text-sm font-medium border border-slate-100 hover:border-indigo-200 hover:text-indigo-600 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
