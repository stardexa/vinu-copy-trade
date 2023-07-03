import {useTranslation} from 'next-i18next'
import styles from './ContactForm.module.scss'
import Image from "next/image";
import ContactFormImg from '../../../../../public/assets/images/others/contactForm.webp'
import ContactInput from "../../general-components/ContactInput";

const ContactForm = () => {
    const {t} = useTranslation('home')
    return (
        <>
            <div className={'container my-4'}>
                <div className={'standart-row'}>
                    <div className={'card-wrapper-item-2'}>
                        <div>
                            <span className={'text-default'}>{t('HOME.conctactTagline')}</span>
                            <h2 className={'text-md color-primary'}>{t('HOME.contactTitle')}</h2>
                            <div className={'d-flex gap-1 my-1'}>
                                <span className={'slipBox'}/>
                                <span className={'slipBox'}/>
                                <span className={'slipBox'}/>
                            </div>
                            <p className={'color-desc mt-1'}>{t('HOME.contactDesc')}</p>
                            <div className={'mt-3'}>
                                <ContactInput/>
                            </div>
                        </div>
                        <div>
                            <Image src={ContactFormImg} alt={'Cryptocurrency exchange software'}
                                    className={styles.imgEnd} width={600} data-aos="fade-up"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactForm