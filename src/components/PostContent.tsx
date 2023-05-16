import MarkdownViewer from "@/components/MarkdownViewer";
import { Post } from "@/service/posts";
import { AiTwotoneCalendar } from "react-icons/ai";

interface Props {
  post: Post;
  content: string;
}

export default function PostContent({
  post: { title, date, description },
  content,
}: Props) {
  return (
    <section className="flex flex-col p-4">
      <div className="flex items-center gap-1 self-end">
        <AiTwotoneCalendar className="text-blue-400" />
        <p className="font-semibold">{date}</p>
      </div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl font-bold">{description}</p>
      <div className="mb-8 mt-4 w-44 border-2 border-blue-500" />
      <MarkdownViewer content={content} />
    </section>
  );
}
