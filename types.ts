export interface Service {
    id: string;
    title: string;
    trunkTitle: string;
    description: string;
    details: string[];
    icon: string;
    color: string;
}

export interface NavLink {
    label: string;
    href: string;
}

export interface Testimonial {
    text: string;
    author: string;
    role: string;
    company: string;
    image?: string;
}

export interface Partner {
    country: string;
    flag: string;
    name: string;
    focus: string;
    description: string;
}
