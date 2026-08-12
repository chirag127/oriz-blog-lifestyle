export interface OrizSiteConfig {
  slug: string
  name: string
  origin: string
  tagline: string
  description?: string
}

export const SITE_CONFIG: OrizSiteConfig = {
  slug: 'lifestyle',
  name: 'Slow Hours',
  origin: 'https://lifestyle-blog.oriz.in',
  tagline: 'A field notebook for living with less and paying attention',
  description:
    'Slow Hours — notes on minimalism, daily routines, simple living and keeping focus. A calm lifestyle journal for people refining how they spend their days.',
}
