import Head from 'next/head'
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {NextSeo, NextSeoProps} from "next-seo";
import VerifyAccount from "../src/@vinu/components/index/VerifyAccount";
import ClassicCard from "../src/@vinu/components/index/ClassicCard";
import HeaderBox from "../src/@vinu/components/general-components/HeaderBox";
import SimpleCard from "../src/@vinu/components/index/SimpleCard";

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
            <HeaderBox
                title={'ROI’ye Göre En İyi Yatırımcılar'}
                date={'7gün'}
            />
            <ClassicCard/>
            <HeaderBox
                title={'Takipçilerine En Yüksek Kâr Kazandıran Yatırımcılar'}
                date={'7gün'}
            />
            <SimpleCard/>
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
