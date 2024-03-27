'use client'
import Image from "next/image";
import gleb from "@/public/gleb.jpeg";
import { useEffect, useState } from "react";
import { fetchData } from "@/lib/fetchData";
import { Locale } from "@/i18n.config";

interface PageData {
  pages: {
    home: {
      bookTitle: string;
      aboutBook: string;
      bookDescription: string;
      choiceTitle: string;
      aboutAuthor: string;
      authorDescription: string;
    };
  };
}

export default function About({ params: { lang } } : { params: { lang: Locale } }) {
  const [data, setData] = useState<PageData | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await fetchData(lang);
      setData(data);
    };
    fetchBooks();
  }, [lang]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const { home } = data.pages;

  return (
    <div className="container flex flex-col sm:flex-row items-center justify-center w-full p-0">
      <div className="sm:w-1/2 space-y-3 w-full text-center px-5 my-5">
        <h2 className="text-2xl text-blue-800 tracking-tighter">{home.aboutAuthor}</h2>
        <p className="mx-auto text-sm md:text-base text-neutral-500">{home.authorDescription}</p>
      </div>
      <div className="sm:w-1/2 hidden sm:flex items-center justify-center relative h-[700px]">
        <Image src={gleb} alt="Photo of Gleb" fill style={{ objectFit: 'cover' }} />
      </div>
    </div>
  );
}