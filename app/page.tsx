import { Scene } from "@/components/WebGL/scene";
import { Introduction } from "./fragments/Introduction";

//https://vercel.com/blog/building-an-interactive-webgl-experience-in-next-js

export default function Home() {
  return (
    <main className="flex flex-col items-center flex-1">
      <Scene />
      <Introduction />

      <div className="w-full bg-primary text-primary-foreground py-2 px-4">
        <h1 className="text-3xl font-bold">Hello!</h1>
        <div className="px-4">
          <p>asdasd</p>
          <p>asdasd</p>
          <p>asdasd</p>
        </div>
      </div>

      <div className="py-4">
        <h1 className="text-3xl font-bold">Hello!</h1>
        <div className="px-4">
          <p>asdasd</p>
          <p>asdasd</p>
          <p>asdasd</p>
        </div>
      </div>
    </main>
  );
}
