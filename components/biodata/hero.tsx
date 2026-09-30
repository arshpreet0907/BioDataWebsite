import Image from 'next/image'
import { MapPin, Briefcase, GraduationCap } from 'lucide-react'
import { biodata } from '@/lib/biodata'

export function Hero() {
  const quickFacts = [
    { icon: Briefcase, text: `${biodata.business.role}, ${biodata.business.name}` },
    { icon: GraduationCap, text: biodata.education[0].value.split(' - ')[0] },
    { icon: MapPin, text: biodata.location },
  ]

  return (
    <section id="top" className="mx-auto max-w-5xl px-4 pt-10 pb-12 md:px-6 md:pt-16 md:pb-20">
      <div className="mb-10 flex flex-col items-center text-center">
        <p className="font-gurmukhi text-4xl text-accent md:text-5xl" lang="pa">
          ੴ
        </p>
        <p className="mt-2 font-gurmukhi text-sm tracking-wide text-muted-foreground" lang="pa">
          ਸਤਿਨਾਮੁ ਵਾਹਿਗੁਰੂ
        </p>
        <div className="mt-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="h-px w-10 bg-accent" aria-hidden="true" />
          Marriage Biodata
          <span className="h-px w-10 bg-accent" aria-hidden="true" />
        </div>
      </div>

      <div className="grid items-center gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-14">
        <div className="relative mx-auto w-full max-w-sm">
          <div
            className="absolute -inset-3 rounded-t-full border border-accent/60"
            aria-hidden="true"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-muted">
            <Image
              src="/images/portrait.png"
              alt={`Portrait of ${biodata.name}`}
              fill
              priority
              sizes="(min-width: 768px) 384px, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="text-center md:text-left">
          <h1 className="font-serif text-5xl font-semibold leading-tight text-balance text-primary md:text-6xl">
            {biodata.name}
          </h1>
          <p className="mt-3 text-sm uppercase tracking-[0.2em] text-accent-foreground/70">
            {biodata.tagline}
          </p>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            {biodata.intro}
          </p>
          <ul className="mt-8 flex flex-col gap-3 text-sm">
            {quickFacts.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center justify-center gap-3 md:justify-start">
                <span className="flex size-8 items-center justify-center rounded-full bg-secondary text-primary">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
