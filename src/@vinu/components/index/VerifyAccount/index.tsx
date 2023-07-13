import {useTranslation} from 'next-i18next'
import styles from './VerifyAccount.module.scss'
import Image from "next/image";
import VerifyImg from '../../../../../public/assets/images/others/verifyImage.svg'

const AboutDetail = () => {
    const {t} = useTranslation('about')
    return (
        <>
            <div className={'container mt-5'}>
                <div className={styles.verifyBox}>
                    <div className={'card-wrapper-item-2'}>
                        <div className={'pa-2'}>
                            <h1 className={'text-md'}>Welcome to VinuTrade!</h1>
                            <p>Verify your account to start investing.</p>
                            <button className={'btn btn-success-outline mt-1'}>Verify</button>
                        </div>
                        <Image src={VerifyImg} className={styles.verifyImage} alt={'Cryptocurrency exchange software'} width={300}
                               data-aos="fade-right"/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutDetail