import React from "react";
import { ListItem, ListItemText, Divider, Link } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
function SidebarItem({ item }) {
  return (
    <div>
      {item.title === "Logout" ? <Divider /> : null}
      <Link
        href={item.to}
        underline="none"
        color="inherit"
        onClick={(event) => event.preventDefault()}
      >
        <ListItem button>
          <ListItemIcon>
            {item.htmlBefore && (
              <div dangerouslySetInnerHTML={{ __html: item.htmlBefore }} />
            )}
          </ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItem>
      </Link>
    </div>
  );
}

export default SidebarItem;
