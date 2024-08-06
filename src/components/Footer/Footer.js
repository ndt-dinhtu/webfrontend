import React from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import './Footer.scss';
import vanchuyen1 from '../../assets/phuongthucvanchuyen_1.png'
import vanchuyen2 from '../../assets/phuongthucvanchuyen_2.png'
import vanchuyen3 from '../../assets/phuongthucvanchuyen_3.png'
import vanchuyen4 from '../../assets/phuongthucvanchuyen_4.png'
import thanhtoan1 from '../../assets/phuongthucthanhtoan_1.png'
import thanhtoan2 from '../../assets/phuongthucthanhtoan_2.png'
import thanhtoan3 from '../../assets/phuongthucthanhtoan_3.png'
import thanhtoan4 from '../../assets/phuongthucthanhtoan_4.png'
import thanhtoan5 from '../../assets/phuongthucthanhtoan_5.png'
import bocongthuong from '../../assets/bocongthuong.png'
import logo from '../../assets/logo.png'


const Footer = () => {
    return (
        <footer className="footer bg-light text-dark pt-5 pb-4">
            <Container>
                <Row>
                    <Col md="4" className="footer-section">
                        <div class="d-flex justify-content-center">
                            <img src={logo} alt="Webtaphoa" width='50%' class="img-fluid" />
                        </div>

                        <p>
                            <i class="fa-solid fa-location-dot m-2"></i>
                            CÔNG TY TRÁCH NHIỆM HỮU HẠN TẠP HÓA VIỆT - Mã số doanh nghiệp:
                            0315923957 do Sở Kế hoạch & Đầu tư TP Hồ Chí Minh cấp lần đầu
                            ngày 26/09/2019
                        </p>
                        <p>
                            - Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Quang Khải - Điện
                            thoại liên hệ: 0919221843
                        </p>
                        <p>- Địa Chỉ: 72 Hưng Phú, Phường 8, Quận 8, TP. Hồ Chí Minh</p>
                        <p><i class="fa-solid fa-phone m-2"></i>0919221843</p>
                        <p><i class="fa-solid fa-envelope m-2"></i>webtaphoa.vn@gmail.com</p>
                    </Col>
                    <Col md="2" className="footer-section">
                        <h5 className="footer-title">Hướng Dẫn</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Kiểm Tra Đơn Hàng</a></li>
                            <li><a href="#">Tìm Sản Phẩm</a></li>
                            <li><a href="#">Hướng Dẫn Mua Hàng</a></li>
                        </ul>
                    </Col>
                    <Col md="2" className="footer-section">
                        <h5 className="footer-title">Chính Sách</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Chính Sách Đổi Trả</a></li>
                            <li><a href="#">Chính Sách Giao Hàng</a></li>
                            <li><a href="#">Chính Sách Bảo Mật</a></li>
                            <li><a href="#">Chính Sách Thanh Toán</a></li>
                        </ul>
                    </Col>
                    <Col md="4" className="footer-section">
                        <h5 className="footer-title">Đăng Ký Nhận Tin Khuyến Mãi</h5>
                        <Form inline>
                            <FormGroup className="newsletter-form">
                                <Input
                                    type="email"
                                    name="email"
                                    id="newsletterEmail"
                                    placeholder="Nhập email"
                                />
                                <Button type="submit" color="primary" className='my-1' >Đăng Ký</Button>
                            </FormGroup>
                        </Form>
                        <div className="social mt-3">
                            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
                        </div>
                        <div className="mt-3">
                            <iframe
                                width="100%"
                                src="https://www.youtube.com/embed/pw8V13AIQVI"
                                title="Mẫu video giới thiệu Doanh nghiệp (DN 29)"
                                frameborder="0" allow="accelerometer; autoplay;
                             clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin">
                            </iframe>
                        </div>
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col md="4" className="footer-section">
                        <h6 className="footer-title">Phương Thức Thanh Toán</h6>
                        <div className="payment-methods">
                            <img src={thanhtoan1} alt="Mastercard" width='88px' height='40px' />
                            <img src={thanhtoan2} alt="Visa" width='88px' height='40px' />
                            <img src={thanhtoan3} alt="Momo" width='88px' height='40px' />
                            <img src={thanhtoan4} alt="Napas" width='88px' height='40px' />
                            <img src={thanhtoan5} alt="Napas" width='88px' height='40px' />
                        </div>
                    </Col>
                    <Col md="4" className="footer-section">
                        <div>
                            <img src={bocongthuong} alt='Bo Cong Thuong' />
                        </div>
                    </Col>
                    <Col md="4" className="footer-section">
                        <h6 className="footer-title">Phương Thức Vận chuyển</h6>
                        <div>
                            <img src={vanchuyen1} alt="Ninja Van" width='100px' height='40px' />
                            <img src={vanchuyen2} alt="Ninja Van" width='100px' height='40px' />
                            <img src={vanchuyen3} alt="AhaMove" width='100px' height='40px' />
                            <img src={vanchuyen4} alt="Giao Hang Tiet Kiem" width='100px' height='40px' />
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='footerText'>
                Copyright &#169; 2024 Chuỗi tạp hóa bán lẻ Việt - Chuyên sỉ và lẻ
            </div>
        </footer >
    );
};

export default Footer;
