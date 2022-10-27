const interceptComponent = AccountChip => {
    AccountChip.replaceJSX(
        'Icon src={AccountIcon}',
        'div'
    );

    AccountChip.appendJSX(
        'span className={classes.root}',
        'Icon src={AccountIcon}'
    );
};

exports.interceptComponent = interceptComponent;
