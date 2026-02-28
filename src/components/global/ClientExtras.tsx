"use client";

import dynamic from "next/dynamic";

const MusicPlayer = dynamic(() => import("@/components/global/MusicPlayer"), { ssr: false });

export default function ClientExtras() {
    return <MusicPlayer />;
}
