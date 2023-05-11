import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../../graphql/mutations";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validateEmail, validateText } from "../../helper/functions";

const CommentForm = ({ slug }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");
    const [isPressed, setIsPressed] = useState(false);
    const [sendComment, { loading, data }] = useMutation(SEND_COMMENT, {
        variables: {
            name,
            email,
            comment,
            slug
        }
    });

    const sendCommentHandler = () => {
        if(!validateText(name, 2) && validateEmail(email) && validateText(comment, 3)) {
            toast.warn("لطفا نام کربری معتبر وارد کنید");
        }
        if(validateText(name, 2) && !validateEmail(email) && validateText(comment, 3)) {
            toast.warn("لطفا ایمیل معتبر وارد کنید");
        }
        if(validateText(name, 2) && validateEmail(email) && !validateText(comment, 3)) {
            toast.warn("لطفا نظر خود را کامل وارد کنید");
        }
        if(!validateText(name, 2) && !validateEmail(email) && validateText(comment, 3)) {
            toast.warn("لطفا نام کربری و ایمیل معتبر وارد کنید");
        }
        if(!validateText(name, 2) && validateEmail(email) && !validateText(comment, 3)) {
            toast.warn("لطفا نام کربری و نظر معتبر وارد کنید");
        }
        if(validateText(name, 2) && !validateEmail(email) && !validateText(comment, 3)) {
            toast.warn("لطفا ایمیل و نظر معتبر وارد کنید");
        }
        if(!validateText(name, 2) && !validateEmail(email) && !validateText(comment, 3)) {
            toast.warn("لطفا تمام گزینه ها را به درستی وارد کنید");
        }
        if(validateText(name, 2) && validateEmail(email) && validateText(comment, 3)) {
            sendComment();
            setIsPressed(true);
        }
        setName("");
        setEmail("");
        setComment("");
    }

    if(data && isPressed) {
        toast.success("نظر شما ارسال شد، منتظر تایید می باشد");
        setIsPressed(false);
    }

    return(
        <Grid container sx={{boxShadow:"rgba(0,0,0,0.1) 0px 4px 12px", borderRadius:4, padding: 4, marginTop:4}}>
            <Grid item xs={12} m={2}>
                <Typography component="p" variant="h6" color="primary" fontWeight="700">ارسال نظرات</Typography>
            </Grid>
            <Grid item xs={12} m={2}>
                <TextField variant="outlined" size="small" sx={{width:"100%"}} label="نام کاربری" value={name} onChange={e => setName(e.target.value)} />
            </Grid>
            <Grid item xs={12} m={2}>
                <TextField variant="outlined" size="small" sx={{width:"100%"}} label="ایمیل" value={email} onChange={e => setEmail(e.target.value)} />
            </Grid>
            <Grid item xs={12} m={2}>
                <TextField variant="outlined" size="small" multiline minRows={4} sx={{width:"100%"}} label="نظرات" value={comment} onChange={e => setComment(e.target.value)} />
            </Grid>
            <Grid item xs={12} m={2}>
                {
                    loading ? <Button variant="contained" disabled>در حال ارسال</Button> :
                    <Button variant="contained" onClick={sendCommentHandler}>ارسال</Button>
                }
            </Grid>
            <ToastContainer
                position= "top-center"
                autoClose= {3000}
                hideProgressBar= {false}
                closeOnClick
                pauseOnHover
                draggable
                progress= {undefined}
                theme= "light" />
        </Grid>
    )
}

export default CommentForm;