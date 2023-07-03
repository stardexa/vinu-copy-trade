/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://vinusoft.com',
    generateRobotsTxt: true,
    exclude: '*/404',
    sitemapBaseFileName: 'sitemap',
    generateIndexSitemap: false,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],

        // additionalSitemaps: [],
    },
}
