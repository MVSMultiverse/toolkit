import React, { useState } from "react";
import BottomNavItem from "../BottomNavItem";
import StyledBottomNav, { StyledOverlay } from "./styles";
import { Box } from "../Box";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { BottomNavProps } from "./types";
import { NotificationDot } from "../NotificationDot";

const BottomNav: React.FC<BottomNavProps> = ({ items = [], activeItem = "", activeSubItem = "", ...props }) => {
  const [menuOpenByIndex, setMenuOpenByIndex] = useState({});
  // const isBottomMenuOpen = Object.values(menuOpenByIndex).reduce((acc, value) => acc || value, false);
  // const _index: number = Object.values(menuOpenByIndex).indexOf(true)
  // const isHasItems = items && items.length > 0 && items?.[_index]?.items?.length;
  return (
    <>
      {/* {isBottomMenuOpen && isHasItems && <StyledOverlay />} */}
      <StyledBottomNav justifyContent="space-around" {...props}>
        {items.map(({ label, items: menuItems, href, icon, showOnMobile = true, showItemsOnMobile = true, link }, index) => {
          const statusColor = menuItems?.find((menuItem) => menuItem.status !== undefined)?.status?.color;
          return (
            showOnMobile && (
              <DropdownMenu
                key={label}
                items={menuItems}
                isBottomNav
                activeItem={activeSubItem}
                showItemsOnMobile={showItemsOnMobile}
                setMenuOpenByIndex={setMenuOpenByIndex}
                index={index}
                direction="bottom"
              >
                <Box>
                  <NotificationDot show={!!statusColor} color={statusColor}>
                    <BottomNavItem
                      href={href}
                      isActive={href === activeItem}
                      label={label}
                      iconName={icon}
                      showItemsOnMobile={showItemsOnMobile}
                      link={link}
                    />
                  </NotificationDot>
                </Box>
              </DropdownMenu>
            )
          );
        })}
      </StyledBottomNav>
    </>
  );
};

export default BottomNav;