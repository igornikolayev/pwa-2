import {faFaceGrin, faBookOpen, faBackspace, faStar, faWallet, faAddressBook} from '@fortawesome/free-solid-svg-icons';

const accountNavigationLinks = [
    {
        name: 'Account Information',
        path: '/account-information',
        icon: faFaceGrin
    },
    {
        name: 'Orders',
        path: '/order-history',
        icon: faBookOpen
    },
    {
        name: 'Returns',
        path: '/returns',
        icon: faBackspace
    },
    {
        name: 'My Wishlist',
        path: '/wishlist',
        icon: faStar
    },
    {
        name: 'Wallet',
        path: '/wallet',
        icon: faWallet
    },
    {
        name: 'Address Book',
        path: '/address-book',
        icon: faAddressBook
    }
]

export default accountNavigationLinks;
