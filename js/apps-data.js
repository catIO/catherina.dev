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
            "Pedagogical rules governing note ranges, positions (I–IX), and polyphonic voices",
            "Interactive Web Audio playalong synthesizer with volume and tempo controls",
            "Crisp vector sheet music rendering with real-time synchronized playback cursor",
            "Keyboard hotkey controls (Space for play/pause, Left Arrow to rewind)",
            "Daily practice goals, streak tracking with celebration confetti, and bookmarking"
        ],
        techStack: ["React", "TypeScript", "Google Gemini AI", "OpenSheetMusicDisplay", "Web Audio API", "Supabase", "Tailwind CSS", "Netlify"]
    },
    {
        id: "score-tone",
        title: "ScoreTone",
        subtitle: "Eye-friendly sheet music reader with PDF deep linking & MusicXML spot practice",
        category: "Music & Productivity",
        categoryKey: "music",
        badge: "Musician Essential",
        icon: "assets/icons/score-tone.png",
        rating: "5.0",
        appUrl: "https://score.practice-mate.app/",
        repoUrl: "https://github.com/catIO/score-tone",
        platform: "PWA & Tablet Optimized",
        status: "Live PWA",
        description: "ScoreTone is an eye-friendly, cross-platform sheet music reader and practice companion for musicians. It eliminates stand glare with curated reading palettes and mathematical ink darkening, offers rich display layouts, enables direct URL deep linking into specific score pages, and supports interactive MusicXML playback with measure-based practice looping.",
        features: [
            "Eye-strain reduction palettes (Warm Paper, Sepia, Ivory, Night Mode, Stage Dim) with mathematical SVG ink darkening for faint scans",
            "Flexible display options: 2-page landscape side-by-side view, fit-to-width, fit-to-height, and continuous vertical scroll",
            "Deep linking into PDF and scores: share direct links opening to exact pages and rehearsal marks",
            "Interactive MusicXML score upload with Web Audio playback and customizable loops for spot practice",
            "Section bookmarks panel for instant rehearsal navigation and saved practice loop jumping",
            "Offline-first PWA caching via Dexie IndexedDB; prevents your screen from dimming or locking while reading music"
        ],
        techStack: ["React", "TypeScript", "PDF.js", "OpenSheetMusicDisplay", "Web Audio API", "PWA / Service Worker", "Google Drive API", "Tailwind CSS", "Vite"]
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
            "Zero-latency visual mirror mode to monitor posture, bow arm angle, and hand mechanics",
            "In-browser video trimming and transcoding powered by client-side WebAssembly (FFmpeg)",
            "Direct YouTube upload integration with unlisted/private presets for teacher feedback",
            "Pre-roll recording countdown timer, audio VU level meter, and quick-rewind controls",
            "Hardware selector for external USB cameras/microphones, plus preview-off battery saver",
            "100% private and offline-capable with zero cloud storage footprint"
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
            "Segment countdown timer for per-piece practice targets with overtime leeway mode",
            "Structured routine planner with drag-and-drop ordering and rich practice notes",
            "Repertoire catalog with embedded YouTube reference links and sheet music URLs",
            "Screen Wake Lock: prevents your screen from dimming or locking while practicing",
            "Shareable teacher lesson plans and cumulative practice consistency analytics",
            "Pomodoro interval timer with iteration cycle tracking via drift-free Web Workers"
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
            "Surgically isolates 2, 3, 4, 8, or 12-bar segments from MusicXML and MXL scores",
            "Randomized interleaved repetition mode to build genuine motor recall",
            "Interactive vector notation rendered with OpenSheetMusicDisplay (OSMD)",
            "One-click toggle between isolated bottleneck view and full-score context with zoom",
            "Distraction-free stand interface with clear measure numbering and zero score clutter"
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
            "Interleaved tempo progression based on Dr. Molly Gebrian's cognitive neuroscience",
            "Automated stepped tempo cycles alternating between high-speed bursts and recovery tempos",
            "Measure-based MusicXML passage isolation with synchronized metronome pacing",
            "Context cycle variations and automated subdivision shifts between tempo increments",
            "Single-screen, music-stand-friendly interface for fast BPM adjustments without tension"
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
            "Consecutive clean repetition tracking with instant reset on slip-ups",
            "Integrated Web Audio metronome with tempo control and beat subdivisions",
            "Target repetition counters enforcing deliberate practice and stage readiness",
            "Visual milestone celebration animations upon reaching consecutive mastery goals",
            "Large high-contrast touch targets optimized for hands-free music stand use"
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
            "Acoustic Web Audio synthesis with lowpass/bandpass filtering to eliminate ear fatigue",
            "Zero-submenu unified screen with instant access to tempo, meter, and sound profiles",
            "Complex meter support, odd time signatures, and polyrhythm subdivision matrices",
            "Shareable URL preset links (encodePresetToUrl) to send rhythm patterns to students",
            "Tempo percentage scaling and complete configuration backup/restore via JSON",
            "Screen Wake Lock integration and high-visibility visual beat animations"
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
            "Dynamic vector sheet music notation modal for every scale powered by ABCJS",
            "Cycles classical guitar right-hand Spanish finger combinations (i-m, m-a, i-a, p-i-m)",
            "Smart constrained Fisher-Yates shuffling preventing adjacent-round key repeats",
            "Calculates daily practice targets automatically from weekly scale volume goals",
            "Integrated audio metronome with tone adjustment (low/medium/high) and subdivisions",
            "Customizable scale catalog with calendar streak tracking and confetti celebration"
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
            "YIN pitch detection algorithm delivering flutter-free fundamental frequency recognition",
            "Adjustable A4 reference calibration (400Hz–460Hz) for baroque (415Hz) and modern tunings",
            "Smooth real-time cents deviation needle with bold color-coded stand visibility",
            "Battery-saving lifecycle management that pauses audio capture when backgrounded",
            "Onboard audio tone synthesizer generating reference pitches for ear-training",
            "Full chromatic detection and standard guitar tuning presets"
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
        appUrl: "https://oikaze.app/",
        repoUrl: "https://github.com/catIO/weather",
        platform: "PWA (Zero Dependencies)",
        status: "Live PWA",
        description: "Oikaze (追い風 - 'tailwind') is a minimalist weather PWA built with vanilla JavaScript. No frameworks, no build step. Combines multi-signal weather observations, Open-Meteo Air Quality integration, wildfire smoke/haze detection, and convective storm alerting.",
        features: [
            "Zero-framework, zero-build vanilla JS PWA (<50KB) with instant offline caching",
            "Convective storm alerts using CAPE and Lightning Potential Index with 2-hour lookahead",
            "Live PM2.5/PM10 wildfire smoke sensing with automated hazy condition overrides",
            "Real-time outdoor activity safety recommendations powered by Netlify Edge Functions",
            "3-hour barometric pressure trend tracking (rising/falling/steady) and dew point index",
            "City autocomplete, geolocation support, and multi-unit conversions (knots/mph/inHg)"
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
        appUrl: "https://retrogram.catherina.dev/",
        repoUrl: "https://github.com/catIO/retrogram",
        platform: "Web & Content Studio",
        status: "Live Web App",
        description: "Retrogram is a vintage-inspired square photography gallery. Built with React and Sanity.io, it offers an ultra-clean, read-only gallery connected to the Sanity API-CDN with zero client-side credentials, complemented by an authenticated Sanity Content Studio for visual curation.",
        features: [
            "Distraction-free square photography gallery celebrating classic analog aesthetics",
            "High-performance read-only architecture querying Sanity API-CDN with zero client tokens",
            "Sanity Content Studio v3 with visual hotspot cropping and date metadata curation",
            "Keyboard-driven lightbox navigation (arrow keys to browse, Esc to close)",
            "Vintage Polaroid-inspired analog camera branding with zero ads or vanity metrics",
            "Responsive square masonry grid optimized for mobile and desktop screens"
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

