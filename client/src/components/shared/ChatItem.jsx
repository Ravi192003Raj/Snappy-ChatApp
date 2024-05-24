import React, { memo } from 'react'
import {Link} from '../styles/StyledComponents'
import { Box, Stack, Typography } from '@mui/material'
import AvatarCard from './AvatarCard'

const ChatItem = ({
    avatar =[],
    name,
    _id,
    groupChat=false,
    sameSender,
    isOnline,
    newMessageAlert,
    index=0,
    handleDeleteChat,
}) => {
  return (
    <Link sx={{padding: "3px",}} to={`/chat/${_id}`} onContextMenu={(e)=>handleDeleteChat(e,_id,groupChat)}>
        <div style={{
            display: "flex",
            alignItems: "center",
            padding: "0.5rem",
            backgroundColor: sameSender? "#626161" : "unset",
            color: sameSender? "white": "unset",
            justifyContent: "flex-start",
            gap: "0.5rem",
            position: "relative",
              overflow: "hidden",
        }}>
            <AvatarCard avatar={avatar}/>
            <Stack>
      <Typography>
        {name}
      </Typography>
      {newMessageAlert && (
        <Typography>
          {newMessageAlert.count} New Message{newMessageAlert.count > 1 ? "s" : ""}
        </Typography>
      )}
    </Stack>
            {
                isOnline && <Box sx={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "green",
                    position: "absolute",
                    top: "50%",
                    right: "2rem",
                    transform: "translateY(-50%)",
                }}/>
            }
        </div>
    </Link>
  )
}

export default memo(ChatItem);
