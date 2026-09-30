import { ShareActions } from './share-actions'

const links = [
  { href: '#about', label: 'About' },
  { href: '#business', label: 'Business' },
  { href: '#family', label: 'Family' },
  { href: '#partner', label: 'Partner' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="no-print sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 md:px-6">
        <a href="#top" className="flex items-center gap-2 text-primary">
          <span className="font-gurmukhi text-2xl leading-none text-accent" aria-hidden="true">
            ੴ
          </span>
          <span className="font-serif text-lg font-semibold">Biodata</span>
        </a>
        <nav aria-label="Sections" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm text-muted-foreground">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ShareActions />
      </div>
    </header>
  )
}
