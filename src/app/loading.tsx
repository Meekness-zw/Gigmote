export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-hugo-cream">
            <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 border-4 border-hugo-black/10 border-t-hugo-gold rounded-full animate-spin"></div>
                <p className="text-hugo-black/60 font-medium animate-pulse">Loading Gigmote...</p>
            </div>
        </div>
    );
}
