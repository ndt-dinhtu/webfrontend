import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button as ReactstrapButton, Container } from 'reactstrap';
import { cartItemsSelector, cartTotalSelector } from './selectors';
import { removeFromCart, setQuantity } from './cartSlice';
import { formatPrice } from 'utils';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';
import { makeStyles } from '@material-ui/core/styles';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

const useStyles = makeStyles(() => ({
    productImage: {
        width: '80px',
        height: '80px',
        objectFit: 'cover',
    },
    tableCell: {
        verticalAlign: 'middle',
    },
    quantityButton: {
        margin: '0 5px',
    },
}));

function Cart() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const cartItems = useSelector(cartItemsSelector);
    const cartTotal = useSelector(cartTotalSelector);

    const handleQuantityChange = (id, quantity) => {
        dispatch(setQuantity({ id, quantity }));
    };

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <>
            <Header />
            <Container>
                <h2>Giỏ hàng</h2>
                {cartItems.length === 0 ? (
                    <p>Giỏ hàng của bạn đang trống.</p>
                ) : (
                    <Table striped>
                        <thead>
                            <tr>
                                <th className={classes.tableCell}>Hình ảnh</th>
                                <th className={classes.tableCell}>Tên sản phẩm</th>
                                <th className={classes.tableCell}>Số lượng</th>
                                <th className={classes.tableCell}>Đơn giá</th>
                                <th className={classes.tableCell}>Tổng tiền</th>
                                <th className={classes.tableCell}>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => {
                                const thumbnailUrl = item.product.thumbnail
                                    ? `${STATIC_HOST}${item.product.thumbnail?.url}`
                                    : THUMBNAIL_PLACEHOLDER;

                                return (
                                    <tr key={item.id}>
                                        <td className={classes.tableCell}>
                                            <img src={thumbnailUrl} alt={item.product.name} className={classes.productImage} />
                                        </td>
                                        <td className={classes.tableCell}>{item.product.name}</td>
                                        <td className={classes.tableCell}>
                                            <ReactstrapButton
                                                color="secondary"
                                                className={classes.quantityButton}
                                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                disabled={item.quantity <= 1}
                                            >
                                                -
                                            </ReactstrapButton>
                                            {item.quantity}
                                            <ReactstrapButton
                                                color="secondary"
                                                className={classes.quantityButton}
                                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                            >
                                                +
                                            </ReactstrapButton>
                                        </td>
                                        <td className={classes.tableCell}>{formatPrice(item.product.salePrice)}</td>
                                        <td className={classes.tableCell}>{formatPrice(item.product.salePrice * item.quantity)}</td>
                                        <td className={classes.tableCell}>
                                            <ReactstrapButton color="danger" onClick={() => handleRemove(item.id)}>
                                                Xóa
                                            </ReactstrapButton>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                )}
                <h3>Tổng tiền: {formatPrice(cartTotal)}</h3>
            </Container>
            <Footer />
        </>
    );
}

export default Cart;
