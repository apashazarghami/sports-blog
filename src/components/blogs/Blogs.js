import React from "react";
import { Grid } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../../graphql/queries";
import BlogsCard from "../shared/BlogsCard";
import Loader from "../shared/Loader";

const Blogs = () => {
    const { loading, data, error } = useQuery(GET_BLOGS_INFO);
    return(
        <Grid container spacing={2}>
            {
                loading && <Loader />
            }
            {
                error && <h3 style={{color: "red"}}>{`${error.message}, Try again`}</h3>
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