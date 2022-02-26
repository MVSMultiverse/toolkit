import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "../Box";
import isTouchDevice from "../../util/isTouchDevice";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import MenuItem from "../MenuItem/MenuItem";
import IconComponent from "../Svg/IconComponent";
import { MenuItemsProps } from "./types";

const MenuItems: React.FC<MenuItemsProps> = ({ items = [], activeItem, activeSubItem, ...props }) => {
  return (
    <Flex {...props}>
      {items.map(({ label, items: menuItems = [], href, icon = "", link }) => {
        const statusColor = menuItems?.find((menuItem) => menuItem.status !== undefined)?.status?.color;
        const isActive = activeItem === href;
        return (
          <DropdownMenu key={`${label}#${href}#${icon}`} items={menuItems} py={1} activeItem={activeSubItem} direction="top">
            <MenuItem
              href={isTouchDevice() && menuItems && menuItems.length > 0 ? "" : href}
              isActive={isActive}
              statusColor={statusColor}
              link={link}
            >
              {label || <IconComponent iconName={icon} color={isActive ? "secondary" : "textSubtle"} />}
            </MenuItem>

          </DropdownMenu>
        );
      })}
    </Flex>
  );
};

export default MenuItems;