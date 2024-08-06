import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@material-ui/core';
// import { current } from '@reduxjs/toolkit';

ProductSort.propTypes = {
    currentSort: PropTypes.string.isRequired,
    onchange: PropTypes.func

};

function ProductSort({ currentSort, onChange }) {

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

        >
            <Tab label="Giá thấp tới cao" value='salePrice:ASC'></Tab>
            <Tab label='Giá cao xuống thấp' value='salePrice:DESC'></Tab>
        </Tabs>
    );
}

export default ProductSort;