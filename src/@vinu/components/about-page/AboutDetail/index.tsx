import {useTranslation} from 'next-i18next'
import styles from './AboutDetail.module.scss'
import Image from "next/image";
import AboutImg from '../../../../../public/assets/images/others/about.png'

const AboutDetail = () => {
    const {t} = useTranslation('about')
    return (
        <>
            <div className={'container mt-5'}>
                <div className={'card-wrapper-item-2'}>
                    <div className={styles.headerWrap}>
                        <h1 className={'text-xl color-primary'} data-aos="fade-right">{t('ABOUT.title')}</h1>
                        <div className={'d-flex gap-1 my-1'} data-aos="fade-right">
                            <span className={'slipBox'}/>
                            <span className={'slipBox'}/>
                            <span className={'slipBox'}/>
                        </div>
                        <h5 className={'text-xs'} data-aos="fade-right">{t('ABOUT.tagline')}</h5>
                        <Image src={AboutImg} alt={'Cryptocurrency exchange software'} width={500}
                               data-aos="fade-right"/>
                    </div>
                    <div data-aos="fade-left">
                        <p>{t('ABOUT.desc1')}</p>
                        <p clavssName={'color-desc mt-1'}>{t('ABOUT.desc2')}</p>
                    </div>
                </div>

                <div className={[styles['companyInfo'], 'card-wrapper-item-3'].join(' ')} data-aos="fade-up">
                    <div>
                        <h2>{t('ABOUT.statCount1')}</h2>
                        <p>{t('ABOUT.statTitle1')}</p>
                    </div>
                    <div>
                        <h2>{t('ABOUT.statCount2')}</h2>
                        <p>{t('ABOUT.statTitle2')}</p>
                    </div>
                    <div>
                        <h2>{t('ABOUT.statCount3')}</h2>
                        <p>{t('ABOUT.statTitle3')}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutDetail