import { biodata } from '@/lib/biodata'
import { SiteHeader } from '@/components/biodata/site-header'
import { Hero } from '@/components/biodata/hero'
import { DetailList, Section } from '@/components/biodata/section'
import { Business } from '@/components/biodata/business'
import { Contact } from '@/components/biodata/contact'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />

        <Section id="about" eyebrow="Personal" title="Personal Details" className="border-t border-border">
          <DetailList items={biodata.personal} />
          <div className="mt-8">
            <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Interests
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {biodata.interests.map((interest) => (
                <li
                  key={interest}
                  className="rounded-full border border-accent/50 bg-card px-4 py-1.5 text-sm"
                >
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Business />

        <Section id="family" eyebrow="Parivaar" title="Family Background">
          <DetailList items={biodata.family} columns={1} />
        </Section>

        <Section id="partner" eyebrow="Looking for" title="Partner Preferences">
          <DetailList items={biodata.expectations} />
        </Section>

        <Contact />
      </main>

      <footer className="border-t border-border py-10 text-center">
        <p className="font-gurmukhi text-lg text-primary" lang="pa">
          ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖਾਲਸਾ, ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫਤਹਿ
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          Waheguru Ji Ka Khalsa, Waheguru Ji Ki Fateh
        </p>
        <p className="mt-2 font-serif text-sm italic text-accent">
          - Waheguru Bhala Kare -
        </p>
      </footer>
    </>
  )
}
