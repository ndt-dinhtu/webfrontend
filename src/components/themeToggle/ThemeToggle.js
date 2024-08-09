// src/components/ThemeToggle.js
import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import { Brightness7, Brightness4 } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './themeSlice';


const ThemeToggle = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    const handleThemeToggle = () => {
        dispatch(toggleTheme());
    };

    return (
        <Tooltip title={isDarkMode ? 'chuyển chế độ sáng' : ' Chuyển chế độ tối'}>
            <IconButton color="inherit" onClick={handleThemeToggle}>
                {isDarkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
        </Tooltip>
    );
};

export default ThemeToggle;
