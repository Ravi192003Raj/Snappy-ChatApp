import React, { Suspense, lazy, memo, useEffect, useState } from "react";
import {
  Backdrop,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Done as DoneIcon,
  Edit as EditIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { purple, send, send_dark } from "../constants/Color";
import BackIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Link } from "../components/styles/StyledComponents";
import AvatarCard from "../components/shared/AvatarCard";
import { sampleChats, sampleUsers } from "../constants/sampleData";
import UserItem from "../components/shared/UserItem";

const ConfirmDeleteDialogue = lazy(() =>
  import("../components/dialogues/ConfirmDeleteDialogue")
);
const AddMemberDialogue = lazy(() =>
  import("../components/dialogues/AddMemberDialogue")
);

const Groups = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("");
  const [confirmDeleteDialogue, setConfirmDeleteDialogue] = useState(false);

  const [searchParams] = useSearchParams();
  const chatId = searchParams.get("group");
  const navigate = useNavigate();
  const isAddMember = false;

  useEffect(() => {
    if (chatId) {
      const groupName = `Group Name ${chatId}`;
      setGroupName(groupName);
      setGroupNameUpdatedValue(groupName);
    }
    return () => {
      setGroupName("");
      setGroupNameUpdatedValue("");
      setIsEdit(false);
    };
  }, [chatId]);

  const handleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const updateGroupName = () => {
    setIsEdit(false);
    console.log(groupNameUpdatedValue);
  };

  const openConfirmDeleteHandler = () => {
    setConfirmDeleteDialogue(true);
  };

  const closeConfirmDeleteHandler = () => {
    setConfirmDeleteDialogue(false);
  };

  const openAddMemberHandler = () => {
    console.log("Member Added");
  };

  const deleteHandler = () => {
    console.log("Delete Handler");
    setConfirmDeleteDialogue(false);
  };

  const removeMemberHandler = (id) => {
    console.log("Remove Member", id);
  };

  const GroupName = (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing="1rem"
      padding="3rem">
      {isEdit ? (
        <>
          <TextField
            value={groupNameUpdatedValue}
            onChange={(e) => setGroupNameUpdatedValue(e.target.value)}
          />
          <IconButton onClick={updateGroupName}>
            <DoneIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Typography variant="h4">{groupName}</Typography>
          <IconButton onClick={() => setIsEdit(true)}>
            <EditIcon />
          </IconButton>
        </>
      )}
    </Stack>
  );

  const BackButton = () => (
    <>
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
          position: "fixed",
          right: "1rem",
          top: "1rem",
        }}>
        <Tooltip title="Menu">
          <IconButton onClick={handleMobile}>
            <MenuIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Tooltip title="Back">
        <IconButton
          sx={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            bgcolor: send,
            color: "white",
            "&:hover": { bgcolor: send_dark },
          }}
          onClick={() => navigate("/")}>
          <BackIcon />
        </IconButton>
      </Tooltip>
    </>
  );

  const ButtonGroup = (
    <Stack
      direction={{ sm: "row", xs: "column-reverse" }}
      spacing="1rem"
      p={{ sm: "1rem", xs: "0", md: "1rem 4rem" }}>
      <Button
        size="large"
        variant="contained"
        color="error"
        startIcon={<DeleteIcon />}
        onClick={openConfirmDeleteHandler}>
        Delete Group
      </Button>
      <Button
        size="large"
        variant="contained"
        startIcon={<AddIcon />}
        onClick={openAddMemberHandler}>
        Add Member
      </Button>
    </Stack>
  );

  return (
    <Grid container height="100vh">
      <Grid
        item
        sm={2.5}
        bgcolor={purple}
        height={"100%"}
        sx={{
          display: { xs: "none", sm: "block" },
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
        <GroupsList myGroups={sampleChats} chatId={chatId} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={9.5}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }}>
        <BackButton />
        {groupName && (
          <>
            {GroupName}
            <Typography margin="2rem" alignSelf="flex-start" variant="body1">
              Members
            </Typography>
            <Stack
              margin="0 0 1rem 0"
              maxWidth="45rem"
              width="100%"
              boxSizing="border-box"
              padding={{ sm: "1rem", xs: "0", md: "1rem 4rem" }}
              spacing="2rem"
              height="50vh"
              overflow="auto">
              {sampleUsers.map((i) => (
                <UserItem
                  key={i._id}
                  user={i}
                  isAdded
                  styling={{
                    boxShadow: "0 0 1rem rgba(0,0,0,0.2)",
                    padding: "1rem 2rem",
                    borderRadius: "1rem",
                  }}
                  handler={removeMemberHandler}
                />
              ))}
            </Stack>
            {ButtonGroup}
          </>
        )}
      </Grid>

      {isAddMember && (
        <Suspense fallback={<Backdrop open />}>
          <AddMemberDialogue />
        </Suspense>
      )}

      {confirmDeleteDialogue && (
        <Suspense fallback={<Backdrop open />}>
          <ConfirmDeleteDialogue
            open={confirmDeleteDialogue}
            handleClose={closeConfirmDeleteHandler}
            deleteHandler={deleteHandler}
          />
        </Suspense>
      )}
      <Drawer
        open={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}>
        <GroupsList w="50vw" />
      </Drawer>
    </Grid>
  );
};

const GroupsList = ({ w = "100%", myGroups = [], chatId }) => (
  <Stack width={w}>
    {myGroups.length > 0 ? (
      myGroups.map((group) => (
        <GroupListItem key={group._id} group={group} chatId={chatId} />
      ))
    ) : (
      <Typography textAlign="center">No Groups Available</Typography>
    )}
  </Stack>
);

const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;
  return (
    <Link
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) e.preventDefault();
      }}>
      <Stack direction="row" alignItems="center" spacing={0} padding="0.5rem">
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});

export default Groups;
