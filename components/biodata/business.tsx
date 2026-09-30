import Image from 'next/image'
import { Truck } from 'lucide-react'
import { biodata } from '@/lib/biodata'
import { DetailList, Section } from './section'

export function Business() {
  const { business, education } = biodata

  return (
    <Section id="business" eyebrow="Profession" title="Education & Business">
      <div className="overflow-hidden rounded-lg border border-border bg-primary text-primary-foreground">
        <div className="relative aspect-[16/7] w-full">
          <Image
            src="/images/fleet.png"
            alt={`Trucks of ${business.name} parked at the company yard`}
            fill
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
        </div>
        <div className="relative -mt-16 px-6 pb-8 md:-mt-20 md:px-10">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <Truck className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-serif text-2xl font-semibold md:text-3xl">{business.name}</h3>
              <p className="text-sm text-primary-foreground/75">
                {business.role} · Since {business.since}
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-3xl text-pretty leading-relaxed text-primary-foreground/85">
            {business.summary}
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-md bg-primary-foreground/15 md:grid-cols-4">
            {business.stats.map((stat) => (
              <div key={stat.label} className="bg-primary px-4 py-4">
                <dt className="text-xs uppercase tracking-wider text-primary-foreground/65">
                  {stat.label}
                </dt>
                <dd className="mt-1 font-serif text-2xl font-semibold text-accent">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mt-8">
        <DetailList items={education} columns={1} />
      </div>
    </Section>
  )
}
