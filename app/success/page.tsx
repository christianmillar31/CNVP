"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f1ebdb] px-4">
      <motion.div 
        className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Message Sent!</h2>
        <p className="text-gray-600 mb-8">
          Thank you for contacting Cardinal Valuation. We'll get back to you as soon as possible.
        </p>
        <Link 
          href="/"
          className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  )
} 