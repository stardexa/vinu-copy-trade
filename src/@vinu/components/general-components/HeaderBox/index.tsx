import {useTranslation} from 'next-i18next'
import styles from './HeaderBox.module.scss'
import {useState} from "react";
import Image from 'next/image';
import GreenFireImg from '../../../../../public/assets/images/others/greenFire.svg'

const HeaderBox = ({title,date}:any) => {

    return (
        <>
            <div className={'container-fluid my-2'} datatype={'cardBg'}>
                <div className={'container flex-start'}>
                    <Image src={GreenFireImg} alt={'Vinu Trade Fire'} width={13} height={13} />
                    <div className={styles.headerBox}>
                        <h3>{title}</h3>
                        <p>{date}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeaderBox