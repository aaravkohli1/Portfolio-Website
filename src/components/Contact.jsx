import { Linkedin, Send, Check, Github } from "lucide-react";

export default function Contact({
  fadeIn,
  formData,
  handleInputChange,
  handleSubmit,
  formStatus,
}) {
  return (
    <main
      className={`pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 transition-opacity duration-700 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl sm:text-6xl font-semibold mb-4 sm:mb-6 text-white tracking-tight">
          Contact
        </h2>
        <p className="text-white/70 text-base sm:text-lg mb-8 sm:mb-12 font-normal">
          Want to talk about something? Feel free to reach out.
        </p>

        {/* Use a form so handleSubmit receives a submit event */}
        <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-2 text-white/80">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 sm:py-3.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-white/80">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 sm:py-3.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-white/80">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              className="w-full px-4 py-3 sm:py-3.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-white/40 resize-none focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all"
              placeholder="An interesting message"
            />
          </div>

          <button
            type="submit"
            disabled={
              formStatus === "sending" ||
              !formData.name ||
              !formData.email ||
              !formData.message
            }
            className="w-full bg-white hover:bg-white/90 text-black font-medium py-3 sm:py-3.5 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed shadow-lg"
          >
            {formStatus === "sending" ? (
              "Sending..."
            ) : formStatus === "success" ? (
              <>
                <Check size={18} />
                Sent!
              </>
            ) : (
              <>
                Send Message
                <Send size={18} />
              </>
            )}
          </button>

          {formStatus === "success" && (
            <div className="text-center text-white/80 text-sm">
              Thanks for reaching out!
            </div>
          )}
        </form>

        <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-white/10">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white tracking-tight">
            Connect
          </h3>
          <div className="flex gap-4 sm:gap-6">
            <a
              href="https://www.linkedin.com/in/aarav-kohli26/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-all"
            >
              <Linkedin size={20} />
              <span className="font-medium text-sm sm:text-base">LinkedIn</span>
            </a>
            <a
              href="https://github.com/aaravkohli1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-all"
            >
              <Github size={20} />
              <span className="font-medium text-sm sm:text-base">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
