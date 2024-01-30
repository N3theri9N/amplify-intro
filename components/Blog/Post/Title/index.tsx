import { parseMdxDateFormat } from "@/utils/date";

const PostTitle = ({ title, date }: { title: string; date: string }) => {
  return (
    <div>
      <h1 className="my-5 text-5xl font-normal">{title}</h1>
      <p className="opacity-50">생성 일시 : {parseMdxDateFormat(date)}</p>
    </div>
  );
};

export default PostTitle;
