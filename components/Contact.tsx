import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { CONTACT_DETAILS, CONTACT_CONFIG } from "../constants";

const Contact: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        service: "Back Office solutions",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Connect to Formspree
            const response = await fetch(
                `https://formspree.io/f/${CONTACT_CONFIG.formspreeId}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formState),
                },
            );

            if (response.ok) {
                setIsSuccess(true);
                setFormState({
                    name: "",
                    email: "",
                    service: "Back Office solutions",
                    message: "",
                });
            } else {
                alert(
                    "Something went wrong. Please try again or email us directly.",
                );
            }
        } catch (error) {
            alert("Error submitting form. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center py-32 px-6 overflow-hidden bg-[#1E1B4B] text-white relative"
        >
            {/* Subtle deep glow effects - Added Sky Blue */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-vivid-orange/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

            <div className="max-w-[1440px] mx-auto w-full relative z-10">
                <div className="flex flex-col lg:flex-row gap-24 items-center lg:items-start">
                    <div className="lg:w-1/2">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-[1px] bg-sky-400"></div>
                            <span className="text-sky-400 font-black tracking-[0.4em] uppercase text-[10px]">
                                Reach the Summit
                            </span>
                        </div>
                        <h2 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.85]">
                            Let’s{" "}
                            <span className="font-serif italic font-normal text-gradient">
                                Elevate
                            </span>{" "}
                            <br />
                            Your Vision.
                        </h2>
                        <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-lg mb-16 border-l-2 border-sky-400/20 pl-8">
                            Scaling your business with Himalayan precision
                            begins with an elegant collaboration. Our experts
                            are ready to design your ascent.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                            <div className="group">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-2xl bg-white/5 text-sky-400 group-hover:bg-sky-400 group-hover:text-white transition-all duration-500 border border-white/10">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-black text-white/50 uppercase tracking-widest text-[10px]">
                                        Email Us
                                    </h4>
                                </div>
                                <p className="text-white font-bold text-lg">
                                    {CONTACT_DETAILS.email}
                                </p>
                            </div>

                            {/* <div className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-2xl bg-white/5 text-vivid-orange group-hover:bg-vivid-orange group-hover:text-white transition-all duration-500 border border-white/10">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h4 className="font-black text-white/50 uppercase tracking-widest text-[10px]">Call Us</h4>
                </div>
                <p className="text-white font-bold text-lg">{CONTACT_DETAILS.phone}</p>
              </div> */}

                            <div className="group sm:col-span-2">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-2xl bg-white/5 text-blue-400 group-hover:bg-blue-400 group-hover:text-white transition-all duration-500 border border-white/10">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-black text-white/50 uppercase tracking-widest text-[10px]">
                                        Base Camp
                                    </h4>
                                </div>
                                <p className="text-white font-bold text-lg">
                                    {CONTACT_DETAILS.address}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <div className="bg-white/5 backdrop-blur-xl p-12 md:p-16 rounded-[4rem] shadow-4xl border border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

                            {isSuccess ? (
                                <div className="relative z-10 flex flex-col items-center justify-center text-center py-20 animate-in fade-in zoom-in duration-700">
                                    <div className="w-24 h-24 bg-sky-400/20 rounded-full flex items-center justify-center mb-8 border border-sky-400/30">
                                        <CheckCircle2 className="w-12 h-12 text-sky-400" />
                                    </div>
                                    <h3 className="text-3xl font-black mb-4">
                                        Inquiry Received
                                    </h3>
                                    <p className="text-slate-400 max-w-xs mx-auto">
                                        Our strategic leads will review your
                                        vision and contact you within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="mt-10 text-[10px] font-black uppercase tracking-widest text-sky-400 hover:text-white transition-colors"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="relative z-10 space-y-8"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] ml-2">
                                                Identity
                                            </label>
                                            <input
                                                type="text"
                                                value={formState.name}
                                                onChange={(e) =>
                                                    setFormState({
                                                        ...formState,
                                                        name: e.target.value,
                                                    })
                                                }
                                                placeholder="Your Full Name"
                                                required
                                                className="w-full px-8 py-5 rounded-[2rem] bg-white/5 border border-white/10 focus:bg-white/10 focus:border-sky-400/50 transition-all outline-none text-white font-bold text-sm placeholder:text-white/20"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] ml-2">
                                                Channel
                                            </label>
                                            <input
                                                type="email"
                                                value={formState.email}
                                                onChange={(e) =>
                                                    setFormState({
                                                        ...formState,
                                                        email: e.target.value,
                                                    })
                                                }
                                                placeholder="name@company.com"
                                                required
                                                className="w-full px-8 py-5 rounded-[2rem] bg-white/5 border border-white/10 focus:bg-white/10 focus:border-sky-400/50 transition-all outline-none text-white font-bold text-sm placeholder:text-white/20"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] ml-2">
                                            Objective
                                        </label>
                                        <div className="relative">
                                            <select
                                                className="w-full px-8 py-5 rounded-[2rem] bg-white/5 border border-white/10 focus:bg-white/10 focus:border-sky-400/50 transition-all outline-none text-white font-bold text-sm appearance-none cursor-pointer"
                                                value={formState.service}
                                                onChange={(e) =>
                                                    setFormState({
                                                        ...formState,
                                                        service: e.target.value,
                                                    })
                                                }
                                            >
                                                <option className="bg-[#1E1B4B]">
                                                    Back Office solutions
                                                </option>
                                                <option className="bg-[#1E1B4B]">
                                                    Bookkeeping and Accounting
                                                </option>
                                                <option className="bg-[#1E1B4B]">
                                                    Software Development and
                                                    Support
                                                </option>
                                                <option className="bg-[#1E1B4B]">
                                                    Civil Engineering and
                                                    Architecture
                                                </option>
                                                <option className="bg-[#1E1B4B]">
                                                    AI Annotations
                                                </option>
                                                <option className="bg-[#1E1B4B]">
                                                    Strategic Partnership
                                                </option>
                                            </select>
                                            <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                                                <div className="w-2 h-2 border-r-2 border-b-2 border-white rotate-45"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] ml-2">
                                            Vision
                                        </label>
                                        <textarea
                                            rows={4}
                                            value={formState.message}
                                            onChange={(e) =>
                                                setFormState({
                                                    ...formState,
                                                    message: e.target.value,
                                                })
                                            }
                                            placeholder="Tell us about your project or growth goals..."
                                            required
                                            className="w-full px-8 py-5 rounded-[2.5rem] bg-white/5 border border-white/10 focus:bg-white/10 focus:border-sky-400/50 transition-all outline-none text-white font-bold text-sm resize-none placeholder:text-white/20"
                                        ></textarea>
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full px-12 py-6 bg-sky-500 text-white rounded-full font-black text-[11px] uppercase tracking-[0.4em] flex items-center justify-center hover:bg-white hover:text-[#1E1B4B] hover:shadow-2xl hover:shadow-sky-400/40 transform hover:-translate-y-1 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting
                                                ? "Transmitting..."
                                                : "Initiate Connection"}{" "}
                                            <Send className="ml-4 w-4 h-4" />
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
