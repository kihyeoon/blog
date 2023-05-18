import FilterablePosts from "@/components/FilterablePosts";
import { getPosts } from "@/service/posts";

export const metadata = {
  title: "All Posts",
  description: "기술블로그 글 목록",
};

export default async function PostsPage() {
  const posts = await getPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <>
      <FilterablePosts posts={posts} categories={categories} />
    </>
  );
}
