import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import {
  AdminPanelSettings as AdminPanelSettingsIcon,
  Chat,
  Group as GroupIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import moment from "moment";
import {
  SearchField,
  CurveButton,
} from "../../components/styles/StyledComponents";
import { DoughnutChart, LineChart } from "../../components/specifics/Chart";

const Dashboard = () => {
  const Appbar = (
    <Paper
      elevation={3}
      sx={{ padding: "2rem", margin: "2rem 0", borderRadius: "1rem" }}>
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
        <AdminPanelSettingsIcon sx={{ fontSize: "3rem" }} />
        <SearchField />
        <Box flexGrow={{ xs: "1", lg: "0" }} />
        <CurveButton>Search</CurveButton>
        <Box flexGrow={1} />
        <Typography
          display={{ xs: "none", lg: "block" }}
          color={"rgba(0,0,0,0.7)"}
          textAlign={"center"}>
          {moment().format("dddd,  DD MMMM YYYY")}
        </Typography>
      </Stack>
    </Paper>
  );

  const Widgets = (
    <Stack
      direction={{ sm: "row", xs: "column" }}
      spacing={"2rem"}
      justifyContent={"space-between"}
      alignItems={"center"}
      margin={"2rem 0"}>
      <Widget title={"Users"} value={34} icon={<PersonIcon />} />
      <Widget title={"Chats"} value={3} icon={<GroupIcon />} />
      <Widget title={"Messages"} value={454} icon={<Chat />} />
    </Stack>
  );

  return (
    <AdminLayout>
      <Container component={"main"}>
        {Appbar}
        <Stack
          direction={"row"}
          gap={"2rem"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={"center"}>
          <Paper
            elevation={3}
            sx={{
              padding: "2rem 3rem",
              borderRadius: "1rem",
              width: "100%",
              maxWidth: "36rem",
            }}>
            <Typography margin={"2rem 0"} variant={"h5"}>
              Last Messages
            </Typography>
            <LineChart value={[12, 69, 35, 26, 53, 36, 78]} />
          </Paper>

          <Paper
            elevation={3}
            sx={{
              padding: "1rem",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "100%", sm: "50%" },
              maxWidth: "24rem",
              position: "relative",
              height: "25rem",
            }}>
            <DoughnutChart
              value={[23, 66]}
              labels={["Single Chats", "Group Chats"]}
            />

            <Stack
              sx={{
                position: "absolute",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                spacing: "0.5rem",
                width: "100%",
                height: "100%",
              }}>
              <GroupIcon />
              <Typography>Vs</Typography>
              <PersonIcon />
            </Stack>
          </Paper>
        </Stack>
        {Widgets}
      </Container>
    </AdminLayout>
  );
};

const Widget = ({ title, value, icon }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: "1rem",
        borderRadius: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "100%", sm: "calc(33% - 1rem)" },
        minWidth: "200px",
        textAlign: "center",
      }}>
      <Stack spacing={"0.5rem"} alignItems={"center"}>
        {icon}
        <Typography variant={"h6"}>{title}</Typography>
        <Typography variant={"h4"}>{value}</Typography>
      </Stack>
    </Paper>
  );
};

export default Dashboard;
