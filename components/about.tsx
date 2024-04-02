'use client'
import Image from "next/image";
import gleb from "@/public/glebabout.jpg";

interface PageData {
  home: {
    bookTitle: string;
    aboutBook: string;
    bookDescription: string;
    choiceTitle: string;
    aboutAuthor: string;
    authorDescription: string;
  };
}

export default function About({ data } : { data: PageData }) {
  return (
    <div className="container flex flex-col sm:flex-row items-center justify-center w-full p-0">
      <div className="sm:w-1/2 space-y-3 w-full text-center px-16 my-5">
        <h1 className="text-3xl text-blue-800">{data.home.aboutAuthor}</h1>
        <p className="mx-auto text-sm md:text-base text-neutral-500">{data.home.authorDescription}</p>
      </div>
      <div className="sm:w-1/2 hidden sm:flex items-center justify-center relative h-[700px]">
        <Image src={gleb} alt="Photo of Gleb" fill style={{ objectFit: 'cover' }} />
      </div>
    </div>
  );
}