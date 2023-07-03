import type {AppProps, NextWebVitalsMetric} from 'next/app'
import '../src/styles/styles.scss'
import {appWithTranslation} from "next-i18next";
import {DefaultSeo} from 'next-seo'
import {defaultMetaTags, generateAltUrls} from '../src/@vinu/services/seo'
import Layout from '../src/@vinu/layout/Layout'
import React, {useEffect} from "react";
import Aos from "aos";
import Script from 'next/script'
// import * as gtag from '../src/@vinu/services/gtag'

const MyApp = (props: AppProps) => {

    const {
        Component,
        pageProps,
        router,
    } = props
    const {asPath, locale, locales, defaultLocale,events} = router
    const {currentUrl, alternateUrls} = generateAltUrls(
        defaultLocale!,
        locale!,
        locales!,
        asPath,
    )
    useEffect(() => {
        Aos.init({
            easing: "ease-out-cubic",
            once: false,
            offset: 50,
        });
    }, []);
    return (
        <>
            <DefaultSeo
                {...defaultMetaTags}
                canonical={currentUrl}
                languageAlternates={alternateUrls}
            />
            <>
                <Script
                    strategy='afterInteractive'
                    src={`https://www.googletagmanager.com/gtag/js?id=G-KBYN4ZSD9Y`}
                />
                <Script
                    id='gtag-init'
                    strategy='afterInteractive'
                    dangerouslySetInnerHTML={{
                        __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-KBYN4ZSD9Y', {
                        page_path: window.location.pathname,
                      });
                    `,
                    }}
                />
            </>

            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
export default appWithTranslation(MyApp)
