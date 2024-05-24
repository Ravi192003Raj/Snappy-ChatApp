import {
    Close as CloseIcon,
    Groups as GroupsIcon,
    ManageAccounts as ManageAccountsIcon,
    Menu as MenuIcon,
    Message as MessageIcon,
    Dashboard as DashboardIcon,
    ExitToApp as ExitToAppIcon,
  } from "@mui/icons-material";
  import {
    Box,
    Drawer,
    Grid,
    IconButton,
    Stack,
    Typography,
    styled,
  } from "@mui/material";
  import React, { useState } from "react";
  import { Navigate, Link as RouterLink, useLocation } from "react-router-dom";
  
  const Link = styled(RouterLink)(({ theme }) => ({
    textDecoration: "none",
    borderRadius: "2rem",
    padding: "1rem 2rem",
    color: "black",
    "&:hover": {
      color: "rgba(0, 0, 0, 0.54)",
    },
    "&.active": {
      backgroundColor: "black",
      color: "white",
      "&:hover": {
        color: "lightgrey",
      },
    },
  }));
  
  const AdminTabs = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <DashboardIcon />,
    },
    {
      name: "Users",
      path: "/admin/user-management",
      icon: <ManageAccountsIcon />,
    },
    {
      name: "Chats",
      path: "/admin/chat-management",
      icon: <GroupsIcon />,
    },
    {
      name: "Messages",
      path: "/admin/message-management",
      icon: <MessageIcon />,
    },
  ];
  
  const logoutHandler = () => {
    console.log("Logout clicked");
  };
  
  const Sidebar = ({ w = "100%" }) => {
    const location = useLocation();
  
    return (
      <Stack width={w} p={"3rem"} direction="column" spacing={"3rem"}>
        <Typography variant="h4" textTransform={"uppercase"}>
          Snappy
        </Typography>
        <Stack spacing={"1rem"}>
          {AdminTabs.map((tab) => (
            <Link
              key={tab.path}
              to={tab.path}
              className={location.pathname === tab.path ? "active" : ""}
            >
              <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
                {tab.icon}
                <Typography>{tab.name}</Typography>
              </Stack>
            </Link>
          ))}
          <Link
            to="#"
            onClick={logoutHandler}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
              <ExitToAppIcon />
              <Typography>Logout</Typography>
            </Stack>
          </Link>
        </Stack>
      </Stack>
    );
  };

  const isAdmin= true;
  
  const AdminLayout = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);
  
    const handleMobile = () => {
      setIsMobile(!isMobile);
    };
  
    const handleClose = () => {
      setIsMobile(false);
    };
    if(!isAdmin) return <Navigate to="/login"/>
  
    return (
      <Grid container minHeight={"100vh"}>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          position: "fixed",
          right: "1rem",
          top: "1rem",
        }}
      >
        <IconButton onClick={handleMobile}>
          {isMobile ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>
      <Grid
        item
        md={4}
        lg={3}
        sx={{
          display: { xs: "none", md: "block" },
          position: "sticky",
          top: 0,
          height: "100vh",
          overflowY: "auto",
          bgcolor: "#f5f5f5",
          zIndex: 1,
        }}
      >
        <Sidebar />
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        lg={9}
        sx={{
          height: "100vh",
          overflowY: "auto",
          bgcolor: "#f5f5f5",
          p: 2,
        }}
      >
        {children}
      </Grid>

      <Drawer
        open={isMobile}
        onClose={handleClose}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Sidebar w="70vw" />
      </Drawer>
    </Grid>
  );
};
  
  export default AdminLayout;
  