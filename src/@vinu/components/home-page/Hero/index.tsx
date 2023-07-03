import {useTranslation} from 'next-i18next'
import styles from './Hero.module.scss'
import React from "react";
import Link from "next/link";

const Hero = () => {
    const {t} = useTranslation('home')
    return (
        <>
            <div className={'semi-circle'}/>
            {/*<div className={'second-semi-circle'} />*/}

            <div className={'container'}>
                <div className={styles['heroCard']}>
                    <h2 className={'text-lg'} data-aos="fade-down">{t('HOME.heroFirst')}</h2>
                    <h1 className={'text-md mb-1'} data-aos="fade-left">{t('HOME.heroSecond')}</h1>
                    <p data-aos="fade-left">{t('HOME.heroDesc')}</p>
                    <div className={'card-wrapper-item-2 mt-2'}>
                        <Link href={'/contact'} className={'btn btn-primary'}
                              data-aos="fade-down">{t('HOME.heroButton1')}</Link>
                        <Link href={'/exchange-features'} className={'btn btn-primary-outline'}
                              data-aos="fade-down">{t('HOME.heroButton2')}</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Hero