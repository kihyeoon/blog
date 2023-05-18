import PostContent from "@/components/PostContent";
import AdjacentPostCard from "@/components/AdjacentPostCard";
import { getPostContent, getPost, getAdjacentPosts } from "@/service/posts";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params: { slug } }: Props) {
  const post = await getPost(slug);
  return {
    title: `${post?.title}`,
    description: post?.description,
  };
}

export default async function PostDetailPage({ params: { slug } }: Props) {
  const post = await getPost(slug);
  const content = await getPostContent(slug);
  const { prevPost, nextPost } = await getAdjacentPosts(slug);

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
      <nav className="mt-8 flex max-w-3xl bg-black">
        {prevPost && <AdjacentPostCard post={prevPost} type="prev" />}
        {nextPost && <AdjacentPostCard post={nextPost} type="next" />}
      </nav>
    </article>
  );
}
