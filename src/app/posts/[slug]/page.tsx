import PostContent from "@/components/PostContent";
import { getContent as getPostContent, getPost } from "@/service/posts";
import Image from "next/image";
import { notFound } from "next/navigation";

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
  const { title, path } = post;

  return (
    <article className="mx-auto max-w-3xl overflow-hidden rounded-xl bg-gray-100 shadow-lg">
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
        className="max-h-[400px] w-full object-cover"
      />
      <PostContent post={post} content={content} />
    </article>
  );
}
