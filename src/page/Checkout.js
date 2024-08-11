import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, FormGroup, Label, Input } from 'reactstrap';
import { formatPrice } from 'utils';

const ModalThanhToan = ({ isOpen, toggle, cartTotal, shippingFee, discountAmount }) => {
    const discountedTotal = cartTotal * (1 - discountAmount);
    const finalTotal = discountedTotal + shippingFee;

    return (
        <Modal isOpen={isOpen} toggle={toggle} backdrop="static" keyboard={false}>
            <ModalHeader toggle={toggle}>Thông tin thanh toán</ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label for="name">Họ và tên:</Label>
                    <Input type="text" id="name" placeholder="Nhập họ và tên" />
                </FormGroup>
                <FormGroup>
                    <Label for="address">Địa chỉ giao hàng:</Label>
                    <Input type="text" id="address" placeholder="Nhập địa chỉ giao hàng" />
                </FormGroup>
                <FormGroup>
                    <Label for="phone">Số điện thoại:</Label>
                    <Input type="text" id="phone" placeholder="Nhập số điện thoại" />
                </FormGroup>
                <FormGroup>
                    <Label for="paymentMethod">Phương thức thanh toán:</Label>
                    <Input type="select" id="paymentMethod">
                        <option>Thẻ tín dụng</option>
                        <option>Chuyển khoản ngân hàng</option>
                        <option>Thanh toán khi nhận hàng</option>
                    </Input>
                </FormGroup>
                <hr />
                <p>Tổng tiền: {formatPrice(cartTotal)}</p>
                <p>Giảm giá: {formatPrice(cartTotal * discountAmount)}</p>
                <p>Phí vận chuyển: {formatPrice(shippingFee)}</p>
                <p>Tổng cộng: {formatPrice(finalTotal)}</p>
            </ModalBody>
            <ModalFooter>
                <Button color="primary">Xác nhận thanh toán</Button>
                <Button color="secondary" onClick={toggle}>Hủy</Button>
            </ModalFooter>
        </Modal>
    );
};

export default ModalThanhToan;
