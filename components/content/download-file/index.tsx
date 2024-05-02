import { PiArrowDown, PiFile } from "react-icons/pi";

type DownloadFileProps = {
  src: string;
  filename: string;
};

export function DownloadFile({ filename, src }: DownloadFileProps) {
  
    return (
      <div className="flex w-full justify-center p-4 sm:py-4">
        <div className="flex justify-between items-center p-2 ring-1 ring-input rounded-md w-full bg-background transition-all duration-300 sm:p-4 sm:w-4/5 xl:w-1/2 sm:hover:ring-primary sm:hover:bg-gradient-to-tr sm:hover:from-secondary/10 sm:hover:to-primary/10">
          <div className="flex gap-4 items-center sm:gap-8 lg:gap-12">
            <PiFile className="w-8 h-8 p-1 border-1 border-input rounded-md sm:w-12 sm:h-12 sm:p-2 sm:border-2" />
            <code className="rounded-md bg-accent font-light px-2 text-xs sm:text-sm lg:text-base">
              {filename}
            </code>
          </div>
          <a
            href={src}
            download={true}
            className="transition-all duration-300 p-[0.35rem] border border-input rounded-sm active:text-secondary active:border-secondary active:bg-secondary/20 sm:hover:text-secondary sm:hover:border-secondary sm:hover:bg-secondary/20"
          >
            <PiArrowDown size={20} />
          </a>
        </div>
      </div>
    );
}
