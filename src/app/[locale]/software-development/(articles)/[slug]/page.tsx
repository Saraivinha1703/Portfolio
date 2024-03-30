import { MDX } from "@/components/mdx";
import { allSoftwareDevelopments } from "@/.contentlayer/generated";
import { getLocale, getMessages } from "next-intl/server";
import { GoBackAndDate } from "./fragments/go-back-and-date";

async function getDocument(slug: string) {
  const doc = allSoftwareDevelopments.find((doc) => doc.slug === slug);
  if (!doc) throw new Error(`Post not found for slug: ${slug}`);
  return doc;
}

export const generateStaticParams = async () =>
  allSoftwareDevelopments.map((doc) => ({ slug: doc._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const doc = allSoftwareDevelopments.find(
    (doc) => doc._raw.flattenedPath === `software-development/${params.slug}`
  );
  if (!doc) throw new Error(`Article not found for slug: ${params.slug}`);
  return { title: `Articles | ${doc.title}` };
};

export default async function Page({ params }: { params: { slug: string } }) {
  const doc = await getDocument(params.slug);
  const messages = await getMessages();
  const locale = await getLocale();

  return (
    <article className="p-4 md:p-8">
      <GoBackAndDate
        date={doc.date}
        locale={locale}
        messages={messages}
      />
      <div className="mb-6 overflow-x-auto">
        <MDX code={doc.body.code} />
      </div>
      <GoBackAndDate
        date={doc.date}
        locale={locale}
        messages={messages}
      />
    </article>
  );
}
