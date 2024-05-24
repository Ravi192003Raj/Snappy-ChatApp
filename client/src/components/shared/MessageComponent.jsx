import { Box, Typography } from "@mui/material";
import React, { memo } from "react";
import { send } from "../../constants/Color";
import moment from "moment";
import { fileFormat } from "../../lib/Features";
import RenderAttachment from "./RenderAttachment";

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;
  const sameSender = sender?._id === user?._id;
  const timeAgo = moment(createdAt).fromNow();
  return (
    <div
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        backgroundColor: sameSender ? "white" : "white",
        color: "black",
        borderRadius: sameSender ? "15px 15px 0 15px " : "15px 15px 15px 0 ",
        padding: "0.5rem",
        width: "fit-content",
      }}>
      {!sameSender && (
        <Typography color={send} fontWeight={"600"} variant={"caption"}>
          {" "}
          {sender.name}{" "}
        </Typography>
      )}
      {content && <Typography>{content}</Typography>}
      {attachments.length > 0 &&
        attachments.map((attachment, index) => {
          const url = attachment.url;
          const file = fileFormat(url);

          return (
            <Box key={index}>
              <a href={url} target="blank" download style={{
                color: "black",
              }}>{RenderAttachment(file,url)}</a>
            </Box>
          );
        })}
      <Typography variant={"caption"} color={"text.secondary"}>
        {timeAgo}
      </Typography>
    </div>
  );
};

export default memo(MessageComponent);
