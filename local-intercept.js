/* eslint-disable */
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
    const routes = require('./src/targets/routes.targatables');
    routes(targets);

    const AddressBookPage = require('./core-overrides/components/addressBookPage');
    AddressBookPage(targets);

    const OrderHistoryPage = require('./core-overrides/components/orderHistoryPage');
    OrderHistoryPage(targets);

    const AccountInformationPage = require('./core-overrides/components/accountInformationPage');
    AccountInformationPage(targets);

    const WishlistPage = require('./core-overrides/components/wishlistPage');
    WishlistPage(targets);

    const AccountTrigger = require('./core-overrides/components/accountTrigger');
    AccountTrigger(targets);

    const CartTrigger = require('./core-overrides/components/cartTrigger');
    CartTrigger(targets);
}

module.exports = localIntercept;
