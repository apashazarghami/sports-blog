import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Container, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Header = () => {
    const navigate = useNavigate();
    return(
        <AppBar position="sticky">
            <Container maxWidth="lg">
                <Toolbar sx={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                    <Link to="/" style={{textDecoration:"none", color:"#ffffff"}}>
                        <Typography component="h1" variant="h5" fontWeight="700">
                            وبلاگ ورزشی
                        </Typography>
                    </Link>
                    <ArrowBackIcon onClick={() => navigate(-1)} style={{cursor:"pointer"}} />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;