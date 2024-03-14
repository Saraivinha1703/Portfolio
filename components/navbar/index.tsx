import { HomeIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { ThemeSwitcher } from "../theme-switcher";
import Link from "next/link";

export function Navbar() {

  return (
    <nav className="flex top-0 justify-between items-center p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky z-30 w-full h-16 bg-background border-b border-input">
      <Link href="/">
        <div className="text-2xl font-extralight text-transparent bg-clip-text transition duration-300 bg-foreground hover:bg-gradient-to-br hover:from-purple-400 hover:to-rose-500">
          <h1 className="">Me</h1>
        </div>
      </Link>

      <div className="flex justify-between items-center w-1/3">
        <div className="flex gap-4">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/docs" className="hover:underline">
            Documentation
          </Link>
        </div>

        <div className="flex items-center">
          <Link
            className="border-r border-input px-1"
            href="https://www.linkedin.com/in/carlos-saraiva-neto/"
            target="_blank"
          >
            <Button variant="ghost" size="icon">
              <LinkedInLogoIcon className="h-4 w-4" />
            </Button>
          </Link>

          <Link
            className="border-r border-input px-1"
            href="https://github.com/Saraivinha1703"
            target="_blank"
          >
            <Button variant="ghost" size="icon">
              <GitHubLogoIcon className="h-4 w-4" />
            </Button>
          </Link>

          <div className="px-1">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
