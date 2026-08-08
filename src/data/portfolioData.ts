import { Project, Service, WhyChooseFeature, WorkflowStep, ToolItem, StatItem, Testimonial, FAQItem } from '../types';

export const HERO_DATA = {
  name: "Deepak Rawat",
  label: "Video Editor & Visual Storyteller",
  tagline: "I transform raw footage into engaging videos that capture attention, tell stories, and leave a lasting impact.",
  experienceYears: 1,
  completedProjects: 50,
  happyClients: 50,
  totalViews: "15M+",
};

export const ABOUT_DATA = {
  heading: "Hi, I'm Deepak Rawat",
  subheading: "Passionate Video Editor & Visual Storyteller",
  bioParagraph1: "Hi, I’m Deepak Rawat, a passionate video editor who turns raw footage into engaging, high quality videos. I specialize in cinematic edits, smooth transitions, color grading, and short-form content. My goal is to create visually appealing videos that tell stories and leave a lasting impact.",
  bioParagraph2: "",
  headshotUrl: "https://raw.githubusercontent.com/mivsr-spec/assets/main/photo_6066730409447766227_c.jpg",
  workspaceUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
  highlights: [
    "3+ Years Professional Experience",
    "Pacing & Retention Optimized Edits",
    "Cinematic Color Grading & Audio Mixing",
    "100+ Commercial & Social Projects Delivered"
  ]
};

export const PROJECTS_DATA: (Project & { customTags?: string[]; categoryDescription?: string })[] = [
  {
    id: "project-ocean",
    title: "Aesthetic Edits",
    client: "Coastal Wave",
    category: "Promotional",
    format: "16:9",
    thumbnail: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    embedType: "video",
    description: "Promotional video featuring high-definition ocean footage with dynamic speed ramping, seamless whip transitions, and rich color grading.",
    categoryDescription: "Promotional video with dynamic transitions",
    customTags: ["Color Grading", "VFX"],
    softwareUsed: ["Adobe Premiere Pro", "DaVinci Resolve"],
    views: "1.4M",
    turnaroundTime: "2 Days",
    featured: true,
    instagramUrl: "https://www.instagram.com/reel/DNiuxkJSLvl/?igsh=czNjZ3JncW9kZHZl"
  },
  {
    id: "project-dunes",
    title: "Aesthetic Edits",
    client: "Sahara Expeditions",
    category: "Color Grading",
    format: "16:9",
    thumbnail: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    embedType: "video",
    description: "Cinematic travel film capturing the breathtaking beauty of sand dunes through artistic lensmanship, rhythm-matched cuts, and warm sunset grading.",
    categoryDescription: "Cinematic travel content with smooth pacing",
    customTags: ["Cinematic", "Travel"],
    softwareUsed: ["DaVinci Resolve", "Adobe Premiere Pro"],
    views: "920K",
    turnaroundTime: "3 Days",
    featured: true,
    instagramUrl: "https://www.instagram.com/reel/DNSvry9yVM6/?igsh=MWdrMW9scXRhdnhseA=="
  },
  {
    id: "project-urban",
    title: "Aesthetic Edits",
    client: "Metro Life",
    category: "Short Form",
    format: "16:9",
    thumbnail: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    embedType: "video",
    description: "Street photography montage with modern fast-paced edits, neon contrast overlays, and rhythmic audio beats.",
    categoryDescription: "Street photography montage with modern edits",
    customTags: ["Urban", "Montage"],
    softwareUsed: ["Adobe After Effects", "Premiere Pro"],
    views: "1.1M",
    turnaroundTime: "2 Days",
    featured: true,
    instagramUrl: "https://www.instagram.com/reel/DOa_o4UkjXh/?igsh=MXBheHVsZXJyMHZ3aQ=="
  },
  {
    id: "project-brand",
    title: "Aesthetic Edits",
    client: "Apex Tech",
    category: "Promotional",
    format: "9:16",
    thumbnail: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    embedType: "video",
    description: "Product showcase commercial with sleek kinetic motion graphics, clean lower thirds, and high-impact callouts.",
    categoryDescription: "Product showcase with motion graphics",
    customTags: ["Branding", "Commercial"],
    softwareUsed: ["After Effects", "Photoshop"],
    views: "2.8M",
    turnaroundTime: "1 Day",
    featured: true,
    instagramUrl: "https://www.instagram.com/reel/DNiuxkJSLvl/?igsh=czNjZ3JncW9kZHZl"
  },
  {
    id: "project-lifestyle",
    title: "Aesthetic Edits",
    client: "Vibe Media",
    category: "Short Form",
    format: "9:16",
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutback2012.mp4",
    embedType: "video",
    description: "Social media short-form video edit engineered for high retention using fast cuts, pop-up captions, and trending sound design.",
    categoryDescription: "Social media content with engaging cuts",
    customTags: ["Reels", "Lifestyle"],
    softwareUsed: ["Premiere Pro", "CapCut"],
    views: "3.2M",
    turnaroundTime: "1 Day",
    featured: true,
    instagramUrl: "https://www.instagram.com/reel/DNSvry9yVM6/?igsh=MWdrMW9scXRhdnhseA=="
  },
  {
    id: "project-tech",
    title: "Aesthetic Edits",
    client: "TechVerse",
    category: "YouTube",
    format: "16:9",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    embedType: "video",
    description: "YouTube tech review video edit with crisp A-roll cuts, dynamic b-roll callouts, and clean studio color correction.",
    categoryDescription: "YouTube content with clean transitions",
    customTags: ["YouTube", "Tech"],
    softwareUsed: ["Premiere Pro", "DaVinci"],
    views: "650K",
    turnaroundTime: "2 Days",
    featured: true,
    instagramUrl: "https://www.instagram.com/reel/DOa_o4UkjXh/?igsh=MXBheHVsZXJyMHZ3aQ=="
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: "service-1",
    title: "YouTube Video Editing",
    description: "Professional edits that keep viewers engaged.",
    iconName: "Play",
    deliverables: ["Retention Hooks & Intro Polish", "B-roll & Sound Design", "Subtitles & Graphics", "Color Correction"],
    popularFor: "YouTubers, Educators & Vloggers"
  },
  {
    id: "service-2",
    title: "Short Form Content",
    description: "Instagram Reels, YouTube Shorts, and TikTok videos designed to stop the scroll.",
    iconName: "Smartphone",
    deliverables: ["Dynamic Pop-up Captions", "Sound FX & Visual Hooks", "Vertical 9:16 Formatting", "Fast 24-Hour Turnaround"],
    popularFor: "Content Creators & Influencers"
  },
  {
    id: "service-3",
    title: "Promotional Videos",
    description: "Creative edits that help brands showcase their products and services.",
    iconName: "Megaphone",
    deliverables: ["Brand Identity Matching", "Product Highlight Callouts", "High-Converting Call To Actions", "Multi-Platform Export"],
    popularFor: "E-Commerce & Digital Brands"
  },
  {
    id: "service-4",
    title: "Color Grading",
    description: "Balanced colors that give every video a polished cinematic look.",
    iconName: "Palette",
    deliverables: ["Skin Tone Correction", "Custom LUT Creation", "Mood & Genre Matching", "HDR / Rec.709 Color Space"],
    popularFor: "Films, Commercials & Music Videos"
  },
  {
    id: "service-5",
    title: "Motion Graphics",
    description: "Modern titles, transitions, and animations that enhance storytelling.",
    iconName: "Sparkles",
    deliverables: ["Animated Lower Thirds", "Logo Stings & Intros", "Infographic Animations", "Custom Transitions"],
    popularFor: "Tech Reviews & Explainer Videos"
  },
  {
    id: "service-6",
    title: "Audio Enhancement",
    description: "Clear sound, music balancing, and clean audio for a professional finish.",
    iconName: "Volume2",
    deliverables: ["Background Noise Cleanup", "Voice EQ & Compression", "Cinematic SFX Layering", "Copyright-Free Music Sync"],
    popularFor: "Podcasts, Interviews & Films"
  }
];

export const WHY_CHOOSE_DATA: WhyChooseFeature[] = [
  {
    id: "wc-1",
    title: "Creative & Modern Editing",
    description: "Fresh visual style aligned with modern video editing trends and retention strategies.",
    iconName: "Wand2"
  },
  {
    id: "wc-2",
    title: "Fast Turnaround",
    description: "Delivering polished edits strictly within agreed deadlines without compromising quality.",
    iconName: "Zap"
  },
  {
    id: "wc-3",
    title: "High Quality Output",
    description: "Crisp 4K/1080p renders optimized for YouTube, Instagram, TikTok, and web playback.",
    iconName: "Star"
  },
  {
    id: "wc-4",
    title: "Smooth Communication",
    description: "Responsive updates, structured feedback rounds, and transparent project tracking.",
    iconName: "MessageSquare"
  },
  {
    id: "wc-5",
    title: "Detail-Oriented Workflow",
    description: "Meticulous audio sync, frame-accurate cuts, and seamless color management.",
    iconName: "Search"
  },
  {
    id: "wc-6",
    title: "Client Satisfaction First",
    description: "Unlimited revisions within scope until your vision is perfectly realized.",
    iconName: "Heart"
  }
];

export const WORKFLOW_DATA: WorkflowStep[] = [
  {
    number: "01",
    title: "Share Your Vision",
    description: "Tell me about your project and goals.",
    details: "Send raw footage, references, style inspiration, audio preferences, and platform specs."
  },
  {
    number: "02",
    title: "Editing & Creative Direction",
    description: "I craft your story with precision.",
    details: "Structuring cuts, sound design, color grading, motion graphics, and audio balancing."
  },
  {
    number: "03",
    title: "Feedback & Revisions",
    description: "Refine until it's perfect.",
    details: "Review the initial draft via Frame.io link and suggest fine tweaks until 100% satisfied."
  },
  {
    number: "04",
    title: "Final Delivery",
    description: "Receive your polished video.",
    details: "Exported in high-bitrate master formats optimized for YouTube, social media, or broadcast."
  }
];

export const TOOLS_DATA: ToolItem[] = [
  {
    name: "Adobe Premiere Pro",
    shortCode: "Pr",
    iconBg: "bg-indigo-950 border-indigo-500",
    textColor: "text-indigo-400",
    description: "Primary NLE for timeline structuring, multi-cam editing, and audio mixing.",
    category: "Video Editing",
    proficiency: 98
  },
  {
    name: "After Effects",
    shortCode: "Ae",
    iconBg: "bg-purple-950 border-purple-500",
    textColor: "text-purple-400",
    description: "2D/3D motion graphics, kinetic typography, tracking, and visual FX.",
    category: "Motion FX",
    proficiency: 92
  },
  {
    name: "DaVinci Resolve",
    shortCode: "Resolve",
    iconBg: "bg-rose-950 border-rose-500",
    textColor: "text-rose-400",
    description: "Industry-standard color grading node trees and color space transforms.",
    category: "Color Grading",
    proficiency: 95
  },
  {
    name: "Photoshop",
    shortCode: "Ps",
    iconBg: "bg-sky-950 border-sky-500",
    textColor: "text-sky-400",
    description: "YouTube thumbnail design, texture creation, and image prep for motion graphics.",
    category: "Graphic Design",
    proficiency: 90
  },
  {
    name: "Adobe Audition",
    shortCode: "Au",
    iconBg: "bg-teal-950 border-teal-500",
    textColor: "text-teal-400",
    description: "Audio restoration, vocal EQ, compression, and background hum removal.",
    category: "Audio Engineering",
    proficiency: 88
  },
  {
    name: "CapCut Pro",
    shortCode: "CapCut",
    iconBg: "bg-emerald-950 border-emerald-500",
    textColor: "text-emerald-400",
    description: "Fast short-form assembly, trending transitions, and auto-caption styling.",
    category: "Short Form",
    proficiency: 95
  },
  {
    name: "Blender 3D",
    shortCode: "3D",
    iconBg: "bg-amber-950 border-amber-500",
    textColor: "text-amber-400",
    description: "3D product mockups, camera motion paths, and motion overlays.",
    category: "3D & VFX",
    proficiency: 80
  }
];

export const STATS_DATA: StatItem[] = [
  { id: "stat-1", value: 50, suffix: "+", label: "Projects Completed", description: "Across Instagram, & Social media" },
  { id: "stat-2", value: 50, suffix: "+", label: "Happy Clients", description: "Creators, Startups, influencers" },
  { id: "stat-3", value: 1, suffix: "+ year", label: "Years Experience", description: "In Professional Video Editing" },
  { id: "stat-4", value: 15, suffix: "M+", label: "Video Views", description: "Generated Across Social Platforms" },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    quote: "Deepak completely transformed our YouTube channel retention. His cuts are tight, sound design is spot on, and turnaround time is insanely fast!",
    clientName: "Rohan Sharma",
    clientRole: "Tech Content Creator",
    company: "TechPulse India (350K Subs)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    projectType: "YouTube Video Editing"
  },
  {
    id: "test-2",
    quote: "Professional, creative, and always delivers on time. The color grading on our brand launch video exceeded all our expectations.",
    clientName: "Priya Mehta",
    clientRole: "Marketing Lead",
    company: "Aura Apparel",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    projectType: "Brand Promotional Reel"
  },
  {
    id: "test-3",
    quote: "Working with Deepak on our Instagram Reels campaign was effortless. Our engagement shot up by 240% within the first month of publishing his edits!",
    clientName: "Alex Vance",
    clientRole: "Creative Director",
    company: "Vance Media Agency",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    projectType: "Short Form Content"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "How long does video editing take?",
    answer: "Most short-form projects (Reels, TikToks) take 24–48 hours. Long-form YouTube edits typically take 2–4 business days depending on footage length and motion graphic complexity.",
    category: "Timeline"
  },
  {
    id: "faq-2",
    question: "Do you offer revisions?",
    answer: "Yes! Every editing package includes 2 to 3 rounds of revisions to ensure the final output strictly aligns with your creative vision.",
    category: "Revisions"
  },
  {
    id: "faq-3",
    question: "Can you edit short-form content?",
    answer: "Absolutely. Vertical 9:16 videos (Instagram Reels, YouTube Shorts, TikToks) with dynamic animated captions, sound effects, and scroll-stopping hooks are one of my core specialties.",
    category: "Services"
  },
  {
    id: "faq-4",
    question: "How do we start a project together?",
    answer: "Simply fill out the contact form below or click 'Start Your Project'. Send over your raw footage link (Google Drive / Dropbox / WeTransfer), brief guidelines, and reference video styles.",
    category: "Process"
  },
  {
    id: "faq-5",
    question: "What raw files do you accept and how do we transfer them?",
    answer: "I accept MP4, MOV, ProRes, BRAW, or Sony S-Log camera files. You can upload them via Google Drive, Frame.io, Dropbox, or WeTransfer.",
    category: "Technical"
  }
];
