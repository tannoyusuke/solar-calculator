import { MetadataRoute } from 'next'
import { getNewsData } from '@/lib/news'
import { getPortfolioData, getCaseStudiesData } from '@/lib/data'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tryfunds.com'

    const locales = ['ja', 'en']
    const staticRoutes = [
        '',
        '/philosophy',
        '/company',
        '/members',
        '/services',
        '/track-record',
        '/portfolio',
        '/case-study',
        '/news',
        '/recruit',
        '/recruit/persona',
        '/recruit/careers',
        '/recruit/future',
        '/contact',
    ]

    const sitemap: MetadataRoute.Sitemap = []

    // Add all static localized routes
    for (const locale of locales) {
        for (const route of staticRoutes) {
            sitemap.push({
                url: `${baseUrl}/${locale}${route}`,
                lastModified: new Date(),
                changeFrequency: route === '' ? 'daily' : 'weekly',
                priority: route === '' ? 1 : 0.8,
            })
        }
    }

    // Fetch dynamic news
    try {
        const jaNews = await getNewsData('ja') || []
        jaNews.forEach((item: any) => {
            sitemap.push({
                url: `${baseUrl}/ja/news/${item.id}`,
                lastModified: new Date(item.date.replace(/\./g, '-')),
                changeFrequency: 'monthly',
                priority: 0.6,
            })
        })

        const enNews = await getNewsData('en') || []
        enNews.forEach((item: any) => {
            sitemap.push({
                url: `${baseUrl}/en/news/${item.id}`,
                lastModified: new Date(item.date.replace(/\./g, '-')),
                changeFrequency: 'monthly',
                priority: 0.6,
            })
        })
    } catch (error) {
        console.error("Sitemap generation error for news:", error)
    }

    // Fetch dynamic case studies
    try {
        const jaCaseStudies = await getCaseStudiesData('ja') || []
        jaCaseStudies.forEach((item: any) => {
            sitemap.push({
                url: `${baseUrl}/ja/case-study/${item.id}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.7,
            })
        })

        const enCaseStudies = await getCaseStudiesData('en') || []
        enCaseStudies.forEach((item: any) => {
            sitemap.push({
                url: `${baseUrl}/en/case-study/${item.id}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.7,
            })
        })
    } catch (error) {
        console.error("Sitemap generation error for case studies:", error)
    }

    return sitemap
}
