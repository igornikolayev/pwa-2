const interceptComponent = Header => {
    const Icon = Header.addReactLazyImport(
        '@magento/venia-ui/lib/components/Icon',
        'Icon'
    );

    Header.addImport("{ Heart as HeartIcon } from 'react-feather'");

    Header.prependJSX(
        'div className={classes.secondaryActions}',
        `Link children={<${Icon} src={HeartIcon} />} className={classes.wishlist} to={'/wishlist'}`
    );

    Header.surroundJSX(
        'div className={classes.secondaryActions}',
        "Suspense fallback={''}"
    );
};

exports.interceptComponent = interceptComponent;
