import { useState } from 'react'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="/"
            aria-label="Simple"
            className="flex items-center gap-2 text-gray-900 font-bold text-lg tracking-tight hover:opacity-80 transition-opacity"
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.052 0C21.966 0.513 27.486 6.033 27.999 12.947H22.984C22.984 8.552 19.448 5.015 15.052 5.015V0Z"
                fill="#0f172a"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 15.053C0.513 21.967 6.033 27.487 12.947 27.999V22.984C8.552 22.984 5.015 19.448 5.015 15.052H0Z"
                fill="#64748b"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 12.947C0.513 6.033 6.033 0.513 12.947 0V5.015C8.552 5.015 5.015 8.552 5.015 12.947H0Z"
                fill="#0f172a"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.984 15.053C27.486 21.967 21.966 27.487 15.052 27.999V22.984C19.448 22.984 22.984 19.448 22.984 15.052H27.999V15.053Z"
                fill="#64748b"
              />
            </svg>
            <span>Simple</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#features" className="brand-link">Features</a>
            <a href="#testimonial" className="brand-link">Testimonials</a>
            <a href="#pricing" className="brand-link">Pricing</a>
            <a href="#docs" className="brand-link">Docs</a>
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#login"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Login
            </a>
            <a
              href="#register"
              className="text-sm font-semibold bg-gray-900 text-white hover:bg-gray-800 transition-colors rounded-lg px-4 py-2"
            >
              Get Started
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-controls="mobile-nav"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="sr-only">Menu</span>
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="20" height="2" rx="1" fill="currentColor"/>
              <rect y="6" width="16" height="2" rx="1" fill="currentColor"/>
              <rect y="12" width="20" height="2" rx="1" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="md:hidden absolute top-16 inset-x-0 bg-white border-b border-gray-100 shadow-lg mobile-nav-enter mobile-nav-enter-active"
        >
          <div className="max-w-6xl mx-auto px-6 py-4 space-y-3">
            <a href="#features" className="block text-sm font-medium text-gray-700 hover:text-gray-900 py-2">Features</a>
            <a href="#testimonial" className="block text-sm font-medium text-gray-700 hover:text-gray-900 py-2">Testimonials</a>
            <a href="#pricing" className="block text-sm font-medium text-gray-700 hover:text-gray-900 py-2">Pricing</a>
            <a href="#docs" className="block text-sm font-medium text-gray-700 hover:text-gray-900 py-2">Docs</a>
            <div className="pt-3 border-t border-gray-100 flex gap-3">
              <a href="#login" className="text-sm font-medium text-gray-600 hover:text-gray-900">Login</a>
              <a href="#register" className="text-sm font-semibold bg-gray-900 text-white rounded-lg px-4 py-2">Get Started</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
