import {useTranslation} from 'next-i18next'
import styles from './ContactDetailForm.module.scss'
import ContactInput from "../../general-components/ContactInput";

const ContactDetailForm = () => {
    const {t} = useTranslation('contact')
    return (
        <>
            <div className={'container my-4'}>
                <div className={'standart-row text-center'}>
                    <div>
                        <span className={'text-default'}>{t('CONTACT.tagline')}</span>
                        <h2 className={'text-md color-primary'}>{t('CONTACT.formTitle')}</h2>
                        <div className={'flex-center gap-1 my-1 '}>
                            <span className={'slipBox'}/>
                            <span className={'slipBox'}/>
                            <span className={'slipBox'}/>
                        </div>
                        <div className={'mt-3'}>
                            <ContactInput/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactDetailForm