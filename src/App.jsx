import "./App.css";

export default function App() {
  return (
    <main className="h-screen w-full p-4 box-border overflow-hidden bg-[var(--bg)] text-[var(--text)] flex flex-col gap-4">
      
      {/* Top Section: Intro (Fixed height or small ratio) */}
      <section className="h-[15%] w-full rounded-2xl border border-[var(--border)] bg-[var(--social-bg)] p-6 flex flex-col justify-center">
        <h1 className="m-0 text-3xl">Mrunal Bhoyar</h1>
        <p>Software Developer</p>
        <p>Building full-stack applications using React and FastAPI. 8 months of dedicated experience in developing functional, API-driven web solutions.</p>
      </section>

      {/* Main Bento Grid: The core of your sketch */}
      <div className="flex-grow grid grid-cols-12 grid-rows-6 gap-4 min-h-0">
        
        {/* Project 1 (Large, with Video/Desc) */}
        <div className="col-span-8 row-span-4 rounded-3xl border border-[var(--border)] p-6 flex flex-col gap-3 bg-[var(--accent-bg)]">
          <h2 className="text-xl font-bold">Project 1 Name</h2>
          <div className="flex-grow bg-black/10 rounded-xl flex items-center justify-center border border-dashed border-[var(--accent-border)]">
            <span className="text-sm">Video / Visual Media</span>
          </div>
          <p className="text-sm line-clamp-2">Project Description - Locked to 2 lines to prevent spill.</p>
        </div>

        {/* Status Bar */}
        <div className="col-span-4 row-span-1 rounded-3xl border border-[var(--border)] p-4 flex items-center justify-center bg-[var(--social-bg)]">
          <span className="font-mono text-sm">● Status: Available to join immediately</span>
        </div>

        {/* Socials / Links */}
        <div className="col-span-2 row-span-1 rounded-3xl border border-[var(--border)] flex items-center justify-center hover:bg-[var(--accent-bg)] transition-colors">
          <span className="text-xs font-bold uppercase tracking-widest">GitHub</span>
        </div>
        <div className="col-span-2 row-span-1 rounded-3xl border border-[var(--border)] flex items-center justify-center hover:bg-[var(--accent-bg)] transition-colors">
          <span className="text-xs font-bold uppercase tracking-widest">LinkedIn</span>
        </div>

        {/* Toolkit */}
        <div className="col-span-4 row-span-2 rounded-3xl border border-[var(--border)] p-6 bg-[var(--code-bg)]">
          <h2 className="text-lg mb-2">Toolkit</h2>
          <div className="flex flex-wrap gap-2">
            {['React', 'Vite', 'Tailwind', 'Framer'].map(tool => (
              <code key={tool} className="text-[10px] px-2 py-1 bg-white dark:bg-black rounded border border-[var(--border)]">{tool}</code>
            ))}
          </div>
        </div>

        {/* Project 2 */}
        <div className="col-span-5 row-span-2 rounded-3xl border border-[var(--border)] p-6 flex flex-col justify-center">
          <h2 className="text-xl">Project 2</h2>
        </div>

        {/* For More Projects */}
        <div className="col-span-4 row-span-2 rounded-3xl border border-[var(--border)] p-6 flex items-center justify-center text-center bg-[var(--accent-bg)]">
          <h2 className="text-lg">For More Projects →</h2>
        </div>

        {/* Location */}
        <div className="col-span-3 row-span-2 rounded-3xl border border-[var(--border)] p-6 flex flex-col justify-center items-center">
          <span className="text-2xl">📍</span>
          <span className="text-sm">Location</span>
        </div>

      </div>
    </main>
  );
}