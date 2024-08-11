import { makeStyles } from '@material-ui/core';
import React from 'react';
import logo1 from '../assets/logo/logo1.png';
import logo2 from '../assets/logo/logo2.png';
import logo3 from '../assets/logo/logo3.png';
import logo4 from '../assets/logo/logo4.png';
import logo5 from '../assets/logo/logo5.png';
import logo6 from '../assets/logo/logo6.png';
import logo7 from '../assets/logo/logo7.png';
import logo8 from '../assets/logo/logo8.png';
import { Container } from 'reactstrap';

const useStyles = makeStyles({
    root: {
        border: '1px solid blue',
        padding: '15px',
        borderRadius: '15px',
        marginTop: '50px',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    },
    slider: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        marginTop: "30px",
        marginBottom: "40px"
    },
    slideTrack: {
        display: 'flex',
        width: 'calc(200px * 16)',
        animation: '$scroll 20s linear infinite',
    },
    slide: {
        minWidth: 200,
        padding: 10,
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgWrapper: {
        width: 180,
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        paddingTop: '20px',
        fontSize: '2.2rem',
        textAlign: 'center',
        marginBottom: '20px',
    },
    img: {
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'contain',
    },
    '@keyframes scroll': {
        '0%': {
            transform: 'translateX(0)',
        },
        '100%': {
            transform: 'translateX(-50%)'
        },
    },
    '@media (max-width: 600px)': {
        slide: {
            minWidth: 100,
        },
        slideTrack: {
            width: 'calc(100px * 16)',
        },
        imgWrapper: {
            width: 80,
            height: 50,
        },
    },
});

const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8
];

const Secssion2 = () => {
    const classes = useStyles();

    return (
        <Container>
            <div className={classes.root}>
                <div className={classes.title}>Các doanh nghiệp đã hợp tác và liên kết</div>
                <div className={classes.slider}>

                    <div className={classes.slideTrack}>
                        {logos.map((logo, index) => (
                            <div className={classes.slide} key={index}>
                                <div className={classes.imgWrapper}>
                                    <img src={logo} alt={`Logo ${index + 1}`} className={classes.img} />
                                </div>
                            </div>
                        ))}
                        {logos.map((logo, index) => (
                            <div className={classes.slide} key={index + logos.length}>
                                <div className={classes.imgWrapper}>
                                    <img src={logo} alt={`Logo ${index + 1}`} className={classes.img} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Secssion2;
