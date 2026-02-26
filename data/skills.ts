// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
    id: string;
    name: string;
    description: string;
    icon: string; // Iconify icon name
    category: "frontend" | "backend" | "database" | "tools" | "other";
    level: "beginner" | "intermediate" | "advanced" | "expert";
    experience: {
        years: number;
        months: number;
    };
    projects?: string[]; // Related project IDs
    certifications?: string[];
    color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
    // Frontend Skills

    {
        id: "astro",
        name: "Astro",
        description:
            "",
        icon: "logos:astro-icon",
        category: "frontend",
        level: "beginner",
        experience: { years: 0, months: 1 },
        projects: [],
        color: "#d001ff",
    },

    // Backend Skills

    {
        id: "cpp",
        name: "C++",
        description:
            "A high-performance systems programming language widely used in game development, system software, and embedded development.",
        icon: "logos:c-plusplus",
        category: "backend",
        level: "intermediate",
        experience: { years: 2, months: 4 },
        projects: [],
        color: "#00599C",
    },
    {
        id: "c",
        name: "C",
        description:
            "A low-level systems programming language, the foundation for operating systems and embedded systems development.",
        icon: "logos:c",
        category: "backend",
        level: "intermediate",
        experience: { years: 0, months: 2 },
        projects: [],
        color: "#A8B9CC",
    },
    {
        id: "kotlin",
        name: "Kotlin",
        description:
            "A modern programming language developed by JetBrains, fully compatible with Java, the preferred choice for Android development.",
        icon: "logos:kotlin-icon",
        category: "backend",
        level: "beginner",
        experience: { years: 0, months: 1 },
        projects: [],
        color: "#7F52FF",
    },
    {
        id: "rust",
        name: "Rust",
        description: "",
        icon: "logos:rust",
        category: "backend",
        level: "beginner",
        experience: { years: 0, months: 2 },
        projects: [],
        color: "#46514f",
    },

    // Database Skills


    // Tools
    {
        id: "git",
        name: "Git",
        description:
            "A distributed version control system, an essential tool for code management and team collaboration.",
        icon: "logos:git-icon",
        category: "tools",
        level: "beginner",
        experience: { years: 0, months: 1 },
        color: "#F05032",
    },
    {
        id: "vscode",
        name: "VS Code",
        description:
            "A lightweight but powerful code editor with a rich plugin ecosystem.",
        icon: "logos:visual-studio-code",
        category: "tools",
        level: "beginner",
        experience: { years: 0, months: 2 },
        color: "#007ACC",
    },
    {
        id: "webstorm",
        name: "WebStorm",
        description: "",
        icon: "logos:webstorm",
        category: "tools",
        level: "beginner",
        experience: { years: 0,months: 1 },
        projects: [],
        color: "#00CDD7",
    },
    {
        id: "intellij",
        name: "IntelliJ IDEA",
        description: "",
        icon: "logos:intellij-idea",
        category: "tools",
        level: "beginner",
        experience: { years: 0, months: 1 },
        projects: [],
        color: "#616161", // 更改为深灰色，避免纯黑色
    },
    {
        id: "clion",
        name: "Clion",
        description: "",
        icon: "devicon:clion",
        category: "tools",
        level: "intermediate",
        experience:{years: 0, months: 4 },
        projects: [],
        color: "#00A5FF",
    },
    {
        id: "pycharm",
        name: "PyCharm",
        description:
            "A professional Python IDE by JetBrains providing intelligent code analysis and debugging features.",
        icon: "logos:pycharm",
        category: "tools",
        level: "beginner",
        experience: { years: 0, months: 1 },
        projects: [],
        color: "#21D789",
    },
    {
        id: "rustrover",
        name: "RustRover",
        description: "",
        icon: "material-icon-theme:rust",
        category: "tools",
        level: "beginner",
        experience: { years: 0, months: 2 },
        projects: [],
        color: "#a88d81",
    },
    {
        id: "androidStudio",
        name: "AndroidStudio",
        description: "",
        icon: "skill-icons:androidstudio-dark",
        category: "tools",
        level: "beginner",
        experience: { years: 0, months: 1 },
        projects: [],
        color: "#3ddc84",
    }
    // Other Skills
];

// Get skill statistics
export const getSkillStats = () => {
    const total = skillsData.length;
    const byLevel = {
        beginner: skillsData.filter((s) => s.level === "beginner").length,
        intermediate: skillsData.filter((s) => s.level === "intermediate").length,
        advanced: skillsData.filter((s) => s.level === "advanced").length,
        expert: skillsData.filter((s) => s.level === "expert").length,
    };
    const byCategory = {
        frontend: skillsData.filter((s) => s.category === "frontend").length,
        backend: skillsData.filter((s) => s.category === "backend").length,
        database: skillsData.filter((s) => s.category === "database").length,
        tools: skillsData.filter((s) => s.category === "tools").length,
        other: skillsData.filter((s) => s.category === "other").length,
    };

    return { total, byLevel, byCategory };
};

// Get skills by category
export const getSkillsByCategory = (category?: string) => {
    if (!category || category === "all") {
        return skillsData;
    }
    return skillsData.filter((s) => s.category === category);
};

// Get advanced skills
export const getAdvancedSkills = () => {
    return skillsData.filter(
        (s) => s.level === "advanced" || s.level === "expert",
    );
};

// Calculate total years of experience
export const getTotalExperience = () => {
    const totalMonths = skillsData.reduce((total, skill) => {
        return total + skill.experience.years * 12 + skill.experience.months;
    }, 0);
    return {
        years: Math.floor(totalMonths / 12),
        months: totalMonths % 12,
    };
};
