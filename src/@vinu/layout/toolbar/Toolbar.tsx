import {useTranslation} from 'next-i18next'
import React, {useState} from 'react'
import {HiMenuAlt4} from 'react-icons/hi'
import Image from 'next/image'
import Logo from '../../../../public/assets/images/logo/logo.svg'
import styles from './Toolbar.module.scss'
import Link from '../../components/general-components/Link/Link'
import {CircleFlag} from 'react-circle-flags'
import {toolbarNav} from '../../config/layout'
import DropdownMenu from "../../components/general-components/DropdownMenu";
import {useRouter} from "next/router";
import useOutsideClick from "../../utils/useOutsideClick";

interface ToolbarProps {
    toggleDrawer: any
}

const Toolbar: React.FC<ToolbarProps> = ({toggleDrawer}) => {
    const {locale} = useRouter()
    const [open, setOpen] = useState(false);
    const ref = useOutsideClick(() => setOpen(false))
    const {t} = useTranslation('common')

    return (
        <>

            <div className="bg-animation">
                <div id="stars"/>
                <div id="stars2"/>
                <div id="stars3"/>
                <div id="stars4"/>
            </div>

            <nav className={'container pt-2'}>
                <div className={'row-wrapper '}>
                    <Link href="/">
                        <Image width={150} height={50} src={Logo} loading="lazy" alt={'Vinu Logo'}/>
                    </Link>
                    <button
                        aria-label='Navigation Menu'
                        onClick={toggleDrawer}
                        className={`${styles.hamburgerMenu} btn-icon`}
                    >
                        <HiMenuAlt4 fontSize={25}/>
                    </button>
                    <div className={styles.navMenu}>
                        <div className={'d-flex mr-1'}>
                            {toolbarNav.map((link) => (
                                <Link key={link.label} href={{pathname: link.route}} className={styles.navigationItem}>
                                    {t(link.label)}
                                </Link>
                            ))}
                        </div>
                        <button
                            ref={ref}
                            className='btn-icon'
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

                </div>
            </nav>
        </>
    )
}

export default Toolbar
