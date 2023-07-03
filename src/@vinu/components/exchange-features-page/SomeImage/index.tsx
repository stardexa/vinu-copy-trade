import {useTranslation} from 'next-i18next'
import styles from './SomeImage.module.scss'
import Image from "next/image";
import FeaturePanelImg from '../../../../../public/assets/images/others/featuresPanel.webp'

const SomeImage = () => {
    const {t} = useTranslation('exchange_features')
    return (
        <>
            <div className={'container mt-5'}>
                <div className={'card-wrapper-item-2'}>
                    <div className={styles.imgResponsive}>
                        <Image src={FeaturePanelImg} alt={'Cryptocurrency exchange software'}
                               className={styles.flyImage} data-aos="fade-right"/>
                        <div className={styles.clearBoth}/>
                    </div>
                    <div className={styles.wrapResponsive}>
                        <h3 className={'text-lg my-1 color-primary'} data-aos="fade-up">{t('FEATURES.someTitle')}</h3>
                        <p className={'text-xs'} data-aos="fade-up">{t('FEATURES.someDesc')}</p>
                        <div className={'d-flex mt-2 gap-2'}>
                            <div data-aos="fade-up">
                                <h4 className={'text-defuault color-primary'}>{t('FEATURES.someFirstTitle')}</h4>
                                <p className={'text-xs'}>{t('FEATURES.someFirstDesc')}</p>
                            </div>
                            <div data-aos="fade-up">
                                <h4 className={'text-defuault color-primary'}>{t('FEATURES.someFirstTitle2')}</h4>
                                <p className={'text-xs'}>{t('FEATURES.someFirstDesc2')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.fullImage}/>
        </>
    )
}
export default SomeImage