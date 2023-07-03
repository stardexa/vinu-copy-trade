import {useTranslation} from 'next-i18next'
import styles from './Technology.module.scss'
import Image from "next/image";
import {Tab} from "react-tabs";
import * as React from "react";

const Technology = () => {
    const {t} = useTranslation('exchange_features')
    return (
        <>
            <div className={'flex-column-center w50-auto my-3'} data-aos="fade-in">
                <h1 className={'text-lg color-primary'}>{t('FEATURES.techTitle')}</h1>
                <div className={'d-flex gap-1 my-1'}>
                    <span className={'slipBox'}/>
                    <span className={'slipBox'}/>
                    <span className={'slipBox'}/>
                </div>
            </div>
            <div className={'container'}>
                <div className={'card-wrapper-item-2'}>
                    <div className={styles.techCard} data-aos="fade-up">
                        <h4 className={'text-s'}><b>{t('FEATURES.blockchainDev')}</b></h4>
                        <div className={'flex-center gap-1 flex-wrap'}>
                            {[...Array(7)].map((e, i) => (
                                <Image key={i + 1} src={`/assets/images/technology_icon/blockchain_development/${i + 1}.png`} width={40}
                                       height={50} alt={'Cryptocurrency exchange software'}/>
                            ))}
                        </div>
                    </div>
                    <div className={styles.techCard} data-aos="fade-up">
                        <h4 className={'text-s'}><b>{t('FEATURES.infrastructure')}</b></h4>
                        <div className={'flex-center gap-1 flex-wrap'}>
                            {[...Array(5)].map((e, i) => (
                                <Image key={i + 1} src={`/assets/images/technology_icon/infrastructure/${i + 1}.png`} width={40}
                                       height={50} alt={'Cryptocurrency exchange software'}/>
                            ))}
                        </div>
                    </div>
                    <div className={styles.techCard} data-aos="fade-up">
                        <h4 className={'text-s'}><b>{t('FEATURES.frontendDev')}</b></h4>
                        <div className={'flex-center gap-1 flex-wrap'}>
                            {[...Array(4)].map((e, i) => (
                                <Image key={i + 1} src={`/assets/images/technology_icon/frontend_development/${i + 1}.png`} width={40}
                                       height={50} alt={'Cryptocurrency exchange software'}/>
                            ))}
                        </div>
                    </div>
                    <div className={styles.techCard} data-aos="fade-up">
                        <h4 className={'text-s'}><b>{t('FEATURES.backendDev')}</b></h4>
                        <div className={'flex-center gap-1 flex-wrap'}>
                            {[...Array(9)].map((e, i) => (
                                <Image key={i + 1} src={`/assets/images/technology_icon/backend_development/${i + 1}.png`} width={40}
                                       height={50} alt={'Cryptocurrency exchange software'}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Technology