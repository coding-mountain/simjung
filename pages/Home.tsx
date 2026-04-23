import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Founders from "../components/Founders";
import Testimonials from "../components/Testimonials";
import Clients from "../components/Clients";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/Contact";
import MountainDivider from "../components/MountainDivider";
import { PageType } from "../App";

const Home: React.FC<{
    navigateTo: (page: PageType, serviceId?: string) => void;
}> = ({ navigateTo }) => {
    return (
        <>
            <Hero navigateTo={navigateTo} />
            <Clients />
            <div className="bg-white">
                <About />
            </div>
            <MountainDivider color="text-slate-50" />
            <div className="bg-slate-50">
                <Services navigateTo={navigateTo} />
            </div>
            <MountainDivider flipped color="text-white" />
            <div className="bg-white">
                <Founders />
            </div>
            <MountainDivider color="text-slate-50" />
            <div className="bg-slate-50">
                <Testimonials />
            </div>
            <MountainDivider flipped color="text-white" />
            <div className="bg-white">
                <WhyChooseUs />
            </div>
            <Contact />
        </>
    );
};

export default Home;
