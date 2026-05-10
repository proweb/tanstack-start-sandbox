import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '~/components/Hero'
import { Features } from '~/components/Features'
import { Testimonial } from '~/components/Testimonial'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonial />
    </>
  )
}
