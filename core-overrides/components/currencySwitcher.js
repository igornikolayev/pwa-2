const { Targetables } = require("@magento/pwa-buildpack");

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const CurrencySwitcher = targetables.reactComponent(
        '@magento/venia-ui/lib/components/Header/currencySwitcher.js'
    );

    CurrencySwitcher.addImport('currenciesSet from \'/static/currencyNames.json\'')

    CurrencySwitcher.setJSXProps(
        'SwitcherItem', {
            code: '{currenciesSet[`currencyName${code}`]}'
        }
    );

}
