
const interceptComponent = (CartTrigger) => {
    CartTrigger.spliceSource({
        after: 'import { Shopping',
        remove: 3,
        insert: 'Cart'
    });
};

exports.interceptComponent = interceptComponent;
