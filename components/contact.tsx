"use client";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Textarea } from "./ui/textarea";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email(),
  message: z.string().min(2, { message: "Message must contain at least 2 characters." }),
});

export function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  async function handleSubmit(formData: z.infer<typeof formSchema>) {
    setIsLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB_FORM_KEY,
          ...formData,
        }),
      });
      const result = await response.json();
      if (result.success) {
        toast({
          title: "Message sent successfully!",
          variant: "default"
        }); // Show success toast
      } else {
        toast({
          title: "Something went wrong. Please try again.",
          description: "We encountered an error while processing your request.",
          variant: "destructive",
        }); // Show error toast
      }
    } catch (error) {
      toast({
        title: "An error occurred. Please try again.",
        description: "An unexpected error occurred.",
        variant: "destructive",
      }); // Show error toast
    } finally {
      setIsLoading(false);
    }
  }

  function onSubmit(data: z.infer<typeof formSchema>) {
    handleSubmit(data);
  }

  return (
    <div>
      <h1 className="text-3xl text-blue-800 capitalize mb-5">Contact Us</h1>
      <div className="flex gap-5">
        <div className="flex-grow">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-normal">Name:</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-normal">Email:</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-normal">Message:</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Message" className="max-h-52" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button variant="custom" type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <ReloadIcon className="mr-2 animate-spin" /> Loading
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </Form>
        </div>
        <div className="flex-shrink">
          <p className="text-sm">Email us:</p>
          <Link href="mailto:glebfeels@gmail.com" className={`underline text-blue-800`}>glebfeels@gmail.com</Link>
        </div>
      </div>
    </div>
  );
}