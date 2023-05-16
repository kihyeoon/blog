import path from "path";
import { readFile } from "fs/promises";

export interface Post {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
}

interface AdjacentPosts {
  prevPost: Post | null;
  nextPost: Post | null;
}

export async function getPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getPost(path: string): Promise<Post | undefined> {
  const posts = await getPosts();
  return posts.find((post) => post.path === path);
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = await getPosts();
  return posts.filter((post) => post.featured);
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  const posts = await getPosts();
  return posts.filter((post) => !post.featured);
}

export async function getPostContent(fileName: string): Promise<string> {
  const filePath = path.join(process.cwd(), "data/posts", fileName + ".md");
  return readFile(filePath, "utf-8");
}

export async function getAdjacentPosts(path: string): Promise<AdjacentPosts> {
  const posts = await getPosts();
  const index = posts.findIndex((post) => post.path === path);

  const prevPost = index > 0 ? posts[index - 1] : null;
  const nextPost = index < posts.length - 1 ? posts[index + 1] : null;

  return { prevPost, nextPost };
}
