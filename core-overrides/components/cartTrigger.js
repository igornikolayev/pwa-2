const { Targetables } = require("@magento/pwa-buildpack");

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const CartTrigger = targetables.reactComponent(
        '@magento/venia-ui/lib/components/Header/cartTrigger.js'
    );

    CartTrigger.spliceSource({
        after: 'import { Shopping',
        remove: 3,
        insert: 'Cart'
    });


}
