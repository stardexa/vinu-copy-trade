import {useTranslation} from 'next-i18next'
import styles from './Campaign.module.scss'
import ShapeImg from '../../../../../public/assets/images/others/shape.svg'
import Image from "next/image";
import Link from "next/link";

const Campaign = () => {
    const {t} = useTranslation('home')
    return (
        <>
            <div className={'container'}>
                <div className={styles.heroCard}>
                    <div className={'card-wrapper-item-2'}>
                        <div className={'text-center'} data-aos="fade-up">
                            <Image src={ShapeImg}  alt={'Cryptocurrency exchange software'}
                                   className={'bounce2'} width={350}/>
                        </div>
                        <div>
                            <h2 className={'text-md'} data-aos="fade-right">{t('HOME.campaignTitle')}</h2>
                            <h3 className={'text-md  color-primary my-1'}
                                data-aos="fade-right">{t('HOME.campaignSubTitle')}</h3>
                            <p className={'text-xs'} data-aos="fade-right">{t('HOME.campaignDesc')}</p>
                            <Link href={'/contact'} className={'btn btn-white-outline mt-2'}
                                  data-aos="fade-right">{t('HOME.campaignButton')}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Campaign