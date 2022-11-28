import React from "react";
import classes from './AnimatedBackground.module.css';

const AnimatedBackground = props => {
    return (
        <div className={classes.box}>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
};

export default AnimatedBackground;