import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function PageDocs()
{
    return (
      <div className="flex flex-1 justify-center p-8">
        <div className="flex w-1/2 flex-col gap-4">
          <Link href="https:/google.com" target="_blank">
            <Card className="hover:border-purple-500 hover:bg-purple-900/10 hover:text-purple-500 transition-colors duration-500">
              <CardHeader>
                <CardTitle>Title</CardTitle>
                <CardDescription>Description</CardDescription>
                <CardContent>Content</CardContent>
              </CardHeader>
            </Card>
          </Link>

          <Link href="https:/google.com" target="_blank">
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
          </Link>
        </div>
      </div>
    );
}