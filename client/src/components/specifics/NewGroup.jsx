import { useInputValidation } from "6pp";
import {Check as CheckIcon, Close as CloseIcon} from '@mui/icons-material'; 
import {
  Button,
  Dialog,
  DialogTitle,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import { sampleUsers } from '../../constants/sampleData';
import UserItem from '../shared/UserItem';

const NewGroup = () => {
  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemberHandler = (id) => {
    setSelectedMembers(prev => prev.includes(id)? prev.filter((currentElement)=>currentElement !==id): [...prev, id]);
  };
  console.log(selectedMembers);

  const groupName = useInputValidation("");

  const submitHandler = () => {
    console.log("Creating group with name:", groupName.value, "and members:", selectedMembers);
  };

  const closeHandler = () => {
    console.log("Cancelled")
  };

  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={{ xs: "1rem", sm: "2rem" }} spacing="1rem" width="25rem">
        <DialogTitle alignSelf="center">New Group</DialogTitle>

        <TextField
          label="Group Name"
          variant="outlined"
          value={groupName.value}
          onChange={groupName.changeHandler}
          fullWidth
        />
        <Typography>Members:</Typography>

        <Stack spacing={1}>
          {members.map(user => (
            <UserItem
              key={user._id} 
              user={user}
              handler={() => selectMemberHandler(user._id)}
              isAdded={selectedMembers.includes(user._id)}
            />
          ))}
        </Stack>

        <Stack direction="row" spacing={2} justifyContent="center">
          <Button startIcon={<CloseIcon />} color="error" variant='outlined' onClick={closeHandler}>
            Cancel
          </Button>
          <Button startIcon={<CheckIcon />} color="primary" variant='contained' onClick={submitHandler}>
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  )
}

export default NewGroup;
