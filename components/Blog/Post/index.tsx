import { useMDXComponent } from "next-contentlayer/hooks";
import style from "./post.module.css";

const PostComponent = ({ code }: { code: string }) => {
  const MDXContent = useMDXComponent(code.replace(/\*{2}/g, ""));
  return (
    <div className={style.post}>
      <MDXContent />
    </div>
  );
};
export default PostComponent;
