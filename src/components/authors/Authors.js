import React from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import { Card } from "@mui/material";
import AuthorsCard from "../shared/AuthorsCard";
import Loader from "../shared/Loader";
import Error from "../shared/Error";

const Authors = () => {
    const { data, loading, error } = useQuery(GET_AUTHORS_INFO);
    console.log(error)
    return(
        <>
            {
                loading && <Loader />
            }
            {
                error && <Error />
            }
            {
                data && <Card sx={{boxShadow:"rgba(0,0,0,0.1) 0px 4px 12px", borderRadius:4}}>
                    {
                        data.authors.map((author, index) => <AuthorsCard key={author.id} {...author} length={data.authors.length} index={index} />)
                    }
                </Card>
            }
        </>
    )
}

export default Authors;