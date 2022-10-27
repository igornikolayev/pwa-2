const interceptComponent = CurrencySwitcher => {
    CurrencySwitcher.addImport('currenciesSet from \'/static/currencyNames.json\'')

    CurrencySwitcher.setJSXProps(
        'SwitcherItem', {
            code: '{currenciesSet[`currencyName${code}`]}'
        }
    );
};

exports.interceptComponent = interceptComponent;
