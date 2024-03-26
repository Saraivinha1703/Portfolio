'use client'

import { PiWarning, PiX } from "react-icons/pi";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

type ClosableWarningProps = {
    title: string;
    className?: string;
    description?: string;
    content: string;
}

export function ClosableWarning({ title, className, content, description }: ClosableWarningProps) {
    const [hidden, setHidden] = useState<boolean>(false);
    
    if(!hidden)
    {
        return (
            <Card className={cn("border-amber-500 bg-amber-500/5 text-amber-500 w-full sm:w-4/5 md:w-1/2 hover:animate-pulse", className)}>
            <CardHeader>
            <CardTitle className="text-lg sm:text-xl lg:text-2xl flex justify-between">
                <div className="flex gap-2 items-center">
                <PiWarning size={30} />
                {title}
                </div>
                <Button size="icon" variant="ghost" onClick={() => setHidden(true)}>
                    <PiX size={25} />
                </Button>
            </CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
            </CardHeader>
            <CardContent>{content}</CardContent>
        </Card>
        );
    }
}