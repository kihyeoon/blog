import Hero from "@/components/Hero";
import PostCard from "@/components/PostCard";
import { getFeaturedPosts } from "@/service/posts";

export default async function HomePage() {
  const featuredPosts = await getFeaturedPosts();
  if (!featuredPosts) {
    return <p>Loading...</p>;
  }
  const { title, description, date, category, path, featured } =
    featuredPosts[0];

  return (
    <>
      <Hero />
      <PostCard
        title={title}
        description={description}
        date={date}
        category={category}
        path={path}
        featured={featured}
      />
    </>
  );
}
