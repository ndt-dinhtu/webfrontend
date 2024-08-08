import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Zoom } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles((theme) => ({
    scrollToTop: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        zIndex: 1000,
        backgroundColor: '#007bff',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#0056b3',
        },
    },
}));

const ScrollToTop = () => {
    const classes = useStyles();
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <Zoom in={visible}>
            <IconButton
                className={classes.scrollToTop}
                onClick={scrollToTop}
                aria-label="scroll to top"
            >
                <KeyboardArrowUpIcon />
            </IconButton>
        </Zoom>
    );
};

export default ScrollToTop;
