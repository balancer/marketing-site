export function buildPartnerIconUrl(partnerName: string): string {
  return new URL(
    // https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url
    // Warning: Don't extract this template into a variable or it will stop working in production builds
    `/assets/svg/partners/${partnerName}.svg`,
    import.meta.url
  ).href;
}