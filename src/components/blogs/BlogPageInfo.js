import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../../graphql/queries";
import Loader from "../shared/Loader";
import { Grid, Container } from "@mui/material";
import BlogsCard from "../shared/BlogsCard";
import Error from "../shared/Error";

const BlogPageInfo = () => {
    const { loading, data, error } = useQuery(GET_BLOGS_INFO);
    return(
        <>
            <Container maxWidth="lg">
                {loading && <Loader />}
                {error && <Error />}
                <Grid container spacing={4} p={4} mt={1}>
                    {data && data.posts.map(post => <Grid key={post.id} item xs={12} sm={6} md={4} lg={3}>
                        <BlogsCard title={post.title} coverPhoto={post.coverPhoto} slug={post.slug} />
                    </Grid>)}
                </Grid>
            </Container>
        </>
    )
}

export default BlogPageInfo;