import Link from "next/link"

export function Navigation() {
  return (
    <header className="fixed w-full bg-white/95 backdrop-blur border-b z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-semibold">Cardinal North Valuation</span>
          </Link>
          
          <div className="hidden md:flex gap-8">
            <Link 
              href="#services" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Services
            </Link>
            <Link 
              href="#team" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Team
            </Link>
            <Link 
              href="#about" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </Link>
            <Link 
              href="#contact" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
} 