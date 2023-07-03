import {useTranslation} from 'next-i18next'
import styles from './Features.module.scss'

const Features = () => {
    const {t} = useTranslation('exchange_features')
    return (
        <>
            <div className={'flex-column-center mt-5 w50-auto'} data-aos="fade-in">
                <h1 className={'text-lg color-primary'}>{t('FEATURES.title')}</h1>
                <div className={'d-flex gap-1 my-1'}>
                    <span className={'slipBox'}/>
                    <span className={'slipBox'}/>
                    <span className={'slipBox'}/>
                </div>
            </div>

            <div className={styles.customContainer}>
                <div className={styles.cryptoService}>
                    <div className={styles.wrapBox}>
                        <div data-aos="fade-right">
                            <span/>
                            <p>{t('FEATURES.feature1')}</p>
                        </div>
                        <div data-aos="fade-right">
                            <span/>
                            <p>{t('FEATURES.feature2')}</p>
                        </div>
                        <div data-aos="fade-right">
                            <span/>
                            <p>{t('FEATURES.feature3')}</p>
                        </div>
                        <div data-aos="fade-right">
                            <span/>
                            <p>{t('FEATURES.feature4')}</p>
                        </div>
                        <div data-aos="fade-right">
                            <span/>
                            <p>{t('FEATURES.feature5')}</p>
                        </div>
                        <div data-aos="fade-right">
                            <span/>
                            <p>{t('FEATURES.feature6')}</p>
                        </div>
                        <div data-aos="fade-right">
                            <span/>
                            <p>{t('FEATURES.feature7')}</p>
                        </div>
                        <div data-aos="fade-right">
                            <span/>
                            <p>{t('FEATURES.feature8')}</p>
                        </div>
                        <div data-aos="fade-right">
                            <span/>
                            <p>{t('FEATURES.feature9')}</p>
                        </div>
                        <div data-aos="fade-right">
                            <span/>
                            <p>{t('FEATURES.feature10')}</p>
                        </div>
                        <div data-aos="fade-right">
                            <span/>
                            <p>{t('FEATURES.feature11')}</p>
                        </div>
                        <div data-aos="fade-right">
                            <span/>
                            <p>{t('FEATURES.feature12')}</p>
                        </div>
                        <div data-aos="fade-right">
                            <span/>
                            <p>{t('FEATURES.feature13')}</p>
                        </div>
                        <div data-aos="fade-right">
                            <span/>
                            <p>{t('FEATURES.feature14')}</p>
                        </div>
                        <div data-aos="fade-right">
                            <span/>
                            <p>{t('FEATURES.feature15')}</p>
                        </div>
                        <div data-aos="fade-right">
                            <span/>
                            <p>{t('FEATURES.feature16')}</p>
                        </div>
                        <div data-aos="fade-right">
                            <span/>
                            <p>{t('FEATURES.feature17')}</p>
                        </div>
                        <div data-aos="fade-right">
                            <span/>
                            <p>{t('FEATURES.feature18')}</p>
                        </div>
                        <div data-aos="fade-right">
                            <span/>
                            <p>{t('FEATURES.feature19')}</p>
                        </div>
                        <div data-aos="fade-right">
                            <span/>
                            <p>{t('FEATURES.feature20')}</p>
                        </div>
                        <div data-aos="fade-right">
                            <span/>
                            <p>{t('FEATURES.feature21')}</p>
                        </div>
                        <div data-aos="fade-right">
                            <span/>
                            <p>{t('FEATURES.feature22')}</p>
                        </div>
                        <div data-aos="fade-right">
                            <span/>
                            <p>{t('FEATURES.feature23')}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.bigText}>
                    <span className={'bounce2'}>{t('FEATURES.bigText')}</span>
                    <div className={styles.cryptoService}>
                        <div className={styles.wrapBox}>
                            <div data-aos="fade-right">
                                <span/>
                                <p>{t('FEATURES.feature24')}</p>
                            </div>
                            <div data-aos="fade-right">
                                <span/>
                                <p>{t('FEATURES.feature25')}</p>
                            </div>
                            <div data-aos="fade-right">
                                <span/>
                                <p>{t('FEATURES.feature26')}</p>
                            </div>
                            <div data-aos="fade-right">
                                <span/>
                                <p>{t('FEATURES.feature27')}</p>
                            </div>
                            <div data-aos="fade-right">
                                <span/>
                                <p>{t('FEATURES.feature28')}</p>
                            </div>
                            <div data-aos="fade-right">
                                <span/>
                                <p>{t('FEATURES.feature29')}</p>
                            </div>
                            <div data-aos="fade-right">
                                <span/>
                                <p>{t('FEATURES.feature30')}</p>
                            </div>
                            <div data-aos="fade-right">
                                <span/>
                                <p>{t('FEATURES.feature31')}</p>
                            </div>
                            <div data-aos="fade-right">
                                <span/>
                                <p>{t('FEATURES.feature32')}</p>
                            </div>
                            <div data-aos="fade-right">
                                <span/>
                                <p>{t('FEATURES.feature33')}</p>
                            </div>
                            <div data-aos="fade-right">
                                <span/>
                                <p>{t('FEATURES.feature34')}</p>
                            </div>
                            <div data-aos="fade-right">
                                <span/>
                                <p>{t('FEATURES.feature35')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Features