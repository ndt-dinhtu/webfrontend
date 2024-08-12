import { Box, Typography, Button as MuiButton, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router';
import { formatPrice } from 'utils';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';
import { useDispatch } from 'react-redux';
import { addToCart } from 'features/cart/cartSlice';

const useStyles = makeStyles((theme) => ({
  productContainer: {
    marginBottom: '26px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  button: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50px',
    border: '2px solid #fff',
    color: '#fff',
    backgroundColor: '#007bff',
    textTransform: 'none',
    fontSize: '16px',
    padding: '8px 16px',
    position: 'relative',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: 'aqua',
      borderColor: 'aqua',
    },
    '& .icon': {
      position: 'absolute',
      right: '8px',
      borderRadius: '50%',
      backgroundColor: '#fff',
      color: '#007bff',
      padding: '4px',
    },
  },
  productName: {
    display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  tooltip: {
    fontSize: '1.2rem', // Tăng kích thước chữ trong Tooltip
  },
}));

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

function Product({ product }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const thumbnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_PLACEHOLDER;

  const handleClick1 = () => {
    history.push(`/products/${product.id}`);
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      product,
      quantity: 1,
    };
    dispatch(addToCart(cartItem));
  };

  return (
    <Box className={classes.productContainer} padding={1}>
      <div onClick={handleClick1}>
        <Tooltip title={product.name} placement='top' classes={{ tooltip: classes.tooltip }}>
          <Box padding={1} minHeight={'215px'}>
            <img src={thumbnailUrl} alt={product.name} width="100%" />
          </Box>
        </Tooltip>

        <Typography variant="body2" className={classes.productName}>
          {product.name}
        </Typography>
        <Typography variant="body2">
          <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
            {formatPrice(product.salePrice)}
          </Box>
          {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ''}
        </Typography>
      </div>
      <MuiButton className={classes.button} onClick={handleAddToCart}>
        ADD CART
        <i className="fas fa-cart-plus icon"></i>
      </MuiButton>
    </Box>
  );
}

export default Product;
