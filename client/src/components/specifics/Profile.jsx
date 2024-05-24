import { Stack, Avatar, Typography } from "@mui/material";
import React from "react";
import { Face as FaceIcon, AlternateEmail as UserNameIcon, CalendarMonth as CalenderIcon } from "@mui/icons-material";
import moment from 'moment';

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />

      <ProfileCard
        heading={"Bio"}
        text={"adsjafhgsdliufg ais jdhfkasjd "}
      />
      <ProfileCard
        heading={"Username"}
        text={"ravi raj "}
        icon={<UserNameIcon/>}
      />
      <ProfileCard
        heading={"Name"}
        text={"Ravi Raj "}
        icon={<FaceIcon/>}
      />
      <ProfileCard
        heading={"Joined"}
        text={moment('2024-02-28').fromNow()}
        icon={<CalenderIcon/>}
      />
    </Stack>
  );
};

const ProfileCard = ({ text, icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}>
    {icon && icon}

    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography color={"grey"} variant="caption">{heading}</Typography>
    </Stack>
  </Stack>
);

export default Profile;
