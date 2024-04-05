import { ButtonHTMLAttributes } from "react";
type ButtonSizeType = "md" | "lg";
type ButtonColorType = "blue" | "purple";

type Props = {} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ ...props }: Props) => {
  return <button className="btn" {...props}></button>;
};
export default Button;
