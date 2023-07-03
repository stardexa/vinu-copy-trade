import { NextPage } from 'next'
import Footer from './footer/Footer'
import Sidenav from './sidenav/Sidenav'
import Toolbar from './toolbar/Toolbar'
import { PropsWithChildren, useState } from 'react'

const Layout: NextPage<PropsWithChildren> = (props) => {
    const [open, setOpen] = useState(false)
    const toggleDrawer = () => {
        setOpen((prevState) => !prevState)
    }

    return (
        <>
            <Toolbar toggleDrawer={toggleDrawer} />
            <Sidenav state={open} toggleDrawer={toggleDrawer} />
            <main>{props.children}</main>
            <Footer />
        </>
    )
}

export default Layout
