import React from "react";
import { Link } from "react-router-dom";
import { Avatar, CardHeader, Divider, Typography } from "@mui/material";

const AuthorsCard = ({ avatar, name, slug, length, index }) => {
    return(
        <>
            <Link to={`/authors/${slug}`} style={{textDecoration:"none"}}>
                <CardHeader
                    avatar={<Avatar src={avatar.url} alt={name} sx={{marginLeft:2}} />}
                    title={<Typography component="p" variant="p" fontWeight="500" color="text.secondary">{name}</Typography>}
                />
            </Link>
            {
                index < length - 1 && <Divider variant="middle" />
            }
        </>
    )
}

export default AuthorsCard;