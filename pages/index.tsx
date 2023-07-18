import Head from 'next/head'
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {NextSeo, NextSeoProps} from "next-seo";
import VerifyAccount from "../src/@vinu/components/index/VerifyAccount";
import ClassicCard from "../src/@vinu/components/cards/ClassicCard";
import HeaderBox from "../src/@vinu/components/general-components/HeaderBox";
import SimpleCard from "../src/@vinu/components/cards/SimpleCard";
import BoldCard from "../src/@vinu/components/cards/BoldCard";
import ElegantCard from "../src/@vinu/components/cards/ElegantCard";
import GroupOf3Cards from "../src/@vinu/components/index/GroupOf3Cards";

// const inter = Inter({ subsets: ['latin'] })

//Her sayfa için ayrı seo taglarını bu şekilde kullanabiliyoruz
const metaTags: NextSeoProps = {
    title: 'Vinusoft | Experienced Crypto Solutions',
    description: 'Automate your cryptocurrency investments with the best crypto copy trading platform. Follow the strategies of professional traders and maximize your earnings.',
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
            <BoldCard/>
            <HeaderBox
                title={'Top Holding'}
                date={''}
            />
            <ElegantCard/>
            <GroupOf3Cards/>
        </>
    )
}
export default Home

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
