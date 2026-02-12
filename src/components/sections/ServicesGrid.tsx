import Link from "next/link";
import { siteContent } from "../../data/content";
import { ArrowRight } from "lucide-react";

export const ServicesGrid = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-hugo-black tracking-tight mb-4">
                        Comprehensive Solutions
                    </h2>
                    <p className="text-lg text-hugo-black/60">
                        From front-line support to back-office operations, we provide the people and technology to help you scale.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {siteContent.services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="group block p-8 rounded-3xl border border-hugo-black/5 bg-hugo-cream/30 hover:bg-hugo-cream transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
                            >
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="text-hugo-black" size={24} />
                                </div>

                                <h3 className="text-xl font-bold text-hugo-black mb-3 pr-8">
                                    {service.title}
                                </h3>

                                <p className="text-hugo-black/60 text-sm leading-relaxed mb-8">
                                    {service.description}
                                </p>

                                <div className="flex items-center text-sm font-medium text-hugo-black group-hover:text-hugo-gold transition-colors">
                                    Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>

                                {/* Decorative Hover Blob */}
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-hugo-gold/10 rounded-full blur-2xl group-hover:bg-hugo-gold/20 transition-colors duration-500"></div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
