import React from 'react';
import { useIntl } from 'react-intl';
import { useStyle } from '@magento/venia-ui/lib/classify';
import AccountLayout from "../AccountLayout";
import defaultClasses from './returnsPages.module.css';

const ReturnsPage = (props) => {
    const { formatMessage } = useIntl();
    const classes = useStyle(defaultClasses, props.classes);

    const PAGE_TITLE = formatMessage({
        id: 'returnsPage.returnsText',
        defaultMessage: 'Returns'
    });

    return (
        <AccountLayout>
            <div className={classes.root}>
                <h1 className={classes.title}>{PAGE_TITLE}</h1>
            </div>
        </AccountLayout>
    )
}

export default ReturnsPage;
