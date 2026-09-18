import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { services, site } from "@/lib/site"

const CropMarks = ({ className = "" }: { className?: string }) => (
  <div
    aria-hidden
    className={`pointer-events-none absolute inset-3 border border-ink/10 ${className}`}
  >
    <span className="absolute -top-px -left-px size-3 border-t border-l border-ink/40" />
    <span className="absolute -top-px -right-px size-3 border-t border-r border-ink/40" />
    <span className="absolute -bottom-px -left-px size-3 border-b border-l border-ink/40" />
    <span className="absolute -right-px -bottom-px size-3 border-r border-b border-ink/40" />
  </div>
)

const RegistrationMark = ({ className = "" }: { className?: string }) => (
  <span
    aria-hidden
    className={`inline-flex size-3 items-center justify-center ${className}`}
  >
    <span className="absolute size-2.5 rounded-full border border-current opacity-50" />
    <span className="absolute h-px w-3 bg-current opacity-50" />
    <span className="absolute h-3 w-px bg-current opacity-50" />
  </span>
)

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* 02 Hero — height follows content so CTAs never clip under sticky WhatsApp */}
        <section className="relative isolate overflow-hidden bg-ink text-paper">
          <Image
            src="/assets/large-format.png"
            alt=""
            fill
            priority
            className="object-cover object-[70%_center]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/45 md:bg-gradient-to-r md:from-ink md:via-ink/70 md:to-ink/25" />

          <div className="relative mx-auto flex max-w-[1280px] flex-col justify-center px-5 pt-20 pb-24 md:min-h-[min(78svh,720px)] md:px-8 md:pt-24 md:pb-28">
            <div className="max-w-2xl">
              <p className="mb-3 flex items-center gap-3 font-display text-[11px] tracking-[0.2em] text-paper/70 uppercase md:mb-4 md:text-xs">
                <RegistrationMark className="relative text-paper/70" />
                Print / 01 · {site.area}
              </p>
              <h1 className="font-display text-[clamp(2rem,5.2vw,4.25rem)] leading-[1.02] font-semibold tracking-tight text-balance">
                Printing & Document Services in Mussafah
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-paper/80 md:mt-5 md:text-lg">
                City Wide Printing Services provides printing, photocopying,
                typing and large-format printing from M-37, Mussafah, Abu Dhabi.
              </p>
              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:items-center md:mt-8 md:gap-3">
                <Button
                  asChild
                  size="lg"
                  className="h-11 rounded-lg bg-blue px-5 font-display text-sm font-semibold text-white hover:bg-blue/90 md:h-12 md:text-base"
                >
                  <a
                    href={site.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Your Requirement
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-11 rounded-lg border-paper/30 bg-transparent px-5 font-display text-sm text-paper hover:bg-paper/10 hover:text-paper md:h-12 md:text-base"
                >
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </Button>
              </div>
              <p className="mt-4 text-xs tracking-wide text-paper/65 md:mt-5 md:text-sm">
                {site.hours}
              </p>
            </div>
          </div>
        </section>

        {/* 03 Services */}
        <section id="services" className="scroll-mt-20 bg-paper py-20 md:py-28">
          <div className="mx-auto max-w-[1280px] px-5 md:px-8">
            <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-display text-xs tracking-[0.2em] text-gray uppercase">
                  02 — Services
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-5xl">
                  What we handle
                </h2>
              </div>
              <p className="max-w-md text-base leading-relaxed text-gray">
                Clear, practical services for people and businesses in Mussafah
                who need something printed today.
              </p>
            </div>

            <ul className="divide-y divide-ink/10 border-y border-ink/10">
              {services.map((service) => (
                <li
                  key={service.id}
                  className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 py-7 md:grid-cols-[4rem_1fr_1.2fr] md:items-baseline md:gap-x-10"
                >
                  <span className="font-display text-sm tracking-[0.16em] text-blue">
                    {service.id}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink md:text-2xl">
                    {service.title}
                  </h3>
                  <p className="col-span-2 text-base leading-relaxed text-gray md:col-span-1">
                    {service.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 04 Quick Request */}
        <section className="bg-ink py-20 text-paper md:py-24">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between md:px-8">
            <div className="max-w-xl">
              <p className="font-display text-xs tracking-[0.2em] text-paper/55 uppercase">
                03 — Quick request
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">
                Have something to print?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-paper/75 md:text-lg">
                Send your requirement on WhatsApp. Tell us what you need — we
                will help with the next step.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="h-12 shrink-0 rounded-lg bg-blue px-6 font-display text-base font-semibold text-white hover:bg-blue/90"
            >
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </div>
        </section>

        {/* 05 Why */}
        <section id="why" className="scroll-mt-20 bg-stock py-20 md:py-28">
          <div className="mx-auto grid max-w-[1280px] gap-12 px-5 md:grid-cols-2 md:items-center md:gap-16 md:px-8">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-ink/5 md:aspect-[5/6]">
              <Image
                src="/assets/process-printer.png"
                alt="Professional printing equipment producing documents"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <CropMarks />
            </div>
            <div>
              <p className="font-display text-xs tracking-[0.2em] text-gray uppercase">
                04 — Why City Wide
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-5xl">
                Local, practical, easy to reach
              </h2>
              <ul className="mt-8 space-y-5">
                {[
                  "Located in M-37, Mussafah — near German Automobile",
                  "Open daily, 8 AM to 9 PM",
                  "Printing, photocopying, typing and large-format work",
                  "WhatsApp for quick requirements before you visit",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 border-b border-ink/10 pb-5 text-base leading-relaxed text-ink last:border-0"
                  >
                    <RegistrationMark className="relative mt-1.5 shrink-0 text-blue" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 06 Showcase — editorial board, not equal card grid */}
        <section className="bg-paper py-20 md:py-28">
          <div className="mx-auto max-w-[1280px] px-5 md:px-8">
            <div className="mb-10 flex flex-col gap-3 md:mb-14 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-display text-xs tracking-[0.2em] text-gray uppercase">
                  05 — Work
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-5xl">
                  Print-ready craft
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-gray md:text-base">
                Process, stock, and finished sheets — the physical language of
                the shop.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
              <figure className="group relative md:col-span-7">
                <div className="relative aspect-[5/4] overflow-hidden bg-stock md:aspect-[16/11]">
                  <Image
                    src="/assets/press-detail.png"
                    alt="Close-up of a printing press producing blue-ink output"
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                  <CropMarks />
                </div>
                <figcaption className="mt-3 flex items-baseline justify-between gap-4">
                  <span className="font-display text-xs tracking-[0.16em] text-blue uppercase">
                    01 — Press
                  </span>
                  <span className="text-sm text-gray">Process detail</span>
                </figcaption>
              </figure>

              <figure className="group relative md:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden bg-stock">
                  <Image
                    src="/assets/paper-stack.png"
                    alt="Stack of premium paper stock with a cobalt sheet"
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <CropMarks />
                </div>
                <figcaption className="mt-3 flex items-baseline justify-between gap-4">
                  <span className="font-display text-xs tracking-[0.16em] text-blue uppercase">
                    02 — Stock
                  </span>
                  <span className="text-sm text-gray">Edge & texture</span>
                </figcaption>
              </figure>

              <figure className="group relative md:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden bg-stock md:aspect-[5/4]">
                  <Image
                    src="/assets/print-sheets.png"
                    alt="Printed sheets with registration marks and cobalt accents"
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <CropMarks />
                </div>
                <figcaption className="mt-3 flex items-baseline justify-between gap-4">
                  <span className="font-display text-xs tracking-[0.16em] text-blue uppercase">
                    03 — Proofs
                  </span>
                  <span className="text-sm text-gray">Marks & calibration</span>
                </figcaption>
              </figure>

              <figure className="group relative md:col-span-7">
                <div className="relative aspect-[16/10] overflow-hidden bg-stock">
                  <Image
                    src="/assets/brochure-flatlay.png"
                    alt="Printed brochures and business materials on a drafting surface"
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                  <CropMarks />
                </div>
                <figcaption className="mt-3 flex items-baseline justify-between gap-4">
                  <span className="font-display text-xs tracking-[0.16em] text-blue uppercase">
                    04 — Finish
                  </span>
                  <span className="text-sm text-gray">Collateral set</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* 07 Proof */}
        <section className="border-y border-ink/10 bg-stock py-16 md:py-20">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between md:px-8">
            <div>
              <p className="font-display text-xs tracking-[0.2em] text-gray uppercase">
                06 — Reputation
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                Find us on Google Maps
              </h2>
              <p className="mt-3 max-w-lg text-base text-gray">
                Check current reviews and directions for City Wide Printing
                Services in Mussafah.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 rounded-lg border-ink/20 bg-paper font-display text-ink hover:bg-paper/80"
            >
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                Open in Google Maps
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </div>
        </section>

        {/* 08 Location */}
        <section id="location" className="scroll-mt-20 bg-paper py-20 md:py-28">
          <div className="mx-auto grid max-w-[1280px] gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
            <div>
              <p className="font-display text-xs tracking-[0.2em] text-gray uppercase">
                07 — Location
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-5xl">
                {site.area}
              </h2>
              <dl className="mt-8 space-y-6 text-base">
                <div>
                  <dt className="font-display text-xs tracking-[0.16em] text-gray uppercase">
                    Address
                  </dt>
                  <dd className="mt-2 text-ink">{site.addressLine}</dd>
                  <dd className="mt-1 text-gray">Near German Automobile</dd>
                </div>
                <div>
                  <dt className="font-display text-xs tracking-[0.16em] text-gray uppercase">
                    Hours
                  </dt>
                  <dd className="mt-2 text-ink">Daily · {site.hoursShort}</dd>
                </div>
                <div>
                  <dt className="font-display text-xs tracking-[0.16em] text-gray uppercase">
                    Phone / WhatsApp
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={`tel:${site.phoneTel}`}
                      className="text-ink underline-offset-4 hover:underline"
                    >
                      {site.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-11 rounded-lg bg-blue font-display font-semibold text-white hover:bg-blue/90"
                >
                  <a
                    href={site.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-11 rounded-lg border-ink/20 font-display text-ink"
                >
                  <a href={`tel:${site.phoneTel}`}>Call</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-11 rounded-lg border-ink/20 font-display text-ink"
                >
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Directions
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-stock md:aspect-auto md:min-h-[520px]">
              <Image
                src="/assets/desk-documents.png"
                alt="Document workspace ready for printing and typing work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* 09 Final CTA */}
        <section
          id="contact"
          className="scroll-mt-20 relative overflow-hidden bg-ink py-24 text-paper md:py-32"
        >
          <Image
            src="/assets/shop-workshop.png"
            alt=""
            fill
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ink/70" />
          <div className="relative mx-auto max-w-[1280px] px-5 text-center md:px-8">
            <p className="font-display text-xs tracking-[0.2em] text-paper/55 uppercase">
              08 — Contact
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Need something printed?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-paper/75 md:text-lg">
              Message City Wide Printing Services on WhatsApp.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 h-12 rounded-lg bg-blue px-6 font-display text-base font-semibold text-white hover:bg-blue/90"
            >
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Your Requirement
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      {/* 10 Footer */}
      <footer className="border-t border-paper/10 bg-ink py-12 text-paper">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-5 md:flex-row md:items-start md:justify-between md:px-8">
          <div>
            <p className="font-display text-sm font-semibold tracking-[0.14em]">
              CITY WIDE
            </p>
            <p className="mt-2 text-sm text-paper/65">{site.name}</p>
            <p className="mt-1 text-sm text-paper/65">{site.area}</p>
          </div>
          <div className="text-sm text-paper/65">
            <p>
              <a
                href={`tel:${site.phoneTel}`}
                className="hover:text-paper"
              >
                {site.phoneDisplay}
              </a>
            </p>
            <p className="mt-1">{site.hours}</p>
          </div>
          <p className="text-xs text-paper/45 md:max-w-xs md:text-right">
            Professional printing and document services in Mussafah.
          </p>
        </div>
      </footer>

      {/* Mobile sticky WhatsApp */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-paper/95 p-3 backdrop-blur-md md:hidden">
        <Button
          asChild
          size="lg"
          className="h-12 w-full rounded-lg bg-blue font-display font-semibold text-white hover:bg-blue/90"
        >
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp your requirement"
          >
            WhatsApp Your Requirement
          </a>
        </Button>
      </div>
      <div className="h-20 md:hidden" aria-hidden />
    </div>
  )
}
