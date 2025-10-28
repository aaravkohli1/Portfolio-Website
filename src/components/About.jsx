const skills = [
  "C++",
  "Python",
  "Flutter",
  "React.js",
  "Pytorch",
  "Java",
  "Embedded Software",
  "C",
  "CUDA",
  "Pandas",
  "Full Stack Development",
];

export default function About({ fadeIn }) {
  return (
    <main
      className={`pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 transition-opacity duration-700 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-6xl font-semibold mb-8 sm:mb-12 text-white tracking-tight">
          About
        </h2>
        <div className="space-y-6 sm:space-y-8 text-white/80 text-base sm:text-lg leading-relaxed font-normal">
          <p>
            Hey, I’m a 17-year-old passionate about artificial intelligence and
            the future it’s shaping.
          </p>
          <p>
            My journey in tech began with a simple question: how do you make
            phone batteries last longer? That curiosity led me, at 11, to build
            Spectrum, a patented battery management system. What started as a
            small experiment grew into a gateway to everything I love about
            technology — from hardware design and embedded systems to full stack
            development, machine learning, and creative problem-solving. It
            taught me that innovation isn’t confined to one field; it’s about
            connecting ideas across disciplines to build something meaningful.
            That mindset continues to guide everything I work on today.
          </p>
          <p>
            Outside of coding, I like cars, competitive math (currently training
            for the William Lowel Putnam), and playing guitar. I also love
            learning about pretty much everything.
          </p>

          <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-white/10">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-white tracking-tight">
              Skills
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 sm:px-5 py-2 sm:py-2.5 bg-white/5 backdrop-blur-xl text-white/90 rounded-full text-xs sm:text-sm font-medium border border-white/10 hover:bg-white/10 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
