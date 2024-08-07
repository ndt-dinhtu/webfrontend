import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, makeStyles } from '@material-ui/core';
import categoryApi from 'api/categoryApi';
import { Link } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        border: '1px solid blue',
        borderRadius: '10px',
        marginBottom: '10px'
    },
    title: {
        fontWeight: 'bold',
        color: 'blue',
        fontSize: '1.1rem'
    },

    menu: {
        padding: 0,
        margin: 0,
        listStyleType: 'none',

        '& > li': {
            marginTop: theme.spacing(1),
            marginLeft: '15px',
            transition: 'all .25s',

            '&:hover': {
                color: 'blue',
                cursor: 'pointer',
                transform: 'scale(1.1)'
            },
        },
    },
}));

FilterByCategory.propTypes = {
    onChange: PropTypes.func,
};

function FilterByCategory({ onChange }) {
    const [categoryList, setCategoryList] = useState([]);
    const classes = useStyles();
    useEffect(() => {
        (async () => {
            try {
                const list = await categoryApi.getAll();
                setCategoryList(
                    list.map((x) => ({
                        id: x.id,
                        name: x.name,
                    }))
                );
            } catch (error) {
                console.log('Failed to fetch category list', error);
            }
        })();
    }, []);

    const handleCategoryClick = (category) => {
        if (onChange) {
            onChange(category.id);
        }
    };


    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2" className={classes.title}>DANH MỤC SẢN PHẨM</Typography>

            <ul className={classes.menu}>
                <li><Link to='/products' >Tất cả sản phẩm</Link></li>
                {categoryList.map((category) => (
                    <li key={category.id} onClick={() => handleCategoryClick(category)}>
                        <Typography variant="body2">{category.name}</Typography>
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterByCategory;