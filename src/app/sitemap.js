// Generates /sitemap.xml. Add new pages here so Google finds them.
const SITE = 'https://www.smarttouchappliances.com';

const pages = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/washing-machine', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/refrigerator', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/ac-service', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/microwave', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/dryer', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/lg-service-bangalore', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/coverage', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/coverage/east-bangalore', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/coverage/north-bangalore', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/coverage/south-bangalore', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/coverage/west-bangalore', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/contact/book-technician', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/contact/faq', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/about/pricing-policy', priority: 0.5, changeFrequency: 'yearly' },
];

export default function sitemap() {
  const lastModified = new Date();
  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
