import {useTranslation} from 'next-i18next'
import styles from './ClassicCard.module.scss'
import Image from 'next/image';
import user1img from '../../../../../public/assets/images/profile/user1.svg'
import user2img from '../../../../../public/assets/images/profile/user2.svg'
import user3img from '../../../../../public/assets/images/profile/user3.svg'
import user4img from '../../../../../public/assets/images/profile/user4.svg'
import SuccessChart from '../../../../../public/assets/images/others/successChart.svg'
import GreenFire from '../../../../../public/assets/images/others/greenFire.svg'

const ClassicCard = () => {
    // const {t} = useTranslation('index')
    return (
        <>
            <div className="container">
                <div className={'card-wrapper'}>
                    <div className={styles.classicCard}>
                        <div className={'between-center'}>
                            <div className={styles.nameWrapped}>
                                <Image src={user1img} width={50} alt={''} />
                                <div>
                                    <h3>Barış Akarsu</h3>
                                    <p>@barisakarsu</p>
                                </div>
                            </div>
                            <p>
                                159 Takipçi
                                <button className={styles.customPlusButton} type={'button'}>
                                    +
                                </button>
                            </p>
                        </div>
                        <hr/>
                        <div className={'between-center mt-1'}>
                            <div className={'flex-column'}>
                                <h3>ROI / <span className={'text-xs'}>7gün</span></h3>
                                <div>
                                    <span className={'color-success'}>3.34 %</span>
                                    <Image src={SuccessChart} className={'ml-1'} alt={''} />
                                </div>
                            </div>
                            <div className={'flex-column'} datatype={'end'}>
                                <h3>$39,387.48</h3>
                                <p>Yönetilen Varlık</p>
                            </div>

                        </div>
                    </div>

                    <div className={styles.classicCard}>
                        <div className={'between-center'}>
                            <div className={styles.nameWrapped}>
                                <Image src={user2img} width={50} alt={''} />
                                <div>
                                    <h3>Barış Akarsu</h3>
                                    <p>@barisakarsu</p>
                                </div>
                            </div>
                            <p>
                                159 Takipçi
                                <button className={styles.customPlusButton} type={'button'}>
                                    +
                                </button>
                            </p>
                        </div>
                        <hr/>
                        <div className={'between-center mt-1'}>
                            <div className={'flex-column'}>
                                <h3>ROI / <span className={'text-xs'}>7gün</span></h3>
                                <div>
                                    <span className={'color-success'}>3.34 %</span>
                                    <Image src={SuccessChart} className={'ml-1'} alt={''} />
                                </div>
                            </div>
                            <div className={'flex-column'} datatype={'end'}>
                                <h3>$39,387.48</h3>
                                <p>Yönetilen Varlık</p>
                            </div>

                        </div>
                    </div>

                    <div className={styles.classicCard}>
                        <div className={'between-center'}>
                            <div className={styles.nameWrapped}>
                                <Image src={user3img} width={50} alt={''} />
                                <div>
                                    <h3>Barış Akarsu</h3>
                                    <p>@barisakarsu</p>
                                </div>
                            </div>
                            <p>
                                159 Takipçi
                                <button className={styles.customPlusButton} type={'button'}>
                                    +
                                </button>
                            </p>
                        </div>
                        <hr/>
                        <div className={'between-center mt-1'}>
                            <div className={'flex-column'}>
                                <h3>ROI / <span className={'text-xs'}>7gün</span></h3>
                                <div>
                                    <span className={'color-success'}>3.34 %</span>
                                    <Image src={SuccessChart} className={'ml-1'} alt={''} />
                                </div>
                            </div>
                            <div className={'flex-column'} datatype={'end'}>
                                <h3>$39,387.48</h3>
                                <p>Yönetilen Varlık</p>
                            </div>

                        </div>
                    </div>

                    <div className={styles.classicCard}>
                        <div className={'between-center'}>
                            <div className={styles.nameWrapped}>
                                <Image src={user4img} width={50} alt={''} />
                                <div>
                                    <h3>Barış Akarsu</h3>
                                    <p>@barisakarsu</p>
                                </div>
                            </div>
                            <p>
                                159 Takipçi
                                <button className={styles.customPlusButton} type={'button'}>
                                    +
                                </button>
                            </p>
                        </div>
                        <hr/>
                        <div className={'between-center mt-1'}>
                            <div className={'flex-column'}>
                                <h3>ROI / <span className={'text-xs'}>7gün</span></h3>
                                <div>
                                    <span className={'color-success'}>3.34 %</span>
                                    <Image src={SuccessChart} className={'ml-1'} alt={''} />
                                </div>
                            </div>
                            <div className={'flex-column'} datatype={'end'}>
                                <h3>$39,387.48</h3>
                                <p>Yönetilen Varlık</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default ClassicCard