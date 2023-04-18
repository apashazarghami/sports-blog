import React from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import { Card } from "@mui/material";
import AuthorsCard from "../shared/AuthorsCard";
import Loader from "../shared/Loader";

const Authors = () => {
    const { data, loading, error } = useQuery(GET_AUTHORS_INFO);
    return(
        <>
            {
                loading && <Loader />
            }
            {
                error && <h3 style={{color: "red"}}>{`${error.message}, Try again`}</h3>
            }
            {
                data && <Card sx={{marginTop:5, boxShadow:"rgba(0,0,0,0.1) 0px 4px 12px", borderRadius:4}}>
                    {
                        data.authors.map((author, index) => <AuthorsCard key={author.id} {...author} length={data.authors.length} index={index} />)
                    }
                </Card>
            }
        </>
    )
}

export default Authors;