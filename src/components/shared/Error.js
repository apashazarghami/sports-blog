import { Typography } from "@mui/material";
import React from "react";

const Error = () => {
    return(
        <Typography component="h3" variant="h6" fontWeight={900} fontSize={19} height="calc(100vh - 189px)" color="error.dark" pt={4} sx={{display:"flex", justifyContent:"start"}}>
            خطایی رخ داده، لطفا دوباره تلاش کنید
        </Typography>
    )
}

export default Error;