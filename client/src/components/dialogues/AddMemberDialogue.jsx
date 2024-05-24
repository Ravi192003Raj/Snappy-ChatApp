import { Button, Dialog, DialogTitle, Stack, Typography } from "@mui/material";
import React from "react";
import { sampleUsers } from "../../constants/sampleData";
import UserItem from "../shared/UserItem";
import { useState } from "react";


const AddMemberDialogue = ({ addMember, isLoadAddMember, chatId }) => {

    
const [members, setMembers] = useState(sampleUsers);
const [selectedMembers, setSelectedMembers] = useState([]);

const selectMemberHandler = (id) => {
  setSelectedMembers((prev) =>
    prev.includes(id)
      ? prev.filter((currentElement) => currentElement !== id)
      : [...prev, id]
  );
};

  const addMemberSubmitHandler = () => {
    closeHandler();
  };

  const closeHandler = () => {
    setSelectedMembers([]);
    setMembers([]);
  };

  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"}>Add Members</DialogTitle>
        <Stack spacing={"1rem"}>
          {members.length > 0 ? (
            members.map((i) => (
              <UserItem key={i._id} user={i} handler={selectMemberHandler} isAdded={selectedMembers.includes(i._id)} />
            ))
          ) : (
            <Typography textAlign={"center"}>No Friends</Typography>
          )}
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-evenly"
          alignItems="center">
          <Button color="error" variant="outlined" onClick={closeHandler}>
            Cancel
          </Button>
          <Button
            color="primary"
            onClick={addMemberSubmitHandler}
            variant="contained"
            disabled={isLoadAddMember}>
            Submit
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default AddMemberDialogue;
