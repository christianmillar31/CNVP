'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Something went wrong!</h2>
        <button
          className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  )
} 