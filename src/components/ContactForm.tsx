"use client";

import Banner, { BannerData } from "@/components/Banner";
import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [banner, setBanner] = useState<BannerData | null>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    setBanner({ message: "전송 성공!", state: "success" });
    setTimeout(() => {
      setBanner(null);
    }, 3000);
    console.log(data);
  };

  return (
    <>
      {banner && <Banner banner={banner} />}
      <form
        className="mt-4 flex w-full flex-col gap-2 rounded-md bg-slate-300 p-5"
        onSubmit={onSubmit}
      >
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required autoFocus />
        <label htmlFor="subject">Subject</label>
        <input id="subject" name="subject" type="text" required />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={10} required />
        <button
          type="submit"
          className=" rounded-md bg-blue-400 p-2 font-bold text-white"
        >
          Send
        </button>
      </form>
    </>
  );
}
