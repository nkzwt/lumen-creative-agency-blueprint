import { Palette, Code, Zap, Globe, Layers, Users, Rocket, Heart, Shield } from 'lucide-react';
export const SERVICES = [
  {
    id: 's1',
    slug: 'brand-identity',
    title: 'Brand Identity',
    icon: Palette,
    shortDesc: 'Visual storytelling that resonates with your audience.',
    features: ['Logo Design', 'Typography Systems', 'Color Theory', 'Brand Guidelines'],
    content: 'We craft visual identities that capture the essence of your brand. Our process involves deep research into your market positioning to create a design language that is both unique and timeless.',
    category: 'Design'
  },
  {
    id: 's2',
    slug: 'web-development',
    title: 'Web Development',
    icon: Code,
    shortDesc: 'High-performance digital products built for scale.',
    features: ['React/Next.js', 'Cloudflare Workers', 'E-commerce', 'Custom Web Apps'],
    content: 'Our development team builds lightning-fast, secure, and accessible web applications. We prioritize performance and user experience using the latest modern frameworks.',
    category: 'Development'
  },
  {
    id: 's3',
    slug: 'digital-strategy',
    title: 'Digital Strategy',
    icon: Zap,
    shortDesc: 'Data-driven growth plans to dominate your niche.',
    features: ['Market Analysis', 'SEO Optimization', 'Conversion Tracking', 'Content Strategy'],
    content: 'We help brands navigate the complex digital landscape with clear, actionable strategies that drive measurable growth and long-term success.',
    category: 'Marketing'
  },
  {
    id: 's4',
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    icon: Layers,
    shortDesc: 'Seamless interfaces designed for human interaction.',
    features: ['User Research', 'Prototyping', 'Interface Design', 'Usability Testing'],
    content: 'We design intuitive digital interfaces that delight users. By focusing on user behavior and psychology, we create journeys that feel natural and effortless.',
    category: 'Design'
  }
];
export const TEAM_MEMBERS = [
  {
    id: 't1',
    name: 'Alex Rivera',
    role: 'Creative Director',
    bio: 'With over 12 years of experience in global design, Alex leads our creative vision with a focus on minimalist aesthetics and functional art.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400',
    socials: { twitter: '#', linkedin: '#', github: '#' }
  },
  {
    id: 't2',
    name: 'Sarah Chen',
    role: 'Lead Developer',
    bio: 'Sarah is an expert in distributed systems and modern frontend architectures. She ensures every project is as fast as it is beautiful.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=400',
    socials: { twitter: '#', linkedin: '#', github: '#' }
  },
  {
    id: 't3',
    name: 'Marcus Thorne',
    role: 'Strategy Lead',
    bio: 'Marcus combines data science with creative intuition to build growth strategies that have helped startups secure over $50M in funding.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400',
    socials: { twitter: '#', linkedin: '#', github: '#' }
  }
];
export const CORE_VALUES = [
  {
    title: 'Visionary Design',
    description: 'We don\'t follow trends; we set them through rigorous exploration.',
    icon: Rocket
  },
  {
    title: 'Human Centric',
    description: 'Technology should serve people, not the other way around.',
    icon: Heart
  },
  {
    title: 'Unwavering Integrity',
    description: 'Transparency is the foundation of every partnership we build.',
    icon: Shield
  }
];
export const PROJECTS = [
  {
    id: 'p1',
    slug: 'nexus-finance',
    title: 'Nexus Finance',
    category: 'Web',
    client: 'Nexus Global',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'A revolutionary fintech dashboard focusing on clarity and real-time data visualization.'
  },
  {
    id: 'p2',
    slug: 'aura-skincare',
    title: 'Aura Skincare',
    category: 'Branding',
    client: 'Aura Labs',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Minimalist brand identity for a premium sustainable skincare line.'
  },
  {
    id: 'p3',
    slug: 'vortex-app',
    title: 'Vortex App',
    category: 'Design',
    client: 'Vortex Tech',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'A high-fidelity prototype for a next-gen social interaction platform.'
  },
  {
    id: 'p4',
    slug: 'lumina-real-estate',
    title: 'Lumina Real Estate',
    category: 'Web',
    client: 'Lumina Group',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Hyper-fast property search engine with immersive virtual tours.'
  }
];
export const BLOG_POSTS = [
  {
    id: 'b1',
    slug: 'minimalism-in-modern-web',
    title: 'The Power of Minimalism in Modern Web Design',
    excerpt: 'Why less is almost always more when it comes to user conversion and brand trust.',
    content: 'Minimalism is not just about white space. It is about reducing the noise so the message can be heard. In this article, we explore the psychological impact of clean layouts and how they lead to better user retention...',
    author: TEAM_MEMBERS[0],
    date: 'May 12, 2024',
    readingTime: '5 min read',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1200&h=600'
  },
  {
    id: 'b2',
    slug: 'future-of-distributed-systems',
    title: 'The Future of Distributed Systems at the Edge',
    excerpt: 'How Cloudflare Workers and Durable Objects are changing the way we think about state.',
    content: 'Latency is the enemy of experience. By moving logic to the edge, we can provide near-instant interactions regardless of user location...',
    author: TEAM_MEMBERS[1],
    date: 'June 05, 2024',
    readingTime: '8 min read',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200&h=600'
  }
];