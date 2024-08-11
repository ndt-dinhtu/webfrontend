import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button as ReactstrapButton, Container, Row, Col, Input, FormGroup, Label } from 'reactstrap';
import { cartItemsSelector, cartTotalSelector } from './selectors';
import { removeFromCart, setQuantity } from './cartSlice';
import { formatPrice } from 'utils';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';
import { makeStyles } from '@material-ui/core/styles';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import ModalThanhToan from 'page/Checkout';

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
        borderRadius: '50%',
        width: '32px',
        height: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
    },
    quantityWrapper: {
        display: 'flex',
        alignItems: 'center',
    },
    quantityInput: {
        width: '60px',
        textAlign: 'center',
        margin: '0 10px',
    },
    invoice: {
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '5px',
    },
    container: {
        paddingTop: '200px',
    },
    discountInput: {
        width: '100%',
        marginBottom: '10px',
    },
    errorMessage: {
        color: 'red',
        marginTop: '10px',
    },
}));

const DISCOUNT_CODES = {
    GIAMGIA5: 0.05,
    GIAMGIA10: 0.10,
    GIAMGIA15: 0.15,
    GIAMGIA20: 0.20,
    GIAMGIA25: 0.25,
    GIAMGIA30: 0.30,
    GIAMGIA35: 0.35,
    GIAMGIA40: 0.40,
};

function Cart() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const cartItems = useSelector(cartItemsSelector);
    const cartTotal = useSelector(cartTotalSelector);
    const [discountCode, setDiscountCode] = useState('');
    const [shippingFee] = useState(0);
    const [discountAmount, setDiscountAmount] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    const handleQuantityChange = (id, value) => {
        const quantity = Math.max(1, Math.min(99, Number(value)));
        dispatch(setQuantity({ id, quantity }));
    };

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleApplyDiscount = () => {
        const discount = DISCOUNT_CODES[discountCode.toUpperCase()] || 0;
        if (discount > 0) {
            setDiscountAmount(discount);
            setErrorMessage('');
        } else {
            setErrorMessage('Mã giảm giá không hợp lệ, vui lòng thử lại.');
        }
    };

    const toggleModal = () => setModalOpen(!modalOpen);

    const discountedTotal = cartTotal * (1 - discountAmount);
    const finalTotal = discountedTotal + shippingFee;

    return (
        <>
            <Header />
            <Container className={classes.container}>
                <Row>
                    <Col xs="12" md="8">
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
                                                    <div className={classes.quantityWrapper}>
                                                        <ReactstrapButton
                                                            color="secondary"
                                                            className={classes.quantityButton}
                                                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                            disabled={item.quantity <= 1}
                                                        >
                                                            -
                                                        </ReactstrapButton>
                                                        <Input
                                                            type="number"
                                                            value={item.quantity}
                                                            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                                            min="1"
                                                            max="99"
                                                            className={classes.quantityInput}
                                                        />
                                                        <ReactstrapButton
                                                            color="secondary"
                                                            className={classes.quantityButton}
                                                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                        >
                                                            +
                                                        </ReactstrapButton>
                                                    </div>
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
                    </Col>
                    <Col xs="12" md="4">
                        <div className={classes.invoice}>
                            <h3>Hóa đơn</h3>
                            <FormGroup>
                                <Label for="discountCode">Nhập mã giảm giá:</Label>
                                <Input
                                    type="text"
                                    id="discountCode"
                                    value={discountCode}
                                    onChange={(e) => setDiscountCode(e.target.value)}
                                    className={classes.discountInput}
                                />
                                <ReactstrapButton color="primary" onClick={handleApplyDiscount}>
                                    Áp dụng
                                </ReactstrapButton>
                                {errorMessage && <p className={classes.errorMessage}>{errorMessage}</p>}
                            </FormGroup>
                            <p>Tổng tiền: {formatPrice(cartTotal)}</p>
                            <p>Giảm giá: {formatPrice(cartTotal * discountAmount)}</p>
                            <p>Phí vận chuyển: {formatPrice(shippingFee)}</p>
                            <p>Tổng cộng sau giảm giá và phí vận chuyển: {formatPrice(finalTotal)}</p>
                            <ReactstrapButton color="primary" block onClick={toggleModal}>
                                Thanh toán
                            </ReactstrapButton>
                        </div>
                    </Col>
                </Row>
            </Container>
            <ModalThanhToan
                isOpen={modalOpen}
                toggle={toggleModal}
                cartTotal={cartTotal}
                shippingFee={shippingFee}
                discountAmount={discountAmount}
            />
            <Footer />
        </>
    );
}

export default Cart;
