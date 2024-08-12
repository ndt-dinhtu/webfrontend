import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import './Footer.scss';
import vanchuyen1 from 'assets/phuongthucvanchuyen_1.png'
import vanchuyen2 from 'assets/phuongthucvanchuyen_2.png'
import vanchuyen3 from 'assets/phuongthucvanchuyen_3.png'
import vanchuyen4 from 'assets/phuongthucvanchuyen_4.png'
import thanhtoan1 from 'assets/phuongthucthanhtoan_1.png'
import thanhtoan2 from 'assets/phuongthucthanhtoan_2.png'
import thanhtoan3 from 'assets/phuongthucthanhtoan_3.png'
import thanhtoan4 from 'assets/phuongthucthanhtoan_4.png'
import thanhtoan5 from 'assets/phuongthucthanhtoan_5.png'
import bocongthuong from 'assets/bocongthuong.png'
import logo from 'assets/logo.png'
import footer1 from 'assets/footer1.png'
import footer2 from 'assets/footer2.png'


import emailjs from 'emailjs-com'

const Footer = () => {
    const [email, setEmail] = useState('')
    
    return (
        <footer className="footer bg-light text-dark pt-5 pb-4">
            <Container>
                <Row>
                    <Col md="4" className="footer-section">
                        <div className="d-flex justify-content-center">
                            <img src={logo} alt="Webtaphoa" width='50%' className="img-fluid" />
                        </div>

                        <p>
                            <i className="fa-solid fa-location-dot m-2"></i>
                            <b>CÔNG TY TRÁCH NHIỆM HỮU HẠN TẠP HÓA VIỆT</b>
                        </p>
                        <p>
                            <b>- Mã số doanh nghiệp:</b>
                            0315923957 do Sở Kế hoạch & Đầu tư TP Hồ Chí Minh cấp lần đầu
                            ngày 26/09/2019
                        </p>
                        <p>
                            <b>   - Chịu Trách Nhiệm Quản Lý Nội Dung:</b> Nguyễn Quang Khải - Điện
                            thoại liên hệ: 0919221843
                        </p>
                        <p><b>- Địa Chỉ:</b> 72 Hưng Phú, Phường 8, Quận 8, TP. Hồ Chí Minh</p>
                        <p><i className="fa-solid fa-phone m-2"></i><b>0376330060</b></p>
                        <p><i className="fa-solid fa-envelope m-2"></i><b>ndt.29030306070@gmail.com</b></p>
                    </Col>
                    <Col md="2" className="footer-section">
                        <h5 className="footer-title">Về phía chúng tôi</h5>
                        <ul className="list-unstyled">
                            <li><a href="/about" target="_blank" rel="noopener noreferrer">Giới thiệu</a></li>
                            <li><a href="/blog" target="_blank" rel="noopener noreferrer">Blog</a></li>
                            <li><a href="/tuyendung" target="_blank" rel="noopener noreferrer">Tuyển dụng</a></li>
                            <li><a href="/chinhsach" target="_blank" rel="noopener noreferrer">Chính sách bảo mật thanh toán</a></li>
                            <li><a href="/chinhsach" target="_blank" rel="noopener noreferrer">Chính sách bảo mật thông tin cá nhân</a></li>
                            <li><a href="/chinhsach" target="_blank" rel="noopener noreferrer">Chính sách giải quyết khiếu nại</a></li>
                            <li><a href="/dieukhoan" target="_blank" rel="noopener noreferrer">Điều khoản sử dụng</a></li>
                            <li><a href="/banhang" target="_blank" rel="noopener noreferrer">Bán hàng doanh nghiệp</a></li>
                            <li><a href="/dieukien" target="_blank" rel="noopener noreferrer">Điều kiện vận chuyển</a></li>
                        </ul>
                    </Col>
                    <Col md="2" className="footer-section">
                        <h5 className="footer-title">Hỗ trợ khách hàng</h5>
                        <ul className="list-unstyled">
                            <li><a href="/QA" target="_blank" rel="noopener noreferrer">Các câu hỏi thường gặp</a></li>
                            <li><a href="/support" target="_blank" rel="noopener noreferrer">Gửi yêu cầu hỗ trợ</a></li>
                            <li><a href="/huongdandathang" target="_blank" rel="noopener noreferrer">Hướng dẫn đặt hàng</a></li>
                            <li><a href="/phuongthucvanchuyen" target="_blank" rel="noopener noreferrer">Phương thức vận chuyển</a></li>
                            <li><a href="/chinhsachdoitra" target="_blank" rel="noopener noreferrer">Chính sách đổi trả</a></li>
                            <li><a href="/chinhsachhangnhapkhau" target="_blank" rel="noopener noreferrer">Chính sách hàng nhập khẩu</a></li>
                            <li><a href="/hotrokhachhang" target="_blank" rel="noopener noreferrer">Hỗ trợ khách hàng: hotro@gmail.com</a></li>
                            <li><a href="/loibaomat" target="_blank" rel="noopener noreferrer">Lỗi bảo mật</a></li>
                        </ul>
                    </Col>
                    <Col md="4" className="footer-section">
                        <h5 className="footer-title">Đăng Ký Nhận Tin Khuyến Mãi</h5>
                        <Form >
                            <FormGroup className="newsletter-form">
                                <Input
                                    type="email"
                                    name="email"
                                    id="newsletterEmail"
                                    placeholder="Nhập email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Button type="submit" color="primary" className='my-1' onClick={(e) => {
                                    e.preventDefault()
                                    const templateParams = {
                                        yourEmail : email
                                    }
                                    emailjs.send('service_qysjphj', 'template_1bmdxcj', templateParams, 'mahQRLPo4LB7SOT01')
                                        .then((res) => {
                                            console.log(res)
                                            alert('Thanh cong')
                                        })
                                        .catch((error) => {
                                            alert('Đã xảy ra lỗi phát sinh')
                                        })
                                }}>Đăng Ký</Button>
                            </FormGroup>
                        </Form>
                        <div className="social mt-3">
                            <a href="https://www.facebook.com/" target='_blank' rel="noopener noreferrer" className="social-icon"><i className="fab fa-facebook-f" style={{ color: '#3B5998' }}></i></a>
                            <a href="https://www.instagram.com/" target='_blank' rel="noopener noreferrer" className="social-icon"><i className="fab fa-instagram" style={{ color: '#8A3AB9' }}></i></a>
                            <a href="https://www.twitter.com/" target='_blank' rel="noopener noreferrer" className="social-icon"><i className="fab fa-twitter" style={{ color: '#1DA1F2' }}></i></a>
                            <a href="https://www.youtube.com/" target='_blank' rel="noopener noreferrer" className="social-icon"><i className="fab fa-youtube" style={{ color: '#EA4335' }}></i></a>
                            <a href="https://www.amazon.com/" target='_blank' rel="noopener noreferrer" className="social-icon"><i className="fab fa-amazon" style={{ color: '#FF9900' }}></i></a>
                            <a href="https://www.apple.com/" target='_blank' rel="noopener noreferrer" className="social-icon"><i className="fab fa-apple" style={{ color: '#A6B1B7' }}></i></a>
                        </div>
                        <div className='download'>
                            <p className='my-4'>Tải ứng dụng trên điện thoại</p>
                            <a href='https://www.apple.com/app-store/' target='_blank' rel='noopener noreferrer '> <img src={footer1} alt='' /></a>

                            <a href='https://play.google.com/store/games?hl=vi-VN' target='_blank' rel='noopener noreferrer '>   <img src={footer2} alt='' /></a>
                        </div>
                        <div className="mt-3">
                            <iframe
                                width="100%"
                                src="https://www.youtube.com/embed/pw8V13AIQVI"
                                title="Mẫu video giới thiệu Doanh nghiệp (DN 29)"
                                frameBorder="0" allow="accelerometer; autoplay;
                             clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin">
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
                <p className='footerText__a'>
                    <a href='https://tiki.vn/' target='_blank' rel='noopener noreferrer '><span>Tiki</span></a>
                    <a href='https://www.samsung.com/vn/' target='_blank' rel='noopener noreferrer '><span>Shoppe</span></a>                   <a href='' target='_blank' rel='noopener noreferrer '>  <span>Lazada</span></a>
                    <a href='https://tiki.vn/' target='_blank' rel='noopener noreferrer '><span>SamSung</span></a>
                    <a href='https://www.apple.com/' target='_blank' rel='noopener noreferrer '><span>Apple</span></a>
                    <a href='https://www.amazon.com' target='_blank' rel='noopener noreferrer '><span>Amazon</span></a>
                    <a href='https://mistore.com.vn/#hello' target='_blank' rel='noopener noreferrer '><span>Redmi</span></a>
                    <a href='https://www.nokia.com/' target='_blank' rel='noopener noreferrer '><span>Nokia</span></a>
                    <a href='https://www.microsoft.com/vi-vn/' target='_blank' rel='noopener noreferrer '><span>Micarosft</span></a>
                    <a href='https://tiki.vn/' target='_blank' rel='noopener noreferrer '><span>Taobao</span></a>

                </p>
                Copyright &#169; 2024 Chuỗi tạp hóa bán lẻ Việt - Chuyên sỉ và lẻ
            </div>
        </footer >
    );
};

export default Footer;
