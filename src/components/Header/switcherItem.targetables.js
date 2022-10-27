
const interceptComponent = SwitcherItem => {
    SwitcherItem.insertBeforeSource(
        'onClick,',
        'code, '
    );

    SwitcherItem.insertAfterSource(
        '<span className={classes.text}>{children}</span>',
        '{code}'
    );
};

exports.interceptComponent = interceptComponent;
