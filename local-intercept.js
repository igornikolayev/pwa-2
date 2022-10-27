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


/* eslint-disable */
function localIntercept(targets) {
    const {
        ExtendLocalIntercept
    } = require('@larsroettig/component-targetables');

    const { Targetables } = require('@magento/pwa-buildpack');
    const targetables = Targetables.using(targets);
    const extendLocalIntercept = new ExtendLocalIntercept(targetables);

    extendLocalIntercept
        .allowCustomTargetables('*.targetables.js', [
            'core-overrides/components',
            'core-overrides/RootComponents',
            'src/components',
            'src/RootComponents'
        ])
        .then(() => console.log('Intercept custom JS done'));

    extendLocalIntercept
        .allowCssOverwrites('*.module.css', [
            'core-overrides/components',
            'core-overrides/RootComponents',
            'src/components',
            'src/RootComponents'
        ])
        .then(() => console.log('Intercept custom CSS done'));
}

module.exports = localIntercept;
