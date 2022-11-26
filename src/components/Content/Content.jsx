import React, { useEffect } from "react";
import { Container, Grid } from "@mui/material";
import ShoppingItem from './ShoppingItem/ShoppingItem.jsx';

const Content = ({ items, setShoppingItems }) => {

    useEffect(() => {
        setShoppingItems();
    }, [setShoppingItems]);

    let shoppingItems = items.map(i => <ShoppingItem
        key={i.id}
        title={i.title}
        price={i.price}
        category={i.category}
        description={i.description}
        image={i.image}
    />)

    return <Container
        sx={{
            mt: '20px'
        }}
    >
        <Grid container spacing={2}>
            {shoppingItems}
        </Grid>
    </Container>
}

export default Content;