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

        <footer className={[styles['footerBg'], 'container-fluid'].join(' ')}>
            <div className={'container'}>
                <div className={styles.footerBox}>
                    <div className={styles.footerLogo}>
                        <Link href={'/'}>
                            <Image src={Logo} loading="lazy" alt={'VinuSoft Copy Trade Logo'} />
                        </Link>
                        <p>CRYPTO SOLUTIONS</p>
                    </div>

                    <div className={'text-xs ml-auto'} data-aos="fade-up">©2023 Vinu - All Rights Reserved.</div>
                </div>
            </div>

        </footer>
    )
}

export default Footer
