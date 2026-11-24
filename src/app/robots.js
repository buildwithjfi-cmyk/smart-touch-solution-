// Generates /robots.txt
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://www.smarttouchappliances.com/sitemap.xml',
    host: 'https://www.smarttouchappliances.com',
  };
}
