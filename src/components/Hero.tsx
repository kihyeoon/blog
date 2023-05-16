import Image from "next/image";
import Link from "next/link";
import profileImage from "/public/images/profile.jpeg";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-1">
      <Image
        src={profileImage}
        width={200}
        height={200}
        className="rounded-full"
        alt="profile image"
        priority
      />
      <h2 className="mt-2 text-lg font-bold">{"Hi, I'm Ki hyeon"}</h2>
      <h3>Front-end Developer</h3>
      <p>{"UX를 개선해 비즈니스 성장에 기여합니다"}</p>
      <Link href="/contact">
        <button className="mt-2 rounded bg-blue-400 p-1 font-semibold">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
