import React from "react";
import {
    Brain,
    Calculator,
    Ruler,
    Code,
    Target,
    ShieldCheck,
    Globe,
    Zap,
    Briefcase,
    Compass,
    Rocket,
    TrendingUp,
    Shield,
    Users,
    Building2,
    Clock,
} from "lucide-react";
import { Service, NavLink, Testimonial, Partner } from "./types";
import kavadevLogo from "./assets/kavadev.png";
import verktekLogo from "./assets/verktek.png";
import dummyLogo from "./assets/logo-1.png";
import chapterOne from "./assets/chapter1.png";
import chapterTwo from "./assets/chapter2.png";
import chapterThree from "./assets/chapter3.png";
import karvikaPhoto from "./assets/karvika.jpg";

/**
 * ============================================================================
 * SECTION 0: BRAND & SEO ASSETS
 * Replace these URLs with your hosted images or icons.
 * ============================================================================
 */
export const BRAND_ASSETS = {
    logoUrl: null, // Keep as null to use the custom SVG logo I built for you.
    faviconUrl: "https://simjung.com.np/favicon.ico",
    socialPreviewImage:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
};

/**
 * ============================================================================
 * SECTION 1: NAVIGATION
 * Change the labels for the menu links here.
 * ============================================================================
 */
export const NAV_LINKS: NavLink[] = [
    { label: "Our Story", href: "#about" },
    { label: "Verticals", href: "#services" },
    { label: "Leadership", href: "#founders" },
    { label: "The Edge", href: "#why-us" },
    { label: "Contact", href: "#contact" },
];

/**
 * ============================================================================
 * SECTION 2: HERO (The "First Impression" Text)
 * ============================================================================
 */
export const HERO_CONTENT = {
    badgeText: "Engineering Studio",
    titleLine1: "Next - Gen",
    titleLine2: "Custom Scalable Solution",
    titleLine3: "for Global Market",
    subtitle:
        "At Simjung, we bridge the gap between complex business needs and world-class execution. From tailored KPO strategies to high-efficiency BPO support, we provide the flexible infrastructure your business needs to lead on the global stage.",
    ctaText: "Start Your Ascent",
};

/**
 * ============================================================================
 * SECTION 3: THE STORY (Horizontal Scroll Chapters)
 * ============================================================================
 */
export const ABOUT_CHAPTERS = [
    {
        id: "01",
        title: "Our Foundation",
        tag: "Origins",
        desc: "Every success story begins with a solid foundation. At Simjung, ours is built on reliability, transparency, and a relentless drive for efficiency. We empower global partners by transforming operational bottlenecks into competitive advantages through high-level expertise and bespoke, scalable solutions.",
        icon: Compass,
        color: "border-sky-300",
        accent: "text-sky-500",
        bg: "bg-sky-50/50",
        image: chapterOne,
        imageLabel: "Reliability Focus",
    },
    {
        id: "02",
        title: "Execution",
        tag: "Execution",
        desc: "Execution at Simjung is where strategy meets precision. We bridge the gap between complex requirements and seamless delivery by deploying custom-built workflows and the latest technological tools. By integrating Next-Gen Custom Development directly into our operations, we ensure that every process—from high-level data processing to administrative support—is handled with absolute accuracy and professional agility.",
        icon: Target,
        color: "border-orange-200",
        accent: "text-orange-400",
        bg: "bg-orange-50/50",
        image: chapterTwo,
        imageLabel: "Precision Engineering",
    },
    {
        id: "03",
        title: "Impact",
        tag: "Impact",
        desc: "The true measure of our success is the growth and global reach we unlock for our partners. By building a scalable infrastructure tailored to your needs, we ensure your business remains agile and competitive, regardless of geography. Simjung doesn’t just support your current operations; we create the impact necessary for you to command a leading presence in the international market.",
        icon: Zap,
        color: "border-purple-200",
        accent: "text-purple-400",
        bg: "bg-purple-50/50",
        image: chapterThree,
        imageLabel: "Global Partnership",
    },
];

/**
 * ============================================================================
 * SECTION 4: VERTICALS (Service Details)
 * ============================================================================
 */
export interface DetailedService extends Service {
    features: string[];
    detailedOfferings: string[];
    caseStudy: {
        title: string;
        result: string;
    };
}

export const SERVICES: DetailedService[] = [
    {
        id: "software",
        title: "Software Development and Support",
        trunkTitle: "Software",
        description:
            "Next-gen engineering that scales with your global vision. We integrate AI-driven development and elite staff augmentation into your core workflows.",
        details: [
            "Staff Augmentation",
            "AI-Based Development",
            "DevOps & Cloud",
            "Cyber Security",
        ],
        detailedOfferings: [
            "Flexible IT Staff Augmentation",
            "AI-Driven Application Engineering",
            "Enterprise Cloud & DevOps Automation",
            "Cybersecurity Audits & Hardening",
            "Robotic Process Automation (RPA)",
            "Full-Stack Custom SaaS Solutions",
        ],
        features: [
            "Elite Specialized Talent Pools",
            "AI-Integrated Coding Standards",
            "Zero-Trust Security Protocols",
            "Continuous Deployment Pipeline",
            "Himalayan Precision Support",
        ],
        caseStudy: {
            title: "Global Tech Leader",
            result: "45% Delivery Velocity Increase",
        },
        icon: "Code",
        color: "sky",
    },
    {
        id: "ai",
        title: "AI Annotations",
        trunkTitle: "AI",
        description:
            "High-fidelity data mapping for the pioneers of neural intelligence.",
        details: [
            "Computer Vision",
            "Semantic Labeling",
            "LiDAR Expeditions",
            "NLP Datasets",
        ],
        detailedOfferings: [
            "2D/3D Bounding Box & Polygons",
            "Semantic & Instance Segmentation",
            "LiDAR Point Cloud Annotation",
            "Audio & Video Transcription",
            "NLP Sentiment & Entity Tagging",
        ],
        features: [
            "Edge-to-Edge Precision",
            "Massive Dataset Velocity",
            "ISO-certified Workflows",
            "Domain-Specific Expertise",
        ],
        caseStudy: {
            title: "Autonomous Transit Group",
            result: "12M+ Verified Nodes",
        },
        icon: "Brain",
        color: "purple",
    },
    {
        id: "back-office",
        title: "Back Office solutions",
        trunkTitle: "Back Office",
        description:
            "Providing the operational oxygen and seamless workflow continuity for global enterprises.",
        details: [
            "Data Management",
            "Workflow Optimization",
            "Process Digitization",
            "CX Support",
        ],
        detailedOfferings: [
            "High-Volume Data Processing",
            "Multilingual Customer Support",
            "Digital Document Archiving",
            "Inventory & Supply Chain Admin",
            "HR & Payroll Operational Flow",
        ],
        features: [
            "24/7 Service Reliability",
            "High-Speed Data Processing",
            "Operational Efficiency Audits",
            "Flexible Resource Scaling",
        ],
        caseStudy: {
            title: "Global Logistics Hub",
            result: "30% Throughput Increase",
        },
        icon: "Briefcase",
        color: "blue",
    },
    {
        id: "finance",
        title: "Bookkeeping and Accounting",
        trunkTitle: "Bookkeeping",
        description:
            "Zen-like precision in financial reporting with absolute Himalayan rigour.",
        details: [
            "Global Ledgering",
            "Tax Compliance",
            "Audit Support",
            "Payroll Management",
        ],
        detailedOfferings: [
            "Multi-Country Accounts Payable/Receivable",
            "Tax Preparation & Filing Support",
            "Internal Audit & Gap Analysis",
            "Financial Statement Preparation",
            "Cloud-Based Inventory Accounting",
        ],
        features: [
            "Multi-currency Management",
            "Real-time Financial Dashboards",
            "GAAP & IFRS Standards",
            "Zero-Error Record Keeping",
        ],
        caseStudy: {
            title: "Tokyo FinTech Core",
            result: "100% Audit Compliance",
        },
        icon: "Calculator",
        color: "orange",
    },
    {
        id: "engineering",
        title: "Civil Engineering and Architecture",
        trunkTitle: "Civil Engineering",
        description:
            "Architecting physical and digital foundations through structural logic and BIM expertise.",
        details: [
            "BIM Level 3 Modeling",
            "Digital Twins",
            "Clash Resolution",
            "Generative Design",
        ],
        detailedOfferings: [
            "3D BIM Modeling (LOD 100-500)",
            "Structural Analysis & Design",
            "VDC & Clash Detection Reports",
            "Architecture & Interior Design Support",
            "Quantity Surveying & Estimation",
        ],
        features: [
            "Precision VDC Strategy",
            "Sustainability Logic",
            "LOD 500 Deliverables",
            "Cross-Domain Synergy",
        ],
        caseStudy: {
            title: "Skyline Infrastructure UK",
            result: "14 Landmark Deliveries",
        },
        icon: "Ruler",
        color: "sky",
    },
];

/**
 * ============================================================================
 * SECTION 5: THE FOUNDERS (Leadership Bios)
 * ============================================================================
 */
export const FOUNDERS = [
    {
        name: "Karvika Thapa",
        role: "Founder & CEO",
        bio: "Simjung was founded by Karvika Thapa with a simple but powerful vision—to create opportunities, build global connections, and prove that world-class talent can thrive from Nepal.\n\nWhat started as a small initiative has grown into a company that is not only delivering BPO, KPO, and development solutions globally, but also changing lives at home. By creating meaningful employment—especially for young people and women—Simjung has become a platform for empowerment, confidence, and financial independence.\n\nKarvika’s journey is rooted in resilience, purpose, and belief in people. Under her leadership, Simjung has built trusted partnerships across countries, while quietly contributing to the growth of Nepal’s digital economy and its presence on the global stage.\n\nFor Karvika, Simjung is more than a company. It’s a movement to create impact, one opportunity, one client, and one story at a time.",
        strengths: ["Visionary Leadership", "Global Strategy", "Social Impact"],
        image: karvikaPhoto,
        accent: "sky",
    },
];

/**
 * ============================================================================
 * SECTION 6: CLIENT FEEDBACK & PARTNERS
 * ============================================================================
 */
export const TESTIMONIALS: Testimonial[] = [
    {
        text: "Simjung has been with us since the beginning of our startup journey. As we expand into Europe and North America, their ability to provide scalable, fully customizable solutions has been critical. Their AI tagging team delivers high-quality results we can rely on.",
        author: "Executive Team",
        role: "International Client",
        company: "AI Annotation Partner",
        image: dummyLogo,
    },
    {
        text: "We’ve worked with Simjung for over 8 years. They bring a rare ability to build customizable solutions that truly match client needs. Together, we’ve supported large and demanding clients with flexible, reliable, and scalable solutions.",
        author: "Management",
        role: "Strategic Partner",
        company: "Kavadev (Israel)",
        image: kavadevLogo,
    },
    {
        text: "Our partnership with Simjung is built for the long term. They adapt quickly and consistently deliver with reliability and care. They’re not just a service provider—they’re a partner we truly rely on.",
        author: "Product Lead",
        role: "Official Partner",
        company: "Verktek (Iceland)",
        image: verktekLogo,
    },
];

export const PARTNERS: Partner[] = [
    {
        country: "Israel",
        flag: "🇮🇱",
        name: "CyberSummit Labs",
        focus: "AI & Cybersecurity",
        description:
            "Collaborating on advanced neural network training and security-first data protocols.",
    },
    {
        country: "United States",
        flag: "🇺🇸",
        name: "Nexus Strategy Group",
        focus: "Enterprise Growth",
        description:
            "Driving North American market expansion and high-level project management standards.",
    },
    {
        country: "South Africa",
        flag: "🇿🇦",
        name: "Ubuntu Tech Hub",
        focus: "Emerging Markets BPO",
        description:
            "Scaling operational capacity and talent exchange programs for sub-Saharan projects.",
    },
    {
        country: "Iceland",
        flag: "🇮🇸",
        name: "Glacier Cloud Solutions",
        focus: "Sustainable Infra",
        description:
            "Developing green cloud infrastructure and low-latency data pipelines for Nordic clients.",
    },
];

export const CLIENT_LOGOS = [
    "https://cdn.worldvectorlogo.com/logos/google-2.svg",
    kavadevLogo,
    verktekLogo,
    "https://cdn.worldvectorlogo.com/logos/tesla-9.svg",
    "https://cdn.worldvectorlogo.com/logos/adobe-2.svg",
    "https://cdn.worldvectorlogo.com/logos/shopify.svg",
];

/**
 * ============================================================================
 * SECTION 7: ADVANTAGES & CONTACT
 * ============================================================================
 */
export const WHY_US_ADVANTAGES = [
    {
        title: "Technical Talent",
        desc: "We hire from the top 5% of Nepal's engineers and BPO professionals, providing elite human-in-the-loop services with bespoke precision.",
        icon: Users,
        color: "text-orange-500",
        bg: "bg-orange-50/50",
    },
    {
        title: "24/7 Strategic Continuity",
        desc: "Create a seamless development cycle with the US. When their workday ends, our studio takes the baton, ensuring continuous momentum and overnight progress.",
        icon: Clock,
        color: "text-sky-500",
        bg: "bg-white",
    },
    {
        title: "Cost-to-Value Peak",
        desc: "Achieve US-grade output at offshore rates. We eliminate the overhead of traditional firms while maintaining high-altitude performance.",
        icon: Zap,
        color: "text-purple-500",
        bg: "bg-purple-50/50",
    },
];

export const CONTACT_DETAILS = {
    email: "hello@simjung.com.np",
    phone: "+977-1-4567890",
    address: "Naxal Bhagawati, Kathmandu, Nepal",
    zip: "44600",
};

export const ASCENT_PROCESS = [
    {
        title: "Base Camp",
        desc: "Discovery and alignment. We understand your vision, workflows, and quality standards.",
        icon: Shield,
        tag: "Phase 01",
    },
    {
        title: "Vertical Integration",
        desc: "Building your dedicated Himalayan team. Talent selection and domain-specific training.",
        icon: Rocket,
        tag: "Phase 02",
    },
    {
        title: "Peak Performance",
        desc: "ISO-certified delivery and continuous feedback loops for scaling precision.",
        icon: TrendingUp,
        tag: "Phase 03",
    },
];
