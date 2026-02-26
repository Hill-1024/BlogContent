// Project data configuration file
// Used to manage data for the project display page

export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    category: "web" | "mobile" | "desktop" | "other";
    techStack: string[];
    status: "completed" | "in-progress" | "planned";
    liveDemo?: string;
    sourceCode?: string;
    startDate: string;
    endDate?: string;
    featured?: boolean;
    tags?: string[];
    visitUrl?: string; // 添加前往项目链接字段
}

export const projectsData: Project[] = [
    {
        id: "activity-manage-system",
        title: "活动管理系统",
        description: "第一次大学课设",
        image: "/images/projects/sakura.jpg",
        category: "desktop",
        techStack: ["Web", "C/C++"],
        status: "completed",
        sourceCode: "https://github.com/Hill-1024/activity-manage-system",
        startDate: "2025-12-16",
        endDate: "2025-12-20",
        tags: [],
    },
    {
        id: "NutriScan",
        title: "NutriScan",
        description: "每日热量摄入管理App",
        image: "/images/projects/sakura.jpg",
        category: "mobile",
        techStack: ["Android", "React", "Capacitor"],
        status: "completed",
        sourceCode: "https://github.com/Hill-1024/nutriscan-App",
        startDate: "2026-01-16",
        endDate: "2026-02-02",
        tags: [],
    },
    {
        id: "matcha-auth",
        title: "matcha auth",
        description: "Material Design Style 2FA App",
        image: "/images/projects/sakura.jpg",
        category: "mobile",
        techStack: ["Android", "React", "Capacitor"],
        status: "completed",
        sourceCode: "https://github.com/Hill-1024/matcha-auth",
        startDate: "2026-02-02",
        endDate: "2026-02-22",
        tags: [],
    },
    {
        id: "Monet-Color-For-Capacitor",
        title: "Monet-Color-For-Capacitor",
        description: "一个Capacitor插件,实现了获取Android12+系统的莫奈取色",
        image: "/images/projects/sakura.jpg",
        category: "mobile",
        techStack: ["Android", "React", "Capacitor", "Java"],
        status: "completed",
        sourceCode: "https://github.com/Hill-1024/Monet-Color-For-Capacitor",
        startDate: "2026-02-22",
        endDate: "2026-02-22",
        tags: [],
    },
];

// Get project statistics
export const getProjectStats = () => {
    const total = projectsData.length;
    const completed = projectsData.filter((p) => p.status === "completed").length;
    const inProgress = projectsData.filter(
        (p) => p.status === "in-progress",
    ).length;
    const planned = projectsData.filter((p) => p.status === "planned").length;

    return {
        total,
        byStatus: {
            completed,
            inProgress,
            planned,
        },
    };
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
    if (!category || category === "all") {
        return projectsData;
    }
    return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
    return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
    const techSet = new Set<string>();
    projectsData.forEach((project) => {
        project.techStack.forEach((tech) => {
            techSet.add(tech);
        });
    });
    return Array.from(techSet).sort();
};
