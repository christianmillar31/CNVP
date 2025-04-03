import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="mb-4">Could not find requested resource</p>
        <Link 
          href="/"
          className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 inline-block"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
} 