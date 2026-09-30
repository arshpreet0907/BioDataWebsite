'use client'

import { useState } from 'react'
import { Check, Printer, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ShareActions() {
  const [copied, setCopied] = useState(false)

  async function handleShare() {
    const url = window.location.href
    if (navigator.share) {
      try {
        await navigator.share({ title: document.title, url })
        return
      } catch {
        // user cancelled or share unavailable; fall back to copying
      }
    }
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="sm" onClick={() => window.print()}>
        <Printer aria-hidden="true" />
        <span className="hidden sm:inline">Print / PDF</span>
        <span className="sr-only sm:hidden">Print or save as PDF</span>
      </Button>
      <Button size="sm" onClick={handleShare}>
        {copied ? <Check aria-hidden="true" /> : <Share2 aria-hidden="true" />}
        <span>{copied ? 'Link copied' : 'Share'}</span>
      </Button>
    </div>
  )
}
