import { Box, Typography, makeStyles } from '@material-ui/core';
import Product from 'features/Product/components/Product';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Container } from 'reactstrap';

const useStyles = makeStyles((theme) => ({
    root: {
        border: '1px solid blue',
        padding: '25px',
        borderRadius: '15px',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',

    },
    titleContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
    },
    title: {
        margin: 0,
    },
    button: {
        marginTop: '20px',
        textAlign: 'left',
        '& a': {
            textDecoration: 'none',
            color: theme.palette.primary.contrastText,
        },
    },
    productContainer: {
        display: 'grid',
        gap: '16px',
        gridTemplateColumns: 'repeat(2, 1fr)',
        '@media (min-width: 400px)': {
            gridTemplateColumns: 'repeat(3, 1fr)',
        },
        '@media (min-width: 600px)': {
            gridTemplateColumns: 'repeat(4, 1fr)',
        },
        '@media (min-width: 960px)': {
            gridTemplateColumns: 'repeat(6, 1fr)',
        },
    },
    productBox: {
        position: 'relative',
        '& .add-to-cart-button': {
            position: 'absolute',
            bottom: 0,
            right: 0,
            margin: theme.spacing(1),
            zIndex: 10,
        },
    },
}));

function ProductCarousel({ products }) {
    const classes = useStyles();

    return (
        <Container>
            <Box className={classes.root}>
                <Box className={classes.titleContainer}>
                    <Typography variant="h4" className={classes.title}>
                        Sản phẩm nổi bật
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        href="/products"
                        className={classes.button}
                    >
                        Xem tất cả
                    </Button>

                </Box>
                <Box className={classes.productContainer}>
                    {products.map((product) => (
                        <Box key={product.id} className={classes.productBox}>
                            <Product product={product} />
                        </Box>
                    ))}
                </Box>
            </Box>
        </Container>
    );
}

ProductCarousel.propTypes = {
    products: PropTypes.array.isRequired,
};

export default ProductCarousel;
