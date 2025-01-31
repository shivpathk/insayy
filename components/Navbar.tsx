"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import type React from "react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white pt-2 md:pt-5">
      <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0">
        <div className="flex justify-between h-16">
          <div className="flex flex-1 bg-background pl-10 pt-5 rounded-t-[2rem]">
            <div className="flex-shrink-0 flex items-center">
              <NavLink href="/">
                <span className="text-3xl font-bold text-primary">Insayy</span>
              </NavLink>
            </div>
            <div className="hidden md:ml-20 md:flex md:space-x-8 items-center">
              <NavLink href="#pricing">Pricing</NavLink>
              <NavLink href="#products">Products</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#contacts">Contacts</NavLink>
            </div>
          </div>
          
          <div className="hidden md:flex items-center pr-10 ml-10">
            <button className="bg-white text-primary px-6 py-2 rounded-xl text-sm font-medium transition-colors shadow-sm border-2 border-primary hover:bg-gray-200">
              Sign up →
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-primary"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-background">
            <div className="w-[80%] pt-3 space-y-1 pl-5 pb-2">
              <MobileNavLink href="#pricing">Pricing</MobileNavLink>
              <MobileNavLink href="#products">Products</MobileNavLink>
              <MobileNavLink href="#about">About</MobileNavLink>
              <MobileNavLink href="#features">Features</MobileNavLink>
              <MobileNavLink href="#contacts">Contacts</MobileNavLink>
            </div>
            <div className="pt-4 pl-8 pb-3 border-t border-gray-200">
              <button className="w-[80%] bg-white text-primary px-4 py-2 rounded-full text-md font-medium hover:bg-gray-200">
                Sign up →
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block px-10 py-2 text-base font-medium text-text-secondary hover:text-text-primary hover:bg-gray-50 rounded-[2rem]"
    >
      {children}
    </Link>
  )
}