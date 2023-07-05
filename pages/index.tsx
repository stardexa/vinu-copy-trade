import Head from 'next/head'
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {NextSeo, NextSeoProps} from "next-seo";
import VerifyAccount from "../src/@vinu/components/index/VerifyAccount";

// const inter = Inter({ subsets: ['latin'] })

const metaTags: NextSeoProps = {
    title: 'Vinusoft | Experienced Crypto Solutions',
    description: 'As a blockchain development company, we offer turnkey technology services and customized solutions for crypto and blockchain.',
}

const Home = () => {
    return (
        <>
            <Head>
                <NextSeo {...metaTags} />
            </Head>
            <VerifyAccount/>
        </>
    )
}
export default Home

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, [
                'home',
                'contact',
                'common',
            ])),
        },
    }
}
