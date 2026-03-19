import React from "react";

type ButtonVariant = "primary" | "secondary" | "text";

type PlainButtonProps = {
  label?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  icon?: React.ReactNode;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-black",
  secondary: "bg-transparent text-primary border border-primary",
  text: "bg-transparent text-primary",
};

const PlainButton = ({
  label,
  onClick,
  variant = "primary",
  icon,
}: PlainButtonProps) => {
  return (
    <button
      className={`
        relative
        ${variantStyles[variant]}
        px-8 py-2
        rounded-md font-semibold text-lg
        flex items-center justify-center
      `}
      onClick={onClick}
    >
      {/* CENTERED TEXT */}
      <span className="text-center">{label ?? "Button"}</span>

      {/* ICON (RIGHT SIDE, DOESN’T AFFECT CENTER) */}
      {icon && (
        <span className="absolute right-4 text-xl flex items-center">
          {icon}
        </span>
      )}
    </button>
  );
};

export default PlainButton;
