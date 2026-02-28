import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title") ?? "Ashwin Jauhary";
    const subtitle = searchParams.get("subtitle") ?? "BCA Student · Web Developer · Tech Enthusiast";
    const tag = searchParams.get("tag") ?? "";

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-end",
                    padding: "72px",
                    background: "linear-gradient(135deg, #050505 0%, #0f0f1a 100%)",
                    fontFamily: "sans-serif",
                }}
            >
                {/* Grid lines */}
                <div style={{
                    position: "absolute", inset: 0,
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }} />

                {/* Glow blob */}
                <div style={{
                    position: "absolute", top: -100, right: -100,
                    width: 500, height: 500,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
                }} />

                {/* Tag */}
                {tag && (
                    <div style={{
                        display: "flex",
                        marginBottom: 20,
                        background: "rgba(245,158,11,0.15)",
                        border: "1px solid rgba(245,158,11,0.3)",
                        borderRadius: 8,
                        padding: "6px 16px",
                        color: "#f59e0b",
                        fontSize: 16,
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                    }}>
                        {tag}
                    </div>
                )}

                {/* Title */}
                <div style={{
                    fontSize: title.length > 20 ? 56 : 72,
                    fontWeight: 800,
                    color: "white",
                    lineHeight: 1.1,
                    marginBottom: 20,
                    maxWidth: 900,
                }}>
                    {title}
                </div>

                {/* Subtitle */}
                <div style={{
                    fontSize: 24,
                    color: "rgba(156,163,175,1)",
                    marginBottom: 48,
                    fontWeight: 400,
                }}>
                    {subtitle}
                </div>

                {/* Footer */}
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    paddingTop: 28,
                    width: "100%",
                }}>
                    <div style={{
                        width: 48, height: 48,
                        borderRadius: 12,
                        background: "#050505",
                        border: "1px solid rgba(255,255,255,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 28,
                        fontWeight: 800,
                        color: "white",
                    }}>
                        A
                    </div>
                    <div>
                        <div style={{ color: "white", fontWeight: 600, fontSize: 18 }}>Ashwin Jauhary</div>
                        <div style={{ color: "rgba(156,163,175,1)", fontSize: 14 }}>ashwinjauhary.vercel.app</div>
                    </div>
                </div>
            </div>
        ),
        { width: 1200, height: 630 }
    );
}
