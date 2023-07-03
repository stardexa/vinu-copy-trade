import { useTranslation } from 'next-i18next'
import styles from './Pricing.module.scss'
import Image from "next/image";
import PerformanceImg from '../../../../../public/assets/images/others/performance.svg'

const Pricing = () => {
    const { t } = useTranslation('exchange_features')
    return (
        <>
            <div className={'flex-column-center w50-auto my-3'} data-aos="fade-up">
                <h1 className={'text-lg color-primary'}>Pricing</h1>
                <div className={'d-flex gap-1 my-1'}>
                    <span className={'slipBox'} />
                    <span className={'slipBox'} />
                    <span className={'slipBox'} />
                </div>
                <p className={'text-xs'}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                    roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, </p>
            </div>
            <div className={'container'}>

            </div>
        </>
    )
}
export default Pricing