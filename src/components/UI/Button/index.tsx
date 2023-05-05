import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className: string | null;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      onClick={() => {
        onClick();
      }}
      className={`min-h-[2rem] py-1 px-3 rounded border border-black ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
