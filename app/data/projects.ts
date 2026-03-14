interface ProjectLink {
    label: string;
    url: string;
}

export interface Project {
    title: string;
    description: string;
    preview?: string;
    links?: ProjectLink[];
    expandable?: boolean;
}

export const workProjects: Project[] = [
    {
        title: "Kessel",
        description: "prediction markets execution infrastructure",
        links: [
            { label: "site", url: "https://kesselgateway.com" },
            { label: "discord", url: "https://discord.com/invite/pWgGahaPjR" },
            { label: "email", url: "mailto:team@kesselgateway.com" },
        ],
    },
    {
        title: "Zocular",
        description: "B2B website, consumer Shopify storefront, and internal tools",
        links: [
            { label: "consumer", url: "https://zocular.com" },
            { label: "professional", url: "https://professionals.zocular.com" },
        ],
    },
];

export const sideProjects: Project[] = [
    {
        title: "Banto.tv",
        description:
            "a real-time multiplayer party games platform and visual game engine built entirely in typescript. thousands of hosts created and deployed custom party games through a block-based editor powered by a custom game engine that compiled block graphs into controlled javascript execution running inside per-session, containerized runtimes. additionally, they could rely on prebuilt games like trivia, hottakes, quickdraw, and zingify. the platform used a server-authoritative architecture with websockets synchronizing state across host and player clients, and containerized runtime instances keeping each game session isolated. the backend handled concurrent session orchestration, reactive state management, and a transactional in-game marketplace (supporting item trading and market speculation) with atomic database guarantees, rate limiting, and permission controls to prevent fraud throughout the economy. an integrated ai assistant helped bantonians build games visually from a block catalog. the goal was to make social game creation as accessible as building a slide deck.",
        preview: "a real-time multiplayer party games platform and visual game engine built entirely in typescript.",
        links: [
            { label: "wiki", url: "https://bantotv.fandom.com/wiki/Banto.tv_Wiki" },
            { label: "demo", url: "https://www.youtube.com/watch?v=77OsmlHylhI" },
        ],
        expandable: true,
    },
];
