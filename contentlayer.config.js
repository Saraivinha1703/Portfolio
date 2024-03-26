import { defineDocumentType, makeSource } from "@contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

export const SoftwareDevelopment = defineDocumentType(() => ({
  name: "SoftwareDevelopment",
  filePathPattern: `software-development/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: "string", required: true },
    description: {type: "string", required: true},
    date: { type: "date", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: doc => `${doc._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: doc => {
        const pathNames = doc._raw.flattenedPath.split('/')
        return pathNames[pathNames.length-1]
      },
    }
  },
}));

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [SoftwareDevelopment],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "dracula",
        },
      ],
    ],
  },
});