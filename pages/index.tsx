import Head from 'next/head'
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {NextSeo, NextSeoProps} from "next-seo";
import Hero from "../src/@vinu/components/home-page/Hero";
import About from "../src/@vinu/components/home-page/About";
import Services from "../src/@vinu/components/home-page/Services";
import Approach from "../src/@vinu/components/home-page/Approach";
import ContactForm from "../src/@vinu/components/home-page/ContactForm";
import Campaign from "../src/@vinu/components/home-page/Campaign";

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
            <Hero/>
            <About/>
            <Services/>
            <Approach/>
            <ContactForm/>
            <Campaign/>
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
