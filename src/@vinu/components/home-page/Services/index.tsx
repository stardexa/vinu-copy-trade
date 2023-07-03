import {useTranslation} from 'next-i18next'
import styles from './Services.module.scss'
import Image from "next/image";
import Link from "next/link";
import lineShapeImg from '/public/assets/images/others/lineShape.webp'
import * as React from "react";

const Services = () => {

    const {t} = useTranslation('home')
    return (
        <>
            <div className={styles.titleBox}>
                <span className={'text-default'}>{t('HOME.servicesTagline')}</span>
                <h2 className={'text-lg color-primary'}>{t('HOME.servicesTitle')}</h2>
                <div className={'d-flex gap-1 my-1'}>
                    <span className={'slipBox'}/>
                    <span className={'slipBox'}/>
                    <span className={'slipBox'}/>
                </div>
            </div>
            <div>
                <div className={'px-3'}>
                    <div className={styles.serviceContainer}>
                        {[...Array(3)].map((e, i) => (
                            <div key={i + 1} className={styles.serviceBox} data-aos="fade-up">
                                <span className={[styles['circleServices'], 'bounce2'].join(' ')}/>
                                <div className={styles.glassBox}>
                                    <h2 className={'text-default'}>{t(`HOME.serviceTitle${i + 1}`)}</h2>
                                    <p className={'text-xs'}>{t(`HOME.serviceDesc${i + 1}`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.serviceContainer}>
                        {[...Array(4)].map((e, i) => (
                            <div key={i + 1} className={styles.serviceBox} data-aos="fade-up">
                                <span className={[styles['circleServices'], 'bounce2'].join(' ')}/>
                                <div className={styles.glassBox}>
                                    <h2 className={'text-default'}>{t(`HOME.serviceTitle${i + 4}`)}</h2>
                                    <p className={'text-xs'}>{t(`HOME.serviceDesc${i + 4}`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.serviceContainer}>
                        {[...Array(3)].map((e, i) => (
                            <div key={i + 1} className={styles.serviceBox} data-aos="fade-up">
                                <span className={[styles['circleServices'], 'bounce2'].join(' ')}/>
                                <div className={styles.glassBox}>
                                    <h2 className={'text-default'}>{t(`HOME.serviceTitle${i + 8}`)}</h2>
                                    <p className={'text-xs'}>{t(`HOME.serviceDesc${i + 8}`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={'flex-center mt-2'}>
                        <Link className={styles.seeDetail} href={'/services'}>{t('HOME.seeDetail')}</Link>
                    </div>
                </div>
            </div>

            <div className={styles.division}/>

            <div className={styles.customContainer}>
                <div className={styles.cryptoService}>
                    <div className={styles.wrapBox}>
                        {[...Array(9)].map((e, i) => (
                            <div key={i + 1} data-aos="fade-up">
                                <span/>
                                <p>{t(`HOME.features${i + 1}`)}</p>
                            </div>
                        ))}
                        <Link className={styles.seeDetail} href={'/services'}>{t('HOME.seeDetail')}</Link>
                    </div>
                </div>
                <div className={styles.bigText}>
                    <span className={'bounce2'}>{t('HOME.bigText')}</span>
                </div>
                <Image src={lineShapeImg} className={styles.lineShape} alt={'Cryptocurrency exchange software'}/>
            </div>
        </>
    )
}
export default Services