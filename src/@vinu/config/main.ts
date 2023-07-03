import { FaMedium, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const subdomain = process.env.APP_ENV === 'preview' ? 'preview.' : ''

export const domain = {
    default: `https://${subdomain}vinusoft.com`,
}

export const socialMedia = [
    {
        icon: FaInstagram,
        url: 'https://www.instagram.com/vinusoftware/',
        label: 'Instagram Account link',
    },
    {
        icon: FaMedium,
        url: 'https://medium.com/@vinusoft',
        label: 'Medium Account link',
    },
    {
        icon: FaLinkedinIn,
        url: 'https://www.linkedin.com/company/vinusoft/',
        label: 'LinkedIn Account link',
    },
];