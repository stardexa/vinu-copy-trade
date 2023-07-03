import styles from './Footer.module.scss'
import { useTranslation } from 'next-i18next'
import Link from '../../components/general-components/Link/Link'
import Image from 'next/image'
import Logo from '../../../../public/assets/images/logo/logo.svg'
import { socialMedia } from '../../config/main'
import {footerNav} from "../../config/layout";
import React from "react";

const Footer = () => {
    const { t } = useTranslation('common')

    return (
        <footer className={styles['footer']}>
            <div>
                <div data-aos="fade-up">
                    <Link href={'/'}>
                        <Image src={Logo} loading="lazy" alt={'VinuSoft Logo'} />
                    </Link>
                    <p>{t('FOOTER.tagline')}</p>
                </div>

                <div className={styles['social-media-wrapper']} data-aos="fade-up">
                    {socialMedia.map((item) => (
                        <Link
                            key={item.label}
                            title={item.label}
                            target="_blank"
                            href={item.url}
                        >
                            <item.icon style={{fontSize: 20}} />
                        </Link>
                    ))}
                </div>

                <div className={styles.subLink} data-aos="fade-up">
                    {footerNav.map((link) => (
                        <Link key={link.label} href={{ pathname: link.route }} className={styles.linkd}>
                            {t(link.label)}
                        </Link>
                    ))}
                </div>
                <div className={'text-xs'} data-aos="fade-up">{t('FOOTER.reserved')}</div>
            </div>
        </footer>
    )
}

export default Footer
