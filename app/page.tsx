import { Introduction } from "./fragments/Introduction";

//https://vercel.com/blog/building-an-interactive-webgl-experience-in-next-js

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Introduction />
    </main>
  );
}
