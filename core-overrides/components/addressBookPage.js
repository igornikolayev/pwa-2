const { Targetables } = require("@magento/pwa-buildpack");

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const AddressBookPage = targetables.reactComponent(
        '@magento/venia-ui/lib/components/AddressBookPage/addressBookPage.js'
    );

    AddressBookPage.addImport('AccountLayout from "src/components/AccountLayout";')

    AddressBookPage.surroundJSX(
        'div className={classes.root}',
        'AccountLayout'
        );
}
