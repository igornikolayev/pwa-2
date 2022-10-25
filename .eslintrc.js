const path = require('path');

const config = {
    parser: 'babel-eslint',
    extends: ['@magento'],
    overrides: [
        {
            files: ['i18n/*.json'],
            plugins: [],
            extends: ['plugin:i18n-json/recommended'],
            rules: {
                'i18n-json/valid-message-syntax': 1,
                'i18n-json/valid-json': 2,
                'i18n-json/sorted-keys': 1,
                'i18n-json/identical-keys': [
                    2,
                    {
                        filePath: path.resolve('./i18n/en_US.json')
                    }
                ]
            }
        }
    ],
    rules: {
        'no-prototype-builtins': 'off',
        'no-undef': 'off',
        'no-useless-escape': 'off',
        'object-curly-spacing': ['error', 'always']
    }
};

module.exports = config;
