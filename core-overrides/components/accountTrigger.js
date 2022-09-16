const { Targetables } = require("@magento/pwa-buildpack");

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const AccountTrigger = targetables.reactComponent(
        '@magento/venia-ui/lib/components/Header/accountTrigger.js'
    );

    AccountTrigger.addImport(' {useHistory} from \'react-router-dom\'')

    AccountTrigger.insertAfterSource(
        'const { formatMessage } = useIntl();',
        'const history = useHistory();'
    );

    AccountTrigger.spliceSource({
        after: 'className={classes.trigger}',
        remove: 49,
        insert: 'onClick={ ()=> { history.push(\'/sign-in\')} }'
    })
}
