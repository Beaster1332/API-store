import React from "react";
import { Card, CardMedia, Grid, CardContent, Typography, CardActions, Button } from "@mui/material";

const ShoppingItem = (props) => {

    const { title, price, category, description, image } = props;

    return <Grid item xs={12} md={4}>
    <Card>
        <CardMedia
            component="img"
            height="150"
            image={image}
            alt={title}
        />
        <CardContent>
            <Typography
                gutterBottom
                variant="h5"
                component="div"
            >
                {title}
            </Typography>
            <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: '15px' }}
            >
                {description}
            </Typography>
            <Typography
                variant="body1"
                color='text.secondary'
                sx={{
                    mt: '10px',
                    fontWeight: 600
                }}
            >
                {category}
            </Typography>
        </CardContent>
        <CardActions>
            <Button
                size="small"
            >
                <Typography
                    variant="body1"
                    sx={{
                        fontWeight: 600
                    }}
                >
                    {price} $
                </Typography>
            </Button>
        </CardActions>
    </Card>
</Grid>
}

export default ShoppingItem;