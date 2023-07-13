import Head from 'next/head'
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {NextSeo, NextSeoProps} from "next-seo";
import HeaderBox from "../src/@vinu/components/general-components/HeaderBox";
import ElegantCard from "../src/@vinu/components/index/ElegantCard";
import CryptoTable from "../src/@vinu/components/watchlist/CryptoTable";

// const inter = Inter({ subsets: ['latin'] })

//Her sayfa için ayrı seo taglarını bu şekilde kullanabiliyoruz
const metaTags: NextSeoProps = {
    title: 'Vinusoft | Copy Trade',
    description: 'As a blockchain development company, we offer turnkey technology services and customized solutions for crypto and blockchain.',
}

const WatchList = () => {
    return (
        <>
            <Head>
                <NextSeo {...metaTags} />
            </Head>
            <HeaderBox
                title={'Top Holding'}
                date={''}
            />
            <ElegantCard/>
            <CryptoTable/>


        </>
    )
}
export default WatchList

// Todo:Dil ekledigimizde aktif yapılcak
// export const getStaticProps: GetStaticProps = async ({locale}) => {
//     return {
//         props: {
//             ...(await serverSideTranslations(locale!, [
//                 'home',
//                 'contact',
//                 'common',
//             ])),
//         },
//     }
// }
