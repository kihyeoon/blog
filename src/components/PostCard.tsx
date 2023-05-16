import { Post } from "@/service/posts";
import Image from "next/image";

export default function PostCard({
  title,
  description,
  date,
  category,
  path,
  featured,
}: Post) {
  return (
    <li className="flex h-full w-full flex-col justify-center rounded-md shadow-md">
      <Image
        src={`/images/posts/${path}.png`}
        alt="post thumnail"
        width={400}
        height={200}
        className="rounded-t-md"
      />
      <p className="text-left">{date}</p>
      <p>{title}</p>
      <p>{description}</p>
      <p>{category}</p>
    </li>
  );
}
