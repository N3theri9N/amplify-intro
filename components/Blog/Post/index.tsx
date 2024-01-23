import { useMDXComponent } from "next-contentlayer/hooks";
import style from "./post.module.css";

const PostComponent = ({ code }: { code: string }) => {
  const MDXContent = useMDXComponent(code);
  return (
    <div className={style.post}>
      <MDXContent />
    </div>
  );
};
export default PostComponent;
