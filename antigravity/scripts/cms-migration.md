# Headless CMS Migration Guide (MicroCMS)

This project currently uses static TypeScript files (`data/news.ts`, `data/portfolioList.ts`, etc.) to render dynamic content blocks.
To allow non-developers to edit this content seamlessly, we recommend migrating these data sources to **MicroCMS**, a Japanese headless CMS that perfectly fits Next.js App Router architectures.

## Proposed MicroCMS Schemas

When setting up your MicroCMS workspace, create the following APIs:

### 1. News API (Endpoint: `news`)
- **title** (Text field): The news headline (e.g., "MBO実施のお知らせ")
- **date** (Date field): The publication date (YYYY.MM.DD)
- **category** (Select field): `Press Release`, `News`, `Event`
- **content** (Rich Text or Text Area): The full HTML content of the news article.

### 2. Portfolio API (Endpoint: `portfolio`)
- **name_ja** (Text): The Japanese company name.
- **name_en** (Text): The English company name.
- **category** (Select): `M&A`, `Incubation`, `Fund`
- **logoImage** (Image): Upload the SVG/PNG logo.
- **url** (Text): The external link to the portfolio company.

### 3. Case Studies API (Endpoint: `case-studies`)
- **title_ja** (Text)
- **title_en** (Text)
- **client_ja** (Text)
- **client_en** (Text)
- **tags** (Multiple Select): `M&A`, `DX`, `Turnaround`, etc.
- **summary_ja** (Text Area)
- **summary_en** (Text Area)
- **content_ja** (Rich Text)
- **content_en** (Rich Text)

---

## How to Update the Frontend Code

Once the APIs are created, install the MicroCMS SDK:
```bash
npm install microcms-js-sdk
```

Then, update `lib/data.ts` to fetch from the CMS instead of reading static arrays:

```typescript
// lib/data.ts (Example Refactoring)
import { createClient } from 'microcms-js-sdk';

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

export async function getLatestNews(limit = 10) {
  const data = await client.getList({
    endpoint: 'news',
    queries: { limit, orders: '-date' }
  });
  return data.contents;
}

export async function getFullPortfolioList(lang: string) {
  const data = await client.getList({ endpoint: 'portfolio', queries: { limit: 100 } });
  
  // Transform CMS data to match existing frontend component structure
  return data.contents.map(item => ({
      name: lang === 'en' ? item.name_en : item.name_ja,
      category: item.category,
      logoImage: item.logoImage?.url || null,
      url: item.url
  }));
}
```

Using this approach, you can completely rip out the `data/` directory while keeping all existing React components (`app/[lang]/portfolio/PortfolioClient.tsx`) completely untouched!
