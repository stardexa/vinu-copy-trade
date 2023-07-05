import { FaHome, FaInfo, FaBitcoin } from 'react-icons/fa';
import { MdOutlineHomeRepairService, MdPermContactCalendar } from 'react-icons/md';

export const toolbarNav = [
    {
        label: 'Home',
        route: '/',
    },
    {
        label: 'Watchlist',
        route: '/watchlist',
    },
    {
        label: 'Portfolio',
        route: '/portfolio',
    },
    {
        label: 'Action',
        route: '/about',
    },
]
export const sidenav = [
    {
        label: 'Home',
        route: '/',
        icon: FaHome,
    },
    {
        label: 'Watchlist',
        route: '/watchlist',
        icon: FaInfo,
    },
    {
        label: 'Portfolio',
        route: '/portfolio',
        icon: MdOutlineHomeRepairService,
    },
    {
        label: 'Action',
        route: '/about',
        icon: FaBitcoin,
    },
]

export const footerNav = [
    {
        label: 'Home',
        route: '/',
    },
    {
        label: 'Watchlist',
        route: '/watchlist',
    },
    {
        label: 'Portfolio',
        route: '/portfolio',
    },
    {
        label: 'Action',
        route: '/about',
    },
]

export const locales = [
    {
        value: 'en',
        text: 'English',
    },
    {
        value: 'de',
        text: 'Deutsch',
    },
    {
        value: 'ru',
        text: 'Русский',
    },
    {
        value: 'tr',
        text: 'Türkçe',
    },
]
