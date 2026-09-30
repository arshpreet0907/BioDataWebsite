import type { Detail } from '@/lib/biodata'
import { cn } from '@/lib/utils'

export function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id: string
  eyebrow: string
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn('mx-auto max-w-5xl scroll-mt-16 px-4 py-12 md:px-6 md:py-16', className)}
    >
      <div className="mb-8 flex items-end gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
          <h2
            id={`${id}-title`}
            className="mt-2 font-serif text-3xl font-semibold text-primary md:text-4xl"
          >
            {title}
          </h2>
        </div>
        <span className="mb-3 h-px flex-1 bg-border" aria-hidden="true" />
      </div>
      {children}
    </section>
  )
}

export function DetailList({ items, columns = 2 }: { items: Detail[]; columns?: 1 | 2 }) {
  return (
    <dl
      className={cn(
        'grid gap-x-10 rounded-lg border border-border bg-card px-5 md:px-8',
        columns === 2 && 'md:grid-cols-2',
      )}
    >
      {items.map((item) => (
        <div
          key={item.label}
          className="flex flex-col gap-1 border-b border-border/70 py-4 last:border-b-0 sm:flex-row sm:gap-4 md:[&:nth-last-child(2):nth-child(odd)]:border-b-0"
        >
          <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground sm:w-36 sm:shrink-0 sm:pt-0.5">
            {item.label}
          </dt>
          <dd className="text-pretty font-medium">{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}
