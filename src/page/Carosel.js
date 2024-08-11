import React, { useState, useRef } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Container
} from 'reactstrap';
import hero_1 from '../assets/hero-1.png';
import hero_2 from '../assets/hero-2.png';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        margin: '100px 0',
        position: 'relative',
    },
    carousel: {
        width: '100%',
    },
    control: {
        '&:hover, &:focus': {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: '20px',
        transition: 'background-color 0.3s ease',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
    },
    prev: {
        left: '15px',
    },
    next: {
        right: '15px',
    },
    buttonContainer: {
        position: 'absolute',
        zIndex: '0',
        left: '20%',
        top: '60%',
        transform: 'translateY(-50%)',
    },
    button: {
        padding: '12px 24px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        animation: '$pulse 2s infinite', // Thêm animation
        '&:hover': {
            backgroundColor: '#0056b3',
            boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)',
        },
        '&:active': {
            backgroundColor: '#004494',
            boxShadow: '0 3px 5px rgba(0, 0, 0, 0.1)',
        },
    },
    introductionContainer: {
        position: 'absolute',
        zIndex: '1',
        left: '20%',
        top: '50%',
        transform: 'translateY(-50%)',
        maxWidth: '80%',
        textAlign: 'center',
        color: '#000',
    },
    introduction: {
        margin: '10px 0',
        fontSize: '16px',
    },
    '@keyframes pulse': {
        '0%': {
            transform: 'scale(1)',
        },
        '50%': {
            transform: 'scale(1.1)',
        },
        '100%': {
            transform: 'scale(1)',
        },
    },
}));

const items = [
    {
        src: hero_1,
        altText: 'Slide 1',
        caption: 'Caption for Slide 1'
    },
    {
        src: hero_2,
        altText: 'Slide 2',
        caption: 'Caption for Slide 2'
    }
];

export default function CarouselHome() {
    const classes = useStyles();
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const imgRef = useRef(null);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const scrollDown = () => {
        if (imgRef.current) {
            const imgHeight = imgRef.current.clientHeight;
            window.scrollBy({ top: imgHeight, behavior: 'smooth' });
        }
    };

    const slides = items.map((item, index) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img
                    src={item.src}
                    alt={item.altText}
                    className={classes.carousel}
                    ref={index === activeIndex ? imgRef : null}
                />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                <div className={classes.introductionContainer}>
                    <div className={classes.introduction}>
                        Chào mừng bạn đã ghé thăm
                    </div>
                    <div className={classes.introduction}>
                        Hãy bắt đầu để mua sắm
                    </div>
                </div>
                <div className={classes.buttonContainer}>
                    <button className={classes.button} onClick={scrollDown}>
                        Show now
                    </button>
                </div>
            </CarouselItem>
        );
    });

    return (
        <div className={classes.root}>
            <Container>
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                    <CarouselControl
                        direction="prev"
                        directionText="Previous"
                        onClickHandler={previous}
                        className={`${classes.control} ${classes.prev}`}
                    />
                    <CarouselControl
                        direction="next"
                        directionText="Next"
                        onClickHandler={next}
                        className={`${classes.control} ${classes.next}`}
                    />
                </Carousel>
            </Container>
        </div>
    );
}
