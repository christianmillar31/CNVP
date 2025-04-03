"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex flex-col group">
            <span className={`text-2xl font-bold tracking-tight transition-colors ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}>
              Cardinal North
            </span>
            <span className={`text-sm font-medium transition-colors ${
              isScrolled ? "text-red-600" : "text-red-400"
            }`}>
              Valuation Partners
            </span>
          </Link>
          
          <div className="hidden md:flex gap-8">
            <Link 
              href="#services" 
              className={`hover:text-red-600 transition-colors ${
                isScrolled ? "text-gray-600" : "text-white"
              }`}
            >
              Services
            </Link>
            <Link 
              href="#team" 
              className={`hover:text-red-600 transition-colors ${
                isScrolled ? "text-gray-600" : "text-white"
              }`}
            >
              Team
            </Link>
            <Link 
              href="#about" 
              className={`hover:text-red-600 transition-colors ${
                isScrolled ? "text-gray-600" : "text-white"
              }`}
            >
              About
            </Link>
            <Link 
              href="#contact" 
              className={`hover:text-red-600 transition-colors ${
                isScrolled ? "text-gray-600" : "text-white"
              }`}
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
} 