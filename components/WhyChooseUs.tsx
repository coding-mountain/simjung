import React, { useEffect, useRef, useState } from "react";
import { WHY_US_ADVANTAGES } from "../constants";

const WhyChooseUs: React.FC = () => {
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
            id="why-us"
            className="py-24 px-6 md:px-12 bg-transparent"
        >
            <div className="max-w-[1440px] mx-auto">
                <div
                    className={`flex flex-col lg:flex-row gap-20 items-end mb-16 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                    <div className="lg:w-1/2">
                        <span className="text-orange-400 font-black tracking-widest uppercase text-[10px] mb-4 block">
                            The SimJung Advantage
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black text-[#1E1B4B] tracking-tight">
                            Why Global Leaders <br />
                            <span className="font-serif italic font-normal text-gradient">
                                Choose Us.
                            </span>
                        </h2>
                    </div>
                    <div className="lg:w-1/2">
                        <p className="text-xl text-slate-400 font-medium leading-relaxed pb-2 border-b border-orange-100">
                            We provide the reliability of an onshore firm with
                            the scalability and efficiency of a premier offshore
                            partner.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {WHY_US_ADVANTAGES.map((item, idx) => (
                        <div
                            key={idx}
                            className={`p-10 rounded-3xl border border-slate-100 shadow-hover group transition-all duration-700 delay-[${idx * 150}ms] ${item.bg} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                        >
                            <div
                                className={`w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform ${item.color}`}
                            >
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-black text-[#1E1B4B] mb-4 uppercase tracking-tighter">
                                {item.title}
                            </h4>
                            <p className="text-slate-500 font-medium leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
