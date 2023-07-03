import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {NextSeo, NextSeoProps} from "next-seo";
import {useTranslation} from "next-i18next";
import SubPageCampaign from "../src/@vinu/components/general-components/SubPageCampaign";
import ContactDetailForm from "../src/@vinu/components/contact-page/ContactDetailForm";
import ContactMap from "../src/@vinu/components/contact-page/ContactMap";

const metaTags: NextSeoProps = {
    title: 'Vinusoft | How To Create Your Own Cryptocurrency Exchange Platform',
    description: 'If you want to use the crypto and blockchain software solutions of Vinu, an expert and experienced partner in the industry, contact us and let\'s talk about your opinion.',
    openGraph: {
        title: 'Vinusoft | How To Create Your Own Cryptocurrency Exchange Platform',
        description: 'If you want to use the crypto and blockchain software solutions of Vinu, an expert and experienced partner in the industry, contact us and let\'s talk about your opinion.',
    },
}

const ContactPage = () => {
    const {t} = useTranslation('contact')
    return (
        <>
            <NextSeo {...metaTags} />
            <div className={'subPageCircle'}/>
            <div className={'container mt-5'}>
                {/*<h1 className={'py-4'} data-aos="fade-right">{t('CONTACT.breadcrumb')}</h1>*/}
                <ContactMap/>
                <ContactDetailForm/>
                <SubPageCampaign
                    title={t('CONTACT.campaignTitle')}
                    desc={t('CONTACT.campaignTitle')}
                    buttonTitle={t('CONTACT.campaignButtonTitle')}
                    buttonUrl={'/exchange-features'}/>
            </div>
        </>
    )
}
export default ContactPage

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, [
                'contact',
                'common',
            ])),
        },
    }
}
