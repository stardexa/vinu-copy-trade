import { FaHome, FaInfo, FaBitcoin } from 'react-icons/fa';
import { MdOutlineHomeRepairService, MdPermContactCalendar } from 'react-icons/md';

export const toolbarNav = [
    {
        label: 'MENU.home',
        route: '/',
    },
    {
        label: 'MENU.about',
        route: '/about',
    },
    {
        label: 'MENU.services',
        route: '/services',
    },
    {
        label: 'MENU.exchangeFeatures',
        route: '/exchange-features',
    },
    {
        label: 'MENU.contact',
        route: '/contact',
    },
]
export const sidenav = [
    {
        label: 'MENU.home',
        route: '/',
        icon: FaHome,
    },
    {
        label: 'MENU.about',
        route: '/about',
        icon: FaInfo,
    },
    {
        label: 'MENU.services',
        route: '/services',
        icon: MdOutlineHomeRepairService,
    },
    {
        label: 'MENU.exchangeFeatures',
        route: '/exchange-features',
        icon: FaBitcoin,
    },
    {
        label: 'MENU.contact',
        route: '/contact',
        icon: MdPermContactCalendar,
    },
]

export const footerNav = [
    {
        label: 'MENU.about',
        route: '/about',
    },
    {
        label: 'MENU.services',
        route: '/services',
    },
    {
        label: 'MENU.exchangeFeatures',
        route: '/exchange-features',
    },
    {
        label: 'MENU.contact',
        route: '/contact',
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
