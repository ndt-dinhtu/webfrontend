import { makeStyles } from '@material-ui/core';
import { getNews } from 'api/newsAPI';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '60px',
        marginTop: '140px'
    },
    content: {
        '& img': {
            display: 'block',
            margin: '0 auto',
            maxWidth: '50%',
            height: 'auto'
        }
    },
    news: {
        border: '1px solid black',
        borderRadius: '15px',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        marginBottom: '30px',
    }
}));

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const data = await getNews();
                setNews(data.data);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />

            {news.map((news) => (
                <Container key={news.id} className={classes.news}>
                    <h1>{news.title}</h1>
                    <span> <h6>Cập nhật ngày: {news.time} - {news.datepost}</h6></span>
                    <p>Nguồn: <b>{news.sourcenews}</b></p>
                    <p>
                        <div className={classes.content} dangerouslySetInnerHTML={{ __html: news.maincontent }} />
                    </p>
                </Container>
            ))}
            <Footer />

        </div>
    );
};

export default News;
