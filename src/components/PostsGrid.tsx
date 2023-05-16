import PostCard from "@/components/PostCard";
import { Post } from "@/service/posts";

interface Props {
  featuredPosts: Post[];
}

export default function PostsGrid({ featuredPosts }: Props) {
  return (
    <ul className="grid grid-cols-4 gap-4">
      {featuredPosts.map((post) => (
        <PostCard
          key={post.path}
          title={post.title}
          description={post.description}
          date={post.date}
          category={post.category}
          path={post.path}
          featured={post.featured}
        />
      ))}
    </ul>
  );
}
