"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import store from "./Redux/store";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/navigation";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";

const drawerWidth = 240;
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function RootLayout({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [page, setPage] = React.useState("Javascript interview preparation");
  const [currentPage, setCurrentPage] = React.useState("/");
  const router = useRouter();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    setPage("Javascript interview preparation");
    router.push("/");
  }, []);

  const handlePath = (data) => {
    setPage(data.path == "/" ? "Javascript interview preparation" : data.title);
    setCurrentPage(data.path);
    router.push(data.path);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="fixed" open={open}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                {page}
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
            className="left-sidebar"
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />

            <List>
              {[
                { title: "Home", path: "/" },
                { title: "Create Post", path: "/create-post" },
                { title: "Abou me", path: "/about" },
                { title: "Contact Me", path: "/contact" },
              ].map((list, index) => (
                <ListItem
                  key={list.title}
                  disablePadding
                  onClick={() => handlePath(list)}
                  className={
                    list.path == currentPage ? "active-page" : "inactive-page"
                  }
                >
                  <ListItemButton>
                    <ListItemIcon>
                      {index === 0 ? (
                        <HomeIcon />
                      ) : index === 1 ? (
                        <AddIcon />
                      ) : index === 2 ? (
                        <SchoolIcon />
                      ) : index === 3 ? (
                        <AccountCircleIcon />
                      ) : (
                        <> </>
                      )}
                    </ListItemIcon>
                    <ListItemText primary={list.title} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
          <Main open={open}>
            <DrawerHeader className="head-section" />
            <Provider store={store}>{children}</Provider>
          </Main>
        </Box>
      </body>
    </html>
  );
}
