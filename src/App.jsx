import { useEffect, useState } from "react";
import introVideo from "./assets/intro.mp4";

const POSITIONS = [
  { top: "20%", left: "15%" },
  { top: "35%", left: "65%" },
  { top: "60%", left: "20%" },
  { top: "55%", left: "70%" },
  { top: "40%", left: "40%" }
];

function App() {
  const [quotes, setQuotes] = useState([]);

  const fetchQuotes = async () => {
    try {
      const res = await fetch(
        "https://api.quotable.io/quotes/random?limit=5&tags=happiness|inspirational"
      );
      const data = await res.json();
      setQuotes(data);
    } catch (err) {
      setQuotes([
        { content: "Breathe. You’re safe here 🌿" },
        { content: "Slow down. This moment matters 💛" }
      ]);
    }
  };

  useEffect(() => {
    fetchQuotes();
    const interval = setInterval(fetchQuotes, 12000); // refresh calmly
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <video
        src={introVideo}
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }}
      />

      {quotes.slice(0, 5).map((q, index) => (
  <div
    key={index}
    style={{
      position: "absolute",
      top: POSITIONS[index].top,
      left: POSITIONS[index].left,
      maxWidth: "320px",
      padding: "18px 24px",

      /* 🔥 Highlighted look */
      background: "linear-gradient(135deg, rgba(0,0,0,0.55), rgba(0,0,0,0.35))",
      border: "1px solid rgba(255,255,255,0.25)",
      boxShadow: "0 10px 30px rgba(0,0,0,0.35)",

      color: "#fff",
      borderRadius: "22px",

      /* ⬆️ Bigger font */
      fontSize: "1.2rem",
      fontWeight: "500",
      lineHeight: "1.5",

      backdropFilter: "blur(10px)",
      opacity: 0.92,

      animation: `float ${6 + index}s ease-in-out infinite`
    }}
  >
    “{q.content}”
  </div>
))}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </div>
  );
}

export default App;
