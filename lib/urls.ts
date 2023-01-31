import { filename } from 'pathe/utils';
const glob = import.meta.glob('~/assets/svg/partners/*.svg', { eager: true });
const partnerImages = Object.fromEntries(
  // @ts-ignore
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
);

export function buildPartnerIconUrl(partnerName: string): string {
    return partnerImages[partnerName];
}