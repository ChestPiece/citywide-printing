"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { site } from "@/lib/site"

const nav = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
] as const

export const SiteHeader = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 px-5 md:px-8">
        <a
          href="#top"
          className="font-display py-3 text-sm font-semibold tracking-[0.14em] text-ink"
          aria-label="City Wide Printing Services home"
        >
          CITY WIDE
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-2 text-sm text-gray transition-colors duration-200 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="lg"
            className="hidden min-h-11 rounded-sm bg-blue px-4 font-display text-sm font-semibold text-white hover:bg-blue/90 md:inline-flex"
          >
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp your printing requirement"
            >
              WhatsApp
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="size-11 border-ink/15 bg-transparent md:hidden"
                aria-label="Open menu"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="gap-0 bg-paper p-0 sm:max-w-sm"
            >
              <SheetHeader className="border-b border-ink/10 px-6 py-5 text-left">
                <SheetTitle className="font-display text-sm font-semibold tracking-[0.14em]">
                  CITY WIDE
                </SheetTitle>
              </SheetHeader>
              <nav
                className="flex flex-col gap-1 px-6 py-6"
                aria-label="Mobile"
              >
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display py-3 text-xl font-medium tracking-tight text-ink transition-colors hover:text-blue"
                  >
                    {item.label}
                  </a>
                ))}
                <Button
                  asChild
                  size="lg"
                  className="mt-6 h-12 w-full rounded-sm bg-blue font-display font-semibold text-white hover:bg-blue/90"
                >
                  <a
                    href={site.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Your Requirement
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
