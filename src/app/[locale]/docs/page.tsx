import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";


export default function PageDocs()
{
  const documentationTranslations = useTranslations('documentation')
    
  return (
    <div className="flex flex-1 justify-center p-4">
      <div className="flex flex-col gap-4 w-full sm:w-11/12 md:w-1/2 lg:w-3/4">
        <Link href="docs/software-development">
          <Card className="hover:border-purple-500 hover:bg-purple-900/10 hover:text-purple-500 transition-colors duration-500">
            <CardHeader>
              <CardTitle>
                {documentationTranslations("software-development.title")}
              </CardTitle>
              <CardDescription>
                {documentationTranslations("software-development.last-update")}
                {new Date(2024, 3, 27).toLocaleDateString()}
              </CardDescription>
              <CardContent className="p-0">
                {documentationTranslations("software-development.description")}
              </CardContent>
            </CardHeader>
          </Card>
        </Link>

        {/* <Link href="https:/google.com" target="_blank">
          <Card className="hover:border-sky-500 hover:bg-sky-900/10 hover:text-sky-500 transition-colors duration-500">
            <CardHeader>
              <CardTitle>Title</CardTitle>
              <CardDescription>Description</CardDescription>
              <CardContent>Content</CardContent>
            </CardHeader>
          </Card>
        </Link>

        <Link href="https:/google.com" target="_blank">
          <Card className="hover:border-emerald-500 hover:bg-emerald-900/10 hover:text-emerald-500 transition-colors duration-500">
            <CardHeader>
              <CardTitle>Title</CardTitle>
              <CardDescription>Description</CardDescription>
              <CardContent>Content</CardContent>
            </CardHeader>
          </Card>
        </Link> */}
      </div>
    </div>
  );
}

