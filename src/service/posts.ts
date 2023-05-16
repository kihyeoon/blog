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

export async function getContent(fileName: string): Promise<string> {
  const filePath = path.join(process.cwd(), "data/posts", fileName + ".md");
  return readFile(filePath, "utf-8");
}
