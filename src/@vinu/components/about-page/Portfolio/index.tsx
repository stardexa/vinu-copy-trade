import { useTranslation } from 'next-i18next'
import styles from './Portfolio.module.scss'
import Image from 'next/image'
import EmptyImg from '/public/assets/images/others/empty-image.svg'

const Portfolio = () =>{
    const { t } = useTranslation('about')
    return (
        <>
            <div className={'container my-5'}>
                <div className={styles.porfolioCard}>
                    <div className={styles.sideBar}>
                        <h2 className={'text-s  color-white my-1'} data-aos="fade-right"><b>{t('ABOUT.portfolioTitle')}</b></h2>
                        <h4 className={styles.activeLink} data-aos="fade-right">{t('ABOUT.portfolioAll')}</h4>
                        <h4 data-aos="fade-right" className={styles.lala}>{t('ABOUT.portfolio1')}</h4>
                        <h4 data-aos="fade-right">{t('ABOUT.portfolio2')}</h4>
                        <h4 data-aos="fade-right">{t('ABOUT.portfolio3')}</h4>
                        <h4 data-aos="fade-right">{t('ABOUT.portfolio4')}</h4>
                    </div>
                    <div className={styles.imageBar}>
                        <Image src={EmptyImg}  alt={'Cryptocurrency exchange software'} data-aos="fade-up"/>
                        <Image src={EmptyImg}  alt={'Cryptocurrency exchange software'} data-aos="fade-up"/>
                        <Image src={EmptyImg}  alt={'Cryptocurrency exchange software'} data-aos="fade-up"/>
                        <Image src={EmptyImg}  alt={'Cryptocurrency exchange software'} data-aos="fade-up"/>
                        <Image src={EmptyImg}  alt={'Cryptocurrency exchange software'} data-aos="fade-up"/>
                        <Image src={EmptyImg}  alt={'Cryptocurrency exchange software'} data-aos="fade-up"/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Portfolio