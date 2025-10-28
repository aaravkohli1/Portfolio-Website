const projects = [
  {
    title: "Spectrum - Battery Management System",
    description:
      "A patented battery management system, complete with optimized BLE telemetry and context sensitive artificial intelligence.",
    tech: ["Flutter", "Python", "Embedded C/C++", "Pytorch"],
    image: "",
  },
  {
    title: "Batch-Invariant CUDA Kernels for Deterministic LLM Inference",
    description:
      "Custom CUDA kernels enabling batch-invariant deterministic inference for large language models, including optimized RMSNorm, matrix multiplication, and reduction operations.",
    tech: ["CUDA", "C++", "Python"],
  },
  {
    title: "Custom Deep Learning Framework",
    description:
      "A custom, lightweight deep learning framework complete with optimized forward and backpropogation. Performance enhanced through multithreaded CPU training and memory-efficient computation caching. ",
    tech: ["C++"],
  },
  {
    title: "Lifeline",
    description:
      "A mobile app for providing heart attack risk analysis in an educational format.",
    tech: ["Flutter", "Python", "XGBoost", "Flask"],
  },
  {
    title: "Portfolio Website",
    description: "This website.",
    tech: ["Vite", "React", "Three.js", "Tailwind"],
  },
];

export default function Projects({ fadeIn }) {
  return (
    <main
      className={`pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 transition-opacity duration-700 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-6xl font-semibold mb-12 sm:mb-16 text-white tracking-tight">
          Projects
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 hover:bg-white/10 hover:border-white/20 transition-all group cursor-pointer"
            >
              <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">
                {project.image}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-white tracking-tight">
                {project.title}
              </h3>
              <p className="text-white/70 mb-4 sm:mb-6 font-normal text-sm sm:text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-medium bg-white/5 text-white/80 rounded-full border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
