import React from "react";
import { Linkedin, Mail } from "lucide-react";
import { NAV_LINKS, SERVICES } from "../constants";
import Logo from "./Logo";
import { PageType } from "../App";

interface FooterProps {
    navigateTo?: (page: PageType) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
    const handleNav = (page: PageType) => {
        if (navigateTo) navigateTo(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-[#1E1B4B] pt-32 pb-16 px-6 relative overflow-hidden border-t border-white/5">
            {/* Subtle top light leak */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[200px] bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

            <div className="max-w-[1440px] mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
                    <div className="space-y-10">
                        <button
                            onClick={() => handleNav("home")}
                            className="flex items-center gap-4 text-left group"
                        >
                            <Logo
                                hideText
                                className="h-14 transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="flex flex-col">
                                <span className="text-2xl font-black tracking-tighter text-white leading-none">
                                    SimJung
                                </span>
                            </div>
                        </button>
                        <p className="text-slate-400 leading-relaxed font-medium max-w-xs text-sm">
                            We scale global enterprises with Himalayan rigour.
                            Precision-engineered solutions, delivered with heart
                            from the top of the world.
                        </p>
                        <div className="flex space-x-3">
                            <a
                                href="https://www.linkedin.com/company/simjung-pvt-ltd/"
                                className="p-3 bg-white/5 rounded-2xl text-slate-400 hover:text-sky-400 hover:bg-white/10 transition-all border border-white/10"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:hello@simjung.com.np"
                                className="p-3 bg-white/5 rounded-2xl text-slate-400 hover:text-sky-400 hover:bg-white/10 transition-all border border-white/10"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-black text-white mb-10 text-[10px] uppercase tracking-[0.4em] relative">
                            Sitemap
                            <span className="absolute -bottom-3 left-0 w-8 h-[2px] bg-sky-400"></span>
                        </h4>
                        <ul className="space-y-5">
                            <li>
                                <button
                                    onClick={() => handleNav("home")}
                                    className="text-slate-400 hover:text-white transition-colors font-bold text-sm tracking-tight"
                                >
                                    Home Base
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleNav("contact")}
                                    className="text-slate-400 hover:text-vivid-orange transition-colors font-bold text-sm tracking-tight"
                                >
                                    Initiate Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black text-white mb-10 text-[10px] uppercase tracking-[0.4em] relative">
                            Capabilities
                            <span className="absolute -bottom-3 left-0 w-8 h-[2px] bg-vivid-orange"></span>
                        </h4>
                        <ul className="space-y-5">
                            {SERVICES.map((service) => (
                                <li key={service.id}>
                                    <button
                                        onClick={() => handleNav("home")}
                                        className="text-slate-400 hover:text-sky-400 transition-colors font-bold text-sm tracking-tight text-left"
                                    >
                                        {service.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black text-white mb-10 text-[10px] uppercase tracking-[0.4em] relative">
                            Contact
                            <span className="absolute -bottom-3 left-0 w-8 h-[2px] bg-sky-400"></span>
                        </h4>
                        <ul className="space-y-8">
                            <li className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-4 shrink-0 text-sm">
                                    📍
                                </div>
                                <span className="text-slate-400 font-bold text-sm leading-snug">
                                    Naxal Bhagawati, Kathmandu <br /> Nepal,
                                    44600
                                </span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-4 shrink-0 text-sm">
                                    📧
                                </div>
                                <span className="text-slate-400 font-bold text-sm break-all">
                                    hello@simjung.com.np
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] text-slate-500 font-black uppercase tracking-[0.4em]">
                    <p>© 2024 SimJung Pvt. Ltd.</p>
                </div>
            </div>

            {/* Elegant bottom mountain silhouette - Opacity increased to 30% for better visibility */}
            <svg
                viewBox="0 0 1440 80"
                className="absolute bottom-0 left-0 w-full opacity-30 pointer-events-none"
                preserveAspectRatio="none"
            >
                <path
                    d="M0,80 L0,50 L180,35 L350,65 L550,15 L780,75 L1000,25 L1250,60 L1440,45 L1440,80 Z"
                    fill="url(#footer-mountain-grad)"
                />
                <defs>
                    <linearGradient
                        id="footer-mountain-grad"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                    >
                        <stop offset="0%" stopColor="#38BDF8" />
                        <stop offset="50%" stopColor="#D946EF" />
                        <stop offset="100%" stopColor="#F97316" />
                    </linearGradient>
                </defs>
            </svg>
        </footer>
    );
};

export default Footer;
