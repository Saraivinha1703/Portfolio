import { Button } from "@/components/ui/button";

export function Introduction()
{
    return (
      <div className="flex-1 h-full px-8 py-4">
        <span>Hello World!</span>
        <div>
          <Button variant="secondary">button</Button>
        </div>
      </div>
    );
}