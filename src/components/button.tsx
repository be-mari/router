import { ButtonHTMLAttributes } from "react";

type Props = {} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ ...props }: Props) => {
  return <button className="btn" {...props}></button>;
};
export default Button;
