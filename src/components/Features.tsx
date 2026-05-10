export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-[1.2]">
            Simple helps your teams work more{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              efficiently together
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <FeatureCard
            icon={
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z" fill="#3b82f6"/>
              </svg>
            }
            title="Instant Analytics"
            desc="Collect essential insights about how visitors are using your site with in-depth page view metrics like pages, referring sites, and more."
          />

          <FeatureCard
            icon={
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z" fill="#3b82f6"/>
              </svg>
            }
            title="Metadata"
            desc="Collect essential insights about how visitors are using your site with in-depth page view metrics like pages, referring sites, and more."
          />

          <FeatureCard
            icon={
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.248 6.285a1 1 0 0 1-1.916-.57A8.014 8.014 0 0 1 5.715.332a1 1 0 0 1 .57 1.916 6.014 6.014 0 0 0-4.037 4.037Z" opacity=".3" fill="#3b82f6"/>
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1.715-6.752a1 1 0 0 1 .57-1.916 8.014 8.014 0 0 1 5.383 5.383 1 1 0 1 1-1.916.57 6.014 6.014 0 0 0-4.037-4.037Zm4.037 7.467a1 1 0 1 1 1.916.57 8.014 8.014 0 0 1-5.383 5.383 1 1 0 1 1-.57-1.916 6.014 6.014 0 0 0 4.037-4.037Zm-7.467 4.037a1 1 0 1 1-.57 1.916 8.014 8.014 0 0 1-5.383-5.383 1 1 0 1 1 1.916-.57 6.014 6.014 0 0 0 4.037 4.037Z" fill="#3b82f6"/>
              </svg>
            }
            title="Automation"
            desc="Streamline your workflows with smart automation rules that save time and reduce manual tasks across your entire team."
          />

          <FeatureCard
            icon={
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0a1 1 0 0 1 1 1v5.268c0 .597.358 1.133.89 1.37l4.345 1.87a1 1 0 0 1 0 1.84l-4.345 1.87a1.5 1.5 0 0 0-.89 1.37V15a1 1 0 0 1-2 0v-5.412a1.5 1.5 0 0 0-.89-1.37l-4.345-1.87a1 1 0 0 1 0-1.84l4.345-1.87A1.5 1.5 0 0 0 7 6.268V1a1 1 0 0 1 1-1Z" fill="#3b82f6"/>
              </svg>
            }
            title="AI Assistance"
            desc="Leverage built-in AI to generate content, suggest improvements, and help you iterate faster than ever before."
          />

          <FeatureCard
            icon={
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM0 15a6 6 0 0 1 12 0H0Z" fill="#3b82f6"/>
              </svg>
            }
            title="Team Management"
            desc="Invite unlimited team members, assign roles, and manage permissions all from a single unified dashboard."
          />

          <FeatureCard
            icon={
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8ZM8 4a1 1 0 0 0 0 2 2 2 0 0 1 0 4 1 1 0 1 0 0 2 4 4 0 0 0 0-8Z" fill="#3b82f6"/>
              </svg>
            }
            title="Integrations"
            desc="Connect with your favorite tools like Slack, GitHub, and Figma to keep everything in sync automatically."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <article className="group p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-xl hover:shadow-gray-900/5 hover:border-gray-200 transition-all duration-300 hover:-translate-y-1">
      <div className="w-10 h-10 rounded-xl bg-blue-50 items-center justify-center flex mb-4 group-hover:bg-blue-100 transition-colors">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </article>
  )
}
