import { defineDocumentType, makeSource } from "contentlayer/source-files";
import { Pluggable } from "unified";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",

  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    tag: { type: "string" },
    description: { type: "string" },
  },
  computedFields: {
    url: { type: "string", resolve: (post) => `/blog/${post._raw.flattenedPath}/` },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  disableImportAliasWarning: true,
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          keepBackground: true,
        },
      ],
    ] as Pluggable[],
  },
});
