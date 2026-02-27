"use client";

export default function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "@id": "https://vanshagnihotri.vercel.app/#person",
                name: "Vansh Agnihotri",
                url: "https://vanshagnihotri.vercel.app",
                image: "https://vanshagnihotri.vercel.app/icons/icon.svg",
                description: "BCA Student, React Developer & Digital Creator building next-level web experiences with AI, 3D, and beautiful design.",
                jobTitle: "Frontend Developer",
                knowsAbout: ["React", "Next.js", "Three.js", "Python", "AI/ML", "UI/UX Design"],
                address: { "@type": "PostalAddress", addressLocality: "Kanpur", addressRegion: "UP", addressCountry: "IN" },
                sameAs: [
                    "https://github.com/Ashwinjauhary",
                    "https://linkedin.com/in/vansh-agnihotri",
                ],
                email: "vanshagnihotri520@gmail.com",
            },
            {
                "@type": "WebSite",
                "@id": "https://vanshagnihotri.vercel.app/#website",
                url: "https://vanshagnihotri.vercel.app",
                name: "Vansh Agnihotri Portfolio",
                description: "Portfolio of Vansh Agnihotri — React Developer, AI builder, and creative technologist.",
                publisher: { "@id": "https://vanshagnihotri.vercel.app/#person" },
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
