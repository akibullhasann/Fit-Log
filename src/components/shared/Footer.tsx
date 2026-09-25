import Link from 'next/link';
import logo from "@/assets/logo.png";
import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-[#1A1D22] border-t border-[#292D35] px-8 py-6 mt-6">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-white">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image src={logo} alt="FitLog Logo" width={28} height={28} />
                    <span className="text-lg font-bold tracking-wide">FITLOG</span>
                </Link>

                {/* Copyright */}
                <p className="text-sm text-[#AEB5C0]">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
};

export default Footer;