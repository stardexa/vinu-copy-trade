import {useTranslation} from 'next-i18next'
// import styles from './About.module.scss'
import Image from "next/image";
import AboutImg from '../../../../../public/assets/images/others/about.png'
import styles from "../About/About.module.scss";
import Link from "next/link";

const About = () => {
    const {t} = useTranslation('home')
    return (
        <>
            <div className={'container'}>
                <div className={'card-wrapper-item-2'}>
                    <div data-aos="fade-right">
                        <Image src={AboutImg} loading="lazy"
                               alt={'Cryptocurrency exchange software'}/>
                    </div>
                    <div data-aos="fade-up">
                        <span className={'text-default'}>{t('HOME.aboutTagline')}</span>
                        <h2 className={'text-lg color-primary'}>{t('HOME.aboutTitle')}</h2>
                        <div className={'d-flex gap-1 my-1'}>
                            <span className={'slipBox'}/>
                            <span className={'slipBox'}/>
                            <span className={'slipBox'}/>
                        </div>
                        <p>{t('HOME.aboutDesc1')}</p>
                        <p className={'color-desc mt-1'}>{t('HOME.aboutDesc2')}</p>
                        <Link className={styles.seeDetail} href={'/about'}>{t('HOME.seeDetail')}</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About