import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './accountNavigation.module.css';
import accountNavigationLinks from "./accountNavigationLinks";

const AccountNavigation = props => {
    const classes = useStyle(defaultClasses, props.classes);
    const location = useLocation();
    const { pathname } = location;

    const links = accountNavigationLinks.map(link => {
        const linkClassName = `${classes.link} ${pathname === link.path ? classes.linkActive : ''}`;

        return (
            <Link to={link.path} className={linkClassName}>
                <FontAwesomeIcon icon={link.icon} />
                <span>{link.name}</span>
            </Link>
        )
    })

    return (
        <div className={classes.root}>
            {links}
        </div>
    );
};

export default AccountNavigation;
