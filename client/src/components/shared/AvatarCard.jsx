import React from "react";
import { Avatar, AvatarGroup, Stack, Box } from "@mui/material";
import { transformImage } from "../../lib/Features";

const AvatarCard = ({ avatar = [], max = 2 }) => {
  // Slicing the avatar array to get only the first two avatars
  const avatarsToDisplay = avatar.slice(0, max);

  return (
    <Stack direction="row" spacing={0.5}>
      <AvatarGroup max={max} position={"relative"}>
        <Box width={"6rem"} height={"3rem"} position={"relative"}>
          {avatarsToDisplay.map((i, index) => (
            <Avatar
              key={i.id || index} // Use a unique identifier if available
              src={transformImage(i)}
              alt={`Avatar ${index}`}
              sx={{
                width: "2.5rem",
                height: "2.5rem",
                position: "absolute",
                left: {
                xs: `${0.5+index}rem`,
                sm: `${0.5+index}rem`,
              },
              }}
            />
          ))}
        </Box>
      </AvatarGroup>
    </Stack>
  );
};

export default AvatarCard;
