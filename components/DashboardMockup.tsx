'use client';

const DASHBOARD_VIDEO_FILE = 'Screen Recording 2026-05-09 232950.mp4';

export default function DashboardMockup() {
    const src = `/videos/${encodeURIComponent(DASHBOARD_VIDEO_FILE)}`;

    return (
        <div className="rounded-2xl border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-900/10 overflow-hidden ring-1 ring-slate-900/5">
            <video
                className="w-full h-auto block"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                src={src}
                aria-label="waiTime product demo"
            />
        </div>
    );
}
