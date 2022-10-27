const interceptComponent = SearchTrigger => {

    SearchTrigger.insertAfterJSX(
        'span data-cy="SearchTrigger-label"',
        'Icon src={SearchIcon}'
    );

    SearchTrigger.removeJSX('Icon');
};

exports.interceptComponent = interceptComponent;
