import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

import cover from "@/public/cover.jpg"
import RScover from "@/public/coverrs.jpeg"
import { getData } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";

export default async function Books({
  params: { lang },
  coverLang
}: {
  params: { lang: Locale }
  coverLang: 'en' | 'rs'
}) {
  const { books } = await getData(lang);
  const imageSrc = coverLang === 'en' ? cover : RScover;
  return (
    <div className="flex justify-around flex-wrap gap-5">
      {books.map((e, index) => (
        <div key={index}>
          <div className="flex justify-center">
            <Image 
              src={imageSrc} 
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
  )
}
