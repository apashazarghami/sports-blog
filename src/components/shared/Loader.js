import React from "react";
import { Container, Grid } from "@mui/material";
import { Vortex } from "react-loader-spinner";

const Loader = () => {
    return(
        <Container maxWidth="lg">
            <Grid container mt={10}>
                <Grid item xs={12} height="100vh" display="flex" justifyContent="center">
                    <Vortex height="200" width="200" ariaLabel="vortex-loading" colors={['rgba(0,0,0,0.87)', '#d32f2f', 'rgba(0,0,0,0.12)', '#42a5f5', '#2e7d32', 'rgba(0,0,0,0.6)']} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Loader;