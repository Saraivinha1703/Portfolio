import { format, parseISO } from "date-fns";
import { allSoftwareDevelopments } from "contentlayer/generated";
import { MDX } from "@/components/mdx";

async function getDocument(slug: string) {
  const doc = allSoftwareDevelopments.find(doc => doc.slug === slug)
  if (!doc) throw new Error(`Post not found for slug: ${slug}`);
  return doc;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const doc = await getDocument(params.slug);
  
  return (
    <article className="w-full p-4 md:px-12 md:py-8">
      <div className="text-center">
        <time dateTime={doc.date} className="text-xs text-gray-600">
          {format(parseISO(doc.date), "LLLL d, yyyy")}
        </time>
      </div>
      <div className="[&>*]:mb-3 [&>*:last-child]:mb-0">
        <MDX code={doc.body.code} />
      </div>
    </article>
  );
};