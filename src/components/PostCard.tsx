import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";

interface Props {
  post: Post;
}

export default function PostCard({
  post: { title, description, date, category, path, featured },
}: Props) {
  return (
    <li>
      <Link href={`/posts/${path}`}>
        <article className="overflow-hidden rounded-md shadow-md">
          <Image
            src={`/images/posts/${path}.png`}
            alt="post thumnail"
            width={400}
            height={200}
            className="w-full"
          />
          <div className="flex flex-col items-center p-3">
            <time className="self-end">{date}</time>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="w-full truncate">{description}</p>
            <span className="my-2 rounded-lg bg-green-100 px-2 text-sm">
              {category}
            </span>
          </div>
        </article>
      </Link>
    </li>
  );
}
