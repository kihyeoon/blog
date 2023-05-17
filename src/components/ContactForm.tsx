"use client";
import Banner, { BannerData } from "@/components/Banner";
import { sendEmail } from "@/service/contact";
import { ChangeEvent, FormEvent, useState } from "react";

const DEFAULT_DATA = {
  from: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(DEFAULT_DATA);
  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendEmail(formData)
      .then(() => {
        setBanner({
          message: "메일을 성공적으로 보냈습니다.",
          state: "success",
        });
        setFormData(DEFAULT_DATA);
      })
      .catch(() => {
        setBanner({ message: "메일을 보내는데 실패했습니다.", state: "error" });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };

  return (
    <>
      {banner && <Banner banner={banner} />}
      <form
        className="mt-4 flex w-full flex-col gap-2 rounded-md bg-slate-300 p-5"
        onSubmit={onSubmit}
      >
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={onChange}
          value={formData.from}
          required
          autoFocus
        />
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          onChange={onChange}
          value={formData.subject}
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={10}
          onChange={onChange}
          value={formData.message}
          required
        />
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
