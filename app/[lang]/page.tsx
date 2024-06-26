import { Locale } from "@/i18n.config";
import { getData } from "@/lib/dictionary";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import Books from "@/components/books";
import About from "@/components/about";
import Banner from "@/components/banner";
import Faq from "@/components/faq";
import { Contact } from "@/components/contact";

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { pages, faq, books } = await getData(lang);
  return (
    <div className="flex flex-col min-h-[100dvh]">
    <main className="flex-1">
      <Banner data={pages} />
      <section className="w-full px-5 py-12 md:px-10">
        <h1 className="text-3xl text-blue-800 capitalize text-center">{pages.home.aboutBook}</h1>
        <p className="text-neutral-500 text-center my-5 max-w-2xl mx-auto">{pages.home.bookDescription}</p>
        <h2 id="order" className="text-2xl text-blue-800 mb-3 text-center">{pages.home.choiceTitle}</h2>
        <Tabs defaultValue={lang}>
          <div className="flex w-full justify-center">
          <TabsList className="flex w-fit self-center mb-3">
            <TabsTrigger value="en">English 🇬🇧</TabsTrigger>
            <TabsTrigger value="rs">Srpski 🇷🇸</TabsTrigger>
          </TabsList>
          </div>
          <TabsContent value="en">
            <Books data={books} coverLang='en' />
          </TabsContent>
          <TabsContent value="rs">
            <Books data={books} coverLang='rs' />
          </TabsContent>
        </Tabs>
      </section>
      <section className="flex bg-[#f5f3e4]">
        <About data={pages} />
      </section>
      <section className="max-w-2xl mx-auto py-10 px-5">
        <Faq data={faq} />
      </section>
      <section className="max-w-2xl mx-auto py-10 px-5">
        <Contact />
      </section>
    </main>
  </div>
  );
}
