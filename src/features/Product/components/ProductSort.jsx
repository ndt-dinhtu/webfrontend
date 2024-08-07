import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Tab, Tabs } from '@material-ui/core';
// import { current } from '@reduxjs/toolkit';

ProductSort.propTypes = {
    currentSort: PropTypes.string.isRequired,
    onchange: PropTypes.func

};
const useStyles = makeStyles((themes) => ({
    root: {
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
    }
}))

function ProductSort({ currentSort, onChange }) {
    const classes = useStyles()
    const handleSortChange = (e, newValue) => {
        if (onChange) onChange(newValue)
    }
    return (
        <Tabs
            value={currentSort}
            onChange={handleSortChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            className={classes.root}
        >
            <Tab label="Giá tăng dần" value='salePrice:ASC'></Tab>
            <Tab label='Giá giảm dần' value='salePrice:DESC'></Tab>
        </Tabs>
    );
}

export default ProductSort;