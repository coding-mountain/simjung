import { ArrowRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { ABOUT_CHAPTERS } from "../constants";

const About: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeAltitude, setActiveAltitude] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        const handleScroll = () => {
            if (!containerRef.current || window.innerWidth < 1024) return;

            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const totalScrollable = rect.height - windowHeight;

            // Calculate progress based on how much of the section has scrolled past the top
            let progress = -rect.top / totalScrollable;
            progress = Math.max(0, Math.min(1, progress));

            setScrollProgress(progress);
            setActiveAltitude(Math.floor(progress * 8848));
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        // Initial call
        handleScroll();

        return () => {
            window.removeEventListener("resize", checkMobile);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section
            ref={containerRef}
            id="about"
            aria-label="Our Story and Missions"
            className="relative"
            style={{
                height: isMobile ? "auto" : `${ABOUT_CHAPTERS.length * 100}vh`,
            }}
        >
            <div
                className={`${isMobile ? "relative py-24" : "sticky top-0 h-screen"} w-full overflow-hidden bg-white`}
            >
                {/* Persistent Background "STORY" Text */}
                <div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
                    style={{ zIndex: 0 }}
                >
                    <div
                        className="text-[40vw] lg:text-[30vw] font-black text-slate-50 opacity-[0.07] lg:opacity-10 transition-transform duration-500 ease-out"
                        style={{
                            transform: isMobile
                                ? "none"
                                : `scale(${1 + scrollProgress * 0.2}) rotate(${scrollProgress * 5}deg)`,
                        }}
                    >
                        STORY
                    </div>
                </div>

                {/* Altitude Tracker (Horizontal) - Desktop Only */}
                {!isMobile && (
                    <div className="absolute left-12 bottom-12 z-50 flex flex-row items-center gap-6 bg-white/70 backdrop-blur-md px-6 py-3 rounded-full border border-sky-50 shadow-sm">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#1E1B4B] whitespace-nowrap">
                            Current Altitude
                        </span>
                        <div className="w-32 h-[1.5px] bg-sky-50 relative">
                            <div
                                className="absolute top-0 left-0 h-full bg-sky-400 transition-all duration-300"
                                style={{ width: `${scrollProgress * 100}%` }}
                            ></div>
                        </div>
                        <span className="text-sm font-black text-[#1E1B4B] min-w-[50px]">
                            {activeAltitude}m
                        </span>
                    </div>
                )}

                {/* Content Track */}
                <div
                    className={`${isMobile ? "flex flex-col gap-32" : "flex h-full will-change-transform"}`}
                    style={{
                        transform: isMobile
                            ? "none"
                            : `translateX(-${scrollProgress * (ABOUT_CHAPTERS.length - 1) * 100}%)`,
                        transition: isMobile ? "none" : "transform 0.1s linear",
                    }}
                >
                    {ABOUT_CHAPTERS.map((chapter, i) => (
                        <div
                            key={i}
                            className={`min-w-full ${isMobile ? "h-auto" : "h-full"} flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-24 relative`}
                        >
                            <article className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32 items-center w-full max-w-[1400px] mx-auto z-10">
                                {/* Text Content */}
                                <div className="lg:col-span-5 order-2 lg:order-1">
                                    <div className="flex items-center gap-4 mb-6 lg:mb-8">
                                        <div
                                            className={`w-8 lg:w-12 h-[1px] ${chapter.color.replace("border-", "bg-")}`}
                                        ></div>
                                        <span
                                            className={`font-black tracking-[0.4em] lg:tracking-[0.5em] uppercase text-[9px] lg:text-[10px] ${chapter.accent}`}
                                        >
                                            {chapter.tag}
                                        </span>
                                    </div>

                                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-[#1E1B4B] tracking-tighter leading-[0.9] mb-8 lg:mb-10">
                                        Chapter {chapter.id} <br />
                                        <span className="font-serif italic font-normal text-gradient">
                                            {chapter.title}
                                        </span>
                                    </h2>

                                    <p className="text-base md:text-lg lg:text-xl font-medium leading-relaxed text-slate-400 max-w-lg mb-10 lg:mb-12 border-l-4 pl-6 lg:pl-10 border-sky-100">
                                        {chapter.desc}
                                    </p>

                                    <div className="flex items-center gap-6 lg:gap-8">
                                        <div
                                            className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl ${chapter.bg} flex items-center justify-center text-[#1E1B4B] border border-white shadow-sm`}
                                        >
                                            <chapter.icon className="w-5 h-5 lg:w-6 lg:h-6 opacity-60" />
                                        </div>
                                        <div className="flex-grow h-[1px] bg-slate-50"></div>
                                    </div>
                                </div>

                                {/* Visual Image/Card */}
                                <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center items-center">
                                    <div className="relative aspect-[4/5] lg:aspect-[3/4] w-full max-w-[420px] lg:max-h-[65vh] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl group border-4 lg:border-[8px] border-white bg-slate-50">
                                        <img
                                            src={chapter.image}
                                            alt={`Himalayan landscape illustrating ${chapter.title} at SimJung`}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-50"></div>
                                    </div>
                                </div>
                            </article>

                            {/* Progress Indicator Dots - Desktop Only */}
                            {!isMobile && (
                                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4">
                                    {ABOUT_CHAPTERS.map((_, dotIdx) => (
                                        <div
                                            key={dotIdx}
                                            className={`h-1 rounded-full transition-all duration-500 ${
                                                Math.round(
                                                    scrollProgress *
                                                        (ABOUT_CHAPTERS.length -
                                                            1),
                                                ) === dotIdx
                                                    ? "w-12 bg-sky-400"
                                                    : "w-3 bg-slate-100"
                                            }`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {!isMobile && (
                    <div
                        className="absolute bottom-12 right-12 z-50 flex items-center gap-4 transition-opacity duration-500"
                        style={{ opacity: scrollProgress < 0.05 ? 1 : 0 }}
                    >
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">
                            Begin Scroll
                        </span>
                        <div className="w-10 h-10 rounded-full border border-sky-100 flex items-center justify-center animate-bounce">
                            <ArrowRight className="w-3 h-3 text-sky-400 rotate-90" />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default About;
