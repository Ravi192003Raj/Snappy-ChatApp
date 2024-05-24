import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  InputAdornment,
  Stack,
  TextField,
  List,
} from "@mui/material";
import { useInputValidation } from "6pp"; // Ensure this is the correct import path
import { Search as SearchIcon } from "@mui/icons-material";
import UserItem from "../shared/UserItem";
import { sampleUsers } from "../../constants/sampleData";

const Search = () => {
  const search = useInputValidation(""); // Ensure 'useInputValidation' properly handles initial values and change events
  const [users, setUsers] = useState(sampleUsers); // State to hold user data

  const addFriendHandler = (id) => {
    console.log("Adding friend with ID:", id);
    // Implement the logic to add a friend here, possibly updating state
  };

  const isLoadingSendFriendRequest = false; // Placeholder for loading state, consider using useState for dynamic updates

  return (
    <Dialog open>
      <Stack p={4} direction="column" width="25rem">
        <DialogTitle textAlign="center" variant="h4">Find People</DialogTitle>
        <TextField
          label="Search"
          value={search.value}
          onChange={search.changeHandler} // Confirm 'changeHandler' is correct or if it should be 'onChange'
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <List>
          {users.map((user) => (
            <UserItem
              key={user._id} // Ensure each user object has a unique '_id' property
              user={user}
              handler={addFriendHandler}
              handlerIsLoading={isLoadingSendFriendRequest}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default Search;
