const { Targetables } = require("@magento/pwa-buildpack");

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const CartTrigger = targetables.reactComponent(
        '@magento/venia-ui/lib/components/Header/cartTrigger.js'
    );

    CartTrigger.addImport(' {useHistory} from \'react-router-dom\'')

    CartTrigger.insertAfterSource(
        'const { formatMessage } = useIntl();',
        'const history = useHistory();'
        );

    CartTrigger.spliceSource({
        after: 'className={classes.trigger}',
        remove: 49,
        insert: 'onClick={ ()=> { history.push(\'/cart\')} }'
    })
}
