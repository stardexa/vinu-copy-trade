import {useTranslation} from 'next-i18next'
import styles from './TestResult.module.scss'

const TestResult = () => {
    const {t} = useTranslation('exchange_features')
    return (
        <>
            <div className={'flex-column-center w50-auto my-5'} data-aos="fade-up">
                <h1 className={'text-lg color-primary'}>{t('FEATURES.resultTitle')}</h1>
                <div className={'d-flex gap-1 my-1'}>
                    <span className={'slipBox'}/>
                    <span className={'slipBox'}/>
                    <span className={'slipBox'}/>
                </div>
                <p className={'text-xs'}>{t('FEATURES.resultDesc')}</p>
            </div>
            <div className={'container'}>
                <div className={styles.resultWrapper}>
                    <div className={styles.resultCircle} data-aos="fade-down">
                        <div>
                            <p>100</p>
                        </div>
                        <span className={'text-default'}>{t('FEATURES.resultPerformance')}</span>
                    </div>
                    <div className={styles.resultCircle} data-aos="fade-down">
                        <div>
                            <p>98</p>
                        </div>
                        <span className={'text-default'}>{t('FEATURES.resultAccessibility')}</span>
                    </div>
                    <div className={styles.resultCircle} data-aos="fade-down">
                        <div>
                            <p>94</p>
                        </div>
                        <span className={'text-default'}>{t('FEATURES.resultPratices')}</span>
                    </div>
                    <div className={styles.resultCircle} data-aos="fade-down">
                        <div>
                            <p>100</p>
                        </div>
                        <span className={'text-default'}>{t('FEATURES.resultSeo')}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TestResult