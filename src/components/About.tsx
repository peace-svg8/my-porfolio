import { motion } from "motion/react";
import { Code2, Cpu, Globe2, Sparkles } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Code2 className="h-6 w-6 text-indigo-600" />,
      title: "Clean Code",
      description: "I write maintainable, scalable, and well-documented code."
    },
    {
      icon: <Sparkles className="h-6 w-6 text-indigo-600" />,
      title: "Modern UI/UX",
      description: "Focusing on intuitive design and smooth user interactions."
    },
    {
      icon: <Cpu className="h-6 w-6 text-indigo-600" />,
      title: "Performance",
      description: "Optimizing for speed and efficiency across all devices."
    },
    {
      icon: <Globe2 className="h-6 w-6 text-indigo-600" />,
      title: "Responsive",
      description: "Ensuring a seamless experience on mobile, tablet, and desktop."
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Who I am & What I do
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              I'm a developer who loves turning complex problems into simple, beautiful, and intuitive digital solutions. My journey in tech is driven by a constant desire to learn and create things that make an impact.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              What makes me different? I don't just write code; I think about the end-user experience, the business goals, and the long-term maintainability of every project I touch.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{feature.title}</h3>
                    <p className="text-sm text-slate-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
