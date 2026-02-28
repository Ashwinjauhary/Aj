"use client";

// Noise texture overlay via CSS SVG filter — subtle film grain effect on top of everything

export default function NoiseTexture() {
    return (
        <>
            <style>{`
        .noise-overlay {
          position: fixed;
          inset: 0;
          z-index: 999;
          pointer-events: none;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 128px 128px;
        }
        html.light .noise-overlay {
          opacity: 0.025;
        }
      `}</style>
            <div className="noise-overlay" aria-hidden="true" />
        </>
    );
}
