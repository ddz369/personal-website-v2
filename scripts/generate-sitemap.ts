import fs from 'fs';
import path from 'path';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

interface SitemapUrl {
  url: string;
  changefreq?: string;
  priority?: number;
}

async function generateSitemap(): Promise<void> {
  // Define the pages for the sitemap
  const pages: SitemapUrl[] = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    // Add more pages as needed
  ];

  // Create a sitemap stream
  const stream = new SitemapStream({ hostname: 'https://example.com' });

  // Create a readable stream for the sitemap data
  const sitemapData = Readable.from(pages).pipe(stream);

  try {
    // Convert the stream to XML
    const sitemap = await streamToPromise(sitemapData);

    // Write the sitemap to the public directory
    const publicDir = path.join(process.cwd(), 'public');

    // Create the public directory if it doesn't exist
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // Write the sitemap to the public directory
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap.toString());

    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run the generator
generateSitemap();
