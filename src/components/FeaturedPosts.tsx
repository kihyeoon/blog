import PostsGrid from "@/components/PostsGrid";
import { getFeaturedPosts } from "@/service/posts";

export default async function FeaturedPosts() {
  const featuredPosts = await getFeaturedPosts();

  return (
    <>
      <h2 className="my-2 text-lg font-bold">Featured posts</h2>
      <PostsGrid posts={featuredPosts} />
    </>
  );
}
