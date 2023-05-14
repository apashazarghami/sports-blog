import React from "react";
import { Grid } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../../graphql/queries";
import BlogsCard from "../shared/BlogsCard";
import Loader from "../shared/Loader";
import Error from "../shared/Error";

const Blogs = () => {
    const { loading, data, error } = useQuery(GET_BLOGS_INFO);
    console.log(error)
    return(
        <Grid container spacing={2}>
            {
                loading && <div style={{margin:"1rem auto 0 auto", }}><Loader /></div>
            }
            {
                error && <div style={{marginTop: "1rem", paddingRight:"1rem"}}><Error /></div>
            }
            {
                data && data.posts.map(post => <Grid key={post.id} item xs={12} sm={6} md={4}>
                    <BlogsCard {...post} />
                </Grid>)
            }
        </Grid>
    )
}

export default Blogs;