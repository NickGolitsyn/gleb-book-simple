import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex text-neutral-100 flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-blue-800">
      <p className="text-xs">© 2024 Gleb Feels. All rights reserved. Site by <u>Nick Golitsyn</u></p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Terms of Service
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Privacy
        </Link>
      </nav>
    </footer>
  )
}
