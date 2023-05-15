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
    <div className="flex w-1/5 flex-col justify-center bg-slate-400">
      <Image
        src={`/images/posts/${path}.png`}
        alt="post thumnail"
        width={400}
        height={200}
      />
      <p>{date}</p>
      <p>{title}</p>
      <p>{description}</p>
      <p>{category}</p>
    </div>
  );
}
