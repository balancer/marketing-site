export const TITLE = 'Balancer AMM DeFi Protocol'
export const DESCRIPTION = 'Balancer is an automated portfolio manager and trading platform on Ethereum'
export const URL = 'https://balancer.fi'
export const SITE_NAME = 'Balancer'
export const OG_IMAGE = 'https://balancer.fi/images/og_image.png'
export const TWITTER_HANDLE = '@BalancerLabs'

export const headMeta = ({
  title = TITLE,
  description = DESCRIPTION,
  siteName = SITE_NAME,
  url = URL,
  image = OG_IMAGE
} = {}) => {
  return [
    { hid: 'description', name: 'description', content: description },
    { hid: 'og:title', name: 'og:title', content: title },
    { hid: 'og:site_name', name: 'og:site_name', content: siteName },
    {
      hid: 'og:description',
      name: 'og:description',
      content: description
    },
    { hid: 'og:url', name: 'og:url', content: url },
    {
      hid: 'og:image',
      name: 'og:image',
      content: image
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    { hid: 'twitter:site', name: 'twitter:site', content: TWITTER_HANDLE },
    { hid: 'twitter:title', name: 'twitter:title', content: title },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: description
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: image
    }
  ]
}
