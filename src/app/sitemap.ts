import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const BASE = "https://vanshagnihotri.vercel.app";
    const now = new Date().toISOString();

    const routes = [
        { path: "/", priority: 1.0, changeFreq: "weekly" },
        { path: "/work", priority: 0.9, changeFreq: "weekly" },
        { path: "/journey", priority: 0.8, changeFreq: "monthly" },
        { path: "/contact", priority: 0.7, changeFreq: "monthly" },
        { path: "/work/ganga-scavenger", priority: 0.7, changeFreq: "monthly" },
        { path: "/work/ai-crime-predictor", priority: 0.7, changeFreq: "monthly" },
        { path: "/work/eye-mouse-control", priority: 0.7, changeFreq: "monthly" },
        { path: "/work/network-sniffer", priority: 0.7, changeFreq: "monthly" },
        { path: "/work/portfolio-3d", priority: 0.7, changeFreq: "monthly" },
        { path: "/work/clubsphere", priority: 0.7, changeFreq: "monthly" },
    ] as const;

    return routes.map(({ path, priority, changeFreq }) => ({
        url: `${BASE}${path}`,
        lastModified: now,
        changeFrequency: changeFreq,
        priority,
    }));
}
