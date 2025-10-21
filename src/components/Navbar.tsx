'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: t('navbar.home') },
    { href: '/gallery', label: t('navbar.gallery') },
    { href: '/showroom', label: t('navbar.showroom') },
    { href: '/about', label: t('navbar.aboutUs') },
    { href: '/contact', label: t('navbar.contactUs') },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/image/botanic.png"
              alt="Logo"
              width={70}
              height={70}
              className="object-contain cursor-pointer"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition ${
                  isActive(item.href)
                    ? 'text-green-700 border-b-2 border-green-800'
                    : 'text-gray-800 hover:text-green-800'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="flex gap-2 ml-4">
              <button
                onClick={() => i18n.changeLanguage('en')}
                className={`px-3 py-1 text-sm rounded-md transition ${
                  i18n.language === 'en'
                    ? 'text-white bg-green-700'
                    : 'text-gray-800 bg-gray-100 hover:bg-gray-200'
                }`}
              >
                English
              </button>
              <button
                onClick={() => i18n.changeLanguage('ku')}
                className={`px-3 py-1 text-sm rounded-md transition ${
                  i18n.language === 'ku'
                    ? 'text-white bg-green-700'
                    : 'text-gray-800 bg-gray-100 hover:bg-gray-200'
                }`}
              >
                کوردی
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-800 hover:text-green-800 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col space-y-2 px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)} // Close menu after clicking
                className={`block py-2 text-base font-medium ${
                  isActive(item.href)
                    ? 'text-green-700 border-b border-green-700'
                    : 'text-gray-800 hover:text-green-800'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => {
                  i18n.changeLanguage('en');
                  setMenuOpen(false);
                }}
                className={`px-3 py-1 text-sm rounded-md transition ${
                  i18n.language === 'en'
                    ? 'text-white bg-green-700'
                    : 'text-gray-800 bg-gray-100 hover:bg-gray-200'
                }`}
              >
                English
              </button>
              <button
                onClick={() => {
                  i18n.changeLanguage('ku');
                  setMenuOpen(false);
                }}
                className={`px-3 py-1 text-sm rounded-md transition ${
                  i18n.language === 'ku'
                    ? 'text-white bg-green-700'
                    : 'text-gray-800 bg-gray-100 hover:bg-gray-200'
                }`}
              >
                کوردی
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
