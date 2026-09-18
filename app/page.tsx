import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteMotion } from "@/components/site-motion"
import { services, site, steps, workPanels } from "@/lib/site"

const CropMarks = ({ className = "" }: { className?: string }) => (
  <div
    aria-hidden
    className={`pointer-events-none absolute inset-4 border border-current/20 ${className}`}
  >
    <span className="absolute -top-px -left-px size-3 border-t border-l border-current/50" />
    <span className="absolute -top-px -right-px size-3 border-t border-r border-current/50" />
    <span className="absolute -bottom-px -left-px size-3 border-b border-l border-current/50" />
    <span className="absolute -right-px -bottom-px size-3 border-r border-b border-current/50" />
  </div>
)

const RegistrationMark = ({ className = "" }: { className?: string }) => (
  <span
    aria-hidden
    className={`relative inline-flex size-3 items-center justify-center ${className}`}
  >
    <span className="absolute size-2.5 rounded-full border border-current opacity-50" />
    <span className="absolute h-px w-3 bg-current opacity-50" />
    <span className="absolute h-3 w-px bg-current opacity-50" />
  </span>
)

export default function Home() {
  return (
    <SiteMotion>
      <div id="top" className="relative flex min-h-full flex-col">
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[60] opacity-[0.03] mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        <SiteHeader />

        <main className="flex-1">
          {/* Hook */}
          <section className="relative isolate overflow-hidden bg-ink text-paper">
            <div className="absolute inset-0 overflow-hidden">
              <div data-hero-media className="absolute inset-0 will-change-transform">
                <Image
                  src="/assets/large-format.png"
                  alt=""
                  fill
                  priority
                  className="object-cover object-[70%_center]"
                  sizes="100vw"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/55 md:bg-gradient-to-r md:from-ink md:via-ink/80 md:to-ink/25" />
            <div
              aria-hidden
              className="absolute top-0 bottom-0 left-5 w-px bg-paper/15 md:left-8"
            />

            <div className="relative mx-auto flex max-w-[1280px] flex-col justify-end px-5 pt-16 pb-20 md:min-h-[min(88svh,820px)] md:justify-center md:px-8 md:pt-24 md:pb-28">
              <div className="max-w-3xl">
                <p
                  data-hero
                  className="mb-3 font-display text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.9] font-semibold tracking-[-0.04em] text-paper"
                >
                  CITY WIDE
                </p>
                <p
                  data-hero
                  className="mb-5 flex items-center gap-3 font-display text-[11px] tracking-[0.2em] text-paper/65 uppercase md:text-xs"
                >
                  <RegistrationMark className="text-paper/65" />
                  {site.area}
                </p>
                <h1
                  data-hero-title
                  className="max-w-2xl font-display text-[clamp(1.65rem,3.8vw,3.25rem)] leading-[1.08] font-semibold tracking-[-0.03em] text-balance"
                >
                  Printing & document services when you need them done today
                </h1>
                <p
                  data-hero
                  className="mt-5 max-w-lg text-sm leading-relaxed text-paper/80 md:mt-6 md:text-lg"
                >
                  Printing, photocopying, typing, and large-format work from a
                  local shop in Mussafah — WhatsApp your requirement or walk in.
                </p>
                <div
                  data-hero
                  className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:items-center md:mt-9 md:gap-3"
                >
                  <Button
                    asChild
                    size="lg"
                    className="h-12 rounded-sm bg-blue px-5 font-display text-sm font-semibold text-white hover:bg-blue/90 md:text-base"
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
                    className="h-12 rounded-sm border-paper/35 bg-transparent px-5 font-display text-sm text-paper hover:bg-paper/10 hover:text-paper md:text-base"
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
                <p
                  data-hero
                  className="mt-5 text-xs tracking-wide text-paper/70 md:text-sm"
                >
                  {site.hours}
                </p>
              </div>
            </div>
          </section>

          {/* Problem / stakes */}
          <section className="border-b border-ink/10 bg-stock py-16 md:py-20">
            <div
              data-reveal
              className="mx-auto grid max-w-[1280px] gap-10 px-5 md:grid-cols-12 md:items-center md:gap-12 md:px-8"
            >
              <div className="md:col-span-5">
                <h2 className="font-display text-2xl font-semibold tracking-[-0.03em] text-ink md:text-3xl">
                  Need something printed in Mussafah — without the runaround
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray">
                  Forms, copies, typed documents, posters. Local, open late, and
                  easy to reach on WhatsApp before you visit.
                </p>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden bg-ink/5 md:col-span-7">
                <Image
                  src="/assets/desk-documents.png"
                  alt="Document workspace ready for printing and typing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 58vw"
                />
                <CropMarks className="text-ink" />
              </div>
            </div>
          </section>

          {/* Solution — services */}
          <section id="services" className="scroll-mt-20 bg-paper py-24 md:py-32">
            <div className="mx-auto max-w-[1280px] px-5 md:px-8">
              <div
                data-reveal
                className="mb-14 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between"
              >
                <div>
                  <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] text-ink md:text-5xl">
                    What we handle
                  </h2>
                </div>
                <p className="max-w-md text-base leading-relaxed text-gray">
                  Clear services for people and businesses who need something
                  printed today.
                </p>
              </div>

              <ul className="border-t border-ink/15">
                {services.map((service) => (
                  <li
                    key={service.id}
                    data-service-row
                    className="grid grid-cols-1 gap-6 border-b border-ink/15 py-8 md:grid-cols-[4.5rem_1fr_1.1fr_12rem] md:items-center md:gap-10 md:py-9"
                  >
                    <span className="font-display text-sm tracking-[0.18em] text-blue">
                      {service.id}
                    </span>
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                      {service.title}
                    </h3>
                    <p className="text-base leading-relaxed text-gray">
                      {service.description}
                    </p>
                    <div className="relative hidden aspect-[4/3] overflow-hidden bg-stock md:block">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        className="object-cover"
                        sizes="12rem"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* How it works */}
          <section
            id="process"
            className="scroll-mt-20 border-y border-ink/10 bg-ink py-24 text-paper md:py-28"
          >
            <div className="mx-auto max-w-[1280px] px-5 md:px-8">
              <div data-reveal className="mb-14 max-w-xl md:mb-16">
                <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
                  How it works
                </h2>
                <p className="mt-4 text-base text-paper/70 md:text-lg">
                  Three steps. No forms. No account.
                </p>
              </div>
              <ol className="grid gap-0 border-t border-paper/15 md:grid-cols-3">
                {steps.map((step) => (
                  <li
                    key={step.id}
                    data-reveal
                    className="border-b border-paper/15 py-8 md:border-r md:border-b-0 md:px-8 md:py-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                  >
                    <span className="font-display text-xs tracking-[0.2em] text-blue uppercase">
                      Step {step.id}
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-paper/70">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Proof — work gallery (vertical, no pin) */}
          <section className="bg-paper py-24 md:py-32">
            <div className="mx-auto max-w-[1280px] px-5 md:px-8">
              <div
                data-reveal
                className="mb-12 flex flex-col gap-3 md:mb-16 md:flex-row md:items-end md:justify-between"
              >
                <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] text-ink md:text-5xl">
                  Print-ready craft
                </h2>
                <p className="max-w-sm text-base text-gray">
                  Process, stock, proofs, and finish — the work behind the
                  counter.
                </p>
              </div>

              <div className="grid gap-10 md:grid-cols-2 md:gap-8">
                {workPanels.map((panel) => (
                  <figure
                    key={panel.label}
                    data-work-panel
                    className="relative"
                  >
                    <div className="relative aspect-[5/4] overflow-hidden bg-stock">
                      <Image
                        src={panel.src}
                        alt={panel.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <CropMarks className="text-paper" />
                    </div>
                    <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-t border-ink/10 pt-3">
                      <span className="font-display text-xs tracking-[0.18em] text-blue uppercase">
                        {panel.label}
                      </span>
                      <span className="text-sm text-gray">{panel.caption}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>

          {/* Location + Maps proof */}
          <section id="location" className="scroll-mt-20 bg-stock py-24 md:py-32">
            <div className="mx-auto grid max-w-[1280px] gap-14 px-5 md:grid-cols-2 md:gap-16 md:px-8">
              <div data-reveal>
                <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] text-ink md:text-5xl">
                  {site.area}
                </h2>
                <p className="mt-4 max-w-md text-base text-gray">
                  Near German Automobile. Check directions and current reviews on
                  Google Maps.
                </p>
                <dl className="mt-10 space-y-7 text-base">
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
                      Phone
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
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 rounded-sm border-ink/20 bg-paper font-display text-ink"
                  >
                    <a
                      href={site.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open in Google Maps
                      <ArrowUpRight className="size-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 rounded-sm border-ink/20 font-display text-ink"
                  >
                    <a href={`tel:${site.phoneTel}`}>Call</a>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden bg-ink/5 md:aspect-auto md:min-h-[520px]">
                <div data-parallax className="absolute inset-[-10%] will-change-transform">
                  <Image
                    src="/assets/process-printer.png"
                    alt="Professional printing equipment producing documents"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CropMarks className="text-ink" />
              </div>
            </div>
          </section>

          {/* Close */}
          <section
            id="contact"
            className="scroll-mt-20 relative overflow-hidden bg-ink py-28 text-paper md:py-36"
          >
            <Image
              src="/assets/shop-workshop.png"
              alt=""
              fill
              className="object-cover opacity-20"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-ink/80" />
            <div
              data-reveal
              className="relative mx-auto max-w-[1280px] px-5 text-center md:px-8"
            >
              <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold tracking-[-0.03em] text-balance md:text-6xl">
                Need something printed?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base text-paper/70 md:text-lg">
                Message City Wide on WhatsApp — we will help with the next step.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-10 h-12 rounded-sm bg-blue px-6 font-display text-base font-semibold text-white hover:bg-blue/90"
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

        <footer className="border-t border-paper/10 bg-ink py-14 text-paper">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-5 md:flex-row md:items-start md:justify-between md:px-8">
            <div>
              <p className="font-display text-sm font-semibold tracking-[0.16em]">
                CITY WIDE
              </p>
              <p className="mt-2 text-sm text-paper/65">{site.name}</p>
              <p className="mt-1 text-sm text-paper/65">{site.area}</p>
            </div>
            <div className="text-sm text-paper/65">
              <p>
                <a href={`tel:${site.phoneTel}`} className="hover:text-paper">
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

        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-paper/95 p-3 backdrop-blur-md md:hidden">
          <Button
            asChild
            size="lg"
            className="h-12 w-full rounded-sm bg-blue font-display font-semibold text-white hover:bg-blue/90"
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
    </SiteMotion>
  )
}
