import Image from "next/image";

export const SocialProof = () => {
    const logos = [
        { name: "Google", src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
        { name: "Spotify", src: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" },
        { name: "Airbnb", src: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" },
        { name: "Slack", src: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg" },
        { name: "Uber", src: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" },
    ];

    return (
        <section className="py-20 bg-hugo-cream border-y border-hugo-black/5">
            <div className="container mx-auto px-6 max-w-7xl text-center">
                <p className="text-sm font-semibold text-hugo-black/40 uppercase tracking-widest mb-10">
                    Trusted by the world&apos;s fastest growing companies
                </p>

                <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Using placeholders for now, in a real app these would be local assets or optimized remote images */}
                    <span className="text-2xl font-bold text-hugo-black/40">Google</span>
                    <span className="text-2xl font-bold text-hugo-black/40">Meta</span>
                    <span className="text-2xl font-bold text-hugo-black/40">Shopify</span>
                    <span className="text-2xl font-bold text-hugo-black/40">Discord</span>
                    <span className="text-2xl font-bold text-hugo-black/40">Roblox</span>
                </div>
            </div>
        </section>
    );
};
