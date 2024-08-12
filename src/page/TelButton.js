import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    TelButton: {
        position: 'fixed',
        right: '20px',
        bottom: '140px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        lineHeight: '36px',
        background: '#0068ff',
        textDecoration: 'none',
        zIndex: '999999',
        color: '#fff',
        fontWeight: 500,
        borderRadius: '30px',
        transition: 'all 0.25s',
        padding:'30px',
        animation: '$ring-anim 2s infinite ease-in-out',
   
        '&::after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: '#0068ff',
            zIndex: -1,
            animation: '$sonar-anim 2s infinite ease-in-out',
        },
        '&:hover': {
            transform: 'scale(1.1)',
            boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
        },
    },
    i: {
        color: 'white',
        fontSize: '30px',
    },
    
    '@keyframes ring-anim': {
        '0%': {
            transform: 'scale(1)',
            opacity: 1,
        },
        '50%': {
            transform: 'scale(1.1)',
            opacity: 0.8,
        },
        '100%': {
            transform: 'scale(1)',
            opacity: 1,
        },
    },
    '@keyframes sonar-anim': {
        '0%': {
            transform: 'scale(0)',
            opacity: 1,
        },
        '50%': {
            transform: 'scale(1.5)',
            opacity: 0.5,
        },
        '100%': {
            transform: 'scale(0)',
            opacity: 0,
        },
    },
}));

const TelButton = () => {
    const classes = useStyles();

    return (
        <a href='tel:+0376330060' className={classes.TelButton} target="_blank" rel="noopener noreferrer" title='Gọi ngay cho chúng tôi'>
            <i className={`fa-solid fa-phone ${classes.i}`}></i>
        </a>
    );
};

export default TelButton;
