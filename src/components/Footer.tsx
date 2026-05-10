export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo + copyright */}
          <div className="flex items-center gap-2 text-gray-900 font-bold text-lg tracking-tight">
            <svg width="22" height="22" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M15.052 0C21.966 0.513 27.486 6.033 27.999 12.947H22.984C22.984 8.552 19.448 5.015 15.052 5.015V0Z" fill="#0f172a"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M0 15.053C0.513 21.967 6.033 27.487 12.947 27.999V22.984C8.552 22.984 5.015 19.448 5.015 15.052H0Z" fill="#64748b"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M0 12.947C0.513 6.033 6.033 0.513 12.947 0V5.015C8.552 5.015 5.015 8.552 5.015 12.947H0Z" fill="#0f172a"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M22.984 15.053C27.486 21.967 21.966 27.487 15.052 27.999V22.984C19.448 22.984 22.984 19.448 22.984 15.052H27.999V15.053Z" fill="#64748b"/>
            </svg>
            <span>Simple</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <a href="#0" className="brand-link">Privacy</a>
            <a href="#0" className="brand-link">Terms</a>
            <a href="#0" className="brand-link">Support</a>
            <a href="#0" className="brand-link">Status</a>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="#0"
              className="text-gray-400 hover:text-gray-900 transition-colors"
              aria-label="X (Twitter)"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
              </svg>
            </a>
            <a
              href="#0"
              className="text-gray-400 hover:text-gray-900 transition-colors"
              aria-label="GitHub"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/>
              </svg>
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          &copy; {new Date().getFullYear()} Simple Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
