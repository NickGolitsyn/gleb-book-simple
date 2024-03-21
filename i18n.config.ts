export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'rs']
} as const

export type Locale = (typeof i18n)['locales'][number]