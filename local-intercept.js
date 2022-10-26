/**
 * Custom interceptors for the project.
 *
 * This project has a section in its package.json:
 *    "pwa-studio": {
 *        "targets": {
 *            "intercept": "./local-intercept.js"
 *        }
 *    }
 *
 * This instructs Buildpack to invoke this file during the intercept phase,
 * as the very last intercept to run.
 *
 * A project can intercept targets from any of its dependencies. In a project
 * with many customizations, this function would tap those targets and add
 * or modify functionality from its dependencies.
 */

function localIntercept(targets) {
    const Header = require('./core-overrides/components/header');
    Header(targets);

    const CartTrigger = require('./core-overrides/components/cartTrigger');
    CartTrigger(targets);

    const AccountChip = require('./core-overrides/components/accountChip');
    AccountChip(targets);

    const CurrencySwitcher = require('./core-overrides/components/currencySwitcher');
    CurrencySwitcher(targets);

    const SearchTrigger = require('./core-overrides/components/searchTrigger');
    SearchTrigger(targets);

    const SwitcherItem = require('./core-overrides/components/switcherItem');
    SwitcherItem(targets);
}

module.exports = localIntercept;
