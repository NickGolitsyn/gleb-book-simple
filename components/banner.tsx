'use client'
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import banner from '@/public/banner.jpeg'
import { motion } from "framer-motion";

export default function Banner({data} : {data: any}) {
  return (
    <section className="aspect-video w-full relative sm:max-h-[35rem] h-screen sm:h-auto text-center md:text-left">
      <div className="absolute z-10 bottom-10 left-1/2 -translate-x-1/2 md:bottom-1/4 md:translate-y-1/2 md:left-10 md:translate-x-0">
        <motion.h1 
          className="text-white font-bold mb-5 text-xl md:text-2xl lg:text-3xl md:w-1/2 w-4/5 mx-auto md:mx-0"
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
          <Button asChild variant='secondary' size='lg' className="hover:!bg-white">
            <Link href="#order">PRE-ORDER NOW</Link>
          </Button>
        </motion.div>
      </div>
      <Image 
        src={banner}
        alt="banner"
        fill
        style={{objectFit:"cover"}}
      />
    </section>
  )
}
