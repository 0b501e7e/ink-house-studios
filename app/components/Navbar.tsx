'use client';

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { IoMenu, IoClose } from 'react-icons/io5';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black text-white p-4 flex items-center justify-between sticky top-0 z-20">
            <Link href="/" passHref>
                <Image src="/inkhouse.jpg" alt="Ink House Studios" width={50} height={50} />
            </Link>
            {/* Toggle Icon for mobile */}
            <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden z-20">
                {isOpen ? <IoClose size={"1.5em"} className="text-white" /> : <IoMenu size={"1.5em"} className="text-white" />}
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-y-0 right-0 transition duration-300 transform ${isOpen ? "translate-x-0" : "translate-x-full"} bg-black bg-opacity-75 w-64 z-10 sm:hidden`}>
                <div className="flex flex-col items-start pt-16 h-full">
                    <div className="w-full">
                        <Link href="/Portfolio" passHref><span className="py-2 block text-center text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Portfolio</span></Link>
                        <Link href="/Studios" passHref><span className="py-2 block text-center text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Studios</span></Link>
                        <Link href="/Artists" passHref><span className="py-2 block text-center text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Artists</span></Link>
                        <Link href="/Reviews" passHref><span className="py-2 block text-center text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Reviews</span></Link>
                        <Link href="/Booking" passHref><span className="py-2 block text-center text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Booking</span></Link>
                        <Link href="/Locations" passHref><span className="py-2 block text-center text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Locations</span></Link>
                    </div>
                </div>
            </div>

            {/* Links for desktop */}
            <div className="hidden sm:flex gap-4">
                <Link href="/Portfolio" passHref><span className="py-2 block text-center text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Portfolio</span></Link>
                <Link href="/Studios" passHref><span className="py-2 block text-center text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Studios</span></Link>
                <Link href="/Artists" passHref><span className="py-2 block text-center text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Artists</span></Link>
                <Link href="/Reviews" passHref><span className="py-2 block text-center text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Reviews</span></Link>
                <Link href="/Booking" passHref><span className="py-2 block text-center text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Booking</span></Link>
                <Link href="/Locations" passHref><span className="py-2 block text-center text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Locations</span></Link>
            </div>
        </nav>
    );
}
