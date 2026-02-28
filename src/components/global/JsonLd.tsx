// Server Component — no "use client" needed for static JSON-LD

export default function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "@id": "https://ashwinjauhary.vercel.app/#person",
                name: "Ashwin Jauhary",
                url: "https://ashwinjauhary.vercel.app",
                image: "https://ashwinjauhary.vercel.app/icons/icon.svg",
                description: "BCA Student, Web Developer & Tech Enthusiast building web experiences.",
                jobTitle: "Developer",
                knowsAbout: ["React", "Next.js", "AI Integration", "Full Stack Development"],
                address: { "@type": "PostalAddress", addressLocality: "Kanpur", addressRegion: "UP", addressCountry: "IN" },
                sameAs: [
                    "https://github.com/Ashwinjauhary",
                    "https://linkedin.com/in/",
                ],
                email: "ashwin2431333@gmail.com",
            },
            {
                "@type": "WebSite",
                "@id": "https://ashwinjauhary.vercel.app/#website",
                url: "https://ashwinjauhary.vercel.app",
                name: "Ashwin Jauhary Portfolio",
                description: "Portfolio of Ashwin Jauhary — Web Developer and tech enthusiast.",
                publisher: { "@id": "https://ashwinjauhary.vercel.app/#person" },
            },
        ],
    };

    return (
        <script
            suppressHydrationWarning
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
