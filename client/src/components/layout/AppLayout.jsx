import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";
import ChatList from "../specifics/ChatList";
import { sampleChats } from "../../constants/sampleData";
import { useParams } from "react-router-dom";
import Profile from "../specifics/Profile";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    const params = useParams();
    const chatId = params.chatId;
    const handleDeleteChat = (e, _id, groupChat) => {
      e.preventDefault();
      console.log("Delete Chat", _id, groupChat);
    };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Ensure it takes the full height of the viewport
        backgroundColor: "#f0f0f0", // Optional: background color for contrast
        padding: "1rem", // Ensure the shadow and border radius are not cut off
      }}>
      <div
        id="first"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Add box shadow for visibility
          backgroundColor: "#fff", // Background color for the content area
          maxWidth: "1200px",
          width: "100%",
          height: "auto", // Make sure it adjusts to its content
        }}>
        <Title />
        <div style={{ width: "100%" }}>
          <Header />
          <Grid container style={{ height: "80vh", width: "100%" }}>
            <Grid
              item
              sm={4}
              md={3}
              sx={{
                display: { xs: "none", sm: "block" },
                height: "100%",
                overflowY: "auto",
                "&::-webkit-scrollbar": {
                  width: "0.5rem", // Sets the width of the scrollbar
                },
                "&::-webkit-scrollbar-track": {
                  background: "#f1f1f1", // Optional: changes the track color
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#888", // Scrollbar color
                  borderRadius: "20px", // Optional: rounds the corners of the scrollbar thumb
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  background: "#555", // Changes color when hovering over the scrollbar
                },
              }}>
              <ChatList
                chats={sampleChats}
                chatId={chatId}
                handleDeleteChat={handleDeleteChat}
              />
            </Grid>
            <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
              <WrappedComponent {...props} />
            </Grid>
            <Grid
              item
              lg={3}
              md={4}
              sx={{
                display: { xs: "none", md: "block" },
                padding: "2rem",
                bgcolor: "rgba(0,0,0,0.85)",
              }}>
              <Profile />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};
}

export default AppLayout;
