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
        ${variantStyles[variant]}
        px-6 py-2 rounded-md font-semibold text-lg
        flex items-center justify-center gap-2 /* This centers the 'block' */
      `}
      onClick={onClick}
    >
      <span>{label ?? "Button"}</span>

      {icon && <span className="flex items-center text-xl">{icon}</span>}
    </button>
  );
};
export default PlainButton;
