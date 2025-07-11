import { useEffect, useState } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const text = "С добрым утром пупсики";
  const letters = text.split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-light text-black tracking-wide">
          {letters.map((letter, index) => (
            <span
              key={index}
              className={`letter-animate ${isVisible ? "animate-in" : ""}`}
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "both",
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h1>
        <div
          className="mt-8 opacity-0 animate-fade-in"
          style={{ animationDelay: "3s", animationFillMode: "both" }}
        >
          <div className="w-12 h-px bg-gray-300 mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
