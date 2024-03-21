export default async function sitemap() {
  const url = 'https://gleb-book-simple.vercel.app';
  const languages = ['en', 'rs'];
  const pages = [''];

  const sitemapEntries = languages.flatMap((lang) =>
    pages.map((page) => ({
      url: `${url}/${lang}${page}`,
      lastModified: '2024-03-21',
    }))
  );

  return sitemapEntries;
}