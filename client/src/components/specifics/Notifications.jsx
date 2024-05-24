import { Check as CheckIcon, Close as CloseIcon } from '@mui/icons-material/';
import {
  Avatar,
  Dialog,
  DialogTitle,
  IconButton,
  ListItem,
  Stack,
  Typography
} from "@mui/material";
import React, { memo } from "react";
import { sampleNotifications } from "../../constants/sampleData";

const friendRequestHandler = ({ _id, accept }) => {
  // Implementation needed for accepting or declining friend requests
};

const Notifications = () => {
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth="25rem">
        <DialogTitle>Notifications</DialogTitle>

        {sampleNotifications.length > 0 ? (
          sampleNotifications.map((notification) => (
            <NotificationItem
              sender={notification.sender}
              _id={notification._id}
              handler={friendRequestHandler}
              key={notification._id} // Corrected key prop usage
            />
          ))
        ) : (
          <Typography textAlign="center">No Notifications</Typography> // Changed text to be more user-friendly
        )}
      </Stack>
    </Dialog>
  );
};

const NotificationItem = memo(({ sender, _id, handler }) => {
  return (
    <ListItem>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{ width: "100%" }}>
        <Avatar src={sender.avatar} alt={sender.name} />
        <Typography
          variant="body1"
          sx={{
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
          }}>
          {`${sender.name} sent friend request`}
        </Typography>
        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}>
          <IconButton aria-label="Accept" onClick={()=>handler({_id, accept: true})}>
            <CheckIcon color="success" />
          </IconButton>
          <IconButton aria-label="Reject" onClick={()=>handler({_id, accept: false})}>
            <CloseIcon color="error" />
          </IconButton>
        </Stack>
      </Stack>
    </ListItem>
  );
});

export default Notifications;
