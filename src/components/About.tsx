import { motion } from "motion/react";
import { Code2, Cpu, Globe2, Sparkles } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Code2 className="h-6 w-6 text-indigo-600" />,
      title: "Clean Code",
      description: "Build maintainable, scalable, and accessible experiences."
    },
    {
      icon: <Sparkles className="h-6 w-6 text-indigo-600" />,
      title: "Modern UI",
      description: "Deliver intuitive interfaces with polished animation and layout."
    },
    {
      icon: <Cpu className="h-6 w-6 text-indigo-600" />,
      title: "Performance",
      description: "Optimize sites for fast loading and smooth interactions."
    },
    {
      icon: <Globe2 className="h-6 w-6 text-indigo-600" />,
      title: "Responsive",
      description: "Create seamless experiences on mobile, tablet, and desktop."
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
              I turn complex problems into simple, beautiful, and intuitive digital solutions. My work blends strong visuals with thoughtful engineering and real user value.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              I don't just write code; I design experiences that feel fast, look polished, and stay easy to maintain as products grow.
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

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/profile.png"
                alt="Portfolio owner"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600 rounded-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-indigo-200 rounded-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
