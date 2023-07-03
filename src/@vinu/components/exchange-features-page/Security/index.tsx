import {useTranslation} from 'next-i18next'
import styles from './Security.module.scss'
import Image from "next/image";
import SecurityImg from '../../../../../public/assets/images/others/security.svg'

const Security = () => {
    const {t} = useTranslation('exchange_features')
    return (
        <>
            <div className={'flex-column-center w50-auto my-3'} data-aos="fade-in">
                <h1 className={'text-lg color-primary'}>{t('FEATURES.securityTitle')}</h1>
                <div className={'d-flex gap-1 my-1'}>
                    <span className={'slipBox'}/>
                    <span className={'slipBox'}/>
                    <span className={'slipBox'}/>
                </div>
            </div>
            <div className={'container'}>
                <div className={styles.securityWrapped}>
                    <div className={styles.securityLeft}>
                        <div className={'text-xs mt-1 mr-1'}> 01</div>
                        <div>
                            <h2 className={'text-linear'} data-aos="fade-up">{t('FEATURES.titleFirst')}</h2>
                            <h2 data-aos="fade-in">{t('FEATURES.titleSecond')}</h2>
                            <h2 data-aos="fade-in">{t('FEATURES.titleThirty')}</h2>
                        </div>
                    </div>
                    <div className={styles.securityRight}>
                        {/*<span><Image src={SecurityImg} alt={''} width={35} className={'mt-1'} data-aos="fade-up" /></span>*/}
                        <h3 className={'text-s'} data-aos="fade-in">{t('FEATURES.securitySubTitle')}</h3>
                        <p className={'text-xs'} data-aos="fade-in">{t('FEATURES.securityDesc')}</p>
                        <div className={['card-wrapper-item-2 mt-2', styles['gap0media']].join(' ')}>
                            <div>
                                <div className={styles.securityFeatures}>
                                    <Image src={SecurityImg} loading="lazy" alt={'Cryptocurrency exchange software'}
                                           width={23} className={'mt-1'} data-aos="fade-up"/>
                                    <p> {t('FEATURES.securityFeatures1')} </p>
                                </div>
                                <div className={styles.securityFeatures}>
                                    <Image src={SecurityImg} loading="lazy" alt={'Cryptocurrency exchange software'}
                                           width={23} className={'mt-1'} data-aos="fade-up"/>
                                    <p> {t('FEATURES.securityFeatures2')} </p>
                                </div>
                                <div className={styles.securityFeatures}>
                                    <Image src={SecurityImg} loading="lazy" alt={'Cryptocurrency exchange software'}
                                           width={23} className={'mt-1'} data-aos="fade-up"/>
                                    <p> {t('FEATURES.securityFeatures3')} </p>
                                </div>
                                <div className={styles.securityFeatures}>
                                    <Image src={SecurityImg} loading="lazy" alt={'Cryptocurrency exchange software'}
                                           width={23} className={'mt-1'} data-aos="fade-up"/>
                                    <p> {t('FEATURES.securityFeatures4')} </p>
                                </div>
                                <div className={styles.securityFeatures}>
                                    <Image src={SecurityImg} loading="lazy" alt={'Cryptocurrency exchange software'}
                                           width={23} className={'mt-1'} data-aos="fade-up"/>
                                    <p> {t('FEATURES.securityFeatures5')} </p>
                                </div>
                                <div className={styles.securityFeatures}>
                                    <Image src={SecurityImg} loading="lazy" alt={'Cryptocurrency exchange software'}
                                           width={23} className={'mt-1'} data-aos="fade-up"/>
                                    <p> {t('FEATURES.securityFeatures6')} </p>
                                </div>
                            </div>
                            <div>
                                <div className={styles.securityFeatures}>
                                    <Image src={SecurityImg} loading="lazy" alt={'Cryptocurrency exchange software'}
                                           width={23} className={'mt-1'} data-aos="fade-up"/>
                                    <p> {t('FEATURES.securityFeatures7')} </p>
                                </div>
                                <div className={styles.securityFeatures}>
                                    <Image src={SecurityImg} loading="lazy" alt={'Cryptocurrency exchange software'}
                                           width={23} className={'mt-1'} data-aos="fade-up"/>
                                    <p> {t('FEATURES.securityFeatures8')} </p>
                                </div>
                                <div className={styles.securityFeatures}>
                                    <Image src={SecurityImg} loading="lazy" alt={'Cryptocurrency exchange software'}
                                           width={23} className={'mt-1'} data-aos="fade-up"/>
                                    <p> {t('FEATURES.securityFeatures9')} </p>
                                </div>
                                <div className={styles.securityFeatures}>
                                    <Image src={SecurityImg} loading="lazy" alt={'Cryptocurrency exchange software'}
                                           width={23} className={'mt-1'} data-aos="fade-up"/>
                                    <p> {t('FEATURES.securityFeatures10')} </p>
                                </div>
                                <div className={styles.securityFeatures}>
                                    <Image src={SecurityImg} loading="lazy" alt={'Cryptocurrency exchange software'}
                                           width={23} className={'mt-1'} data-aos="fade-up"/>
                                    <p> {t('FEATURES.securityFeatures11')} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Security