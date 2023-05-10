import React from "react";
import { Avatar, Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const AuthorsCardInfo = ({ name, field, avatar, slug }) => {
    return(
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{boxShadow:"rgba(0,0,0,0.1) 0px 4px 12px", display:"flex", flexDirection:"column", alignItems:"center"}}>
                <CardHeader
                    avatar={<Avatar src={avatar.url} alt={name} sx={{width: "100px", height: "100px"}} />}
                />
                <CardContent sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <Link to={`/authors/${slug}`} style={{textDecoration: "none"}}>
                        <Typography component="span" variant="h6" fontWeight={700} color="text.primary">{name}</Typography>
                    </Link>
                    <Typography component="span" variant="h6" fontWeight={700} color="text.secondary">{field}</Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default AuthorsCardInfo;