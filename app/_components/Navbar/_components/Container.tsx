import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div
      className={`flex items-center justify-center gap-10 list-none ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
