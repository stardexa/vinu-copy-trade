import {useTranslation} from 'next-i18next'
import styles from './AllServices.module.scss'
import Link from "next/link";
import Image from 'next/image'
import BandImg from '/public/assets/images/others/band.webp'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import * as React from 'react';

const AllServices = () => {
    const [value, setValue] = React.useState(0);

    const {t} = useTranslation('services')
    return (
        <>
            <div className={'flex-column-center mt-5'} data-aos="fade-down">
                <h1 className={'text-lg color-primary'}>{t('SERVICES.title')}</h1>
                <div className={'d-flex gap-1 my-1'}>
                    <span className={'slipBox'}/>
                    <span className={'slipBox'}/>
                    <span className={'slipBox'}/>
                </div>
            </div>
            <Tabs value={value} onSelect={(index) => setValue(index)}>
                <div className={['container mb-5 mt-2', styles['servicesBox']].join(' ')}>
                    <div className={styles.sideBackShape}/>
                    <div className={styles.contentBackShape}/>

                    <div className={styles.sideBar}>
                        <h2 data-aos="fade-right" className={'text-s  color-white my-1'}><b>All Services</b></h2>
                        <TabList style={{display: "flex", flexDirection: 'column'}}>
                            {[...Array(10)].map((e, i) => (
                                <Tab key={i}>{t(`SERVICES.serviceTitle${i + 1}`)}</Tab>
                            ))}
                        </TabList>
                    </div>
                    <div className={styles.contentBox}>
                        {[...Array(10)].map((e, i) => ((
                            <TabPanel value={value} key={i}>
                                <h2 className={'text-md mb-2'} data-aos="fade-left">
                                    <b>{t(`SERVICES.serviceTitle${i + 1}`)}</b>
                                </h2>
                                <p className={'color-desc'} data-aos="fade-down"
                                   dangerouslySetInnerHTML={{__html: t(`SERVICES.serviceDesc${i + 1}`)}}/>
                            </TabPanel>)))}
                        <Image src={BandImg} alt={'Cryptocurrency exchange software'} className={styles.band}/>
                    </div>

                </div>
            </Tabs>
            <div className={styles.titleBox}>
                <div className={'container py-2'}>
                    <span className={'text-default color-desc'}
                          data-aos="fade-up">{t('SERVICES.exchangeTagline')}</span>
                    <h1 className={'text-lg color-primary'} data-aos="fade-up">{t('SERVICES.exchangeTitle')}</h1>
                    <Link href={'/exchange-features'} data-aos="fade-up">{t('SERVICES.exchangeButton')}</Link>
                </div>
            </div>
        </>
    )
}
export default AllServices