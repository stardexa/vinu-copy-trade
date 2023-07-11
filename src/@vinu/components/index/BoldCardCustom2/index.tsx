import {useTranslation} from 'next-i18next'
import styles from './BoldCard.module.scss'
import Image from 'next/image';
import user1img from '../../../../../public/assets/images/profile/user1.svg'
import user2img from '../../../../../public/assets/images/profile/user2.svg'
import user3img from '../../../../../public/assets/images/profile/user3.svg'
import user4img from '../../../../../public/assets/images/profile/user4.svg'
import SuccessChart from '../../../../../public/assets/images/others/successChart.svg'
import GreenFire from '../../../../../public/assets/images/others/greenFire.svg'

const BoldCard = () => {
    // const {t} = useTranslation('index')
    return (
        <>
            <div className="container mt-3">
                <div className={'card-wrapper'}>
                    <div className={styles.boldCard}>
                        <div className={'flex-center gap-05'}>
                            <Image src={GreenFire} width={10} alt={''} className={styles.iconGap} />
                            <p className={'text-xs color-white'}>Çok Başarılı</p>
                        </div>
                        <div className={'flex-column-center'}>
                            <div className={styles.nameWrapped}>
                                <Image src={user1img} width={90} alt={''} />
                                <div>
                                    <h3>Barış Akarsu</h3>
                                    <p>@barisakarsu</p>
                                </div>
                            </div>
                        </div>
                        <p>
                            <button className={styles.customPlusButton} type={'button'}>
                                +
                            </button>
                        </p>
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
export default BoldCard