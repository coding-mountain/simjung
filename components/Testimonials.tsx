import React, { useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "../constants";
import { Quote } from "lucide-react";

const Testimonials: React.FC = () => {
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
            className="py-24 px-6 bg-transparent relative overflow-hidden"
        >
            <div className="max-w-[1440px] mx-auto relative z-10">
                <div className="text-center mb-20">
                    <span className="text-[#1E1B4B]/40 font-black tracking-widest uppercase text-[10px] mb-4 block">
                        Client Perspectives
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black text-[#1E1B4B] tracking-tight">
                        Our Legacy in{" "}
                        <span className="font-serif italic font-normal text-gradient">
                            Voices
                        </span>
                        .
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((item, i) => (
                        <div
                            key={i}
                            className={`glass p-10 rounded-[2.5rem] border-white shadow-elegant transition-all duration-1000 ${
                                isVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-20 opacity-0"
                            }`}
                            style={{ transitionDelay: `${i * 200}ms` }}
                        >
                            <div className="mb-8">
                                <Quote className="w-10 h-10 text-orange-400 opacity-40" />
                            </div>
                            <p className="text-xl font-medium text-[#1E1B4B] leading-relaxed italic mb-10 font-serif">
                                "{item.text}"
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    className="w-12 h-12 rounded-full object-contain border-2 border-white shadow-sm"
                                    alt={item.author}
                                />
                                <div>
                                    <h4 className="font-black text-[#1E1B4B] text-sm">
                                        {item.author}
                                    </h4>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                        {item.role} • {item.company}
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

export default Testimonials;
