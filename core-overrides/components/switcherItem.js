const { Targetables } = require("@magento/pwa-buildpack");

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const SwitcherItem = targetables.reactComponent(
        '@magento/venia-ui/lib/components/Header/switcherItem.js'
    );

    SwitcherItem.insertBeforeSource(
        'onClick,',
        'code, '
    );

    SwitcherItem.insertAfterSource(
        '<span className={classes.text}>{children}</span>',
        '{code}'
    );


}
