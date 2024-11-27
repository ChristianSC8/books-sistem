import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function LanguageSelector() {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild >
                <p>Laguage</p>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
                <DropdownMenuItem onClick={()=>{}}>
                    🇺🇸 English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={()=>{}}>
                    🇪🇸 Español
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
