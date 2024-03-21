import { Button } from "@/components/ui/button";
import Link from "next/link";
import cover from "@/public/cover.jpg"
import Image from "next/image";
import { Locale } from "@/i18n.config";
import { getData } from "@/lib/dictionary";
import banner from '@/public/banner.jpeg'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { pages, books } = await getData(lang);
  return (
    <div className="flex flex-col min-h-[100dvh]">
    <main className="flex-1">
      <section className="aspect-video w-full relative sm:max-h-screen h-screen sm:h-auto">
        <Image 
          src={banner}
          alt="banner"
          layout="fill"
          objectFit="cover" 
        />
      </section>
      <section className="w-full px-5 py-12 md:px-10">
        <h1 className="text-3xl font-bold uppercase text-center">{pages.home.bookTitle}</h1>
        <p className="text-neutral-500 text-center my-5 max-w-[600px] mx-auto">{pages.home.bookDesctiption}</p>
        <h2 className="text-2xl font-semibold mb-3 text-center">{pages.home.choiceTitle}</h2>
        <div className="flex justify-around flex-wrap gap-5">
          {books.map((e, index) => (
            <div key={index}>
              <div className="flex justify-center">
                <Image 
                  src={cover} 
                  className="rounded-sm max-w-48 lg:max-w-64 h-fit"
                  alt={"Book cover"}
                />
              </div>
              <div className="max-w-[500px] max-md:mx-auto flex flex-col justify-center space-y-1 lg:col-span-2 xl:space-y-2">
                <div className="space-y-2">
                  <h1 className="text-xl font-medium">
                    {e.title}
                  </h1>
                </div>
                <div className="font-medium text-neutral-500">
                  <span>{e.price}</span>
                </div>
                <div>
                  {e.availability ? (
                    <Button asChild>
                      <Link href={e.link} className="w-full mt-3">
                        {e.status}
                      </Link>
                    </Button>
                  ) : (
                    <Button variant="secondary" asChild>
                      <span className="w-full mt-3 cursor-default">
                        {e.status}
                      </span>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-neutral-100 dark:bg-neutral-800">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">{pages.home.aboutAuthor}</h2>
            <p className="mx-auto max-w-[600px] text-neutral-500">{pages.home.authorDescription}</p>
          </div>
        </div>
      </section>
      {/* <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Praise for The Art of Creativity
            </h2>
            <p className="mx-auto max-w-[600px] text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-neutral-400">
              "This book is a game changer. It opened my mind to new possibilities and gave me the tools to turn my
              ideas into reality."
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
              <Button>Preorder Now</Button>
            </form>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Sign up to get notified when we launch.
              <Link className="underline underline-offset-2" href="#">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </section> */}
    </main>
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-neutral-500 dark:text-neutral-400">© 2024 Acme Inc. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Terms of Service
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Privacy
        </Link>
      </nav>
    </footer>
  </div>
  );
}
