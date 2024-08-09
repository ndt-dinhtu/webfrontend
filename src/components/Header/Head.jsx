import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    header: {
        position: 'fixed',
        top: '-3px',
        width: '100%',
        zIndex: 1000,
        backgroundColor: '#0f3460',
        color: '#fff',
        borderBottom: '1px solid #ccc',
        padding: '1px 0px',

    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '60%',
        margin: '0 auto',
        boxSizing: 'border-box',
    },
    left: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    right: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    icon: {
        margin: '0 5px',
        fontSize: '12px',
    },
    label: {
        margin: '0 5px',
        fontSize: '12px',
    },
    // Responsive Styles
    '@media (max-width: 768px)': {
        container: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '80%',
        },
        left: {
            justifyContent: 'flex-start',
            marginBottom: '5px',
        },
        right: {
            justifyContent: 'flex-start',
        },
    },
    '@media (max-width: 480px)': {
        container: {
            width: '90%',
        },
        icon: {
            fontSize: '10px',
        },
        label: {
            fontSize: '10px',
            margin: '0 3px',
        },
    },
}));

const Head = () => {
    const classes = useStyles();

    return (
        <section className={classes.header}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <i className={`fa fa-phone ${classes.icon}`}></i>
                    <label className={classes.label}>+84 379 3300 60</label>
                    <i className={`fa fa-envelope ${classes.icon}`}></i>
                    <label className={classes.label}>ndt.290303060703@gmail.com</label>
                </div>
                <div className={classes.right}>
                    <label className={classes.label}>FAQ's</label>
                    <label className={classes.label}>Help?</label>
                    <span role="img" aria-label="transgender flag" className={classes.label}>🏳️‍⚧️</span>
                    <label className={classes.label}>EN</label>
                    <span role="img" aria-label="transgender flag" className={classes.label}>🏳️‍⚧️</span>
                    <label className={classes.label}>USD</label>
                </div>
            </div>
        </section>
    );
}

export default Head;
