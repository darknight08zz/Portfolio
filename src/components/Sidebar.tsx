'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

const NavItem = ({ href, label, number }: { href: string; label: string; number: string }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`group flex items-center justify-between py-2 text-sm uppercase tracking-wider transition-colors duration-200 ${isActive ? 'text-foreground font-bold' : 'text-muted hover:text-foreground'
                }`}
        >
            <span>{label}</span>
            <span className={`text-xs ${isActive ? 'text-foreground' : 'text-gray-300 group-hover:text-muted'}`}>
                {number}
            </span>
        </Link>
    );
};

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Header */}
            <div className="md:hidden fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4 bg-background border-b border-border">
                <span className="font-bold text-lg tracking-tight">UJJWAL PRAJAPATI</span>
                <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
                    {isOpen ? 'CLOSE' : 'MENU'}
                </button>
            </div>

            {/* Sidebar Container */}
            <aside className={`
        fixed top-0 left-0 z-40 h-full w-full md:w-64 bg-background border-r border-border transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        md:block
      `}>
                <div className="flex flex-col h-full p-6 md:p-8">

                    {/* Brand */}
                    <div className="hidden md:block mb-12">
                        <h1 className="text-xl font-bold tracking-tight leading-none">UJJWAL<br />PRAJAPATI</h1>
                        <p className="mt-2 text-xs text-muted max-w-[150px]">
                            Full Stack Developer & UI/UX Design Engineer based in India.
                        </p>
                    </div>

                    {/* Status Badge */}
                    <div className="mb-10 flex items-center gap-2">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                        </span>
                        <span className="text-xs font-medium tracking-wide uppercase text-foreground">
                            Available for work
                        </span>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 space-y-1">
                        <NavItem href="/" label="Home" number="(01)" />
                        <NavItem href="/projects" label="Projects" number="(02)" />
                        <NavItem href="/about" label="About" number="(03)" />
                        <NavItem href="/contact" label="Contact" number="(04)" />
                    </nav>

                    {/* Footer Socials & Theme Toggle */}
                    <div className="mt-auto space-y-6">
                        <div className="flex flex-col gap-2 text-xs text-muted uppercase tracking-wider">
                            <a href="#" className="hover:text-foreground transition-colors">LinkedIn ↗</a>
                            <a href="#" className="hover:text-foreground transition-colors">GitHub ↗</a>
                            <a href="#" className="hover:text-foreground transition-colors">Resume ↗</a>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-[10px] text-gray-400">
                                © {new Date().getFullYear()} Ujjwal Prajapati.
                            </p>
                            <ThemeToggle />
                        </div>
                    </div>

                </div>
            </aside>
        </>
    );
};
