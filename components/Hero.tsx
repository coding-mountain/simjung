import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PageType } from "../App";
import { HERO_CONTENT } from "../constants";

interface HeroProps {
    navigateTo?: (page: PageType) => void;
}

const Hero: React.FC<HeroProps> = ({ navigateTo }) => {
    const [mounted, setMounted] = useState(false);
    const [revealed, setRevealed] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setMounted(true);
        const timer = setTimeout(() => setRevealed(true), 100);

        const handleScroll = () => {
            const progress = window.scrollY / (window.innerHeight || 1);
            setScrollProgress(Math.min(progress, 1.2));
        };
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: e.clientX / window.innerWidth - 0.5,
                y: e.clientY / window.innerHeight - 0.5,
            });
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
            clearTimeout(timer);
        };
    }, []);

    return (
        <section
            aria-label="Hero Section"
            className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden bg-white"
        >
            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none z-10">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute w-2 h-2 rounded-full ${i % 2 === 0 ? "bg-sky-400" : "bg-rose-300"} opacity-20 blur-[1px] transition-all duration-[3000ms] ${revealed ? "opacity-20 scale-100" : "opacity-0 scale-0"}`}
                        style={{
                            top: `${15 + i * 12}%`,
                            left: `${15 + ((i * 23) % 70)}%`,
                            animation: `float ${8 + i * 2}s infinite alternate ease-in-out`,
                            transform: `translate(${mousePos.x * (30 + i * 12)}px, ${mousePos.y * (30 + i * 12)}px)`,
                            transitionDelay: `${i * 150}ms`,
                        }}
                    />
                ))}
            </div>

            <div className="absolute inset-0 z-0 pointer-events-none origin-bottom select-none">
                <svg
                    viewBox="0 0 1440 900"
                    className="w-full h-full object-cover"
                    preserveAspectRatio="xMidYMax slice"
                    aria-hidden="true"
                >
                    <defs>
                        <radialGradient id="sun-glow" cx="50%" cy="50%" r="50%">
                            <stop
                                offset="0%"
                                stopColor="#FDBA74"
                                stopOpacity="0.6"
                            />
                            <stop
                                offset="60%"
                                stopColor="#FB7185"
                                stopOpacity="0.2"
                            />
                            <stop
                                offset="100%"
                                stopColor="#1E1B4B"
                                stopOpacity="0"
                            />
                        </radialGradient>

                        <linearGradient
                            id="mountain-peak-gradient"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                        >
                            <stop
                                offset="0%"
                                stopColor="#F0F9FF"
                                stopOpacity="0.4"
                            />
                            <stop
                                offset="100%"
                                stopColor="#BAE6FD"
                                stopOpacity="0.1"
                            />
                        </linearGradient>

                        <linearGradient
                            id="mountain-front-gradient"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                        >
                            <stop
                                offset="0%"
                                stopColor="#38BDF8"
                                stopOpacity="0.2"
                            />
                            <stop
                                offset="50%"
                                stopColor="#818CF8"
                                stopOpacity="0.1"
                            />
                            <stop
                                offset="100%"
                                stopColor="white"
                                stopOpacity="0"
                            />
                        </linearGradient>
                    </defs>

                    {/* Sunrise Hub */}
                    <circle
                        cx="720"
                        cy="350"
                        r="300"
                        fill="url(#sun-glow)"
                        className="animate-sunrise"
                        style={{ opacity: revealed ? 0.25 : 0 }}
                    />

                    {/* Background Peaks - Smoother Curves */}
                    <g
                        style={{
                            opacity: revealed ? 0.65 : 0,
                            transform: `translateY(${revealed ? scrollProgress * 100 : 150}px) translateX(${mousePos.x * 12}px)`,
                            transition:
                                "transform 2.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 2.5s ease-out",
                        }}
                    >
                        <path
                            d="M-100,900 L-100,450 Q150,420 350,280 Q450,300 600,150 Q750,260 900,130 Q1100,320 1300,220 Q1540,400 L1540,900 Z"
                            fill="url(#mountain-peak-gradient)"
                        />
                    </g>

                    {/* Foreground Terrain - Smoother Curves */}
                    <g
                        style={{
                            opacity: revealed ? 0.75 : 0,
                            transform: `translateY(${revealed ? scrollProgress * 60 : 100}px) translateX(${mousePos.x * -20}px)`,
                            transition:
                                "transform 2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, opacity 2s ease-out 0.3s",
                        }}
                    >
                        <path
                            d="M-100,900 L-100,650 Q250,600 450,720 Q600,450 680,300 Q760,450 950,700 Q1200,580 1540,700 L1540,900 Z"
                            fill="url(#mountain-front-gradient)"
                        />
                        <path
                            d="M-100,650 Q250,600 450,720 Q600,450 680,300 Q760,450 950,700 Q1200,580 1540,700"
                            fill="none"
                            stroke="#0EA5E9"
                            strokeWidth="0.8"
                            strokeOpacity="0.2"
                        />
                    </g>
                </svg>
            </div>

            <div className="max-w-[1440px] mx-auto w-full relative z-10 flex flex-col items-center justify-center text-center pt-52 pb-20 lg:py-0">
                <header className="flex flex-col items-center justify-center max-w-5xl">
                    <h1 className="text-[clamp(1.75rem,5vw,3.5rem)] md:text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] tracking-tighter text-[#1E1B4B] font-light mb-6 lg:mb-8 italic text-center">
                        <span
                            className={`block transition-all duration-[1500ms] delay-300 ${mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
                        >
                            <span className="not-italic font-bold">
                                {HERO_CONTENT.titleLine1}
                            </span>
                        </span>
                        <span
                            className={`block transition-all duration-[1500ms] delay-500 ${mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
                        >
                            <span className="font-serif italic font-bold text-gradient">
                                {HERO_CONTENT.titleLine2}
                            </span>
                        </span>
                        <span
                            className={`block transition-all duration-[1500ms] delay-700 ${mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
                        >
                            <span className="font-black not-italic">
                                {HERO_CONTENT.titleLine3}
                            </span>
                        </span>
                    </h1>

                    <div
                        className={`flex flex-col items-center space-y-8 lg:space-y-12 transition-all duration-[1500ms] delay-1000 ${mounted ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
                    >
                        <p className="text-sm md:text-base lg:text-lg font-medium text-slate-400 max-w-xl leading-relaxed text-center">
                            {HERO_CONTENT.subtitle}
                        </p>

                        <button
                            onClick={() => navigateTo && navigateTo("initiate")}
                            className="group relative w-full sm:w-auto px-8 lg:px-12 py-5 lg:py-6 bg-[#1E1B4B] text-white rounded-full font-black uppercase tracking-widest text-[10px] overflow-hidden transition-all hover:scale-105 active:scale-95"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-4 text-center">
                                {HERO_CONTENT.ctaText}{" "}
                                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-rose-400 to-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </button>
                    </div>
                </header>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-sky-50"></div>

            <style>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0); }
          100% { transform: translateY(-40px) rotate(360deg); }
        }
        @keyframes grow-horizontal {
          0% { width: 0; }
          100% { width: 95%; }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-grow-horizontal {
          animation: grow-horizontal 2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
        </section>
    );
};

export default Hero;
