import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Container, Typography } from "@mui/material";
import { Book } from "@mui/icons-material";

const Header = () => {
    return(
        <AppBar position="sticky">
            <Container maxWidth="lg">
                <Toolbar sx={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                    <Link to="/" style={{textDecoration:"none", color:"#ffffff"}}>
                        <Typography component="h1" variant="h5" fontWeight="700">
                            وبلاگ ورزشی
                        </Typography>
                    </Link>
                    <Link to="/" style={{color:"#ffffff"}}>
                        <Book />
                    </Link>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;