import React, {useState} from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import styles from './Sidenav.module.scss'
import vinuLogo from '../../../../public/assets/images/logo/logo.svg'
import Image from 'next/image'
import Link from '../../components/general-components/Link/Link'
import {sidenav} from '../../config/layout'
import {useTranslation} from 'next-i18next'
import {socialMedia} from "../../config/main";
import {CircleFlag} from "react-circle-flags";
import DropdownMenu from "../../components/general-components/DropdownMenu";
import {useRouter} from "next/router";
import useOutsideClick from "../../utils/useOutsideClick";

interface SidenavProps {
    state: boolean
    toggleDrawer: any
}

const Sidenav: React.FC<SidenavProps> = ({state, toggleDrawer}) => {
    const {locale} = useRouter()
    const [open, setOpen] = useState(false);
    const ref = useOutsideClick(() => setOpen(false))
    const {t} = useTranslation('common')

    return (
        <Drawer
            overlayOpacity={0.7}
            customIdSuffix={'vinu'}
            lockBackgroundScroll={true}
            open={state}
            direction='left'
            style={{background: 'var(--color-background)'}}
            onClose={toggleDrawer}
        >
            <div className={styles.sidenav}>
                <div className={styles.sidenavMenu}>
                    <div className={styles.sidenavHeader}>
                        <Link className={styles['sidenav-button']} href="/">
                            <Image
                                alt={'Vinu Logo'}
                                loading="lazy"
                                height={100}
                                width={100}
                                src={vinuLogo}
                                className={'mb-2'}
                            />

                        </Link>
                        <button
                            ref={ref}
                            className={[styles['selft-start'], 'btn-icon'].join(' ')}
                            onClick={() =>
                                setOpen(!open)
                            }
                        >
                            <CircleFlag
                                countryCode={
                                    locale === 'en'
                                        ? 'us'
                                        : locale === 'ko'
                                        ? 'kr'
                                        : locale!
                                }
                                alt={'Cryptocurrency exchange software'}
                                height='30'
                                width='30'
                            />
                            {open &&
                            <DropdownMenu open={open}/>
                            }
                        </button>
                    </div>

                    {sidenav.map((item) => (
                        <Link
                            key={item.label}
                            href={item.route}
                            onClick={toggleDrawer}
                            className={styles.sideButtons}
                        >
                            <item.icon className={styles.icons} fontSize="medium"/>
                            <p className={'ml-3'}>{t(item.label)}</p>
                        </Link>
                    ))}
                </div>

                <div className={styles.sidenavBottom}>
                    <p>{t('FOOTER.tagline')}</p>
                    <div className={styles['social-media-wrapper']}>
                        {socialMedia.map((item) => (
                            <Link
                                key={item.label}
                                title={item.label}
                                target="_blank"
                                href={item.url}
                            >
                                <item.icon fontSize="small"/>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

        </Drawer>

    )
}

export default Sidenav
