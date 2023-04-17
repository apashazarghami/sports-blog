import React from "react";
import { AppBar, Toolbar, Container, Typography } from "@mui/material";
import { Book } from "@mui/icons-material";

const Header = () => {
    return(
        <AppBar position="sticky">
            <Container maxWidth="lg">
                <Toolbar>
                    <Typography component="h1" variant="h5" flex={1} fontWeight="700">
                        وبلاگ ورزشی
                    </Typography>
                    <Book />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;