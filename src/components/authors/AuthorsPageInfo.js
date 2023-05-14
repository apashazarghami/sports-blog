import React from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import Loader from "../shared/Loader";
import { Container, Grid } from "@mui/material";
import AuthorsCardInfo from "../shared/AuthorsCardInfo";
import Error from "../shared/Error";

const AuthorPageInfo = () => {
    const { loading, data, error } = useQuery(GET_AUTHORS_INFO);
    return(
        <Container maxWidth="lg">
            {
                loading && <Loader />
            }
            {
                error && <Error />
            }
            <Grid container spacing={3} p={4}>
                {

                    data && data.authors.map(author => <AuthorsCardInfo key={author.id} name={author.name} field={author.field} avatar={author.avatar} slug={author.slug} />)
                }
            </Grid>
        </Container>
    )
}

export default AuthorPageInfo;