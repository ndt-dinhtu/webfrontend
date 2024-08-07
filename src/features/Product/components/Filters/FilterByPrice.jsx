import React, { useState } from 'react';
import { Box, Button, makeStyles, TextField, Typography, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import PropTypes from 'prop-types';

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
    range: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        '& > span': {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
    },
    radioGroup: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    }
}));

FilterByPrice.propTypes = {
    onChange: PropTypes.func,
};

function FilterByPrice({ onChange }) {
    const classes = useStyles();
    const [values, setValues] = useState({
        salePrice_gte: '',
        salePrice_lte: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleRadioChange = (e) => {
        const value = e.target.value;
        const [salePrice_gte, salePrice_lte] = value.split('-').map(Number);
        setValues({ salePrice_gte, salePrice_lte });
    };

    const handleSubmit = () => {
        if (onChange) onChange(values);
        setValues({ salePrice_gte: '', salePrice_lte: '' });
    };

    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2" className={classes.title}>CHỌN KHOẢNG GIÁ</Typography>

            <Box className={classes.range}>
                <TextField
                    label="Từ"
                    name="salePrice_gte"
                    value={values.salePrice_gte}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                />
                <span>-</span>
                <TextField
                    label="Đến"
                    name="salePrice_lte"
                    value={values.salePrice_lte}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                />
            </Box>

            <RadioGroup
                aria-label="price-range"
                name="price-range"
                value={`${values.salePrice_gte}-${values.salePrice_lte}`}
                onChange={handleRadioChange}
                className={classes.radioGroup}
            >
                <FormControlLabel value="0-1000000" control={<Radio />} label="0 - 1 triệu" />
                <FormControlLabel value="1000000-5000000" control={<Radio />} label="1 đến 5 triệu" />
                <FormControlLabel value="5000000-10000000" control={<Radio />} label="5 đến 10 triệu" />
                <FormControlLabel value="10000000-99999999999" control={<Radio />} label="Trên 10 triệu" />
            </RadioGroup>

            <Button variant="outlined" color="primary" size="small" onClick={handleSubmit}>
                Áp dụng
            </Button>
        </Box>
    );
}

export default FilterByPrice;
