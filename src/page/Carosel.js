import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Container,
} from 'reactstrap';
import "./Carosel.scss";
import carousel1 from '../assets/carosel_1.png';
import carousel2 from '../assets/carosel_2.png';
import carousel3 from '../assets/carosel_3.png';
import carousel4 from '../assets/carosel_4.png';
import carousel5 from '../assets/carosel_5.png';
import carousel6 from '../assets/carosel_6.png';
import carousel7 from '../assets/carosel_7.png'; // Updated to use a unique image for demonstration
import logoBackGround from '../assets/logoBackGround.jpg';

const items = [
    { src: carousel1 },
    { src: carousel2 },
    { src: carousel3 },
    { src: carousel4 },
    { src: carousel5 },
    { src: carousel6 },
    { src: carousel7 },
];

function CarouselHome(args) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

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

    const slides = items.map((item, index) => (
        <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={index}
        >
            <img src={item.src} alt={`Slide ${index}`} />
            <CarouselCaption
                captionText={''}
                captionHeader={''}
            />
        </CarouselItem>
    ));

    return (
        <div className='carosel'>
            <img className='imgBackGround' src={logoBackGround} alt='background' />
            <div className='carousel'>
                <Container>
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                        {...args}
                        keyboard
                        interval={3000}
                    >
                        <CarouselIndicators
                            items={items}
                            activeIndex={activeIndex}
                            onClickHandler={goToIndex}
                        />
                        {slides}
                        <CarouselControl
                            direction="prev"
                            directionText="Previous"
                            onClickHandler={previous}
                        />
                        <CarouselControl
                            direction="next"
                            directionText="Next"
                            onClickHandler={next}
                        />
                    </Carousel>
                </Container>
            </div>
        </div>
    );
}

export default CarouselHome;
