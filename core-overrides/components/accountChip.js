const { Targetables } = require("@magento/pwa-buildpack");

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const AccountChip = targetables.reactComponent(
        '@magento/venia-ui/lib/components/AccountChip/accountChip.js'
    );
    AccountChip.replaceJSX(
        'Icon src={AccountIcon}',
        'div'
    );

    AccountChip.appendJSX(
        'span className={classes.root}',
        'Icon src={AccountIcon}'
    );


}
