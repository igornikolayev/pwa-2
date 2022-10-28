import React from 'react';
import sprite from './sprite.svg';
import { number, shape, string } from 'prop-types';
import defaultClasses from '@magento/venia-ui/lib/components/Icon/icon.module.css';
import { useStyle } from '@magento/venia-ui/lib/classify';

const Icons = (props) => {
    const { className, fill, height, id, width } = props;
    const classes = useStyle(defaultClasses, props.classes);

    return (
        <span className={classes.root}>
            <svg
                className={className}
                fill={fill}
                height={height}
                width={width}
            >
                <use href={`${sprite}#${id}`} />
            </svg>
        </span>
    );
};

Icons.defaultProps = {
    fill: 'none'
};

Icons.propTypes = {
    className: string,
    classes: shape({
        root: string
    }),
    fill: string,
    height: number,
    id: string,
    width: number
};

export default Icons;
