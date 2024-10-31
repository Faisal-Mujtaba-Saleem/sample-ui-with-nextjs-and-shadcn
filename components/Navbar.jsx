"use client";
import Link from 'next/link'
import { Button } from './ui/button'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from './theme-btn';


export default function Navbar() {
    return (
        <nav className="bg-background/50 border-b border-gray-200 sticky top-0 w-full backdrop-blur">
            <div className="container mx-auto p-4 flex justify-between">
                <div className="flex items-center">
                    <Link href="/" className="text-2xl font-semibold flex items-center justify-center rounded-full bg-gray-300/50 px-4 py-2 transition-colors hover:bg-gray-400/50">
                        TechBlog
                    </Link>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <Link href="/" className="hover:scale-105 hover:font-semibold transition-transform duration-300">
                        Home
                    </Link>
                    <Link href="/about" className="hover:scale-105 hover:font-semibold transition-transform duration-300">
                        About
                    </Link>
                    <Link href="/blog" className="hover:scale-105 hover:font-semibold transition-transform duration-300">
                        Blog
                    </Link>
                    <Link href="/contact" className="hover:scale-105 hover:font-semibold transition-transform duration-300">
                        Contact
                    </Link>
                    <div className="auth-btns flex items-center gap-2">
                        <Button variant="outline">Login</Button>
                        <Button variant="outline">Signup</Button>
                        <ModeToggle />
                    </div>
                </div>
                <div className="md:hidden flex items-center gap-2">
                    <Sheet>
                        <span id='mode-toggle'>
                            <ModeToggle className />
                        </span>

                        <SheetTrigger className="flex items-center px-3 py-2 border rounded text-gray-600 hover:text-gray-900"
                        >
                            <svg
                                className="fill-current h-3 w-3"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </SheetTrigger>

                        <SheetContent>
                            <SheetHeader className="p-4">
                                <SheetTitle>TechBlog</SheetTitle>
                                <SheetDescription>
                                </SheetDescription>
                            </SheetHeader>
                            <div className="flex flex-col items-center gap-5">
                                <Link href="/" className="text-gray-600 hover:text-gray-950">
                                    Home
                                </Link>
                                <Link href="/about" className="text-gray-600 hover:text-gray-950">
                                    About
                                </Link>
                                <Link href="/blog" className="text-gray-600 hover:text-gray-950">
                                    Blog
                                </Link>
                                <Link href="/contact" className="text-gray-600 hover:text-gray-950">
                                    Contact
                                </Link>
                                <div className="auth-btns">
                                    <Button className="mx-1 text-xs" variant="outline">Login</Button>
                                    <Button className="mx-1 text-xs" variant="outline">Signup</Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}


