'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { i18n } from '@/i18n.config';
import Image from 'next/image';
import gbIcon from '@/public/gb.svg';
import rsIcon from '@/public/rs.svg';

const localeIcons = {
  en: gbIcon,
  rs: rsIcon,
};

export default function LocaleSwitcher({bg} : {bg: Boolean}) {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className='flex gap-x-3'>
      {i18n.locales.map(locale => {
        const isActive = pathName.startsWith(`/${locale}`)
        const linkClassName = `rounded-md size-10 flex justify-center items-center border border-gray-500/10 ${
          isActive
            ? bg
              ? "bg-blue-300 text-black font-semibold" // isActive && bg
              : "bg-blue-300 bg-opacity-70 backdrop-blur-sm text-black font-semibold" // isActive && !bg
            : bg
            ? "bg-slate-100 text-black" // !isActive && bg
            : "bg-slate-100 bg-opacity-70 backdrop-blur-sm text-black" // !isActive && !bg
        }`;        
        return (
          <Link key={locale} className={linkClassName} href={redirectedPathName(locale)}>
            <Image
              src={localeIcons[locale]}
              width={20}
              height={20}
              className='rounded-[1.5px]'
              alt="Picture of the author"
            />
          </Link>
        )
      })}
    </div>
  )
}