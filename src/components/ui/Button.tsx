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
        "inline-flex items-center justify-center font-medium transition-all duration-300 ease-out active:scale-95 disabled:opacity-50 disabled:pointer-events-none rounded-pill cursor-pointer";

    const variants = {
        primary:
            "bg-hugo-black text-white hover:bg-gray-800 hover:shadow-lg",
        secondary:
            "bg-hugo-gold text-hugo-black hover:bg-[#D4B33C] hover:shadow-md",
        outline:
            "border-2 border-hugo-black text-hugo-black hover:bg-hugo-black hover:text-white",
    };

    const sizes = {
        sm: "h-9 px-4 text-sm",
        md: "h-12 px-8 text-base", // Hugo buttons are quite substantial
        lg: "h-14 px-10 text-lg",
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
