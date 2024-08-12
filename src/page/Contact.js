import { Button, makeStyles, TextField } from '@material-ui/core';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import React, { useState } from 'react';
import { Col, Row, Container } from 'reactstrap';
import emailjs from 'emailjs-com'
// import emailjs from '@emailjs/browser';
const useStyles = makeStyles((theme) => ({
    i: {
        width: '20px',
        display: 'inline-block',
        marginRight: theme.spacing(1),
        marginBottom: "15px",
        marginTop: "15px",
    },
    textBold: {
        fontWeight: 'bold'
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
    textField: {
        margin: theme.spacing(1),
        width: '100%',
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red',
            },
            '&:hover fieldset': {
                borderColor: 'red',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'red',
            },
        },
    },
    button: {
        margin: theme.spacing(2),
        backgroundColor: 'red',
        color: 'white',
        '&:hover': {
            backgroundColor: 'darkred',
        },
    },

    header: {
        paddingTop: "230px"
    },
    textCenter: {
        padding: '30px',
        textAlign: 'center'
    }

}));



export default function Contact() {
    const classes = useStyles()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [content, setContent] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            name: name,
            email: email,
            phone: phone,
            content: content,
        }

        emailjs
            .send('service_qysjphj', 'template_xy0g58a', templateParams, 'mahQRLPo4LB7SOT01')
            .then((res) => {
                console.log(res)
                alert('Thanh cong')
            })
            .catch((error) => {
                alert('Đã xảy ra lỗi phát sinh')
            })
    };
    return (
        <>
            <Header />
            <Container className={classes.header}>
                <Row>
                    <Col xs={12} md={6}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d400.0735742653192!2d106.6985161433766!3d10.78221681596161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f363fbdc9d7%3A0xdefa64c50a0c03d5!2sV%C4%82N%20PH%C3%92NG%20IBP%20VIETNAM!5e0!3m2!1sen!2s!4v1722869783504!5m2!1sen!2s"
                            width="100%"
                            height="450"
                            style={{ border: '2px solid black' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title='Webtaphoa'
                        />
                    </Col>
                    <Col xs={12} md={6} className='my-5'>
                        <p>Cảm ơn quý khách đã lựa chọn Webtaphoa.vn, hy vọng quý khách
                            hài lòng với trải nghiệm mua sắm và các sản phẩm đã lựa chọn.
                            Tại đây, chúng tôi sẽ giải đáp các thắc mắc mà quý khách đang gặp phải.
                        </p>
                        <div><span className={classes.i}><i className="fa-solid fa-location-dot"></i></span><span className={classes.textBold}>VĂN PHÒNG IBP VIETNAM
                            Y5 Office, 135 Hai Bà Trưng, P, Quận 1, Hồ Chí Minh</span></div>
                        <div><span className={classes.i}><i className="fa-solid fa-envelope"></i></span> <span className={classes.textBold}>ndt.290303060703@gmail.com</span></div>
                        <div><span className={classes.i}><i className="fa-solid fa-mobile"></i></span> <span className={classes.textBold}>0373633006</span></div>
                        <div><span className={classes.i}><i className="fa-regular fa-clock"></i></span> <span className={classes.textBold}>Thứ 2 đến Thứ 6 từ 8h đến 21h,Thứ 7 và Chủ nhật từ 8h00 đến 17h00</span></div>
                    </Col>
                </Row>
                <h1 className={classes.textCenter}>LẤY Ý KIẾN KHÁCH HÀNG</h1>
                <div>
                    {/* <form className={classes.formContainer} ref={form} onSubmit={sendEmail}  > */}
                    <form className={classes.formContainer}  >
                        <TextField
                            id="filled-basic"
                            label="Tên của bạn"
                            variant="filled"
                            name="name"
                            className={classes.textField}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            id="filled-basic"
                            label="Email của bạn"
                            variant="filled"
                            name="email"
                            className={classes.textField}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            id="filled-basic"
                            label="Số điện thoại của bạn"
                            variant="filled"
                            name="phone"
                            className={classes.textField}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <TextField
                            id="filled-basic"
                            label="Nội dung"
                            variant="filled"
                            name="content"
                            multiline
                            rows={4}
                            className={classes.textField}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <Button type="submit" variant="contained" className={classes.button} onClick={sendEmail}>
                            GỬI CHO CHÚNG TÔI
                        </Button>
                    </form>
                </div>
            </Container>
            <Footer />
        </>
    );
}