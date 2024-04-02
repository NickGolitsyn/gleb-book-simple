'use client'
import Link from "next/link";
import { Button } from "./ui/button";
import "@/app/globals.css";
import Image from "next/image";
import banner from '@/public/banner.jpeg'
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import { useState } from "react";

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export default function Banner({data} : {data: any}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageClass = `${
    imageLoaded
      ?
      "opacity-100" 
      :
      ""
  }`;  

  return (
    <section className="aspect-video w-full relative sm:max-h-[35rem] h-screen sm:h-auto text-center md:text-left">
      <div className="absolute z-20 bottom-10 left-1/2 -translate-x-1/2 md:bottom-1/4 md:translate-y-1/2 md:left-10 md:translate-x-0">
        <motion.h1 
          className={`text-yellow-50 mb-5 text-xl md:text-2xl lg:text-3xl md:w-1/2 w-4/5 mx-auto md:mx-0 ${poppins.className}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {data.home.bookTitle}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          <Button asChild variant='custom' size='lg'>
            <Link href="#order">PRE-ORDER NOW</Link>
          </Button>
        </motion.div>
      </div>
      {/* <div className="w-full h-36 bg-gradient-to-t from-yellow-50/100 to-yellow50/0 absolute bottom-0 left-0 z-10" /> */}
      <Image
        src={banner}
        alt="banner"
        fill
        priority
        style={{ objectFit: 'cover' }}
        placeholder="blur"
        onLoad={() => setImageLoaded(true)}
      />
    </section>
  )
}
