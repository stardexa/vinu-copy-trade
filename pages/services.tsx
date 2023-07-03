import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {NextSeo, NextSeoProps} from "next-seo";
import {useTranslation} from "next-i18next";
import AllServices from "../src/@vinu/components/services-page/AllServices";
import SubPageCampaign from "../src/@vinu/components/general-components/SubPageCampaign";

const metaTags: NextSeoProps = {
    title: 'Vinusoft | Best Blockchain & Crypto Solutions',
    description: 'We develop software development projects: cryptocurrency exchange, token development, smart contracts, and blockchain ecosystem applications and more.\n',
    openGraph: {
        title: 'Vinusoft | Best Blockchain & Crypto Solutions',
        description: 'We develop software development projects: cryptocurrency exchange, token development, smart contracts, and blockchain ecosystem applications and more.\n',
    },
}

const ServicesPage = () => {
    const {t} = useTranslation('services')
    return (
        <>
            <NextSeo {...metaTags} />
            <div className={'subPageCircle'}/>
            {/*<div className={'container'}>*/}
            {/*    <h1 className={'py-4'} data-aos="fade-right">{t('SERVICES.breadcrumb')}</h1>*/}
            {/*</div>*/}
            <AllServices/>
            <SubPageCampaign
                title={t('SERVICES.campaignTitle')}
                desc={t('SERVICES.campaignTitle')}
                buttonTitle={t('SERVICES.campaignButtonTitle')}
                buttonUrl={'/contact'}/>
        </>
    )
}
export default ServicesPage

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, [
                'services',
                'common',
            ])),
        },
    }
}
