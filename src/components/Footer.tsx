export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold text-indigo-600 tracking-tight">
            PEACE<span className="text-slate-900">.DEV</span>
          </div>
          
          <p className="text-slate-500 text-sm">
            © {currentYear} Peace. Built with React, Tailwind CSS, and Motion.
          </p>
          
          <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-indigo-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
