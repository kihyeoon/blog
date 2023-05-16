"use client";
import Categories from "@/components/Categories";
import PostsGrid from "@/components/PostsGrid";
import { Post } from "@/service/posts";
import { useState } from "react";

interface Props {
  posts: Post[];
  categories: string[];
}

const All_POSTS = "All";

export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setCategory] = useState(All_POSTS);
  const filteredPosts =
    selected === All_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <section className="flex">
      <PostsGrid posts={filteredPosts} />
      <Categories
        categories={[All_POSTS, ...categories]}
        selected={selected}
        onClick={setCategory}
      />
    </section>
  );
}
