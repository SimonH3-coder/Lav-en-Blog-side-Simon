import { useState, useEffect } from "react";
import { graphClient } from "../library/graphClient";
import request from "graphql-request";
import { useGraphQuery } from "../hooks/usequerry";
import { allBlog } from "../queries/allBlog";
import { Grid, Typography } from "@mui/material";

export function BlogLiPage() {
     /* const [blogs, setBlogs] = useState(null)  */

    const { data, error, isLoading } = useGraphQuery(allBlog)
    console.log(data);

    return (
        <div>
           <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 6, md: 4 }}>

            {data?.eagles?.map((blog) => (
                <Grid item xs={12} sm={6} md={4} key={blog.id}>
                    <div key={blog.id}>
        <h2>{blog.header}</h2>
        <p>{blog.indholdTekst}</p>
        <p>{blog.content}</p>
        <p>{blog.datoerTidOgBilleder}</p>
        <img src={blog.image?.url} alt={blog.header} />
        <p>Author: {blog.footer}</p>
    </div>
                </Grid>
            ))}
           </Grid>
    

        </div>
    )
}
    




