import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    header: {
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: '#0f3460',
        color: '#fff',
        borderBottom: '1px solid #ccc',
        padding: '10px 0',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '0 20px',
        boxSizing: 'border-box',
    },
    left: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap', // Cho phép phần tử cuộn xuống nếu cần
    },
    right: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap', // Cho phép phần tử cuộn xuống nếu cần
    },
    icon: {
        margin: '0 10px',
    },
    label: {
        margin: '0 10px',
    },
    // Responsive Styles
    '@media (max-width: 768px)': {
        container: {
            flexDirection: 'column', // Đặt các phần tử thành cột trên màn hình nhỏ
            alignItems: 'flex-start', // Căn các phần tử sang bên trái
        },
        left: {
            justifyContent: 'flex-start', // Đưa các phần tử bên trái ra bên trái trên màn hình nhỏ
            marginBottom: '10px', // Thêm khoảng cách giữa các phần tử
        },
        right: {
            justifyContent: 'flex-start', // Đưa các phần tử bên phải ra bên trái trên màn hình nhỏ
        },
    },
    '@media (max-width: 480px)': {
        icon: {
            fontSize: '14px', // Giảm kích thước biểu tượng trên màn hình rất nhỏ
        },
        label: {
            fontSize: '14px', // Giảm kích thước chữ trên màn hình rất nhỏ
            margin: '0 5px', // Giảm khoảng cách giữa các nhãn
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
                    <label className={classes.label}> +84 379 3300 60</label>
                    <i className={`fa fa-envelope ${classes.icon}`}></i>
                    <label className={classes.label}> ndt.290303060703@gmail.com</label>
                </div>
                <div className={classes.right}>
                    <label className={classes.label}>Theme FAQ"s</label>
                    <label className={classes.label}>Need Help?</label>
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
