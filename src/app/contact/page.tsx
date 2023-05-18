import ContactForm from "@/components/ContactForm";
import { AiFillGithub } from "react-icons/ai";
import { FaBlog } from "react-icons/fa";

export const metadata = {
  title: "Contact me",
  description: "기현에게 연락하기",
};

const H2_CLASS = "text-lg font-bold";
const links = [
  {
    name: "Github",
    url: "https://github.com/kihyeoon",
    icon: <AiFillGithub />,
  },
  {
    name: "Blog",
    url: "https://kion.tistory.com/",
    icon: <FaBlog />,
  },
];

export default function AboutPage() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center">
      <div className="mb-4 flex flex-col items-center">
        <h2 className={H2_CLASS}>Contact Me</h2>
        <p>kihyeoon@gmail.com</p>
        <ul className="mb-6 mt-2 flex gap-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-3xl"
            >
              {link.icon}
            </a>
          ))}
        </ul>
        <h2 className={H2_CLASS}>Or Send Me an Email</h2>
      </div>
      <ContactForm />
    </section>
  );
}
