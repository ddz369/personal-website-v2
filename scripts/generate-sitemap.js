import fs from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

// Define your site's URLs here
const siteUrls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  // Add more URLs as your site grows
];

async function generateSitemap() {
  // Create a stream to write to
  const stream = new SitemapStream({ hostname: 'https://yourdomain.com' });

  // Return a promise that resolves with your XML
  return streamToPromise(Readable.from(siteUrls).pipe(stream)).then(data => data.toString());
}

// Generate the sitemap and write it to the public directory
generateSitemap().then(sitemap => {
  fs.mkdirSync('public', { recursive: true });
  fs.writeFileSync('public/sitemap.xml', sitemap);
  console.log('Sitemap generated successfully!');
});
