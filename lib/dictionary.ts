import type { Locale } from '@/i18n.config'

const data = {
  en: () => import('@/data/en.json').then(module => module.default),
  rs: () => import('@/data/rs.json').then(module => module.default)
}

export const getData = async (locale: Locale) => data[locale]()