import { FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode | undefined;
  className: string | null | undefined;
}

const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`shadow-lg shadow-black/10 border border-black rounded ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
