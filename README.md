# My Portfolio Website
# Theme
https://github.com/pacocoursey/next-themes

This website theme was done using `next-themes`,(you can see how to use it in the documentation page of the website) to install it you just need to run

```bash
npm install next-themes
```
Create a `ThemeProvider` component like the one in this project:

`components/theme-provider/index.tsx`

```tsx
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```
And a `ThemeSwitcher` component, to switch the app's theme:

`components/theme-switcher/index.tsx`

```tsx
"use client";

export function ThemeSwitcher() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          {(theme === "light" || resolvedTheme === "light") && (
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          )}

          {(theme === "dark" || resolvedTheme === "dark") && (
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem]transition-all rotate-0 scale-100" />
          )}

          {theme === "halloween" && (
            <PumpkinMaskIcon className="w-4 h-4 fill-foreground" />
          )}

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("halloween")}>
          Halloween
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```
Wrap the your content with the theme provider component inside the `body` tag

`app/layout.tsx`

```tsx
 <body
        className={cn(
          "relative flex flex-col min-h-screen",
          ScrollbarStyle,
          inter.className
        )}
      >
        <ThemeProvider
            attribute="class"
            themes={['light', 'dark', 'halloween']}
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Navbar />

            <main className="flex-1">{children}</main>
            <Footer />
        </ThemeProvider>
      </body>
```