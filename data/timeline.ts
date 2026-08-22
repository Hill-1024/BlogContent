// Timeline data configuration file
// Used to manage data for the timeline page

export interface TimelineItem {
    id: string;
    title: string;
    description: string;
    type: "education" | "work" | "project" | "achievement";
    startDate: string;
    endDate?: string; // If empty, it means current
    location?: string;
    organization?: string;
    position?: string;
    skills?: string[];
    achievements?: string[];
    links?: {
        name: string;
        url: string;
        type: "website" | "certificate" | "project" | "other";
    }[];
    icon?: string; // Iconify icon name
    color?: string;
    featured?: boolean;
}

export const timelineData: TimelineItem[] = [
    {
        id: "current-study",
        title: "Get into the College",
        description:
            "",
        type: "education",
        startDate: "2025-09-01",
        location: "GuangZhou",
        organization: "GDUT",
        skills: ["Cpp", "C"],
        achievements: [
            "",
        ],
        icon: "material-symbols:school",
        color: "#059669",
        featured: true,
    },
    {
        id: "Lawyance",
        title: "Lawyance法律智能体",
        description:
            "中国大学生服务外包创新创业大赛暨2026腾讯开悟人工智能全球公开赛参赛作品",
        type: "project",
        startDate: "2026-03-15",
        endDate: "2026-08-22",
        organization: "工大法智团队",
        skills: ["Agent", "LLM", "Python"],
        achievements: [
            "长沙中部赛区决赛一等奖",
            "无锡全国决赛二等奖"
        ],
        icon: "octicon:law",
        color: "#3B62B8",
        featured: true,
    },
];

// Get timeline statistics
export const getTimelineStats = () => {
    const total = timelineData.length;
    const byType = {
        education: timelineData.filter((item) => item.type === "education").length,
        work: timelineData.filter((item) => item.type === "work").length,
        project: timelineData.filter((item) => item.type === "project").length,
        achievement: timelineData.filter((item) => item.type === "achievement")
            .length,
    };

    return { total, byType };
};

// Get timeline items by type
export const getTimelineByType = (type?: string) => {
    if (!type || type === "all") {
        return timelineData.sort(
            (a, b) =>
                new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
        );
    }
    return timelineData
        .filter((item) => item.type === type)
        .sort(
            (a, b) =>
                new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
        );
};

// Get featured timeline items
export const getFeaturedTimeline = () => {
    return timelineData
        .filter((item) => item.featured)
        .sort(
            (a, b) =>
                new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
        );
};

// Get current ongoing items
export const getCurrentItems = () => {
    return timelineData.filter((item) => !item.endDate);
};

// Calculate total work experience
export const getTotalWorkExperience = () => {
    const workItems = timelineData.filter((item) => item.type === "work");
    let totalMonths = 0;

    workItems.forEach((item) => {
        const startDate = new Date(item.startDate);
        const endDate = item.endDate ? new Date(item.endDate) : new Date();
        const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
        const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
        totalMonths += diffMonths;
    });

    return {
        years: Math.floor(totalMonths / 12),
        months: totalMonths % 12,
    };
};
