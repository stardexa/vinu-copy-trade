import {useTranslation} from 'next-i18next'
import styles from './BoldCard.module.scss'
import Image from 'next/image';
import user1img from '../../../../../public/assets/images/profile/user1.svg'
import user2img from '../../../../../public/assets/images/profile/user2.svg'
import user3img from '../../../../../public/assets/images/profile/user3.svg'
import user4img from '../../../../../public/assets/images/profile/user4.svg'
import SuccessChart from '../../../../../public/assets/images/others/successChart.svg'
import SoftChartGreen from '../../../../../public/assets/images/others/softChartGreen.svg'
import greenStar from '../../../../../public/assets/images/others/greenStar.svg'

const BoldCard = () => {
    // const {t} = useTranslation('index')
    return (
        <>
            <div className="container mt-3">
                <div className={styles.customCardWrapper}>
                    <div className={styles.boldCard}>
                        <div className={'flex-center gap-05'}>
                            <Image src={greenStar} width={10} alt={''} className={styles.iconGap} />
                            <p className={'text-xs color-white'}>Çok Başarılı</p>
                        </div>
                        <div className={'flex-column-center gap-05'}>
                            <div className={styles.nameWrapped}>
                                <Image src={user1img} width={90} alt={''} />
                                <div>
                                    <h3>Barış Akarsu</h3>
                                    <p className={'text-xxs'}>@barisakarsu</p>
                                </div>
                            </div>
                            <button className={styles.customPlusButton} type={'button'}>
                                +
                            </button>
                            <span className={'color-success'}>▲ 42,2%</span>
                            <Image src={SoftChartGreen} className={'ml-1'} alt={''} />
                        </div>
                        <div className={styles.flexColumnStart}>
                            <p className={'text-xxs'}>
                                RETURN
                            </p>
                            <span className={'color-white text-xxs'}>(LAST 12M)</span>
                        </div>
                        <hr/>
                        <div className={'flex-column mt-1'}>
                            <div className={'flex-column gap-05'}>
                                <span className={'text-xxs color-white'}>
                                    $510,02
                                    <span className={'color-desc ml-05'}>EARNING</span>
                                </span>
                                <span className={'text-xxs color-white'}>
                                        562
                                    <span className={'color-desc ml-05'}>COPIERS</span>
                                </span>
                                <span className={'text-xxs'}>
                                    <span className={'color-success'}>▲ 42,2%</span> LAST 7D
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.boldCard}>
                        <div className={'flex-center gap-05'}>
                            <Image src={greenStar} width={10} alt={''} className={styles.iconGap} />
                            <p className={'text-xs color-white'}>Çok Başarılı</p>
                        </div>
                        <div className={'flex-column-center gap-05'}>
                            <div className={styles.nameWrapped}>
                                <Image src={user4img} width={90} alt={''} />
                                <div>
                                    <h3>Barış Akarsu</h3>
                                    <p className={'text-xxs'}>@barisakarsu</p>
                                </div>
                            </div>
                            <button className={styles.customPlusButton} type={'button'}>
                                +
                            </button>
                            <span className={'color-success'}>▲ 42,2%</span>
                            <Image src={SoftChartGreen} className={'ml-1'} alt={''} />
                        </div>
                        <div className={styles.flexColumnStart}>
                            <p className={'text-xxs'}>
                                RETURN
                            </p>
                            <span className={'color-white text-xxs'}>(LAST 12M)</span>
                        </div>
                        <hr/>
                        <div className={'flex-column mt-1'}>
                            <div className={'flex-column gap-05'}>
                                <span className={'text-xxs color-white'}>
                                    $510,02
                                    <span className={'color-desc ml-05'}>EARNING</span>
                                </span>
                                <span className={'text-xxs color-white'}>
                                        562
                                    <span className={'color-desc ml-05'}>COPIERS</span>
                                </span>
                                <span className={'text-xxs'}>
                                    <span className={'color-success'}>▲ 42,2%</span> LAST 7D
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.boldCard}>
                        <div className={'flex-center gap-05'}>
                            <Image src={greenStar} width={10} alt={''} className={styles.iconGap} />
                            <p className={'text-xs color-white'}>Çok Başarılı</p>
                        </div>
                        <div className={'flex-column-center gap-05'}>
                            <div className={styles.nameWrapped}>
                                <Image src={user3img} width={90} alt={''} />
                                <div>
                                    <h3>Barış Akarsu</h3>
                                    <p className={'text-xxs'}>@barisakarsu</p>
                                </div>
                            </div>
                            <button className={styles.customPlusButton} type={'button'}>
                                +
                            </button>
                            <span className={'color-success'}>▲ 42,2%</span>
                            <Image src={SoftChartGreen} className={'ml-1'} alt={''} />
                        </div>
                        <div className={styles.flexColumnStart}>
                            <p className={'text-xxs'}>
                                RETURN
                            </p>
                            <span className={'color-white text-xxs'}>(LAST 12M)</span>
                        </div>
                        <hr/>
                        <div className={'flex-column mt-1'}>
                            <div className={'flex-column gap-05'}>
                                <span className={'text-xxs color-white'}>
                                    $510,02
                                    <span className={'color-desc ml-05'}>EARNING</span>
                                </span>
                                <span className={'text-xxs color-white'}>
                                        562
                                    <span className={'color-desc ml-05'}>COPIERS</span>
                                </span>
                                <span className={'text-xxs'}>
                                    <span className={'color-success'}>▲ 42,2%</span> LAST 7D
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.boldCard}>
                        <div className={'flex-center gap-05'}>
                            <Image src={greenStar} width={10} alt={''} className={styles.iconGap} />
                            <p className={'text-xs color-white'}>Çok Başarılı</p>
                        </div>
                        <div className={'flex-column-center gap-05'}>
                            <div className={styles.nameWrapped}>
                                <Image src={user2img} width={90} alt={''} />
                                <div>
                                    <h3>Barış Akarsu</h3>
                                    <p className={'text-xxs'}>@barisakarsu</p>
                                </div>
                            </div>
                            <button className={styles.customPlusButton} type={'button'}>
                                +
                            </button>
                            <span className={'color-success'}>▲ 42,2%</span>
                            <Image src={SoftChartGreen} className={'ml-1'} alt={''} />
                        </div>
                        <div className={styles.flexColumnStart}>
                            <p className={'text-xxs'}>
                                RETURN
                            </p>
                            <span className={'color-white text-xxs'}>(LAST 12M)</span>
                        </div>

                        <hr/>
                        <div className={'flex-column mt-1'}>
                            <div className={'flex-column gap-05'}>
                                <span className={'text-xxs color-white'}>
                                    $510,02
                                    <span className={'color-desc ml-05'}>EARNING</span>
                                </span>
                                <span className={'text-xxs color-white'}>
                                        562
                                    <span className={'color-desc ml-05'}>COPIERS</span>
                                </span>
                                <span className={'text-xxs'}>
                                    <span className={'color-success'}>▲ 42,2%</span> LAST 7D
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.boldCard}>
                        <div className={'flex-center gap-05'}>
                            <Image src={greenStar} width={10} alt={''} className={styles.iconGap} />
                            <p className={'text-xs color-white'}>Çok Başarılı</p>
                        </div>
                        <div className={'flex-column-center gap-05'}>
                            <div className={styles.nameWrapped}>
                                <Image src={user1img} width={90} alt={''} />
                                <div>
                                    <h3>Barış Akarsu</h3>
                                    <p className={'text-xxs'}>@barisakarsu</p>
                                </div>
                            </div>
                            <button className={styles.customPlusButton} type={'button'}>
                                +
                            </button>
                            <span className={'color-success'}>▲ 42,2%</span>
                            <Image src={SoftChartGreen} className={'ml-1'} alt={''} />
                        </div>
                        <div className={styles.flexColumnStart}>
                            <p className={'text-xxs'}>
                                RETURN
                            </p>
                            <span className={'color-white text-xxs'}>(LAST 12M)</span>
                        </div>
                        <hr/>
                        <div className={'flex-column mt-1'}>
                            <div className={'flex-column gap-05'}>
                                <span className={'text-xxs color-white'}>
                                    $510,02
                                    <span className={'color-desc ml-05'}>EARNING</span>
                                </span>
                                <span className={'text-xxs color-white'}>
                                    562
                                    <span className={'color-desc ml-05'}>COPIERS</span>
                                </span>
                                <span className={'text-xxs'}>
                                    <span className={'color-success'}>▲ 42,2%</span> LAST 7D
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BoldCard