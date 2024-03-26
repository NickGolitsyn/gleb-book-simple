'use client'
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion, useInView } from "framer-motion"

import hardcover from "@/public/hardcover.png"
import iphone from "@/public/iphone.png"
import paperback from "@/public/paperback.png"
import cover from "@/public/cover.jpg"
import RScover from "@/public/coverrs.jpeg"
import { Locale } from "@/i18n.config";
import { useEffect, useRef, useState } from "react";
import { fetchData } from "@/lib/fetchData";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.5, duration: 1.0 },
  }),
  exit: { opacity: 0, y: -50 }, 
};

interface Book {
  title: string;
  price: string;
  status: string;
  link: string;
  availability: boolean;
  image: string;
}

export default function Books({
  params: { lang },
  coverLang
}: {
  params: { lang: Locale }
  coverLang: 'en' | 'rs'
}) {
  const [books, setBooks] = useState<Book[]>([]);
  const imageSrc = coverLang === 'en' ? cover : RScover;

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const image = [
    paperback,
    hardcover,
    iphone
  ]

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await fetchData(lang);
      setBooks(data.books);
    };
    fetchBooks();
  }, [lang]);

  return (
    <div className="flex justify-around items-center flex-wrap gap-5 min-h-[450px] lg:min-h-[520px]" ref={ref}>
      {books.map((e, index) => (
        <motion.div
          key={index}
          custom={index} // This will be used as the `custom` parameter in the variant
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="flex justify-center">
            <Image 
              src={image[index]} 
              className="rounded-sm max-w-48 lg:max-w-64 h-fit aspect-square object-contain"
              alt={"Book cover"}
            />
          </div>
          <div className="max-w-[500px] max-md:mx-auto flex flex-col justify-center space-y-1 lg:col-span-2 xl:space-y-2">
            <div className="space-y-2">
              <h1 className="text-xl font-medium">
                {e.title} {coverLang === 'en' ? '🇬🇧' : '🇷🇸'}
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
        </motion.div>
      ))}
    </div>
  )
}
