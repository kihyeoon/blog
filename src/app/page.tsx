import Hero from "@/components/Hero";
import FeaturedPosts from "@/components/FeaturedPosts";

export default async function HomePage() {
  return (
    <>
      <Hero />
      {/* @ts-expect-error Async Server Component */}
      <FeaturedPosts />
    </>
  );
}
