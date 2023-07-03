import { NextSeoProps } from 'next-seo'
import { domain, socialMedia } from '../config/main'

// Meta tag Constants
const pageTitle = 'Vinusoft | Experienced Crypto Solutions'
const pageDesc = 'As a blockchain development company, we offer turnkey technology services and customized solutions for crypto and blockchain.'
const twitterUsername = '@vinusoftware'
const siteName = 'Vinu Software'
// const twitterAppCard = {
//     appleStoreName: 'Vinusoft | Experienced Crypto Solutions',
//     appleStoreID: '1569267465',
//     playStoreName: 'Vinu Software',
//     playStoreID: 'com.vinu.vinusoftapp',
// }
const logoURL = `${domain.default}/assets/images/logo/logo.svg`
const fullLogoUrl = `${domain.default}/assets/images/logo/logo.svg`

// Structured Data Constants
const LDname = 'Vinusoft | Experienced Crypto Solutions'
const foundingDate = '2016'
const supportPage = `${domain.default}/contact`
const supportEmail = 'info@vinusoft.com'

/*
Burdaki meta tagler uygulamanın her sayfasında yer alıyor.
Eğer bir sayfada değiştirilmesi gerekiyorsa o sayfada meta tagler 
tekrar belirtilerek ve NextSEO component'ına iletilerek varsayılanlar yerine kullanılabilir.
*/
export const defaultMetaTags: NextSeoProps = {
    title: pageTitle,
    description: pageDesc,
    titleTemplate: '%s | ' + siteName,
    openGraph: {
        type: 'website',
        siteName: siteName,
        images: [
            {
                url: logoURL,
                alt: 'Vinusoft | Experienced Crypto Solutions',
            },
        ],
    },
    twitter: {
        // Twitter için title ve description eklemeye gerek yok.
        // Twitter OG taglerdekileri kullanıyor.
        site: twitterUsername,
        cardType: 'summary_large_image',
    },

    additionalMetaTags: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        {
            name: 'google-site-verification',
            content: 'SCQ-cdn01PHaGRhJ0gIi-ov5VGwU5naBM6Aqbz64_1w',
        },
        // {
        //     name: 'apple-itunes-app',
        //     content: `app-id=${twitterAppCard.appleStoreID}`,
        // },
    ],
}

/* 
Bu fonksiyon otomatik olarak bulunduğu
URL'ye göre ve mevcut olan dil sayısına göre her sayfadaki 
alternate meta tagleri oluşturur
*/
export function generateAltUrls(
    defaultLang: string,
    currentLocale: string,
    allLocales: string[],
    currentPath: string
) {
    const currentLocalePath =
        currentLocale === defaultLang ? '' : '/' + currentLocale
    const currentUrl = domain.default + currentLocalePath + currentPath
    const alternateUrls = allLocales.map((local) => ({
        href:
            domain.default +
            (local === defaultLang ? '' : '/' + local) +
            currentPath,
        hrefLang: local === defaultLang ? 'x-default' : local,
    }))

    return { currentUrl, alternateUrls }
}

export const mainLdJson = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Organization',
            '@id': domain.default,
            name: LDname,
            url: domain.default,
            foundingDate: foundingDate,
            sameAs: socialMedia.map((social) => social.url),
            logo: {
                '@type': 'ImageObject',
                '@id': domain.default,
                url: logoURL,
                caption: LDname,
            },
            image: {
                '@id': domain.default,
            },
            contactPoint: {
                '@type': 'ContactPoint',
                url: supportPage,
                email: supportEmail,
                contactType: 'Customer Service',
            },
            // address: {
            //     '@type': 'PostalAddress',
            //     addressCountry: null,
            //     addressLocality: null,
            //     addressRegion: null,
            //     postalCode: null,
            //     streetAddress: null,
            // },
        },
        {
            '@type': 'WebSite',
            '@id': domain.default,
            url: domain.default,
            name: LDname,
            publisher: {
                '@id': domain.default,
            },
        },
        {
            '@type': 'ImageObject',
            '@id': domain.default,
            url: fullLogoUrl,
            width: 1280,
            height: 720,
        },
    ],
}
