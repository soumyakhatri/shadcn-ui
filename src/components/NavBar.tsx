import { LogOut, Moon, Settings, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ThemeToggleButton from './custom-components/ThemeToggleButton'
import { SidebarTrigger } from './ui/sidebar'

function NavBar() {
    return (
        <nav className='p-4 flex justify-between items-center'>
            {/* RIGHT SIDE */}
            <SidebarTrigger/>
            {/* LEFT SIDE */}
            <div className="flex items-center gap-4">
                <Link href="/">Dashboard</Link>
                {/* THEME MENU */}
                <ThemeToggleButton/>
                {/* USER MENU */}
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={10}>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><User className='h-[1.2rem] w-[1.2rem] mr-2'/> User</DropdownMenuItem>
                        <DropdownMenuItem><Settings className='h-[1.2rem] w-[1.2rem] mr-2'/> Settings</DropdownMenuItem>
                        <DropdownMenuItem variant='destructive'><LogOut className='h-[1.2rem] w-[1.2rem] mr-2'/> Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    )
}

export default NavBar