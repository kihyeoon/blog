import MarkdownViewer from "@/components/MarkdownViewer";
import { getContent as getPostContent, getPost } from "@/service/posts";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AiTwotoneCalendar } from "react-icons/ai";

interface Props {
  params: {
    slug: string;
  };
}

export default async function PostDetailPage({ params: { slug } }: Props) {
  const post = await getPost(slug);
  const content = await getPostContent(slug);
  if (!post) {
    notFound();
  }
  const { title, path, date, description } = post;

  return (
    <article className="mx-auto max-w-3xl overflow-hidden rounded-xl bg-gray-100 shadow-lg">
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
        className="max-h-[400px] w-full object-cover"
      />
      <section className="flex flex-col p-4">
        <div className="flex items-center gap-1 self-end">
          <AiTwotoneCalendar className="text-blue-400" />
          <p className="font-semibold">{date}</p>
        </div>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-xl font-bold">{description}</p>
        <div className="mb-8 mt-4 w-44 border-2 border-blue-500" />
        <MarkdownViewer content={content} />
      </section>
    </article>
  );
}
