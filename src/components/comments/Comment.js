import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";

const Comment = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");
    return(
        <Grid container box sx={{boxShadow:"rgba(0,0,0,0.1) 0px 4px 12px", borderRadius:4, padding: 4, marginTop:4}}>
            <Grid item xs={12} m={2}>
                <Typography component="h3" variant="p" color="primary" fontWeight="700">ارسال نظرات</Typography>
            </Grid>
            <Grid item xs={12} m={2}>
                <TextField size="small" style={{width:"100%"}} label="نام کاربری" value={name} onChange={e => setName(e.target.value)} />
            </Grid>
            <Grid item xs={12} m={2}>
                <TextField size="small" style={{width:"100%"}} label="ایمیل" value={email} onChange={e => setEmail(e.target.value)} />
            </Grid>
            <Grid item xs={12} m={2}>
                <TextField size="small" multiline minRows={4} style={{width:"100%"}} label="نظرات" value={comment} onChange={e => setComment(e.target.value)} />
            </Grid>
            <Grid item xs={12} m={2}>
                <Button variant="contained">ارسال</Button>
            </Grid>
        </Grid>
    )
}

export default Comment;