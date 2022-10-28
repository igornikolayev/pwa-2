const interceptComponent = Footer => {
    Footer.addImport('Icon from "/src/components/Icon/icon.js"')

    Footer.replaceJSX(
        'Instagram',
        'Icon id={"InstagramIcon"} width={20} height={20}'
    );

    Footer.replaceJSX(
        'Facebook',
        'Icon id={"FacebookIcon"} width={20} height={20}'
    );

    Footer.replaceJSX(
        'Twitter',
        'Icon id={"TwitterIcon"} width={20} height={20}'
    );
};

exports.interceptComponent = interceptComponent;
