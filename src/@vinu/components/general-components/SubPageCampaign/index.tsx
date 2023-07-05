import {useTranslation} from 'next-i18next'
import styles from './SubPageCampaign.module.scss'
import Link from "next/link";
import React from "react";
import Image from "next/image";
import BandImg from '/public/assets/images/others/band.webp'

interface SubPageCampaignProps {
    title: string
    desc: string
    buttonTitle: string
    buttonUrl: string
}

const SubPageCampaign: React.FC<SubPageCampaignProps> = ({title, desc, buttonTitle, buttonUrl}) => {

    const {t} = useTranslation('common')
    return (
        <>
            <div className={'container my-5 p-0'}>
                <div className={styles.heroCard}>
                    <div className={'card-wrapper-item-2 between-center'}>
                        <div>
                            <h2 className={'text-s  color-white my-1'} data-aos="fade-right"><b>{title}</b></h2>
                            <p className={'text-xs'} data-aos="fade-right">{desc}</p>
                        </div>
                        <div className={'flex-end'}>
                            <Link href={buttonUrl} className={'btn btn-white-outline'}
                                  data-aos="fade-up">{buttonTitle}</Link>
                        </div>
                        <Image src={BandImg} alt={'Cryptocurrency exchange software'} className={styles.band}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SubPageCampaign