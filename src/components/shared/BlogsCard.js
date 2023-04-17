import React from "react";
import { Avatar, Button, Card, CardContent, CardHeader, CardMedia, Divider, Typography, CardActions } from "@mui/material";

const BlogsCard = ( { title, coverPhoto, author, slug }) => {
    return(
        <Card sx={{boxShadow:"rgba(0,0,0,0.1) 0px 4px 12px", borderRadius:4}}>
            <CardHeader
                avatar={<Avatar src={author.avatar.url} alt={author.name} />}
                title={<Typography component="p" variant="p" color="text.secondary" sx={{marginRight:2}} fontWeight="500">
                    {author.name}
                </Typography>} 
            />
            <CardMedia component="img" image={coverPhoto.url} height="194" alt={title} />
            <CardContent>
                <Typography component="h3" variant="h6" fontWeight="600" color="text.primary" sx={{marginBottom:2, height:"58px"}}>
                    {title}
                </Typography>
            </CardContent>
            <Divider variant="middle" sx={{margin:"10px"}} />
            <CardActions>
                <Button variant="outlined" size="small" color="primary" sx={{borderRadius:3, width:"100%", marginBottom:"10px"}}>
                    مطالعه مقاله
                </Button>
            </CardActions>
        </Card>
    )
}

export default BlogsCard;