export function Testimonial() {
  return (
    <section id="testimonial" className="py-24 bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">

          {/* Quote icon */}
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-900 text-white mb-8">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>

          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-900 leading-relaxed tracking-tight mb-8">
            "Simple has simplified my life in more ways than one. From managing my sites to{' '}
            <em className="not-italic bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
              keeping track of tasks
            </em>
            , it's become my go-to tool for everything."
          </blockquote>

          <div className="flex flex-col items-center gap-3">
            <img
              src="https://i.pravatar.cc/48?img=33"
              alt="Mary Sullivan"
              className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-sm"
            />
            <div className="text-sm">
              <span className="font-semibold text-gray-900">Mary Sullivan</span>
              <span className="mx-1 text-gray-300">/</span>
              <a href="#0" className="text-gray-500 hover:text-blue-600 transition-colors">
                CTO at Microsoft
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
