import React, { useEffect, useRef, useState } from "react";
import { FOUNDERS } from "../constants";
import { Sparkles, ArrowRight } from "lucide-react";

const Founders: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 },
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="founders"
            className="py-24 px-6 bg-transparent relative overflow-hidden"
        >
            {/* Decorative background elements - Orchid tint */}
            <div className="absolute top-1/2 left-0 w-[40vw] h-[40vw] bg-purple-50/40 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="max-w-[1440px] mx-auto relative z-10">
                <div className="text-center mb-24">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-12 h-[1px] bg-purple-200"></div>
                        <span className="text-purple-400 font-black tracking-[0.4em] uppercase text-[10px]">
                            The Visionary
                        </span>
                        <div className="w-12 h-[1px] bg-purple-200"></div>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black text-[#1E1B4B] tracking-tight leading-none">
                        Meet Our{" "}
                        <span className="font-serif italic font-normal text-gradient">
                            Founder
                        </span>
                        .
                    </h2>
                </div>

                <div className="max-w-5xl mx-auto">
                    {FOUNDERS.map((founder, idx) => (
                        <div
                            key={founder.name}
                            className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center group transition-all duration-1000 ${
                                isVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-20 opacity-0"
                            }`}
                        >
                            <div className="w-full lg:w-2/5 relative">
                                <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white transition-all duration-1000 group-hover:rotate-1 group-hover:scale-[1.02]">
                                    <img
                                        src={founder.image}
                                        referrerPolicy="no-referrer"
                                        className="w-full h-full object-cover grayscale transition-all duration-[2s] group-hover:grayscale-0 group-hover:scale-105"
                                        alt={founder.name}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 to-transparent"></div>
                                </div>
                                <div className="absolute -bottom-8 -right-8 px-8 py-8 rounded-[2rem] shadow-2xl bg-purple-600 text-white flex items-center justify-center border border-white/50 backdrop-blur-md">
                                    <Sparkles className="w-8 h-8" />
                                </div>
                            </div>

                            <div className="w-full lg:w-3/5 flex flex-col justify-center">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400 block px-3 py-1 bg-purple-50 rounded-full">
                                        {founder.role}
                                    </span>
                                </div>
                                <h3 className="text-5xl lg:text-6xl font-black text-[#1E1B4B] mb-8 leading-tight tracking-tight">
                                    {founder.name}
                                </h3>
                                <div className="relative">
                                    <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-200 to-transparent"></div>
                                    <p className="text-slate-500 font-medium text-lg lg:text-xl leading-relaxed mb-10 italic whitespace-pre-line pl-6">
                                        "{founder.bio}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Founders;
