const { Targetables } = require("@magento/pwa-buildpack");

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const OrderHistoryPage = targetables.reactComponent(
        '@magento/venia-ui/lib/components/OrderHistoryPage/orderHistoryPage.js'
    );

    OrderHistoryPage.addImport('AccountLayout from "src/components/AccountLayout";')

    OrderHistoryPage.surroundJSX(
        'div className={classes.root}',
        'AccountLayout'
        );
}
