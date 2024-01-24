"use client";
import { useMDXComponent } from "next-contentlayer/hooks";
import { ReactNode, useCallback } from "react";
import style from "./post.module.css";

const PostComponent = ({ code }: { code: string }) => {
  const MDXContent = useMDXComponent(code);

  const nodeSearcher = useCallback((node: HTMLDivElement) => {
    if (node == null) {
      return;
    }
    const sections: NodeList = node.querySelectorAll("h1,h2,h3");
    sections.forEach((node) => {
      node.addEventListener("click", function (e) {
        console.log(e);
      });
    });
  }, []);

  return (
    <div className={style.post} ref={nodeSearcher}>
      <MDXContent />
    </div>
  );
};
export default PostComponent;
