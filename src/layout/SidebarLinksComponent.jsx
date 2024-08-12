import { List, ListItem } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import SidebarLink from "../reusables/SidebarLink";

const SidebarLinksComponent = ({ data }) => {
  return (
    <List>
      {data?.map((e, i) => (
        <NavLink
          to={e?.to}
          key={i}
          style={({ isActive }) => ({
            color: isActive ? "blue" : "inherit",
            textDecoration: "none",
            width: "100%",
          })}
        >
          {({ isActive }) => (
            <ListItem>
              <SidebarLink
                leftIcon={e?.leftIcon}
                linkText={e?.text}
                isActive={isActive}
                rightIcon={e?.rightIcon || null}
              />
            </ListItem>
          )}
        </NavLink>
      ))}
    </List>
  );
};

export default SidebarLinksComponent;
