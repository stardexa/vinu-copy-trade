import Head from 'next/head'
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {NextSeo, NextSeoProps} from "next-seo";
import ProfileTopBox from "../src/@vinu/components/profile/ProfileTopBox";



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

            <div className={'container'}>
                <ProfileTopBox/>
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
