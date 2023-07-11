import {useTranslation} from 'next-i18next'
import styles from './ElegantCard.module.scss'
import Image from 'next/image';
import BtcImg from '../../../../../public/assets/images/coin/btc.svg'
import EthImg from '../../../../../public/assets/images/coin/eth.svg'
import UsdtImg from '../../../../../public/assets/images/coin/usdt.svg'
import XrpImg from '../../../../../public/assets/images/coin/xrp.svg'
import user2img from '../../../../../public/assets/images/profile/user2.svg'
import user3img from '../../../../../public/assets/images/profile/user3.svg'
import user4img from '../../../../../public/assets/images/profile/user4.svg'
import LongGreenChart from '../../../../../public/assets/images/others/longGreenChart.svg'
import GreenFire from '../../../../../public/assets/images/others/greenFire.svg'

const ElegantCard = () => {
    // const {t} = useTranslation('index')
    return (
        <>
            <div className="container">
                <div className={'card-wrapper'}>
                    <div className={styles.elegantCard}>
                        <div className={'flex-start gap-05'}>
                            <Image src={GreenFire} width={10} alt={''} className={styles.iconGap} />
                            <h5 className={'text-xxs color-white fw-700'}>Kripto Para</h5>
                        </div>
                        <div className={'between-center mt-05'}>
                            <div className={styles.coinWrapped}>
                                <Image src={BtcImg} width={50} alt={''} />
                                <div className={'flex-column'}>
                                    <div className={'d-flex gap-05'}>
                                        <h3>BTC / </h3>
                                        <p className={'text-xxs'}>USDT</p>
                                    </div>
                                    <span className={'fw-700'}>355,251,00</span>
                                    <span className={'color-success'}>▲ 3.34 %</span>
                                </div>
                            </div>
                            <Image src={LongGreenChart}  alt={''} />
                        </div>
                    </div>

                    <div className={styles.elegantCard}>
                        <div className={'flex-start gap-05'}>
                            <Image src={GreenFire} width={10} alt={''} className={styles.iconGap} />
                            <h5 className={'text-xxs color-white fw-700'}>Kripto Para</h5>
                        </div>
                        <div className={'between-center mt-05'}>
                            <div className={styles.coinWrapped}>
                                <Image src={EthImg} width={50} alt={''} />
                                <div className={'flex-column'}>
                                    <div className={'d-flex gap-05'}>
                                        <h3>ETH / </h3>
                                        <p className={'text-xxs'}>USDT</p>
                                    </div>
                                    <span className={'fw-700'}>355,251,00</span>
                                    <span className={'color-success'}>▲ 3.34 %</span>
                                </div>
                            </div>
                            <Image src={LongGreenChart}  alt={''} />
                        </div>
                    </div>

                    <div className={styles.elegantCard}>
                        <div className={'flex-start gap-05'}>
                            <Image src={GreenFire} width={10} alt={''} className={styles.iconGap} />
                            <h5 className={'text-xxs color-white fw-700'}>Kripto Para</h5>
                        </div>
                        <div className={'between-center mt-05'}>
                            <div className={styles.coinWrapped}>
                                <Image src={UsdtImg} width={50} alt={''} />
                                <div className={'flex-column'}>
                                    <div className={'d-flex gap-05'}>
                                        <h3>USDT / </h3>
                                        <p className={'text-xxs'}>BTC</p>
                                    </div>
                                    <span className={'fw-700'}>355,251,00</span>
                                    <span className={'color-success'}>▲ 3.34 %</span>
                                </div>
                            </div>
                            <Image src={LongGreenChart}  alt={''} />
                        </div>
                    </div>

                    <div className={styles.elegantCard}>
                        <div className={'flex-start gap-05'}>
                            <Image src={GreenFire} width={10} alt={''} className={styles.iconGap} />
                            <h5 className={'text-xxs color-white fw-700'}>Kripto Para</h5>
                        </div>
                        <div className={'between-center mt-05'}>
                            <div className={styles.coinWrapped}>
                                <Image src={XrpImg} width={50} alt={''} />
                                <div className={'flex-column'}>
                                    <div className={'d-flex gap-05'}>
                                        <h3>XRP / </h3>
                                        <p className={'text-xxs'}>USDT</p>
                                    </div>
                                    <span className={'fw-700'}>355,251,00</span>
                                    <span className={'color-success'}>▲ 3.14 %</span>
                                </div>
                            </div>
                            <Image src={LongGreenChart}  alt={''} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default ElegantCard