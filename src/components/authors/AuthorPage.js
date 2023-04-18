import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { Grid, Container, Avatar, Typography } from "@mui/material";
import sanitizeHtml from "sanitize-html";
import BlogsCard from "../shared/BlogsCard";

const AuthorPage = () => {
    const { slug } = useParams();
    const { loading, data, error } = useQuery(GET_AUTHOR_INFO, { variables: { slug } });
    console.log({ loading, data, error });
    return(
        <Container maxWidth="lg">
            {
                loading && <h3>Loading ...</h3>
            }
            {
                error && <h3>{error.message}</h3>
            }
            {
                data &&
                    <Grid container>
                        <Grid item xs={12} display="flex" justifyContent="center" mt={8}>
                            <Avatar src={data.author.avatar.url} alt={data.author.name} sx={{width:200, height:200}} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography component="h3" variant="h5" fontWeight="700" textAlign="center" sx={{marginTop:3}}>
                                {data.author.name}
                            </Typography>
                            <Typography component="h3" variant="h5" fontWeight="500" textAlign="center" color="text.secondary" sx={{marginTop:2}}>
                                {data.author.field}
                            </Typography>
                            <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(data.author.description.html) }} style={{marginTop:40, textAlign:"justify", lineHeight:3}}></div>
                        </Grid>
                        <Grid item xs={12}>
                            <Link to="/blogs" style={{textDecoration: "none", color:"rgba(0,0,0,0.87)"}}>
                                <Typography component="h3" variant="h4" fontWeight="700" sx={{margin:"20px 0"}}>
                                    مقالات
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid container spacing={2}>
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