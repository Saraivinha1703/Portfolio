//position: [horizontal, vertical, depth]
// import { Scene } from "@/components/WebGL/scene";
import Image from "next/image"

export function Introduction() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] justify-center items-center z-10">
      {/* <Scene /> */}
      <div className="flex flex-col gap-4 items-center">
        <div className="relative rounded-full w-40 h-40 border-4 border-primary/70 overflow-hidden">
          <Image fill alt="me" src="/images/cat.jpg" />
        </div>

        <div className="flex flex-col items-center gap-2">
          <h1 className="text-4xl font-extralight">
            Carlos Alberto Saraiva Neto
          </h1>
          <h2 className="text-xl font-medium">
            Student and Software Developer
          </h2>
        </div>
      </div>
    </div>
  );
}
