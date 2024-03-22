import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Locale } from "@/i18n.config";
import { getData } from "@/lib/dictionary";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import cover from "@/public/cover.jpg"
import RScover from "@/public/coverrs.jpeg"
import gleb from "@/public/gleb.jpeg"
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
      <section className="aspect-video w-full relative sm:max-h-[35rem] h-screen sm:h-auto text-center md:text-left">
        <div className="absolute z-10 bottom-10 left-1/2 -translate-x-1/2 md:bottom-1/4 md:translate-y-1/2 md:left-10 md:translate-x-0">
          <h1 className="text-white font-bold mb-5 text-xl md:text-2xl lg:text-3xl md:w-1/2 w-4/5 mx-auto md:mx-0">{pages.home.bookTitle}</h1>
          <Button asChild variant='secondary' size='lg' className="hover:!bg-white">
            <Link href="#order">PRE-ORDER NOW</Link>
          </Button>
        </div>
        <Image 
          src={banner}
          alt="banner"
          fill
          style={{objectFit:"cover"}}
        />
      </section>
      <section className="w-full px-5 py-12 md:px-10">
        <h1 className="text-3xl font-bold uppercase text-center">{pages.home.bookTitle}</h1>
        <p className="text-neutral-500 text-center my-5 max-w-[600px] mx-auto">{pages.home.bookDesctiption}</p>
        <h2 id="order" className="text-2xl font-semibold mb-3 text-center">{pages.home.choiceTitle}</h2>
        <Tabs defaultValue={lang}>
          <div className="flex w-full justify-center">
          <TabsList className="flex w-fit self-center mb-3">
            <TabsTrigger value="en">English 🇬🇧</TabsTrigger>
            <TabsTrigger value="rs">Srpski 🇷🇸</TabsTrigger>
          </TabsList>
          </div>
          <TabsContent value="en">
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
                        {e.title} 🇬🇧
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
          </TabsContent>
          <TabsContent value="rs">
            <div className="flex justify-around flex-wrap gap-5">
              {books.map((e, index) => (
                <div key={index}>
                  <div className="flex justify-center">
                    <Image 
                      src={RScover} 
                      className="rounded-sm max-w-48 lg:max-w-64 h-fit"
                      alt={"Book cover"}
                    />
                  </div>
                  <div className="max-w-[500px] max-md:mx-auto flex flex-col justify-center space-y-1 lg:col-span-2 xl:space-y-2">
                    <div className="space-y-2">
                      <h1 className="text-xl font-medium">
                        {e.title} 🇷🇸
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
          </TabsContent>
        </Tabs>
      </section>
      <section className="flex bg-neutral-100">
        <div className="container flex flex-col sm:flex-row items-center justify-center gap-4 w-full p-0">
          <div className="sm:w-1/2 space-y-3 w-full text-center px-5 my-5">
            <h2 className="text-2xl font-bold tracking-tighter">{pages.home.aboutAuthor}</h2>
            <p className="mx-auto text-sm md:text-base text-neutral-500">{pages.home.authorDescription}</p>
          </div>
          <div className="sm:w-1/2 hidden sm:flex items-center justify-center">
            <Image 
              src={gleb} 
              alt="Photo of Gleb" 
              layout="responsive"
              width={500} // Example width, adjust as needed
              height={500} // Adjust the height to maintain the square aspect ratio
            />
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
  </div>
  );
}
