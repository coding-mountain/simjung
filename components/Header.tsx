import React from "react";
import { NAV_LINKS } from "../constants";
import Logo from "./Logo";
import { PageType } from "../App";

interface HeaderProps {
    navigateTo: (page: PageType) => void;
    currentPage: PageType;
}

const Header: React.FC<HeaderProps> = ({ navigateTo, currentPage }) => {
    const handleNavClick = (href: string) => {
        if (href.startsWith("#")) {
            const sectionId = href.substring(1);

            if (currentPage === "home") {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            } else {
                navigateTo("home");
                setTimeout(() => {
                    const element = document.getElementById(sectionId);
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                    }
                }, 100);
            }
        } else {
            navigateTo(href as PageType);
        }
    };

    return (
        <nav className="absolute top-0 left-0 w-full z-[100] px-6 lg:px-24 py-6 bg-transparent">
            <div className="max-w-[1440px] mx-auto flex justify-between items-center">
                <button
                    onClick={() => navigateTo("home")}
                    className="group flex items-center gap-5 text-left transition-transform hover:scale-[1.01]"
                    aria-label="SimJung Home"
                >
                    <Logo hideText className="h-12 md:h-14" />
                    <div className="hidden lg:block border-l border-slate-100 pl-4 py-1.5">
                        <span className="text-xl font-black tracking-tighter text-[#1E1B4B] block leading-none">
                            SimJung
                        </span>
                    </div>
                </button>

                <div className="hidden xl:flex items-center gap-12">
                    {NAV_LINKS.map((link) => (
                        <button
                            key={link.label}
                            onClick={() => handleNavClick(link.href)}
                            className="text-[9.5px] font-black uppercase tracking-[0.3em] transition-all relative group text-slate-400 hover:text-[#1E1B4B]"
                        >
                            {link.label}
                            <span className="absolute -bottom-2 left-0 h-[1.5px] bg-orchid transition-all w-0 group-hover:w-full"></span>
                        </button>
                    ))}

                    <div className="w-[1px] h-5 bg-slate-100 mx-3"></div>

                    <button
                        onClick={() => navigateTo("contact")}
                        className={`px-7 py-3 rounded-full text-[9px] font-black uppercase tracking-[0.25em] transition-all hover:-translate-y-0.5 active:translate-y-0 ${currentPage === "contact" ? "bg-orchid text-white shadow-lg shadow-rose-100" : "bg-[#1E1B4B] text-white hover:bg-orange-600 shadow-md"}`}
                    >
                        Get Started
                    </button>
                </div>

                {/* Mobile menu trigger */}
                <button
                    className="xl:hidden flex flex-col gap-1.5 p-2 group"
                    aria-label="Open Menu"
                >
                    <div className="w-8 h-[2px] bg-[#1E1B4B] group-hover:w-10 transition-all"></div>
                    <div className="w-5 h-[2px] bg-orange-500 self-end group-hover:w-8 transition-all"></div>
                </button>
            </div>
        </nav>
    );
};

export default Header;
