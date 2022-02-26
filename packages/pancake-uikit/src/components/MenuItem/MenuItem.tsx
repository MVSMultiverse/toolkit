import React from "react";
import { Link } from "react-router-dom";
import StyledMenuItem, { StyledMenuItemContainer } from "./styles";
import { MenuItemProps } from "./types";

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  href,
  isActive = false,
  variant = "default",
  statusColor,
  link,
  ...props
}) => {
  return (
    <StyledMenuItemContainer $isActive={isActive} $variant={variant}>
      {link ? <StyledMenuItem
        {...props} href={link} target="_blank" $isActive={isActive} $variant={variant} $statusColor={statusColor}>
        {children}
      </StyledMenuItem> : <StyledMenuItem
        as={Link} to={href} $isActive={isActive} $variant={variant} $statusColor={statusColor} {...props} >
        {children}
      </StyledMenuItem>}


    </StyledMenuItemContainer>
  );
};

export default MenuItem;
