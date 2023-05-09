import React from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_COMMENTS } from "../../graphql/queries";

const Comments = ({ slug }) => {
    const { loading, data, error } = useQuery(GET_COMMENTS, { variables: { slug } });
    if (loading) return null;
    if (error) return <Typography component="p" variant="p" fontWeight={500}>{error.message}</Typography>
    if (data) {
        if (data.comments.length) {
            return(
                data.comments.map(comment => <Grid key={comment.id} item xs={12} border="1px solid silver" borderRadius={1} p={2} m={2}>
                                                <Box display="flex" alignItems="center">
                                                    <Avatar>
                                                        {comment.name.trim()[0]}
                                                    </Avatar>
                                                    <Typography component="p" variant="h6" fontWeight="500" marginLeft={1}>
                                                        {comment.name}
                                                    </Typography>
                                                </Box>
                                                <Typography component="p" variant="p" fontWeight="500" marginTop={4}>
                                                    {comment.comment}
                                                </Typography>
                                            </Grid>
                ))
        } else {
            return(
                <Grid item xs={12} border="1px solid silver" borderRadius={1} p={2} m={2}>
                    <Typography component="p" variant="p" fontWeight={500} color="text.disabled">
                        لطفا اولین نفری باشید که نظر خود را ارسال می کنید
                    </Typography>
                </Grid>
            )
        }
    }
}

export default Comments;