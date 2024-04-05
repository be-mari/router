import { ButtonHTMLAttributes, ReactNode } from "react";
type ButtonSizeType = "md" | "lg";
type ButtonColorType = "blue" | "green";

type Props = {
  size?: ButtonSizeType;
  color?: ButtonColorType;
  children: ReactNode;
  leftElement?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  leftElement,
  size = "md",
  color = "green",
  ...props
}: Props) => {
  const getSizeClass = () => {
    switch (size) {
      case "md":
        return "md";
      case "lg":
        return "lg";

      default:
        return "md";
    }
  };
  const getColorClass = () => {
    switch (color) {
      case "green":
        return "green";
      case "blue":
        return "blue";

      default:
        return "green";
    }
  };
  return (
    <button
      className={`button button--${getSizeClass()} button--${getColorClass()}`}
      {...props}
    >
      {leftElement && leftElement}
      {children}
    </button>
  );
};
export default Button;
