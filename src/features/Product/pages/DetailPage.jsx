import { Box, Container, Grid, makeStyles, LinearProgress, Paper } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import ProductThumbnail from '../components/ProductThumbnail';
import useProductDetail from '../hooks/useProductDetail';
import ProductInfo from '../components/ProductInfo';
import AddToCartForm from '../components/AddToCartForm';
import ProductMenu from '../components/ProductMenu';
import ProductDescription from '../components/ProductDescription';
import { useDispatch } from 'react-redux';
import { addToCart } from 'features/cart/cartSlice';
import Header from 'components/Header/Header';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingBottom: theme.spacing(3),
        paddingTop: '30px',
        marginTop: '100px'
    },

    left: {
        width: '400px',
        padding: theme.spacing(1.5),
        borderRight: `1px solid ${theme.palette.grey[300]}`,
    },

    right: {
        flex: '1 1 0',
        padding: theme.spacing(1.5),
    },
    loading: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
    },
}));

function DetailPage() {
    const classes = useStyles();
    const { params: { productId }, url } = useRouteMatch();
    const { product, loading } = useProductDetail(productId);
    const dispatch = useDispatch();

    if (loading) {

        return (
            <Box className={classes.loading}>
                <LinearProgress />
            </Box>
        )
    }

    const handleAddToCartSubmit = ({ quantity }) => {
        const action = addToCart({
            id: product.id,
            product,
            quantity,
        });
        dispatch(action);
    };
    return (
        <Box className={classes.root}>
            <Header />
            <Container>
                <Paper elevation={0}>
                    <Grid container>
                        <Grid item className={classes.left}>
                            <ProductThumbnail product={product} />
                        </Grid>

                        <Grid item className={classes.right}>
                            <ProductInfo product={product} />
                            <AddToCartForm onSubmit={handleAddToCartSubmit} />
                        </Grid>
                    </Grid>
                </Paper>

                <ProductMenu />

                <Switch>
                    <Route exact path={url}>
                        <ProductDescription product={product} />
                    </Route>
                    {/* 
                    <Route path={`${url}/additional`} component={ProductAdditional} />
                    <Route path={`${url}/reviews`} component={ProductReviews} /> */}
                </Switch>
            </Container>
        </Box>
    );
}

export default DetailPage;