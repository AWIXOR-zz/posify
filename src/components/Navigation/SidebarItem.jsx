import React from "react";
import { Link } from "react-router-dom";
import { ListItem, ListItemText, Divider } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
function SidebarItem({ item }) {
  return (
    <div>
      {item.title === "Logout" ? <Divider /> : null}
      <Link
        to={item.to}
        underline="none"
        color="inherit"
        // onClick={(event) => event.preventDefault()}
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
