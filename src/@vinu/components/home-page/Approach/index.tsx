import {useTranslation} from 'next-i18next'
import styles from './Approach.module.scss'

const Approach = () => {
    const {t} = useTranslation('home')
    return (
        <>
            <div className={'container my-10'}>
                <div className={'flex-center text-center'}>
                    <div>
                        <h2 className={'text-lg color-primary'} data-aos="fade-down">{t('HOME.approachTitle')}</h2>
                        <div className={'flex-center gap-1 my-1'}>
                            <span className={'slipBox'}/>
                            <span className={'slipBox'}/>
                            <span className={'slipBox'}/>
                        </div>
                        <p data-aos="fade-up" className={styles['w75-auto']}>{t('HOME.approachDesc')}</p>
                    </div>
                </div>
                <div className={'card-wrapper-item-4 mt-2'}>
                    <div className={styles.stageBox}>
                        <div className={'text-xl'}>
                            <b className={'bounce2'}>{t('HOME.stage')}</b>
                            <span className={'text-md'}>{t('HOME.stageTitle1')}</span>
                        </div>
                        <p className={'text-xs'}>{t('HOME.stageDesc1')}</p>
                    </div>
                    <div className={styles.stageBox}>
                        <div className={'text-xl'}>
                            <b className={'bounce2'}>{t('HOME.stage')}</b>
                            <span className={'text-md'}>{t('HOME.stageTitle2')}</span>
                        </div>
                        <p className={'text-xs'}>{t('HOME.stageDesc2')}</p>
                    </div>
                    <div className={styles.stageBox}>
                        <div className={'text-xl'}>
                            <b className={'bounce2'}>{t('HOME.stage')}</b>
                            <span className={'text-md'}>{t('HOME.stageTitle3')}</span>
                        </div>
                        <p className={'text-xs'}>{t('HOME.stageDesc3')}</p>
                    </div>
                    <div className={styles.stageBox}>
                        <div className={'text-xl'}>
                            <b className={'bounce2'}>{t('HOME.stage')}</b>
                            <span className={'text-md'}>{t('HOME.stageTitle4')}</span>
                        </div>
                        <p className={'text-xs'}>{t('HOME.stageDesc4')}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Approach