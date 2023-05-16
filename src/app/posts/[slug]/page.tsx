import { getContent as getPostContent, getPost } from "@/service/posts";
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

  return (
    <>
      <h2>{post.title}</h2>
      <pre>{content}</pre>
    </>
  );
}
