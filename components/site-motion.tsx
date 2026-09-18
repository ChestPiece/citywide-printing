"use client"

import { useRef, type ReactNode } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

type SiteMotionProps = {
  children: ReactNode
}

export const SiteMotion = ({ children }: SiteMotionProps) => {
  const rootRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const root = rootRef.current
      if (!root) return

      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          "[data-reveal], [data-hero], [data-hero-title], [data-work-panel]",
          { clearProps: "all", autoAlpha: 1 }
        )
      })

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const heroTitle = root.querySelector<HTMLElement>("[data-hero-title]")
        if (heroTitle) {
          SplitText.create(heroTitle, {
            type: "words,lines",
            mask: "lines",
            autoSplit: true,
            onSplit(self) {
              return gsap.from(self.words, {
                yPercent: 110,
                duration: 0.55,
                ease: "power3.out",
                stagger: 0.03,
                delay: 0.05,
              })
            },
          })
        }

        gsap.from("[data-hero]", {
          autoAlpha: 0,
          y: 16,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.06,
          delay: 0.2,
        })

        gsap.fromTo(
          "[data-hero-media]",
          { scale: 1.08 },
          { scale: 1, duration: 1.1, ease: "power2.out" }
        )

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.from(el, {
            autoAlpha: 0,
            y: 24,
            duration: 0.55,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          })
        })

        gsap.utils
          .toArray<HTMLElement>("[data-service-row]")
          .forEach((row) => {
            gsap.from(row, {
              autoAlpha: 0,
              y: 20,
              duration: 0.45,
              ease: "power2.out",
              scrollTrigger: {
                trigger: row,
                start: "top 92%",
                toggleActions: "play none none none",
              },
            })
          })

        gsap.utils
          .toArray<HTMLElement>("[data-work-panel]")
          .forEach((panel) => {
            gsap.from(panel, {
              autoAlpha: 0,
              y: 32,
              duration: 0.55,
              ease: "power2.out",
              scrollTrigger: {
                trigger: panel,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            })
          })

        const whyMedia = root.querySelector("[data-parallax]")
        if (whyMedia) {
          gsap.fromTo(
            whyMedia,
            { yPercent: -8 },
            {
              yPercent: 8,
              ease: "none",
              scrollTrigger: {
                trigger: whyMedia.closest("section"),
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          )
        }
      })

      const onLoad = () => ScrollTrigger.refresh()
      window.addEventListener("load", onLoad)
      void document.fonts.ready.then(onLoad)

      return () => {
        window.removeEventListener("load", onLoad)
        mm.revert()
      }
    },
    { scope: rootRef }
  )

  return <div ref={rootRef}>{children}</div>
}
