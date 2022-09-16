const { Targetables } = require("@magento/pwa-buildpack");

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const WishlistPage = targetables.reactComponent(
        '@magento/venia-ui/lib/components/WishlistPage/wishlistPage.js'
    );

    WishlistPage.addImport('AccountLayout from "src/components/AccountLayout";')

    WishlistPage.surroundJSX(
        'div className={classes.root}',
        'AccountLayout'
        );
}
