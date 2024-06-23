import React from "react";
import { IconName } from "boxicons";

interface IconProps {
  name: IconName;
  size?: string;
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = "24px",
  color = "",
  className,
}) => {
  return (
    <i
      className={`bx bxl-${name} ${className}`}
      style={{ fontSize: size, color }}
    />
  );
};

export default Icon;
