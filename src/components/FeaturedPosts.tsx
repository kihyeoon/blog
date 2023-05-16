import PostsGrid from "@/components/PostsGrid";
import { getFeaturedPosts } from "@/service/posts";

export default async function FeaturedPosts() {
  const featuredPosts = await getFeaturedPosts();

  return (
    <>
      <h3>Featured posts</h3>
      <PostsGrid featuredPosts={featuredPosts} />
    </>
  );
}
