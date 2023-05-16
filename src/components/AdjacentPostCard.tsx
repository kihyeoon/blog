import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

interface Props {
  post: Post;
  type: "prev" | "next";
}

const ICON_CLASS = "text-2xl text-blue-300 transition-all group-hover:text-4xl";

export default function AdjacentPostCard({
  post: { path, title, description },
  type,
}: Props) {
  return (
    <Link
      href={`/posts/${path}`}
      className="group relative max-h-52 w-full text-white"
    >
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={150}
        height={100}
        className="w-full opacity-40"
      />
      <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-between gap-2 px-5">
        {type === "prev" && <FaArrowLeft className={ICON_CLASS} />}
        <div className="w-full text-center">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="truncate">{description}</p>
        </div>
        {type === "next" && (
          <FaArrowLeft className={`rotate-180 ${ICON_CLASS}`} />
        )}
      </div>
    </Link>
  );
}
