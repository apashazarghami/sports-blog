import React from "react";
import { Avatar, CardHeader, Divider, Typography } from "@mui/material";

const AuthorsCard = ({ avatar, name, length, index }) => {
    return(
        <>
            <CardHeader
                avatar={<Avatar src={avatar.url} alt={name} sx={{marginLeft:2}} />}
                title={<Typography component="p" variant="p" fontWeight="500" color="text.secondary">{name}</Typography>}
            />
            {
                index < length - 1 && <Divider variant="middle" />
            }
        </>
    )
}

export default AuthorsCard;