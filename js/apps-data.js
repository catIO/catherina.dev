/**
 * catherina.dev App Store Catalog
 * Curated list of apps developed by Catherina (catIO)
 */

const APPS_DATA = [
    {
        id: "bright-sight",
        title: "Bright Sight",
        subtitle: "AI-powered classical guitar sight-reading practice app",
        category: "Music & Education",
        categoryKey: "music",
        badge: "AI Powered",
        icon: "assets/icons/bright-sight.png",
        rating: "5.0",
        appUrl: "https://bright-sight.app/",
        repoUrl: "https://github.com/catIO/bright-sight",
        platform: "Web & Mobile PWA",
        status: "Live Web App",
        description: "Bright Sight is an AI-powered classical guitar sight-reading practice application. It generates unlimited MusicXML exercises for Grades 1 through 8 using Google Gemini AI, renders high-fidelity sheet music via OpenSheetMusicDisplay (OSMD), stores exercises in Supabase, and provides synchronized Web Audio metronome playback.",
        features: [
            "AI-generated classical guitar sight-reading exercises tailored for Grades 1–8",
            "Grade-specific pedagogical rules governing note ranges, positions, and rhythm complexity",
            "Crisp vector sheet music rendering using OpenSheetMusicDisplay (OSMD)",
            "Web Audio API metronome playback with adjustable tempo and lead-in clicks",
            "Cloud exercise library powered by Supabase with search and community sharing"
        ],
        techStack: ["React", "TypeScript", "Google Gemini AI", "OpenSheetMusicDisplay", "Web Audio API", "Supabase", "Tailwind CSS", "Netlify"]
    },
    {
        id: "score-tone",
        title: "ScoreTone",
        subtitle: "High-performance PDF sheet music viewer & annotator",
        category: "Music & Productivity",
        categoryKey: "music",
        badge: "Musician Essential",
        icon: "assets/icons/score-tone.png",
        rating: "5.0",
        appUrl: "https://score.practice-mate.app/",
        repoUrl: "https://github.com/catIO/score-tone",
        platform: "PWA & Tablet Optimized",
        status: "Live PWA",
        description: "ScoreTone is a high-performance, tablet-friendly Progressive Web App (PWA) designed for musicians to view and practice PDF music scores. It provides advanced display color adjustments, instant local file loading, offline caching, and Google Drive integration via Google Picker.",
        features: [
            "Optimized PDF.js rendering engine designed to handle large scores without browser lag",
            "Custom eye-strain reduction filters: dark mode, warm sepia, inverted, and high-contrast views",
            "Offline-first PWA architecture with full local caching and instant resume",
            "Direct Google Drive cloud picker integration to quickly pull sheet music",
            "Hands-free and tablet-optimized page-turning interface"
        ],
        techStack: ["React", "TypeScript", "PDF.js", "PWA / Service Worker", "Google Drive API", "Tailwind CSS", "Vite", "Netlify"]
    },
    {
        id: "practice-mirror",
        title: "Practice Mirror",
        subtitle: "Visual feedback & practice recording with local trimming",
        category: "Music & Video",
        categoryKey: "music",
        badge: "Offline First",
        icon: "assets/icons/practice-mirror.png?v=2",
        rating: "4.9",
        appUrl: "https://mirror.practice-mate.app/",
        repoUrl: "https://github.com/catIO/practice-mirror",
        platform: "Web & PWA",
        status: "Live Web App",
        description: "An offline-first practice tool designed to help musicians record practice sessions for instant self-evaluations or for sharing with teachers via direct YouTube uploads. Captures practice sessions directly in the browser with zero cloud storage footprint.",
        features: [
            "Latency-free visual mirror mode for real-time study of hand placement, bow positioning, and posture",
            "High-quality local video recording directly in the browser via MediaStream API",
            "Client-side video trimming and transcoding powered by WebAssembly (FFmpeg)",
            "Direct YouTube upload integration with unlisted privacy presets for teacher feedback",
            "Completely private with local client-side processing and zero server storage"
        ],
        techStack: ["Vanilla JavaScript", "WebAssembly (FFmpeg)", "MediaStream API", "YouTube Data API", "Netlify Functions", "PWA"]
    },
    {
        id: "practice-mate",
        title: "Practice Mate",
        subtitle: "Focused practice timer, routine planner, and practice logger",
        category: "Music & Productivity",
        categoryKey: "productivity",
        badge: "Productivity",
        icon: "assets/icons/practice-mate.png",
        rating: "4.9",
        appUrl: "https://timer.practice-mate.app/",
        repoUrl: "https://github.com/catIO/practice-timer",
        platform: "Web & Mobile",
        status: "Live Web App",
        description: "Practice Mate is a focused practice timer, routine planner, and logging application for musicians. Designed to cultivate deep focus through Pomodoro intervals, per-piece countdown segment timers, customizable practice routines, and cumulative session analytics.",
        features: [
            "Pomodoro timer with customizable work and break session durations",
            "Iteration tracking to log multiple work/break cycles during extensive practice blocks",
            "Segment timer for per-piece countdowns with daily/weekly goals and overtime mode",
            "Structured practice plans with intuitive drag-and-drop item reordering",
            "Comprehensive analytics logging cumulative practice minutes and consistency"
        ],
        techStack: ["React", "TypeScript", "Vite", "Supabase", "Tailwind CSS", "Web Audio API", "Netlify"]
    },
    {
        id: "spot-practice",
        title: "Spot Practice",
        subtitle: "Isolate and master difficult passages via MusicXML",
        category: "Music & Education",
        categoryKey: "music",
        badge: "Passage Isolation",
        icon: "assets/icons/spot-practice.png",
        rating: "4.9",
        appUrl: "https://spot.practice-mate.app/",
        repoUrl: "https://github.com/catIO/spot-practice",
        platform: "Web & Mobile PWA",
        status: "Live Web App",
        description: "Spot Practice is a focused passage practice tool for musicians. Upload your MusicXML and MXL scores to isolate specific measure ranges, eliminate reading clutter, and master technically demanding sections through randomized interleaved repetition.",
        features: [
            "Interactive MusicXML & MXL sheet music rendering",
            "Spot Mode to isolate 2, 3, 4, 8, or 12-bar measure segments",
            "Randomized passage selection for interleaved learning",
            "Full score view with page navigation and zoom controls",
            "Toggleable measure numbers and distraction-free interface"
        ],
        techStack: ["Vanilla JavaScript", "OpenSheetMusicDisplay", "Web Audio API", "PWA", "Netlify"]
    },
    {
        id: "click-up",
        title: "Click Up",
        subtitle: "Interleaved tempo progression & speed building practice tool",
        category: "Music & Tools",
        categoryKey: "music",
        badge: "Tempo Builder",
        icon: "assets/icons/click-up.png",
        rating: "4.9",
        appUrl: "https://clickup.practice-mate.app/",
        repoUrl: "https://github.com/catIO/click-up",
        platform: "Web & Mobile PWA",
        status: "Live Web App",
        description: "Click Up is an advanced tempo progression practice tool based on Molly Gebrian's interleaved learning technique. Designed to help musicians build speed, precision, and motor control by practicing musical measure segments across automated tempo increments with built-in metronome subdivisions.",
        features: [
            "Interleaved practice method based on Molly Gebrian's cognitive research",
            "Interactive MusicXML score rendering with measure-based isolation",
            "Automated incremental tempo builder with customizable bpm steps",
            "Context cycle variations and structured repetition intervals",
            "Clean single-screen interface optimized for mobile and tablet stands"
        ],
        techStack: ["React", "TypeScript", "MusicXML", "Web Audio API", "PWA", "Tailwind CSS", "Netlify"]
    },
    {
        id: "koh-pilot",
        title: "Practice Koh-Pilot",
        subtitle: "Structured repetition & practice passage mastery companion",
        category: "Music & Tools",
        categoryKey: "music",
        badge: "Repetition Tracker",
        icon: "assets/icons/koh-pilot.png",
        rating: "4.9",
        appUrl: "https://koh.practice-mate.app/",
        repoUrl: "https://github.com/catIO/koh-pilot",
        platform: "Web & Mobile PWA",
        status: "Live Web App",
        description: "Practice Koh-Pilot is a structured repetition tool designed to help musicians master difficult musical passages. Set custom repetition targets, log consecutive clean executions with instant resets on slip-ups, and maintain steady tempo with an integrated Web Audio metronome.",
        features: [
            "Target repetition counters with consecutive clean run tracking",
            "Instant error reset mode to ensure true passage mastery",
            "Integrated Web Audio metronome with tempo and subdivision controls",
            "Visual celebration animations upon achieving repetition goals",
            "Minimalist, distraction-free interface optimized for music stands"
        ],
        techStack: ["React", "TypeScript", "Vite", "Web Audio API", "Tailwind CSS", "Netlify"]
    },
    /*
    {
        id: "practice-planner",
        title: "Practice Planner",
        subtitle: "Weekly practice planner & repertoire maintenance schedule",
        category: "Music & Productivity",
        categoryKey: "productivity",
        badge: "Repertoire Planner",
        icon: "assets/icons/practice-planner.png",
        rating: "4.8",
        appUrl: "https://planning-mate.netlify.app/",
        repoUrl: "https://github.com/catIO/practice-planner",
        platform: "Web & Mobile PWA",
        status: "Live Web App",
        description: "Practice Planner (Planning Mate) is a weekly practice planner that helps musicians organize learning and maintaining repertoire on a limited schedule. Supports structured weekly allocation, repertoire tracking, and local backup export/import.",
        features: [
            "Weekly practice planning and time allocation for busy musicians",
            "Active and maintenance repertoire cataloging",
            "Offline-first local browser storage with data export & import",
            "Clean task lists and schedule pacing",
            "Mobile and desktop responsive interface"
        ],
        techStack: ["React", "TypeScript", "Vite", "PWA", "Tailwind CSS", "Netlify"]
    },
    */
    {
        id: "rhythm-weaver",
        title: "Rhythm Weaver",
        subtitle: "Precision metronome with acoustic-engineered tick sounds",
        category: "Music & Tools",
        categoryKey: "music",
        badge: "Precision Audio",
        icon: "assets/icons/rhythm-weaver.png",
        rating: "5.0",
        appUrl: "https://rhythm.practice-mate.app/",
        repoUrl: "https://github.com/catIO/metronome",
        platform: "Web & Mobile PWA",
        status: "Live Web App",
        description: "A modern metronome customized to meet musician needs with everything on one unified screen. Engineered with advanced audio options to provide pleasant, non-fatiguing ticking sounds, complex rhythm subdivisions, and visual beat indicators.",
        features: [
            "Carefully designed sound library to eliminate auditory fatigue during long practice sessions",
            "Clean single-screen layout with instant access to tempo, divisions, and sound controls",
            "Complex meter support, odd time signatures, and polyrhythm subdivision patterns",
            "High-visibility visual beat animations synchronized with Web Audio timing",
            "Integrated countdown timer for pacing practice sessions"
        ],
        techStack: ["React", "TypeScript", "Vite", "Web Audio API", "Tailwind CSS", "Lucide Icons", "Netlify"]
    },
    {
        id: "scaled",
        title: "Scaled",
        subtitle: "Interactive scale, arpeggio, and finger pattern companion",
        category: "Music & Education",
        categoryKey: "music",
        badge: "Interactive",
        icon: "assets/icons/scaled.png?v=2",
        rating: "4.8",
        appUrl: "https://scaled.practice-mate.app/",
        repoUrl: "https://github.com/catIO/scaled",
        platform: "Web & Tablet",
        status: "Live Web App",
        description: "A music practice application for learning and practicing scales, modes, and arpeggios. Helps musicians internalize finger patterns, navigate intervals, and build technique with interactive fretboard diagrams and synchronized metronomes.",
        features: [
            "Interactive scale and mode visualization with custom key and pattern selection",
            "Clear finger pattern overlays and position shift guides",
            "Synchronized metronome with automatic tempo ramping for progressive speed building",
            "Goal setting and session tracking to measure scale fluency",
            "Modern, distraction-free interface built with dark mode by default"
        ],
        techStack: ["React", "TypeScript", "Vite", "shadcn/ui", "Tailwind CSS", "Lucide Icons", "Netlify"]
    },
    {
        id: "pitch-mate",
        title: "Pitch Mate",
        subtitle: "Chromatic instrument tuner powered by YIN pitch detection",
        category: "Music & Utilities",
        categoryKey: "tools",
        badge: "High Precision",
        icon: "assets/icons/pitch-mate.png?v=2",
        rating: "4.8",
        appUrl: "https://github.com/catIO/Pitch-Mate",
        repoUrl: "https://github.com/catIO/Pitch-Mate",
        platform: "Flutter",
        status: "Android",
        description: "A chromatic guitar tuner application with real-time pitch detection. Utilizes the robust YIN pitch detection algorithm to ensure fast, jitter-free frequency recognition even in noisy acoustic environments.",
        features: [
            "YIN pitch detection algorithm delivering stable, fast fundamental frequency recognition",
            "Real-time cents deviation meter with smooth needle animations and visual in-tune feedback",
            "Audio playback engine for generating reference pitch tuning tones",
            "Standard guitar tuning and chromatic detection across the full musical spectrum",
        ],
        techStack: ["Flutter", "Dart", "YIN Algorithm", "AudioCapture", "Audioplayers", "Google Fonts"]
    },
    {
        id: "oikaze",
        title: "Oikaze",
        subtitle: "Minimalist weather app with air quality & storm detection",
        category: "Weather & Lifestyle",
        categoryKey: "tools",
        badge: "Zero Build PWA",
        icon: "assets/icons/oikaze.png",
        rating: "5.0",
        appUrl: "https://github.com/catIO/weather",
        repoUrl: "https://github.com/catIO/weather",
        platform: "PWA (Zero Dependencies)",
        status: "Live PWA",
        description: "Oikaze (追い風 - 'tailwind') is a minimalist weather PWA built with vanilla JavaScript. No frameworks, no build step. Combines multi-signal weather observations, Open-Meteo Air Quality integration, wildfire smoke/haze detection, and convective storm alerting.",
        features: [
            "Zero-framework, zero-build-step vanilla JavaScript and CSS PWA with offline caching",
            "Smart weather detection deriving conditions from minutely, hourly, and air quality signals",
            "Particulate sensing (PM2.5, PM10, US AQI) to detect wildfire smoke and haze conditions",
            "Convective storm alerts using Lightning Potential Index (LPI) and CAPE with a 2-hour lookahead",
            "Activity outlook safety recommendations powered by Netlify Edge Functions"
        ],
        techStack: ["Vanilla JavaScript", "CSS3", "Service Worker", "Open-Meteo Air Quality API", "Netlify Edge Functions"]
    },
    {
        id: "retrogram",
        title: "Retrogram",
        subtitle: "Retro square photo gallery powered by Sanity.io CMS",
        category: "Photography & Arts",
        categoryKey: "creative",
        badge: "Creative Showcase",
        icon: "assets/icons/retrogram.svg",
        rating: "4.9",
        appUrl: "https://github.com/catIO/retrogram",
        repoUrl: "https://github.com/catIO/retrogram",
        platform: "Web & Content Studio",
        status: "Live Web App",
        description: "Retrogram is a vintage-inspired square photography gallery. Built with React and Sanity.io, it offers an ultra-clean, read-only gallery connected to the Sanity API-CDN with zero client-side credentials, complemented by an authenticated Sanity Content Studio for visual curation.",
        features: [
            "Minimalist square-format photo gallery celebrating classic analog and film aesthetics",
            "High-performance read-only architecture querying Sanity API-CDN with instant image delivery",
            "Zero client-side secrets or credentials required for public gallery browsing",
            "Full Sanity Content Studio v3 for hotspot cropping, metadata, and asset management",
            "Responsive masonry-style square layout with smooth lightbox interactions"
        ],
        techStack: ["React", "TypeScript", "Vite", "Sanity.io v3", "Tailwind CSS", "Netlify"]
    }
];

if (typeof window !== 'undefined') {
    window.APPS_DATA = APPS_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = APPS_DATA;
}

