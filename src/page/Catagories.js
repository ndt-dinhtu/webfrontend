import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselIndicators,
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    Button
} from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import catagorie1 from '../assets/catogories/dienthoai.png';
import catagorie2 from '../assets/catogories/khautrang.jpg';
import catagorie3 from '../assets/catogories/laptop.jpg';
import catagorie4 from '../assets/catogories/matna.jpg';
import catagorie5 from '../assets/catogories/ocung.jpg';
import catagorie6 from '../assets/catogories/thoitrang.jpg';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        border: '1px solid blue',
        padding: '15px',
        borderRadius: '15px',
        marginTop: '50px',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    },
    card: {
        width: '100%',
        margin: theme.spacing(2),
    },
    imgContainer: {
        width: '100%',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    img: {
        maxWidth: '100%',
        maxHeight: '100%',
    },
    link: {
        textDecoration: 'none',
        color: 'white',
    },
    carouselItem: {
        display: 'flex',
        justifyContent: 'center',
    },
    control: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'black',
        color: 'white',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 2,
    },
    prevControl: {
        left: '10px',
    },
    nextControl: {
        right: '10px',
    },
    arrow: {
        fontSize: '20px',
    },
    title: {
        textAlign: 'center',
        fontSize: '2rem'
    },
    titleContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
    },
}));

const items = [
    { id: 1, img: catagorie6, title: 'Thời trang' },
    { id: 2, img: catagorie2, title: 'Khẩu trang' },
    { id: 3, img: catagorie4, title: 'Lảm đẹp' },
    { id: 4, img: catagorie3, title: 'LapTop' },
    { id: 5, img: catagorie5, title: 'Ổ cứng' },
    { id: 6, img: catagorie1, title: 'Điện thoại' },
];

const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
};

export default function Example(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const classes = useStyles();

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = chunkArray(items, 2).map((group, index) => {
        return (
            <CarouselItem
                tag="div"
                key={index}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <Row className={classes.carouselItem}>
                    {group.map((item) => (

                        <Col key={item.id} sm="6">

                            <Card className={classes.card}>
                                <div className={classes.imgContainer}>
                                    <img alt={item.title} src={item.img} className={classes.img} />
                                </div>
                                <CardBody>
                                    <CardTitle className={classes.title} tag="h5">{item.title}</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </CarouselItem>
        );
    });

    return (
        <Container>
            <div className={classes.root}>
                <Box className={classes.titleContainer}>
                    <Typography variant="h4" >
                        Danh mục sản phẩm
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        href="/products"
                        className={classes.button}
                    >
                        Xem tất cả
                    </Button>
                </Box>
                <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                    <CarouselIndicators items={slides} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                    <div className={`${classes.control} ${classes.prevControl}`} onClick={previous}>
                        <span className={classes.arrow}>&#8249;</span>
                    </div>
                    <div className={`${classes.control} ${classes.nextControl}`} onClick={next}>
                        <span className={classes.arrow}>&#8250;</span>
                    </div>
                </Carousel>
            </div>
        </Container>
    );
}
