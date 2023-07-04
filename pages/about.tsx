import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {NextSeo, NextSeoProps} from "next-seo";
import {useTranslation} from "next-i18next";
import AboutDetail from "../src/@vinu/components/about-page/AboutDetail";

const metaTags: NextSeoProps = {
    title: 'Vinusoft | Advanced Crypto Software Solutions',
    description: 'With 6 years of experience in the crypto ecosystem, we are a trusted and leading company in cryptocurrency exchange development software and blockchain software development.',
    openGraph: {
        title: 'Vinusoft | Advanced Crypto Software Solutions',
        description: 'With 6 years of experience in the crypto ecosystem, we are a trusted and leading company in cryptocurrency exchange development software and blockchain software development.',
    },
}

const AboutPage = () => {
    const {t} = useTranslation('about')
    return (
        <>
            <NextSeo {...metaTags} />
            <div className={'subPageCircle'}/>
            {/*<div className={'container'}>*/}
            {/*    <h1 className={'py-4'} data-aos="fade-right">{t('ABOUT.breadcrumb')}</h1>*/}
            {/*</div>*/}
            <AboutDetail/>
            {/*<Portfolio />*/}
        </>
    )
}
export default AboutPage

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, [
                'about',
                'common',
            ])),
        },
    }
}
