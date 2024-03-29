import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_BLOG_INFO } from "../../graphql/queries";
import Loader from "../shared/Loader";
import sanitizeHtml from "sanitize-html";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import CommentForm from "../comments/CommentForm";
import Comments from "../comments/Comments";
import Error from "../shared/Error";

const BlogPage = () => {
    const { slug } = useParams();
    const { loading, data, error } = useQuery(GET_BLOG_INFO, { variables: { slug } });
    return(
        <Container maxWidth="lg">
            {
                loading && <Loader />
            }
            {
                error && <Error />
            }
            {
                data && <Grid container mt={9} px={3}>
                    <Grid item xs={12}>
                        <Typography component="h2" variant="h4" fontWeight="700" color="primary">
                            {data.post.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} mt={6}>
                        <img src={data.post.coverPhoto.url} alt={data.post.title} width="100%" style={{borderRadius:15}} />
                    </Grid>
                    <Grid item xs={12} mt={6}>
                        <div dangerouslySetInnerHTML={{__html: sanitizeHtml(data.post.content.html)}} style={{textAlign:"justify", lineHeight:3}}></div>
                    </Grid>
                    <Grid item xs={12} display="flex" alignItems="center" mt={4}>
                        <Avatar src={data.post.author.avatar.url} alt={data.post.author.name} sx={{width:80, height:80}} />
                        <Box component="div" display="flex" flexDirection="column" justifyContent="center" alignItems="center" ml={2}>
                            <Typography component="p" variant="h6" fontWeight="700">
                                {data.post.author.name}
                            </Typography>
                            <Typography component="p" variant="p" color="text.secondary">
                                {data.post.author.field}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} mt={6}>
                        <CommentForm slug={slug} />
                    </Grid>
                    <Grid item xs={12} mt={6}>
                        <Grid container boxShadow="rgba(0,0,0,0.1) 0px 4px 12px" borderRadius={4} p={4}>
                            <Container maxWidth="lg">
                                <Grid item xs={12}>
                                    <Typography component="p" variant="h6" fontWeight="700" color="primary">
                                        نظرات
                                    </Typography>
                                </Grid>
                                <Comments slug={slug} />
                            </Container>
                        </Grid>
                    </Grid>
                </Grid>
            }
        </Container>
    )
}

export default BlogPage;