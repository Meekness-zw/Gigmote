import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
}

export const Button = ({
    children,
    className = "",
    variant = "primary",
    size = "md",
    ...props
}: ButtonProps) => {
    const baseStyles =
        "inline-flex items-center justify-center font-semibold transition-all duration-300 ease-out active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none rounded-lg cursor-pointer";

    const variants = {
        primary:
            "bg-hugo-black text-white hover:text-hugo-gold hover:bg-hugo-black/95",
        secondary:
            "bg-hugo-gold text-hugo-black hover:bg-hugo-gold/90",
        outline:
            "border border-hugo-black text-hugo-black hover:bg-hugo-black hover:text-white",
    };

    const sizes = {
        sm: "h-8 px-3 text-xs",
        md: "h-9 px-4 text-sm",
        lg: "h-11 px-6 text-base",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
