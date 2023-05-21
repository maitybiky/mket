import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../Layout/Auth/SignOut";
import { useAccType, useToken } from "../zustand/store";
import Loading from "./Loading";
import { useEffect } from "react";
export default function SideBar({ icon }) {
  const { accTypeReset, type } = useAccType();
  const { tokenReset } = useToken();
  const navi = useNavigate();
  const [load, setLoad] = React.useState(false);
  const [state, setState] = React.useState({
    left: false,
  });
  const sideBarData = [
    {
      title: "Log Out",
      icon: <LogoutIcon />,
      path: false,
    },
  ];
 useEffect(() => {
    if (type === "seller") {
      sideBarData.push({
        title: "Your Shop",
        icon: <StoreMallDirectoryIcon />,
        path: "/shop",
      });
    } else if (type === "user") {
      sideBarData.push({
        title: "Market",
        icon: <StoreMallDirectoryIcon />,
        path: "/market",
      });
    }
  }, [type]);

  const sidebarClick = (path) => {
    if (path) {
      navi(path);
    } else {
      setLoad(true);
      signOut()
        .then(() => {
          accTypeReset();
          accTypeReset();
          navi("/sign-in");
        })
        .finally(() => {
          setLoad(false);
        });
    }
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {sideBarData.map(({ title, icon, path }, index) => (
          <ListItem
            onClick={() => sidebarClick(path)}
            key={title}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Loading loading={load} />
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{icon}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
