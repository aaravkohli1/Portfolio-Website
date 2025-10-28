import { useEffect, useState } from "react";

export default function Home() {
  const [iframeSrc, setIframeSrc] = useState("");
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const updateSrc = () => {
      const width = window.innerWidth;

      let base = import.meta.env.VITE_SCENE;

      if (width < 600) {
        setIframeSrc(base + "?fov=105");
      } else if (width < 768) {
        // Phones — normal
        setIframeSrc(base);
      } else if (width < 1200) {
        // iPads / small laptops — increase FOV
        setIframeSrc(base + "?fov=85");
      } else if (width < 1400) {
        setIframeSrc(base + "?fov=75");
      } else {
        // Desktop — default FOV
        setIframeSrc(base);
      }
    };

    const handleOrientation = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    // Initial setup
    updateSrc();
    handleOrientation();

    // Listeners
    window.addEventListener("resize", updateSrc);
    window.addEventListener("resize", handleOrientation);
    window.addEventListener("orientationchange", handleOrientation);

    return () => {
      window.removeEventListener("resize", updateSrc);
      window.removeEventListener("resize", handleOrientation);
      window.removeEventListener("orientationchange", handleOrientation);
    };
  }, []);

  return (
    <main className="relative w-full h-screen bg-black overflow-hidden">
      {isPortrait ? (
        // Overlay message for portrait orientation
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-3xl font-semibold mb-4">
            Rotate Your Device
          </h1>
          <p className="text-white/70 text-base max-w-sm">
            This 3D scene works best in landscape mode.
          </p>
        </div>
      ) : (
        // Landscape / normal view
        <iframe
          key={iframeSrc}
          src={iframeSrc}
          frameBorder="0"
          allowFullScreen
          className="w-full h-full"
        />
      )}
    </main>
  );
}
