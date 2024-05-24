import React, { Suspense, lazy, useState } from "react";
import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Add as AddIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { header } from "../../constants/Color";

const Search =lazy(()=> import("../specifics/Search"))
const Notifications =lazy(()=> import("../specifics/Notifications"))
const NewGroup =lazy(()=> import("../specifics/NewGroup"))

const Header = () => {
  const navigate = useNavigate();

  const handleMobile = () => {
    console.log("Mobile Handler");
    setIsMobile(!isMobile);
  };

  const [isMobile, setIsMobile]= useState(false);
  const [isSearch, setIsSearch]= useState(false);
  const [isNewGroup, setIsNewGroup]= useState(false);
  const [isNotification, setIsNotification]= useState(false);


  const openSearchDialogue = () => {
    console.log("Search Dialogue opened");
    setIsSearch(!isSearch);
  };

  const openNewGroup = () => {
    console.log("Group Added");
    setIsNewGroup(!isNewGroup);
  };

  const openNotification = () => {
    console.log("Notification added");
    setIsNotification(!isNotification);
  };

  const logoutHandler = () => {
    console.log("Group Added");
  };

  const navigateGroups = () => navigate("/groups");

  const IconBtn = ({ title, icon, onClick }) => (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );

  return (
    <>
    <Box sx={{ flexGrow: 1 }} height={"4rem"}>
      <AppBar
        position="static"
        sx={{ backgroundImage: header, borderRadius: "15px 15px 0 0" }}>
        <Toolbar>
          <img
            src="/logo.svg"
            alt="Logo"
            style={{ height: "2rem", width: "auto", marginRight: "5px" }}
            position={'absolute'}
          />
          <Typography
            sx={{
              display: { xs: "none", sm: "block" },
              fontSize: "30px",
              fontWeight: "bold",
            }}>
            Snappy
          </Typography>
          <Box
            sx={{
              display: { xs: "block", sm: "none" },
            }}>
            <IconButton color="inherit" onClick={handleMobile}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconBtn
              title={"Search"}
              icon={<SearchIcon />}
              onClick={openSearchDialogue}
            />
            <IconBtn
              title={"New Group"}
              icon={<AddIcon />}
              onClick={openNewGroup}
            />
            <IconBtn
              title={"Manage Groups"}
              icon={<GroupIcon />}
              onClick={navigateGroups}
            />

            <IconBtn
            title={"Notifications"}
            icon={<NotificationsIcon/>}
            onClick={openNotification}
            />

            <IconBtn
              title={"Logout"}
              icon={<LogoutIcon />}
              onClick={logoutHandler}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>

    {isSearch && (
        <Suspense fallback={<Backdrop open/>}>
          <Search/>
        </Suspense>
      )
    }
    {isNotification && (
      <Suspense fallback={<Backdrop open/>}>
          <Notifications/>
        </Suspense>
      )
    }
    {isNewGroup && (
      <Suspense fallback={<Backdrop open/>}>
          <NewGroup/>
        </Suspense>
      )
    }
    </>

  );
};

export default Header;
