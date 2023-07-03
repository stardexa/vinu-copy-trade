import {useTranslation} from 'next-i18next'
import styles from './Performance.module.scss'
import Image from "next/image";
import PerformanceImg from '../../../../../public/assets/images/others/performance.svg'

const Performance = () => {
    const {t} = useTranslation('exchange_features')
    return (
        <>
            <div className={'flex-column-center w50-auto my-3'} data-aos="fade-up">
                <h1 className={'text-lg color-primary'}>{t('FEATURES.performanceTitle')}</h1>
                <div className={'d-flex gap-1 my-1'}>
                    <span className={'slipBox'}/>
                    <span className={'slipBox'}/>
                    <span className={'slipBox'}/>
                </div>
            </div>
            <div className={'container'}>
                <div className={'card-wrapper-item-2'}>
                    <div className={styles.securityLeft}>
                        <Image data-aos="fade-right" src={PerformanceImg} alt={''} width={500}/>
                    </div>
                    <div className={styles.securityRight}>
                        <p className={'text-xs'} data-aos="fade-up">{t('FEATURES.performanceDesc')}</p>
                        <h3 className={'text-md my-1'} data-aos="fade-up">{t('FEATURES.performaneSubTitle')}</h3>
                        <table>
                            <tbody>
                                <tr key={'perfromance'} data-aos="fade-right">
                                    <td><p className={'text-default'}>{t('FEATURES.performaneLine1')}</p>
                                    </td>
                                    <td><span className={styles.loaderSeo}/></td>
                                </tr>
                                <tr key={'perfromance2'} data-aos="fade-right">
                                    <td><p className={'text-default'}>{t('FEATURES.performaneLine2')}</p>
                                    </td>
                                    <td><span className={styles.loaderPerformance}/></td>
                                </tr>
                            </tbody>
                        </table>
                        <span className={'text-xs'}>{t('FEATURES.performaneLineDesc')}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Performance