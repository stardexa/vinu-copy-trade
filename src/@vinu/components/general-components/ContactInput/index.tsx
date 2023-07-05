import {useTranslation} from 'next-i18next'
import styles from './ContactInput.module.scss'
import {useState} from "react";
import { sendContactForm } from "../../../services/api";

const initValues = {email: "", subject: "", message: ""}
const initState = {values: initValues}

const ContactInput = () => {
    const [state, setState] = useState(initState);
    const handleChange = ({target}:any) =>
        setState((prev => ({
            ...prev,
            values: {
                ...prev.values,
                [target.name]: target.value,
            }
        })));
    const {values,isLoading,error,success}:any = state;
    const onSubmit = async () => {
        setState((prev) => ({
            ...prev,
            isLoading:true,
        }))
        try {
            await sendContactForm(values);
            setState(initState);
            setState((prev) => ({
                ...prev,
                success: "Message sent.",
            }));
        } catch (error:any) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error.message,
            }));
        }
    }
    const {t} = useTranslation('contact')
    return (
        <>
            <div className={styles.inputBox}>
                {success && (
                    <span className={styles.success} >
                        {success}
                    </span>
                )}
                {error && (
                    <span className={styles.danger} >
                        {error}
                    </span>
                )}
                <form className={styles.formCustom} onSubmit={onSubmit} action={'javascript:void(0)'}>
                    <input type="email"
                           name={'email'}
                           value={values.email}
                           onChange={handleChange}
                           placeholder={`${t('CONTACT.inputEmail')}`}
                           data-aos="fade-right"/>
                    <input type="text"
                           name={'subject'}
                           value={values.subject}
                           onChange={handleChange}
                           placeholder={`${t('CONTACT.inputSubject')}`}
                           data-aos="fade-right"/>
                    <textarea name={'message'}
                              value={values.message}
                              onChange={handleChange}
                              cols={30} rows={10} placeholder={`${t('CONTACT.inputMessage')}`}
                              data-aos="fade-right"/>
                    <button type={"submit"}
                            disabled={isLoading === true || !values.email || !values.subject || !values.message}
                            className={styles.buttonCustom}
                            data-aos="fade-right">
                        <span className={isLoading === true ? styles.loader : ''}/>
                        {t('CONTACT.inputButton')}
                    </button>

                </form>
            </div>
        </>
    )
}
export default ContactInput