const { Targetables } = require("@magento/pwa-buildpack");

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const AccountInformationPage = targetables.reactComponent(
        '@magento/venia-ui/lib/components/AccountInformationPage/accountInformationPage.js'
    );

    AccountInformationPage.addImport('AccountLayout from "src/components/AccountLayout";')

    AccountInformationPage.surroundJSX(
        'div className={classes.root}',
        'AccountLayout'
        );
}
