import React from 'react';
import AccountNavigation from "../AccountNavigation/accountNavigation";
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './accountLayout.module.css';

const AccountLayout = (props) => {
    const {children} = props
    const classes = useStyle(defaultClasses, props.classes);

    return (
        <div className={classes.root}>
            <AccountNavigation/>
            <div className={classes.child}>
                {children}
            </div>
        </div>
    )
}

export default AccountLayout;
