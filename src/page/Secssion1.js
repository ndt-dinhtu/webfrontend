import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';
import Sec1 from '../assets/secssion1_1.png';
import Sec2 from '../assets/secssion1_2.png';
import Sec3 from '../assets/secssion1_3.png';
import Sec4 from '../assets/secssion1_4.png';
import { Container } from '@material-ui/core';
import ScrollTrigger from 'react-scroll-trigger';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin: 'auto',
        transition: 'transform 0.3s',
        '&:hover': {
            transform: 'scale(1.1)',
        },

    },
    media: {
        height: 140,
    },
    gridContainer: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '50px',
        textAlign: 'center',
    },
}));

const imageList = [
    { id: 1, src: Sec1, begin: '+', end: 100, title: 'Title 1', description: 'Hơn 100 sản phẩm khác nhau' },
    { id: 2, src: Sec2, begin: 'h', end: 48, title: 'Title 2', description: 'Miễn phí đổi trả hàng sau 48h' },
    { id: 3, src: Sec3, begin: '$', end: 25, title: 'Title 3', description: 'Ưu đãi hoàn tiền hơn 500.000VND' },
    { id: 4, src: Sec4, begin: '%', end: 29.99, title: 'Title 4', description: 'Siêu tiết kiệm, giảm giá tới 30%' },
];

export default function Secssion1() {
    const classes = useStyles();
    const [counter, setCounter] = useState(false)

    return (
        <Container>
            <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                <Grid container spacing={4} className={classes.gridContainer}>
                    {imageList.map((image) => (
                        <Grid item xs={6} md={3} key={image.id}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        className={classes.media}
                                        image={image.src}
                                        title={image.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {counter && <CountUp className={classes.title} end={image.end} duration={4} suffix={image.begin} />}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {image.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </ScrollTrigger>
        </Container>
    );
}