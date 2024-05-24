import React, { Fragment, useRef } from "react";
import AppLayout from "../components/layout/AppLayout";
import { IconButton, Stack } from "@mui/material";
import { grayColor, header, send, send_dark } from "../constants/Color";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { InputBox } from "../components/styles/StyledComponents";
import FileMenu from "../components/dialogues/FileMenu";
import { sampleMessge } from "../constants/sampleData";
import MessageComponent from "../components/shared/MessageComponent";


const user={
  _id: "fjsdhfiuasf",
  name: "Aman Swaraj",
};

const Chat = () => {
  const containerRef = useRef(null);

  return (
    <Fragment>

<FileMenu/>


      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"0.5rem"}
        spacing={"1rem"}
        bgcolor={grayColor}
        height={"90%"}
        sx={{
          overflowX: "hidden",
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

        {
          sampleMessge.map((i)=>(
            <MessageComponent key={i._id} message={i} user={user}/>
          ))
        }
      </Stack>


      <form
        style={{
          height: "10%",
        }}>
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"0.5rem"}
          alignItems={"center"}
          justifyContent={"center"}
          position={"relative"}>
          <IconButton sx={{
            position: "absolute",
            left: "0.5rem",
            rotate: "30deg"
          }}>
            <AttachFileIcon />
          </IconButton>
          <InputBox placeholder="Type your message here ......" />
          <IconButton
            type="submit"
            sx={{
              backgroundColor: send,
              color: "white",
              marginLeft: "0.5rem",
              padding: "0.5rem",
              "&:hover": {
                bgcolor: send_dark,
                rotate: "-30deg"
              },
            }}>
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
    </Fragment>
  );
};

export default AppLayout()(Chat);
