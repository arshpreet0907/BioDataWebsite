import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { biodata } from '@/lib/biodata'
import { Section } from './section'

export function Contact() {
  const { contact } = biodata
  const items = [
    { icon: Phone, label: 'Phone', value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
    { icon: MessageCircle, label: 'WhatsApp', value: contact.phone, href: `https://wa.me/${contact.whatsapp}` },
    { icon: Mail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { icon: MapPin, label: 'Address', value: contact.address },
  ]

  return (
    <Section id="contact" eyebrow="Get in touch" title="Contact the Family">
      <div className="rounded-lg border border-border bg-card p-6 md:p-10">
        <p className="text-muted-foreground">
          For further details, please contact{' '}
          <span className="font-medium text-foreground">{contact.person}</span>.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                    {label}
                  </span>
                  <span className="block break-words font-medium">{value}</span>
                </span>
              </>
            )
            return (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 rounded-md p-2 transition-colors hover:bg-muted"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="flex items-start gap-4 p-2">{content}</div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}
