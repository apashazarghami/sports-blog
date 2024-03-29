import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { Grid, Container, Avatar, Typography } from "@mui/material";
import sanitizeHtml from "sanitize-html";
import BlogsCard from "../shared/BlogsCard";
import Loader from "../shared/Loader";
import Error from "../shared/Error";

const AuthorPage = () => {
    const { slug } = useParams();
    const { loading, data, error } = useQuery(GET_AUTHOR_INFO, { variables: { slug } });
    return(
        <Container maxWidth="lg">
            {
                loading && <Loader />
            }
            {
                error && <Error />
            }
            {
                data &&
                    <Grid container mt={9} px={3}>
                        <Grid item xs={12} display="flex" justifyContent="center">
                            <Avatar src={data.author.avatar.url} alt={data.author.name} sx={{width:250, height:250}} />
                        </Grid>
                        <Grid item xs={12} mt={4}>
                            <Typography component="h3" variant="h5" fontWeight="700" textAlign="center">
                                {data.author.name}
                            </Typography>
                            <Typography component="p" variant="h5" textAlign="center" color="text.secondary" mt={2}>
                                {data.author.field}
                            </Typography>
                            <Grid item xs={12} mt={6}>
                                <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(data.author.description.html) }} style={{textAlign:"justify", lineHeight:3}}></div>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} mt={6}>
                            <Typography component="h3" variant="h5" fontWeight="700">
                                {`مقالات ${data.author.name}`}
                            </Typography>
                        </Grid>
                        <Grid container spacing={2} mt={2}>
                            {
                                data.author.posts.map(post => <Grid item xs={12} sm={6} md={4} key={post.id}>
                                    <BlogsCard title={post.title} coverPhoto={post.coverPhoto} slug={post.slug} />
                                </Grid>)
                            }
                        </Grid>
                    </Grid>
            }
        </Container>
    )
}

export default AuthorPage;