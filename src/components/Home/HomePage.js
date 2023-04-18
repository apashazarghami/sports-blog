import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Blogs from "../blogs/Blogs";
import Authors from "../authors/Authors";
import { Link } from "react-router-dom";

const HomePage = () => {
    return(
        <Container maxWidth="lg">
            <Grid container spacing={2} padding={3}>
                <Grid item xs={12} md={3} mt={4}>
                    <Typography component="h3" variant="h5" mb={3}  fontWeight="700">
                        نویسنده ها
                    </Typography>
                    <Authors />
                </Grid>
                <Grid item xs={12} md={9} mt={4}>
                    <Link to="/blogs" style={{textDecoration: "none", color:"rgba(0,0,0,0.87)"}}>
                        <Typography component="h3" variant="h5" mb={5}  fontWeight="700">
                            مقالات
                        </Typography>
                    </Link>
                    <Blogs />
                </Grid>
            </Grid>
        </Container>
    )
}

export default HomePage;