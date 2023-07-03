import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {NextSeo, NextSeoProps} from "next-seo";
import {useTranslation} from "next-i18next";
import Features from "../src/@vinu/components/exchange-features-page/Features";
import Security from "../src/@vinu/components/exchange-features-page/Security";
import Technology from "../src/@vinu/components/exchange-features-page/Technology";
import Performance from "../src/@vinu/components/exchange-features-page/Performance";
import TestResult from "../src/@vinu/components/exchange-features-page/TestResult";
// import Pricing from "../src/@vinu/components/exchange-features-page/Pricing";
import SomeImage from "../src/@vinu/components/exchange-features-page/SomeImage";

const metaTags: NextSeoProps = {
    title: 'Vinusoft | Cryptocurrency Exchange Software',
    description: 'Vinu Team provides First Class Order Matching Engine, Advanced Risk Engine, Professional TradingView Chart, Market Management, Market Maker System, Bank Management and more on Cryptocurrency Exchange Platform.',
    openGraph: {
        title: 'Vinusoft | Cryptocurrency Exchange Software',
        description: 'Vinu Team provides First Class Order Matching Engine, Advanced Risk Engine, Professional TradingView Chart, Market Management, Market Maker System, Bank Management and more on Cryptocurrency Exchange Platform.',
    },
}

const ExchangeFeaturesPage = () => {
    const {t} = useTranslation('exchange_features')
    return (
        <>
            <NextSeo {...metaTags} />
            <div className={'subPageCircle'}/>
            {/*<div className={'container'}>*/}
            {/*    <h1 className={'py-4'} data-aos="fade-right">{t('FEATURES.breadcrumb')}</h1>*/}
            {/*</div>*/}
            <Features/>
            <Security/>
            <Technology/>
            <Performance/>
            <TestResult/>
            {/*<Pricing />*/}
            <SomeImage/>

        </>
    )
}
export default ExchangeFeaturesPage

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, [
                'exchange_features',
                'common',
            ])),
        },
    }
}
