import {useTranslation} from 'next-i18next'
import styles from './UserCard.module.scss'
import Image from 'next/image';
import user0img from '../../../../../public/assets/images/profile/user0.svg'
import user2img from '../../../../../public/assets/images/profile/user2.svg'
import user3img from '../../../../../public/assets/images/profile/user3.svg'
import user4img from '../../../../../public/assets/images/profile/user4.svg'
import SuccessChart from '../../../../../public/assets/images/others/successChart.svg'
import GreenFire from '../../../../../public/assets/images/others/greenFire.svg'

const UserCard = () => {
    // const {t} = useTranslation('index')

    const count = 10;
    return (
        <>
            <div className="container mt-3">

                <div className={styles.customCardWrapper}>
                    {[...Array(count)].map((_, index) => (

                        <div key={index} className={styles.boldCard}>
                            <div className={'flex-column-center'}>
                                <div className={styles.nameWrapped}>
                                    <Image src={user0img} width={150} alt={''}/>

                                    <div>
                                        <h3>Regina Cooper {index + 1}</h3>
                                        <button className={'tag tag-warning'}>
                                            Manager
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className={'between-center mt-05'}>
                                <h4>Location</h4>
                                <div className={'d-flex gap-05'}>
                                    <Image className={styles.flagObject}
                                         src={'https://raw.githubusercontent.com/hampusborgos/country-flags/ba2cf4101bf029d2ada26da2f95121de74581a4d/svg/tr.svg'}
                                         height={10} width={20} alt={''}/>
                                    <p>TR</p>
                                </div>
                            </div>
                            <div className={'between-center mt-05'}>
                                <h4>Email</h4>
                                <p>xxxx2@gmail.com</p>
                            </div>
                            <div className={'between-center mt-05'}>
                                <h4>Total Copies</h4>
                                <p>529</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}
export default UserCard