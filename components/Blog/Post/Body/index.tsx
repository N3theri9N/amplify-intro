import { useMDXComponent } from "next-contentlayer/hooks";
import { forwardRef } from "react";
import style from "../post.module.css";

const PostBody = forwardRef<HTMLDivElement, { code: string }>(({ code }, ref) => {
  const MDXContent = useMDXComponent(code);

  return (
    <main
      className={`${style.post} pb-10 border-b-[1px] border-black/50 dark:border-white`}
      ref={ref}
    >
      <MDXContent />
    </main>
  );
});

PostBody.displayName = "PostBody";

export default PostBody;
