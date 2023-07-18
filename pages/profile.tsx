import Head from 'next/head'
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {NextSeo, NextSeoProps} from "next-seo";
import ProfileTopBox from "../src/@vinu/components/profile/ProfileTopBox";
import Statistics from "../src/@vinu/components/profile/Statistics";
import WhoCopied from "../src/@vinu/components/profile/WhoCopied";
import Portfolio from "../src/@vinu/components/profile/Portfolio";
import Chart from "../src/@vinu/components/profile/Chart";
import TabView from "../src/@vinu/components/general-components/TabView";



//Her sayfa için ayrı seo taglarını bu şekilde kullanabiliyoruz
const metaTags: NextSeoProps = {
    title: 'Vinusoft | Copy Trade',
    description: 'As a blockchain development company, we offer turnkey technology services and customized solutions for crypto and blockchain.',
}

const WatchList = () => {
    // TabView kullanırken type olarak component veya content
    // olarak belirttigimizde ona göre işlem yaparak size sonuç verir content diyerek html girdi yapılabilir
    const tabData = [
        {
            tabTitle: 'Statistics',
            type: 'component',
            content: Statistics,
        },
        {
            tabTitle: 'Portfolio',
            type: 'component',
            content: Portfolio,
        },
        {
            tabTitle: 'Who Copied',
            type: 'component',
            content: WhoCopied,
        },
        {
            tabTitle: 'Chart',
            type: 'component',
            content: Chart,
        },
    ];

    return (
        <>
            <Head>
                <NextSeo {...metaTags} />
            </Head>

            <div className={'container'}>
                <ProfileTopBox/>
                <TabView data={tabData} />
            </div>
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
