import {useTranslation} from 'next-i18next'
import styles from './ContactMap.module.scss'
import Image from "next/image";
import ContactImg from '../../../../../public/assets/images/others/contactMap.svg'
import {FaPhoneAlt} from 'react-icons/fa'
import {HiOutlineMail, HiLocationMarker} from 'react-icons/hi'

const ContactMap = () => {
    const {t} = useTranslation('contact')
    return (
        <>
            <div className={'standart-row'}>
                <div className={'flex-column-center'} data-aos="fade-up">
                    <h1 className={'text-lg color-primary'}>{t('CONTACT.title')}</h1>
                    <div className={'d-flex gap-1 my-1'}>
                        <span className={'slipBox'}/>
                        <span className={'slipBox'}/>
                        <span className={'slipBox'}/>
                    </div>
                </div>

                <div className={'flex-center my-3 relative'}>
                    <Image src={ContactImg} alt={'Cryptocurrency exchange software'} width={900} data-aos="fade-up"/>
                    <div className={styles.glassBox} data-aos="fade-left">
                        <h4 className={'text-default'}><b>{t('CONTACT.addressBoxTitle')}</b></h4>
                        <p>{t('CONTACT.addressBoxDesc')}</p>
                    </div>
                </div>

                <div className={styles.contactBar}>
                    <div data-aos="fade-up">
                        <h2>{t('CONTACT.subTitle')}</h2>
                        <p className={'color-desc'}>{t('CONTACT.detail')}</p>
                    </div>
                    <p data-aos="fade-up" className={'color-desc mt-1'}><HiLocationMarker
                        color={'inherit'}/> {t('CONTACT.address')}</p>
                    <div data-aos="fade-up">
                        {/*<p className={'color-desc mt-1'}><FaPhoneAlt color={'inherit'}/> {t('CONTACT.phone')}</p>*/}
                        <p className={'color-desc mt-1'}><HiOutlineMail color={'inherit'}/> {t('CONTACT.email')}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactMap