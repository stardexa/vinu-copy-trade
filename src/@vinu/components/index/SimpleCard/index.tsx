import {useTranslation} from 'next-i18next'
import styles from './SimpleCard.module.scss'
import Image from 'next/image';
import user1img from '../../../../../public/assets/images/profile/user1.svg'
import user2img from '../../../../../public/assets/images/profile/user2.svg'
import user3img from '../../../../../public/assets/images/profile/user3.svg'
import user4img from '../../../../../public/assets/images/profile/user4.svg'
import SuccessChart from '../../../../../public/assets/images/others/successChart.svg'
import GreenFire from "../../../../../public/assets/images/others/green-fire.svg";

const SimpleCard = () => {
    // const {t} = useTranslation('index')
    return (
        <>
            <div className="container">
                <div className={'card-wrapper'}>
                    <div className={styles.classicCard}>
                        <div className={'between-center'}>
                            <div className={styles.nameWrapped}>
                                <Image src={user1img} width={30} alt={''} />
                                <h5>barisakarsu</h5>
                                <p>|</p>
                                <div className={'flex-start'}>
                                    <Image src={GreenFire} width={10} alt={''} className={styles.iconGap} />
                                    <p className={'text-xxs'}>Çok Başarılı</p>
                                </div>
                            </div>
                            <button className={styles.customPlusButton} type={'button'}>
                                +
                            </button>
                        </div>
                        <div className={'between-center mt-1'}>
                            <div className={'flex-column'}>
                                <div className={'flex-center gap-1'}>
                                    <h4 className={'color-success'}>▲ 42,2%</h4>
                                    <span className={'text-xxs'}>RETURN <span className={'color-white'}>(LAST 12M)</span></span>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className={'between-center mt-05'}>
                            <div className={'flex-column'}>
                                <div className={'flex-center gap-1'}>
                                    <span className={'text-xxs color-white'}>
                                        $510,02
                                        <span className={'color-desc ml-05'}>EARNING</span>
                                    </span>
                                    <span className={'text-xxs color-white'}>
                                        562
                                        <span className={'color-desc ml-05'}>COPIERS</span>
                                    </span>
                                </div>
                            </div>
                            <button className={styles.customRiskButton}>
                                3 risk
                            </button>
                        </div>
                    </div>

                    <div className={styles.classicCard}>
                        <div className={'between-center'}>
                            <div className={styles.nameWrapped}>
                                <Image src={user2img} width={30} alt={''} />
                                <h5>barisakarsu</h5>
                                <p>|</p>
                                <div className={'flex-start'}>
                                    <Image src={GreenFire} width={10} alt={''} className={styles.iconGap} />
                                    <p className={'text-xxs'}>Çok Başarılı</p>
                                </div>
                            </div>
                            <button className={styles.customPlusButton} type={'button'}>
                                +
                            </button>
                        </div>
                        <div className={'between-center mt-1'}>
                            <div className={'flex-column'}>
                                <div className={'flex-center gap-1'}>
                                    <h4 className={'color-success'}>▲ 42,2%</h4>
                                    <span className={'text-xxs'}>RETURN <span className={'color-white'}>(LAST 12M)</span></span>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className={'between-center mt-05'}>
                            <div className={'flex-column'}>
                                <div className={'flex-center gap-1'}>
                                    <span className={'text-xxs color-white'}>
                                        $510,02
                                        <span className={'color-desc ml-05'}>EARNING</span>
                                    </span>
                                    <span className={'text-xxs color-white'}>
                                        562
                                        <span className={'color-desc ml-05'}>COPIERS</span>
                                    </span>
                                </div>
                            </div>
                            <button className={styles.customRiskButton}>
                                3 risk
                            </button>
                        </div>
                    </div>

                    <div className={styles.classicCard}>
                        <div className={'between-center'}>
                            <div className={styles.nameWrapped}>
                                <Image src={user3img} width={30} alt={''} />
                                <h5>barisakarsu</h5>
                                <p>|</p>
                                <div className={'flex-start'}>
                                    <Image src={GreenFire} width={10} alt={''} className={styles.iconGap} />
                                    <p className={'text-xxs'}>Çok Başarılı</p>
                                </div>
                            </div>
                            <button className={styles.customPlusButton} type={'button'}>
                                +
                            </button>
                        </div>
                        <div className={'between-center mt-1'}>
                            <div className={'flex-column'}>
                                <div className={'flex-center gap-1'}>
                                    <h4 className={'color-success'}>▲ 42,2%</h4>
                                    <span className={'text-xxs'}>RETURN <span className={'color-white'}>(LAST 12M)</span></span>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className={'between-center mt-05'}>
                            <div className={'flex-column'}>
                                <div className={'flex-center gap-1'}>
                                    <span className={'text-xxs color-white'}>
                                        $510,02
                                        <span className={'color-desc ml-05'}>EARNING</span>
                                    </span>
                                    <span className={'text-xxs color-white'}>
                                        562
                                        <span className={'color-desc ml-05'}>COPIERS</span>
                                    </span>
                                </div>
                            </div>
                            <button className={styles.customRiskButton}>
                                3 risk
                            </button>
                        </div>
                    </div>

                    <div className={styles.classicCard}>
                        <div className={'between-center'}>
                            <div className={styles.nameWrapped}>
                                <Image src={user4img} width={30} alt={''} />
                                <h5>barisakarsu</h5>
                                <p>|</p>
                                <div className={'flex-start'}>
                                    <Image src={GreenFire} width={10} alt={''} className={styles.iconGap} />
                                    <p className={'text-xxs'}>Çok Başarılı</p>
                                </div>
                            </div>
                            <button className={styles.customPlusButton} type={'button'}>
                                +
                            </button>
                        </div>
                        <div className={'between-center mt-1'}>
                            <div className={'flex-column'}>
                                <div className={'flex-center gap-1'}>
                                    <h4 className={'color-success'}>▲ 42,2%</h4>
                                    <span className={'text-xxs'}>RETURN <span className={'color-white'}>(LAST 12M)</span></span>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className={'between-center mt-05'}>
                            <div className={'flex-column'}>
                                <div className={'flex-center gap-1'}>
                                    <span className={'text-xxs color-white'}>
                                        $510,02
                                        <span className={'color-desc ml-05'}>EARNING</span>
                                    </span>
                                    <span className={'text-xxs color-white'}>
                                        562
                                        <span className={'color-desc ml-05'}>COPIERS</span>
                                    </span>
                                </div>
                            </div>
                            <button className={styles.customRiskButton}>
                                3 risk
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SimpleCard