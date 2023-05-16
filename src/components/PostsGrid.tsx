import PostCard from "@/components/PostCard";
import { Post } from "@/service/posts";

interface Props {
  posts: Post[];
}

export default function PostsGrid({ posts }: Props) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {posts.map((post) => (
        <PostCard key={post.path} post={post} />
      ))}
    </ul>
  );
}
