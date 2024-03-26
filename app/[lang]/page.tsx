import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Locale } from "@/i18n.config";
import { getData } from "@/lib/dictionary";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import Books from "@/components/books";
import About from "@/components/about";
import Banner from "@/components/banner";

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { pages } = await getData(lang);
  return (
    <div className="flex flex-col min-h-[100dvh]">
    <main className="flex-1">
      <Banner data={pages} />
      <section className="w-full px-5 py-12 md:px-10">
        <h1 className="text-3xl font-bold uppercase text-center">{pages.home.aboutBook}</h1>
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
            <Books params={{lang}} coverLang='en' />
          </TabsContent>
          <TabsContent value="rs">
            <Books params={{lang}} coverLang='rs' />
          </TabsContent>
        </Tabs>
      </section>
      <section className="flex bg-neutral-100">
        <About params={{lang}} />
      </section>
    </main>
  </div>
  );
}
